type DomainScore = { label: string; score: number };

type MaturityGaugeProps = {
  score?: number;
  domains?: DomainScore[];
};

const DEFAULT_DOMAINS: DomainScore[] = [
  { label: "Governance", score: 3.5 },
  { label: "Access Control", score: 4.5 },
  { label: "Incident Response", score: 1.5 },
  { label: "Supplier Management", score: 2.5 },
];

/**
 * A static, illustrative preview of what a Millecam GAP-analyse produces —
 * shows the deliverable instead of describing it in a paragraph. Not live
 * data; explicitly labelled as an example.
 */
export default function MaturityGauge({ score = 3.5, domains = DEFAULT_DOMAINS }: MaturityGaugeProps) {
  const max = 5;
  const frac = Math.min(1, Math.max(0, score / max));
  const angle = 180 - 180 * frac;
  const rad = (angle * Math.PI) / 180;
  const cx = 150;
  const cy = 150;
  const r = 110;
  const endX = cx + r * Math.cos(rad);
  const endY = cy - r * Math.sin(rad);
  const largeArc = 180 - angle > 180 ? 1 : 0;

  return (
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <div className="mx-auto w-full max-w-[300px]">
        <svg viewBox="0 0 300 170" className="w-full">
          <path
            d="M 40,150 A 110,110 0 0 1 260,150"
            fill="none"
            stroke="#DCD3BF"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d={`M 40,150 A 110,110 0 ${largeArc} 1 ${endX.toFixed(2)},${endY.toFixed(2)}`}
            fill="none"
            stroke="#B2532E"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <text x="150" y="130" textAnchor="middle" className="fill-ink" style={{ font: "700 40px Georgia, serif" }}>
            {score.toFixed(1)}
          </text>
          <text x="150" y="158" textAnchor="middle" className="fill-muted" style={{ font: "400 13px Arial, sans-serif" }}>
            gemiddelde score / 5
          </text>
        </svg>
      </div>

      <div className="space-y-4">
        {domains.map((d) => (
          <div key={d.label}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-ink">{d.label}</span>
              <span className="text-muted">{d.score.toFixed(1)}</span>
            </div>
            <div className="h-1.5 w-full bg-line">
              <div
                className="h-1.5 bg-terracotta"
                style={{ width: `${(d.score / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
