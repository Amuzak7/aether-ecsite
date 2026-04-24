"use client";

import Link from "next/link";
import { IconShoppingBag } from "@tabler/icons-react";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      aria-label="Cart"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#78716c",
        textDecoration: "none",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#78716c")}
    >
      <IconShoppingBag size={20} stroke={1.5} />
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-6px",
            right: "-8px",
            minWidth: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "#1c1917",
            color: "white",
            fontSize: "9px",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: 0,
            padding: "0 3px",
          }}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}
