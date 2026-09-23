import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { CoreDisciplinesIntro } from "@/components/sections/CoreDisciplinesIntro";
import { EcommerceSection } from "@/components/sections/EcommerceSection";
import { AiAutomationSection } from "@/components/sections/AiAutomationSection";
import { ProductEngineeringSection } from "@/components/sections/ProductEngineeringSection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/siteConfig";
import {
  getOrganizationSchema,
  getHomeServicesSchema,
  getHomeFaqSchema,
} from "@/lib/seo/structuredData";

export const metadata: Metadata = {
  title: "Agile Software Development Company USA | Top 1% Developers | Narola Infotech",
  description:
    "Partner with Narola Infotech for custom software development, AI & workflow automation, eCommerce engineering, and SaaS development. 1,500+ clients across 50+ countries since 2005.",
  keywords: [
    "custom software development company",
    "software engineering services",
    "AI automation company",
    "Shopify Plus expert partner",
    "SaaS product development",
    "dedicated developers USA",
    "enterprise software development",
    "Narola Infotech",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Agile Software Development Company USA | Narola Infotech",
    description:
      "Digitalizing businesses globally with custom software engineering, generative AI solutions, and high-performance eCommerce platforms since 2005.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Narola Infotech - Agile Software Development & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Software Development Company USA | Narola Infotech",
    description:
      "Custom software engineering, AI workflow automation, and enterprise eCommerce platforms. 1,500+ successful projects.",
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const organizationSchema = getOrganizationSchema();
  const servicesSchema = getHomeServicesSchema();
  const faqSchema = getHomeFaqSchema();

  return (
    <div className="flex min-h-screen flex-col bg-white text-light-gray selection:bg-[#0084ff] selection:text-white">
      {/* Structured Data for SEO & AEO (Google, ChatGPT, Claude, Perplexity) */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={servicesSchema} />
      <JsonLd data={faqSchema} />

      <Header />
      <main className="flex-1 flex flex-col bg-white space-y-2 md:space-y-4">
        {/* Hero Section with interactive AI Advisor & Stats & Trusted Clients */}
        <HeroSection />

        {/* Core Disciplines Overview Context */}
        <CoreDisciplinesIntro />

        {/* eCommerce Bento Grid Section */}
        <EcommerceSection />

        {/* AI & Automation Bento Grid Section */}
        <AiAutomationSection />

        {/* Product Engineering Bento Grid Section */}
        <ProductEngineeringSection />

        {/* Our Work / Portfolio Showcase Section */}
        <OurWorkSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
