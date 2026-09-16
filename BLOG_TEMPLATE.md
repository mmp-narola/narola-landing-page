# Blog Post Schema & Templates Guide

This document outlines the schema specification and provides ready-to-use templates for adding new blog articles to the **MongoDB Atlas `blogs` collection** or to [`src/content/blogs.ts`](./src/content/blogs.ts).

---

## 1. Field Specification

| Field              |    Type    |    Status    | Default / Fallback                           | Description                                                                                  |
| :----------------- | :--------: | :----------: | :------------------------------------------- | :------------------------------------------------------------------------------------------- |
| `slug`             |  `string`  | **Required** | _None_                                       | Unique URL path segment (e.g. `"react-performance-tips"`). Lowercase, hyphen-separated.      |
| `title`            |  `string`  | **Required** | _None_                                       | Main headline of the article.                                                                |
| `excerpt`          |  `string`  | **Required** | _None_                                       | 1–2 sentence summary displayed on cards, hero spotlight, and meta descriptions.              |
| `category`         |  `string`  | **Required** | _None_                                       | Must match one of the allowed category IDs (see below).                                      |
| `categoryLabel`    |  `string`  | **Required** | _None_                                       | Human-readable badge text (e.g. `"Ecommerce"`, `"Technology"`, `"AI & ML"`).                 |
| `author`           |  `object`  | **Required** | _None_                                       | Author metadata object (see below).                                                          |
| `author.name`      |  `string`  | **Required** | `"Narola Think Tank"`                        | Full name of the author or team.                                                             |
| `author.role`      |  `string`  | **Required** | `"Technology & Engineering Team"`            | Author role or job title.                                                                    |
| `author.avatarUrl` |  `string`  |  _Optional_  | `"/images/favicon.png"`                      | Image path or URL for author avatar. Defaults to Narola favicon.                             |
| `publishedDate`    |  `string`  |  _Optional_  | _Today's Date_ (e.g. `"September 15, 2026"`) | Human-readable publication date. Defaults to current date if omitted.                        |
| `lastUpdated`      |  `string`  |  _Optional_  | Matches `publishedDate`                      | Human-readable updated date. Defaults to `publishedDate` or current date.                    |
| `readTime`         |  `string`  | **Required** | _None_                                       | Display read time (e.g. `"8 min read"`).                                                     |
| `readTimeMinutes`  |  `number`  | **Required** | `5`                                          | Numeric duration in minutes used for sorting/filters.                                        |
| `gradient`         |  `string`  | **Required** | `"from-blue-600 to-indigo-800"`              | Tailwind CSS gradient classes for banner backgrounds.                                        |
| `tableOfContents`  |  `array`   | **Required** | `[]`                                         | Array of TOC items `{ id, title, subItems?: [{ id, title }] }`. `id` must match section IDs. |
| `introduction`     | `string[]` | **Required** | `[]`                                         | Array of paragraphs for the introduction section.                                            |
| `sections`         |  `array`   | **Required** | `[]`                                         | Array of structured section objects (see section schema below).                              |
| `layout`           |  `string`  |  _Optional_  | `"blog-layout-1"`                            | Specifies which layout component to render for the detail page.                              |
| `featured`         | `boolean`  |  _Optional_  | `false`                                      | When `true`, post is highlighted as top spotlight card on `/blogs`.                          |
| `coverImage`       |  `string`  |  _Optional_  | `undefined`                                  | Optional URL or path for custom cover banner.                                                |
| `faqs`             |  `array`   |  _Optional_  | `[]`                                         | Array of FAQ items: `[{ question: string, answer: string }]`.                                |
| `conclusion`       | `string[]` |  _Optional_  | `[]`                                         | Array of concluding paragraphs.                                                              |
| `relatedSlugs`     | `string[]` |  _Optional_  | `[]`                                         | Array of existing blog slugs to feature in "More Articles You Might Like".                   |

---

### Section Schema (`sections` items)

Each item in `sections` represents an article heading and content block:

| Subfield       |    Type    |    Status    | Description                                                                                    |
| :------------- | :--------: | :----------: | :--------------------------------------------------------------------------------------------- |
| `id`           |  `string`  | **Required** | HTML anchor ID (matches TOC `id`, e.g. `"architecture-overview"`).                             |
| `heading`      |  `string`  | **Required** | Section title / H2 heading.                                                                    |
| `content`      | `string[]` | **Required** | Array of paragraph strings.                                                                    |
| `bulletPoints` | `string[]` |  _Optional_  | Bulleted list items styled with checkmark icons.                                               |
| `callout`      |  `object`  |  _Optional_  | Highlight callout box: `{ type: "tip" \| "insight" \| "note", title?: string, text: string }`. |

