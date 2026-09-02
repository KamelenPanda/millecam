"use client";

import { useState } from "react";

type Domain = { label: string; score: number };

const INITIAL: Domain[] = [
  { label: "Governance", score: 3 },
  { label: "Access Control", score: 3 },
  { label: "Incident Response", score: 3 },
  { label: "Supplier Management", score: 3 },
];

/** Five small ascending bars, click one to set the score — echoes the same
 * bar-chart language used in the illustrations and domain rows, rather than
 * a generic HTML range slider. */
function BarRating({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) {
  return (
    <div className="flex items-end gap-1" role="group" aria-label={`Score voor ${label}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`${n} van 5`}
          aria-pressed={n === value}
          className="w-3.5 transition-colors"
          style={{
            height: `${10 + n * 5}px`,
            backgroundColor: n <= value ? "#B2532E" : "#DCD3BF",
          }}
        />
      ))}
    </div>
  );
}

export default function SelfAssessment() {
  const [domains, setDomains] = useState<Domain[]>(INITIAL);
  const max = 5;
  const score = domains.reduce((s, d) => s + d.score, 0) / domains.length;

  const frac = Math.min(1, Math.max(0, score / max));
  const angle = 180 - 180 * frac;
  const rad = (angle * Math.PI) / 180;
  const cx = 150;
  const cy = 150;
  const r = 110;
  const endX = cx + r * Math.cos(rad);
  const endY = cy - r * Math.sin(rad);
  const largeArc = 180 - angle > 180 ? 1 : 0;

  function setScore(i: number, v: number) {
    setDomains((ds) => ds.map((d, j) => (j === i ? { ...d, score: v } : d)));
  }

  return (
    <div>
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
              style={{ transition: "d 0.3s ease-out" }}
            />
            <text x="150" y="130" textAnchor="middle" className="fill-ink" style={{ font: "700 40px Georgia, serif" }}>
              {score.toFixed(1)}
            </text>
            <text x="150" y="158" textAnchor="middle" className="fill-muted" style={{ font: "400 13px Arial, sans-serif" }}>
              gemiddelde score / 5
            </text>
          </svg>
        </div>

        <div className="space-y-5">
          {domains.map((d, i) => (
            <div key={d.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-ink">{d.label}</span>
                <span className="text-muted">{d.score.toFixed(1)}</span>
              </div>
              <BarRating value={d.score} onChange={(v) => setScore(i, v)} label={d.label} />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-xs text-muted">
        Pas de scores aan om te zien hoe het gemiddelde verandert: zo werkt de scoring in elke
        GAP-analyse, met je eigen situatie in plaats van dit voorbeeld.
      </p>
    </div>
  );
}
