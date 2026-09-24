import { Container } from "@/components/ui/Container";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";

export function CustomSoftwareProcess() {
  const { process } = customSoftwareContent;

  return (
    <section id="process" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-interactive-blue">
            {process.badge}
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {process.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
            {process.subtitle}
          </p>
        </div>

        {/* Process Stages Timeline */}
        <div className="mt-16 space-y-6">
          {process.stages.map((stage) => (
            <div
              key={stage.step}
              className="relative flex flex-col gap-6 rounded-3xl border border-slate/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-interactive-blue/30 hover:shadow-lg md:flex-row md:items-center md:p-8"
            >
              {/* Step Number Badge */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-interactive-blue font-semibold text-white text-xl shadow-md shadow-interactive-blue/20">
                {stage.step}
              </div>

              {/* Stage Title & Description */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-ink sm:text-xl">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {stage.description}
                </p>
              </div>

              {/* Key Deliverables Pills */}
              <div className="border-t border-slate/10 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0 md:w-72 shrink-0">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate/80">
                  Key Deliverables:
                </span>
                <div className="mt-2 flex flex-col gap-1.5">
                  {stage.deliverables.map((del) => (
                    <div key={del} className="flex items-center gap-2 text-xs text-ink font-medium">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{del}</span>
                    </div>
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
