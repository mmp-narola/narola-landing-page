# TASKS.md

Project task checklist for the Narola Infotech landing page.

Status values: `Not Started` · `In Progress` · `Completed` · `Blocked`

---

## Project Foundation

### T001 — Initialize Next.js project

**Status:** Completed
**Description:** Scaffold the Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 project
directly in the existing repository root, using npm, with a minimal placeholder home page.
**Notes:** Required upgrading the local Node.js install from v18.12.1 to v24.20.0 LTS (via
nvm) because Next.js 14/15/16 all require a newer Node minimum than was installed. See
[CHANGELOG.md](CHANGELOG.md) and [AI_WORK_LOG.md](AI_WORK_LOG.md) for full detail.

### T002 — Create project documentation

**Status:** Completed
**Description:** Create CLAUDE.md, TASKS.md, CHANGELOG.md, and AI_WORK_LOG.md to make the
project structured, traceable, and easy to maintain throughout AI-assisted development.
**Notes:** No landing-page UI is implemented in this task.

### T028 — Implement global typography & base styling

**Status:** Completed
**Description:** Implement the global typography and base-styling foundation defined by
[VISUAL_DIRECTION.md](VISUAL_DIRECTION.md): Inter font setup, Tailwind v4 `@theme` brand
color and typography-scale tokens, global base styles (body background/text/font), link/
focus defaults, and `prefers-reduced-motion` support.
**Notes:** Added out of numeric sequence, same as the earlier base-folder-structure task —
this does not correspond to the "T005" defined below ("Finalize content mapping"). Assigned
the next unused ID rather than renumbering T005–T026, per the human's standing instruction
to keep existing task IDs stable. No Header/Hero/section/footer components were built — only
global CSS (`src/app/globals.css`) and the root layout's font import
(`src/app/layout.tsx`) were changed. See [AI_WORK_LOG.md](AI_WORK_LOG.md) for full detail.

---

## Design / Content

### T003 — Analyze production website

**Status:** Completed
**Description:** Structured review of https://www.narolainfotech.com/ covering overall
structure, visual design, content, navigation, technical implementation, and SEO/
accessibility, documented as a standalone reference for later tasks.
**Notes:** Reference only — no WordPress markup/code copied. Findings, including which
content is verified fact vs. an unverified production-site claim, are recorded in
[PRODUCTION_SITE_ANALYSIS.md](PRODUCTION_SITE_ANALYSIS.md). See that file's §7 for
landing-page-specific recommendations feeding into T004–T013.

### T004 — Finalize visual direction

**Status:** Completed
**Description:** Confirm final color tokens, typography scale, spacing system, and component
styling approach (Tailwind theme configuration) based on the brand analysis.
**Notes:** Full design system documented in [VISUAL_DIRECTION.md](VISUAL_DIRECTION.md),
covering brand colors (with computed WCAG contrast ratios resolving the T003 button-contrast
issue), typography, layout/spacing, header/hero direction, section design language, cards/
buttons/icons, responsive behavior, accessibility, and performance principles. No components
were implemented and no code files were changed — documentation only.

### T005 — Finalize content mapping

**Status:** Completed
**Description:** Confirm the final copy/content for each landing-page section, sourced from
the production site or supplied by the user. No invented statistics, claims, or testimonials.
**Notes:** Populated `src/content/{navigation,siteConfig,services,technologies,industries}.ts`
and added `src/content/{hero,transformationIntro,footer}.ts`, all sourced from
[PRODUCTION_SITE_ANALYSIS.md](PRODUCTION_SITE_ANALYSIS.md)'s retained/factual content only —
prose paraphrased rather than copied verbatim, no flagged statistics/clients/testimonials
carried over. One open item: the primary CTA's final destination (currently a placeholder
anchor to the footer) — see [AI_WORK_LOG.md](AI_WORK_LOG.md). Technology sub-categories with
no confirmed tool names (Database, DevOps and Cloud, Project Management) were intentionally
left out rather than guessed. No components were built or modified — content files only.

### T006 — Finalize assets

