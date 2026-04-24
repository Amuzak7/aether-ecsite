import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

const SECTIONS = [
  {
    title: "1. Introduction",
    body: [
      "These Terms of Use govern your access to and use of the AETHER website and any related services provided by AETHER Co., Ltd. By accessing or using our website, you agree to be bound by these terms.",
      "If you do not agree to any part of these terms, please discontinue use of our website immediately. We reserve the right to update these terms at any time, and your continued use of the site constitutes acceptance of any changes.",
    ],
  },
  {
    title: "2. Account Registration",
    body: [
      "When creating an account, you agree to provide accurate, current, and complete information, including your legal name and a valid email address. You must not impersonate any person or use a name you are not authorised to use.",
      "You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately if you suspect any unauthorised use.",
    ],
  },
  {
    title: "3. Orders and Purchases",
    body: [
      "All orders are subject to product availability. We reserve the right to refuse or cancel any order at our discretion, including in cases of pricing errors, suspected fraud, or stock limitations.",
      "A purchase contract is formed only upon receipt of an order confirmation email from AETHER. Until that confirmation is sent, no binding agreement exists between you and AETHER.",
    ],
  },
  {
    title: "4. Payment Methods",
    body: [
      "We accept payment by credit card and other methods designated by AETHER at the time of purchase. All transactions are processed in Japanese Yen (JPY).",
      "Payment information is handled securely by our authorised payment processor. AETHER does not store full payment card details on its own servers.",
    ],
  },
  {
    title: "5. Shipping and Delivery",
    body: [
      "Domestic orders within Japan are typically delivered within 3 to 5 business days from the date of dispatch. Delivery times may vary depending on your location and external factors beyond our control.",
      "Standard shipping is free of charge for all domestic orders. Certain remote regions may be subject to additional handling fees, which will be communicated at checkout.",
    ],
  },
  {
    title: "6. Returns and Exchanges",
    body: [
      "We accept return and exchange requests submitted within 7 days of the delivery date. Items must be unused, unwashed, and in their original condition with all tags attached and free from stains or damage.",
      "Return shipping costs are the responsibility of the customer unless the item received was defective or incorrect. Sale items and limited-edition pieces are final sale and are not eligible for return or exchange.",
      "To initiate a return or exchange, please contact us via our Contact page with your order number and reason for return.",
    ],
  },
  {
    title: "7. Intellectual Property Rights",
    body: [
      "All content on this website — including but not limited to images, logos, text, graphics, and product designs — is the property of AETHER Co., Ltd. and is protected by applicable copyright and intellectual property laws.",
      "You may not reproduce, distribute, modify, or otherwise use any content from this site without prior written permission from AETHER.",
    ],
  },
  {
    title: "8. Prohibited Activities",
    body: [
      "When using our website, you agree not to engage in any activity that violates applicable laws or regulations, infringes on the rights of others, or interferes with the normal operation of the site.",
      "Prohibited activities include, but are not limited to: submitting false or misleading information, engaging in fraudulent transactions, attempting to gain unauthorised access to our systems, and using the site for any commercial purpose without our consent.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, AETHER shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or any products purchased through it.",
      "Our total liability to you for any claim arising in connection with these terms shall not exceed the total amount paid by you in connection with the relevant order. This limitation does not apply in cases of intentional misconduct or gross negligence on our part.",
    ],
  },
  {
    title: "10. Governing Law and Jurisdiction",
    body: [
      "These Terms of Use shall be governed by and construed in accordance with the laws of Japan, without regard to its conflict of law provisions.",
      "Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.",
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "If you have any questions or concerns about these Terms of Use, please feel free to reach out to us. We aim to respond to all enquiries within 3 business days.",
      "You can contact us via our Contact page or by emailing us at info@aether.com.",
    ],
  },
];

const EFFECTIVE_DATE = "1 April 2023";

export default function TermsOfUsePage() {
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
            Terms of Use
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
              style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1.15, marginBottom: "1.5rem" }}
            >
              Terms<br />of Use
            </h1>
            <p style={{ fontSize: "12px", color: "#a8a29e", lineHeight: 1.8, marginBottom: "3rem" }}>
              Effective date:<br />{EFFECTIVE_DATE}
            </p>

            {/* Jump links */}
            <div style={{ borderTop: "1px solid #e7e5e4", paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {SECTIONS.map((s) => (
                <a
                  key={s.title}
                  href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="hover:text-stone-900 transition-colors duration-200"
                  style={{ fontSize: "11px", letterSpacing: "0.05em", color: "#a8a29e" }}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className="md:col-span-2" style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {SECTIONS.map((s) => (
              <div
                key={s.title}
                id={s.title.replace(/\s+/g, "-").toLowerCase()}
                style={{ borderTop: "1px solid #e7e5e4", paddingTop: "2.5rem" }}
              >
                <h2
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#1c1917",
                    marginBottom: "1.25rem",
                  }}
                >
                  {s.title}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {s.body.map((para, i) => (
                    <p key={i} style={{ fontSize: "13px", lineHeight: 1.9, color: "#78716c", letterSpacing: "0.02em" }}>
                      {para}
                    </p>
                  ))}
                  {s.title === "11. Contact Us" && (
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-block",
                        marginTop: "0.5rem",
                        fontSize: "10px",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#1c1917",
                        border: "1px solid #c4c0bc",
                        borderRadius: "9999px",
                        padding: "0.55rem 1.5rem",
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
