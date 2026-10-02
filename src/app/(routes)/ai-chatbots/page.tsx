import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/siteConfig";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { aiChatbotsContent } from "@/content/aiChatbots";
import { Container } from "@/components/ui/Container";
import { CaseStudyMetricsGrid } from "@/components/case-studies/CaseStudyMetricsGrid";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "AI Chatbots | Customer Support Automation | Narola Infotech",
  description:
    "Deploy an AI-powered chatbot that guides shoppers from curiosity to checkout — answering product queries, handling returns, and recovering abandoned carts, around the clock.",
  openGraph: {
    title: "AI Chatbots | Customer Support Automation",
    description:
      "Deploy an AI-powered chatbot that guides shoppers from curiosity to checkout — answering product queries, handling returns, and recovering abandoned carts.",
    url: "/ai-chatbots",
    siteName: "Narola Infotech",
    type: "website",
  },
  alternates: {
    canonical: "/ai-chatbots",
  },
};

export default function AiChatbotsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/ai-chatbots`,
        url: `${siteConfig.url}/ai-chatbots`,
        name: "AI Chatbots | Customer Support Automation",
        description:
          "Deploy an AI-powered chatbot that guides shoppers from curiosity to checkout — answering product queries, handling returns, and recovering abandoned carts, around the clock.",
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
          eyebrow={aiChatbotsContent.hero.eyebrow}
          title={aiChatbotsContent.hero.title}
          subtitle={aiChatbotsContent.hero.subtitle}
          ctaText={aiChatbotsContent.hero.cta}
          ctaHref={aiChatbotsContent.hero.ctaHref}
          metrics={aiChatbotsContent.hero.metrics}
          dotColor="bg-[#0e5fd9]"
          theme="light"
        />

        <ProblemSolutionSection
          title={aiChatbotsContent.problemSolution.eyebrow}
          subtitle={aiChatbotsContent.problemSolution.title}
          problemText={aiChatbotsContent.problemSolution.problemText}
          solutionText={aiChatbotsContent.problemSolution.solutionText}
          theme="muted"
          visual={
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0d1627] shadow-xl border border-black/10">
              <div className="absolute top-0 left-0 w-full h-10 bg-[#162238] border-b border-white/5 flex items-center px-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="mx-auto flex items-center gap-2">
                  <span className="text-white/50 text-xs font-medium tracking-widest uppercase">NAROLA AI CHATBOT — LIVE</span>
                  <span className="flex items-center gap-1.5 bg-[#1c2e4a] px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="text-green-500 text-[10px] font-bold uppercase tracking-wider">Active</span>
                  </span>
                </div>
              </div>
              <div className="p-6 pt-16 flex flex-col gap-4 h-full">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-bright-blue flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-1">AI</div>
                  <div className="self-start max-w-[80%] bg-[#1a4a8d] rounded-2xl rounded-tl-sm p-4 text-sm md:text-base text-white">
                    Hi! I can help you with orders, returns, or finding the right product. What do you need today?
                  </div>
                </div>

                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-[#2a364a] flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-1">U</div>
                  <div className="self-end max-w-[80%] bg-[#0e5fd9] rounded-2xl rounded-tr-sm p-4 text-sm md:text-base text-white">
                    I placed an order 3 days ago but haven't received a shipping update.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-bright-blue flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-1">AI</div>
                  <div className="self-start max-w-[80%] bg-[#1a4a8d] rounded-2xl rounded-tl-sm p-4 text-sm md:text-base text-white">
                    I've pulled up your order #48291. It's packed and dispatched — expected delivery is tomorrow by 6 PM. Want me to send tracking details to your email?
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <CapabilitiesSection
          title="CAPABILITIES"
          items={aiChatbotsContent.capabilities}
        />

        <UseCasesSection
          eyebrow={aiChatbotsContent.industryUses.eyebrow}
          title={aiChatbotsContent.industryUses.title}
          items={aiChatbotsContent.industryUses.items}
        />

        <FaqSection
          // eyebrow="FAQ"
          title="Frequently Asked Questions"
          faqs={aiChatbotsContent.faqs}
          // variant="boxed"
          className="bg-white py-16 md:py-24"
        />

        {/* CTA Section matching Image 2 */}
        <section className="bg-[#f2f7ff] py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#d2e3fc] text-xs font-semibold text-bright-blue uppercase tracking-wider mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-bright-blue"></span>
                {aiChatbotsContent.cta.eyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-4 max-w-3xl leading-tight text-balance">
                Ready to turn every conversation into a <span className="text-bright-blue">closed deal?</span>
              </h2>
              <p className="text-base md:text-lg text-slate max-w-3xl leading-relaxed mb-10 text-balance">
                {aiChatbotsContent.cta.subtitle}
              </p>

              <div className="w-full max-w-xl mx-auto">
                <CaseStudyMetricsGrid
                  metrics={aiChatbotsContent.cta.metrics}
                  layout="grid"
                  columns={4}
                  className="mb-10"
                  theme="light"
                  size="small"
                />
              </div>

              <a href={aiChatbotsContent.cta.buttonHref} className="inline-flex items-center justify-center rounded-lg bg-bright-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-bright-blue/90 shadow-sm border border-transparent hover:shadow-md">
                {aiChatbotsContent.cta.buttonText} <span className="ml-2">→</span>
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