---

## 2. Layouts System

The blog detail page supports selectable layout components configured via the `layout` property:

| Layout Key                    | Component     | Description                                                                                                   |
| :---------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------ |
| `"blog-layout-1"` _(Default)_ | `BlogLayout1` | Rich 2-column layout with sticky TOC, overview gradient card, author metadata bar, and related articles grid. |

If `layout` is omitted or not found, `blog-layout-1` is used automatically.

---

## 3. Allowed Categories

Use one of these exact `category` IDs:

| `category` ID    | `categoryLabel`    | Description                                                          |
| :--------------- | :----------------- | :------------------------------------------------------------------- |
| `"ecommerce"`    | `"Ecommerce"`      | Digital commerce, Shopify, Magento, headless shopping carts.         |
| `"technology"`   | `"Technology"`     | Frontend/backend frameworks, programming languages, web engineering. |
| `"it-services"`  | `"IT Services"`    | Custom software development, QA testing, staff augmentation.         |
| `"ai-ml"`        | `"AI & ML"`        | Generative AI, LLMs, RAG, smart enterprise automation.               |
| `"cloud-devops"` | `"Cloud & DevOps"` | AWS, Azure, GCP, CI/CD pipelines, Docker, Kubernetes.                |
| `"mobile-app"`   | `"Mobile Apps"`    | Flutter, React Native, iOS Swift, Android Kotlin.                    |

---

## 4. Visual Gradient Presets

Choose from any of these Tailwind gradient presets for the `gradient` field:

- **Blue & Indigo (Default)**: `"from-blue-600 to-indigo-800"`
- **Cyan & Blue**: `"from-cyan-600 to-blue-700"`
- **Deep Blue & Sky**: `"from-blue-700 to-sky-900"`
- **Indigo & Purple**: `"from-indigo-700 to-purple-900"`
- **Ocean Teal**: `"from-blue-600 to-teal-800"`
- **Slate & Navy**: `"from-slate-700 to-indigo-900"`
- **Dark Navy**: `"from-blue-800 to-slate-900"`

---

## 5. Minimal JSON Template (With Optional Fields Omitted)

When creating a blog without `publishedDate` or `author.avatarUrl`, the system automatically applies today's date and the favicon:

```json
{
  "slug": "your-blog-slug",
  "title": "Your Blog Title Here",
  "excerpt": "Short 1-2 sentence preview description of your article.",
  "category": "technology",
  "categoryLabel": "Technology",
  "author": {
    "name": "Narola Think Tank",
    "role": "Technology & Software Engineering Team"
  },
  "readTime": "5 min read",
  "readTimeMinutes": 5,
  "gradient": "from-blue-600 to-indigo-800",
  "tableOfContents": [
    {
      "id": "section-one",
      "title": "1. First Section Heading"
    }
  ],
  "introduction": [
    "First paragraph of article introduction.",
    "Second paragraph of article introduction."
  ],
  "sections": [
    {
      "id": "section-one",
      "heading": "1. First Section Heading",
      "content": ["Paragraph content for section one."]
    }
  ]
}
```

Add a new blog to my MongoDB "blogs" collection with these details:

Slug: how-to-start-ecommerce-business
Title: How to Start an Ecommerce Business in 2026 from Scratch
Excerpt: Learn how to build a scalable, modern ecommerce business in 2026. This comprehensive guide covers niche selection, platform architecture, budgeting, and launch strategies.
Category: ecommerce
Category Label: Ecommerce

Author Name: Narola Think Tank
Author Role: Technology & Software Engineering Team
Author Avatar URL:

Published Date: November 13, 2024
Last Updated: November 13, 2024
Read Time: "15 min read"
Read Time Minutes: 15
Featured: false
Cover Image URL: (none)
Gradient: from-blue-600 to-indigo-800

Table of Contents:

1. id: what-is-an-ecommerce-business, title: 1. What is an Ecommerce Business?
2. id: how-to-start-in-2026, title: 2. How to Start an Ecommerce Business in 2026
   subItems:
   - id: find-your-niche, title: Find Your Niche and Model
   - id: choose-platform, title: Select the Right Architecture
   - id: marketing-seo, title: Implement Marketing & SEO
3. id: success-tips, title: 3. Tips for a High-Converting Store
4. id: cost-breakdown, title: 4. Cost Breakdown & Budgeting
5. id: faqs, title: 5. Frequently Asked Questions

Introduction:

- The global ecommerce market is projected to surpass $6.3 trillion in transaction volume. With rapid advancements in headless commerce, AI-driven personalization, and lightning-fast checkout experiences, starting an online retail or B2B commerce business has never offered greater potential.
- However, standing out requires more than just listing products online. It demands a deliberate strategy encompassing target market research, robust software architecture, conversion optimization, and reliable fulfillment infrastructure.

