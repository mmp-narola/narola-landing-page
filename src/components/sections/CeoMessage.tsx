import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ceoMessageData } from "@/content/ceoMessage";

export function CeoMessage() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 py-20 text-white md:py-32">
      {/* Soft ambient glow, matching the dark-section treatment used elsewhere on the site. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-interactive-blue/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-accent-orange/10 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Leadership Note
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 text-lg font-semibold tracking-tight text-slate-300 md:text-xl">
              {ceoMessageData.heading.prefix}
              <span className="text-white">{ceoMessageData.heading.highlight}</span>
            </h2>
          </Reveal>

          {/* Large pull-quote typography — the message itself is the visual centerpiece */}
          <Reveal delay={160}>
            <p className="mt-6 text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl md:leading-[1.2]">
              &ldquo;{ceoMessageData.message}&rdquo;
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mx-auto mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-accent-orange to-interactive-blue" />

            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ceoMessageData.author.imageSrc}
                  alt={ceoMessageData.author.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base font-semibold text-white">{ceoMessageData.author.name}</p>
                <p className="text-sm font-medium tracking-wide text-slate-400 uppercase">
                  {ceoMessageData.author.title}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
