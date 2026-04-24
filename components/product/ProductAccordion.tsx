"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import type { ProductData } from "@/lib/products";

const SIZE_GUIDE = [
  { size: "S", chest: "96", shoulder: "50", body: "67", sleeve: "20" },
  { size: "M", chest: "102", shoulder: "52", body: "69", sleeve: "21" },
  { size: "L", chest: "108", shoulder: "55", body: "71", sleeve: "22" },
  { size: "XL", chest: "114", shoulder: "58", body: "73", sleeve: "23" },
];

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionItem({ title, isOpen, onToggle, children }: AccordionItemProps) {
  return (
    <div style={{ borderTop: "1px solid #c4c0bc" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#1c1917",
          }}
        >
          {title}
        </span>
        <IconChevronDown
          size={15}
          stroke={1.5}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            color: "#78716c",
            flexShrink: 0,
            marginLeft: "1rem",
          }}
        />
      </button>
      <div
        style={{
          maxHeight: isOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div style={{ paddingBottom: "1.5rem" }}>{children}</div>
      </div>
    </div>
  );
}

interface Props {
  product: ProductData;
}

export default function ProductAccordion({ product }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      {/* Description */}
      <AccordionItem
        title="Description"
        isOpen={openIndex === 0}
        onToggle={() => toggle(0)}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p
            style={{
              fontSize: "13px",
              color: "#44403c",
              lineHeight: "1.85",
              letterSpacing: "0.03em",
            }}
          >
            {product.description}
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {product.details.map((d, i) => (
              <li
                key={i}
                style={{
                  fontSize: "11px",
                  color: "#78716c",
                  letterSpacing: "0.05em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <span
                  style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#a8a29e",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </AccordionItem>

      {/* Material & Care */}
      <AccordionItem
        title="Material & Care"
        isOpen={openIndex === 1}
        onToggle={() => toggle(1)}
      >
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {product.careInstructions.map((c, i) => (
            <li
              key={i}
              style={{
                fontSize: "11px",
                color: "#78716c",
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
              }}
            >
              <span
                style={{
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  background: "#a8a29e",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {c}
            </li>
          ))}
        </ul>
      </AccordionItem>

      {/* Size Guide */}
      <AccordionItem
        title="Size Guide"
        isOpen={openIndex === 2}
        onToggle={() => toggle(2)}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Size", "Chest (cm)", "Shoulder (cm)", "Length (cm)", "Sleeve (cm)"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "0.5rem 0.875rem",
                      textAlign: "left",
                      fontSize: "9px",
                      letterSpacing: "0.15em",
                      color: "#a8a29e",
                      fontWeight: 400,
                      borderBottom: "1px solid #e7e5e4",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIZE_GUIDE.map((row, i) => (
                <tr key={row.size}>
                  <td
                    style={{
                      padding: "0.625rem 0.875rem",
                      fontSize: "11px",
                      color: "#1c1917",
                      fontWeight: 500,
                      borderBottom: i < SIZE_GUIDE.length - 1 ? "1px solid #f5f5f4" : "none",
                    }}
                  >
                    {row.size}
                  </td>
                  {[row.chest, row.shoulder, row.body, row.sleeve].map((val, j) => (
                    <td
                      key={j}
                      style={{
                        padding: "0.625rem 0.875rem",
                        fontSize: "11px",
                        color: "#44403c",
                        borderBottom: i < SIZE_GUIDE.length - 1 ? "1px solid #f5f5f4" : "none",
                      }}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p
            style={{
              fontSize: "10px",
              color: "#a8a29e",
              marginTop: "0.875rem",
              letterSpacing: "0.04em",
              lineHeight: "1.6",
            }}
          >
            * All measurements are in centimetres (cm). Sample worn by model at 180 cm, size M.
          </p>
        </div>
      </AccordionItem>

      {/* Bottom border */}
      <div style={{ borderTop: "1px solid #c4c0bc" }} />
    </div>
  );
}
