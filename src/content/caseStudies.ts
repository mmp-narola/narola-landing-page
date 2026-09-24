// Deprecated: the static case-study data and its types moved to
// `src/types/caseStudy.ts`. Case-study data is now sourced exclusively from
// MongoDB via `src/lib/caseStudies.ts`. This file is intentionally left as a
// type re-export only, kept for one release cycle in case anything external
// still imports from the old path; nothing in this codebase does.
export type {
  CaseStudy,
  CaseStudyMetric,
  CaseStudySection,
  CaseStudySectionKind,
  CaseStudyStep,
  CaseStudyTestimonial,
  CaseStudyScreenshotSet,
  CaseStudySectionContent,
} from "@/types/caseStudy";
