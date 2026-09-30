"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useRevealOnce, motion } from "@/lib/motion";

type Framework = { naam: string; tekst: string; glyph: ReactNode; href?: string };

/**
 * Framework cards fade/rise in once the grid enters view (REVEAL, on the
 * outer wrapper). Cards with a href also get a restrained hover lift on the
 * inner card box — a separate element, so the hover transition (fast) never
 * fights the reveal transition (standard) on the same `transform` property.
 */
export default function FrameworkGrid({ frameworks }: { frameworks: Framework[] }) {
  const { ref, visible, reduced } = useRevealOnce<HTMLDivElement>(0.2);
  const cardClass =
    "flex h-full items-start gap-5 border-l-2 border-terracotta bg-[#FBF9F4] py-6 pl-6 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]";
  const hoverClass =
    " transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-terracotta-darker hover:bg-white";

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-2">
      {frameworks.map((f, i) => {
        const style = {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : `translateY(${motion.distance.reveal}px)`,
          transition: reduced
            ? "none"
            : `opacity ${motion.duration.standard}ms ${motion.ease}, transform ${motion.duration.standard}ms ${motion.ease}`,
          transitionDelay: visible && !reduced ? `${i * motion.stagger}ms` : "0ms",
        };
        const content = (
          <>
            {f.glyph}
            <div>
              <p className="font-serif text-lg font-semibold text-ink">{f.naam}</p>
              <p className="mt-1 text-sm text-ink/70">{f.tekst}</p>
            </div>
          </>
        );
        return (
          <div key={f.naam} style={style}>
            {f.href ? (
              <Link href={f.href} className={cardClass + hoverClass}>
                {content}
              </Link>
            ) : (
              <div className={cardClass}>{content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
