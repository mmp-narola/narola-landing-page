# AI Rules for Adding & Formatting Case Studies

When the user asks to create, add, edit, or delete a case study in MongoDB or the repository:

## 1. Zero Boilerplate Requirement
The user should only need to provide the raw case study content (Title, Client/Industry/Country, Overview, Business Needs, Challenges, Solution, Objectives, Impact/Metrics, and Tech Stack).
**NEVER ask the user for:**
- `slug`
- `gradient`
- `featured` flag (default to `false` unless requested)
- `tabbedContent` structures / internal nesting keys
- `scripts` execution details

## 2. Automatic Transformations (Mandatory Rules)

1. **Auto-Generate `slug`**:
   - Convert the `title` to lowercase.
   - Strip special characters, commas, and punctuation.
   - Replace spaces and consecutive dashes with single `-`.
   - *Example*: `"Building a Scalable Logistics Adapter"` ➔ `"building-a-scalable-logistics-adapter"`.

2. **Auto-Format Tabbed Content (`tabbedContent`)**:
   - Automatically structure the tabbed narrative:
     ```json
     {
       "businessNeeds": ["point 1", "point 2"],
       "challenges": ["challenge 1", "challenge 2"],
       "solution": ["solution detail 1", "solution detail 2"],
       "objectives": ["objective 1", "objective 2"]
     }
     ```
   - If challenges or business needs are provided as freeform paragraphs, cleanly split into bullet points.

3. **Metrics & Impact**:
   - Extract numeric highlights into structured badges:
     ```json
     {
       "label": "Delivery Efficiency",
       "value": "+35%",
       "description": "Increase in on-time delivery across North America"
     }
     ```

4. **Industry & Region Badges**:
   - Validate and normalize standard industry names (e.g., `"Logistics & Supply Chain"`, `"Healthcare"`, `"Ecommerce"`, `"Fintech"`, `"Enterprise IT"`).
   - Normalize country names and regions (e.g., `"United States"`, `"Kenya"`, `"United Kingdom"`, `"Global"`).

5. **Visual Themes & Gradients**:
   - Assign complementary gradient based on industry:
     - `Logistics` / `Transportation` ➔ `"from-blue-600 to-indigo-800"`
     - `Healthcare` / `Memorial` ➔ `"from-emerald-600 to-teal-800"`
     - `Ecommerce` / `Retail` ➔ `"from-purple-600 to-indigo-900"`
     - `Fintech` / `Banking` ➔ `"from-sky-700 to-blue-900"`
     - `Technology` / `SaaS` ➔ `"from-cyan-600 to-blue-800"`
     - Default ➔ `"from-slate-700 to-indigo-900"`

6. **Execution via Helper**:
   - Upsert into MongoDB `case_studies` collection using `saveCaseStudyToMongoDB(data)` from `scripts/case-study-helper.mjs` or directly via Mongoose.
   - Confirm to the user with the generated slug and direct URL (`/case-studies/[slug]`).
