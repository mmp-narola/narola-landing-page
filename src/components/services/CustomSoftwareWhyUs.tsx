import { Container } from "@/components/ui/Container";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";

export function CustomSoftwareWhyUs() {
  const { whyUs } = customSoftwareContent;

  return (
    <section id="why-us" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-interactive-blue">
            {whyUs.badge}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {whyUs.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
            {whyUs.description}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="relative flex flex-col justify-between rounded-3xl border border-slate/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-interactive-blue/30 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-interactive-blue/10 text-interactive-blue font-bold text-sm">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Verified
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-ink">
                  {reason.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
