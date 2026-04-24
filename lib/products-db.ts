import { supabase } from "./supabase";
import type { ProductData, ProductSize } from "./products";
import type { ListProduct } from "@/components/product/ProductListCard";

// ── DB row types ──────────────────────────────────────────────

type DbProduct = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
  images: string[];
  details: string[];
  care_instructions: string[];
  product_skus: { size: string; stock: number }[];
  product_colors: { color_name: string; hex: string; linked_slug: string }[];
  product_related: { related_slug: string; display_order: number }[];
};

// ── Helpers ───────────────────────────────────────────────────

const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "XXL",
  "24.0", "25.0", "26.0", "27.0", "28.0", "One Size"];

function stockToStatus(n: number): ProductSize["stock"] {
  if (n === 0) return "out-of-stock";
  if (n <= 5)  return "low-stock";
  return "in-stock";
}

function mapToProductData(p: DbProduct): ProductData {
  return {
    id:    p.slug,
    name:  p.name,
    brand: p.brand,
    price: p.price,
    images: p.images.length > 0 ? p.images : [p.image_url],
    colors: (p.product_colors ?? []).map((c) => ({
      name:      c.color_name,
      hex:       c.hex,
      productId: c.linked_slug,
    })),
    sizes: (p.product_skus ?? [])
      .sort((a, b) => SIZE_ORDER.indexOf(a.size) - SIZE_ORDER.indexOf(b.size))
      .map((s) => ({ label: s.size, stock: stockToStatus(s.stock) })),
    category:         p.category,
    description:      p.description,
    details:          p.details,
    careInstructions: p.care_instructions,
    related: (p.product_related ?? [])
      .sort((a, b) => a.display_order - b.display_order)
      .map((r) => r.related_slug),
  };
}

// ── Public API ────────────────────────────────────────────────

export async function getProductsForListing(): Promise<ListProduct[]> {
  const { data, error } = await supabase
    .from("products")
    .select("slug, name, brand, price, image_url, category")
    .order("id", { ascending: false });

  if (error || !data) {
    console.error("Supabase error in getProductsForListing:", error);
    return [];
  }

  return data.map((p) => ({
    id:       p.slug,
    name:     p.name,
    brand:    p.brand,
    price:    p.price,
    image:    p.image_url,
    category: p.category,
  }));
}

export async function getProductDetail(slug: string): Promise<ProductData | null> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      product_skus(size, stock),
      product_colors(color_name, hex, linked_slug),
      product_related(related_slug, display_order)
    `)
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return mapToProductData(data as DbProduct);
}

export async function getRelatedProductsDb(slugs: string[]): Promise<ProductData[]> {
  if (slugs.length === 0) return [];

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      product_skus(size, stock),
      product_colors(color_name, hex, linked_slug),
      product_related(related_slug, display_order)
    `)
    .in("slug", slugs);

  if (error || !data) return [];
  return data.map((p) => mapToProductData(p as DbProduct));
}
