const getSiteUrl = (): string => {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://claude-narolainfotech.vercel.app");

  if (envUrl.startsWith("http://") || envUrl.startsWith("https://")) {
    return envUrl.replace(/\/$/, "");
  }
  return `https://${envUrl}`.replace(/\/$/, "");
};

/**
 * Site-wide configuration. `url` is resolved from NEXT_PUBLIC_SITE_URL or Vercel
 * environment variables, falling back to the deployment URL.
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
  tagline:
    "Digitalizing Businesses Globally for Startups, SMEs & Enterprises Since 2005",
  url: getSiteUrl(),
  primaryCta: {
    label: "Consult Narola",
    // Points at the footer (office/location info) since this project has no dedicated
    // contact page or form yet.
    href: "#footer",
  },
} as const;
