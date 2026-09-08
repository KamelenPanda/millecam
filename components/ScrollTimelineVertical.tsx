"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Stap = {
  nummer: string;
  naam: string;
  tekst: string;
  illustratie: ReactNode;
};

export default function ScrollTimelineVertical({ stappen }: { stappen: Stap[] }) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-6">
      {stappen.map((s, i) => (
        <div
          key={s.naam}
          className="flex gap-6 transition-all duration-500 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transitionDelay: visible ? `${i * 250}ms` : "0ms",
          }}
        >
          <div className="flex flex-col items-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta font-serif text-sm font-bold text-paper">
              {s.nummer}
            </span>
            {i < stappen.length - 1 && (
              <div
                className="mt-2 w-px flex-1 origin-top bg-line transition-transform duration-700 ease-out"
                style={{
                  transform: visible ? "scaleY(1)" : "scaleY(0)",
                  transitionDelay: visible ? `${i * 250 + 300}ms` : "0ms",
                }}
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
