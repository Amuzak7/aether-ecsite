import ProductCard from "@/components/ProductCard";
import type { ProductData } from "@/lib/products";

interface Props {
  products: ProductData[];
}

export default function RelatedProducts({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "#a8a29e",
            textTransform: "uppercase",
            marginBottom: "0.375rem",
          }}
        >
          You May Also Like
        </p>
        <h2
          className="font-light text-stone-900 uppercase"
          style={{
            fontFamily: "var(--font-brand)",
            fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
            letterSpacing: "0.1em",
          }}
        >
          Related Items
        </h2>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={{
              id: p.id,
              brand: p.brand,
              name: p.name,
              price: `¥${p.price.toLocaleString()}`,
              image: p.images[0],
            }}
          />
        ))}
      </div>
    </div>
  );
}
