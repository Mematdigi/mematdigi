"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import DynamicBlogCard from "./DynamicBlogCard";
import DynamicBlogSidebar from "./DynamicBlogSidebar";
import { getBlogs } from "@/lib/api";

const DynamicBlogList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category") || "";
  const tag = searchParams.get("tag") || "";
  const search = searchParams.get("search") || "";
  const author = searchParams.get("author") || "";

  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => { setPage(1); }, [category, tag, search, author]);

  useEffect(() => {
    setLoading(true);
    getBlogs({ category, tag, search, author, page, limit: 6 })
      .then((r) => {
        if (r.success) { setBlogs(r.data); setPagination(r.pagination); }
        else { setBlogs([]); }
        setLoading(false);
      })
      .catch(() => { setBlogs([]); setLoading(false); });
  }, [category, tag, search, author, page]);

  const activeFilter = category || tag || search || author;

  return (
    <section className="tj-blog-section section-gap">
      <div className="container">
        {activeFilter && (
          <div className="row">
            <div className="col-12" style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <span style={{ color: "#666" }}>
                  {search ? `Search results for "${search}"` : category ? `Category: ${category}` : tag ? `Tag: ${tag}` : `Author: ${author}`}
                  {" "}— {pagination.total ?? blogs.length} post(s)
                </span>
                <button onClick={() => router.push("/blogs")}
                  style={{ background: "#f0802015", color: "#f08020", border: "1px solid #f0802040", padding: "4px 14px", borderRadius: 20, cursor: "pointer", fontSize: 13 }}>
                  ✕ Clear filter
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="row row-gap-5">
          <div className="col-lg-8">
            <div className="blog-post-wrapper">
              {loading ? (
                <div style={{ padding: 80, textAlign: "center", color: "#888" }}>Loading posts…</div>
              ) : blogs.length === 0 ? (
                <div style={{ padding: 80, textAlign: "center" }}>
                  <div style={{ fontSize: 48, marginBottom: 14 }}>📝</div>
                  <h3 style={{ marginBottom: 8 }}>No posts found</h3>
                  <p style={{ color: "#888" }}>
                    {activeFilter ? "Try a different filter or " : "Check back soon, or "}
                    <a href="/blogs" style={{ color: "#f08020" }}>browse all posts</a>.
                  </p>
                </div>
              ) : (
                blogs.map((blog, idx) => <DynamicBlogCard key={blog._id} blog={blog} idx={idx} />)
              )}

              {/* Pagination */}
              {!loading && pagination.totalPages > 1 && (
                <div className="tj-pagination">
                  <ul>
                    <li>
                      <button className="page-prev" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}
                        style={{ opacity: page <= 1 ? 0.4 : 1 }}>
                        <i className="tji-arrow-left-long"></i>
                      </button>
                    </li>
                    {Array.from({ length: pagination.totalPages }).map((_, i) => (
                      <li key={i} className={page === i + 1 ? "active" : ""}>
                        <button onClick={() => setPage(i + 1)}>{i + 1}</button>
                      </li>
                    ))}
                    <li>
                      <button className="page-next" disabled={page >= pagination.totalPages} onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                        style={{ opacity: page >= pagination.totalPages ? 0.4 : 1 }}>
                        <i className="tji-arrow-right-long"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <DynamicBlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicBlogList;
