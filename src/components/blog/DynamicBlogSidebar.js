"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getBlogSidebar } from "@/lib/api";
import { resolveImg, formatDate } from "@/lib/media";

const DynamicBlogSidebar = ({ type }) => {
  const router = useRouter();
  const [data, setData] = useState({ categories: [], tags: [], recent: [] });
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBlogSidebar().then((r) => {
      if (r.success) setData({ categories: r.categories || [], tags: r.tags || [], recent: r.recent || [] });
    });
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    router.push(`/blogs?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <aside className={`tj-main-sidebar ${type == 2 ? "p-0" : ""}`}>
      {/* Search */}
      <div className="tj-sidebar-widget widget-search">
        <h4 className="widget-title">Search here</h4>
        <div className="search-box">
          <form onSubmit={onSearch}>
            <input type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here" />
            <button type="submit" value="search">
              <i className="tji-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Recent posts */}
      <div className="tj-sidebar-widget tj-recent-posts">
        <h4 className="widget-title">Recent posts</h4>
        <ul>
          {data.recent.map((post) => (
            <li key={post.slug}>
              <div className="post-thumb">
                <Link href={`/blogs/${post.slug}`}>
                  <img src={resolveImg(post.featuredImage)} alt={post.title} width={150} height={150} style={{ objectFit: "cover" }} />
                </Link>
              </div>
              <div className="post-content">
                <h6 className="post-title">
                  <Link href={`/blogs/${post.slug}`}>{post.title.length > 42 ? post.title.slice(0, 42) + "…" : post.title}</Link>
                </h6>
                <div className="blog-meta">
                  <ul>
                    <li>{formatDate(post.publishedAt)}</li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
          {data.recent.length === 0 && <li style={{ color: "#999" }}>No posts yet.</li>}
        </ul>
      </div>

      {/* Categories */}
      <div className="tj-sidebar-widget widget-categories">
        <h4 className="widget-title">Categories</h4>
        <ul>
          {data.categories.map((c) => (
            <li key={c.slug}>
              <Link href={`/blogs?category=${c.slug}`}>
                {c.name} <span className="number">({String(c.count).padStart(2, "0")})</span>
              </Link>
            </li>
          ))}
          {data.categories.length === 0 && <li style={{ color: "#999" }}>No categories yet.</li>}
        </ul>
      </div>

      {/* Tags */}
      {data.tags.length > 0 && (
        <div className="tj-sidebar-widget widget-tag-cloud">
          <h4 className="widget-title">Tags</h4>
          <nav>
            <div className="tagcloud">
              {data.tags.map((t) => (
                <Link key={t.name} href={`/blogs?tag=${encodeURIComponent(t.name)}`}>
                  {t.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </aside>
  );
};

export default DynamicBlogSidebar;
