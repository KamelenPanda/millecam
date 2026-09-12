import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/** Brand rule: at most one primary (prussian) CTA per screen. Use "secondary" for anything else. */
export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium " +
    "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(20,24,29,0.18)]";
  const styles =
    variant === "primary"
      ? "bg-prussian-deep text-paper hover:bg-prussian-darker"
      : "bg-ink text-paper hover:bg-ink/90";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
