import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/siteConfig";
import {
  AiShoppingHero,
  AiShoppingProblemSolution,
  AiShoppingCapabilities,
  AiShoppingMetrics,
  AiShoppingUseCases,
  AiShoppingCaseStudies,
  AiShoppingFaq,
  AiShoppingCta
} from "@/components/services/AiShoppingAssistantComponents";
import { aiShoppingContent } from "@/content/aiShoppingAssistant";
import { getCaseStudies } from "@/lib/caseStudies";
import { ClientsSection } from "@/components/ui/ClientsSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "AI Shopping Assistant | Conversational Product Discovery | Narola Infotech",
  description:
    "Turn browsing into buying with our AI Shopping Assistant. Deliver personalized shopping journeys, guided discovery, and intelligent recommendations to boost e-commerce conversion.",
  openGraph: {
    title: "AI Shopping Assistant | Smarter Product Discovery",
    description:
      "Turn browsing into buying with an AI Shopping Assistant. Help shoppers discover, compare, and confidently buy the right products faster.",
    url: "/ai-shopping-assistant",
    siteName: "Narola Infotech",
    type: "website",
  },
  alternates: {
    canonical: "/ai-shopping-assistant",
  },
};

export default async function AiShoppingAssistantPage() {
  const allCaseStudies = await getCaseStudies();
  const ecommerceCaseStudies = allCaseStudies.filter(cs => cs.practiceAreas?.includes("ecommerce") || cs.serviceTypes?.includes("ecommerce")).slice(0, 3);

  // Structured JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/ai-shopping-assistant`,
        url: `${siteConfig.url}/ai-shopping-assistant`,
        name: "AI Shopping Assistant | Conversational Product Discovery",
        description:
          "Help shoppers find the right product faster with AI. Deliver personalized shopping journeys with conversational AI.",
      },
      {
        "@type": "FAQPage",
        mainEntity: aiShoppingContent.faqs.map((faq) => ({
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
        <AiShoppingHero />
        <AiShoppingProblemSolution />
        <AiShoppingCapabilities />
        <AiShoppingUseCases />
        <AiShoppingMetrics />
        <AiShoppingCaseStudies caseStudies={ecommerceCaseStudies} />
        <ClientsSection className="bg-white" moreClientsBadge="" />
        <AiShoppingFaq />
        <AiShoppingCta />
      </main>

      <Footer />
    </>
  );
}
