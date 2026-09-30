"use client";

import type { CSSProperties } from "react";
import { useRevealOnce, motion } from "@/lib/motion";

type LedgerLineProps = {
  direction?: "horizontal" | "vertical";
  className?: string;
  delayMs?: number;
  style?: CSSProperties;
};

/**
 * The DRAW motion primitive: a thin Ledger-brand line that draws from one
 * end once scrolled into view, via scaleX/scaleY on a transform-origin
 * (never by animating width/height). Represents structure, process and
 * relationships — used for timeline connectors and section dividers.
 *
 * Precise and engineered on purpose: a single linear-ish ease, no bounce.
 */
export default function LedgerLine({ direction = "horizontal", className = "", delayMs = 0, style }: LedgerLineProps) {
  const { ref, visible, reduced } = useRevealOnce<HTMLDivElement>(0.2);
  const originClass = direction === "horizontal" ? "origin-left" : "origin-top";
  const scale = direction === "horizontal" ? "scaleX" : "scaleY";

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`${originClass} bg-line ${className}`}
      style={{
        ...style,
        transform: visible ? `${scale}(1)` : `${scale}(0)`,
        transition: reduced ? "none" : `transform ${motion.duration.slow}ms ${motion.ease} ${delayMs}ms`,
      }}
    />
  );
}
