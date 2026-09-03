type Props = { className?: string };

/**
 * Three stacked, widening bars — CyFun's three assurance levels (Basic,
 * Important, Essential) as a literal tier structure. Horizontal stacking
 * (not vertical growth, which IllustrationBuild already uses) keeps this
 * visually distinct while staying in the same flat-bar vocabulary.
 */
export default function IllustrationCyfun({ className = "h-24 w-24" }: Props) {
  const tiers = [
    { x: 40, w: 40, fill: "#DCD3BF" },
    { x: 25, w: 70, fill: "#D97A52" },
    { x: 10, w: 100, fill: "#B2532E" },
  ];
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {tiers.map((t, i) => (
        <rect key={i} x={t.x} y={25 + i * 23} width={t.w} height="14" rx="3" fill={t.fill} />
      ))}
    </svg>
  );
}
