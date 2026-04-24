"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth, type Address } from "@/context/AuthContext";
import BottomNav from "@/components/BottomNav";

const PADDING = {
  paddingLeft: "clamp(0.75rem, 2vw, 2.5rem)",
  paddingRight: "clamp(0.75rem, 2vw, 2.5rem)",
};

const inputStyle = {
  width: "100%",
  borderBottom: "1px solid #c4c0bc",
  background: "transparent",
  outline: "none",
  padding: "6px 0",
  fontSize: "13px",
  color: "#1c1917",
};

const labelStyle = {
  display: "block" as const,
  fontSize: "10px",
  letterSpacing: "0.2em",
  color: "#a8a29e",
  textTransform: "uppercase" as const,
  marginBottom: "4px",
};

const sectionHeadingStyle = {
  fontSize: "10px",
  letterSpacing: "0.3em",
  color: "#1c1917",
  textTransform: "uppercase" as const,
  marginBottom: "1.5rem",
  paddingBottom: "0.75rem",
  borderBottom: "1px solid #1c1917",
};

interface Order {
  id: string;
  date: string;
  total: number;
  status: "Delivered" | "Shipped" | "Processing";
  items: { name: string; qty: number; price: number; image: string }[];
}

const dummyOrders: Order[] = [
  {
    id: "AE-2025-0041",
    date: "2025-03-18",
    total: 25300,
    status: "Delivered",
    items: [
      { name: "Oversized Tee — Beige", qty: 1, price: 8800, image: "/images/products/oversized-tshirt-beige.jpg" },
      { name: "Wide Trousers — Black", qty: 1, price: 16500, image: "/images/products/oversized-trouser-black1.jpg" },
    ],
  },
  {
    id: "AE-2025-0028",
    date: "2025-02-04",
    total: 28600,
    status: "Delivered",
    items: [
      { name: "Denim Jacket — Light Blue", qty: 1, price: 28600, image: "/images/products/oversized-denim-lightblue.jpg" },
    ],
  },
  {
    id: "AE-2025-0059",
    date: "2025-04-01",
    total: 20900,
    status: "Shipped",
    items: [
      { name: "Wide Half Pants — White", qty: 1, price: 12100, image: "/images/products/oversized-halfpants-white.jpg" },
      { name: "Oversized Tee — Charcoal", qty: 1, price: 8800, image: "/images/products/oversized-tshirt-grey.jpg" },
    ],
  },
  {
    id: "AE-2025-0072",
    date: "2025-04-20",
    total: 14300,
    status: "Processing",
    items: [
      { name: "S/S Shirt — White", qty: 1, price: 14300, image: "/images/products/oversized-shortsleeveshirt-white1.jpg" },
    ],
  },
];

const statusColor: Record<Order["status"], string> = {
  Delivered: "#57534e",
  Shipped: "#1c1917",
  Processing: "#a8a29e",
};

