"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Framework = { naam: string; tekst: string; glyph: ReactNode };

/**
 * Framework cards fade/rise in once the grid enters view — same
 * IntersectionObserver-once pattern as ScrollTimeline, applied here so
 * scrolling to this section is rewarded with motion instead of the cards
 * just being statically present.
 */
export default function FrameworkGrid({ frameworks }: { frameworks: Framework[] }) {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-2">
      {frameworks.map((f, i) => (
        <div
          key={f.naam}
          className="flex items-start gap-5 border-l-2 border-terracotta bg-[#FBF9F4] py-6 pl-6 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)] transition-all duration-500 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transitionDelay: visible ? `${i * 120}ms` : "0ms",
          }}
        >
          {f.glyph}
          <div>
            <p className="font-serif text-lg font-semibold text-ink">{f.naam}</p>
            <p className="mt-1 text-sm text-ink/70">{f.tekst}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
