# Case Study Creation & Automatic Formatting Guide

This document defines how new case studies are created, formatted, and inserted into the **MongoDB `case_studies` collection**.

---

## ⚡ Zero-Boilerplate Rule (Prompt Format)

When creating a new case study via AI prompt, you **only** need to provide the raw client/project information. You do **NOT** need to write or pass:
- ❌ `slug` (Auto-generated from title)
- ❌ `gradient` (Auto-applied from industry category)
- ❌ `tabbedContent` internal keys formatting (Auto-structured by AI)
- ❌ MongoDB connection code or script commands

---

## 📝 Simplified Prompt Template (Copy & Paste)

Whenever you want to add or update a case study, simply provide this format to the AI:

```markdown
Title: [Project / Case Study Title Here]
Client: [Client or Brand Name] (e.g. Confidential Logistics Enterprise)
Industry: [Logistics | Healthcare | Ecommerce | Fintech | Real Estate | SaaS | Enterprise]
Country: [United States | Kenya | Australia | UK | Germany | Global]
Service: [Custom Web App | Mobile App Development | Cloud Architecture | AI Solutions]
Summary: [1-2 sentences summarizing the project achievements]
Cover Image: [Optional image URL]

Metrics / Key Results:
- [Metric 1]: [Value] (e.g., Delivery Efficiency: +35%)
- [Metric 2]: [Value] (e.g., Monthly Transactions: $2.4M)
- [Metric 3]: [Value] (e.g., Operational Uptime: 99.98%)

Overview:
[Detailed paragraph explaining background and context of the client]

Business Needs:
- [Business requirement or goal 1]
- [Business requirement or goal 2]

Challenges:
- [Technical, organizational, or market challenge 1]
- [Technical, organizational, or market challenge 2]

Solution:
- [Architecture or technology approach 1]
- [Integration, process, or feature implementation 2]

Objectives:
- [Primary objective achieved 1]
- [Secondary objective achieved 2]

Technologies:
- Frontend: [e.g., React, Next.js, Tailwind CSS]
- Backend: [e.g., Node.js, Python, Java Spring Boot]
- Database & Cloud: [e.g., PostgreSQL, Redis, AWS Lambda, Docker]

Featured: [true | false] (Optional, default is false)
```

---

## 🤖 Automatic Generation Rules

When processing a case study prompt, the AI executes:

### 1. Auto-Generate Slug
- Lowercase the title.
- Strip special characters, commas, and punctuation.
- Replace spaces with hyphens `-`.
- *Example*: `"Building a Scalable Logistics Adapter"` ➔ `"building-a-scalable-logistics-adapter"`.

### 2. Auto-Format Tabbed Content
Structures the bullet points into `tabbedContent`:
```json
{
  "businessNeeds": ["point 1", "point 2"],
  "challenges": ["challenge 1", "challenge 2"],
  "solution": ["solution detail 1", "solution detail 2"],
  "objectives": ["objective 1", "objective 2"]
}
```

### 3. Industry Gradient Presets
| Industry | Default Gradient |
| :--- | :--- |
| `Logistics & Supply Chain` | `from-blue-600 to-indigo-800` |
| `Healthcare & Wellness` | `from-emerald-600 to-teal-800` |
| `Ecommerce & Retail` | `from-purple-600 to-indigo-900` |
| `Fintech & Banking` | `from-sky-700 to-blue-900` |
| `Technology & SaaS` | `from-cyan-600 to-blue-800` |
| `Enterprise IT` | `from-slate-700 to-indigo-900` |

---

## 🗄️ Full MongoDB Schema Reference

For reference, the complete object stored in MongoDB's `case_studies` collection:

```typescript
export interface ICaseStudyDocument {
  slug: string;
  title: string;
  client: string;
  industry: string;
  country: string;
  service: string;
  summary: string;
  coverImage?: string;
  gradient?: string;
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  overview: string;
  tabbedContent: {
    businessNeeds: string[];
    challenges: string[];
    solution: string[];
    objectives: string[];
  };
  technologies: string[];
  featured: boolean;
  order: number;
}
```

---

## 🛠️ Management Commands

You can prompt the AI at any time:
- **Add**: *"Add a new case study for a healthcare telemedicine app with these points..."*
- **Edit**: *"Update metrics for the safiri-salama case study to 15,000+ Memorials Created"*
- **Delete**: *"Remove the case study with slug shipping-adaptor from MongoDB"*
