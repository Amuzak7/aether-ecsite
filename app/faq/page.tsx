import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import FaqAccordion from "@/components/faq/FaqAccordion";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

export default function FaqPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ── Header ── */}
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
          style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#78716c", textTransform: "uppercase" }}
        >
          My Account
        </Link>
      </header>

      {/* ── Body ── */}
      <div style={{ ...PADDING, flex: 1, paddingTop: "4rem", paddingBottom: "8rem" }}>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2" style={{ marginBottom: "4rem" }} aria-label="Breadcrumb">
          <Link
            href="/"
            style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a8a29e", textTransform: "uppercase" }}
          >
            Home
          </Link>
          <span style={{ fontSize: "10px", color: "#c4c0bc" }}>/</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#1c1917", textTransform: "uppercase" }}>
            FAQ
          </span>
        </nav>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

          {/* ── Left: title block (1/3) ── */}
          <div className="md:sticky" style={{ top: "3rem" }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Support
            </p>
            <h1
              className="font-light text-stone-900"
              style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1.15, marginBottom: "1.5rem" }}
            >
              Frequently<br />Asked<br />Questions
            </h1>
            <p style={{ fontSize: "13px", lineHeight: 1.9, color: "#78716c", marginBottom: "3rem" }}>
              Find answers to the most common questions about AETHER.
            </p>

            {/* Contact CTA */}
            <div style={{ borderTop: "1px solid #e7e5e4", paddingTop: "2rem" }}>
              <p style={{ fontSize: "12px", color: "#a8a29e", lineHeight: 1.7, marginBottom: "1rem" }}>
                Still have questions?
              </p>
              <Link
                href="/contact"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#1c1917",
                  background: "transparent",
                  border: "1px solid #c4c0bc",
                  borderRadius: "9999px",
                  padding: "0.55rem 1.5rem",
                  display: "inline-block",
                  transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={undefined}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* ── Right: accordion (2/3) ── */}
          <div className="md:col-span-2">
            <FaqAccordion />
          </div>

        </div>
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
