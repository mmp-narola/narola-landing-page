# Blog Post Creation & Automatic Formatting Guide

This document defines how new blog articles are created, formatted, and inserted into the **MongoDB `blogs` collection**.

---

## ⚡ Zero-Boilerplate Rule (Prompt Format)

When creating a new blog via AI prompt, you **only** need to provide the raw content. You do **NOT** need to write or pass:
- ❌ `slug` (Auto-generated from title)
- ❌ `section.id` (Auto-generated from headings)
- ❌ `tableOfContents` (Auto-generated from sections)
- ❌ `readTime` / `readTimeMinutes` (Auto-calculated from word count)
- ❌ `gradient` (Auto-applied from category preset)
- ❌ `author` (Defaults to "Narola Think Tank")
- ❌ `publishedDate` / `lastUpdated` (Defaults to current date)
- ❌ `layout` (Defaults to "blog-layout-1")

---

## 📝 Simplified Prompt Template (Copy & Paste)

Whenever you want to add a blog, simply provide this minimal format to the AI:

```markdown
Title: [Your Article Title Here]
Category: [ecommerce | technology | it-services | ai-ml | cloud-devops | mobile-app]
Excerpt: [Optional 1-2 sentence preview. If omitted, generated from 1st paragraph]

Introduction:
- [First paragraph of introduction]
- [Second paragraph of introduction]

Sections:

1. [Heading for Section 1]
   - [Paragraph 1]
   - [Paragraph 2]
   Bullet Points:
   - [Optional bullet point 1]
   - [Optional bullet point 2]
   Callout: [Optional note / tip / insight]

2. [Heading for Section 2]
   - [Paragraph 1]
   - [Paragraph 2]

FAQs: (Optional)
- Q: [Question 1]
  A: [Answer 1]
- Q: [Question 2]
  A: [Answer 2]

Conclusion: (Optional)
- [Concluding thoughts]

Related Slugs: (Optional)
- [slug-1], [slug-2]
```

---

## 🤖 Automatic Generation Rules

When processing a blog request, the AI automatically executes these rules:

### 1. Auto-Generate Slug
- Lowercase the title.
- Strip leading numbers (e.g. `"1. "`).
- Remove special characters, replace whitespace with `-`.
- *Example*: `"How to Start an Ecommerce Business in 2026 from Scratch"` ➔ `"how-to-start-ecommerce-business"`.

### 2. Auto-Generate Section IDs
- Lowercase each heading, strip numbering prefixes, and convert to kebab-case.
- *Example*: `"1. What is an Ecommerce Business?"` ➔ `id: "what-is-an-ecommerce-business"`.

### 3. Auto-Generate Table of Contents
- Automatically builds the `tableOfContents` array matching every section heading and ID:
  ```json
  [
    {
      "id": "what-is-an-ecommerce-business",
      "title": "1. What is an Ecommerce Business?"
    }
  ]
  ```

### 4. Auto-Calculate Read Time
- Counts all words across introduction, sections, FAQs, and conclusion.
- `readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200))`
- `readTime = "${readTimeMinutes} min read"`

### 5. Category Presets & Metadata Defaults
| Category ID | Category Label | Default Gradient |
| :--- | :--- | :--- |
| `ecommerce` | Ecommerce | `from-blue-600 to-indigo-800` |
| `technology` | Technology | `from-cyan-600 to-blue-700` |
| `it-services` | IT Services | `from-slate-700 to-indigo-900` |
| `ai-ml` | AI & ML | `from-indigo-700 to-purple-900` |
| `cloud-devops` | Cloud & DevOps | `from-blue-700 to-sky-900` |
| `mobile-app` | Mobile Apps | `from-blue-600 to-teal-800` |

- **Default Author**:
  ```json
  {
    "name": "Narola Think Tank",
    "role": "Technology & Software Engineering Team",
    "avatarUrl": "/images/favicon.png"
  }
  ```
- **Dates**: Current Date (`"Month DD, YYYY"`).
- **Layout**: `"blog-layout-1"`.
- **Featured**: `false`.

---

## 🎨 Rich Media Features (Images, Tables & Links)

You can now easily include rich elements directly inside sections:

### 1. Clickable Links & Bold Text (Markdown)
Inside any paragraph (`content`), bullet points, FAQs, or conclusion, you can use standard Markdown:
- **Links**: `[Visit Spring](https://spring.io/)` ➔ Renders as styled blue interactive link.
- **Bold**: `**Key Feature:**` ➔ Renders as bold text.
- **Code**: `` `npm run build` `` ➔ Renders as inline code badge.

### 2. Multiple Images per Section (Top, Middle, Bottom)
Add an `images` array to any section:
```markdown
Images:
- url: "https://www.narolainfotech.com/wp-content/uploads/2024/09/spring-architecture.jpg"
  alt: "Spring Architecture Diagram"
  caption: "Figure 1: Spring Framework Modular Architecture"
  position: "top" # options: "top", "middle", "bottom"
```

### 3. Comparison / Data Tables
Add a `table` to any section:
```markdown
Table:
  caption: "Java Frameworks Comparison"
  headers: ["Framework", "Best For", "Learning Curve"]
  rows:
    - ["Spring Boot", "Microservices & Enterprise", "Moderate"]
    - ["Hibernate", "ORM & Database Mapping", "Easy"]
```

---

## 🗄️ Full MongoDB Schema Reference

For reference, the complete object stored in MongoDB:

```typescript
export interface IBlogDocument {
  slug: string;
  title: string;
  excerpt: string;
  category: "ecommerce" | "technology" | "it-services" | "ai-ml" | "cloud-devops" | "mobile-app";
  categoryLabel: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  publishedDate: string;
  lastUpdated: string;
  readTime: string;
  readTimeMinutes: number;
  featured: boolean;
  coverImage?: string;
  gradient: string;
  tableOfContents: {
    id: string;
    title: string;
    subItems?: { id: string; title: string }[];
  }[];
  introduction: string[];
  sections: {
    id: string;
    heading: string;
    content: string[]; // Supports [links](url), **bold**, `code`
    bulletPoints?: string[];
    images?: {
      url: string;
      alt?: string;
      caption?: string;
      position?: "top" | "middle" | "bottom";
    }[];
    table?: {
      caption?: string;
      headers: string[];
      rows: string[][];
    };
    callout?: {
      type: "tip" | "insight" | "note";
      title?: string;
      text: string;
    };
  }[];
  faqs?: { question: string; answer: string }[];
  conclusion?: string[];
  relatedSlugs?: string[];
  layout?: string;
}
```
