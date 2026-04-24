"use client";

import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSection {
  category: string;
  items: FaqItem[];
}

const FAQ_DATA: FaqSection[] = [
  {
    category: "Size & Fit",
    items: [
      {
        q: "What size should I order?",
        a: "All AETHER pieces are designed with an oversized fit in mind. We recommend sizing down one size from your usual fit if you prefer a more tailored silhouette, or staying true to size for the full relaxed look. Each product page includes specific measurements — please refer to those before ordering.",
      },
      {
        q: "How do I read the size guide?",
        a: "Our size guide lists chest width, shoulder width, body length, and sleeve length for each size. Measurements are taken flat across the garment. For the best fit, measure a well-fitting garment you already own and compare it to our chart. If you are between sizes, we recommend going up.",
      },
    ],
  },
  {
    category: "Shipping",
    items: [
      {
        q: "How long does shipping take?",
        a: "Domestic orders within Japan are typically delivered within 3 to 5 business days after dispatch. Orders placed before 12:00 PM (JST) on business days are processed the same day. You will receive a tracking number by email once your order has shipped.",
      },
      {
        q: "Is shipping free?",
        a: "Yes. We offer free standard shipping on all domestic orders with no minimum purchase required. At this time, we do not ship internationally.",
      },
    ],
  },
  {
    category: "Returns",
    items: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 7 days of delivery for items that are unworn, unwashed, and in their original condition with all tags attached. Items marked as sale or limited edition are final sale and cannot be returned. Please note that return shipping costs are the responsibility of the customer unless the item is defective.",
      },
      {
        q: "How do I return an item?",
        a: "To initiate a return, please contact us via the Contact page with your order number and reason for return. Once approved, we will send you a return address and instructions. Refunds are processed within 5 business days of receiving the returned item and will be issued to your original payment method.",
      },
    ],
  },
  {
    category: "Orders",
    items: [
      {
        q: "Can I cancel my order?",
        a: "Order cancellations are accepted within 12 hours of purchase, provided the order has not yet been dispatched. Please contact us as soon as possible via the Contact page. Once an order has been shipped, it cannot be cancelled — you may, however, return it following our return policy.",
      },
    ],
  },
  {
    category: "Product Care",
    items: [
      {
        q: "How do I wash my clothes?",
        a: "To preserve the quality and shape of your garment, we recommend hand washing in cold water or using a gentle machine cycle in a mesh laundry bag. Avoid tumble drying — instead, reshape the garment and lay it flat to dry. Do not bleach or iron directly on prints. Full care instructions can be found on the label inside each garment.",
      },
    ],
  },
];

export default function FaqAccordion() {
  // Track open item per section: Map<sectionIndex, itemIndex | null>
  const [open, setOpen] = useState<Record<number, number | null>>({});

  const toggle = (sectionIdx: number, itemIdx: number) => {
    setOpen((prev) => ({
      ...prev,
      [sectionIdx]: prev[sectionIdx] === itemIdx ? null : itemIdx,
    }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      {FAQ_DATA.map((section, si) => (
        <div key={section.category}>
          {/* Category label */}
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#a8a29e",
              marginBottom: "1.5rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e7e5e4",
            }}
          >
            {section.category}
          </p>

          {/* Accordion items */}
          <div>
            {section.items.map((item, ii) => {
              const isOpen = open[si] === ii;
              return (
                <div
                  key={ii}
                  style={{ borderBottom: "1px solid #e7e5e4" }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(si, ii)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1.5rem",
                      padding: "1.25rem 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        letterSpacing: "0.02em",
                        color: isOpen ? "#1c1917" : "#44403c",
                        fontWeight: isOpen ? 400 : 300,
                        transition: "color 0.2s ease",
                      }}
                    >
                      {item.q}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        color: "#a8a29e",
                        transition: "color 0.2s ease",
                        display: "flex",
                      }}
                    >
                      {isOpen
                        ? <IconMinus size={16} stroke={1.5} />
                        : <IconPlus size={16} stroke={1.5} />}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    style={{
                      maxHeight: isOpen ? "400px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.9,
                        color: "#78716c",
                        letterSpacing: "0.02em",
                        paddingBottom: "1.5rem",
                        paddingRight: "2rem",
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
