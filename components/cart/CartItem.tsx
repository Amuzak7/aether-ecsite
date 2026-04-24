"use client";

import Image from "next/image";
import { IconTrash } from "@tabler/icons-react";
import { type CartItem, useCart } from "@/context/CartContext";

export const GRID = "90px 1fr 112px 128px 112px 40px";

export default function CartItemRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart();
  const subtotal = item.price * item.quantity;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: GRID,
        gap: "1.5rem",
        alignItems: "center",
        padding: "1.5rem 0",
        borderBottom: "1px solid #c4c0bc",
      }}
    >
      {/* Image */}
      <div className="relative bg-stone-200" style={{ aspectRatio: "3/4" }}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover object-center"
          sizes="90px"
        />
      </div>

      {/* Info */}
      <div style={{ minWidth: 0 }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "4px" }}>
          {item.brand}
        </p>
        <p style={{ fontSize: "13px", letterSpacing: "0.05em", color: "#1c1917", textTransform: "uppercase", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {item.name}
        </p>
        <p style={{ fontSize: "11px", color: "#a8a29e", marginTop: "6px", letterSpacing: "0.05em" }}>
          Size: {item.size}&nbsp;&nbsp;/&nbsp;&nbsp;{item.color}
        </p>
      </div>

      {/* Unit price */}
      <p style={{ fontSize: "12px", color: "#78716c", textAlign: "right" }}>
        ¥{item.price.toLocaleString()}
      </p>

      {/* Quantity */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <QuantitySelector item={item} updateQuantity={updateQuantity} />
      </div>

      {/* Subtotal */}
      <p style={{ fontSize: "13px", color: "#1c1917", textAlign: "right" }}>
        ¥{subtotal.toLocaleString()}
      </p>

      {/* Delete */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => removeItem(item.id)}
          aria-label="Remove item"
          style={{ color: "#a8a29e", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#a8a29e")}
        >
          <IconTrash size={16} stroke={1.5} />
        </button>
      </div>
    </div>
  );
}

function QuantitySelector({
  item,
  updateQuantity,
}: {
  item: CartItem;
  updateQuantity: (id: string, qty: number) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", border: "1px solid #c4c0bc", height: "32px" }}>
      <button
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        disabled={item.quantity <= 1}
        style={{
          width: "32px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#78716c",
          background: "none",
          border: "none",
          cursor: item.quantity <= 1 ? "not-allowed" : "pointer",
          opacity: item.quantity <= 1 ? 0.3 : 1,
          fontSize: "16px",
        }}
      >
        −
      </button>
      <input
        type="number"
        min={1}
        value={item.quantity}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val) && val >= 1) updateQuantity(item.id, val);
        }}
        style={{
          width: "40px",
          height: "100%",
          textAlign: "center",
          fontSize: "12px",
          color: "#1c1917",
          background: "transparent",
          outline: "none",
          borderLeft: "1px solid #c4c0bc",
          borderRight: "1px solid #c4c0bc",
        }}
      />
      <button
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        style={{
          width: "32px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#78716c",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        +
      </button>
    </div>
  );
}
