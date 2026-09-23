import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { ProcessSection } from "@/components/ui/ProcessSection";
import { aiAutomationContent } from "@/content/homeContent";

export function AiAutomationSection() {
  return (
    <section
      id={aiAutomationContent.sectionId}
      className="relative w-full overflow-hidden py-24 bg-light-gray text-light-gray md:py-32"
    >
      {/* <AmbientGlow position="top" height={420} color="rgba(0,132,255,0.14)" /> */}
      <Container className="relative">
        {/* Section Header */}
        <SectionHeader
          title={aiAutomationContent.title}
          subtitle={aiAutomationContent.subtitle}
        />

        {/* Feature Rows */}
        <div className="mx-auto max-w-5xl divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {aiAutomationContent.cards.map((card, index) => (
            <FeatureRow
              key={card.id}
              title={card.title}
              description={card.description}
              tags={card.tags}
              delay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Delivery process + case studies matching photo layout */}
        <ProcessSection
          header={aiAutomationContent.leftFlow.header}
          steps={aiAutomationContent.leftFlow.steps}
          caseStudies={aiAutomationContent.leftFlow.caseStudies}
          columns={4}
        />
      </Container>
    </section>
  );
}
