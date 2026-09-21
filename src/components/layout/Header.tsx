"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/content/navigation";
import { siteConfig } from "@/content/siteConfig";

// Client Component: handles mobile menu, desktop dropdowns, sticky scroll state, and active route detection.
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change (adjust state during render, not in an effect)
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setIsMenuOpen(false);
    setIsServicesHovered(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getResolvedHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  const isItemActive = (href: string, itemChildren?: { href: string }[]) => {
    if (href === "/custom-software-development-company" || itemChildren?.length) {
      return (
        pathname.startsWith("/custom-software-development-company") ||
        pathname.startsWith("/services")
      );
    }
    if (href === "/case-studies") {
      return pathname.startsWith("/case-studies");
    }
    if (href === "/blogs") {
      return pathname.startsWith("/blogs");
    }
    if (href === "/" || href.startsWith("#")) {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 h-16 transition-all duration-300 md:h-20 ${isScrolled
        ? "border-b border-slate/10 bg-white/80 backdrop-blur-xl"
        : "border-b border-transparent bg-white"
        }`}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="shrink-0">
          {/* Plain <img>, not next/image: SVGs are blocked by Next's image optimizer
              unless next.config.ts opts in, and a vector logo gains nothing from raster
              optimization anyway. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className="h-8 w-auto md:h-9"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-7">
          {navItems.map((item) => {
            const resolvedHref = getResolvedHref(item.href);
            const active = isItemActive(item.href, item.children);

            if (item.children && item.children.length > 0) {
              return (
                <div
                  key={item.label}
                  className="relative py-4"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <Link
                    href={resolvedHref}
                    className={`group inline-flex items-center gap-1.5 text-button font-medium transition-colors after:absolute after:bottom-2 after:left-0 after:h-0.5 after:rounded-full after:bg-interactive-blue after:transition-all after:duration-200 hover:text-interactive-blue ${active
                      ? "text-interactive-blue after:w-full font-semibold"
                      : "text-ink after:w-0 hover:after:w-full"
                      }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`h-4 w-4 text-slate transition-transform duration-200 ${isServicesHovered ? "rotate-180 text-interactive-blue" : ""
                        }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full -mt-1 w-80 rounded-2xl border border-slate/10 bg-white p-2 shadow-xl shadow-slate/10 transition-all duration-200 ${isServicesHovered
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="py-1">
                      {item.children.map((subItem) => {
                        const isSubActive =
                          pathname === subItem.href ||
                          (subItem.href === "/custom-software-development-company" &&
                            pathname.startsWith("/custom-software-development-company"));

                        return (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`group flex items-start gap-2.5 rounded-xl px-3 py-2.5 transition-colors ${isSubActive
                              ? "bg-interactive-blue/5 text-interactive-blue"
                              : "text-ink hover:bg-surface-muted hover:text-interactive-blue"
                              }`}
                            onClick={() => setIsServicesHovered(false)}
                          >
                            <svg
                              className={`mt-1 h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 ${isSubActive
                                ? "text-interactive-blue"
                                : "text-slate/60 group-hover:text-interactive-blue"
                                }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div className="flex flex-col">
                              <span
                                className={`text-sm leading-tight font-medium ${isSubActive
                                  ? "font-semibold text-interactive-blue"
                                  : "text-ink group-hover:text-interactive-blue"
                                  }`}
                              >
                                {subItem.label}
                              </span>
                              {/* {subItem.description && (
                                <span className="mt-0.5 text-[11px] leading-snug text-slate">
                                  {subItem.description}
                                </span>
                              )} */}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={resolvedHref}
                className={`relative text-button font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-interactive-blue after:transition-all after:duration-200 hover:text-interactive-blue ${active
                  ? "text-interactive-blue after:w-full font-semibold"
                  : "text-ink after:w-0 hover:after:w-full"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-surface-muted md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="max-h-[85vh] overflow-y-auto border-t border-surface-muted bg-white shadow-lg md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const resolvedHref = getResolvedHref(item.href);
              const active = isItemActive(item.href, item.children);

              if (item.children && item.children.length > 0) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-button font-medium transition-colors hover:bg-surface-muted hover:text-interactive-blue ${active ? "bg-surface-muted text-interactive-blue font-semibold" : "text-ink"
                        }`}
                      onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-4 w-4 text-slate transition-transform duration-200 ${isServicesMobileOpen ? "rotate-180" : ""
                          }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {isServicesMobileOpen && (
                      <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-interactive-blue/20 pl-2">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-surface-muted hover:text-interactive-blue ${pathname === subItem.href
                              ? "font-semibold text-interactive-blue"
                              : "text-slate"
                              }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="text-interactive-blue text-xs">›</span>
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={resolvedHref}
                  className={`rounded-xl px-3 py-3 text-button font-medium transition-colors hover:bg-surface-muted hover:text-interactive-blue ${active ? "bg-surface-muted text-interactive-blue font-semibold" : "text-ink"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3">
              <Button
                href={siteConfig.primaryCta.href}
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {siteConfig.primaryCta.label}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

