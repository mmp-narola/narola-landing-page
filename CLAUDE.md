# CLAUDE.md

Guidance for Claude Code (and any AI-assisted contributor) working in this repository.

## Project Purpose

This repository contains a **separate, standalone landing page for Narola Infotech**.

- It is **not** a replacement for, migration of, or modification to the existing production
  WordPress website at https://www.narolainfotech.com/.
- The two projects are fully decoupled: separate codebase, separate deployment, separate
  subdomain. The WordPress site continues to run unaffected.
- The production website is used only as a **reference** for brand identity and public-facing
  business content — never as code to copy, and never as a system to touch.

## Technology

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Node.js 24 LTS
- npm (package manager for this project — do not introduce yarn/pnpm/bun lockfiles)
- `src/` directory layout, `@/*` import alias

See [CHANGELOG.md](docs/CHANGELOG.md) for exact installed versions at each milestone.

## Development Rules

- Use TypeScript for all source files. No plain `.js`/`.jsx` in `src/`.
- Prefer React Server Components. Only add `"use client"` when a component genuinely needs
  browser APIs, interactivity, or React state/effects.
- Keep components small and single-purpose. Compose larger sections from smaller reusable
  pieces rather than writing large monolithic components.
- Avoid unnecessary dependencies. Before adding any package, confirm it's actually needed —
  do not introduce a library when native Next.js/React/CSS/browser functionality is sufficient.
- Keep content/data separate from presentation where appropriate (e.g., lists of services,
  technologies, industries belong in typed data modules, not hard-coded inline in JSX).
- Do not hard-code repeated content unnecessarily — extract shared copy/config into a single
  source of truth.
- Follow accessibility best practices: semantic HTML, proper heading hierarchy, alt text on
  images, sufficient color contrast, keyboard navigability, visible focus states.
- Follow SEO best practices: metadata API usage, semantic structure, descriptive alt text,
  sitemap/robots configuration when applicable.
- Optimize images and performance (appropriate formats, sizing, lazy-loading where suitable).
- Ensure responsive behavior across mobile, tablet, and desktop for every section.
- Do not modify files unrelated to the current task.
- Do not modify the existing WordPress website under any circumstance.
- Do not invent company claims, statistics, awards, testimonials, client names, or other
  business information. Only use content that is confirmed from the public production site
  or explicitly supplied by the user.

## Blog Creation & Formatting Rules

When adding a blog to MongoDB or the codebase:
- **Zero Boilerplate from User**: The user never needs to supply `slug`, `section.id`, `tableOfContents`, `readTime`, `gradient`, or default metadata.
- **Auto-Generate `slug`**: Lowercase title, remove leading numbers, convert spaces/special characters to kebab-case.
- **Auto-Generate `section.id`**: Lowercase heading, strip numbering prefixes, convert to kebab-case.
- **Auto-Generate `tableOfContents`**: Extract directly from `sections` with matching IDs and headings.
- **Auto-Calculate `readTime`**: Count total words across all sections/FAQs/intro and divide by 200 wpm.
- **Auto-Apply Defaults**: Category labels, gradient presets, author ("Narola Think Tank"), current date, layout ("blog-layout-1").
- **Insert directly to MongoDB** `blogs` collection with upsert on `slug`. See `BLOG_TEMPLATE.md` for details.

## Case Study Creation & Formatting Rules

When adding, editing, or deleting a case study in MongoDB or the codebase:
- **Zero Boilerplate from User**: The user provides project details (title, client, industry, country, overview, tabbed points, metrics, tech stack).
- **Auto-Generate `slug`**: Lowercase title, remove punctuation, convert spaces to kebab-case.
- **Auto-Structure `tabbedContent`**: Convert freeform or bulleted requirements into `businessNeeds`, `challenges`, `solution`, and `objectives`.
- **Auto-Assign Gradients**: Set visual gradient themes based on industry category presets.
- **Insert / Upsert directly to MongoDB** `case_studies` collection with upsert on `slug`. See `CASE_STUDY_TEMPLATE.md` and `.agents/rules/case-study-creation-rules.md` for details.

## Design Rules

- Maintain Narola Infotech's existing brand identity (colors, typography, tone).
- Use the production website (https://www.narolainfotech.com/) as the primary branding and
  content reference point.
- The landing page should look modern, professional, and production-ready — it does not need
  to be pixel-identical to the WordPress site.
- Avoid blindly copying the WordPress implementation (markup, CSS, class names, JS behavior).
  Rebuild the visual intent with clean, modern Next.js/Tailwind code.
- Reuse appropriate public-facing business content (service names, descriptions, industry
  lists, technology lists) where suitable, rewritten/adapted as needed rather than scraped.

## AI Development Workflow

Every task should follow this sequence:

1. **Understand** — clarify the task's scope and constraints before acting.
2. **Inspect** — check current repository/file state; don't assume.
3. **Plan** — outline the intended approach.
4. **Implement** — make the change, scoped to the task at hand.
5. **Validate** — run lint/build/dev checks relevant to the change.
6. **Review** — check the diff before considering the task done.
7. **Update documentation** — docs/TASKS.md / docs/CHANGELOG.md / docs/AI_WORK_LOG.md as described below.
8. **Commit** — only when explicitly requested by the user.

Before making large or structurally significant changes, explain the intended approach and
get confirmation rather than proceeding silently.

After completing a task:
- Update [TASKS.md](docs/TASKS.md) with the task's status.
- Update [CHANGELOG.md](docs/CHANGELOG.md) when the change is user-facing or milestone-worthy.
- Update [AI_WORK_LOG.md](docs/AI_WORK_LOG.md) with what was done.
- Report: files changed, validation performed, and any decisions or issues encountered.

## Git Rules

- Keep commits small and logical — one meaningful feature/task per commit where practical.
- Never commit secrets or credentials.
- Never commit `.env` files containing secrets.
- Check `git diff` / `git status` before committing to confirm only intended files are staged.
- Do not rewrite git history (rebase, amend, force-push) unless explicitly requested.
- Do not commit changes unless explicitly requested.
- Do not push to GitHub unless explicitly requested. This repository's GitHub remote is
  **public** — treat anything pushed as publicly visible immediately.

## Code Quality

- Run `npm run lint` after any meaningful implementation change.
- Run `npm run build` before considering a milestone/phase complete.
- Fix errors rather than working around or ignoring them.
- Avoid suppressing TypeScript or ESLint errors (`@ts-ignore`, `eslint-disable`) without a
  clearly documented, valid reason.

## Known Framework Behavior

Next.js 16's CLI automatically writes/maintains an `AGENTS.md` file (and would recreate a
`CLAUDE.md` if this file didn't already exist) whenever `next dev` or `next build` detects it
is running under an AI coding agent. This is expected, harmless framework behavior — leave
`AGENTS.md` in place; its presence is what prevents Next.js from overwriting this file.
