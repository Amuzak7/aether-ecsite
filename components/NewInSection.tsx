"use client";

import Link from "next/link";
import ProductListCard, { type ListProduct } from "./product/ProductListCard";

export default function NewInSection({ products }: { products: ListProduct[] }) {
  return (
    <section
      id="new-in"
      style={{
        paddingTop: "10rem",
        paddingBottom: "10rem",
        paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
        paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
      }}
    >
      {/* Section header */}
      <div
        className="pt-32 mb-10 flex justify-center"
        style={{ borderTop: "20px solid #1c1917" }}
      >
        <h2
          className="font-light text-stone-900 uppercase"
          style={{ fontSize: "10vw" }}
        >
          New In
        </h2>
      </div>

      {/* Product grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductListCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{ paddingTop: "4rem", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase" }}>
            No products found
          </p>
        </div>
      )}

      {/* Browse Collection button */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
        <Link
          href="/products"
          className="group"
          style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#1c1917", position: "relative" }}
        >
          Browse Collection
          <span className="absolute bottom-0 left-0 h-px bg-stone-900 w-0 group-hover:w-full transition-all duration-300" />
        </Link>
      </div>

      {/* Bottom border */}
      <div style={{ marginTop: "4rem", borderBottom: "20px solid #1c1917" }} />
    </section>
  );
}
