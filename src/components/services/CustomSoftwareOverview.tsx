import { Container } from "@/components/ui/Container";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";

function getCapabilityIcon(index: number) {
  switch (index) {
    case 0:
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case 1:
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case 2:
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 3:
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 4:
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 5:
    default:
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7zM9 9h6m-6 4h4" />
        </svg>
      );
  }
}

export function CustomSoftwareOverview() {
  const { overview } = customSoftwareContent;

  return (
    <section id="overview" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-interactive-blue">
            {overview.badge}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
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
          {overview.capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-interactive-blue/30 hover:shadow-xl hover:shadow-interactive-blue/5"
            >
              <div>
                {/* Icon Badge */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-interactive-blue/10 text-interactive-blue transition-colors group-hover:bg-interactive-blue group-hover:text-white">
                  {getCapabilityIcon(index)}
                </div>

                <h3 className="mt-5 text-xl font-bold text-ink transition-colors group-hover:text-interactive-blue">
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
          ))}
        </div>
      </Container>
    </section>
  );
}
