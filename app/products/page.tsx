import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import ProductsClient from "./ProductsClient";
import { getProductsForListing } from "@/lib/products-db";
import CartButton from "@/components/CartButton";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

export default async function ProductsPage() {
  const products = await getProductsForListing();

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
        <CartButton />
      </header>

      {/* Body */}
      <div style={{ ...PADDING, flex: 1, paddingBottom: "6rem" }}>
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2"
          style={{ paddingTop: "1.5rem", paddingBottom: "2.5rem" }}
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
            Products
          </span>
        </nav>

        <ProductsClient products={products} />
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
