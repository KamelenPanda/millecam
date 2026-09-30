"use client";

import { ReactNode } from "react";
import { useRevealOnce, motion } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * The REVEAL motion primitive for a standalone block (a CTA, a credentials
 * card, a paragraph) that just needs a plain fade-up — see RevealGroup for
 * a staggered list of items instead.
 */
export default function Reveal({ children, className = "" }: RevealProps) {
  const { ref, visible, reduced } = useRevealOnce<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${motion.distance.reveal}px)`,
        transition: reduced ? "none" : `opacity ${motion.duration.standard}ms ${motion.ease}, transform ${motion.duration.standard}ms ${motion.ease}`,
      }}
    >
      {children}
    </div>
  );
}
