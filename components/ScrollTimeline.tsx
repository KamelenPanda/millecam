"use client";

import { useRevealOnce, motion } from "@/lib/motion";
import LedgerLine from "./LedgerLine";
import StatusNode from "./StatusNode";

type Stap = { naam: string; tekst: string };

/** Horizontal process timeline: a Ledger line draws left-to-right (DRAW)
 * while each step reveals and its node confirms (CONFIRM), in one stagger. */
export default function ScrollTimeline({ stappen }: { stappen: Stap[] }) {
  const { ref, visible, reduced } = useRevealOnce<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className="relative mt-10">
      <LedgerLine
        direction="horizontal"
        className="absolute top-5 hidden h-px md:block"
        style={{ left: "16.5%", right: "16.5%" }}
      />
      <div className="grid gap-8 md:grid-cols-3">
        {stappen.map((s, i) => (
          <div
            key={s.naam}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : `translateY(${motion.distance.reveal}px)`,
              transition: reduced
                ? "none"
                : `opacity ${motion.duration.standard}ms ${motion.ease}, transform ${motion.duration.standard}ms ${motion.ease}`,
              transitionDelay: visible && !reduced ? `${i * motion.stagger}ms` : "0ms",
            }}
          >
            <StatusNode index={i + 1} confirmed={visible} delayMs={i * motion.stagger} className="z-10" />
            <div className="mt-4">
              <p className="font-serif text-lg font-semibold text-ink">{s.naam}</p>
              <p className="mt-1 text-sm text-ink/70">{s.tekst}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
