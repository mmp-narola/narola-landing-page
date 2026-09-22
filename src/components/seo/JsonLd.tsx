export interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Reusable JSON-LD Structured Data Component.
 * Injects structured schema markup for Search Engines (Google, Bing)
 * and AI Answer Engines (ChatGPT, Claude, Perplexity).
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
