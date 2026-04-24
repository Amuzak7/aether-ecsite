"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #c4c0bc",
  padding: "0.75rem 1rem",
  fontSize: "12px",
  color: "#1c1917",
  background: "transparent",
  outline: "none",
  letterSpacing: "0.03em",
  appearance: "none",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "10px",
        letterSpacing: "0.3em",
        color: "#a8a29e",
        textTransform: "uppercase",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </p>
  );
}

function InputField({
  label,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <label
        style={{
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "#78716c",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={{
          ...inputStyle,
          borderColor: focused ? "#1c1917" : "#c4c0bc",
          transition: "border-color 0.2s ease",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

export default function CheckoutPage() {
  const { items, subtotal } = useCart();

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fafaf9" }}>

      {/* Header */}
      <header
        className="flex items-center justify-between py-6"
        style={{ ...PADDING, borderBottom: "20px solid #1c1917" }}
      >
        <Link
          href="/"
          className="font-light text-stone-900"
          style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "0" }}
        >
          AETHER
        </Link>
        <Link
          href="/account"
          style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#78716c", textTransform: "uppercase", textDecoration: "none" }}
        >
          My Account
        </Link>
      </header>

      {/* Body */}
      <div style={{ ...PADDING, flex: 1, paddingBottom: "6rem" }}>

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2"
          style={{ paddingTop: "4rem", paddingBottom: "1.5rem" }}
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-stone-900 transition-colors duration-200"
            style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a8a29e", textTransform: "uppercase" }}
          >
            Home
          </Link>
          <span style={{ fontSize: "10px", color: "#c4c0bc" }}>/</span>
          <Link
            href="/cart"
            className="hover:text-stone-900 transition-colors duration-200"
            style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a8a29e", textTransform: "uppercase" }}
          >
            Cart
          </Link>
          <span style={{ fontSize: "10px", color: "#c4c0bc" }}>/</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#1c1917", textTransform: "uppercase" }}>
            Checkout
          </span>
        </nav>

        {/* Page title */}
        <h1
          className="font-light text-stone-900 uppercase"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.15em", marginBottom: "3rem" }}
        >
          Checkout
        </h1>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* ── Left: Order Summary ── */}
          <div>
            <SectionLabel>Order Summary</SectionLabel>

            {/* Items */}
            <div style={{ borderTop: "1px solid #e7e5e4" }}>
              {items.length === 0 ? (
                <p style={{ padding: "2rem 0", fontSize: "12px", color: "#a8a29e" }}>
                  Your cart is empty.
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "60px 1fr auto",
                      gap: "1rem",
                      alignItems: "center",
                      padding: "1.25rem 0",
                      borderBottom: "1px solid #e7e5e4",
                    }}
                  >
                    {/* Image */}
                    <div style={{ position: "relative", width: 60, height: 80, background: "#e7e5e4", flexShrink: 0 }}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center"
                        sizes="60px"
                      />
                    </div>

                    {/* Info */}
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "3px" }}>
                        {item.brand}
                      </p>
                      <p style={{ fontSize: "12px", color: "#1c1917", textTransform: "uppercase", letterSpacing: "0.05em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {item.name}
                      </p>
                      <p style={{ fontSize: "10px", color: "#a8a29e", marginTop: "3px" }}>
                        {item.size} / {item.color} &nbsp;·&nbsp; Qty {item.quantity}
                      </p>
                    </div>

                    {/* Subtotal */}
                    <p style={{ fontSize: "12px", color: "#1c1917", whiteSpace: "nowrap" }}>
                      ¥{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Totals */}
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "11px", color: "#78716c", letterSpacing: "0.08em" }}>Subtotal</p>
                <p style={{ fontSize: "11px", color: "#1c1917" }}>¥{subtotal.toLocaleString()}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "11px", color: "#78716c", letterSpacing: "0.08em" }}>Shipping</p>
                <p style={{ fontSize: "11px", color: "#5a7f5e", letterSpacing: "0.05em" }}>Free</p>
              </div>
              <div style={{ borderTop: "1px solid #e7e5e4", paddingTop: "0.75rem", display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "12px", color: "#1c1917", letterSpacing: "0.1em", textTransform: "uppercase" }}>Total</p>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "15px", color: "#1c1917" }}>¥{subtotal.toLocaleString()}</p>
                  <p style={{ fontSize: "10px", color: "#a8a29e", marginTop: "2px" }}>incl. tax</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Payment Form ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            {/* Shipping info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <SectionLabel>Shipping Information</SectionLabel>
              <InputField label="Full Name" placeholder="Taro Yamada" autoComplete="name" />
              <InputField label="Email Address" type="email" placeholder="email@example.com" autoComplete="email" />

              <div className="grid grid-cols-2 gap-3">
                <InputField label="Postal Code" placeholder="000-0000" autoComplete="postal-code" />
                <InputField label="Prefecture" placeholder="Tokyo" autoComplete="address-level1" />
              </div>
              <InputField label="City / Ward" placeholder="Shibuya-ku" autoComplete="address-level2" />
              <InputField label="Street Address" placeholder="1-2-3 Jingumae" autoComplete="street-address" />
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #e7e5e4" }} />

            {/* Card info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <SectionLabel>Card Information</SectionLabel>
              <InputField label="Card Number" placeholder="**** **** **** ****" autoComplete="cc-number" />
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Expiry Date" placeholder="MM / YY" autoComplete="cc-exp" />
                <InputField label="Security Code" placeholder="***" autoComplete="cc-csc" />
              </div>
              <p style={{ fontSize: "10px", color: "#a8a29e", letterSpacing: "0.05em", lineHeight: "1.6" }}>
                This is a demo store. No actual payment will be processed.
              </p>
            </div>

            {/* Submit */}
            <button
              type="button"
              style={{
                width: "100%",
                padding: "1.125rem",
                background: "#1c1917",
                color: "white",
                border: "1px solid #1c1917",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#44403c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1c1917")}
            >
              Place Order
            </button>

            <p style={{ fontSize: "10px", color: "#a8a29e", letterSpacing: "0.05em", textAlign: "center", marginTop: "-1rem" }}>
              By placing your order you agree to our{" "}
              <Link href="/terms-of-use" style={{ color: "#78716c", textDecoration: "underline" }}>Terms of Use</Link>
              {" "}and{" "}
              <Link href="/privacy-policy" style={{ color: "#78716c", textDecoration: "underline" }}>Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
