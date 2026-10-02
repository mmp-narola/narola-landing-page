import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/siteConfig";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { aiAgentsContent } from "@/content/aiAgents";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "AI Agents | Autonomous Enterprise Workflows | Narola Infotech",
  description:
    "Deploy autonomous AI agents to handle complex workflows, interact with your business software, and scale your operations without scaling costs.",
  openGraph: {
    title: "AI Agents | Autonomous Enterprise Workflows",
    description:
      "Deploy autonomous AI agents to handle complex workflows, interact with your business software, and scale your operations.",
    url: "/ai-agents",
    siteName: "Narola Infotech",
    type: "website",
  },
  alternates: {
    canonical: "/ai-agents",
  },
};

export default function AiAgentsPage() {
  // Structured JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/ai-agents`,
        url: `${siteConfig.url}/ai-agents`,
        name: "AI Agents | Autonomous Enterprise Workflows",
        description:
          "Deploy autonomous AI agents to handle complex workflows, interact with your business software, and scale your operations without scaling costs.",
      },
      {
        "@type": "FAQPage",
        mainEntity: aiAgentsContent.faqs.map((faq) => ({
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
        <ServiceHeroSection
          eyebrow={aiAgentsContent.hero.eyebrow}
          title={aiAgentsContent.hero.title}
          subtitle={aiAgentsContent.hero.subtitle}
          ctaText={aiAgentsContent.hero.cta}
          ctaHref={aiAgentsContent.hero.ctaHref}
          dotColor="bg-[#0e5fd9]"
        // theme="dark"
        />

        {/* Reusable Sections we just made */}
        <ProblemSolutionSection
          title={aiAgentsContent.problemSolution.title}
          subtitle={aiAgentsContent.problemSolution.subtitle}
          problemText={aiAgentsContent.problemSolution.problemText}
          solutionText={aiAgentsContent.problemSolution.solutionText}
        />
        <CapabilitiesSection
          title="CAPABILITIES"
          items={aiAgentsContent.capabilities}
        />
      </main>

      <Footer />
    </>
  );
}
