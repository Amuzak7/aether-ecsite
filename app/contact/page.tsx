import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/contact/ContactForm";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

export default function ContactPage() {
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
            Contact
          </span>
        </nav>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* ── Left: info ── */}
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Get in Touch
            </p>
            <h1
              className="font-light text-stone-900"
              style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15, marginBottom: "2rem" }}
            >
              We&apos;d love to<br />hear from you.
            </h1>
            <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#78716c", maxWidth: "400px", marginBottom: "4rem" }}>
              Whether you have a question about your order, need sizing advice, or simply want to reach out — fill in the form and we&apos;ll get back to you as soon as possible.
            </p>

            {/* Business hours */}
            <div style={{ borderTop: "1px solid #e7e5e4", paddingTop: "2rem", marginBottom: "2.5rem" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "1rem" }}>
                Business Hours
              </p>
              <p style={{ fontSize: "13px", color: "#44403c", lineHeight: 1.8 }}>
                Monday to Friday<br />
                10:00 AM – 6:00 PM (JST)
              </p>
            </div>

            {/* FAQ link */}
            <div style={{ borderTop: "1px solid #e7e5e4", paddingTop: "2rem" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "1rem" }}>
                Before You Write
              </p>
              <Link
                href="/faq"
                className="group"
                style={{ fontSize: "13px", color: "#1c1917", display: "inline-flex", alignItems: "center", gap: "0.5rem", position: "relative" }}
              >
                <span>Frequently Asked Questions</span>
                <span
                  className="absolute bottom-0 left-0 h-px bg-stone-900 w-0 group-hover:w-full transition-all duration-300"
                  style={{ bottom: "-1px" }}
                />
              </Link>
              <p style={{ fontSize: "12px", color: "#a8a29e", marginTop: "0.5rem", lineHeight: 1.6 }}>
                Your question may already be answered there.
              </p>
            </div>

            {/* Privacy Policy link */}
            <div style={{ borderTop: "1px solid #e7e5e4", paddingTop: "2rem" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "1rem" }}>
                Your Privacy
              </p>
              <Link
                href="/privacy-policy"
                className="group"
                style={{ fontSize: "13px", color: "#1c1917", display: "inline-flex", alignItems: "center", gap: "0.5rem", position: "relative" }}
              >
                <span>Privacy Policy</span>
                <span
                  className="absolute bottom-0 left-0 h-px bg-stone-900 w-0 group-hover:w-full transition-all duration-300"
                  style={{ bottom: "-1px" }}
                />
              </Link>
              <p style={{ fontSize: "12px", color: "#a8a29e", marginTop: "0.5rem", lineHeight: 1.6 }}>
                Learn how we handle your personal information.
              </p>
            </div>

            {/* Terms of Use + Cookie Policy links */}
            <div style={{ borderTop: "1px solid #e7e5e4", paddingTop: "2rem" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "1rem" }}>
                Legal
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link
                  href="/terms-of-use"
                  className="group"
                  style={{ fontSize: "13px", color: "#1c1917", display: "inline-flex", alignItems: "center", position: "relative" }}
                >
                  <span>Terms of Use</span>
                  <span
                    className="absolute bottom-0 left-0 h-px bg-stone-900 w-0 group-hover:w-full transition-all duration-300"
                    style={{ bottom: "-1px" }}
                  />
                </Link>
                <Link
                  href="/cookie-policy"
                  className="group"
                  style={{ fontSize: "13px", color: "#1c1917", display: "inline-flex", alignItems: "center", position: "relative" }}
                >
                  <span>Cookie Policy</span>
                  <span
                    className="absolute bottom-0 left-0 h-px bg-stone-900 w-0 group-hover:w-full transition-all duration-300"
                    style={{ bottom: "-1px" }}
                  />
                </Link>
                <Link
                  href="/specified-commercial-transactions"
                  className="group"
                  style={{ fontSize: "13px", color: "#1c1917", display: "inline-flex", alignItems: "center", position: "relative" }}
                >
                  <span>Specified Commercial Transactions</span>
                  <span
                    className="absolute bottom-0 left-0 h-px bg-stone-900 w-0 group-hover:w-full transition-all duration-300"
                    style={{ bottom: "-1px" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
