"use client";

import { createElement, ReactNode, useEffect, useRef, useState } from "react";

type RevealGroupProps = {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  as?: "div" | "ul";
  itemAs?: "div" | "li";
  stagger?: number;
};

/**
 * Staggered version of Reveal, for a grid or list of items — same
 * once-only IntersectionObserver pattern as ScrollTimeline/FrameworkGrid.
 * `as`/`itemAs` let a <ul>/<li> list use this without an extra
 * non-semantic wrapper breaking its markup.
 */
export default function RevealGroup({
  items,
  className = "",
  itemClassName = "",
  as = "div",
  itemAs = "div",
  stagger = 120,
}: RevealGroupProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    { ref, className },
    items.map((item, i) =>
      createElement(
        itemAs,
        {
          key: i,
          className: `transition-all duration-500 ease-out ${itemClassName}`,
          style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transitionDelay: visible ? `${i * stagger}ms` : "0ms",
          },
        },
        item
      )
    )
  );
}