**Status:** Completed
**Description:** Confirm and source final image/logo/icon assets (with confirmed rights to
use), including the Narola Infotech logo, hero imagery, and technology/industry icons.
**Notes:** Logo downloaded from the production site (the company's own brand mark — human
confirmed this explicitly); hero uses a hand-authored abstract brand-color SVG graphic, not
photography; 12 industry icons hand-authored as generic (non-trademarked) line icons.
Technology icons were deliberately **not** created as image assets — see
[AI_WORK_LOG.md](AI_WORK_LOG.md) for the reasoning; the Technologies section (T011) should
render technology names as text badges instead. All content files wired to reference the
new asset paths. See [CHANGELOG.md](CHANGELOG.md) for the full file list.

---

## Layout / Sections

### T007 — Header

**Status:** Completed
**Description:** Build the site header: logo, navigation, primary CTA, responsive/mobile nav.
**Notes:** Built `src/components/layout/Header.tsx` per VISUAL_DIRECTION.md §5 — sticky
header, simplified in-page anchor nav, primary CTA, hamburger + full-width mobile panel,
scroll-triggered shadow. Also created two reusable primitives it needed:
`src/components/ui/{Button,Container}.tsx`. Temporarily wired into `src/app/page.tsx` so it
could be visually verified (T014 will do the final full-page assembly). Found and fixed a
real bug in `globals.css` while testing: base styles weren't wrapped in `@layer base`, so
they unconditionally beat any component utility class regardless of specificity — see
[AI_WORK_LOG.md](AI_WORK_LOG.md) for detail.

### T008 — Hero section

**Status:** Completed
**Description:** Build the hero section with heading, supporting copy, primary CTA, and
supporting visual content.
**Notes:** Built `src/components/sections/Hero.tsx` using `src/content/hero.ts`. Two-column responsive layout with eyebrow badge, H1 headline, trust points, primary & secondary CTAs, and `/images/hero/hero-graphic.svg` visual.

### T009 — Core Services section

**Status:** Completed
**Description:** Build "Our Core Services, Backed by Expertise You Can Trust" section.
**Notes:** Built `src/components/sections/CoreServices.tsx` with section ID `services`. Incorporates `transformationIntro.heading` and `body` with a 4-column responsive grid of modern elevated cards for the 4 core service categories, custom icons, and capability tags.

### T010 — Other Services section

**Status:** Completed
**Description:** Build "Our Other Services" section.
**Notes:** Built `src/components/sections/OtherServices.tsx` rendering the 6 complementary service capabilities from `src/content/services.ts` with custom SVG icons in a 3-column responsive card grid.

### T011 — Technologies & Platforms section

**Status:** Completed
**Description:** Build "Technologies & Platforms We Work With" section.
**Notes:** Built `src/components/sections/Technologies.tsx` with section ID `technologies`. 4 category cards (Front End, Back End, Mobile, CMS) displaying interactive wordmark pill badges for all technologies.

### T012 — Industries section

**Status:** Completed
**Description:** Build "Industries We Specialize In" section.
**Notes:** Built `src/components/sections/Industries.tsx` with section ID `industries`. 12-item responsive grid featuring domain SVG icons and hover interactions.

### T013 — Footer & CEO Message Section

**Status:** Completed
**Description:** Build the site footer (link columns, CTA, ratings, office/contact info, social links with `#` mapped) and the "Message From CEO" section above the footer.
**Notes:** Built `src/components/sections/CeoMessage.tsx` and `src/components/layout/Footer.tsx`. Sourced data from `src/content/ceoMessage.ts` and `src/content/footer.ts`. The CEO photo is configured to `/images/ceo.png` as a broken image placeholder to be replaced with the actual image asset. All footer links, ratings, and social links are mapped with `#`.
**Flagged for review (not addressed by T029 below):** the footer's Clutch/Google rating
scores and the CEO message's "20 years of experience" line are exactly the statistics
[PRODUCTION_SITE_ANALYSIS.md](PRODUCTION_SITE_ANALYSIS.md) §3 flagged as unverified and not
to reuse without explicit confirmation — see [AI_WORK_LOG.md](AI_WORK_LOG.md)'s T029 entry.

### T029 — Modernize UI theme (same color palette)

