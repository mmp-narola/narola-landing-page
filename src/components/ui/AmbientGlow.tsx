import { type CSSProperties } from "react";

export interface AmbientGlowProps {
  /** Vertical placement of the ellipse focus: top, bottom, or center */
  position?: "top" | "bottom" | "center";
  /** Radial gradient color with alpha, e.g. "rgba(0,132,255,0.14)" */
  color?: string;
  /** Height in pixels (number) or CSS height value (default: 420) */
  height?: number | string;
  /** Falloff spread percentage, e.g. "65%" (default: "65%") */
  spread?: string;
  /** Additional Tailwind class overrides */
  className?: string;
}

/**
 * Reusable ambient radial glow / ellipse backdrop component.
 * Provides a subtle Apple-style atmospheric backlight at the top, bottom,
 * or center of sections without boilerplate repetition.
 */
export function AmbientGlow({
  position = "top",
  color = "rgba(0,132,255,0.14)",
  height = 420,
  spread = "65%",
  className = "",
}: AmbientGlowProps) {
  const heightStyle = typeof height === "number" ? `${height}px` : height;
  const positionClass =
    position === "top"
      ? "top-0 inset-x-0"
      : position === "bottom"
      ? "bottom-0 inset-x-0"
      : "inset-0";

  const ellipseOrigin =
    position === "top"
      ? "ellipse at top"
      : position === "bottom"
      ? "ellipse at bottom"
      : "ellipse at center";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${positionClass} ${className}`}
      style={
        {
          height: heightStyle,
          backgroundImage: `radial-gradient(${ellipseOrigin}, ${color}, transparent ${spread})`,
        } as CSSProperties
      }
    />
  );
}
