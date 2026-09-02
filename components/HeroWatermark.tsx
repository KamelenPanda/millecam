"use client";

import { useEffect, useState } from "react";
import PillarGlyph from "./PillarGlyph";

/**
 * The hero's background pillar mark, tilting in 3D space with the cursor —
 * real perspective/rotation, not just a 2D drift. This is the one
 * interactive flourish on the one bold element we already chose (the
 * watermark), not a new decoration. Falls back to a static position if
 * reduced-motion is set.
 */
export default function HeroWatermark() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    function handleMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x, y });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const rotateY = reduced ? 0 : tilt.x * 10;
  const rotateX = reduced ? 0 : -tilt.y * 7;

  return (
    <div
      className="pointer-events-none absolute inset-0 hidden items-center justify-end md:flex"
      style={{ perspective: "1400px" }}
      aria-hidden="true"
    >
      <div
        className="mr-[-3vh] opacity-[0.07] transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
      >
        <PillarGlyph className="h-[78vh] w-[56vh]" color="#211D18" />
      </div>
    </div>
  );
}
