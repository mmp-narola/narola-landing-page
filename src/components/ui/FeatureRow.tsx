import { Reveal } from "@/components/ui/Reveal";

export interface FeatureRowProps {
  title: string;
  description?: string;
  tags?: string[];
  delay?: number;
  children?: React.ReactNode;
}

export function FeatureRow({
  title,
  description,
  tags,
  delay = 100,
  children,
}: FeatureRowProps) {
  return (
    <Reveal delay={delay}>
      <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
        <div className="md:col-span-4 lg:col-span-4">
          <h3 className="text-xl font-semibold tracking-tight text-light-gray sm:text-2xl">
            {title}
          </h3>
        </div>
        <div className="md:col-span-8 lg:col-span-8">
          {description && (
            <p className="text-sm font-normal leading-relaxed text-subtle-gray sm:text-base">
              {description}
            </p>
          )}
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/[0.06] bg-white px-3.5 py-1.5 text-xs font-medium text-light-gray shadow-2xs transition-colors hover:bg-slate-50 sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </Reveal>
  );
}
