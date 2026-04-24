"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconHeart,
  IconShoppingBag,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import type { ProductData } from "@/lib/products";
import { decrementStock } from "@/app/actions/inventory";

interface Props {
  product: ProductData;
}

const LIGHT_HEXES = new Set(["#f5f5f4", "#e7e5e4", "#c9b99a", "#a8a29e"]);

export default function ProductInfo({ product }: Props) {
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [toast, setToast] = useState<{ visible: boolean; text: string }>({
    visible: false,
    text: "",
  });

  const inWishlist = isInWishlist(product.id);
  const activeColor = product.colors.find((c) => c.productId === product.id);
  const selectedSizeData = selectedSize
    ? product.sizes.find((s) => s.label === selectedSize)
    : null;

  const showToast = (text: string) => {
    setToast({ visible: true, text });
    setTimeout(() => setToast({ visible: false, text: "" }), 2500);
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }

    const result = await decrementStock(product.id, selectedSize, quantity);

    if (!result.success) {
      showToast(result.error);
      return;
    }

    addItem(
      {
        id: `${product.id}-${selectedSize}`,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: activeColor?.name ?? "",
      },
      quantity
    );
    showToast("Added to cart");
  };

  const handleToggleWishlist = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      size: selectedSize ?? "—",
      color: activeColor?.name ?? "",
    });
    if (!inWishlist) showToast("Added to wishlist");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Category + Brand */}
      <p
        style={{
          fontSize: "10px",
          letterSpacing: "0.3em",
          color: "#a8a29e",
          textTransform: "uppercase",
        }}
      >
        {product.category} · {product.brand}
      </p>

      {/* Product name */}
      <h1
        className="font-light text-stone-900 uppercase"
        style={{
          fontFamily: "var(--font-brand)",
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          letterSpacing: "0.08em",
          lineHeight: 1.15,
          marginTop: "-0.25rem",
        }}
      >
        {product.name}
      </h1>

      {/* Price + stock */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
        <p style={{ fontSize: "15px", color: "#1c1917", letterSpacing: "0.05em" }}>
          ¥{product.price.toLocaleString()}
          <span style={{ fontSize: "10px", color: "#a8a29e", marginLeft: "0.4rem" }}>
            incl. tax
          </span>
        </p>
        {selectedSizeData && (
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color:
                selectedSizeData.stock === "in-stock"
                  ? "#5a7f5e"
                  : selectedSizeData.stock === "low-stock"
                  ? "#b07e2a"
                  : "#a8a29e",
            }}
          >
            {selectedSizeData.stock === "in-stock"
              ? "● In Stock"
              : selectedSizeData.stock === "low-stock"
              ? "● Low Stock"
              : "× Out of Stock"}
          </p>
        )}
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #e7e5e4" }} />

      {/* Color selection */}
      <div>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#a8a29e",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Color:{" "}
          <span style={{ color: "#1c1917" }}>{activeColor?.name}</span>
        </p>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {product.colors.map((color) => {
            const isActive = color.productId === product.id;
            const isLight = LIGHT_HEXES.has(color.hex);
            return (
              <Link
                key={color.productId}
                href={`/products/${color.productId}`}
                title={color.name}
                style={{
                  display: "block",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: color.hex,
                  border: isLight ? "1px solid #c4c0bc" : "1px solid transparent",
                  boxShadow: isActive
                    ? "0 0 0 1px #d6d3d1, 0 0 0 2.5px #1c1917"
                    : "none",
                  flexShrink: 0,
                  transition: "box-shadow 0.15s ease",
                }}
                aria-label={color.name}
              />
            );
          })}
        </div>
      </div>

      {/* Size selection */}
      <div>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#a8a29e",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Size:{" "}
          <span style={{ color: "#1c1917" }}>{selectedSize ?? "—"}</span>
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {product.sizes.map((size) => {
            const isSelected = selectedSize === size.label;
            const isOOS = size.stock === "out-of-stock";
            return (
              <button
                key={size.label}
                onClick={() => {
                  if (!isOOS) {
                    setSelectedSize(size.label);
                    setSizeError(false);
                  }
                }}
                disabled={isOOS}
                style={{
                  width: "52px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: isSelected
                    ? "1px solid #1c1917"
                    : sizeError && !selectedSize
                    ? "1px solid #b07e2a"
                    : "1px solid #c4c0bc",
                  background: isSelected ? "#1c1917" : "transparent",
                  color: isSelected ? "white" : isOOS ? "#c4c0bc" : "#1c1917",
                  cursor: isOOS ? "not-allowed" : "pointer",
                  textDecoration: isOOS ? "line-through" : "none",
                  transition: "all 0.15s ease",
                }}
              >
                {size.label}
              </button>
            );
          })}
        </div>
        {sizeError && !selectedSize && (
          <p
            style={{
              fontSize: "10px",
              color: "#b07e2a",
              marginTop: "0.5rem",
              letterSpacing: "0.08em",
            }}
          >
            Please select a size.
          </p>
        )}
      </div>

      {/* Quantity */}
      <div>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#a8a29e",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Quantity
        </p>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid #c4c0bc",
          }}
        >
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1c1917",
            }}
          >
            <IconMinus size={13} stroke={1.5} />
          </button>
          <span
            style={{
              width: "40px",
              textAlign: "center",
              fontSize: "12px",
              color: "#1c1917",
              letterSpacing: "0.05em",
            }}
          >
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1c1917",
            }}
          >
            <IconPlus size={13} stroke={1.5} />
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          style={{
            width: "100%",
            padding: "1rem",
            background: "#1c1917",
            color: "white",
            border: "1px solid #1c1917",
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#44403c")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1c1917")}
        >
          <IconShoppingBag size={15} stroke={1.5} />
          Add to Cart
        </button>

        {/* Wishlist */}
        <button
          onClick={handleToggleWishlist}
          style={{
            width: "100%",
            padding: "1rem",
            background: "transparent",
            color: inWishlist ? "#1c1917" : "#78716c",
            border: "1px solid #c4c0bc",
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "border-color 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#1c1917";
            e.currentTarget.style.color = "#1c1917";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#c4c0bc";
            e.currentTarget.style.color = inWishlist ? "#1c1917" : "#78716c";
          }}
        >
          <IconHeart
            size={15}
            stroke={1.5}
            fill={inWishlist ? "#1c1917" : "none"}
          />
          {inWishlist ? "Saved" : "Save to Wishlist"}
        </button>
      </div>

      {/* Toast notification */}
      <div
        role="status"
        aria-live="polite"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "clamp(0.75rem, 2vw, 2.5rem)",
          background: "#1c1917",
          color: "white",
          padding: "0.875rem 1.5rem",
          fontSize: "11px",
          letterSpacing: "0.1em",
          zIndex: 200,
          opacity: toast.visible ? 1 : 0,
          transform: toast.visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: "none",
        }}
      >
        {toast.text}
      </div>
    </div>
  );
}
