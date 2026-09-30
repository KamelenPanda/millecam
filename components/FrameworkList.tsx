import { Fragment, CSSProperties } from "react";
import Link from "next/link";

type FrameworkItem = string | { label: string; href: string };

type FrameworkListProps = {
  items: FrameworkItem[];
  tone?: "ink" | "paper";
  className?: string;
  style?: CSSProperties;
};

/**
 * Renders a list of frameworks (NIS2, ISO 27001, ...) separated by a short
 * vertical rule instead of a middle dot ("·"). The rule echoes the wordmark's
 * own pillar motif (the stylised double "l" in "mi-ll-ecam") rather than
 * reaching for the generic "A · B · C" pattern — a small thing, but it ties
 * this specific piece of chrome back to the brand instead of a default.
 *
 * An item can be a plain string (no page to link to yet, e.g. EN/FR before
 * those frameworks have dedicated pages) or { label, href } to make it
 * clickable.
 */
export default function FrameworkList({ items, tone = "ink", className = "", style }: FrameworkListProps) {
  const textColor = tone === "ink" ? "text-ink/70" : "text-paper/70";
  const hoverColor = tone === "ink" ? "hover:text-ink" : "hover:text-paper";
  const ruleColor = tone === "ink" ? "bg-terracotta" : "bg-terracotta-light";

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`} style={style}>
      {items.map((item, i) => {
        const label = typeof item === "string" ? item : item.label;
        const href = typeof item === "string" ? undefined : item.href;
        return (
          <Fragment key={label}>
            {i > 0 && <span className={`h-3.5 w-[3px] ${ruleColor}`} aria-hidden="true" />}
            {href ? (
              <Link href={href} className={`text-sm font-medium ${textColor} ${hoverColor} hover:underline`}>
                {label}
              </Link>
            ) : (
              <span className={`text-sm font-medium ${textColor}`}>{label}</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
