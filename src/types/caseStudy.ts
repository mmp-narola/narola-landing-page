export interface CaseStudyMetric {
  value: string;
  label: string;
}

/**
 * Extended, opt-in section model for the case-study detail template.
 *
 * `sections` is entirely optional. Existing case studies that only have the
 * flat legacy fields below (businessNeeds, challenges, proposedSolution,
 * objectivesAchieved, technologies) render fine without ever setting this —
 * the detail template derives an equivalent set of sections from those flat
 * fields when `sections` is absent. Only set `sections` when you want finer
 * control (custom ordering, a testimonial, screenshots, etc.), and only ever
 * include kinds/content that are real — never fabricate placeholder copy.
 */
export type CaseStudySectionKind =
  | "prose"
  | "steps"
  | "features"
  | "stats"
  | "screenshots"
  | "testimonial";

export interface CaseStudyStep {
  title: string;
  description?: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
}

export interface CaseStudyScreenshotSet {
  web?: string[];
  mobile?: string[];
}

export type CaseStudySectionContent =
  | string[]
  | CaseStudyStep[]
  | CaseStudyMetric[]
  | CaseStudyTestimonial
  | CaseStudyScreenshotSet;

export interface CaseStudySection {
  /** Anchor id, e.g. "the-challenge". Used for both the section and its nav link. */
  id: string;
  title: string;
  kind: CaseStudySectionKind;
  content: CaseStudySectionContent;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  clientName: string;
  country: string;
  industry: string;
  service: string;
  region: string;
  thumbnailUrl: string;
  bannerUrl: string;
  logoUrl?: string;
  galleryImages: string[];
  metrics: CaseStudyMetric[];
  summary: string;
  businessNeeds: string[];
  challenges: string[];
  proposedSolution: string[];
  objectivesAchieved: string[];
  technologies: string[];
  relatedSlugs: string[];
  /** Optional: free-form location string for the hero meta line (falls back to country). */
  location?: string;
  /** Optional: e.g. "8 weeks", "4 months" — only shown if supplied. */
  deliveryTime?: string;
  /** Optional: category pill tags shown under the breadcrumb (falls back to [industry, service]). */
  tags?: string[];
  /** Optional: mapped practice areas, e.g. ["ecommerce", "ai-automation", "product-engineering"] */
  practiceAreas?: string[];
  /** Optional: mapped service types, e.g. ["shopify", "b2b", "mobile", "web", "ai-commerce", "workflow"] */
  serviceTypes?: string[];
  /** Optional: mapped industries/categories, e.g. ["Healthcare", "SaaS", "Enterprise", "Retail"] */
  industryCategories?: string[];
  /** Optional: mapped regions, e.g. ["USA", "Europe", "North America"] */
  regions?: string[];
  /** Optional: opt-in ordered sections for the richer detail template (see above). */
  sections?: CaseStudySection[];
  /** Optional: client quote shown in a testimonial card. Only rendered if present. */
  testimonial?: CaseStudyTestimonial;
}
