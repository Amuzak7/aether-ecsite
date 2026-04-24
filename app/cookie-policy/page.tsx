import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

const SECTIONS = [
  {
    title: "1. What Are Cookies?",
    body: [
      "Cookies are small text files that are placed on your device by a website when you visit it. They are widely used to make websites work more efficiently and to provide information to the site owner.",
      "Cookies help us remember your preferences, keep you logged in, and understand how you interact with our site. Some cookies are essential for the website to function properly, while others help us improve your experience.",
    ],
  },
  {
    title: "2. How We Use Cookies",
    body: [
      "We use cookies to ensure the basic functionality of our website, such as keeping you logged into your account and remembering items in your shopping bag.",
      "We also use cookies to analyse how visitors use our site, helping us understand which pages are most popular and how we can improve our content and services.",
      "In addition, cookies are used to deliver relevant advertisements and to measure the effectiveness of our marketing campaigns.",
    ],
  },
  {
    title: "3. Types of Cookies We Use",
    body: [
      "Essential Cookies: These cookies are necessary for the website to function and cannot be switched off in our systems. They are typically set in response to actions you take, such as logging in or adding items to your cart.",
      "Analytics Cookies: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. Tools such as Google Analytics may use these cookies to help us understand how users interact with our pages.",
      "Marketing Cookies: These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information but are based on uniquely identifying your browser and device.",
    ],
  },
  {
    title: "4. Third-Party Cookies",
    body: [
      "Some cookies on our site are placed by third-party services, including Google Analytics and advertising technology providers. These cookies are governed by the respective privacy policies of those third parties, over which we have no control.",
      "We recommend reviewing the privacy policies of these third parties to understand how they use your data. You may opt out of Google Analytics tracking by installing the Google Analytics opt-out browser add-on.",
    ],
  },
  {
    title: "5. Managing Your Cookie Preferences",
    body: [
      "Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies at any time. Please note that disabling certain cookies may affect the functionality of our website, including the ability to log in or complete a purchase.",
      "Instructions for managing cookies vary by browser. Please refer to the help documentation for your browser for guidance on how to adjust your cookie settings.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "You have the right to access, correct, or request deletion of personal data collected through cookies. For cookies that are not strictly necessary, you can withdraw your consent at any time by adjusting your browser settings.",
      "If you have questions about how cookies are used on our site or wish to exercise your rights, please contact us using the details provided below.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. When we make changes, we will post the updated policy on this page with a revised effective date.",
      "We encourage you to review this page periodically to stay informed about how we use cookies.",
    ],
  },
  {
    title: "8. Contact Us",
    body: [
      "If you have any questions about our use of cookies or this Cookie Policy, please contact us via our Contact page or by emailing privacy@aether.com.",
      "We will respond to all cookie-related enquiries within 5 business days.",
    ],
  },
];

const EFFECTIVE_DATE = "1 April 2023";

export default function CookiePolicyPage() {
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
            Cookie Policy
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
              Cookie<br />Policy
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
                  {s.title === "8. Contact Us" && (
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
