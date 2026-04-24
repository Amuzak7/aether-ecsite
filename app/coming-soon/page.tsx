import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

export default function ComingSoonPage() {
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
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#1c1917", textTransform: "uppercase" }}>
            Coming Soon
          </span>
        </nav>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "6rem",
            paddingBottom: "6rem",
            textAlign: "center",
            gap: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "#a8a29e",
              textTransform: "uppercase",
            }}
          >
            AETHER
          </p>

          <h1
            className="font-light text-stone-900 uppercase"
            style={{
              fontFamily: "var(--font-brand)",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              letterSpacing: "0.1em",
              lineHeight: 1.1,
            }}
          >
            Coming Soon
          </h1>

          <div style={{ width: "40px", height: "1px", background: "#c4c0bc" }} />

          <p
            style={{
              fontSize: "12px",
              color: "#78716c",
              letterSpacing: "0.05em",
              lineHeight: "1.8",
              maxWidth: "420px",
            }}
          >
            We are currently preparing our official SNS accounts.
            <br />
            Please stay tuned.
          </p>

          <Link
            href="/"
            className="group"
            style={{
              marginTop: "1.5rem",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#1c1917",
              position: "relative",
            }}
          >
            Back to Home
            <span className="absolute bottom-0 left-0 h-px bg-stone-900 w-0 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
