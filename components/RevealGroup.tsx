"use client";

import { createElement, ReactNode } from "react";
import { useRevealOnce, motion } from "@/lib/motion";

type RevealGroupProps = {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  as?: "div" | "ul";
  itemAs?: "div" | "li";
  stagger?: number;
};

/**
 * Staggered version of Reveal, for a grid or list of items. `as`/`itemAs`
 * let a <ul>/<li> list use this without an extra non-semantic wrapper
 * breaking its markup.
 */
export default function RevealGroup({
  items,
  className = "",
  itemClassName = "",
  as = "div",
  itemAs = "div",
  stagger = motion.stagger,
}: RevealGroupProps) {
  const { ref, visible, reduced } = useRevealOnce<HTMLElement>(0.2);

  return createElement(
    as,
    { ref, className },
    items.map((item, i) =>
      createElement(
        itemAs,
        {
          key: i,
          className: itemClassName,
          style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : `translateY(${motion.distance.reveal}px)`,
            transition: reduced
              ? "none"
              : `opacity ${motion.duration.standard}ms ${motion.ease}, transform ${motion.duration.standard}ms ${motion.ease}`,
            transitionDelay: visible && !reduced ? `${i * stagger}ms` : "0ms",
          },
        },
        item
      )
    )
  );
}
