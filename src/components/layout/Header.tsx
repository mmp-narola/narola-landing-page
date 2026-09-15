"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/content/navigation";
import { siteConfig } from "@/content/siteConfig";

// Client Component: handles mobile menu, sticky scroll state, and active route detection.
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const isItemActive = (href: string) => {
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
      className={`sticky top-0 z-50 h-16 transition-all duration-200 md:h-[72px] ${
        isScrolled
          ? "bg-white/85 shadow-sm backdrop-blur-md"
          : "bg-white"
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

        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => {
            const resolvedHref = getResolvedHref(item.href);
            const active = isItemActive(item.href);

            return (
              <Link
                key={item.href}
                href={resolvedHref}
                className={`relative text-button font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-interactive-blue after:transition-all after:duration-200 hover:text-interactive-blue ${
                  active
                    ? "text-interactive-blue after:w-full"
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

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-surface-muted bg-white shadow-lg md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const resolvedHref = getResolvedHref(item.href);
              const active = isItemActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={resolvedHref}
                  className={`rounded-xl px-3 py-3 text-button font-medium transition-colors hover:bg-surface-muted hover:text-interactive-blue ${
                    active ? "bg-surface-muted text-interactive-blue font-semibold" : "text-ink"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2">
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
