"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconHeart, IconShoppingBag } from "@tabler/icons-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export interface ListProduct {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductListCard({ product }: { product: ListProduct }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      size: "—",
      color: "—",
    });
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      size: "M",
      color: "—",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div>
      {/* Image + heart overlay */}
      <div style={{ position: "relative" }}>
        <Link href={`/products/${product.id}`}>
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              background: "#e7e5e4",
              overflow: "hidden",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 50vw, 25vw"
              style={{ transition: "transform 0.5s ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
            />
          </div>
        </Link>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          style={{
            position: "absolute",
            top: "0.625rem",
            right: "0.625rem",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(250,250,249,0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "none",
            cursor: "pointer",
            color: inWishlist ? "#1c1917" : "#ffffff",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
          onMouseLeave={(e) => (e.currentTarget.style.color = inWishlist ? "#1c1917" : "#ffffff")}
        >
          <IconHeart size={14} stroke={1.5} fill={inWishlist ? "#1c1917" : "none"} />
        </button>
      </div>

      {/* Info */}
      <div style={{ marginTop: "0.75rem" }}>
        <p
          style={{
            fontSize: "9px",
            letterSpacing: "0.25em",
            color: "#a8a29e",
            textTransform: "uppercase",
            marginBottom: "2px",
          }}
        >
          {product.brand}
        </p>
        <Link href={`/products/${product.id}`}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.05em",
              color: "#1c1917",
              textTransform: "uppercase",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product.name}
          </p>
        </Link>

        {/* Price + Add to Cart */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0.5rem",
          }}
        >
          <p style={{ fontSize: "11px", color: "#78716c" }}>
            ¥{product.price.toLocaleString()}
          </p>
          <button
            onClick={handleAddToCart}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "9px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: added ? "#a8a29e" : "#78716c",
              background: added ? "#f5f5f4" : "transparent",
              border: added ? "1px solid #e7e5e4" : "1px solid #c4c0bc",
              borderRadius: "9999px",
              cursor: "pointer",
              padding: "0.3rem 0.65rem",
              transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!added) {
                e.currentTarget.style.background = "#1c1917";
                e.currentTarget.style.color = "#fafaf9";
                e.currentTarget.style.borderColor = "#1c1917";
              }
            }}
            onMouseLeave={(e) => {
              if (!added) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#78716c";
                e.currentTarget.style.borderColor = "#c4c0bc";
              }
            }}
          >
            <IconShoppingBag size={11} stroke={1.5} />
            {added ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
