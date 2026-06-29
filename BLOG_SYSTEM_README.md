# Memat Digi — Blog System & Admin Panel

A full dynamic blog with a powerful admin panel, built into your existing Next.js + Express stack.

## What's included

**Public site**
- `/blogs` — dynamic, filterable, paginated blog listing (by category, tag, author, search) with a live sidebar (search, recent posts, categories, tags).
- `/blogs/<slug>` — server-rendered post page with full SEO metadata (title, description, Open Graph, Twitter cards, canonical, robots), author box, reading time, share buttons, related posts, previous/next navigation, and a public comment thread.
- Homepage "News & Blogs" section now pulls the 3 latest published posts automatically (and hides itself gracefully when there are none).

**Admin panel** (`/admin`)
- **All Posts** — search, status tabs (All/Published/Drafts/Scheduled), category filter, bulk publish/draft/delete, featured-star toggle, inline status toggle, views, pagination.
- **New / Edit Post** — tabbed editor: Content (rich WYSIWYG with headings, bold/italic, lists, quotes, code blocks, images, links + HTML source view), Media (featured image + gallery), Categories & Tags (with inline category creation), Author, SEO (full meta + live Google preview), Settings (status, visibility, schedule, featured, comments).
- **Categories**, **Authors** — full CRUD with post counts.
- **Comments** — moderation queue (approve / spam / delete) with status tabs and counts.
- **Enquiries** — inbox for contact/blog form submissions (new/read/replied/archived) with one-click email reply.
- **Media Library** — multi-upload, alt-text editing, copy URL, delete.

## Setup

### 1. Backend
```bash
cd backend
npm install
# Make sure MongoDB is running and backend/.env is set
# (MONGO_URI, JWT_SECRET, PORT=5000, FRONTEND_URL)
npm run dev          # starts the API on http://localhost:5000
```

### 2. Create the admin account
Open `http://localhost:3000/admin/login` and click **Seed Admin** (one-time), then log in:
- Email: `admin@memat.com`
- Password: `Admin@123`

### 3. (Optional) Seed sample blog content
```bash
cd backend
node seedBlog.js     # adds 4 categories, 2 authors, 3 sample posts
```

### 4. Frontend
```bash
npm install
npm run dev          # http://localhost:3000
```
Make sure `.env` has `NEXT_PUBLIC_API_URL=http://localhost:5000/api`.

### 5. Use it
- Manage content at `http://localhost:3000/admin/blog`
- View the live blog at `http://localhost:3000/blogs`

## New API endpoints
```
Public
  GET    /api/blogs                       list (filters: category, tag, search, author, featured, page, limit)
  GET    /api/blogs/slug/:slug            single post (+related, prev/next, commentCount)
  POST   /api/blogs/slug/:slug/view       increment view count
  GET    /api/blogs/meta/sidebar          categories + tags + recent for the sidebar
  GET    /api/blog-categories             categories (with post counts)
  GET    /api/blog-authors                authors (with post counts)
  POST   /api/comments                    submit a comment (held for moderation)
  GET    /api/comments/blog/:slug         approved comments (threaded)
  POST   /api/enquiries                   submit a contact/blog enquiry

Admin (Bearer token)
  GET    /api/blogs/admin/all             all posts (any status) + status counts
  GET    /api/blogs/admin/:id             single post for editing
  POST   /api/blogs                       create
  PUT    /api/blogs/:id                    update
  DELETE /api/blogs/:id                    delete
  POST   /api/blogs/bulk                   bulk publish/draft/delete
  PATCH  /api/blogs/:id/toggle-publish
  PATCH  /api/blogs/:id/toggle-featured
  POST   /api/blog-categories | PUT/DELETE /:id
  POST   /api/blog-authors    | PUT/DELETE /:id
  GET    /api/comments                     all comments + status counts
  PATCH  /api/comments/:id/status          approve/spam/pending
  DELETE /api/comments/:id
  GET    /api/enquiries                     all enquiries + status counts
  PATCH  /api/enquiries/:id/status
  DELETE /api/enquiries/:id
  GET    /api/media                         media library
  PATCH  /api/media/:id                     edit alt text
  DELETE /api/media/:id
  POST   /api/upload                        single image (also recorded in Media)
  POST   /api/upload/multiple               multiple images
```

## Notes
- Post URLs are slug-based (`/blogs/your-post-slug`); slugs are auto-generated and de-duplicated.
- The rich text editor is dependency-free (no new npm packages were added).
- DB-hosted images use plain `<img>` + a URL resolver, so no `next/image` remote config is required — though `next.config.js` now also whitelists `localhost:5000/uploads` for convenience.
- Comments are public-submit + admin-moderated; only approved comments appear on the site.
- To wire your **contact form** into the Enquiries inbox, POST to `/api/enquiries` with `{ name, email, message, phone?, subject?, source? }`.
