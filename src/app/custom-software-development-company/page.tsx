import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { CustomSoftwareHero } from "@/components/services/CustomSoftwareHero";
import { CustomSoftwareTrustedBy } from "@/components/services/CustomSoftwareTrustedBy";
import { CustomSoftwareSubnav } from "@/components/services/CustomSoftwareSubnav";
import { CustomSoftwareOverview } from "@/components/services/CustomSoftwareOverview";
import { CustomSoftwareTechStack } from "@/components/services/CustomSoftwareTechStack";
import { CustomSoftwareWhyUs } from "@/components/services/CustomSoftwareWhyUs";
import { CustomSoftwareServicesTabs } from "@/components/services/CustomSoftwareServicesTabs";
import { CustomSoftwareProcess } from "@/components/services/CustomSoftwareProcess";
import { CustomSoftwareEngagementModels } from "@/components/services/CustomSoftwareEngagementModels";
import { CustomSoftwareFaq } from "@/components/services/CustomSoftwareFaq";
import { CustomSoftwareCta } from "@/components/services/CustomSoftwareCta";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { getCaseStudies } from "@/lib/caseStudies";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";
import { siteConfig } from "@/content/siteConfig";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Custom Software Development Company USA | Hire Dedicated Developers",
  description:
    "Leading custom software development company in the USA specializing in tailored enterprise solutions, full-stack web applications, mobile apps, and dedicated developers.",
  openGraph: {
    title: "Custom Software Development Company USA | Narola Infotech",
    description:
      "Transform your business with tailored, scalable custom software solutions engineered by Narola Infotech's senior development teams.",
    url: "/custom-software-development-company",
    siteName: "Narola Infotech",
    type: "website",
  },
  alternates: {
    canonical: "/custom-software-development-company",
  },
};

export default async function CustomSoftwareDevelopmentPage() {
  const allCaseStudies = await getCaseStudies();
  const spotlightCaseStudies = allCaseStudies.slice(0, 3);

  // Structured JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/custom-software-development-company`,
        url: `${siteConfig.url}/custom-software-development-company`,
        name: "Custom Software Development Company USA | Hire Developers",
        description:
          "Leading custom software development company in USA specializing in tailored software solutions, web applications, and agile engineering.",
      },
      {
        "@type": "FAQPage",
        mainEntity: customSoftwareContent.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="min-h-screen">
        {/* 1. Hero Section */}
        <CustomSoftwareHero />

        {/* Trusted By: separated from the hero, lighter background for visual contrast */}
        <CustomSoftwareTrustedBy />

        {/* 2. Sticky Subnav */}
        <CustomSoftwareSubnav />

        {/* 3. Overview & Core Capabilities */}
        <CustomSoftwareOverview />

        {/* 4. Tech Stack Matrix */}
        <CustomSoftwareTechStack />

        {/* 5. Why Choose Narola Infotech */}
        <CustomSoftwareWhyUs />

        {/* 6. What Narola Can Do For You (Services Matrix) */}
        <CustomSoftwareServicesTabs />

        {/* 7. Engagement Models */}
        <CustomSoftwareEngagementModels />

        {/* 8. Agile Development Process */}
        <CustomSoftwareProcess />

        {/* 9. Case Studies Spotlight */}
        {spotlightCaseStudies.length > 0 && (
          <section className="border-t border-slate/10 bg-white py-16 md:py-24">
            <Container>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <span className="inline-block rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-interactive-blue">
                    Proven Client Success
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
                    Featured Software Case Studies
                  </h2>
                  <p className="mt-2 text-sm text-slate">
                    Explore real-world software solutions engineered for our global clients.
                  </p>
                </div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1 text-sm text-electric-blue hover:underline"
                >
                  <span>View All Case Studies</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {spotlightCaseStudies.map((study) => (
                  <CaseStudyCard key={study.slug} caseStudy={study} />
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* 10. Frequently Asked Questions */}
        <CustomSoftwareFaq />

        {/* 11. Consultation & Quote Form */}
        <CustomSoftwareCta />
      </main>

      <Footer />
    </>
  );
}
