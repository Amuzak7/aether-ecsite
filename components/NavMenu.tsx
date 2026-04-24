"use client";

import { useEffect } from "react";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";

const navLinks = [
  { label: "CART",     href: "/cart",      mobileOnly: true  },
  { label: "WISHLIST", href: "/favorites", mobileOnly: true  },
  { label: "NEW IN",   href: "/#new-in",   mobileOnly: false },
  { label: "PRODUCTS", href: "/products",  mobileOnly: false },
  { label: "ABOUT",    href: "/about",     mobileOnly: false },
  { label: "CONTACT",  href: "/contact",   mobileOnly: false },
  { label: "ACCOUNT",  href: "/account",   mobileOnly: true  },
];

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.3)" }}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 h-full w-80 z-50 flex flex-col
                    transition-transform duration-500 ease-in-out
                    right-0 md:right-auto md:left-0
                    border-l border-white/15 md:border-l-0 md:border-r md:border-white/15
                    ${isOpen ? "translate-x-0" : "translate-x-full md:-translate-x-full"}`}
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between pr-8 py-8"
          style={{ paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)" }}
        >
          <span
            className="text-white text-2xl font-light tracking-[0.3em]"
            style={{ fontFamily: "var(--font-brand)" }}
          >
            AETHER
          </span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <IconX size={20} stroke={1.5} />
          </button>
        </div>

        {/* Divider */}
        <div className="mr-8 border-t border-white/20" style={{ marginLeft: "clamp(0.75rem, 2vw, 2.5rem)" }} />

        {/* Nav links */}
        <nav
          className="flex flex-col gap-1 pr-8 pt-10 flex-1"
          style={{ paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className={`text-white/80 hover:text-white text-sm tracking-[0.2em]
                         py-4 border-b border-white/10 transition-colors duration-200
                         ${link.mobileOnly ? "md:hidden" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="pr-8 py-6" style={{ paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)" }}>
          <p className="text-white/30 text-xs tracking-widest">
            © 2025 AETHER
          </p>
        </div>
      </div>
    </>
  );
}
