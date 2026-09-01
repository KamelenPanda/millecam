type PillarGlyphProps = {
  className?: string;
  color?: string;
};

/**
 * The bare "||" motif — just the two bars, no background square (that's
 * Mark.tsx, for favicon/avatar use). Use this inline: as a bullet marker,
 * a small section-opening ornament, or a quote-mark substitute. Sizable via
 * className (e.g. "h-4 w-3"); defaults to currentColor-independent terracotta.
 */
export default function PillarGlyph({ className = "h-4 w-3", color = "#B2532E" }: PillarGlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="2" width="5" height="20" rx="1.5" fill={color} />
      <rect x="13" y="2" width="5" height="20" rx="1.5" fill={color} />
    </svg>
  );
}
