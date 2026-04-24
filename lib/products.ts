export interface ProductSize {
  label: string;
  stock: "in-stock" | "low-stock" | "out-of-stock";
}

export interface ProductColor {
  name: string;
  hex: string;
  productId: string;
}

export interface ProductData {
  id: string;
  name: string;
  brand: string;
  price: number;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  category: string;
  description: string;
  details: string[];
  careInstructions: string[];
  related: string[];
}

const PRODUCTS: Record<string, ProductData> = {
  "oversized-tshirt-white": {
    id: "oversized-tshirt-white",
    name: "Oversized Tee — White",
    brand: "AETHER",
    price: 8800,
    images: [
      "/images/products/oversized-tshirt-white1.jpg",
      "/images/products/oversized-tshirt-white2.jpg",
      "/images/products/oversized-tshirt-white3.jpg",
    ],
    colors: [
      { name: "White", hex: "#f5f5f4", productId: "oversized-tshirt-white" },
      { name: "Beige", hex: "#c9b99a", productId: "oversized-tshirt-beige" },
      { name: "Charcoal", hex: "#44403c", productId: "oversized-tshirt-grey" },
    ],
    sizes: [
      { label: "S", stock: "in-stock" },
      { label: "M", stock: "low-stock" },
      { label: "L", stock: "in-stock" },
      { label: "XL", stock: "in-stock" },
    ],
    category: "Tops",
    description:
      "An oversized T-shirt featuring a drop shoulder and relaxed silhouette. Made from 100% organic cotton that softens with every wash. A minimal wardrobe essential that pairs naturally with any look.",
    details: [
      "Material: 100% Organic Cotton",
      "Drop shoulder",
      "Crew neck",
      "Oversized silhouette",
      "Made in Japan",
    ],
    careInstructions: [
      "Machine wash (laundry bag recommended)",
      "Do not bleach",
      "Do not tumble dry",
      "Cool iron",
    ],
    related: [
      "oversized-shortsleeveshirt-white",
      "oversized-trouser-offwhite",
      "oversized-denim-lightblue",
      "oversized-halfpants-white",
    ],
  },
  "oversized-tshirt-beige": {
    id: "oversized-tshirt-beige",
    name: "Oversized Tee — Beige",
    brand: "AETHER",
    price: 8800,
    images: [
      "/images/products/oversized-tshirt-beige.jpg",
      "/images/products/oversized-tshirt-white1.jpg",
      "/images/products/oversized-tshirt-white2.jpg",
    ],
    colors: [
      { name: "White", hex: "#f5f5f4", productId: "oversized-tshirt-white" },
      { name: "Beige", hex: "#c9b99a", productId: "oversized-tshirt-beige" },
      { name: "Charcoal", hex: "#44403c", productId: "oversized-tshirt-grey" },
    ],
    sizes: [
      { label: "S", stock: "in-stock" },
      { label: "M", stock: "in-stock" },
      { label: "L", stock: "low-stock" },
      { label: "XL", stock: "in-stock" },
    ],
    category: "Tops",
    description:
      "An oversized T-shirt featuring a drop shoulder and relaxed silhouette. Made from 100% organic cotton that softens with every wash. A minimal wardrobe essential that pairs naturally with any look.",
    details: [
      "Material: 100% Organic Cotton",
      "Drop shoulder",
      "Crew neck",
      "Oversized silhouette",
      "Made in Japan",
    ],
    careInstructions: [
      "Machine wash (laundry bag recommended)",
      "Do not bleach",
      "Do not tumble dry",
      "Cool iron",
    ],
    related: [
      "oversized-tshirt-white",
      "oversized-shortsleeveshirt-white",
      "oversized-trouser-offwhite",
      "oversized-halfpants-white",
    ],
  },
  "oversized-tshirt-grey": {
    id: "oversized-tshirt-grey",
    name: "Oversized Tee — Charcoal",
    brand: "AETHER",
    price: 8800,
    images: [
      "/images/products/oversized-tshirt-grey.jpg",
      "/images/products/oversized-tshirt-white1.jpg",
      "/images/products/oversized-tshirt-white3.jpg",
    ],
    colors: [
      { name: "White", hex: "#f5f5f4", productId: "oversized-tshirt-white" },
      { name: "Beige", hex: "#c9b99a", productId: "oversized-tshirt-beige" },
      { name: "Charcoal", hex: "#44403c", productId: "oversized-tshirt-grey" },
    ],
    sizes: [
      { label: "S", stock: "in-stock" },
      { label: "M", stock: "in-stock" },
      { label: "L", stock: "in-stock" },
      { label: "XL", stock: "low-stock" },
    ],
    category: "Tops",
    description:
      "An oversized T-shirt featuring a drop shoulder and relaxed silhouette. Made from 100% organic cotton that softens with every wash. A minimal wardrobe essential that pairs naturally with any look.",
    details: [
      "Material: 100% Organic Cotton",
      "Drop shoulder",
      "Crew neck",
      "Oversized silhouette",
      "Made in Japan",
    ],
    careInstructions: [
      "Machine wash (laundry bag recommended)",
      "Do not bleach",
      "Do not tumble dry",
      "Cool iron",
    ],
    related: [
      "oversized-tshirt-white",
      "oversized-shortsleeveshirt-white",
      "oversized-trouser-black",
      "oversized-halfpants-grey",
    ],
  },
  "oversized-shortsleeveshirt-white": {
    id: "oversized-shortsleeveshirt-white",
    name: "S/S Shirt — White",
    brand: "AETHER",
    price: 14300,
    images: [
      "/images/products/oversized-shortsleeveshirt-white1.jpg",
      "/images/products/oversized-shortsleeveshirt-white2.jpg",
      "/images/products/oversized-shortsleeveshirt-white3.jpg",
    ],
    colors: [
      {
        name: "White",
        hex: "#f5f5f4",
        productId: "oversized-shortsleeveshirt-white",
      },
    ],
    sizes: [
      { label: "S", stock: "in-stock" },
      { label: "M", stock: "in-stock" },
      { label: "L", stock: "low-stock" },
      { label: "XL", stock: "in-stock" },
    ],
    category: "Tops",
    description:
      "A short-sleeve shirt with a relaxed oversized silhouette. Crafted from 100% quality cotton that works equally well worn alone or layered. The open collar adds a casual, effortless edge.",
    details: [
      "Material: 100% Cotton",
      "Open collar",
      "Oversized silhouette",
      "Chest pocket",
      "Made in Japan",
    ],
    careInstructions: [
      "Machine wash (laundry bag recommended)",
      "Do not bleach",
      "Do not tumble dry",
      "Medium iron",
    ],
    related: [
      "oversized-tshirt-white",
      "oversized-trouser-offwhite",
      "oversized-halfpants-white",
      "oversized-denim-lightblue",
    ],
  },
  "oversized-denim-lightblue": {
    id: "oversized-denim-lightblue",
    name: "Denim Jacket — Light Blue",
    brand: "AETHER",
    price: 28600,
    images: [
      "/images/products/oversized-denim-lightblue.jpg",
      "/images/products/oversized-denim-rigid1.jpg",
      "/images/products/oversized-denim-rigid2.jpg",
    ],
    colors: [
      {
        name: "Light Blue",
        hex: "#a8c4d4",
        productId: "oversized-denim-lightblue",
      },
      { name: "Rigid", hex: "#2d3a54", productId: "oversized-denim-rigid" },
    ],
    sizes: [
      { label: "S", stock: "in-stock" },
      { label: "M", stock: "in-stock" },
      { label: "L", stock: "in-stock" },
      { label: "XL", stock: "low-stock" },
    ],
    category: "Outerwear",
    description:
      "A light blue washed denim jacket with a contemporary oversized fit. An updated take on a classic silhouette — simply throw it over a tee to complete any look.",
    details: [
      "Material: 100% Cotton",
      "Washed finish",
      "Front button closure",
      "4 pockets",
      "Made in Japan",
    ],
    careInstructions: [
      "Machine wash separately",
      "Do not bleach",
      "Do not tumble dry",
      "Medium iron",
    ],
    related: [
      "oversized-tshirt-white",
      "oversized-trouser-black",
      "oversized-shortsleeveshirt-white",
      "oversized-halfpants-white",
    ],
  },
  "oversized-denim-rigid": {
    id: "oversized-denim-rigid",
    name: "Denim Jacket — Rigid",
    brand: "AETHER",
    price: 28600,
    images: [
      "/images/products/oversized-denim-rigid1.jpg",
      "/images/products/oversized-denim-rigid2.jpg",
      "/images/products/oversized-denim-lightblue.jpg",
    ],
    colors: [
      {
        name: "Light Blue",
        hex: "#a8c4d4",
        productId: "oversized-denim-lightblue",
      },
      { name: "Rigid", hex: "#2d3a54", productId: "oversized-denim-rigid" },
    ],
    sizes: [
      { label: "S", stock: "out-of-stock" },
      { label: "M", stock: "in-stock" },
      { label: "L", stock: "in-stock" },
      { label: "XL", stock: "in-stock" },
    ],
    category: "Outerwear",
    description:
      "A raw denim jacket made from unwashed rigid denim that develops unique character with wear. Cut in a modern silhouette that honours the timeless appeal of classic denim.",
    details: [
      "Material: 100% Cotton",
      "Unwashed rigid denim",
      "Front button closure",
      "4 pockets",
      "Made in Japan",
    ],
    careInstructions: [
      "Hand wash recommended",
      "Wash inside out, separately",
      "Do not bleach",
      "Do not tumble dry",
    ],
    related: [
      "oversized-tshirt-grey",
      "oversized-trouser-black",
      "oversized-shortsleeveshirt-white",
      "oversized-halfpants-grey",
    ],
  },
  "oversized-halfpants-white": {
    id: "oversized-halfpants-white",
    name: "Wide Half Pants — White",
    brand: "AETHER",
    price: 12100,
    images: [
      "/images/products/oversized-halfpants-white.jpg",
      "/images/products/oversized-halfpants-grey.jpg",
      "/images/products/oversized-trouser-offwhite1.jpg",
    ],
    colors: [
      { name: "White", hex: "#f5f5f4", productId: "oversized-halfpants-white" },
      { name: "Grey", hex: "#a8a29e", productId: "oversized-halfpants-grey" },
    ],
    sizes: [
      { label: "S", stock: "in-stock" },
      { label: "M", stock: "in-stock" },
      { label: "L", stock: "in-stock" },
      { label: "XL", stock: "in-stock" },
    ],
    category: "Bottoms",
    description:
      "Wide-silhouette half pants in a relaxed fit. Lightweight 100% cotton makes them ideal for warm-weather styling, with side and back pockets for everyday practicality.",
    details: [
      "Material: 100% Cotton",
      "Wide silhouette",
      "Elasticated waist",
      "Side and back pockets",
      "Made in Japan",
    ],
    careInstructions: [
      "Machine wash",
      "Do not bleach",
      "Do not tumble dry",
      "Cool iron",
    ],
    related: [
      "oversized-tshirt-white",
      "oversized-shortsleeveshirt-white",
      "oversized-trouser-offwhite",
      "oversized-denim-lightblue",
    ],
  },
  "oversized-halfpants-grey": {
    id: "oversized-halfpants-grey",
    name: "Wide Half Pants — Grey",
    brand: "AETHER",
    price: 12100,
    images: [
      "/images/products/oversized-halfpants-grey.jpg",
      "/images/products/oversized-halfpants-white.jpg",
      "/images/products/oversized-trouser-black1.jpg",
    ],
    colors: [
      { name: "White", hex: "#f5f5f4", productId: "oversized-halfpants-white" },
      { name: "Grey", hex: "#a8a29e", productId: "oversized-halfpants-grey" },
    ],
    sizes: [
      { label: "S", stock: "in-stock" },
      { label: "M", stock: "low-stock" },
      { label: "L", stock: "in-stock" },
      { label: "XL", stock: "in-stock" },
    ],
    category: "Bottoms",
    description:
      "Wide-silhouette half pants in a relaxed fit. Lightweight 100% cotton makes them ideal for warm-weather styling, with side and back pockets for everyday practicality.",
    details: [
      "Material: 100% Cotton",
      "Wide silhouette",
      "Elasticated waist",
      "Side and back pockets",
      "Made in Japan",
    ],
    careInstructions: [
      "Machine wash",
      "Do not bleach",
      "Do not tumble dry",
      "Cool iron",
    ],
    related: [
      "oversized-tshirt-grey",
      "oversized-shortsleeveshirt-white",
      "oversized-trouser-black",
      "oversized-denim-rigid",
    ],
  },
  "oversized-trouser-black": {
    id: "oversized-trouser-black",
    name: "Wide Trousers — Black",
    brand: "AETHER",
    price: 16500,
    images: [
      "/images/products/oversized-trouser-black1.jpg",
      "/images/products/oversized-trouser-black2.jpg",
      "/images/products/oversized-trouser-offwhite1.jpg",
    ],
    colors: [
      { name: "Black", hex: "#1c1917", productId: "oversized-trouser-black" },
      {
        name: "Off White",
        hex: "#e7e5e4",
        productId: "oversized-trouser-offwhite",
      },
    ],
    sizes: [
      { label: "S", stock: "in-stock" },
      { label: "M", stock: "in-stock" },
      { label: "L", stock: "in-stock" },
      { label: "XL", stock: "low-stock" },
    ],
    category: "Bottoms",
    description:
      "Contemporary wide-leg trousers combining a tapered silhouette with a generous hem. The natural lustre and refined drape of the cotton fabric make them equally suited to set-up styling or as a standalone wardrobe staple.",
    details: [
      "Material: 100% Cotton",
      "Wide tapered silhouette",
      "Centre crease",
      "2-way waist (elastic + drawcord)",
      "Made in Japan",
    ],
    careInstructions: [
      "Machine wash (laundry bag recommended)",
      "Do not bleach",
      "Do not tumble dry",
      "Medium iron (centre crease maintenance recommended)",
    ],
    related: [
      "oversized-tshirt-grey",
      "oversized-shortsleeveshirt-white",
      "oversized-denim-rigid",
      "oversized-halfpants-grey",
    ],
  },
  "oversized-trouser-offwhite": {
    id: "oversized-trouser-offwhite",
    name: "Wide Trousers — Off White",
    brand: "AETHER",
    price: 16500,
    images: [
      "/images/products/oversized-trouser-offwhite1.jpg",
      "/images/products/oversized-trouser-offwhite2.jpg",
      "/images/products/oversized-trouser-black1.jpg",
    ],
    colors: [
      { name: "Black", hex: "#1c1917", productId: "oversized-trouser-black" },
      {
        name: "Off White",
        hex: "#e7e5e4",
        productId: "oversized-trouser-offwhite",
      },
    ],
    sizes: [
      { label: "S", stock: "in-stock" },
      { label: "M", stock: "low-stock" },
      { label: "L", stock: "in-stock" },
      { label: "XL", stock: "in-stock" },
    ],
    category: "Bottoms",
    description:
      "Contemporary wide-leg trousers combining a tapered silhouette with a generous hem. The natural lustre and refined drape of the cotton fabric make them equally suited to set-up styling or as a standalone wardrobe staple.",
    details: [
      "Material: 100% Cotton",
      "Wide tapered silhouette",
      "Centre crease",
      "2-way waist (elastic + drawcord)",
      "Made in Japan",
    ],
    careInstructions: [
      "Machine wash (laundry bag recommended)",
      "Do not bleach",
      "Do not tumble dry",
      "Medium iron (centre crease maintenance recommended)",
    ],
    related: [
      "oversized-tshirt-white",
      "oversized-shortsleeveshirt-white",
      "oversized-denim-lightblue",
      "oversized-halfpants-white",
    ],
  },
};

export function getProduct(id: string): ProductData | null {
  return PRODUCTS[id] ?? null;
}

export function getRelatedProducts(ids: string[]): ProductData[] {
  return ids.map((id) => PRODUCTS[id]).filter(Boolean) as ProductData[];
}

export { PRODUCTS };
