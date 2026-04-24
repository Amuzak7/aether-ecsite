"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { subtotal } = useCart();

  return (
    <div style={{ boxShadow: "3px 4px 12px rgba(28, 25, 23, 0.08)" }}>
      {/* Title */}
      <div
        className="px-6 py-5"
        style={{ borderBottom: "1px solid #c4c0bc" }}
      >
        <h2 className="text-[10px] tracking-[0.3em] text-stone-900 uppercase">
          Order Summary
        </h2>
      </div>

      {/* Breakdown */}
      <div className="px-6 py-6 space-y-3">
        <div className="flex justify-between items-baseline">
          <span className="text-[11px] tracking-[0.15em] text-stone-500 uppercase">
            Subtotal
          </span>
          <span className="text-[13px] text-stone-900">
            ¥{subtotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-[11px] tracking-[0.15em] text-stone-500 uppercase">
            Shipping
          </span>
          <span className="text-[11px] tracking-[0.15em] text-stone-500 uppercase">
            Free
          </span>
        </div>
      </div>

      {/* Total */}
      <div
        className="px-6 py-5 flex justify-between items-baseline"
        style={{ borderTop: "1px solid #c4c0bc" }}
      >
        <span className="text-[11px] tracking-[0.2em] text-stone-900 uppercase">
          Total
        </span>
        <div className="text-right">
          <p className="text-base text-stone-900">
            ¥{subtotal.toLocaleString()}
          </p>
          <p className="text-[10px] text-stone-400 tracking-wide mt-0.5">
            Tax included
          </p>
        </div>
      </div>

      {/* Checkout button */}
      <div className="px-6 pb-6">
        <Link
          href="/checkout"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            padding: "1rem 0",
            border: "1px solid #1c1917",
            color: "#1c1917",
            background: "transparent",
            transition: "background 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1c1917";
            e.currentTarget.style.color = "#d6d3d1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#1c1917";
          }}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
