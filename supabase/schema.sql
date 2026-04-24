-- ============================================================
-- AETHER EC — Supabase Schema + Seed Data
-- Run this in Supabase SQL Editor
-- ============================================================

-- ── Tables ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS products (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug              TEXT UNIQUE NOT NULL,
  name              TEXT NOT NULL,
  brand             TEXT NOT NULL DEFAULT 'AETHER',
  price             INTEGER NOT NULL,
  category          TEXT NOT NULL,
  description       TEXT NOT NULL DEFAULT '',
  image_url         TEXT NOT NULL,
  images            TEXT[]  NOT NULL DEFAULT '{}',
  details           TEXT[]  NOT NULL DEFAULT '{}',
  care_instructions TEXT[]  NOT NULL DEFAULT '{}',
  created_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_skus (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  size       TEXT NOT NULL,
  stock      INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  UNIQUE(product_id, size)
);

CREATE TABLE IF NOT EXISTS product_colors (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  color_name  TEXT NOT NULL,
  hex         TEXT NOT NULL,
  linked_slug TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS product_related (
  product_id    UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  related_slug  TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (product_id, related_slug)
);

-- ── Products ─────────────────────────────────────────────────

INSERT INTO products (id, slug, name, brand, price, category, description, image_url, images, details, care_instructions) VALUES

-- Tops
('00000001-0000-0000-0000-000000000000', 'oversized-tshirt-white', 'Oversized Tee — White', 'AETHER', 8800, 'Tops',
  'An oversized T-shirt featuring a drop shoulder and relaxed silhouette. Made from 100% organic cotton that softens with every wash. A minimal wardrobe essential that pairs naturally with any look.',
  '/images/products/oversized-tshirt-white1.jpg',
  ARRAY['/images/products/oversized-tshirt-white1.jpg','/images/products/oversized-tshirt-white2.jpg','/images/products/oversized-tshirt-white3.jpg'],
  ARRAY['Material: 100% Organic Cotton','Drop shoulder','Crew neck','Oversized silhouette','Made in Japan'],
  ARRAY['Machine wash (laundry bag recommended)','Do not bleach','Do not tumble dry','Cool iron']),

('00000002-0000-0000-0000-000000000000', 'oversized-tshirt-beige', 'Oversized Tee — Beige', 'AETHER', 8800, 'Tops',
  'An oversized T-shirt featuring a drop shoulder and relaxed silhouette. Made from 100% organic cotton that softens with every wash. A minimal wardrobe essential that pairs naturally with any look.',
  '/images/products/oversized-tshirt-beige.jpg',
  ARRAY['/images/products/oversized-tshirt-beige.jpg','/images/products/oversized-tshirt-white1.jpg','/images/products/oversized-tshirt-white2.jpg'],
  ARRAY['Material: 100% Organic Cotton','Drop shoulder','Crew neck','Oversized silhouette','Made in Japan'],
  ARRAY['Machine wash (laundry bag recommended)','Do not bleach','Do not tumble dry','Cool iron']),

('00000003-0000-0000-0000-000000000000', 'oversized-tshirt-grey', 'Oversized Tee — Charcoal', 'AETHER', 8800, 'Tops',
  'An oversized T-shirt featuring a drop shoulder and relaxed silhouette. Made from 100% organic cotton that softens with every wash. A minimal wardrobe essential that pairs naturally with any look.',
  '/images/products/oversized-tshirt-grey.jpg',
  ARRAY['/images/products/oversized-tshirt-grey.jpg','/images/products/oversized-tshirt-white1.jpg','/images/products/oversized-tshirt-white3.jpg'],
  ARRAY['Material: 100% Organic Cotton','Drop shoulder','Crew neck','Oversized silhouette','Made in Japan'],
  ARRAY['Machine wash (laundry bag recommended)','Do not bleach','Do not tumble dry','Cool iron']),

('00000004-0000-0000-0000-000000000000', 'oversized-shortsleeveshirt-white', 'S/S Shirt — White', 'AETHER', 14300, 'Tops',
  'A short-sleeve shirt with a relaxed oversized silhouette. Crafted from 100% quality cotton that works equally well worn alone or layered. The open collar adds a casual, effortless edge.',
  '/images/products/oversized-shortsleeveshirt-white1.jpg',
  ARRAY['/images/products/oversized-shortsleeveshirt-white1.jpg','/images/products/oversized-shortsleeveshirt-white2.jpg','/images/products/oversized-shortsleeveshirt-white3.jpg'],
  ARRAY['Material: 100% Cotton','Open collar','Oversized silhouette','Chest pocket','Made in Japan'],
  ARRAY['Machine wash (laundry bag recommended)','Do not bleach','Do not tumble dry','Medium iron']),

('00000005-0000-0000-0000-000000000000', 'longsleeveshirt-white', 'L/S Shirt — White', 'AETHER', 16500, 'Tops',
  'A long-sleeve shirt cut with a relaxed, oversized silhouette. Crisp white cotton and a clean open collar make it an effortless layering piece through every season.',
  '/images/products/oversized-shortsleeveshirt-white2.jpg',
  ARRAY['/images/products/oversized-shortsleeveshirt-white2.jpg','/images/products/oversized-shortsleeveshirt-white1.jpg'],
  ARRAY['Material: 100% Cotton','Open collar','Oversized silhouette','Chest pocket','Made in Japan'],
  ARRAY['Machine wash (laundry bag recommended)','Do not bleach','Do not tumble dry','Medium iron']),

('00000006-0000-0000-0000-000000000000', 'knit-pullover-grey', 'Knit Pullover — Grey', 'AETHER', 22000, 'Tops',
  'A soft mid-gauge knit pullover with a relaxed silhouette. The heather grey tone and subtle texture add depth to minimal looks. A considered wardrobe staple for cooler months.',
  '/images/products/oversized-tshirt-grey.jpg',
  ARRAY['/images/products/oversized-tshirt-grey.jpg'],
  ARRAY['Material: 60% Cotton, 40% Wool','Crew neck','Relaxed silhouette','Ribbed hem and cuffs','Made in Japan'],
  ARRAY['Hand wash recommended','Do not bleach','Do not tumble dry','Lay flat to dry']),

-- Bottoms
('00000007-0000-0000-0000-000000000000', 'oversized-trouser-black', 'Wide Trousers — Black', 'AETHER', 16500, 'Bottoms',
  'Contemporary wide-leg trousers combining a tapered silhouette with a generous hem. The natural lustre and refined drape of the cotton fabric make them equally suited to set-up styling or as a standalone wardrobe staple.',
  '/images/products/oversized-trouser-black1.jpg',
  ARRAY['/images/products/oversized-trouser-black1.jpg','/images/products/oversized-trouser-black2.jpg','/images/products/oversized-trouser-offwhite1.jpg'],
  ARRAY['Material: 100% Cotton','Wide tapered silhouette','Centre crease','2-way waist (elastic + drawcord)','Made in Japan'],
  ARRAY['Machine wash (laundry bag recommended)','Do not bleach','Do not tumble dry','Medium iron (centre crease maintenance recommended)']),

('00000008-0000-0000-0000-000000000000', 'oversized-trouser-offwhite', 'Wide Trousers — Off White', 'AETHER', 16500, 'Bottoms',
  'Contemporary wide-leg trousers combining a tapered silhouette with a generous hem. The natural lustre and refined drape of the cotton fabric make them equally suited to set-up styling or as a standalone wardrobe staple.',
  '/images/products/oversized-trouser-offwhite1.jpg',
  ARRAY['/images/products/oversized-trouser-offwhite1.jpg','/images/products/oversized-trouser-offwhite2.jpg','/images/products/oversized-trouser-black1.jpg'],
  ARRAY['Material: 100% Cotton','Wide tapered silhouette','Centre crease','2-way waist (elastic + drawcord)','Made in Japan'],
  ARRAY['Machine wash (laundry bag recommended)','Do not bleach','Do not tumble dry','Medium iron (centre crease maintenance recommended)']),

('00000009-0000-0000-0000-000000000000', 'oversized-halfpants-white', 'Wide Half Pants — White', 'AETHER', 12100, 'Bottoms',
  'Wide-silhouette half pants in a relaxed fit. Lightweight 100% cotton makes them ideal for warm-weather styling, with side and back pockets for everyday practicality.',
  '/images/products/oversized-halfpants-white.jpg',
  ARRAY['/images/products/oversized-halfpants-white.jpg','/images/products/oversized-halfpants-grey.jpg','/images/products/oversized-trouser-offwhite1.jpg'],
  ARRAY['Material: 100% Cotton','Wide silhouette','Elasticated waist','Side and back pockets','Made in Japan'],
  ARRAY['Machine wash','Do not bleach','Do not tumble dry','Cool iron']),

('00000010-0000-0000-0000-000000000000', 'oversized-halfpants-grey', 'Wide Half Pants — Grey', 'AETHER', 12100, 'Bottoms',
  'Wide-silhouette half pants in a relaxed fit. Lightweight 100% cotton makes them ideal for warm-weather styling, with side and back pockets for everyday practicality.',
  '/images/products/oversized-halfpants-grey.jpg',
  ARRAY['/images/products/oversized-halfpants-grey.jpg','/images/products/oversized-halfpants-white.jpg','/images/products/oversized-trouser-black1.jpg'],
  ARRAY['Material: 100% Cotton','Wide silhouette','Elasticated waist','Side and back pockets','Made in Japan'],
  ARRAY['Machine wash','Do not bleach','Do not tumble dry','Cool iron']),

('00000011-0000-0000-0000-000000000000', 'tapered-trouser-black', 'Tapered Trousers — Black', 'AETHER', 18700, 'Bottoms',
  'Sleek tapered trousers with a clean, refined silhouette. A versatile foundation piece for both dressed-up and casual styling.',
  '/images/products/oversized-trouser-black2.jpg',
  ARRAY['/images/products/oversized-trouser-black2.jpg','/images/products/oversized-trouser-black1.jpg'],
  ARRAY['Material: 100% Cotton','Tapered silhouette','Centre crease','Zip fly','Made in Japan'],
  ARRAY['Machine wash (laundry bag recommended)','Do not bleach','Do not tumble dry','Medium iron']),

('00000012-0000-0000-0000-000000000000', 'cargo-shorts-beige', 'Cargo Shorts — Beige', 'AETHER', 13200, 'Bottoms',
  'Relaxed cargo shorts with utility side pockets. Easy summer wear that balances function and understated style.',
  '/images/products/oversized-halfpants-grey.jpg',
  ARRAY['/images/products/oversized-halfpants-grey.jpg'],
  ARRAY['Material: 100% Cotton','Relaxed fit','Cargo side pockets','Elasticated waist','Made in Japan'],
  ARRAY['Machine wash','Do not bleach','Do not tumble dry','Cool iron']),

-- Outerwear
('00000013-0000-0000-0000-000000000000', 'oversized-denim-lightblue', 'Denim Jacket — Light Blue', 'AETHER', 28600, 'Outerwear',
  'A light blue washed denim jacket with a contemporary oversized fit. An updated take on a classic silhouette — simply throw it over a tee to complete any look.',
  '/images/products/oversized-denim-lightblue.jpg',
  ARRAY['/images/products/oversized-denim-lightblue.jpg','/images/products/oversized-denim-rigid1.jpg','/images/products/oversized-denim-rigid2.jpg'],
  ARRAY['Material: 100% Cotton','Washed finish','Front button closure','4 pockets','Made in Japan'],
  ARRAY['Machine wash separately','Do not bleach','Do not tumble dry','Medium iron']),

('00000014-0000-0000-0000-000000000000', 'oversized-denim-rigid', 'Denim Jacket — Rigid', 'AETHER', 28600, 'Outerwear',
  'A raw denim jacket made from unwashed rigid denim that develops unique character with wear. Cut in a modern silhouette that honours the timeless appeal of classic denim.',
  '/images/products/oversized-denim-rigid1.jpg',
  ARRAY['/images/products/oversized-denim-rigid1.jpg','/images/products/oversized-denim-rigid2.jpg','/images/products/oversized-denim-lightblue.jpg'],
  ARRAY['Material: 100% Cotton','Unwashed rigid denim','Front button closure','4 pockets','Made in Japan'],
  ARRAY['Hand wash recommended','Wash inside out, separately','Do not bleach','Do not tumble dry']),

('00000015-0000-0000-0000-000000000000', 'coaches-jacket-black', 'Coaches Jacket — Black', 'AETHER', 33000, 'Outerwear',
  'A classic coaches jacket in crisp black. Lightweight and versatile — the ideal transitional layering piece with a clean, sport-influenced silhouette.',
  '/images/products/oversized-denim-rigid2.jpg',
  ARRAY['/images/products/oversized-denim-rigid2.jpg'],
  ARRAY['Material: 100% Nylon','Snap button closure','Slash pockets','Relaxed fit','Made in Japan'],
  ARRAY['Machine wash','Do not bleach','Do not tumble dry','Cool iron']),

('00000016-0000-0000-0000-000000000000', 'nylon-blouson-olive', 'Nylon Blouson — Olive', 'AETHER', 38500, 'Outerwear',
  'A technical nylon blouson in earthy olive. Water-resistant fabric meets a contemporary silhouette — functional, refined, and ready for anything.',
  '/images/products/oversized-denim-lightblue.jpg',
  ARRAY['/images/products/oversized-denim-lightblue.jpg'],
  ARRAY['Material: 100% Nylon (water resistant)','Zip front closure','Inner pockets','Adjustable hem','Made in Japan'],
  ARRAY['Machine wash','Do not bleach','Do not tumble dry','Do not iron']),

-- Accessories
('00000017-0000-0000-0000-000000000000', 'cotton-cap-black', 'Cotton Cap — Black', 'AETHER', 6600, 'Accessories',
  'A clean unstructured cotton cap in black. Six-panel construction with a pre-curved brim. Simple, minimal, and essential.',
  '/images/products/oversized-trouser-black1.jpg',
  ARRAY['/images/products/oversized-trouser-black1.jpg'],
  ARRAY['Material: 100% Cotton','Unstructured','Pre-curved brim','Adjustable strap','Made in Japan'],
  ARRAY['Spot clean only','Do not bleach','Air dry']),

('00000018-0000-0000-0000-000000000000', 'tote-bag-natural', 'Tote Bag — Natural', 'AETHER', 8800, 'Accessories',
  'A durable canvas tote in natural cotton. Generous proportions and reinforced handles for everyday use. Minimal and functional.',
  '/images/products/oversized-halfpants-white.jpg',
  ARRAY['/images/products/oversized-halfpants-white.jpg'],
  ARRAY['Material: 100% Cotton Canvas','Reinforced handles','Interior pocket','Made in Japan'],
  ARRAY['Machine wash','Do not bleach','Air dry','Cool iron']),

('00000019-0000-0000-0000-000000000000', 'wool-beanie-charcoal', 'Wool Beanie — Charcoal', 'AETHER', 5500, 'Accessories',
  'A soft wool-blend beanie in charcoal. Warm, comfortable, and understated — a quiet essential for colder months.',
  '/images/products/oversized-tshirt-grey.jpg',
  ARRAY['/images/products/oversized-tshirt-grey.jpg'],
  ARRAY['Material: 80% Wool, 20% Acrylic','Ribbed knit','One size','Made in Japan'],
  ARRAY['Hand wash recommended','Do not bleach','Do not tumble dry','Lay flat to dry']),

('00000020-0000-0000-0000-000000000000', 'canvas-belt-black', 'Canvas Belt — Black', 'AETHER', 4400, 'Accessories',
  'A clean woven canvas belt with a matte gunmetal buckle. Adjustable and understated — a functional finishing touch.',
  '/images/products/oversized-trouser-offwhite1.jpg',
  ARRAY['/images/products/oversized-trouser-offwhite1.jpg'],
  ARRAY['Material: 100% Cotton Canvas','Matte gunmetal buckle','Adjustable fit','Made in Japan'],
  ARRAY['Spot clean only','Air dry']),

-- Shoes
('00000021-0000-0000-0000-000000000000', 'canvas-sneaker-white', 'Canvas Sneakers — White', 'AETHER', 19800, 'Shoes',
  'A clean low-profile canvas sneaker in white. Minimal construction and a cupsole design — versatile, timeless, essential.',
  '/images/products/oversized-tshirt-white1.jpg',
  ARRAY['/images/products/oversized-tshirt-white1.jpg'],
  ARRAY['Material: Canvas upper','Rubber cupsole','Cotton lining','Made in Japan'],
  ARRAY['Spot clean only','Air dry','Do not machine wash']),

('00000022-0000-0000-0000-000000000000', 'leather-derby-black', 'Leather Derby — Black', 'AETHER', 44000, 'Shoes',
  'A classic leather derby shoe crafted from full-grain leather. Clean lace-up construction and a sleek profile — elevated and timeless.',
  '/images/products/oversized-trouser-black2.jpg',
  ARRAY['/images/products/oversized-trouser-black2.jpg'],
  ARRAY['Material: Full-grain leather upper','Leather insole','Rubber outsole','Made in Japan'],
  ARRAY['Wipe clean with a dry cloth','Use leather conditioner','Store with shoe trees','Keep away from moisture']),

('00000023-0000-0000-0000-000000000000', 'suede-loafer-beige', 'Suede Loafer — Beige', 'AETHER', 38500, 'Shoes',
  'A relaxed suede loafer in warm beige. Penny strap and a cushioned insole — effortless and sophisticated for any occasion.',
  '/images/products/oversized-tshirt-beige.jpg',
  ARRAY['/images/products/oversized-tshirt-beige.jpg'],
  ARRAY['Material: Suede upper','Leather insole','Rubber outsole','Penny loafer strap','Made in Japan'],
  ARRAY['Brush with suede brush to clean','Use suede protector spray','Store away from direct sunlight','Keep away from moisture']),

('00000024-0000-0000-0000-000000000000', 'canvas-slipon-white', 'Canvas Slip-On — White', 'AETHER', 16500, 'Shoes',
  'A simple canvas slip-on in white. Elastic gore construction for easy on-off wear. Clean, minimal, and effortlessly casual.',
  '/images/products/oversized-halfpants-white.jpg',
  ARRAY['/images/products/oversized-halfpants-white.jpg'],
  ARRAY['Material: Canvas upper','Elastic gore','Rubber outsole','Made in Japan'],
  ARRAY['Spot clean only','Air dry','Do not machine wash']);

-- ── Product SKUs (sizes + stock) ─────────────────────────────

INSERT INTO product_skus (product_id, size, stock) VALUES
-- oversized-tshirt-white
('00000001-0000-0000-0000-000000000000','S',15),
('00000001-0000-0000-0000-000000000000','M',3),
('00000001-0000-0000-0000-000000000000','L',15),
('00000001-0000-0000-0000-000000000000','XL',10),
-- oversized-tshirt-beige
('00000002-0000-0000-0000-000000000000','S',15),
('00000002-0000-0000-0000-000000000000','M',15),
('00000002-0000-0000-0000-000000000000','L',3),
('00000002-0000-0000-0000-000000000000','XL',15),
-- oversized-tshirt-grey
('00000003-0000-0000-0000-000000000000','S',15),
('00000003-0000-0000-0000-000000000000','M',15),
('00000003-0000-0000-0000-000000000000','L',15),
('00000003-0000-0000-0000-000000000000','XL',3),
-- oversized-shortsleeveshirt-white
('00000004-0000-0000-0000-000000000000','S',15),
('00000004-0000-0000-0000-000000000000','M',15),
('00000004-0000-0000-0000-000000000000','L',3),
('00000004-0000-0000-0000-000000000000','XL',15),
-- longsleeveshirt-white
('00000005-0000-0000-0000-000000000000','S',10),
('00000005-0000-0000-0000-000000000000','M',10),
('00000005-0000-0000-0000-000000000000','L',5),
('00000005-0000-0000-0000-000000000000','XL',10),
-- knit-pullover-grey
('00000006-0000-0000-0000-000000000000','S',8),
('00000006-0000-0000-0000-000000000000','M',8),
('00000006-0000-0000-0000-000000000000','L',4),
('00000006-0000-0000-0000-000000000000','XL',2),
-- oversized-trouser-black
('00000007-0000-0000-0000-000000000000','S',15),
('00000007-0000-0000-0000-000000000000','M',15),
('00000007-0000-0000-0000-000000000000','L',15),
('00000007-0000-0000-0000-000000000000','XL',3),
-- oversized-trouser-offwhite
('00000008-0000-0000-0000-000000000000','S',15),
('00000008-0000-0000-0000-000000000000','M',3),
('00000008-0000-0000-0000-000000000000','L',15),
('00000008-0000-0000-0000-000000000000','XL',15),
-- oversized-halfpants-white
('00000009-0000-0000-0000-000000000000','S',15),
('00000009-0000-0000-0000-000000000000','M',15),
('00000009-0000-0000-0000-000000000000','L',15),
('00000009-0000-0000-0000-000000000000','XL',15),
-- oversized-halfpants-grey
('00000010-0000-0000-0000-000000000000','S',15),
('00000010-0000-0000-0000-000000000000','M',3),
('00000010-0000-0000-0000-000000000000','L',15),
('00000010-0000-0000-0000-000000000000','XL',15),
-- tapered-trouser-black
('00000011-0000-0000-0000-000000000000','S',8),
('00000011-0000-0000-0000-000000000000','M',8),
('00000011-0000-0000-0000-000000000000','L',4),
('00000011-0000-0000-0000-000000000000','XL',2),
-- cargo-shorts-beige
('00000012-0000-0000-0000-000000000000','S',10),
('00000012-0000-0000-0000-000000000000','M',10),
('00000012-0000-0000-0000-000000000000','L',10),
('00000012-0000-0000-0000-000000000000','XL',5),
-- oversized-denim-lightblue
('00000013-0000-0000-0000-000000000000','S',15),
('00000013-0000-0000-0000-000000000000','M',15),
('00000013-0000-0000-0000-000000000000','L',15),
('00000013-0000-0000-0000-000000000000','XL',3),
-- oversized-denim-rigid
('00000014-0000-0000-0000-000000000000','S',0),
('00000014-0000-0000-0000-000000000000','M',15),
('00000014-0000-0000-0000-000000000000','L',15),
('00000014-0000-0000-0000-000000000000','XL',15),
-- coaches-jacket-black
('00000015-0000-0000-0000-000000000000','S',6),
('00000015-0000-0000-0000-000000000000','M',6),
('00000015-0000-0000-0000-000000000000','L',3),
('00000015-0000-0000-0000-000000000000','XL',2),
-- nylon-blouson-olive
('00000016-0000-0000-0000-000000000000','S',5),
('00000016-0000-0000-0000-000000000000','M',5),
('00000016-0000-0000-0000-000000000000','L',3),
('00000016-0000-0000-0000-000000000000','XL',2),
-- cotton-cap-black (one size)
('00000017-0000-0000-0000-000000000000','One Size',20),
-- tote-bag-natural (one size)
('00000018-0000-0000-0000-000000000000','One Size',20),
-- wool-beanie-charcoal (one size)
('00000019-0000-0000-0000-000000000000','One Size',15),
-- canvas-belt-black (one size)
('00000020-0000-0000-0000-000000000000','One Size',20),
-- canvas-sneaker-white (shoes)
('00000021-0000-0000-0000-000000000000','24.0',5),
('00000021-0000-0000-0000-000000000000','25.0',10),
('00000021-0000-0000-0000-000000000000','26.0',12),
('00000021-0000-0000-0000-000000000000','27.0',8),
('00000021-0000-0000-0000-000000000000','28.0',3),
-- leather-derby-black (shoes)
('00000022-0000-0000-0000-000000000000','24.0',3),
('00000022-0000-0000-0000-000000000000','25.0',5),
('00000022-0000-0000-0000-000000000000','26.0',5),
('00000022-0000-0000-0000-000000000000','27.0',4),
('00000022-0000-0000-0000-000000000000','28.0',2),
-- suede-loafer-beige (shoes)
('00000023-0000-0000-0000-000000000000','24.0',4),
('00000023-0000-0000-0000-000000000000','25.0',6),
('00000023-0000-0000-0000-000000000000','26.0',6),
('00000023-0000-0000-0000-000000000000','27.0',4),
('00000023-0000-0000-0000-000000000000','28.0',2),
-- canvas-slipon-white (shoes)
('00000024-0000-0000-0000-000000000000','24.0',8),
('00000024-0000-0000-0000-000000000000','25.0',8),
('00000024-0000-0000-0000-000000000000','26.0',8),
('00000024-0000-0000-0000-000000000000','27.0',5),
('00000024-0000-0000-0000-000000000000','28.0',3);

-- ── Color Variants ────────────────────────────────────────────

INSERT INTO product_colors (product_id, color_name, hex, linked_slug) VALUES
-- tshirt: white/beige/grey
('00000001-0000-0000-0000-000000000000','White','#f5f5f4','oversized-tshirt-white'),
('00000001-0000-0000-0000-000000000000','Beige','#c9b99a','oversized-tshirt-beige'),
('00000001-0000-0000-0000-000000000000','Charcoal','#44403c','oversized-tshirt-grey'),
('00000002-0000-0000-0000-000000000000','White','#f5f5f4','oversized-tshirt-white'),
('00000002-0000-0000-0000-000000000000','Beige','#c9b99a','oversized-tshirt-beige'),
('00000002-0000-0000-0000-000000000000','Charcoal','#44403c','oversized-tshirt-grey'),
('00000003-0000-0000-0000-000000000000','White','#f5f5f4','oversized-tshirt-white'),
('00000003-0000-0000-0000-000000000000','Beige','#c9b99a','oversized-tshirt-beige'),
('00000003-0000-0000-0000-000000000000','Charcoal','#44403c','oversized-tshirt-grey'),
-- denim: lightblue/rigid
('00000013-0000-0000-0000-000000000000','Light Blue','#a8c4d4','oversized-denim-lightblue'),
('00000013-0000-0000-0000-000000000000','Rigid','#2d3a54','oversized-denim-rigid'),
('00000014-0000-0000-0000-000000000000','Light Blue','#a8c4d4','oversized-denim-lightblue'),
('00000014-0000-0000-0000-000000000000','Rigid','#2d3a54','oversized-denim-rigid'),
-- halfpants: white/grey
('00000009-0000-0000-0000-000000000000','White','#f5f5f4','oversized-halfpants-white'),
('00000009-0000-0000-0000-000000000000','Grey','#a8a29e','oversized-halfpants-grey'),
('00000010-0000-0000-0000-000000000000','White','#f5f5f4','oversized-halfpants-white'),
('00000010-0000-0000-0000-000000000000','Grey','#a8a29e','oversized-halfpants-grey'),
-- trousers: black/offwhite
('00000007-0000-0000-0000-000000000000','Black','#1c1917','oversized-trouser-black'),
('00000007-0000-0000-0000-000000000000','Off White','#e7e5e4','oversized-trouser-offwhite'),
('00000008-0000-0000-0000-000000000000','Black','#1c1917','oversized-trouser-black'),
('00000008-0000-0000-0000-000000000000','Off White','#e7e5e4','oversized-trouser-offwhite');

-- ── Related Products ──────────────────────────────────────────

INSERT INTO product_related (product_id, related_slug, display_order) VALUES
-- oversized-tshirt-white
('00000001-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',0),
('00000001-0000-0000-0000-000000000000','oversized-trouser-offwhite',1),
('00000001-0000-0000-0000-000000000000','oversized-denim-lightblue',2),
('00000001-0000-0000-0000-000000000000','oversized-halfpants-white',3),
-- oversized-tshirt-beige
('00000002-0000-0000-0000-000000000000','oversized-tshirt-white',0),
('00000002-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',1),
('00000002-0000-0000-0000-000000000000','oversized-trouser-offwhite',2),
('00000002-0000-0000-0000-000000000000','oversized-halfpants-white',3),
-- oversized-tshirt-grey
('00000003-0000-0000-0000-000000000000','oversized-tshirt-white',0),
('00000003-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',1),
('00000003-0000-0000-0000-000000000000','oversized-trouser-black',2),
('00000003-0000-0000-0000-000000000000','oversized-halfpants-grey',3),
-- oversized-shortsleeveshirt-white
('00000004-0000-0000-0000-000000000000','oversized-tshirt-white',0),
('00000004-0000-0000-0000-000000000000','oversized-trouser-offwhite',1),
('00000004-0000-0000-0000-000000000000','oversized-halfpants-white',2),
('00000004-0000-0000-0000-000000000000','oversized-denim-lightblue',3),
-- longsleeveshirt-white
('00000005-0000-0000-0000-000000000000','oversized-tshirt-white',0),
('00000005-0000-0000-0000-000000000000','oversized-trouser-black',1),
('00000005-0000-0000-0000-000000000000','oversized-halfpants-white',2),
('00000005-0000-0000-0000-000000000000','knit-pullover-grey',3),
-- knit-pullover-grey
('00000006-0000-0000-0000-000000000000','oversized-trouser-black',0),
('00000006-0000-0000-0000-000000000000','oversized-denim-rigid',1),
('00000006-0000-0000-0000-000000000000','tapered-trouser-black',2),
('00000006-0000-0000-0000-000000000000','longsleeveshirt-white',3),
-- oversized-trouser-black
('00000007-0000-0000-0000-000000000000','oversized-tshirt-grey',0),
('00000007-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',1),
('00000007-0000-0000-0000-000000000000','oversized-denim-rigid',2),
('00000007-0000-0000-0000-000000000000','oversized-halfpants-grey',3),
-- oversized-trouser-offwhite
('00000008-0000-0000-0000-000000000000','oversized-tshirt-white',0),
('00000008-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',1),
('00000008-0000-0000-0000-000000000000','oversized-denim-lightblue',2),
('00000008-0000-0000-0000-000000000000','oversized-halfpants-white',3),
-- oversized-halfpants-white
('00000009-0000-0000-0000-000000000000','oversized-tshirt-white',0),
('00000009-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',1),
('00000009-0000-0000-0000-000000000000','oversized-trouser-offwhite',2),
('00000009-0000-0000-0000-000000000000','oversized-denim-lightblue',3),
-- oversized-halfpants-grey
('00000010-0000-0000-0000-000000000000','oversized-tshirt-grey',0),
('00000010-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',1),
('00000010-0000-0000-0000-000000000000','oversized-trouser-black',2),
('00000010-0000-0000-0000-000000000000','oversized-denim-rigid',3),
-- tapered-trouser-black
('00000011-0000-0000-0000-000000000000','oversized-tshirt-grey',0),
('00000011-0000-0000-0000-000000000000','knit-pullover-grey',1),
('00000011-0000-0000-0000-000000000000','coaches-jacket-black',2),
('00000011-0000-0000-0000-000000000000','canvas-belt-black',3),
-- cargo-shorts-beige
('00000012-0000-0000-0000-000000000000','oversized-tshirt-beige',0),
('00000012-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',1),
('00000012-0000-0000-0000-000000000000','tote-bag-natural',2),
('00000012-0000-0000-0000-000000000000','canvas-sneaker-white',3),
-- oversized-denim-lightblue
('00000013-0000-0000-0000-000000000000','oversized-tshirt-white',0),
('00000013-0000-0000-0000-000000000000','oversized-trouser-black',1),
('00000013-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',2),
('00000013-0000-0000-0000-000000000000','oversized-halfpants-white',3),
-- oversized-denim-rigid
('00000014-0000-0000-0000-000000000000','oversized-tshirt-grey',0),
('00000014-0000-0000-0000-000000000000','oversized-trouser-black',1),
('00000014-0000-0000-0000-000000000000','oversized-shortsleeveshirt-white',2),
('00000014-0000-0000-0000-000000000000','oversized-halfpants-grey',3),
-- coaches-jacket-black
('00000015-0000-0000-0000-000000000000','oversized-tshirt-grey',0),
('00000015-0000-0000-0000-000000000000','tapered-trouser-black',1),
('00000015-0000-0000-0000-000000000000','canvas-belt-black',2),
('00000015-0000-0000-0000-000000000000','leather-derby-black',3),
-- nylon-blouson-olive
('00000016-0000-0000-0000-000000000000','oversized-tshirt-grey',0),
('00000016-0000-0000-0000-000000000000','oversized-trouser-black',1),
('00000016-0000-0000-0000-000000000000','canvas-sneaker-white',2),
('00000016-0000-0000-0000-000000000000','canvas-belt-black',3),
-- cotton-cap-black
('00000017-0000-0000-0000-000000000000','oversized-tshirt-black',0),
('00000017-0000-0000-0000-000000000000','oversized-tshirt-grey',1),
('00000017-0000-0000-0000-000000000000','nylon-blouson-olive',2),
('00000017-0000-0000-0000-000000000000','canvas-belt-black',3),
-- tote-bag-natural
('00000018-0000-0000-0000-000000000000','oversized-tshirt-beige',0),
('00000018-0000-0000-0000-000000000000','cargo-shorts-beige',1),
('00000018-0000-0000-0000-000000000000','canvas-sneaker-white',2),
('00000018-0000-0000-0000-000000000000','cotton-cap-black',3),
-- wool-beanie-charcoal
('00000019-0000-0000-0000-000000000000','knit-pullover-grey',0),
('00000019-0000-0000-0000-000000000000','coaches-jacket-black',1),
('00000019-0000-0000-0000-000000000000','nylon-blouson-olive',2),
('00000019-0000-0000-0000-000000000000','oversized-tshirt-grey',3),
-- canvas-belt-black
('00000020-0000-0000-0000-000000000000','tapered-trouser-black',0),
('00000020-0000-0000-0000-000000000000','oversized-trouser-black',1),
('00000020-0000-0000-0000-000000000000','coaches-jacket-black',2),
('00000020-0000-0000-0000-000000000000','cargo-shorts-beige',3),
-- canvas-sneaker-white
('00000021-0000-0000-0000-000000000000','oversized-tshirt-white',0),
('00000021-0000-0000-0000-000000000000','oversized-halfpants-white',1),
('00000021-0000-0000-0000-000000000000','cargo-shorts-beige',2),
('00000021-0000-0000-0000-000000000000','canvas-slipon-white',3),
-- leather-derby-black
('00000022-0000-0000-0000-000000000000','tapered-trouser-black',0),
('00000022-0000-0000-0000-000000000000','oversized-trouser-black',1),
('00000022-0000-0000-0000-000000000000','coaches-jacket-black',2),
('00000022-0000-0000-0000-000000000000','canvas-belt-black',3),
-- suede-loafer-beige
('00000023-0000-0000-0000-000000000000','oversized-trouser-offwhite',0),
('00000023-0000-0000-0000-000000000000','oversized-tshirt-beige',1),
('00000023-0000-0000-0000-000000000000','canvas-belt-black',2),
('00000023-0000-0000-0000-000000000000','tote-bag-natural',3),
-- canvas-slipon-white
('00000024-0000-0000-0000-000000000000','oversized-halfpants-white',0),
('00000024-0000-0000-0000-000000000000','oversized-tshirt-white',1),
('00000024-0000-0000-0000-000000000000','canvas-sneaker-white',2),
('00000024-0000-0000-0000-000000000000','cargo-shorts-beige',3);
