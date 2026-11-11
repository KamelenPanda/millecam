type Props = { className?: string };

/**
 * A hexagonal seal with a ribbon band across it — a certification/standard
 * mark, geometric rather than a literal checkmark badge or medal icon.
 * Same flat-shape language as the rest of the illustration set.
 */
export default function IllustrationIso27001({ className = "h-24 w-24" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <polygon
        points="104,60 82,98 38,98 16,60 38,22 82,22"
        fill="none"
        stroke="#D97A52"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <rect x="30" y="52" width="60" height="16" rx="3" fill="#B2532E" />
    </svg>
  );
}
