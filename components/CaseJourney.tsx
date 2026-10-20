"use client";

import { useRevealOnce, motion } from "@/lib/motion";
import LedgerLine from "./LedgerLine";
import StatusNode from "./StatusNode";

const NL_STAGES = ["Situatie", "Uitdaging", "Aanpak", "Resultaat"];

/**
 * Compact horizontal journey strip for a case card: the same DRAW (line)
 * and CONFIRM (node) primitives as the process timelines, sized down and
 * using the case's own already-published fields as milestones — no
 * invented framework-specific taxonomy, so it fits every case regardless
 * of which framework it's about.
 */
export default function CaseJourney({ stages = NL_STAGES }: { stages?: string[] }) {
  const { ref, visible } = useRevealOnce<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="flex items-start" aria-hidden="true">
      {stages.map((label, i) => (
        <div key={label} className={`flex items-center ${i < stages.length - 1 ? "flex-1" : ""}`}>
          <div className="flex flex-col items-center gap-2">
            <StatusNode index={i + 1} confirmed={visible} delayMs={i * motion.stagger} size="sm" />
            <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-muted">
              {label}
            </span>
          </div>
          {i < stages.length - 1 && (
            <LedgerLine
              direction="horizontal"
              className="mx-2 h-px flex-1"
              style={{ marginTop: "-18px" }}
              delayMs={i * motion.stagger + 100}
            />
          )}
        </div>
      ))}
    </div>
  );
}
