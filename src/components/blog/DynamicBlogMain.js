"use client";
import HeroInner from "@/components/sections/hero/HeroInner";
import DynamicBlogList from "@/components/blog/DynamicBlogList";
import { useSearchParams } from "next/navigation";

const titleCase = (s = "") => s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const DynamicBlogMain = () => {
  const sp = useSearchParams();
  const category = sp.get("category");
  const tag = sp.get("tag");
  const search = sp.get("search");
  const author = sp.get("author");

  const title = category
    ? `Category: ${titleCase(category)}`
    : tag
    ? `Tag: ${titleCase(tag)}`
    : search
    ? `Search: ${search}`
    : author
    ? `Author: ${titleCase(author)}`
    : "Our Blog";

  const hasFilter = category || tag || search || author;

  return (
    <div>
      <HeroInner
        title={title}
        text={hasFilter ? title : "Blog"}
        breadcrums={hasFilter ? [{ name: "Blog", path: "/blogs" }] : []}
      />
      <DynamicBlogList />
    </div>
  );
};

export default DynamicBlogMain;
