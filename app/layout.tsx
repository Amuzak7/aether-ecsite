import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-brand",
});

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ja",
});

export const metadata: Metadata = {
  title: "AETHER — Modern Menswear",
  description:
    "AETHER is a modern menswear brand that redefines the boundaries of contemporary street style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${cormorant.variable} ${shippori.variable} antialiased`} style={{ backgroundColor: "#d6d3d1" }}>
        <AuthProvider><WishlistProvider><CartProvider>{children}</CartProvider></WishlistProvider></AuthProvider>
      </body>
    </html>
  );
}