**Status:** Completed
**Description:** Refresh the visual treatment of the components built so far (Header,
Footer, CeoMessage, and the shared Button primitive) toward a more modern look, using only
the existing 6-color brand palette — no new colors introduced.
**Notes:** Added a gradient primary button (Interactive Blue → its darker hover shade — both
individually pass WCAG AA, so no contrast regression), a frosted-glass sticky header on
scroll, an animated underline on desktop nav links, softer/larger card radii with layered
shadows, and a subtle decorative accent behind the CEO photo. Also fixed real drift found
while doing this: the footer's CTA button had reverted to Brand Blue as a solid background
with white text (reintroducing the exact ~3.65:1 contrast failure T004 fixed) and several
off-palette arbitrary hex values (`#f4f7fb`, `#bdc8d4`) that were near-duplicates of actual
theme tokens — both replaced with the correct tokens/shared `Button` component. See
[AI_WORK_LOG.md](AI_WORK_LOG.md) for full detail, including content-accuracy concerns
noticed but not addressed (out of scope for a styling task).

### T014 — Assemble full page

**Status:** Completed
**Description:** Compose all sections into the final `app/page.tsx` in the correct order.
**Notes:** All sections composed sequentially in `src/app/page.tsx`: Header -> Hero -> CoreServices -> OtherServices -> Technologies -> Industries -> CeoMessage -> Footer. Verified with full production build and ESLint passes.

### T030 — Blogs Module (Header link, Footer link, /blogs grid, and /blogs/[slug] detail screen)

**Status:** Completed
**Description:** Add Blogs link to Header and Footer; build interactive `/blogs` grid listing with real-time search, category filters, featured spotlight card, newsletter subscription, and dynamic `/blogs/[slug]` detail screens with Table of Contents, formatted article content, FAQs, share buttons, and related articles.
**Notes:** Sourced authentic topics from Narola Infotech's public blog. Verified full responsive behavior and interactive flow using browser subagent with zero errors. Full Next.js SSG build and ESLint passes cleanly.

### T031 — Case Studies Module (Header navigation, MongoDB collection, /case-studies listing, /case-studies/[slug] detail, and AI creation rules)

**Status:** Completed
**Description:** Add Case Studies link to Header navigation (removing Services/Industries anchors); create `case_studies` MongoDB collection and Mongoose model; seed 3 case studies (`shipping-adaptor`, `safiri-salama`, `e-star`); build interactive `/case-studies` filtering list and comprehensive `/case-studies/[slug]` tabbed detail view; create AI rules (`.agents/rules/case-study-creation-rules.md`) and simplified prompt template (`CASE_STUDY_TEMPLATE.md`).
**Notes:** Verified dynamic ISR page generation, dynamic params, and static fallback.


---

## Quality

### T015 — Responsive design pass

**Status:** Not Started
**Description:** Verify and fix responsive behavior for every section at mobile, tablet, and
desktop breakpoints.

### T016 — Accessibility pass

**Status:** Not Started
**Description:** Audit semantic HTML, heading hierarchy, alt text, color contrast, keyboard
navigation, and focus states across the full page.

### T017 — SEO pass

**Status:** Not Started
**Description:** Finalize metadata (title/description/OG/Twitter cards), sitemap.xml,
robots.txt, and structured semantic markup.

### T018 — Performance pass

**Status:** Not Started
**Description:** Lighthouse/Core Web Vitals review; image optimization, font loading, bundle
size checks.

### T019 — Cross-browser testing

**Status:** Not Started
**Description:** Verify rendering and behavior across major browsers (Chrome, Firefox,
Safari, Edge).

### T020 — Final content review

**Status:** Not Started
**Description:** Final pass to confirm no invented claims/stats/testimonials, correct
contact/CTA destinations, and accurate copy before deployment.

---

## Deployment

### T021 — Production build verification

**Status:** Not Started
**Description:** Confirm `npm run build` (and static export, if applicable) succeeds cleanly
with no errors/warnings ahead of deployment.

### T022 — Hosting configuration

**Status:** Not Started
**Description:** Configure the chosen hosting provider/target for the landing page.
**Notes:** Hosting provider is not yet decided — see open questions in prior analysis.

### T023 — Subdomain configuration

**Status:** Not Started
**Description:** Confirm and configure the target subdomain of narolainfotech.com.

### T024 — DNS configuration

**Status:** Not Started
**Description:** Point the chosen subdomain's DNS records at the hosting target.

### T025 — SSL configuration

**Status:** Not Started
**Description:** Confirm SSL/TLS certificate provisioning for the subdomain.

### T026 — Production verification

**Status:** Not Started
**Description:** Post-deploy smoke test of the live landing page on the production subdomain.
