type TornDividerProps = {
  /** The color of the section that follows — the "tear" reveals this color. */
  color: string;
  flip?: boolean;
};

/**
 * A jagged, hand-torn paper edge instead of a flat color-block seam between
 * two sections. Specific to the "Ledger" concept (paper, not a generic
 * wave/blob SVG divider) — used sparingly, at one or two transitions, not
 * between every section.
 */
export default function TornDivider({ color, flip = false }: TornDividerProps) {
  return (
    <div aria-hidden="true" className={flip ? "rotate-180" : ""}>
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        className="block h-6 w-full md:h-8"
      >
        <path
          d="M0,32 L0,14 L38,20 L79,7 L121,17 L162,5 L204,19 L245,9 L287,21 L328,6 L370,15 L411,3 L453,17 L494,11 L536,20 L577,8 L619,16 L660,4 L702,18 L743,9 L785,22 L826,7 L868,15 L909,3 L951,17 L992,12 L1034,21 L1075,8 L1117,17 L1158,5 L1200,15 L1200,32 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
