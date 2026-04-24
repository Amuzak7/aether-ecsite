"use client";

import { useState, useRef } from "react";
import { IconCheck } from "@tabler/icons-react";

const CATEGORIES = [
  {
    group: "Order Related",
    options: ["Order Confirmation", "Order Change / Cancellation", "Shipping Status"],
  },
  {
    group: "Product Related",
    options: ["Size & Fit", "Product Quality", "Stock Availability"],
  },
  {
    group: "Returns & Exchanges",
    options: ["Return Request", "Exchange Request"],
  },
  {
    group: "Other",
    options: ["General Inquiry"],
  },
];

const FIELD: React.CSSProperties = {
  width: "100%",
  fontSize: "13px",
  letterSpacing: "0.03em",
  color: "#1c1917",
  background: "#fafaf9",
  border: "1px solid #e7e5e4",
  outline: "none",
  padding: "0.75rem 1rem",
  fontFamily: "inherit",
  transition: "border-color 0.2s ease",
};

const LABEL: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#78716c",
  display: "block",
  marginBottom: "0.5rem",
};

const ERROR: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.05em",
  color: "#b45309",
  marginTop: "0.35rem",
};

interface FormState {
  name: string;
  email: string;
  category: string;
  message: string;
  privacy: boolean;
}

interface Errors {
  name?: string;
  email?: string;
  category?: string;
  message?: string;
  privacy?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    category: "",
    message: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [toast, setToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const set = (field: keyof FormState, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.category) e.category = "Please select a category.";
    if (!form.message.trim()) e.message = "Message is required.";
    if (!form.privacy) e.privacy = "You must agree to the Privacy Policy.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    // Dummy submit — reset + show toast
    setTimeout(() => {
      setForm({ name: "", email: "", category: "", message: "", privacy: false });
      setSubmitting(false);
      setToast(true);
      if (toastTimer.current) clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(false), 5000);
    }, 800);
  };

  const focusStyle = (hasError: boolean): React.CSSProperties => ({
    ...FIELD,
    borderColor: hasError ? "#b45309" : "#e7e5e4",
  });

  return (
    <>
      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

        {/* Name */}
        <div>
          <label style={LABEL}>
            Name <span style={{ color: "#b45309" }}>*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your full name"
            style={focusStyle(!!errors.name)}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#78716c")}
            onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "#b45309" : "#e7e5e4")}
          />
          {errors.name && <p style={ERROR}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label style={LABEL}>
            Email Address <span style={{ color: "#b45309" }}>*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
            style={focusStyle(!!errors.email)}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#78716c")}
            onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? "#b45309" : "#e7e5e4")}
          />
          {errors.email && <p style={ERROR}>{errors.email}</p>}
        </div>

        {/* Category */}
        <div>
          <label style={LABEL}>
            Category <span style={{ color: "#b45309" }}>*</span>
          </label>
          <select
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            style={{
              ...focusStyle(!!errors.category),
              cursor: "pointer",
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2378716c' stroke-width='1.5'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              paddingRight: "2.5rem",
            }}
          >
            <option value="" disabled>Select a category</option>
            {CATEGORIES.map((group) => (
              <optgroup key={group.group} label={group.group}>
                {group.options.map((opt) => (
                  <option key={opt} value={`${group.group} — ${opt}`}>
                    {opt}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {errors.category && <p style={ERROR}>{errors.category}</p>}
        </div>

        {/* Message */}
        <div>
          <label style={LABEL}>
            Message <span style={{ color: "#b45309" }}>*</span>
          </label>
          <textarea
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Please describe your inquiry in detail."
            rows={6}
            style={{
              ...focusStyle(!!errors.message),
              resize: "vertical",
              minHeight: "140px",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#78716c")}
            onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? "#b45309" : "#e7e5e4")}
          />
          {errors.message && <p style={ERROR}>{errors.message}</p>}
        </div>

        {/* Privacy Policy */}
        <div>
          <label
            style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}
          >
            {/* Custom checkbox */}
            <div
              onClick={() => set("privacy", !form.privacy)}
              style={{
                flexShrink: 0,
                width: "18px",
                height: "18px",
                border: `1px solid ${errors.privacy ? "#b45309" : form.privacy ? "#1c1917" : "#c4c0bc"}`,
                background: form.privacy ? "#1c1917" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                marginTop: "1px",
                transition: "background 0.15s ease, border-color 0.15s ease",
              }}
            >
              {form.privacy && <IconCheck size={11} stroke={2.5} color="#fafaf9" />}
            </div>
            <span style={{ fontSize: "12px", color: "#78716c", lineHeight: 1.6, letterSpacing: "0.02em" }}>
              I agree to the{" "}
              <a
                href="/privacy-policy"
                style={{ color: "#1c1917", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Privacy Policy
              </a>
              {" "}<span style={{ color: "#b45309" }}>*</span>
            </span>
          </label>
          {errors.privacy && <p style={{ ...ERROR, marginTop: "0.5rem" }}>{errors.privacy}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          style={{
            alignSelf: "flex-start",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: submitting ? "#a8a29e" : "#fafaf9",
            background: submitting ? "#e7e5e4" : "#1c1917",
            border: "1px solid transparent",
            borderRadius: "9999px",
            padding: "0.7rem 2.5rem",
            cursor: submitting ? "not-allowed" : "pointer",
            transition: "background 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            if (!submitting) {
              e.currentTarget.style.background = "#44403c";
            }
          }}
          onMouseLeave={(e) => {
            if (!submitting) {
              e.currentTarget.style.background = "#1c1917";
            }
          }}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Toast */}
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 100,
          background: "#1c1917",
          color: "#fafaf9",
          padding: "1rem 1.5rem",
          maxWidth: "340px",
          boxShadow: "0 8px 24px rgba(28,25,23,0.18)",
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",
          opacity: toast ? 1 : 0,
          transform: toast ? "translateY(0)" : "translateY(1rem)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          pointerEvents: toast ? "auto" : "none",
        }}
      >
        <div
          style={{
            flexShrink: 0,
            width: "20px",
            height: "20px",
            background: "#44403c",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1px",
          }}
        >
          <IconCheck size={11} stroke={2.5} color="#fafaf9" />
        </div>
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
            Message Sent
          </p>
          <p style={{ fontSize: "12px", color: "#a8a29e", lineHeight: 1.6 }}>
            Thank you for contacting us. We will reply within 48 hours.
          </p>
        </div>
      </div>
    </>
  );
}
