import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  /** Set false for buttons that shouldn't carry the trailing arrow, e.g. a
   * label that already ends in its own punctuation or icon. */
  arrow?: boolean;
  className?: string;
};

/** Brand rule: at most one primary (terracotta) CTA per screen. Use "secondary" for anything else. */
export default function Button({ href, children, variant = "primary", arrow = true, className = "" }: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium " +
    "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(33,29,24,0.18)] active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-terracotta-deep text-paper hover:bg-terracotta-darker"
      : "bg-ink text-paper hover:bg-ink/90";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {arrow && (
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </Link>
  );
}
