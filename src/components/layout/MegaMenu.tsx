import Link from "next/link";
import Image from "next/image";
import type { MegaMenuConfig } from "@/content/navigation";

function StarIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="#f59e0b"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function HalfStarIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="half-star-gradient">
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="60%" stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
      <path
        fill="url(#half-star-gradient)"
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
}

interface MegaMenuPanelProps {
  menu: MegaMenuConfig;
  onNavigate?: () => void;
}

export function MegaMenuPanel({ menu, onNavigate }: MegaMenuPanelProps) {
  const columnCount = menu.columns.length;

  const getGridColsClass = () => {
    if (columnCount === 5) return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";
    if (columnCount === 4) return "grid-cols-2 sm:grid-cols-4";
    if (columnCount === 3) return "grid-cols-1 sm:grid-cols-3";
    if (columnCount === 2) return "grid-cols-1 sm:grid-cols-2";
    return "grid-cols-2 sm:grid-cols-4";
  };

  return (
    <div className="w-full max-w-[1240px] rounded-[28px] border border-black/[0.08] bg-white p-7 text-light-gray shadow-[0_25px_80px_-15px_rgba(0,0,0,0.22)] lg:p-9">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_310px] xl:gap-10">
        {/* Left Links Area + Bottom Action Bar */}
        <div className="flex flex-col justify-between">
          {/* Columns Grid */}
          <div className={`grid gap-6 sm:gap-7 ${getGridColsClass()}`}>
            {menu.columns.map((column, colIdx) => (
              <div
                key={column.heading || `col-${colIdx}`}
                className="flex flex-col space-y-5"
              >
                {column.groups ? (
                  column.groups.map((group) => (
                    <div key={group.heading} className="flex flex-col">
                      <h4 className="text-sm font-bold text-light-gray sm:text-[15px]">
                        {group.heading}
                      </h4>
                      <ul className="mt-3.5 space-y-1">
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              onClick={onNavigate}
                              className="inline-block text-xs text-subtle-gray transition-colors duration-150 hover:text-bright-blue sm:text-xs font-normal"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-light-gray sm:text-[15px]">
                      {column.heading}
                    </h4>
                    <ul className="mt-3.5 space-y-1">
                      {column.links?.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={onNavigate}
                            className="inline-block text-xs text-subtle-gray transition-colors duration-150 hover:text-bright-blue sm:text-xs font-normal"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Action Bar */}
          {menu.showConsultationCta && (
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.06] pt-6">
              {/* Consultation CTA Button */}
              <Link
                href="#footer"
                onClick={onNavigate}
                className="inline-flex h-[54px] items-center justify-center rounded-2xl border-2 border-bright-blue bg-white px-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-bright-blue transition-all duration-200 hover:bg-bright-blue hover:text-white shadow-2xs active:scale-95"
              >
                GET FREE CONSULTATION
              </Link>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Clutch Badge */}
                <div className="flex h-[56px] min-w-[150px] flex-col justify-center rounded-2xl border border-black/[0.09] bg-white px-4 py-2 shadow-2xs">
                  <Image
                    src="/images/logo/clutch-co-logo.webp"
                    alt="Clutch"
                    width={120}
                    height={26}
                    className="h-[26px] w-auto object-contain object-left"
                  />
                  <div className="mt-0.5 flex items-center gap-1.5 leading-none">
                    <span className="text-xs font-bold text-light-gray">4.9</span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <StarIcon key={i} className="h-3.5 w-3.5" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Google Badge */}
                <div className="flex h-[56px] min-w-[150px] items-center gap-3 rounded-2xl border border-black/[0.09] bg-white px-4 py-2 shadow-2xs">
                  <Image
                    src="/images/logo/google-logo.webp"
                    alt="Google"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0 object-contain"
                  />
                  <div className="flex flex-col justify-center leading-none">
                    <span className="text-xs font-medium text-subtle-gray">Google</span>
                    <div className="mt-1 flex items-center gap-1.5 leading-none">
                      <span className="text-xs font-bold text-light-gray">4.3</span>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4].map((i) => (
                          <StarIcon key={i} className="h-3.5 w-3.5" />
                        ))}
                        <HalfStarIcon className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Featured Case Study Panel */}
        {menu.featured && (
          <div className="flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-[#fbfbfd] p-5">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-bright-blue" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-bright-blue">
                  {menu.featured.tagLabel}
                </span>
              </div>

              {/* Abstract Browser UI Mockup */}
              <div className="mt-3 overflow-hidden rounded-xl border border-black/[0.08] bg-white p-2.5 shadow-2xs">
                {/* Window Chrome Header */}
                <div className="flex items-center gap-1.5 border-b border-black/[0.05] pb-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  <div className="ml-2 h-1.5 w-16 rounded-full bg-black/5" />
                  <div className="ml-auto h-2 w-7 rounded-md bg-bright-blue/20" />
                </div>

                {/* Window Body Mockup */}
                <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                  <div className="flex h-10 items-center justify-center rounded-lg bg-blue-50/70 p-1">
                    <svg
                      className="h-4 w-4 text-bright-blue"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <div className="flex h-10 items-center justify-center rounded-lg bg-emerald-50/70 p-1">
                    <svg
                      className="h-4 w-4 text-emerald-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </div>
                  <div className="flex h-10 items-center justify-center rounded-lg bg-amber-50/70 p-1">
                    <svg
                      className="h-4 w-4 text-amber-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Mockup Bar */}
                <div className="mt-2 h-1.5 w-full rounded-full bg-bright-blue/20" />
              </div>

              {/* Title & Description */}
              <h4 className="mt-3.5 text-sm font-bold leading-snug text-light-gray">
                {menu.featured.title}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-subtle-gray">
                {menu.featured.description}
              </p>

              {/* Key Metrics */}
              <div className="mt-3.5 flex items-center justify-between border-t border-black/[0.06] pt-3">
                {menu.featured.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="text-sm font-bold text-light-gray">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-subtle-gray">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Read Case Study Link */}
            <Link
              href={menu.featured.href}
              onClick={onNavigate}
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-bright-blue transition-colors hover:underline"
            >
              <span>Read Case Study</span>
              <span aria-hidden="true" className="text-sm">
                ↗
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
