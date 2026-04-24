"use server";

import { supabase } from "@/lib/supabase";

export type InventoryResult =
  | { success: true }
  | { success: false; error: string };

export async function decrementStock(
  productSlug: string,
  size: string,
  quantity: number
): Promise<InventoryResult> {
  // 1. Get product ID from slug
  const { data: product, error: productError } = await supabase
    .from("products")
    .select("id")
    .eq("slug", productSlug)
    .single();

  if (productError || !product) {
    return { success: false, error: "Product not found." };
  }

  // 2. Get current stock for this SKU
  const { data: sku, error: skuError } = await supabase
    .from("product_skus")
    .select("id, stock")
    .eq("product_id", product.id)
    .eq("size", size)
    .single();

  if (skuError || !sku) {
    return { success: false, error: "This size is not available." };
  }

  if (sku.stock < quantity) {
    return {
      success: false,
      error:
        sku.stock === 0
          ? "This item is sold out."
          : `Only ${sku.stock} item${sku.stock !== 1 ? "s" : ""} remaining.`,
    };
  }

  // 3. Decrement stock
  const { error: updateError } = await supabase
    .from("product_skus")
    .update({ stock: sku.stock - quantity })
    .eq("id", sku.id);

  if (updateError) {
    return { success: false, error: "Failed to update inventory." };
  }

  return { success: true };
}
