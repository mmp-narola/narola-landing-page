import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { footerContent } from "@/content/footer";

function ClutchIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#192734" />
      <path
        d="M26.5 15.5C25 13.5 22.8 12.5 20 12.5C15 12.5 11.5 16 11.5 20.5C11.5 25 15 28.5 20 28.5C22.8 28.5 25 27.5 26.5 25.5"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="27" cy="14" r="2.2" fill="#FF3D2E" />
    </svg>
  );
}

function GoogleIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function StarIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="#f59e0b" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function UsFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 16" fill="none" aria-hidden="true">
      <rect width="24" height="16" rx="2" fill="#B22234" />
      <path
        d="M0 2.46h24M0 4.92h24M0 7.38h24M0 9.84h24M0 12.3h24M0 14.76h24"
        stroke="white"
        strokeWidth="1.23"
      />
      <rect width="10" height="8.6" rx="1" fill="#3C3B6E" />
      <circle cx="2.5" cy="2.2" r="0.6" fill="white" />
      <circle cx="5" cy="2.2" r="0.6" fill="white" />
      <circle cx="7.5" cy="2.2" r="0.6" fill="white" />
      <circle cx="3.75" cy="4.3" r="0.6" fill="white" />
      <circle cx="6.25" cy="4.3" r="0.6" fill="white" />
      <circle cx="2.5" cy="6.4" r="0.6" fill="white" />
      <circle cx="5" cy="6.4" r="0.6" fill="white" />
      <circle cx="7.5" cy="6.4" r="0.6" fill="white" />
    </svg>
  );
}

function IndiaFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 16" fill="none" aria-hidden="true">
      <rect width="24" height="16" rx="2" fill="#138808" />
      <rect width="24" height="10.66" rx="2" fill="white" />
      <rect width="24" height="5.33" rx="2" fill="#FF9933" />
      <circle cx="12" cy="8" r="2" stroke="#000080" strokeWidth="0.8" fill="none" />
      <circle cx="12" cy="8" r="0.5" fill="#000080" />
    </svg>
  );
}

function PinIcon({ className = "w-4 h-4 text-slate/60 shrink-0 mt-0.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-slate/10 bg-surface-muted py-14 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: CTA & Ratings (3 cols) */}
          <div className="flex flex-col lg:col-span-3">
            <h3 className="text-base font-semibold tracking-tight text-ink md:text-lg">
              {footerContent.cta.heading}
            </h3>

            <div className="mt-4">
              <Button href={footerContent.cta.buttonHref}>{footerContent.cta.buttonText}</Button>
            </div>

            {/* Ratings Cards */}
            <div className="mt-6 flex flex-col gap-3">
              {/* Clutch Rating */}
              <div className="flex w-full max-w-[210px] items-center gap-3 rounded-2xl border border-slate/10 bg-white p-3 shadow-md shadow-slate/5 transition-shadow hover:shadow-lg">
                <ClutchIcon className="h-8 w-8 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium text-slate">
                    {footerContent.ratings[0].label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-ink">
                      {footerContent.ratings[0].score}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: footerContent.ratings[0].stars }).map((_, i) => (
                        <StarIcon key={i} className="h-3 w-3" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Rating */}
              <div className="flex w-full max-w-[210px] items-center gap-3 rounded-2xl border border-slate/10 bg-white p-3 shadow-md shadow-slate/5 transition-shadow hover:shadow-lg">
                <GoogleIcon className="h-8 w-8 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium text-slate">
                    {footerContent.ratings[1].label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-ink">
                      {footerContent.ratings[1].score}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: footerContent.ratings[1].stars }).map((_, i) => (
                        <StarIcon key={i} className="h-3 w-3" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold tracking-tight text-ink">Services</h4>
            <ul className="mt-4 space-y-2">
              {footerContent.services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block text-sm text-slate transition-colors hover:text-interactive-blue"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Technologies (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold tracking-tight text-ink">Technologies</h4>
            <ul className="mt-4 space-y-2">
              {footerContent.technologies.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block text-sm text-slate transition-colors hover:text-interactive-blue"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold tracking-tight text-ink">Resources</h4>
            <ul className="mt-4 space-y-2">
              {footerContent.resources.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="block text-sm text-slate transition-colors hover:text-interactive-blue"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-sm text-slate transition-colors hover:text-interactive-blue"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Global Presence & Social Links (3 cols) */}
          <div className="flex flex-col justify-between lg:col-span-3">
            <div>
              <h4 className="text-base font-semibold tracking-tight text-ink">
                {footerContent.globalPresence.title}
              </h4>

              {/* US Offices */}
              <div className="mt-4 space-y-3.5">
                {footerContent.globalPresence.offices.map((office) => (
                  <div key={office.city} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-ink">
                      <UsFlag className="h-3 w-4 shrink-0 shadow-2xs" />
                      <span>{office.city}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-xs text-slate">
                      <PinIcon className="h-3.5 w-3.5 shrink-0 text-slate/50" />
                      <span className="leading-snug">{office.address}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Development Centers */}
              <h5 className="mt-6 text-base font-semibold tracking-tight text-ink">
                {footerContent.globalPresence.devCentersTitle}
              </h5>
              <div className="mt-3.5 space-y-3.5">
                {footerContent.globalPresence.devCenters.map((center) => (
                  <div key={center.city} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-ink">
                      <IndiaFlag className="h-3 w-4 shrink-0 shadow-2xs" />
                      <span>{center.city}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-xs text-slate">
                      <PinIcon className="h-3.5 w-3.5 shrink-0 text-slate/50" />
                      <span className="leading-snug">{center.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2.5">
              {footerContent.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate/30 text-white transition-colors hover:bg-interactive-blue"
                >
                  {social.platform === "LinkedIn" ? (
                    <LinkedInIcon className="h-3.5 w-3.5" />
                  ) : (
                    <InstagramIcon className="h-3.5 w-3.5" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar: Copyright */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate">
            © {new Date().getFullYear()} Narola Infotech. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
