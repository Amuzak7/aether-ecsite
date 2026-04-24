import Link from "next/link";
import ProductListCard, { type ListProduct } from "./product/ProductListCard";

const newInProducts: ListProduct[] = [
  { id: "oversized-tshirt-beige",           brand: "AETHER", name: "Oversized Tee — Beige",        price:  8800, image: "/images/products/oversized-tshirt-beige.jpg",            category: "Tops" },
  { id: "oversized-tshirt-white",           brand: "AETHER", name: "Oversized Tee — White",         price:  8800, image: "/images/products/oversized-tshirt-white1.jpg",            category: "Tops" },
  { id: "oversized-tshirt-grey",            brand: "AETHER", name: "Oversized Tee — Charcoal",      price:  8800, image: "/images/products/oversized-tshirt-grey.jpg",              category: "Tops" },
  { id: "oversized-shortsleeveshirt-white", brand: "AETHER", name: "S/S Shirt — White",             price: 14300, image: "/images/products/oversized-shortsleeveshirt-white1.jpg",  category: "Tops" },
  { id: "oversized-denim-lightblue",        brand: "AETHER", name: "Denim Jacket — Light Blue",     price: 28600, image: "/images/products/oversized-denim-lightblue.jpg",          category: "Outerwear" },
  { id: "oversized-halfpants-white",        brand: "AETHER", name: "Wide Half Pants — White",       price: 12100, image: "/images/products/oversized-halfpants-white.jpg",          category: "Bottoms" },
  { id: "oversized-trouser-black",          brand: "AETHER", name: "Wide Trousers — Black",         price: 16500, image: "/images/products/oversized-trouser-black1.jpg",           category: "Bottoms" },
  { id: "oversized-trouser-offwhite",       brand: "AETHER", name: "Wide Trousers — Off White",     price: 16500, image: "/images/products/oversized-trouser-offwhite1.jpg",        category: "Bottoms" },
];

export default function NewInSection() {
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

      {/* Product grid: 4 cols on desktop, 2 on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {newInProducts.map((product) => (
          <ProductListCard key={product.id} product={product} />
        ))}
      </div>

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
      <div
        style={{ marginTop: "4rem", borderBottom: "20px solid #1c1917" }}
      />
    </section>
  );
}
