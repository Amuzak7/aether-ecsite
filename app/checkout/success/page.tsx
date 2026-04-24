import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

export default function CheckoutSuccessPage() {
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
      <div
        style={{
          ...PADDING,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "6rem",
          paddingBottom: "6rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
            maxWidth: "480px",
          }}
        >
          {/* Check icon */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid #1c1917",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1c1917",
            }}
          >
            <IconCheck size={24} stroke={1.5} />
          </div>

          {/* Label */}
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "#a8a29e",
              textTransform: "uppercase",
            }}
          >
            Order Confirmed
          </p>

          {/* Heading */}
          <h1
            className="font-light text-stone-900 uppercase"
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
              letterSpacing: "0.1em",
              lineHeight: 1.2,
            }}
          >
            Thank You for Your Order
          </h1>

          <div style={{ width: "40px", height: "1px", background: "#c4c0bc" }} />

          {/* Body text */}
          <p
            style={{
              fontSize: "13px",
              color: "#78716c",
              lineHeight: "1.8",
              letterSpacing: "0.03em",
            }}
          >
            Your order has been placed successfully.
            <br />
            A confirmation email has been sent to your address.
          </p>

          <p
            style={{
              fontSize: "11px",
              color: "#a8a29e",
              letterSpacing: "0.05em",
            }}
          >
            This is a demo store — no actual payment was processed.
          </p>

          {/* CTA */}
          <Link
            href="/"
            className="hover:opacity-75 transition-opacity duration-200"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              padding: "0.875rem 2.5rem",
              background: "#1c1917",
              color: "white",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Back to Home
          </Link>

          <Link
            href="/products"
            className="group"
            style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#78716c",
              position: "relative",
              textDecoration: "none",
            }}
          >
            Continue Shopping
            <span className="absolute bottom-0 left-0 h-px bg-stone-500 w-0 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
