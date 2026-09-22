# Technical SEO & AEO (Answer Engine Optimization) Rules

Follow these rules for all existing and newly created pages, case studies, blogs, and services:

## 1. Page Metadata Requirement
Every `page.tsx` MUST export an explicit `metadata: Metadata` object with:
- `title`: keyword-rich title with template suffix `| Narola Infotech`
- `description`: 140–160 chars focused on value proposition and primary keywords
- `keywords`: array of primary and secondary keywords
- `alternates.canonical`: canonical URL for the page
- `openGraph`: title, description, url, siteName, locale, type, images (1200x630)
- `twitter`: summary_large_image, title, description, images
- `robots`: `{ index: true, follow: true, googleBot: { ... } }`

## 2. Structured Data (JSON-LD)
Inject schema markup using `@/components/seo/JsonLd` on every page:
- Home: `Organization`, `WebSite`, `ItemList (Services)`, `FAQPage`
- Service: `Service`, `BreadcrumbList`, `FAQPage`
- Case Study: `CreativeWork`/`Article`, `BreadcrumbList`
- Blog Post: `BlogPosting`, `BreadcrumbList`, `FAQPage`

## 3. AEO (Answer Engine Optimization) Content Structure
- Write direct answers and definitions in the first 2-3 sentences of sections.
- Format complex explanations with structured bullet lists and step-by-step numbers.
- Include verified entity facts: 20+ years experience, 1,500+ projects delivered, 4.9/5 Clutch rating.

## 4. Performance & Core Web Vitals
- Use `next/image` with width, height, and meaningful `alt` text.
- Exactly one `<h1>` per page.
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
