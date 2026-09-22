"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#1d1d1f] p-1 text-muted-gray ${className}`}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full text-muted-gray">
          <Moon className="h-3.5 w-3.5" />
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full text-muted-gray/50">
          <Sun className="h-3.5 w-3.5" />
        </span>
      </div>
    );
  }

  const isLight = theme === "light";

  return (
    <div
      role="group"
      aria-label="Theme switcher"
      className={`relative inline-flex items-center gap-1 rounded-full p-1 transition-all duration-300 ${
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
        aria-label="Switch to light mode"
        title="Light Mode"
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${
          isLight
            ? "bg-white text-[#e9852a] shadow-xs"
            : "text-[#86868b] hover:text-white hover:bg-white/10"
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
      </button>

      {/* Dark Option */}
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={!isLight}
        aria-label="Switch to dark mode"
        title="Dark Mode"
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${
          !isLight
            ? "bg-black text-bright-blue shadow-xs"
            : "text-[#6e6e73] hover:text-black hover:bg-black/10"
        }`}
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
