"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      {/* Desktop: vertical thumbnail strip + main image */}
      <div className="hidden md:flex" style={{ gap: "0.75rem", maxWidth: "66%" }}>
        {/* Thumbnail strip */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "64px", flexShrink: 0 }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              style={{
                position: "relative",
                width: "64px",
                aspectRatio: "3/4",
                background: "#e7e5e4",
                border: selected === i ? "1.5px solid #1c1917" : "1.5px solid transparent",
                padding: 0,
                cursor: "pointer",
                overflow: "hidden",
                transition: "border-color 0.2s ease",
                flexShrink: 0,
              }}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${alt} — view ${i + 1}`}
                fill
                className="object-cover object-center"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div
          style={{
            position: "relative",
            flex: 1,
            aspectRatio: "3/4",
            background: "#e7e5e4",
            overflow: "hidden",
          }}
        >
          <Image
            src={images[selected]}
            alt={alt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1280px) 44vw, 560px"
            style={{ transition: "opacity 0.25s ease" }}
          />
        </div>
      </div>

      {/* Mobile: main image then horizontal thumbnail row */}
      <div className="md:hidden">
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3/4",
            background: "#e7e5e4",
            overflow: "hidden",
          }}
        >
          <Image
            src={images[selected]}
            alt={alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Horizontal thumbnail row */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              style={{
                position: "relative",
                width: "56px",
                aspectRatio: "3/4",
                background: "#e7e5e4",
                border: selected === i ? "1.5px solid #1c1917" : "1.5px solid transparent",
                padding: 0,
                cursor: "pointer",
                overflow: "hidden",
                flexShrink: 0,
                transition: "border-color 0.2s ease",
              }}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${alt} — view ${i + 1}`}
                fill
                className="object-cover object-center"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
