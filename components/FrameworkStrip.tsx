"use client";

import Link from "next/link";
import { useRevealOnce, motion } from "@/lib/motion";
import LedgerLine from "./LedgerLine";

type FrameworkStripItem = { label: string; href: string };

/**
 * A connected Ledger strip linking the frameworks Millecam works with —
 * desktop-only, draws once on reveal (no perpetual loop: the line has
 * already made its point once it's drawn). Plain dot nodes, not StatusNode,
 * since these are parallel labels rather than sequential steps.
 */
export default function FrameworkStrip({ items }: { items: FrameworkStripItem[] }) {
  const { ref, visible, reduced } = useRevealOnce<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="hidden items-center md:flex">
      {items.map((item, i) => (
        <div key={item.href} className={`flex items-center ${i < items.length - 1 ? "flex-1" : ""}`}>
          <Link
            href={item.href}
            className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-ink transition-colors hover:text-terracotta"
            style={{
              opacity: visible ? 1 : 0,
              transition: reduced ? "none" : `opacity ${motion.duration.standard}ms ${motion.ease} ${i * motion.stagger}ms`,
            }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
            {item.label}
          </Link>
          {i < items.length - 1 && (
            <LedgerLine direction="horizontal" className="mx-3 h-px flex-1" delayMs={i * motion.stagger + 100} />
          )}
        </div>
      ))}
    </div>
  );
}
