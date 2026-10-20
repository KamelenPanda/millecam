"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Motion design tokens — the only duration/distance/easing values used
 * across scroll-reveal, hover and draw animations, so nothing scatters
 * arbitrary numbers (317ms, 842ms, ...) through the codebase. Adjust here;
 * every consumer follows.
 */
export const motion = {
  duration: {
    /** Hover/press feedback — buttons, cards. */
    fast: 200,
    /** Scroll-reveal fade/rise. */
    standard: 550,
    /** Ledger-line draws, count-ups. */
    slow: 800,
  },
  /** ms between items in a staggered reveal group. */
  stagger: 90,
  distance: {
    /** Hover nudge — arrow shift, underline draw. */
    micro: 4,
    /** Scroll-reveal translateY. */
    reveal: 24,
  },
  /** Calm, engineered ease — no overshoot or bounce. */
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

/**
 * Tracks prefers-reduced-motion. Starts `false` (matching server render) and
 * corrects in an effect — same pattern as HeroWatermark — rather than a lazy
 * client-only initializer, which would create a hydration mismatch.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/**
 * Shared once-only scroll-reveal primitive: observes the returned `ref`,
 * flips `visible` to true the first time it crosses `threshold`, then
 * disconnects — content stays revealed on scroll-up, it never replays.
 *
 * With prefers-reduced-motion, `visible` becomes true immediately (no
 * observer, no transition), so reveals never gate content behind motion for
 * people who asked not to see it.
 */
export function useRevealOnce<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const reduced = useReducedMotion();
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, threshold]);

  return { ref, visible, reduced };
}
