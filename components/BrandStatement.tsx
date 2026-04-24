export default function BrandStatement() {
  return (
    <section
      className="flex items-center justify-center"
      style={{
        paddingBottom: "10rem",
        paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
        paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
      }}
    >
      <p
        className="w-full mx-auto text-center font-light text-stone-900 tracking-wide"
        style={{
          fontFamily: "var(--font-brand)",
          fontSize: "clamp(2rem, 7vw, 6rem)",
          lineHeight: "1.0",
          maxWidth: "90vw",
        }}
      >
        AETHER is a modern menswear brand that redefines the boundaries of
        contemporary street style.
      </p>
    </section>
  );
}
