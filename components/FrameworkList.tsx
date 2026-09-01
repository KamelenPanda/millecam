import { Fragment } from "react";

type FrameworkListProps = {
  items: string[];
  tone?: "ink" | "paper";
  className?: string;
};

/**
 * Renders a list of frameworks (NIS2, ISO 27001, ...) separated by a short
 * vertical rule instead of a middle dot ("·"). The rule echoes the wordmark's
 * own pillar motif (the stylised double "l" in "mi-ll-ecam") rather than
 * reaching for the generic "A · B · C" pattern — a small thing, but it ties
 * this specific piece of chrome back to the brand instead of a default.
 */
export default function FrameworkList({ items, tone = "ink", className = "" }: FrameworkListProps) {
  const textColor = tone === "ink" ? "text-ink/70" : "text-paper/70";
  const ruleColor = tone === "ink" ? "bg-terracotta" : "bg-terracotta-light";

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && <span className={`h-3.5 w-[3px] ${ruleColor}`} aria-hidden="true" />}
          <span className={`text-sm font-medium ${textColor}`}>{item}</span>
        </Fragment>
      ))}
    </div>
  );
}
