"use client";

import { useEffect, useState } from "react";
import PillarGlyph from "./PillarGlyph";

/**
 * The hero's background pillar mark, drifting a few pixels with the cursor.
 * Kept subtle (max ~10px shift) — this is the one interactive flourish on
 * the one bold element we already chose (the watermark), not a new
 * decoration. Falls back to a static position if reduced-motion is set.
 */
export default function HeroWatermark() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handleMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x: x * 10, y: y * 8 });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none absolute -right-6 -top-6 hidden opacity-[0.06] transition-transform duration-300 ease-out md:block"
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      aria-hidden="true"
    >
      <PillarGlyph className="h-[22rem] w-[16rem]" color="#211D18" />
    </div>
  );
}
