import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

const ROWS: { label: string; value: string | string[] }[] = [
  {
    label: "Seller",
    value: "AETHER Co., Ltd.",
  },
  {
    label: "Representative",
    value: "Taro Yamada",
  },
  {
    label: "Address",
    value: "3-1-1 Jingumae, Shibuya-ku, Tokyo 150-0001, Japan",
  },
  {
    label: "Phone",
    value: "+81-3-1234-5678",
  },
  {
    label: "Email",
    value: "info@aether.com",
  },
  {
    label: "Product Pricing",
    value: [
      "Prices displayed on each product page are inclusive of consumption tax.",
      "Domestic shipping: Free of charge (excluding certain remote islands).",
    ],
  },
  {
    label: "Shipping & Delivery",
    value: "Products are dispatched within 3 to 5 business days following order confirmation.",
  },
  {
    label: "Payment Methods",
    value: [
      "Credit card: Visa, Mastercard, JCB, American Express",
      "Bank transfer",
    ],
  },
  {
    label: "Returns & Exchanges",
    value: [
      "Returns and exchanges are accepted within 7 days of delivery.",
      "Items must be unused, unwashed, and in their original condition with all tags attached.",
      "Return shipping costs are the responsibility of the customer.",
    ],
  },
  {
    label: "Cancellation Policy",
    value: [
      "Orders cannot be cancelled once confirmed, as a general rule.",
      "If your order has not yet been dispatched, please contact us and we will do our best to accommodate your request.",
    ],
  },
  {
    label: "Enquiries",
    value: "For any questions, please contact us via our Contact page or at info@aether.com.",
  },
  {
    label: "Governing Law",
    value: "This disclosure is governed by and construed in accordance with the laws of Japan.",
  },
];

const EFFECTIVE_DATE = "1 April 2023";

export default function SpecifiedCommercialTransactionsPage() {
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
            Specified Commercial Transactions
          </span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

          {/* ── Left: title block ── */}
          <div className="md:sticky" style={{ top: "3rem" }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Legal
            </p>
            <h1
              className="font-light text-stone-900"
              style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.2, marginBottom: "1.5rem" }}
            >
              Specified<br />Commercial<br />Transactions
            </h1>
            <p style={{ fontSize: "12px", color: "#a8a29e", lineHeight: 1.8, marginBottom: "2rem" }}>
              Effective date:<br />{EFFECTIVE_DATE}
            </p>
            <p style={{ fontSize: "12px", color: "#a8a29e", lineHeight: 1.8 }}>
              Disclosed pursuant to the Act on Specified Commercial Transactions of Japan.
            </p>
          </div>

          {/* ── Right: table ── */}
          <div className="md:col-span-2">
            {ROWS.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-3"
                style={{
                  borderTop: i === 0 ? "1px solid #e7e5e4" : undefined,
                  borderBottom: "1px solid #e7e5e4",
                  padding: "1.5rem 0",
                  gap: "0.75rem",
                }}
              >
                {/* Label */}
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#a8a29e",
                    paddingTop: "0.15rem",
                  }}
                >
                  {row.label}
                </p>

                {/* Value */}
                <div className="md:col-span-2">
                  {Array.isArray(row.value) ? (
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0 }}>
                      {row.value.map((v, j) => (
                        <li
                          key={j}
                          style={{ fontSize: "13px", lineHeight: 1.8, color: "#44403c", letterSpacing: "0.02em", display: "flex", gap: "0.5rem" }}
                        >
                          <span style={{ color: "#c4c0bc", flexShrink: 0 }}>—</span>
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#44403c", letterSpacing: "0.02em" }}>
                      {row.value}
                    </p>
                  )}
                  {row.label === "Enquiries" && (
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-block",
                        marginTop: "1rem",
                        fontSize: "10px",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#1c1917",
                        border: "1px solid #c4c0bc",
                        borderRadius: "9999px",
                        padding: "0.5rem 1.25rem",
                      }}
                    >
                      Contact Us
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
