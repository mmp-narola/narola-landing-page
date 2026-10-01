import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { ProcessSection } from "@/components/ui/ProcessSection";
// import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { productEngineeringContent } from "@/content/homeContent";

export function ProductEngineeringSection() {
  return (
    <section
      id={productEngineeringContent.sectionId}
      data-section-accent="orange"
      className="section-wrapper"
    >
      {/* <AmbientGlow position="top" height={420} color="rgba(233,133,42,0.12)" /> */}
      <Container className="relative">
        {/* Section Header */}
        <SectionHeader
          indexBadge="03 / 03"
          title={productEngineeringContent.title}
          subtitle={productEngineeringContent.subtitle}
          accent="orange"
        />

        {/* Feature Rows */}
        <div className="mx-auto max-w-5xl divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {productEngineeringContent.cards.map((card, index) => (
            <FeatureRow
              key={card.id}
              title={card.title}
              description={card.description}
              tags={card.tags}
              delay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Engineering process + case studies matching photo layout */}
        <ProcessSection
          header={productEngineeringContent.rightProcess.header}
          steps={productEngineeringContent.rightProcess.steps}
          caseStudies={productEngineeringContent.rightProcess.caseStudies}
          columns={4}
        />
      </Container>
    </section>
  );
}
