import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductDetail, getRelatedProductsDb } from "@/lib/products-db";
import CartButton from "@/components/CartButton";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductAccordion from "@/components/product/ProductAccordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductDetail(id);

  if (!product) notFound();

  const relatedProducts = await getRelatedProductsDb(product.related);

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
          style={{
            fontFamily: "var(--font-brand)",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            letterSpacing: "0",
          }}
        >
          AETHER
        </Link>
        <CartButton />
      </header>

      {/* Page body */}
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
          <Link
            href="/products"
            className="hover:text-stone-900 transition-colors duration-200"
            style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a8a29e", textTransform: "uppercase" }}
          >
            Products
          </Link>
          <span style={{ fontSize: "10px", color: "#c4c0bc" }}>/</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#1c1917", textTransform: "uppercase" }}>
            {product.name}
          </span>
        </nav>

        {/* Main: gallery + product info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <ImageGallery images={product.images} alt={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Accordion */}
        <div style={{ marginTop: "4rem", maxWidth: "780px" }}>
          <ProductAccordion product={product} />
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div
            style={{ marginTop: "5rem", paddingTop: "4rem", borderTop: "1px solid #e7e5e4" }}
          >
            <RelatedProducts products={relatedProducts} />
          </div>
        )}
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
