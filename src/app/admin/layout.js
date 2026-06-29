"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getAdminMe } from "@/lib/api";

// ── Auth-protected shell (shown for all non-login admin pages) ──────────────
function AdminShell({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("memat_admin_token");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    getAdminMe()
      .then((res) => {
        if (res.success) {
          setAdmin(res.admin);
        } else {
          localStorage.removeItem("memat_admin_token");
          router.push("/admin/login");
        }
      })
      .catch(() => {
        router.push("/admin/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0f172a" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 48, height: 48, border: "3px solid #334155", borderTop: "3px solid #6366f1", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
          <p style={{ color: "#94a3b8", fontSize: 14 }}>Loading admin panel...</p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!admin) return null;

  const navItems = [
    { type: "label", label: "General" },
    { href: "/admin", icon: "🏠", label: "Dashboard" },
    { href: "/admin/services", icon: "📄", label: "Service Pages" },
    { href: "/admin/services/new", icon: "➕", label: "New Service Page" },
    { type: "label", label: "Blog" },
    { href: "/admin/blog", icon: "📰", label: "All Posts" },
    { href: "/admin/blog/new", icon: "✍️", label: "New Post" },
    { href: "/admin/blog/categories", icon: "🏷", label: "Categories" },
    { href: "/admin/blog/authors", icon: "👤", label: "Authors" },
    { href: "/admin/blog/comments", icon: "💬", label: "Comments" },
    { href: "/admin/blog/enquiries", icon: "📨", label: "Enquiries" },
    { href: "/admin/blog/media", icon: "🖼", label: "Media Library" },
    { type: "label", label: "System" },
    { href: "/admin/settings", icon: "⚙️", label: "Settings" },
  ];

  // Active = the longest item href that the current path matches (avoids
  // nested routes like /admin/blog and /admin/blog/categories both lighting up)
  const linkItems = navItems.filter((i) => i.href);
  const activeHref = linkItems
    .filter((i) => pathname === i.href || pathname.startsWith(i.href + "/"))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f172a", fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: sidebarOpen ? 260 : 72,
        background: "#1e293b",
        borderRight: "1px solid #334155",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.25s ease",
        overflow: "hidden",
        position: "fixed",
        top: 0, left: 0, bottom: 0,
        zIndex: 100,
      }}>
        <div style={{ padding: "20px 16px", borderBottom: "1px solid #334155", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18 }}>M</div>
          {sidebarOpen && <div>
            <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15 }}>Memat Admin</div>
            <div style={{ color: "#64748b", fontSize: 12 }}>Content Manager</div>
          </div>}
        </div>

        <nav style={{ flex: 1, padding: "12px 8px", overflow: "auto" }}>
          {navItems.map((item, idx) => {
            if (item.type === "label") {
              return sidebarOpen ? (
                <div key={`label-${idx}`} style={{ padding: "14px 12px 6px", color: "#475569", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>
                  {item.label}
                </div>
              ) : (
                <div key={`label-${idx}`} style={{ height: 1, background: "#334155", margin: "10px 8px" }} />
              );
            }
            const isActive = item.href === activeHref;
            return (
              <Link key={item.href} href={item.href} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "10px 12px",
                borderRadius: 8, marginBottom: 4, textDecoration: "none",
                background: isActive ? "linear-gradient(135deg, #6366f120, #8b5cf620)" : "transparent",
                color: isActive ? "#a5b4fc" : "#94a3b8",
                borderLeft: isActive ? "2px solid #6366f1" : "2px solid transparent",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                {sidebarOpen && <span style={{ fontSize: 14, fontWeight: isActive ? 600 : 400 }}>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: "12px 8px", borderTop: "1px solid #334155" }}>
          {sidebarOpen && (
            <div style={{ padding: "10px 12px", background: "#0f172a", borderRadius: 8, marginBottom: 8 }}>
              <div style={{ color: "#f1f5f9", fontSize: 13, fontWeight: 600 }}>{admin.name}</div>
              <div style={{ color: "#64748b", fontSize: 11 }}>{admin.email}</div>
            </div>
          )}
          <button
            onClick={() => { localStorage.removeItem("memat_admin_token"); router.push("/admin/login"); }}
            style={{ width: "100%", padding: "10px 12px", background: "transparent", border: "1px solid #ef444420", borderRadius: 8, color: "#f87171", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}
            onMouseEnter={e => e.currentTarget.style.background = "#ef444415"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <span>🚪</span>{sidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div style={{ flex: 1, marginLeft: sidebarOpen ? 260 : 72, transition: "margin-left 0.25s ease", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header style={{ background: "#1e293b", borderBottom: "1px solid #334155", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "1px solid #334155", borderRadius: 8, padding: "6px 10px", color: "#94a3b8", cursor: "pointer", fontSize: 18 }}>
            {sidebarOpen ? "◀" : "▶"}
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/" target="_blank" style={{ color: "#6366f1", fontSize: 13, textDecoration: "none", border: "1px solid #6366f130", padding: "6px 14px", borderRadius: 8 }}>
              🔗 View Site
            </Link>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14 }}>
              {admin.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>
        <main style={{ flex: 1, padding: 28, color: "#e2e8f0" }}>
          {children}
        </main>
      </div>
    </div>
  );
}

// ── Root layout: login page gets NO shell, everything else gets AdminShell ──
export default function AdminLayout({ children }) {
  const pathname = usePathname();

  // Login page renders directly — no auth check, no sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return <AdminShell>{children}</AdminShell>;
}