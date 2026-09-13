"use client";

import type { ReactNode } from "react";

type StatusNodeProps = {
  index: ReactNode;
  confirmed: boolean;
  /** Extra delay (ms) before the checkmark cross-fades in, on top of the
   * fixed hand-off delay — lets a node confirm shortly after its own row
   * has revealed, in a staggered group, instead of every node at once. */
  delayMs?: number;
  /** "md" (36px, default) for a process timeline; "sm" (28px) for a
   * compact inline strip such as a case's journey summary. */
  size?: "sm" | "md";
  className?: string;
};

const SIZE = {
  sm: { box: "h-7 w-7", text: "text-xs", check: "h-3 w-3" },
  md: { box: "h-9 w-9", text: "text-sm", check: "h-4 w-4" },
} as const;

/**
 * The CONFIRM motion primitive: a numbered circle that cross-fades into a
 * checkmark once its step is confirmed — evidence that a milestone is done,
 * not just present. Used on process timelines; the number never
 * disappears abruptly, it hands off to the check.
 */
export default function StatusNode({ index, confirmed, delayMs = 0, size = "md", className = "" }: StatusNodeProps) {
  const checkDelay = confirmed ? delayMs + 250 : 0;
  const s = SIZE[size];

  return (
    <span
      className={`relative flex ${s.box} shrink-0 items-center justify-center rounded-full bg-terracotta-deep font-serif ${s.text} font-bold text-paper ${className}`}
    >
      <span
        className="transition-opacity duration-300 ease-out"
        style={{ opacity: confirmed ? 0 : 1, transitionDelay: `${checkDelay}ms` }}
        aria-hidden={confirmed}
      >
        {index}
      </span>
      <svg
        viewBox="0 0 24 24"
        className={`absolute ${s.check} transition-opacity duration-300 ease-out`}
        style={{ opacity: confirmed ? 1 : 0, transitionDelay: `${checkDelay}ms` }}
        aria-hidden="true"
      >
        <path
          d="M5 13l4 4L19 7"
          fill="none"
          stroke="#F2EDE1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
