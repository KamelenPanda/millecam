type Props = { className?: string };

/**
 * Ascending bars, building toward the taller ones — suggests progress and
 * structure being put in place. Same flat-bar visual language as the
 * maturity gauge's domain bars, reused here at illustration scale.
 */
export default function IllustrationBuild({ className = "h-24 w-24" }: Props) {
  const bars = [
    { h: 30, color: "#D6D9D4" },
    { h: 55, color: "#C08A54" },
    { h: 80, color: "#16323B" },
    { h: 95, color: "#14181D" },
  ];
  const w = 16;
  const gap = 10;
  const base = 108;
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {bars.map((b, i) => {
        const x = 8 + i * (w + gap);
        return (
          <rect
            key={i}
            x={x}
            y={base - b.h}
            width={w}
            height={b.h}
            rx="2.5"
            fill={b.color}
          />
        );
      })}
    </svg>
  );
}
