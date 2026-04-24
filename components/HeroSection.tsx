"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  IconShoppingCart,
  IconHeart,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import NavMenu from "./NavMenu";

const heroImages = [
  "/images/hero/hero-main1.jpg",
  "/images/hero/hero-main2.jpg",
  "/images/hero/hero-main3.jpg",
  "/images/hero/hero-main4.jpg",
];

const INTERVAL = 4500;
const FADE_DURATION = 1200;

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [panels, setPanels] = useState({ left: 0, right: 1 });

  useEffect(() => {
    const timer = setInterval(() => {
      setPanels((prev) => {
        let left;
        do { left = Math.floor(Math.random() * heroImages.length); }
        while (left === prev.left);

        let right;
        do { right = Math.floor(Math.random() * heroImages.length); }
        while (right === prev.right || right === left);

        return { left, right };
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const leftIndex = panels.left;
  const rightIndex = panels.right;

  return (
    <section className="relative w-full h-screen min-h-[600px] flex gap-1 bg-stone-900">
      {/* Left panel */}
      <div className="relative w-1/2 h-full overflow-hidden">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="AETHER"
            fill
            priority={i === 0}
            className="object-cover object-top"
            style={{
              filter: "brightness(0.7)",
              opacity: i === leftIndex ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            }}
            sizes="50vw"
          />
        ))}
      </div>

      {/* Right panel */}
      <div className="relative w-1/2 h-full overflow-hidden">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="AETHER"
            fill
            priority={i === 1}
            className="object-cover object-top"
            style={{
              filter: "brightness(0.7)",
              opacity: i === rightIndex ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            }}
            sizes="50vw"
          />
        ))}
      </div>

      {/* Header overlay */}
      <header
        className="absolute top-0 left-0 w-full z-20 py-7 flex items-center justify-between"
        style={{ paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)", paddingRight: "clamp(0.75rem, 2vw, 2.5rem)" }}
      >
        {/* Left: Brand name + Menu button (desktop only) */}
        <div className="flex items-center gap-6">
          <span
            className="text-white font-light"
            style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(3rem, 6vw, 5.5rem)", letterSpacing: "0" }}
          >
            AETHER
          </span>
          <button
            className="hidden md:block"
            onClick={() => setMenuOpen(true)}
            style={{
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: "9999px",
              padding: "0.3rem 0.9rem",
              cursor: "pointer",
              transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1c1917";
              e.currentTarget.style.borderColor = "#1c1917";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            menu
          </button>
        </div>

        {/* Right: Icons (desktop) + Menu button (mobile) */}
        <div className="flex items-center gap-5">
          <Link
            className="hidden md:block"
            href="/cart"
            aria-label="Cart"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          >
            <IconShoppingCart size={20} stroke={1.5} />
          </Link>
          <Link
            className="hidden md:block"
            href="/favorites"
            aria-label="Favourites"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          >
            <IconHeart size={20} stroke={1.5} />
          </Link>
          <Link
            className="hidden md:block"
            href="/account"
            aria-label="Account"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          >
            <IconUser size={20} stroke={1.5} />
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            style={{
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: "9999px",
              padding: "0.3rem 0.9rem",
              cursor: "pointer",
            }}
          >
            menu
          </button>
        </div>
      </header>

      {/* Slide-in nav menu */}
      <NavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </section>
  );
}
