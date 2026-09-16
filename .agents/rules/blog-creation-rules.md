# AI Rules for Adding & Formatting Blog Posts

When the user asks to create, add, or insert a blog post into MongoDB or the repository:

## 1. Zero Boilerplate Requirement
The user should only need to provide the raw blog content (Title, Introduction, Headings/Sections, FAQs, and Conclusion).
**NEVER ask the user for:**
- `slug`
- `section.id`
- `tableOfContents`
- `readTime` or `readTimeMinutes`
- `gradient`
- `categoryLabel`
- `layout`

## 2. Automatic Transformations (Mandatory Rules)

1. **Auto-Generate `slug`**:
   - Convert the `title` to lowercase.
   - Strip leading numbers (e.g. "1. ").
   - Remove special characters and replace spaces with hyphens `-`.
   - Example: `"How to Start an Ecommerce Business in 2026 from Scratch"` ➔ `"how-to-start-ecommerce-business"` or `"how-to-start-an-ecommerce-business-in-2026-from-scratch"`.

2. **Auto-Generate `section.id`**:
   - For every section in `sections`, derive the `id` from the section `heading`.
   - Strip section numbers (e.g., `"1. What is an Ecommerce Business?"` ➔ `"what-is-an-ecommerce-business"`).

3. **Auto-Generate `tableOfContents`**:
   - Build the `tableOfContents` array automatically from the `sections` array:
     ```json
     {
       "id": section.id,
       "title": section.heading,
       "subItems": subItems // if present
     }
     ```

4. **Auto-Calculate `readTime` and `readTimeMinutes`**:
   - Calculate the total word count across all paragraphs, bullets, FAQs, and headings.
   - Divide by 200 words/minute (rounded up, minimum 1).
   - Format: `readTime: "X min read"`, `readTimeMinutes: X`.

5. **Category & Metadata Defaults**:
   - Category map:
     - `ecommerce` ➔ Label: `"Ecommerce"`, Gradient: `"from-blue-600 to-indigo-800"`
     - `technology` ➔ Label: `"Technology"`, Gradient: `"from-cyan-600 to-blue-700"`
     - `it-services` ➔ Label: `"IT Services"`, Gradient: `"from-slate-700 to-indigo-900"`
     - `ai-ml` ➔ Label: `"AI & ML"`, Gradient: `"from-indigo-700 to-purple-900"`
     - `cloud-devops` ➔ Label: `"Cloud & DevOps"`, Gradient: `"from-blue-700 to-sky-900"`
     - `mobile-app` ➔ Label: `"Mobile Apps"`, Gradient: `"from-blue-600 to-teal-800"`
   - Default Author:
     ```json
     {
       "name": "Narola Think Tank",
       "role": "Technology & Software Engineering Team",
       "avatarUrl": "/images/favicon.png"
     }
     ```
   - Dates: Use current date (`Month DD, YYYY`) if not provided.
   - Layout: `"blog-layout-1"`.
   - Featured: `false`.

6. **Execution**:
   - Auto-format the data into MongoDB's `blogs` collection schema.
   - Insert/upsert into MongoDB using `updateOne({ slug }, { $set: data }, { upsert: true })`.
   - Confirm to the user with the generated slug and direct URL.
