import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

// Variant styles per VISUAL_DIRECTION.md §7/§8. Primary is a gradient between Interactive
// Blue and its darker hover shade — never Brand Blue, which fails WCAG AA contrast with
// white text (~3.65:1, see VISUAL_DIRECTION.md §2). Both gradient stops individually pass
// AA (~4.76:1 and higher), so the gradient introduces no contrast regression at any point
// across the button. Global `:focus-visible` styling (globals.css) already applies to this
// element; nothing here overrides it.
const VARIANT_STYLES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-interactive-blue to-[#005fb8] text-white shadow-md shadow-interactive-blue/20 hover:shadow-lg hover:shadow-interactive-blue/30 hover:-translate-y-0.5",
  secondary:
    "border border-interactive-blue text-interactive-blue hover:bg-interactive-blue/10",
};

// Plain `<a>`, not `next/link`: every href in this project is a same-page anchor
// (there are no other routes to navigate to in this single-page site), so Link's
// route-prefetching behavior would add nothing.
export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-button font-medium transition-all duration-200 ${VARIANT_STYLES[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
