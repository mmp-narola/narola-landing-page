import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { CaseStudyListClient } from "@/components/case-studies/CaseStudyListClient";
import { getCaseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies & Client Success Stories",
  description:
    "Explore how Narola Infotech delivers transformative digital engineering, cloud, AI, and custom software solutions across global industries.",
  openGraph: {
    title: "Case Studies & Client Success Stories | Narola Infotech",
    description:
      "Explore how Narola Infotech delivers transformative digital engineering, cloud, AI, and custom software solutions across global industries.",
    url: "/case-studies",
    type: "website",
  },
  alternates: {
    canonical: "/case-studies",
  },
};

// Revalidate case studies list every 60 seconds from MongoDB
export const revalidate = 60;

export default async function CaseStudiesPage() {
  const allCaseStudies = await getCaseStudies();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface-muted via-white to-white py-12 md:py-16">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-full max-w-4xl rounded-full bg-interactive-blue/5 blur-3xl" />

          <Container className="relative">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs font-medium text-slate">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-1.5 transition-colors hover:text-interactive-blue"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <svg
                    className="h-3.5 w-3.5 text-slate/40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
                <li className="font-semibold text-ink" aria-current="page">
                  Case Studies
                </li>
              </ol>
            </nav>

            {/* Banner Content */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-interactive-blue/5 px-3.5 py-1 text-xs font-semibold text-interactive-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
                Proven Results & Client Impact
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-5xl md:leading-tight">
                Our Case Studies Reflect the Diverse Work Our Teams Deliver
              </h1>

              <p className="mt-4 text-base text-slate md:text-lg leading-relaxed">
                We have carefully curated some of our most impactful engineering projects. Explore real-world architectures, measurable business outcomes, and technological innovations across industries.
              </p>
            </div>
          </Container>
        </section>

        {/* Interactive Listing Section */}
        <section className="pb-16 pt-2 md:pb-24">
          <Container>
            <CaseStudyListClient initialCaseStudies={allCaseStudies} />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
