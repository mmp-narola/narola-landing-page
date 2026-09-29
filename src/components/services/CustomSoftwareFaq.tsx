import { customSoftwareContent } from "@/content/customSoftwareDevelopment";
import { FaqSection } from "@/components/ui/FaqSection";

export function CustomSoftwareFaq() {
  const { faqs } = customSoftwareContent;

  return (
    <div id="faqs" className="scroll-mt-24">
      <FaqSection 
        title="Frequently Asked Questions"
        description="Everything you need to know about our custom software development processes, pricing models, and IP security."
        faqs={faqs}
        className="bg-surface-muted py-16 md:py-24"
      />
    </div>
  );
}
