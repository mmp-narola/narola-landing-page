import { Container } from "@/components/ui/Container";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";
import {
  Boxes,
  RefreshCw,
  Zap,
  Building2,
  Code2,
  ServerCog,
} from "lucide-react";

const CAPABILITY_ICONS = [
  Boxes,
  RefreshCw,
  Zap,
  Building2,
  Code2,
  ServerCog,
];

export function CustomSoftwareOverview() {
  const { overview } = customSoftwareContent;

  return (
    <section id="overview" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-interactive-blue">
            {overview.badge}
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {overview.title}
          </h2>
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate sm:text-base">
            {overview.introParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div id="capabilities" className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {overview.capabilities.map((cap, index) => {
            const Icon = CAPABILITY_ICONS[index] || Code2;
            return (
              <div
                key={cap.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-interactive-blue/30 hover:shadow-xl hover:shadow-interactive-blue/5"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-interactive-blue/10 text-interactive-blue transition-colors group-hover:bg-interactive-blue group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-ink transition-colors group-hover:text-interactive-blue">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {cap.description}
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="mt-6 border-t border-slate/10 pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.features.map((feat) => (
                      <span
                        key={feat}
                        className="rounded-lg bg-surface-muted px-2.5 py-1 text-[11px] font-medium text-ink"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
