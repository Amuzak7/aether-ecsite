"use client";

import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { useCart } from "@/context/CartContext";
import CartItemRow from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

const GRID = "90px 1fr 112px 128px 112px 40px";

export default function CartPage() {
  const { items } = useCart();
  const isEmpty = items.length === 0;

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ── Header ── */}
      <header
        className="flex items-center justify-between py-6"
        style={{ ...PADDING, borderBottom: "20px solid #1c1917" }}
      >
        <Link
          href="/"
          className="text-stone-900 font-light"
          style={{
            fontFamily: "var(--font-brand)",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            letterSpacing: "0",
          }}
        >
          AETHER
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-[11px] tracking-[0.2em] text-stone-500 uppercase
                     hover:text-stone-900 transition-colors duration-200"
        >
          <IconArrowLeft size={13} stroke={1.5} />
          Continue Shopping
        </Link>
      </header>

      {/* ── Breadcrumb ── */}
      <div style={{ ...PADDING }}>
        <nav className="flex items-center gap-2" style={{ paddingTop: "4rem", paddingBottom: "1.5rem" }} aria-label="Breadcrumb">
          <Link
            href="/"
            className="hover:text-stone-900 transition-colors duration-200"
            style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a8a29e", textTransform: "uppercase" }}
          >
            Home
          </Link>
          <span style={{ fontSize: "10px", color: "#c4c0bc" }}>/</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#1c1917", textTransform: "uppercase" }}>
            Cart
          </span>
        </nav>
      </div>

      {/* ── Page title ── */}
      <div style={{ ...PADDING, paddingTop: "2rem", paddingBottom: "2.5rem" }}>
        <h1
          className="font-light tracking-[0.2em] text-stone-900 uppercase"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Shopping Cart
        </h1>
      </div>

      {/* ── Content ── */}
      <div style={{ ...PADDING, paddingBottom: "8rem", flex: 1 }}>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Cart items */}
            <div className="flex-1 w-full">
              {/* Table header — desktop only */}
              <div
                className="hidden md:grid text-[10px] tracking-[0.2em] text-stone-400 uppercase pb-3 gap-6"
                style={{
                  gridTemplateColumns: GRID,
                  borderBottom: "1px solid #1c1917",
                }}
              >
                <span />
                <span>Product</span>
                <span className="text-right">Price</span>
                <span className="text-center">Qty</span>
                <span className="text-right">Subtotal</span>
                <span />
              </div>

              {/* Item rows */}
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>

            {/* Order summary */}
            <div className="w-full lg:w-80 shrink-0">
              <CartSummary />
            </div>
          </div>
        )}
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-40 gap-5">
      <p
        className="font-light tracking-wide text-stone-900 text-center"
        style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
      >
        Your cart is empty.
      </p>
      <p className="text-[12px] text-stone-400 tracking-widest">
        Discover your next favourite piece.
      </p>
      <Link
        href="/products"
        className="group mt-6 text-[11px] tracking-[0.3em] uppercase text-stone-900 relative"
      >
        Browse Collection
        <span
          className="absolute bottom-0 left-0 h-px bg-stone-900 w-0 group-hover:w-full transition-all duration-300"
        />
      </Link>
    </div>
  );
}
