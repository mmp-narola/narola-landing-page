"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

function SunIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#1d1d1f] p-1 text-xs text-muted-gray ${className}`}>
        <span className="flex items-center gap-1.5 px-3 py-1.5 font-medium">
          <MoonIcon className="h-3.5 w-3.5" />
          <span>Dark</span>
        </span>
      </div>
    );
  }

  const isLight = theme === "light";

  return (
    <div
      role="group"
      aria-label="Theme mode switcher"
      className={`relative inline-flex items-center rounded-full p-1 transition-all duration-300 ${
        isLight
          ? "border border-black/10 bg-black/5 shadow-xs"
          : "border border-white/10 bg-[#1d1d1f] shadow-inner"
      } ${className}`}
    >
      {/* Light Option */}
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={isLight}
        className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
          isLight
            ? "bg-white text-black shadow-sm"
            : "text-[#86868b] hover:text-white"
        }`}
      >
        <SunIcon className={`h-3.5 w-3.5 ${isLight ? "text-[#e9852a]" : ""}`} />
        <span>Light</span>
      </button>

      {/* Dark Option */}
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={!isLight}
        className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
          !isLight
            ? "bg-black text-white shadow-sm"
            : "text-[#515154] hover:text-black"
        }`}
      >
        <MoonIcon className={`h-3.5 w-3.5 ${!isLight ? "text-bright-blue" : ""}`} />
        <span>Dark</span>
      </button>
    </div>
  );
}
