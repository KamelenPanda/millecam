type MarkProps = {
  variant?: "ink" | "paper";
  className?: string;
};

/** The "||" mark alone — small header uses, loading states, etc. Matches Logo's pillar geometry. */
export default function Mark({ variant = "ink", className }: MarkProps) {
  const bg = variant === "ink" ? "#EDEEE9" : "#14181D";
  const pillar = variant === "ink" ? "#16323B" : "#C08A54";
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Millecam" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="32" fill={bg} />
      <rect x="72" y="40" width="20" height="120" rx="5" fill={pillar} />
      <rect x="108" y="40" width="20" height="120" rx="5" fill={pillar} />
    </svg>
  );
}
