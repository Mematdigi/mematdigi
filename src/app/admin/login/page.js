"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin, seedAdmin } from "@/lib/api";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState("");

  // If already logged in, redirect
  useEffect(() => {
    const token = localStorage.getItem("memat_admin_token");
    if (token) router.push("/admin");
  }, [router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter email and password");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await loginAdmin(form.email, form.password);
      if (res.success) {
        localStorage.setItem("memat_admin_token", res.token);
        router.push("/admin");
      } else {
        setError(res.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Could not connect to server. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleSeed = async () => {
    setSeeding(true);
    setSeedMsg("");
    try {
      const res = await seedAdmin();
      if (res.success) {
        setSeedMsg(`✅ Admin created! Email: admin@memat.com | Password: Admin@123`);
        setForm({ email: "admin@memat.com", password: "Admin@123" });
      } else {
        setSeedMsg(`ℹ️ ${res.message}`);
      }
    } catch (err) {
      setSeedMsg("❌ Could not connect to backend server");
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', -apple-system, sans-serif",
      padding: 20,
    }}>
      <div style={{ width: "100%", maxWidth: 440 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{
            width: 64, height: 64,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            borderRadius: 18,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            marginBottom: 16,
            boxShadow: "0 8px 32px #6366f140",
          }}>M</div>
          <h1 style={{ color: "#f1f5f9", fontSize: 26, fontWeight: 700, margin: 0 }}>Memat Admin</h1>
          <p style={{ color: "#64748b", fontSize: 14, marginTop: 6 }}>Sign in to manage your service pages</p>
        </div>

        {/* Card */}
        <div style={{
          background: "#1e293b",
          border: "1px solid #334155",
          borderRadius: 20,
          padding: 36,
          boxShadow: "0 24px 64px #00000060",
        }}>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="admin@memat.com"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: 10,
                  color: "#f1f5f9",
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.15s",
                }}
                onFocus={e => e.target.style.borderColor = "#6366f1"}
                onBlur={e => e.target.style.borderColor = "#334155"}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: 10,
                  color: "#f1f5f9",
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={e => e.target.style.borderColor = "#6366f1"}
                onBlur={e => e.target.style.borderColor = "#334155"}
              />
            </div>

            {/* Error */}
            {error && (
              <div style={{ background: "#ef444415", border: "1px solid #ef444440", borderRadius: 10, padding: "12px 16px", color: "#fca5a5", fontSize: 13, marginBottom: 20 }}>
                ⚠️ {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                background: loading ? "#4338ca80" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                border: "none",
                borderRadius: 10,
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.3px",
              }}
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          {/* Divider */}
          <div style={{ margin: "24px 0", borderTop: "1px solid #334155" }} />

          {/* Seed admin button */}
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#64748b", fontSize: 12, marginBottom: 12 }}>
              First time? Create the default admin account:
            </p>
            <button
              onClick={handleSeed}
              disabled={seeding}
              style={{
                padding: "10px 20px",
                background: "transparent",
                border: "1px solid #334155",
                borderRadius: 8,
                color: "#94a3b8",
                fontSize: 13,
                cursor: seeding ? "not-allowed" : "pointer",
              }}
            >
              {seeding ? "Creating..." : "🌱 Create Default Admin"}
            </button>
            {seedMsg && (
              <div style={{ marginTop: 12, color: "#a5b4fc", fontSize: 12, padding: "8px 12px", background: "#6366f115", borderRadius: 8 }}>
                {seedMsg}
              </div>
            )}
          </div>
        </div>

        <p style={{ textAlign: "center", color: "#475569", fontSize: 12, marginTop: 24 }}>
          Default: admin@memat.com / Admin@123
        </p>
      </div>
    </div>
  );
}
