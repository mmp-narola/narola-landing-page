# Blog Post Entry: Next Js blog 123 (`test-slug`)

This document contains the prompt details and the exact JSON document added to the **MongoDB Atlas `blogs` collection**.

---

## 1. Original User Prompt / Details

- **Slug**: `test-slug`
- **Title**: `Next Js blog 123`
- **Excerpt**: `A practical guide to building and deploying blogs in Next.js, covering routing, data fetching, and MongoDB integration.`
- **Category**: `ecommerce`
- **Category Label**: `Ecommerce`
- **Author Name**: `Merul Test`
- **Author Role**: `admin`
- **Author Avatar URL**:
- **Published Date**: `15 September 2026`
- **Last Updated**: `14 September 2026`
- **Read Time**: `"6 min read"`
- **Read Time Minutes**: `6`
- **Featured**: `false`
- **Cover Image URL**: _(none)_
- **Gradient**: `from-blue-600 to-indigo-800`
- **Table of Contents**:
  - `id`: `getting-started`, `title`: `1. Getting Started with Next.js`
- **Introduction**:
  - Next.js has become one of the most popular frameworks for building modern web applications, and blogs are no exception. Its combination of server-side rendering, static generation, and a flexible App Router makes it possible to build fast, SEO-friendly blogs that scale well as content grows.
- **Sections**:
  - `id`: `getting-started`, `heading`: `Getting Started with Next.js`
  - `content`:
    - Setting up a Next.js blog starts with creating a new project using the App Router, which organizes pages and API routes under a single `app/` directory. From there, connecting a database like MongoDB lets you store and retrieve blog posts dynamically instead of hardcoding content.
    - Once the basic structure is in place, you can build out listing pages, individual post pages, and an admin form for adding new content — all using the same React and API route patterns.
- **FAQs**: _(none)_
- **Conclusion**: _(none)_
- **Related Slugs**: _(none)_

---

## 2. MongoDB Document JSON (Inserted into Atlas)

```json
{
  "slug": "test-slug",
  "title": "Next Js blog 123",
  "excerpt": "A practical guide to building and deploying blogs in Next.js, covering routing, data fetching, and MongoDB integration.",
  "category": "ecommerce",
  "categoryLabel": "Ecommerce",
  "author": {
    "name": "Merul Test",
    "role": "admin",
    "avatarUrl": "https://google.com"
  },
  "publishedDate": "15 September 2026",
  "lastUpdated": "14 September 2026",
  "readTime": "6 min read",
  "readTimeMinutes": 6,
  "featured": false,
  "gradient": "from-blue-600 to-indigo-800",
  "tableOfContents": [
    {
      "id": "getting-started",
      "title": "1. Getting Started with Next.js"
    }
  ],
  "introduction": [
    "Next.js has become one of the most popular frameworks for building modern web applications, and blogs are no exception. Its combination of server-side rendering, static generation, and a flexible App Router makes it possible to build fast, SEO-friendly blogs that scale well as content grows."
  ],
  "sections": [
    {
      "id": "getting-started",
      "heading": "Getting Started with Next.js",
      "content": [
        "Setting up a Next.js blog starts with creating a new project using the App Router, which organizes pages and API routes under a single app/ directory. From there, connecting a database like MongoDB lets you store and retrieve blog posts dynamically instead of hardcoding content.",
        "Once the basic structure is in place, you can build out listing pages, individual post pages, and an admin form for adding new content — all using the same React and API route patterns."
      ]
    }
  ],
  "faqs": [],
  "conclusion": [],
  "relatedSlugs": []
}
```

---

## 3. Status & Live Verification

- **Database**: MongoDB Atlas Cluster
- **Collection**: `blogs`
- **Slug Route**: `/blogs/test-slug`
- **Build Status**: Verified with `npm run build`
