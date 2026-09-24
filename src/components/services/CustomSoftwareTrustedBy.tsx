import { Container } from "@/components/ui/Container";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";

export function CustomSoftwareTrustedBy() {
  const { trustedClients } = customSoftwareContent;

  return (
    <section className="border-t border-slate/10 bg-surface-muted py-10 md:py-14">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate">
          Trusted by global enterprises and emerging startups
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {trustedClients.map((client) => (
            <span
              key={client.name}
              className="text-lg font-semibold tracking-wide text-slate transition-colors hover:text-ink"
            >
              {client.logoText}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
