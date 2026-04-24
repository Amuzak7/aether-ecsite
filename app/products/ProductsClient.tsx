"use client";

import { useState, useMemo } from "react";
import ProductListCard, { type ListProduct } from "@/components/product/ProductListCard";

const PAGE_SIZE = 8;
const CATEGORIES = ["All", "Tops", "Bottoms", "Outerwear", "Accessories", "Shoes"] as const;
type Category = (typeof CATEGORIES)[number];
type SortOrder = "newest" | "price-asc" | "price-desc";

interface Props {
  products: ListProduct[];
}

export default function ProductsClient({ products }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [sortOrder, setSortOrder]           = useState<SortOrder>("newest");
  const [displayCount, setDisplayCount]     = useState(PAGE_SIZE);

  const filteredAndSorted = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory);

    if (sortOrder === "price-asc")  return [...filtered].sort((a, b) => a.price - b.price);
    if (sortOrder === "price-desc") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [products, activeCategory, sortOrder]);

  const visible   = filteredAndSorted.slice(0, displayCount);
  const remaining = filteredAndSorted.length - displayCount;

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setDisplayCount(PAGE_SIZE);
  };

  return (
    <>
      {/* Title + sort */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "2.5rem",
        }}
      >
        <div>
          <h1
            className="font-light text-stone-900 uppercase"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.15em" }}
          >
            All Products
          </h1>
          <p style={{ fontSize: "11px", color: "#a8a29e", marginTop: "0.5rem", letterSpacing: "0.1em" }}>
            {filteredAndSorted.length}{" "}
            {filteredAndSorted.length === 1 ? "item" : "items"}
          </p>
        </div>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          style={{
            fontSize: "10px",
            letterSpacing: "0.1em",
            color: "#78716c",
            background: "transparent",
            border: "1px solid #c4c0bc",
            outline: "none",
            cursor: "pointer",
            padding: "0.4rem 0.75rem",
          }}
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Category tabs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          borderBottom: "1px solid #e7e5e4",
          marginBottom: "2.5rem",
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              style={{
                padding: "0.875rem 1rem",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                borderBottom: isActive ? "2px solid #1c1917" : "2px solid transparent",
                color: isActive ? "#1c1917" : "#a8a29e",
                cursor: "pointer",
                whiteSpace: "nowrap",
                marginBottom: "-1px",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Product grid */}
      {visible.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {visible.map((product) => (
            <ProductListCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{ paddingTop: "6rem", paddingBottom: "6rem", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase" }}>
            No products found
          </p>
        </div>
      )}

      {/* Load More */}
      {remaining > 0 && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
          <button
            onClick={() => setDisplayCount((prev) => prev + PAGE_SIZE)}
            style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#1c1917",
              background: "none",
              border: "1px solid #c4c0bc",
              padding: "0.875rem 2.5rem",
              cursor: "pointer",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#1c1917")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#c4c0bc")}
          >
            Load More
            <span style={{ color: "#a8a29e", marginLeft: "0.5rem" }}>({remaining})</span>
          </button>
        </div>
      )}
    </>
  );
}
