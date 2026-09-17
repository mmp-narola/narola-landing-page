/**
 * Site-wide configuration. `url` is a placeholder until the production subdomain is
 * decided (see TASKS.md T023/T024) — override it via NEXT_PUBLIC_SITE_URL when known.
 */
export const siteConfig = {
  name: "Narola Infotech",
  logo: {
    src: "/images/logo/narola-infotech-logo.svg",
    alt: "Narola Infotech logo",
    width: 173,
    height: 50,
  },
  description:
    "Narola Infotech provides custom software development, product engineering, and staff " +
    "augmentation for businesses across ecommerce, fintech, healthcare, and more.",
  tagline: "Digitalizing Businesses Globally for Startups, SMEs & Enterprises Since 2005",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  primaryCta: {
    label: "Consult Narola",
    // Points at the footer (office/location info) since this project has no dedicated
    // contact page or form yet. The actual destination (mailto, an embedded form, or an
    // external link) is an open decision — see AI_WORK_LOG.md's T005 entry. Whichever
    // section this ultimately targets must expose a matching `id`.
    href: "#footer",
  },
} as const;
