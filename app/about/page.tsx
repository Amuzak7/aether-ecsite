import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

const VALUES = [
  {
    title: "Timeless Design",
    body: "We reject the cycle of seasonal trends. Every piece is designed to remain relevant and wearable for years — crafted with proportions and details that endure.",
  },
  {
    title: "Exceptional Quality",
    body: "From fabric selection to final stitch, quality is non-negotiable. We work only with materials that age well and retain their integrity through years of wear.",
  },
  {
    title: "Enduring Value",
    body: "We believe in buying less and choosing better. AETHER pieces are investments — built to last, designed to be kept, made to be passed on.",
  },
];

const COMPANY = [
  { label: "Company",        value: "AETHER Co., Ltd." },
  { label: "Founded",        value: "April 2023" },
  { label: "Representative", value: "Taro Yamada" },
  { label: "Location",       value: "3-1-1 Jingumae, Shibuya-ku, Tokyo" },
  { label: "Business",       value: "Men's apparel planning and sales" },
];

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#fafaf9" }}>

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

      {/* ── Hero ── */}
      <section style={{ position: "relative", width: "100%", height: "85vh", minHeight: "520px", overflow: "hidden" }}>
        <Image
          src="/images/hero/hero-main3.jpg"
          alt="AETHER"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "brightness(0.55)" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
          }}
        >
          <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
            Est. Tokyo 2023
          </p>
          <h1
            className="font-light text-white"
            style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(4rem, 12vw, 10rem)", letterSpacing: "0.05em", lineHeight: 1 }}
          >
            AETHER
          </h1>
          <p style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.95rem)", letterSpacing: "0.35em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase" }}>
            Timeless by Design
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section style={{ ...PADDING, paddingTop: "8rem", paddingBottom: "8rem" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "3rem" }}>
          Our Story
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Text */}
          <div>
            <h2
              className="font-light text-stone-900"
              style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.2, marginBottom: "2.5rem" }}
            >
              Born from a belief<br />that less is more.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#44403c", letterSpacing: "0.02em" }}>
                AETHER was founded in Tokyo in 2023, born from a simple but enduring conviction: in an era of constant change and fleeting trends, the world needs fewer, better things.
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#44403c", letterSpacing: "0.02em" }}>
                In an era of constant change and fleeting trends, AETHER is committed to creating universal and enduring pieces that transcend time. We believe in offering timeless products that can be worn and cherished for years to come, rather than chasing seasonal trends.
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#44403c", letterSpacing: "0.02em" }}>
                Every season, the fashion industry pushes consumers toward the next thing. We push back — with clothing designed not for now, but for always.
              </p>
            </div>
          </div>
          {/* Image */}
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#e7e5e4" }}>
            <Image
              src="/images/hero/hero-main1.jpg"
              alt="Our Story"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ ...PADDING }}>
        <div style={{ borderTop: "1px solid #e7e5e4" }} />
      </div>

      {/* ── The Brand ── */}
      <section style={{ ...PADDING, paddingTop: "8rem", paddingBottom: "8rem" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "3rem" }}>
          The Brand
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Image (shown second on mobile, first on desktop) */}
          <div
            className="order-2 md:order-1"
            style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#e7e5e4" }}
          >
            <Image
              src="/images/products/bottoms/oversized-trouser-black1.jpg"
              alt="The Brand"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Text */}
          <div className="order-1 md:order-2">
            <h2
              className="font-light text-stone-900"
              style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.2, marginBottom: "2.5rem" }}
            >
              Designed for the<br />modern man.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#44403c", letterSpacing: "0.02em" }}>
                AETHER is made for men aged 25 to 35 who have grown beyond the noise of fast fashion — those who dress with intention, who value restraint over excess, and who seek clothing that speaks quietly but confidently.
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#44403c", letterSpacing: "0.02em" }}>
                Our design philosophy centres on oversized silhouettes that move with the body, minimal detailing with considered proportions, and a palette rooted in black, beige, and navy — colours that never compete for attention.
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#44403c", letterSpacing: "0.02em" }}>
                The result is clothing that feels effortless to wear, easy to combine, and impossible to date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section style={{ background: "#1c1917", ...PADDING, paddingTop: "8rem", paddingBottom: "8rem" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#78716c", textTransform: "uppercase", marginBottom: "2rem" }}>
          Our Values
        </p>
        <h2
          className="font-light text-white"
          style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(2rem, 4vw, 3.5rem)", marginBottom: "5rem", lineHeight: 1.2 }}
        >
          What we stand for.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {VALUES.map((v, i) => (
            <div key={i} style={{ borderTop: "1px solid #44403c", paddingTop: "2rem" }}>
              <p style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#78716c", textTransform: "uppercase", marginBottom: "1rem" }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 style={{ fontSize: "15px", fontWeight: 300, color: "#fafaf9", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                {v.title}
              </h3>
              <p style={{ fontSize: "13px", lineHeight: 1.9, color: "#78716c" }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Company ── */}
      <section style={{ ...PADDING, paddingTop: "8rem", paddingBottom: "8rem" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "2rem" }}>
          Company
        </p>
        <h2
          className="font-light text-stone-900"
          style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(2rem, 4vw, 3.5rem)", marginBottom: "4rem", lineHeight: 1.2 }}
        >
          Corporate information.
        </h2>
        <div style={{ maxWidth: "640px" }}>
          {COMPANY.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2"
              style={{ gap: "1.5rem", padding: "1.25rem 0", borderBottom: "1px solid #e7e5e4" }}
            >
              <p style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#a8a29e", textTransform: "uppercase" }}>
                {row.label}
              </p>
              <p style={{ fontSize: "13px", color: "#44403c", letterSpacing: "0.03em" }}>
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section
        style={{
          background: "#1c1917",
          ...PADDING,
          paddingTop: "7rem",
          paddingBottom: "7rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "10px", letterSpacing: "0.35em", color: "#78716c", textTransform: "uppercase" }}>
          Explore the Collection
        </p>
        <h2
          className="font-light text-white"
          style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1 }}
        >
          Wear what lasts.
        </h2>
        <Link
          href="/products"
          style={{
            marginTop: "1rem",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#1c1917",
            background: "#fafaf9",
            border: "1px solid #fafaf9",
            borderRadius: "9999px",
            padding: "0.55rem 2rem",
            display: "inline-block",
          }}
        >
          Shop Now
        </Link>
      </section>

      <BottomNav showSns={false} />
    </main>
  );
}
