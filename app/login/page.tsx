"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
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

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const ok = login(email, password);
    if (ok) {
      router.push("/account");
    } else {
      setError("Incorrect email or password.");
    }
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
            Sign In
          </h1>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ ...inputStyle, paddingRight: "2rem" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  style={{ position: "absolute", right: 0, background: "none", border: "none", cursor: "pointer", color: "#a8a29e", display: "flex", alignItems: "center" }}
                >
                  {showPassword ? <IconEyeOff size={16} stroke={1.5} /> : <IconEye size={16} stroke={1.5} />}
                </button>
              </div>
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
              Sign In
            </button>
          </form>

          <p style={{ marginTop: "2rem", textAlign: "center", fontSize: "11px", color: "#78716c", letterSpacing: "0.1em" }}>
            New to AETHER?{" "}
            <Link href="/signup" style={{ color: "#1c1917", textDecoration: "underline" }}>
              Create an account
            </Link>
          </p>
        </div>
      </div>

      <BottomNav showSns={false} />
    </main>
  );
}
