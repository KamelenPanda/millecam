"use client";

import { type ReactNode } from "react";
import { useRevealOnce, motion } from "@/lib/motion";
import LedgerLine from "./LedgerLine";
import StatusNode from "./StatusNode";

type Stap = {
  nummer: string;
  naam: string;
  tekst: string;
  illustratie?: ReactNode;
};

/** Vertical process timeline: a Ledger line draws top-to-bottom per segment
 * (DRAW) as each step reveals and its node confirms (CONFIRM). */
export default function ScrollTimelineVertical({ stappen }: { stappen: Stap[] }) {
  const { ref, visible, reduced } = useRevealOnce<HTMLDivElement>(0.15);

  return (
    <div ref={ref} className="space-y-6">
      {stappen.map((s, i) => (
        <div
          key={s.naam}
          className="flex gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : `translateY(${motion.distance.reveal}px)`,
            transition: reduced
              ? "none"
              : `opacity ${motion.duration.standard}ms ${motion.ease}, transform ${motion.duration.standard}ms ${motion.ease}`,
            transitionDelay: visible && !reduced ? `${i * motion.stagger}ms` : "0ms",
          }}
        >
          <div className="flex flex-col items-center">
            <StatusNode index={s.nummer} confirmed={visible} delayMs={i * motion.stagger} />
            {i < stappen.length - 1 && (
              <LedgerLine
                direction="vertical"
                className="mt-2 w-px flex-1"
                delayMs={i * motion.stagger + 150}
              />
            )}
          </div>
          <div className="flex flex-1 flex-wrap items-center justify-between gap-4 border-l-2 border-terracotta bg-[#FBF9F4] py-7 pl-6 pr-5 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">{s.naam}</h2>
              <p className="mt-3 max-w-xl text-ink/70">{s.tekst}</p>
            </div>
            {s.illustratie}
          </div>
        </div>
      ))}
    </div>
  );
}
