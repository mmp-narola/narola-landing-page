import { Container } from "@/components/ui/Container";
import { ceoMessageData } from "@/content/ceoMessage";

function QuoteIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

export function CeoMessage() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-muted py-18 md:py-24 lg:py-28">
      {/* Decorative soft ambient blurs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-accent-orange/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 lg:gap-14">
          {/* CEO Photo Container - Kept as broken image per user request, will render cleanly once image is placed */}
          <div className="flex justify-center md:col-span-5 md:justify-end lg:col-span-4">
            <div className="relative flex aspect-3/4 w-full max-w-[260px] items-center justify-center overflow-hidden rounded-3xl bg-white p-5 shadow-xl shadow-slate/10 ring-1 ring-slate/10 md:max-w-[320px]">
              {/* Plain <img> tag for straightforward image replacement */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ceoMessageData.author.imageSrc}
                alt={ceoMessageData.author.imageAlt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Message & Author Info */}
          <div className="relative flex flex-col justify-center md:col-span-7 lg:col-span-8">
            {/* Background watermark quote icon */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 -left-4 text-interactive-blue/5 md:-top-10"
            >
              <QuoteIcon className="h-24 w-24 md:h-32 md:w-32" />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate/15 bg-white px-3.5 py-1 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate">
                  Leadership Note
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink md:text-3xl lg:text-[34px]">
                {ceoMessageData.heading.prefix}
                <span className="bg-gradient-to-r from-accent-orange to-[#ff9436] bg-clip-text text-transparent font-extrabold">
                  {ceoMessageData.heading.highlight}
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
                &ldquo;{ceoMessageData.message}&rdquo;
              </p>

              {/* Accent divider line */}
              <div className="my-6 h-1 w-14 rounded-full bg-gradient-to-r from-accent-orange to-interactive-blue" />

              <div className="space-y-0.5">
                <p className="text-base font-medium text-slate md:text-lg">{ceoMessageData.author.name}</p>
                <p className="text-sm font-bold uppercase tracking-wider text-ink">
                  {ceoMessageData.author.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
