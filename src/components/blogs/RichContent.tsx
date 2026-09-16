import React from "react";
import type { BlogImage, BlogTable } from "@/content/blogs";

/**
 * Parses inline Markdown (links [text](url), bold **text**, code `code`, italic *text*) into React elements.
 */
export function RichText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  if (!text) return null;

  // Regex to match markdown links [label](url), bold **text**, inline code `code`, italic *text*
  const tokenRegex =
    /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;

  const parts = text.split(tokenRegex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Link: [label](url)
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          const isExternal =
            href.startsWith("http://") || href.startsWith("https://");
          return (
            <a
              key={index}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="font-medium text-interactive-blue underline decoration-interactive-blue/30 underline-offset-2 transition-colors hover:text-brand-blue hover:decoration-brand-blue"
            >
              {label}
            </a>
          );
        }

        // Bold: **text**
        const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
        if (boldMatch) {
          return (
            <strong key={index} className="font-semibold text-ink">
              {boldMatch[1]}
            </strong>
          );
        }

        // Code: `text`
        const codeMatch = part.match(/^`([^`]+)`$/);
        if (codeMatch) {
          return (
            <code
              key={index}
              className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-xs font-semibold text-brand-blue"
            >
              {codeMatch[1]}
            </code>
          );
        }

        // Italic: *text*
        const italicMatch = part.match(/^\*([^*]+)\*$/);
        if (italicMatch) {
          return (
            <em key={index} className="italic text-slate">
              {italicMatch[1]}
            </em>
          );
        }

        // Regular text
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}

/**
 * Renders a structured section image with responsive styling, optional caption, and zoom/border effect.
 */
export function SectionImage({
  image,
  className = "",
}: {
  image: BlogImage;
  className?: string;
}) {
  if (!image || !image.url) return null;

  return (
    <figure className={`my-6 overflow-hidden transition-all ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.url}
        alt={image.alt || "Section Image"}
        loading="lazy"
        className="w-full h-auto block"
      />
    </figure>
  );
}

/**
 * Renders a responsive comparison or data table for tech blogs.
 */
export function SectionTable({
  table,
  className = "",
}: {
  table: BlogTable;
  className?: string;
}) {
  if (!table || !table.headers || table.headers.length === 0) return null;

  return (
    <div className={`my-8 overflow-hidden rounded-2xl border border-slate/15 bg-white shadow-sm ${className}`}>
      {table.caption && (
        <div className="border-b border-slate/15 bg-surface-muted/60 px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink">
          {table.caption}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate/15 bg-surface-muted">
              {table.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-5 py-3.5 font-bold tracking-tight text-ink first:pl-6 last:pr-6"
                >
                  <RichText text={header} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate/10">
            {(table.rows || []).map((row, rIdx) => (
              <tr
                key={rIdx}
                className="transition-colors hover:bg-interactive-blue/5 even:bg-surface-muted/30"
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className="px-5 py-3.5 text-slate first:pl-6 first:font-medium first:text-ink last:pr-6 leading-relaxed"
                  >
                    <RichText text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