Sections:

1. id: what-is-an-ecommerce-business, heading: 1. What is an Ecommerce Business?
   content:
   - An ecommerce business is a digital commerce model where goods, services, or digital products are sold over the internet. The digital storefront handles product browsing, checkout processing, order management, and customer communication.
   - Modern ecommerce models encompass Business-to-Consumer (B2C), Business-to-Business (B2B), Direct-to-Consumer (D2C), and multi-vendor marketplaces.
     bulletPoints:
   - B2C (Business-to-Consumer): Selling directly to end consumers with seamless consumer UX.
   - B2B (Business-to-Business): High-volume orders, negotiated pricing, and custom corporate workflows.
   - D2C (Direct-to-Consumer): Brand-owned storefronts with higher margins and direct customer relationships.
   - Marketplaces: Platforms aggregating multiple vendors with unified payment and settlement engines.

2. id: how-to-start-in-2026, heading: 2. How to Start an Ecommerce Business in 2026
   content:
   - Building a durable ecommerce enterprise requires executing key foundational steps in order. From market validation to engineering the storefront, each phase builds upon the previous one.
     callout: type: insight, title: Engineering Tip, text: Decoupling your storefront frontend from the backend commerce engine (Headless Commerce) allows sub-second page loads and complete design freedom.
     bulletPoints:
   - 1. Find Your Niche & Validate Demand: Identify underserved customer pain points and analyze keyword search intent.
   - 2. Select Your Tech Stack & Platform: Choose between Shopify Plus, Magento / Adobe Commerce, WooCommerce, or a custom Next.js headless frontend.
   - 3. Source & Manage Inventory: Establish supply chains, dropshipping partnerships, or custom manufacturing with automated ERP sync.
   - 4. Optimize Conversion Rate (CRO): Implement 1-click checkouts, instant search with auto-complete, and clear trust badges.
   - 5. Plan Omnichannel Marketing: Combine organic technical SEO, Google Shopping, email automation, and retargeting campaigns.

3. id: success-tips, heading: 3. Tips for a High-Converting Store
   content:
   - High-performing ecommerce brands consistently focus on performance, customer trust, and post-purchase loyalty.
   - Speed directly impacts sales: research shows that a 100ms improvement in site speed can elevate conversion rates by up to 8%. Ensure Core Web Vitals are optimized with responsive imagery and edge caching.
     bulletPoints:
   - Mobile-First Experience: Over 70% of digital transactions occur on mobile devices.
   - Transparent Pricing & Shipping: Hidden shipping fees remain the #1 reason for cart abandonment.
   - Real-time Inventory & Shipping Updates: Keep customers informed via automated SMS and email notifications.

4. id: cost-breakdown, heading: 4. Cost Breakdown & Budgeting
   content:
   - The initial capital required to launch an ecommerce store varies based on scale, custom design requirements, and marketing scope. Below is an estimated baseline breakdown:
     bulletPoints:
   - Storefront Development: $2,500 – $25,000+ (depending on custom headless vs templated setup)
   - Domain & Hosting / Infrastructure: $100 – $600 / year
   - Initial Inventory & Sourcing: $1,000 – $10,000+
   - Brand Identity & Product Photography: $500 – $3,000
   - Marketing & Launch Acquisition: $1,000 – $5,000/month

5. id: faqs, heading: 5. Frequently Asked Questions
   content:
   - Here are answers to the most common questions entrepreneurs ask when planning their ecommerce venture:

FAQs:

- Q: Is 2026 a good year to start an ecommerce business?
  A: Absolutely! The global ecommerce market continues to expand with double-digit growth. New technologies like AI personalization, headless CMS, and instant payment methods make it easier to deliver world-class shopping experiences.
- Q: What platform should I use for my ecommerce website?
  A: For fast turnkey setups, Shopify is popular. For custom enterprise scalability, integrations, and unique checkout flows, a custom headless architecture using Next.js with a Node or Laravel backend provides the highest performance.
- Q: How much does it cost to build a custom ecommerce store?
  A: A basic store ranges between $2,000 and $5,000, while a custom, feature-rich enterprise platform with ERP integrations, custom design, and multi-currency support typically ranges from $10,000 to $40,000.

Conclusion:

- Starting an ecommerce business in 2026 offers tremendous upside when backed by solid technology and an agile execution strategy. If you need expert software engineering to build a custom storefront, mobile app, or headless commerce platform, Narola Infotech's dedicated engineering teams are here to help.

Related Slugs: benefits-of-ecommerce, custom-software-development-guide, react-vs-angular-enterprise
