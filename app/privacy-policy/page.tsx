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
      "This Privacy Policy explains how AETHER Co., Ltd. (\u201cAETHER\u201d, \u201cwe\u201d, \u201cour\u201d, or \u201cus\u201d) collects, uses, and protects the personal information of customers and visitors who use our website.",
      "This policy applies to all users of our website and any related services. By accessing or using our site, you agree to the terms described in this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "When you place an order, we collect your name, shipping address, email address, phone number, and payment information. Payment details are processed securely through our payment provider and are not stored on our servers.",
      "When you create an account, we collect your name, email address, and a hashed password.",
      "We also automatically collect certain technical information when you visit our site, including your IP address, browser type and version, device information, cookie data, and browsing behaviour on our site.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "We use the information we collect to process and fulfil your orders, arrange delivery of your purchases, and handle returns and exchanges.",
      "We may contact you with order confirmations, shipping updates, and other service-related communications.",
      "With your prior consent, we may send you information about new products, promotions, and brand updates. You may opt out at any time.",
      "We also use collected data to improve our website, analyse user behaviour, and support our marketing and analytics efforts.",
    ],
  },
  {
    title: "4. Sharing Your Information",
    body: [
      "We share your personal information only where necessary to fulfil your order — for example, with shipping carriers to deliver your purchase, and with our payment processor to handle transactions.",
      "We do not sell, rent, or otherwise disclose your personal information to third parties for their own marketing purposes. We may share information if required by law or to protect the rights and safety of AETHER and its customers.",
    ],
  },
  {
    title: "5. Cookies and Tracking Technologies",
    body: [
      "Our website uses cookies — small text files stored on your device — to enable essential site functionality, remember your preferences, and improve your browsing experience.",
      "We use analytics tools such as Google Analytics to understand how visitors interact with our site. These tools may collect data such as pages visited, time spent on site, and referring URLs. This information is aggregated and does not identify you personally.",
      "You can control or disable cookies through your browser settings, though doing so may affect the functionality of certain parts of the site.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "You have the right to request access to, correction of, or deletion of the personal information we hold about you. To make such a request, please contact us using the details at the end of this policy.",
      "If you have subscribed to our email newsletter, you may unsubscribe at any time by clicking the unsubscribe link in any of our emails or by contacting us directly.",
    ],
  },
  {
    title: "7. Data Security",
    body: [
      "We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or disclosure. These measures include secure HTTPS connections, access controls, and regular security reviews.",
      "While we work diligently to protect your data, no method of transmission over the internet is completely secure. We cannot guarantee absolute security, but we are committed to addressing any breaches promptly and transparently.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will post the updated policy on this page with a revised effective date.",
      "We encourage you to review this page periodically to stay informed about how we are protecting your information.",
    ],
  },
  {
    title: "9. Contact Us",
    body: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please reach out to us.",
      "You can contact us via our Contact page or by emailing us directly at privacy@aether.com. We will respond to all privacy-related enquiries within 5 business days.",
    ],
  },
];

const EFFECTIVE_DATE = "1 April 2023";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              Privacy<br />Policy
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
                  {s.title === "9. Contact Us" && (
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
