"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { heroContent } from "@/content/homeContent";

interface Client {
  name: string;
  logo?: string;
  logoText?: string;
}

interface ClientsSectionProps {
  title?: string;
  clients?: Client[];
  moreClientsBadge?: string;
  className?: string;
  titleClassName?: string;
}

export function ClientsSection({
  title = heroContent.trustedBannerTitle,
  clients = heroContent.trustedClients,
  moreClientsBadge = heroContent.moreClientsBadge,
  className = "border-t border-black/[0.06] bg-surface-muted/50",
  titleClassName = "block text-xs lg:text-base font-semibold uppercase tracking-[0.14em] text-ink-secondary sm:text-sm mb-6",
}: ClientsSectionProps) {
  return (
    <section className={`py-10 md:py-14 ${className}`}>
      <Container>
        <Reveal>
          <div className="max-w-7xl mx-auto text-center">
            {title && (
              <h3 className={titleClassName}>
                {title}
              </h3>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex h-14 sm:h-15 items-center justify-center rounded-2xl border border-slate/10 bg-white px-5.5 sm:px-7 shadow-xs transition-all duration-300 hover:border-slate/25 hover:shadow-md hover:-translate-y-0.5 min-w-[120px]"
                >
                  {client.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className={`w-auto max-w-[110px] sm:max-w-[130px] object-contain ${client.name === "L&T"
                        ? "max-h-8.5 sm:max-h-9.5"
                        : client.name === "Biocon"
                          ? "max-h-8 sm:max-h-9"
                          : "max-h-7 sm:max-h-8"
                        }`}
                    />
                  ) : (
                    <span className="text-xl md:text-2xl font-black tracking-wider text-slate hover:text-ink transition-colors">
                      {client.logoText || client.name}
                    </span>
                  )}
                </div>
              ))}
              {moreClientsBadge && (
                <div className="flex h-14 sm:h-15 items-center justify-center rounded-2xl border border-dashed border-slate/25 bg-slate/5 px-5.5 sm:px-7 text-xs sm:text-sm font-semibold text-slate transition-all duration-300 hover:border-slate/40">
                  {moreClientsBadge}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
