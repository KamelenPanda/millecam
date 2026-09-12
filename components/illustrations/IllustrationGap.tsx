type Props = { className?: string };

/**
 * Abstract "assessment matrix" — filled squares (documented/conform) next to
 * outline-only squares (gap identified). Geometric, not a literal
 * magnifying-glass icon — stays in the same flat, primitive-shape language
 * as the maturity gauge and the pillar glyph, rather than reaching for a
 * generic stock icon set.
 */
export default function IllustrationGap({ className = "h-24 w-24" }: Props) {
  const cells = [
    [false, true, false],
    [true, true, false],
    [false, true, false],
  ];
  const size = 26;
  const gap = 8;
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {cells.map((row, r) =>
        row.map((filled, c) => {
          const x = 12 + c * (size + gap);
          const y = 12 + r * (size + gap);
          return filled ? (
            <rect key={`${r}-${c}`} x={x} y={y} width={size} height={size} rx="3" fill="#B2532E" />
          ) : (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width={size}
              height={size}
              rx="3"
              fill="none"
              stroke="#DCD3BF"
              strokeWidth="2"
            />
          );
        })
      )}
    </svg>
  );
}
