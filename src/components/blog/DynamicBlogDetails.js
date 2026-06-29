"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import DynamicBlogSidebar from "./DynamicBlogSidebar";
import CommentForm from "./CommentForm";
import { incrementBlogViews, getCommentsByBlog } from "@/lib/api";
import { resolveImg, formatDate } from "@/lib/media";

const ShareLinks = ({ title, slug }) => {
  const [url, setUrl] = useState("");
  useEffect(() => { setUrl(window.location.href); }, []);
  const enc = encodeURIComponent;
  const links = [
    { name: "Facebook", icon: "tji-facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { name: "Twitter", icon: "tji-twitter", href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}` },
    { name: "LinkedIn", icon: "tji-linkedin", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { name: "WhatsApp", icon: "tji-whatsapp", href: `https://wa.me/?text=${enc(title + " " + url)}` },
  ];

  const resolveImg = (src, fallback = "/images/blog/blog-1.webp") => {
    if (!src) return fallback;
    if (/^https?:\/\//i.test(src)) return src;
    if (src.startsWith("/uploads")) return `${API_ORIGIN}${src}`;
    return src;
  };

  return (
    <div className="share-links" style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <span style={{ fontWeight: 600 }}>Share:</span>
      {links.map((l) => (
        <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" title={l.name}
          style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid #e5e5e5", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#555" }}>
          <i className={l.icon}></i>
        </a>
      ))}
    </div>
  );
};

const CommentItem = ({ c }) => (
  <li className="comment-item" style={{ marginBottom: 26 }}>
    <div style={{ display: "flex", gap: 16 }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#f08020,#2b7dc4)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20, flexShrink: 0 }}>
        {c.name?.[0]?.toUpperCase()}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6 }}>
          <h6 style={{ margin: 0, fontWeight: 700 }}>
            {c.website ? <a href={c.website} target="_blank" rel="noopener noreferrer">{c.name}</a> : c.name}
          </h6>
          <span style={{ color: "#999", fontSize: 13 }}>{formatDate(c.createdAt)}</span>
        </div>
        <p style={{ margin: "8px 0 0", color: "#555", lineHeight: 1.7 }}>{c.content}</p>
      </div>
    </div>
    {c.replies?.length > 0 && (
      <ul style={{ listStyle: "none", paddingLeft: 48, marginTop: 22 }}>
        {c.replies.map((r) => <CommentItem key={r._id} c={r} />)}
      </ul>
    )}
  </li>
);

const DynamicBlogDetails = ({ blog, related = [], prev, next, commentCount = 0 }) => {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(commentCount);

  const loadComments = () => {
    getCommentsByBlog(blog.slug).then((r) => {
      if (r.success) { setComments(r.data); setCount(r.count); }
    });
  };

  useEffect(() => {
    incrementBlogViews(blog.slug);
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog.slug]);

  return (
    <section className="tj-blog-section section-gap slidebar-stickiy-container">
      <div className="container">
        <div className="row row-gap-5">
          <div className="col-lg-8">
            <div className="post-details-wrapper">
              {/* Featured image */}
              {/* {blog.featuredImage && (
                <div className="blog-images">
                  <img src={resolveImg(blog.featuredImage)} alt={blog.featuredImageAlt || blog.title} width={870} height={450} style={{ width: "100%", height: "auto", borderRadius: 12 }} />
                </div>
              )} */}

              <h2 className="title" style={{ marginTop: 24 }}>{blog.title}</h2>

              {/* Meta row */}
              <div className="blog-category-two">
                <div className="category-item">
                  <div className="cate-images">
                    {blog.author?.avatar
                      ? <img src={resolveImg(blog.author.avatar)} alt={blog.author?.name} width={89} height={89} style={{ borderRadius: "50%", objectFit: "cover" }} />
                      : <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#f08020,#2b7dc4)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{blog.author?.name?.[0] || "M"}</div>}
                  </div>
                  <div className="cate-text">
                    <span className="degination">Authored by</span>
                    <h6 className="title">{blog.author?.name || "Memat Digi"}</h6>
                  </div>
                </div>
                <div className="category-item">
                  <div className="cate-icons"><i className="tji-calendar"></i></div>
                  <div className="cate-text">
                    <span className="degination">Date Released</span>
                    <h6 className="text">{formatDate(blog.publishedAt || blog.createdAt)}</h6>
                  </div>
                </div>
                <div className="category-item">
                  <div className="cate-icons"><i className="tji-comment"></i></div>
                  <div className="cate-text">
                    <span className="degination">Comments</span>
                    <h6 className="text">{String(count).padStart(2, "0")} Comments</h6>
                  </div>
                </div>
                <div className="category-item">
                  <div className="cate-icons"><i className="tji-clock"></i></div>
                  <div className="cate-text">
                    <span className="degination">Read time</span>
                    <h6 className="text">{blog.readingTime || 1} min</h6>
                  </div>
                </div>
              </div>

              {/* Rendered HTML content */}
              <div className="blog-text" dangerouslySetInnerHTML={{ __html: blog.content || "" }} />

              {/* Tags + Share */}
              <div className="blog-details-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, marginTop: 30, paddingTop: 24, borderTop: "1px solid #eee" }}>
                {blog.tags?.length > 0 && (
                  <div className="tagcloud" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {blog.tags.map((t) => (
                      <Link key={t} href={`/blogs?tag=${encodeURIComponent(t)}`} style={{ padding: "6px 14px", border: "1px solid #e5e5e5", borderRadius: 20, fontSize: 13, color: "#555" }}>{t}</Link>
                    ))}
                  </div>
                )}
                <ShareLinks title={blog.title} slug={blog.slug} />
              </div>

              {/* Author bio box */}
              {blog.author?.bio && (
                <div className="author-box" style={{ display: "flex", gap: 20, alignItems: "center", background: "#f7f7f9", borderRadius: 16, padding: 28, marginTop: 36 }}>
                  {blog.author?.avatar
                    ? <img src={resolveImg(blog.author.avatar)} alt={blog.author?.name} width={90} height={90} style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                    : <div style={{ width: 90, height: 90, borderRadius: "50%", background: "linear-gradient(135deg,#f08020,#2b7dc4)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 32, flexShrink: 0 }}>{blog.author?.name?.[0] || "M"}</div>}
                  <div>
                    <span style={{ color: "#f08020", fontSize: 13, fontWeight: 600 }}>{blog.author?.role || "Author"}</span>
                    <h5 style={{ margin: "4px 0 8px" }}>{blog.author?.name}</h5>
                    <p style={{ margin: 0, color: "#666", lineHeight: 1.6 }}>{blog.author.bio}</p>
                  </div>
                </div>
              )}

              {/* Prev / Next */}
              {(prev || next) && (
                <div className="post-nav" style={{ display: "flex", justifyContent: "space-between", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
                  {prev ? (
                    <Link href={`/blogs/${prev.slug}`} style={{ flex: 1, minWidth: 220, padding: "18px 22px", border: "1px solid #eee", borderRadius: 12 }}>
                      <span style={{ color: "#999", fontSize: 13 }}>← Previous</span>
                      <h6 style={{ margin: "6px 0 0" }}>{prev.title}</h6>
                    </Link>
                  ) : <span style={{ flex: 1 }} />}
                  {next ? (
                    <Link href={`/blogs/${next.slug}`} style={{ flex: 1, minWidth: 220, padding: "18px 22px", border: "1px solid #eee", borderRadius: 12, textAlign: "right" }}>
                      <span style={{ color: "#999", fontSize: 13 }}>Next →</span>
                      <h6 style={{ margin: "6px 0 0" }}>{next.title}</h6>
                    </Link>
                  ) : <span style={{ flex: 1 }} />}
                </div>
              )}

              {/* Related posts */}
              {related.length > 0 && (
                <div className="related-posts" style={{ marginTop: 50 }}>
                  <h3 style={{ marginBottom: 24 }}>Related Posts</h3>
                  <div className="row row-gap-4">
                    {related.map((r) => (
                      <div className="col-md-4" key={r._id}>
                        <article className="blog-item">
                          <div className="blog-thumb">
                            <Link href={`/blogs/${r.slug}`}>
                              <img src={resolveImg(r.featuredImage)} alt={r.title} width={400} height={240} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10 }} />
                            </Link>
                          </div>
                          <div className="blog-content" style={{ paddingTop: 12 }}>
                            <span className="categories" style={{ fontSize: 12, color: "#f08020" }}>{r.category}</span>
                            <h3 className="title" style={{ fontSize: 17, marginTop: 6 }}>
                              <Link href={`/blogs/${r.slug}`}>{r.title}</Link>
                            </h3>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comments */}
              <div className="comments-wrapper" style={{ marginTop: 54 }}>
                <h3 className="comments-title" style={{ marginBottom: 28 }}>{count} Comment{count !== 1 ? "s" : ""}</h3>
                {comments.length > 0 ? (
                  <ul className="comment-list" style={{ listStyle: "none", padding: 0, marginBottom: 40 }}>
                    {comments.map((c) => <CommentItem key={c._id} c={c} />)}
                  </ul>
                ) : (
                  <p style={{ color: "#999", marginBottom: 40 }}>Be the first to share your thoughts.</p>
                )}

                {blog.allowComments !== false ? (
                  <CommentForm blogSlug={blog.slug} onSuccess={loadComments} />
                ) : (
                  <p style={{ color: "#999" }}>Comments are closed for this post.</p>
                )}
              </div>
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

export default DynamicBlogDetails;
