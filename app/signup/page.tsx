"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

const inputStyle = {
  width: "100%",
  borderBottom: "1px solid #1c1917",
  background: "transparent",
  outline: "none",
  padding: "8px 0",
  fontSize: "13px",
  color: "#1c1917",
};

const labelStyle = {
  display: "block" as const,
  fontSize: "10px",
  letterSpacing: "0.2em",
  color: "#78716c",
  textTransform: "uppercase" as const,
  marginBottom: "6px",
};

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    signup(name, email, password);
    router.push("/account");
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header
        className="flex items-center py-6"
        style={{ ...PADDING, borderBottom: "20px solid #1c1917" }}
      >
        <Link
          href="/"
          className="font-light text-stone-900"
          style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "0" }}
        >
          AETHER
        </Link>
      </header>

      {/* Form area */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 1.5rem" }}>
        <div style={{ width: "100%", maxWidth: "380px" }}>
          <h1
            className="font-light text-stone-900 uppercase"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "0.2em", marginBottom: "2.5rem" }}
          >
            Create Account
          </h1>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Confirm Password</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            {error && (
              <p style={{ fontSize: "11px", color: "#b91c1c", letterSpacing: "0.05em" }}>{error}</p>
            )}

            <button
              type="submit"
              style={{
                marginTop: "0.5rem",
                width: "100%",
                background: "#1c1917",
                color: "white",
                padding: "14px",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#44403c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1c1917")}
            >
              Create Account
            </button>
          </form>

          <p style={{ marginTop: "2rem", textAlign: "center", fontSize: "11px", color: "#78716c", letterSpacing: "0.1em" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#1c1917", textDecoration: "underline" }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
