import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyDetailView } from "@/components/case-studies/CaseStudyDetailView";
import {
  getCaseStudies,
  getCaseStudyBySlug,
  getRelatedCaseStudies,
} from "@/lib/caseStudies";
import { caseStudies as staticCaseStudies } from "@/content/caseStudies";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Allow dynamic on-demand rendering for case studies added to MongoDB after build
export const dynamicParams = true;

// Revalidate case study detail pages every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
  const dbStudies = await getCaseStudies();
  const allStudies = [...dbStudies, ...staticCaseStudies];

  const uniqueSlugs = Array.from(
    new Set(allStudies.map((cs) => cs.slug).filter(Boolean))
  );

  return uniqueSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Narola Infotech",
    };
  }

  return {
    title: `${caseStudy.title} Case Study | Narola Infotech`,
    description: caseStudy.summary,
    openGraph: {
      title: `${caseStudy.title} Case Study | Narola Infotech`,
      description: caseStudy.summary,
      images: caseStudy.thumbnailUrl ? [caseStudy.thumbnailUrl] : [],
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const related = await getRelatedCaseStudies(slug, 3);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <CaseStudyDetailView
          caseStudy={caseStudy}
          relatedCaseStudies={related}
        />
      </main>
      <Footer />
    </div>
  );
}
