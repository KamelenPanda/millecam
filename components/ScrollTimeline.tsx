"use client";

import { useEffect, useRef, useState } from "react";

type Stap = { naam: string; tekst: string };

export default function ScrollTimeline({ stappen }: { stappen: Stap[] }) {
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
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mt-10">
      <div
        className="absolute top-5 hidden h-px origin-left bg-line transition-transform duration-[1200ms] ease-out md:block"
        style={{ left: "16.5%", right: "16.5%", transform: visible ? "scaleX(1)" : "scaleX(0)" }}
        aria-hidden="true"
      />
      <div className="grid gap-8 md:grid-cols-3">
        {stappen.map((s, i) => (
          <div
            key={s.naam}
            className="flex gap-4 transition-all duration-500 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transitionDelay: visible ? `${i * 200 + 200}ms` : "0ms",
            }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta font-serif font-bold text-paper">
              {i + 1}
            </span>
            <div>
              <p className="font-serif text-lg font-semibold text-ink">{s.naam}</p>
              <p className="mt-1 text-sm text-ink/70">{s.tekst}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
