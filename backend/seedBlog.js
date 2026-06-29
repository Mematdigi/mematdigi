/**
 * Seed the blog with sample categories, authors and posts.
 * Run once:  node seedBlog.js
 * Re-running is safe (it upserts by slug and skips existing posts).
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const BlogCategory = require("./models/BlogCategory");
const BlogAuthor = require("./models/BlogAuthor");
const { slugify } = require("./utils/slug");

const categories = [
  { name: "Digital Marketing", description: "SEO, PPC, social media and growth strategies." },
  { name: "Web Development", description: "Modern web apps, performance and best practices." },
  { name: "Branding", description: "Identity, design systems and brand strategy." },
  { name: "Technology", description: "Trends, tooling and engineering insights." },
];

const authors = [
  {
    name: "Memat Editorial",
    role: "Content Team",
    bio: "The Memat Digi editorial team shares practical insights on digital growth.",
    avatar: "/images/testimonial/client-2.webp",
    socials: { linkedin: "https://www.linkedin.com/", website: "https://mematdigi.com" },
  },
  {
    name: "Aarav Sharma",
    role: "Lead Strategist",
    bio: "Performance marketing strategist focused on measurable ROI for SMBs.",
    avatar: "/images/blog/avatar-1.webp",
    socials: { twitter: "https://x.com/" },
  },
];

const samplePosts = [
  {
    title: "10 SEO Strategies That Actually Move the Needle in 2026",
    excerpt:
      "Search keeps changing, but the fundamentals compound. Here are the ten SEO levers delivering the best ROI for growing brands this year.",
    category: "Digital Marketing",
    tags: ["SEO", "Growth", "Marketing"],
    featuredImage: "/images/blog/blog-1.webp",
    isFeatured: true,
    content: `
      <p>Search engine optimization in 2026 rewards brands that treat content as a product, not a checkbox. Below are the strategies we lean on most when scaling organic traffic for clients.</p>
      <h3>1. Topical authority over scattered keywords</h3>
      <p>Build clusters of deeply linked content around a core theme so search engines see you as the definitive source. A single pillar page supported by ten focused articles outperforms thirty disconnected posts.</p>
      <h3>2. Intent-matched formats</h3>
      <p>Map every target query to the format searchers expect — comparison tables, step-by-step guides, or short answers — and ship that, not a generic blog post.</p>
      <blockquote><p>The brands winning organic traffic aren't writing more; they're writing the <em>right</em> thing for the right intent.</p><cite>Memat Editorial</cite></blockquote>
      <h3>3. Technical hygiene that compounds</h3>
      <p>Core Web Vitals, clean internal linking, and crawlable rendering remain non-negotiable. A fast, indexable site lets great content do its job.</p>
      <ul>
        <li>Ship server-rendered or pre-rendered HTML for key pages</li>
        <li>Compress and lazy-load imagery</li>
        <li>Keep your sitemap and structured data in sync</li>
      </ul>
      <p>Pair these with consistent publishing and you'll see durable, compounding gains rather than short-lived spikes.</p>
    `,
  },
  {
    title: "Why Server-Side Rendering Still Matters for Your Marketing Site",
    excerpt:
      "Client-side-only sites can quietly cripple your search visibility. Here's when SSR or pre-rendering is worth the effort — and when it isn't.",
    category: "Web Development",
    tags: ["Next.js", "SEO", "Performance"],
    featuredImage: "/images/blog/blog-4.webp",
    content: `
      <p>If your most important pages only render after JavaScript runs, you're gambling with how reliably search engines and social platforms can read them.</p>
      <h3>The crawl problem</h3>
      <p>Many crawlers and link-preview bots fetch raw HTML and never execute your JavaScript bundle. A client-only page looks empty to them — no headline, no copy, no meta.</p>
      <h3>What to do about it</h3>
      <p>For marketing and content pages, render meaningful HTML on the server (SSR) or at build time (SSG/pre-render). Reserve heavy client interactivity for app-like areas behind a login.</p>
      <ul>
        <li>Marketing pages → SSR / pre-render</li>
        <li>Dashboards → client-side is fine</li>
        <li>Blog → server-rendered with dynamic metadata</li>
      </ul>
      <p>This is exactly how this blog is built: each post is fetched server-side so its title, description and Open Graph tags are present in the initial HTML.</p>
    `,
  },
  {
    title: "Building a Brand System That Scales Across Every Touchpoint",
    excerpt:
      "A logo is not a brand. Learn how to build a flexible identity system — colour, type, voice — that stays consistent from your website to your ads.",
    category: "Branding",
    tags: ["Branding", "Design", "Strategy"],
    featuredImage: "/images/blog/blog-6.webp",
    content: `
      <p>Great brands feel cohesive everywhere you meet them. That consistency isn't luck — it's a system.</p>
      <h3>Start with tokens, not screenshots</h3>
      <p>Define your colour palette, type scale, spacing and motion as reusable tokens. When everything references the same source of truth, every new asset stays on-brand automatically.</p>
      <h3>Document the voice</h3>
      <p>Visual identity gets all the attention, but tone of voice is half your brand. Write down how you sound — confident but warm, clear over clever — and apply it to every headline and email.</p>
      <p>Build the system once, and scaling becomes assembly rather than reinvention.</p>
    `,
  },
];

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ Connected to MongoDB");

  // Categories (upsert by slug)
  const catDocs = {};
  for (const c of categories) {
    const slug = slugify(c.name);
    const doc = await BlogCategory.findOneAndUpdate(
      { slug },
      { ...c, slug },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    catDocs[c.name] = doc;
  }
  console.log(`✅ ${Object.keys(catDocs).length} categories ready`);

  // Authors (upsert by slug)
  const authorDocs = {};
  for (const a of authors) {
    const slug = slugify(a.name);
    const doc = await BlogAuthor.findOneAndUpdate(
      { slug },
      { ...a, slug },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    authorDocs[a.name] = doc;
  }
  console.log(`✅ ${Object.keys(authorDocs).length} authors ready`);

  // Posts (skip if slug already exists)
  let created = 0;
  for (let i = 0; i < samplePosts.length; i++) {
    const p = samplePosts[i];
    const slug = slugify(p.title);
    const exists = await Blog.exists({ slug });
    if (exists) continue;

    const author = i % 2 === 0 ? authorDocs["Memat Editorial"] : authorDocs["Aarav Sharma"];
    await Blog.create({
      ...p,
      slug,
      categorySlug: slugify(p.category),
      status: "published",
      visibility: "public",
      publishedAt: new Date(Date.now() - i * 86400000), // stagger dates
      author: {
        ref: author._id,
        name: author.name,
        slug: author.slug,
        role: author.role,
        avatar: author.avatar,
        bio: author.bio,
      },
      meta: {
        metaTitle: p.title,
        metaDescription: p.excerpt,
        ogImage: p.featuredImage,
      },
    });
    created++;
  }
  console.log(`✅ ${created} new sample post(s) created (existing ones skipped)`);

  await mongoose.disconnect();
  console.log("🎉 Blog seed complete. Visit /blogs to view them.");
  process.exit(0);
}

run().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
