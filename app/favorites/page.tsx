"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconHeart, IconShoppingBag } from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";
import { useWishlist, type WishlistItem } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

const IMG_W = 52;
const ROW_H = 76;
const GRID = `${IMG_W}px 1fr 100px 120px 40px`;

export default function FavoritesPage() {
  const { user } = useAuth();
  const { items, removeFromWishlist } = useWishlist();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [removingIds, setRemovingIds] = useState<Set<string>>(new Set());

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (mounted && !user) router.replace("/login");
  }, [mounted, user, router]);

  if (!mounted || !user) return null;

  const handleRemove = (id: string) => {
    setRemovingIds((prev) => new Set(prev).add(id));
    setTimeout(() => {
      removeFromWishlist(id);
      setRemovingIds((prev) => { const s = new Set(prev); s.delete(id); return s; });
    }, 350);
  };

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
        <Link
          href="/account"
          style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#78716c", textTransform: "uppercase", textDecoration: "none" }}
        >
          My Account
        </Link>
      </header>

      {/* Breadcrumb */}
      <div style={{ ...PADDING }}>
        <nav className="flex items-center gap-2" style={{ paddingTop: "4rem", paddingBottom: "1.5rem" }} aria-label="Breadcrumb">
          <Link
            href="/"
            className="hover:text-stone-900 transition-colors duration-200"
            style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a8a29e", textTransform: "uppercase" }}
          >
            Home
          </Link>
          <span style={{ fontSize: "10px", color: "#c4c0bc" }}>/</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#1c1917", textTransform: "uppercase" }}>
            Favourites
          </span>
        </nav>
      </div>

      {/* Page title */}
      <div style={{ ...PADDING, paddingTop: "2rem", paddingBottom: "2rem" }}>
        <h1
          className="font-light text-stone-900 uppercase"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.15em" }}
        >
          Favourites
        </h1>
        <p style={{ fontSize: "12px", color: "#a8a29e", marginTop: "0.5rem" }}>
          {items.length} {items.length === 1 ? "item" : "items"}
        </p>
      </div>

      {/* Content */}
      <div style={{ ...PADDING, flex: 1, paddingBottom: "6rem" }}>
        {items.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: GRID,
                gap: "1rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid #1c1917",
              }}
            >
              <span />
              {["Product", "Price", ""].map((h, i) => (
                <p key={i} style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase" }}>{h}</p>
              ))}
              <span />
            </div>

            {/* Rows */}
            {items.map((item) => (
              <FavouriteRow
                key={item.id}
                item={item}
                removing={removingIds.has(item.id)}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
          </>
        )}
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}

function FavouriteRow({
  item,
  removing,
  onRemove,
}: {
  item: WishlistItem;
  removing: boolean;
  onRemove: () => void;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({ id: item.id, name: item.name, brand: item.brand, price: item.price, image: item.image, size: item.size, color: item.color });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: GRID,
        gap: "1rem",
        alignItems: "center",
        height: `${ROW_H}px`,
        borderBottom: "1px solid #c4c0bc",
        opacity: removing ? 0 : 1,
        transform: removing ? "scale(0.98)" : "scale(1)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: `${IMG_W}px`, height: `${IMG_W * (4 / 3)}px`, flexShrink: 0, background: "#c4c0bc" }}>
        <Image src={item.image} alt={item.name} fill className="object-cover object-center" sizes="52px" />
      </div>

      {/* Info */}
      <div style={{ minWidth: 0 }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "2px" }}>
          {item.brand}
        </p>
        <p style={{ fontSize: "12px", color: "#1c1917", textTransform: "uppercase", letterSpacing: "0.05em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {item.name}
        </p>
        <p style={{ fontSize: "10px", color: "#a8a29e", marginTop: "2px" }}>
          {item.size} / {item.color}
        </p>
      </div>

      {/* Price */}
      <p style={{ fontSize: "12px", color: "#1c1917" }}>
        ¥{item.price.toLocaleString()}
      </p>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "9px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: added ? "#a8a29e" : "#1c1917",
          background: "none",
          border: "none",
          cursor: "pointer",
          transition: "color 0.2s",
          whiteSpace: "nowrap",
        }}
      >
        <IconShoppingBag size={13} stroke={1.5} />
        {added ? "Added" : "Add to Cart"}
      </button>

      {/* Remove */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={onRemove}
          aria-label="Remove from favourites"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#1c1917", display: "flex", alignItems: "center" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#a8a29e")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#1c1917")}
        >
          <IconHeart size={16} stroke={1.5} fill="currentColor" />
        </button>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "6rem", paddingBottom: "6rem", gap: "1.25rem" }}>
      <IconHeart size={36} stroke={1} style={{ color: "#c4c0bc" }} />
      <p
        className="font-light text-stone-900 text-center"
        style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", letterSpacing: "0.05em" }}
      >
        No favourites yet.
      </p>
      <p style={{ fontSize: "12px", color: "#a8a29e", letterSpacing: "0.05em" }}>
        Save items you love by tapping the heart icon.
      </p>
      <Link
        href="/products"
        className="group"
        style={{ marginTop: "1rem", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#1c1917", position: "relative" }}
      >
        Browse Collection
        <span className="absolute bottom-0 left-0 h-px bg-stone-900 w-0 group-hover:w-full transition-all duration-300" />
      </Link>
    </div>
  );
}
