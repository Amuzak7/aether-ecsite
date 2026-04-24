import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

const navLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Specified Commercial Transactions", href: "/specified-commercial-transactions" },
  { label: "About", href: "/about" },
];

const snsLinks = [
  { label: "Instagram", href: "/coming-soon", icon: IconBrandInstagram },
  { label: "X", href: "/coming-soon", icon: IconBrandX },
];

interface BottomNavProps {
  visibleLinks?: string[];
  showSns?: boolean;
}

export default function BottomNav({ visibleLinks, showSns = true }: BottomNavProps) {
  const links = visibleLinks
    ? navLinks.filter((l) => visibleLinks.includes(l.label))
    : navLinks;

  return (
    <footer
      className="border-t border-stone-400"
      style={{
        paddingTop: "3rem",
        paddingBottom: "2rem",
        paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
        paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
      }}
    >
      {/* Nav links — centered, wrap */}
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[11px] tracking-[0.15em] text-stone-600 hover:text-stone-900 uppercase transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Bottom row: copyright left / SNS right */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] text-stone-400 tracking-widest uppercase">
          © 2025 AETHER — All rights reserved
        </p>
        {showSns && (
          <div className="flex items-center gap-4">
            {snsLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-stone-400 hover:text-stone-900 transition-colors duration-200"
              >
                <Icon size={18} stroke={1.5} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