export default function AccountPage() {
  const { user, logout, updateProfile, changePassword, changeEmail } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Profile edit state
  const [editingProfile, setEditingProfile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Address edit state
  const [editingAddress, setEditingAddress] = useState(false);

  // Security state
  const [securityMode, setSecurityMode] = useState<"idle" | "email" | "password">("idle");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityMsg, setSecurityMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [address, setAddress] = useState<Address>({ postalCode: "", prefecture: "", city: "", street: "" });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !user) {
      router.replace("/login");
    }
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address ?? { postalCode: "", prefecture: "", city: "", street: "" });
    }
  }, [mounted, user, router]);

  if (!mounted || !user) return null;

  const resetSecurity = () => {
    setSecurityMode("idle");
    setCurrentPassword("");
    setNewEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setSecurityMsg(null);
  };

  const handleChangeEmail = () => {
    if (!newEmail || !currentPassword) return;
    const ok = changeEmail(currentPassword, newEmail);
    if (ok) {
      setSecurityMsg({ type: "ok", text: "Email updated successfully." });
      setSecurityMode("idle");
      setCurrentPassword("");
      setNewEmail("");
    } else {
      setSecurityMsg({ type: "err", text: "Current password is incorrect." });
    }
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setSecurityMsg({ type: "err", text: "New passwords do not match." });
      return;
    }
    if (newPassword.length < 6) {
      setSecurityMsg({ type: "err", text: "Password must be at least 6 characters." });
      return;
    }
    const ok = changePassword(currentPassword, newPassword);
    if (ok) {
      setSecurityMsg({ type: "ok", text: "Password updated successfully." });
      setSecurityMode("idle");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      setSecurityMsg({ type: "err", text: "Current password is incorrect." });
    }
  };

  const saveProfile = () => {
    updateProfile({ name, email });
    setEditingProfile(false);
  };

  const saveAddress = () => {
    updateProfile({ address });
    setEditingAddress(false);
  };

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between py-6"
        style={{ ...PADDING, borderBottom: "20px solid #1c1917" }}
      >
        <Link
          href="/"
          className="font-light text-stone-900"
          style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "0" }}
        >
          AETHER
        </Link>
        <button
          onClick={handleLogout}
          style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#78716c", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#78716c")}
        >
          Sign Out
        </button>
      </header>

      {/* Breadcrumb */}
      <div style={{ ...PADDING }}>
        <nav className="flex items-center gap-2" style={{ paddingTop: "4rem", paddingBottom: "1.5rem" }} aria-label="Breadcrumb">
          <Link
            href="/"
            className="hover:text-stone-900 transition-colors duration-200"
            style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a8a29e", textTransform: "uppercase" }}
          >
            Home
          </Link>
          <span style={{ fontSize: "10px", color: "#c4c0bc" }}>/</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#1c1917", textTransform: "uppercase" }}>
            My Account
          </span>
        </nav>
      </div>

      {/* Page title */}
      <div style={{ ...PADDING, paddingTop: "2rem", paddingBottom: "2rem" }}>
        <h1
          className="font-light text-stone-900 uppercase"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.15em" }}
        >
          My Account
        </h1>
        <p style={{ fontSize: "12px", color: "#a8a29e", marginTop: "0.5rem" }}>
          Welcome back, {user.name}
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          ...PADDING,
          flex: 1,
          paddingBottom: "6rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* ── Profile ── */}
        <section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", ...sectionHeadingStyle }}>
            <span>Profile</span>
            <button
              onClick={() => editingProfile ? saveProfile() : setEditingProfile(true)}
              style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#78716c", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer" }}
            >
              {editingProfile ? "Save" : "Edit"}
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              {editingProfile ? (
                <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
              ) : (
                <p style={{ fontSize: "13px", color: "#1c1917", padding: "6px 0" }}>{user.name}</p>
              )}
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              {editingProfile ? (
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
              ) : (
                <p style={{ fontSize: "13px", color: "#1c1917", padding: "6px 0" }}>{user.email}</p>
              )}
            </div>
            {editingProfile && (
              <button
                onClick={() => setEditingProfile(false)}
                style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                Cancel
              </button>
            )}
          </div>
        </section>

        {/* ── Shipping Address ── */}
        <section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", ...sectionHeadingStyle }}>
            <span>Shipping Address</span>
            <button
              onClick={() => editingAddress ? saveAddress() : setEditingAddress(true)}
              style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#78716c", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer" }}
            >
              {editingAddress ? "Save" : "Edit"}
            </button>
          </div>

          {editingAddress ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { label: "Postal Code", key: "postalCode" as const },
                { label: "Prefecture", key: "prefecture" as const },
                { label: "City", key: "city" as const },
                { label: "Street / Building", key: "street" as const },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label style={labelStyle}>{label}</label>
                  <input
                    value={address[key]}
                    onChange={(e) => setAddress((prev) => ({ ...prev, [key]: e.target.value }))}
                    style={inputStyle}
                  />
                </div>
              ))}
              <button
                onClick={() => setEditingAddress(false)}
                style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                Cancel
              </button>
            </div>
          ) : user.address?.street ? (
            <div style={{ fontSize: "13px", color: "#1c1917", lineHeight: "1.8" }}>
              <p>〒{user.address.postalCode}</p>
              <p>{user.address.prefecture} {user.address.city}</p>
              <p>{user.address.street}</p>
            </div>
          ) : (
            <p style={{ fontSize: "12px", color: "#a8a29e" }}>No address registered.</p>
          )}
        </section>

        {/* ── Security ── */}
        <section>
          <p style={sectionHeadingStyle}>Security</p>

          {securityMsg && (
            <p style={{ fontSize: "11px", marginBottom: "1.25rem", letterSpacing: "0.05em", color: securityMsg.type === "ok" ? "#15803d" : "#b91c1c" }}>
              {securityMsg.text}
            </p>
          )}

          {securityMode === "idle" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                onClick={() => { setSecurityMode("email"); setSecurityMsg(null); }}
                style={{ textAlign: "left", fontSize: "12px", color: "#1c1917", background: "none", border: "none", cursor: "pointer", padding: "0.6rem 0", borderBottom: "1px solid #c4c0bc", letterSpacing: "0.05em" }}
              >
                Change Email
              </button>
              <button
                onClick={() => { setSecurityMode("password"); setSecurityMsg(null); }}
                style={{ textAlign: "left", fontSize: "12px", color: "#1c1917", background: "none", border: "none", cursor: "pointer", padding: "0.6rem 0", borderBottom: "1px solid #c4c0bc", letterSpacing: "0.05em" }}
              >
                Change Password
              </button>
            </div>
          )}

          {securityMode === "email" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={labelStyle}>Current Password</label>
                <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>New Email</label>
                <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} style={inputStyle} />
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={handleChangeEmail} style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", background: "#1c1917", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" }}>
                  Save
                </button>
                <button onClick={resetSecurity} style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", background: "none", color: "#a8a29e", border: "none", cursor: "pointer" }}>
                  Cancel
                </button>
              </div>
            </div>
          )}

          {securityMode === "password" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={labelStyle}>Current Password</label>
                <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>New Password</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Confirm New Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={inputStyle} />
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={handleChangePassword} style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", background: "#1c1917", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" }}>
                  Save
                </button>
                <button onClick={resetSecurity} style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", background: "none", color: "#a8a29e", border: "none", cursor: "pointer" }}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ── Order History ── */}
        <section style={{ gridColumn: "1 / -1" }}>
          <p style={sectionHeadingStyle}>Order History</p>

          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.2fr 1.2fr 1.2fr",
              gap: "1rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid #1c1917",
            }}
          >
            {["Order", "Date", "Total", "Status"].map((h) => (
              <p key={h} style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#a8a29e", textTransform: "uppercase" }}>{h}</p>
            ))}
          </div>

          {/* Rows */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {dummyOrders.map((order) => (
              <div
                key={order.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.2fr 1.2fr 1.2fr",
                  gap: "1rem",
                  alignItems: "center",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid #c4c0bc",
                }}
              >
                <p style={{ fontSize: "12px", color: "#1c1917" }}>{order.id}</p>
                <p style={{ fontSize: "12px", color: "#1c1917" }}>{order.date}</p>
                <p style={{ fontSize: "12px", color: "#1c1917" }}>¥{order.total.toLocaleString()}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: statusColor[order.status] }}>
                    {order.status}
                  </span>
                  <button
                    onClick={() => setSelectedOrder(order)}
                    style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#78716c", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textAlign: "left" }}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav showSns={false} />

      {/* ── Order Modal ── */}
      {selectedOrder && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.4)" }}
          onClick={() => setSelectedOrder(null)}
        >
          <div
            style={{ background: "#d6d3d1", width: "100%", maxWidth: "480px", margin: "1.5rem", padding: "2.5rem" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
              <div>
                <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#a8a29e", textTransform: "uppercase", marginBottom: "4px" }}>Order Details</p>
                <p style={{ fontSize: "14px", color: "#1c1917" }}>{selectedOrder.id}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                style={{ fontSize: "18px", color: "#a8a29e", background: "none", border: "none", cursor: "pointer", lineHeight: 1 }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a8a29e", textTransform: "uppercase" }}>Date</span>
                <span style={{ fontSize: "12px", color: "#1c1917" }}>{selectedOrder.date}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a8a29e", textTransform: "uppercase" }}>Status</span>
                <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: statusColor[selectedOrder.status] }}>
                  {selectedOrder.status}
                </span>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #c4c0bc", paddingTop: "1.25rem", marginBottom: "1.25rem" }}>
              {selectedOrder.items.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid #c4c0bc" }}>
                  <div style={{ position: "relative", width: "52px", aspectRatio: "3/4", flexShrink: 0, background: "#c4c0bc" }}>
                    <Image src={item.image} alt={item.name} fill className="object-cover object-center" sizes="52px" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "12px", color: "#1c1917", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</p>
                    <p style={{ fontSize: "10px", color: "#a8a29e", marginTop: "2px" }}>Qty: {item.qty}</p>
                  </div>
                  <p style={{ fontSize: "12px", color: "#1c1917", flexShrink: 0 }}>¥{item.price.toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#1c1917", textTransform: "uppercase" }}>Total</span>
              <span style={{ fontSize: "14px", color: "#1c1917" }}>¥{selectedOrder.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
