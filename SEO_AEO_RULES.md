# Technical SEO & AEO (Answer Engine Optimization) Rules

This document outlines the mandatory SEO and AEO protocols for **every page and component** across the Narola Infotech website.

---

## 1. Technical SEO Standards

### A. Next.js Metadata API on Every Page
Every `page.tsx` must export an explicit `metadata: Metadata` object.

```tsx
import type { Metadata } from "next";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Target Keyword | Narola Infotech",
  description: "Accurate, compelling 140–160 character description with target keywords.",
  keywords: ["keyword 1", "keyword 2", "Narola Infotech"],
  alternates: {
    canonical: `${siteConfig.url}/target-path`,
  },
  openGraph: {
    title: "Target Keyword | Narola Infotech",
    description: "Compelling social sharing description.",
    url: `${siteConfig.url}/target-path`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website", // or "article" for blogs
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Narola Infotech - Target Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Target Keyword | Narola Infotech",
    description: "Compelling description for Twitter/X.",
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
```

### B. Robots.txt & AI Answer Engine Permissions
`src/app/robots.ts` allows standard search engines and explicit AI crawler user-agents (`GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`).

### C. XML Sitemap Integration
`src/app/sitemap.ts` dynamically generates routes with:
- `lastModified` timestamp
- `changeFrequency` (`"daily"`, `"weekly"`, or `"monthly"`)
- `priority` (`1.0` for homepage, `0.9` for core services, `0.85` for case studies, `0.8` for blogs)

---

## 2. Structured Data (JSON-LD) Requirements

Every page must render appropriate schema markup using `<JsonLd data={...} />` from `@/components/seo/JsonLd`.

| Page Type | Required Schemas | Description |
|-----------|------------------|-------------|
| **Homepage** | `Organization`, `WebSite`, `ItemList (Services)`, `FAQPage` | Entity authority, site search action, core capabilities, AEO FAQs. |
| **Service Pages** | `Service`, `BreadcrumbList`, `FAQPage` | Specific service offering, deliverables, pricing/team model, FAQs. |
| **Case Studies** | `CreativeWork` or `Article`, `BreadcrumbList` | Client challenge, solution, industry, results/metrics. |
| **Blog Posts** | `BlogPosting` or `Article`, `BreadcrumbList`, `Author`, `FAQPage` | Headline, publish dates, author bio, key takeaways. |

---

## 3. AEO (Answer Engine Optimization) Guidelines

To ensure Narola Infotech content is selected and cited by AI engines (ChatGPT, Perplexity, Claude, Google AI Overviews):

1. **Direct Q&A & Definition Sections**:
   - Begin major sections with crisp definitions (e.g., *"What is Headless Commerce?"*, *"How does AI Workflow Automation work?"*).
   - Use direct, factual phrasing in the first 2–3 sentences before elaborating.
2. **Structured Lists & Comparison Tables**:
   - AI scrapers prioritize bulleted deliverables, technology stacks, and step-by-step processes.
3. **FAQPage Schema on Core Pages**:
   - Include 4–6 high-intent questions and authoritative answers in both visible HTML and JSON-LD schema.
4. **Authoritative Stats & Entity Mentions**:
   - Include concrete numbers (e.g., *"20+ Years since 2005"*, *"1,500+ Projects"*, *"4.9/5 Clutch Rating"*, *"Top 1% vetted developers"*).

---

## 4. Performance SEO & Core Web Vitals

1. **Images**:
   - Always use `next/image` with explicit `width`, `height`, and descriptive `alt` text.
   - Use `priority` only for above-the-fold hero images.
   - All below-the-fold images default to lazy loading.
2. **Typography**:
   - Use `next/font/google` (`Inter`) with `display: 'swap'` to eliminate Cumulative Layout Shift (CLS).
3. **Semantic Hierarchy**:
   - Exactly **one `<h1>`** per page.
   - Proper nesting: `<h1>` → `<h2>` → `<h3>` → `<p>`.
   - Semantic landmarks: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
4. **Client Components**:
   - Interactive widgets (e.g. AI Prompt Matcher) must not block server-rendered initial HTML payload.
