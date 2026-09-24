"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { MegaMenuPanel } from "@/components/layout/MegaMenu";
import { navItems } from "@/content/navigation";
import { siteConfig } from "@/content/siteConfig";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>("ai-automation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveMenu(null);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (itemId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(itemId);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const getResolvedHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  const activeMegaMenuConfig = navItems.find(
    (item) => item.id === activeMenu && item.megaMenu
  )?.megaMenu;

  return (
    <header
      className={`sticky top-0 z-50 h-12 transition-all duration-300 md:h-16 ${isScrolled
        ? "border-b border-black/[0.08] bg-white/95 shadow-sm backdrop-blur-xl"
        : "border-b border-transparent bg-white/90 backdrop-blur-md"
        }`}
      onMouseLeave={handleMouseLeave}
    >
      <Container className="relative flex h-full items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-90"
          onClick={() => setActiveMenu(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className="h-8 w-auto md:h-10"
          />
        </Link>

        {/* Right-aligned Navigation + CTA Button */}
        <div className="hidden md:flex md:items-center md:gap-7 lg:gap-9">
          <nav
            aria-label="Primary"
            className="flex items-center gap-6 lg:gap-8"
          >
            {navItems.map((item) => {
              const resolvedHref = getResolvedHref(item.href);
              const isCurrentHovered = activeMenu === item.id;
              const hasDropdown = Boolean(item.megaMenu || item.children);

              return (
                <div
                  key={item.id}
                  className="relative py-6"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  <Link
                    href={resolvedHref}
                    className={`relative inline-flex items-center text-sm font-semibold transition-colors duration-200 ${isCurrentHovered
                      ? "text-bright-blue font-bold"
                      : "text-[#48484a] hover:text-bright-blue"
                      }`}
                    onClick={() => setActiveMenu(null)}
                  >
                    <span>{item.label}</span>
                  </Link>

                  {/* Tooltip Caret Pointer */}
                  {isCurrentHovered && hasDropdown && (
                    <div className="absolute -bottom-1 left-1/2 z-[60] -translate-x-1/2 pointer-events-none">
                      <div className="relative">
                        <div className="h-0 w-0 border-x-[9px] border-b-[9px] border-x-transparent border-b-black/[0.12]" />
                        <div className="absolute top-[1.5px] left-0 h-0 w-0 border-x-[9px] border-b-[9px] border-x-transparent border-b-white" />
                      </div>
                    </div>
                  )}

                  {/* Company Dropdown positioned directly below Company */}
                  {item.id === "company" && isCurrentHovered && item.children && (
                    <div
                      className="absolute right-0 top-full z-50 pt-1 animate-in fade-in slide-in-from-top-1 duration-150"
                      onMouseEnter={() => {
                        if (closeTimeoutRef.current) {
                          clearTimeout(closeTimeoutRef.current);
                          closeTimeoutRef.current = null;
                        }
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-96 rounded-2xl border border-black/[0.08] bg-white p-3 text-light-gray shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)]">
                        <div className="space-y-1">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="group flex flex-col rounded-xl px-3.5 py-2.5 transition-colors hover:bg-[#f5f5f7]"
                              onClick={() => setActiveMenu(null)}
                            >
                              <span className="text-sm font-semibold text-light-gray group-hover:text-bright-blue transition-colors">
                                {subItem.label}
                              </span>
                              {subItem.description && (
                                <span className="mt-0.5 text-xs text-subtle-gray">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Contact Button */}
          <Link
            href="#footer"
            className="inline-flex items-center justify-center rounded-lg border-2 border-bright-blue bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-bright-blue transition-all duration-200 hover:bg-bright-blue hover:text-white shadow-2xs active:scale-95"
            onClick={() => setActiveMenu(null)}
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-light-gray transition-colors hover:bg-black/5 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {/* Desktop Mega Menu Dropdown Container (AI, eCommerce, Product Engineering) */}
      {activeMegaMenuConfig && (
        <div
          className="absolute left-0 right-0 top-full pt-1 z-50 flex justify-center px-4 animate-in fade-in slide-in-from-top-1 duration-150"
          onMouseEnter={() => {
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenuPanel
            menu={activeMegaMenuConfig}
            onNavigate={() => setActiveMenu(null)}
          />
        </div>
      )}

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="max-h-[85vh] overflow-y-auto border-t border-black/[0.08] bg-white shadow-2xl backdrop-blur-2xl md:hidden"
        >
          <Container className="flex flex-col gap-2 py-5">
            {navItems.map((item) => {
              const isExpanded = mobileExpandedSection === item.id;

              if (item.megaMenu) {
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-black/[0.06] bg-[#f9fafb] overflow-hidden"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3.5 text-sm font-bold text-light-gray transition-colors"
                      onClick={() =>
                        setMobileExpandedSection(isExpanded ? null : item.id)
                      }
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-4 w-4 text-ink-secondary transition-transform duration-200 ${isExpanded ? "rotate-180 text-bright-blue" : ""
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

                    {isExpanded && (
                      <div className="space-y-4 border-t border-black/[0.06] bg-white px-4 py-4">
                        {item.megaMenu.columns.map((col, colIdx) => (
                          <div key={col.heading || `col-${colIdx}`} className="space-y-3">
                            {col.groups ? (
                              col.groups.map((group) => (
                                <div key={group.heading} className="space-y-2">
                                  <h5 className="text-xs font-bold uppercase tracking-wider text-bright-blue">
                                    {group.heading}
                                  </h5>
                                  <div className="grid grid-cols-1 gap-1.5 pl-2 border-l border-black/[0.06]">
                                    {group.links.map((link) => (
                                      <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-xs text-subtle-gray hover:text-bright-blue py-1 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="space-y-2">
                                <h5 className="text-xs font-bold uppercase tracking-wider text-bright-blue">
                                  {col.heading}
                                </h5>
                                <div className="grid grid-cols-1 gap-1.5 pl-2 border-l border-black/[0.06]">
                                  {col.links?.map((link) => (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      className="text-xs text-subtle-gray hover:text-bright-blue py-1 transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.children) {
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-black/[0.06] bg-[#f9fafb] overflow-hidden"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3.5 text-sm font-bold text-light-gray transition-colors"
                      onClick={() =>
                        setMobileExpandedSection(isExpanded ? null : item.id)
                      }
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-4 w-4 text-ink-secondary transition-transform duration-200 ${isExpanded ? "rotate-180 text-bright-blue" : ""
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

                    {isExpanded && (
                      <div className="space-y-1.5 border-t border-black/[0.06] bg-white px-4 py-3">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-1.5 text-xs font-medium text-subtle-gray hover:text-bright-blue transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={getResolvedHref(item.href)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-light-gray hover:bg-[#f5f5f7] hover:text-bright-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-4 pt-2">
              <Link
                href="#footer"
                className="flex w-full items-center justify-center rounded-2xl bg-bright-blue py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-interactive-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
