import { customSoftwareContent } from "@/content/customSoftwareDevelopment";
import { ClientsSection } from "@/components/ui/ClientsSection";

export function CustomSoftwareTrustedBy() {
  const { trustedClients } = customSoftwareContent;

  return (
    <ClientsSection 
      title="Trusted by global enterprises and emerging startups" 
      clients={trustedClients} 
      className="bg-surface-muted py-10 md:py-14 border-t border-slate/10 overflow-hidden" 
    />
  );
}
