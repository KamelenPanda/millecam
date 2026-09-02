type Props = { className?: string };

/**
 * Two pillars (the wordmark's own "ll" motif, at illustration scale) with a
 * connecting arc above them — a small bridge/portal shape suggesting
 * continuous support, rather than a generic handshake or headset icon.
 * Directly reuses the brand's own mark instead of an unrelated stock symbol.
 */
export default function IllustrationSupport({ className = "h-24 w-24" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path
        d="M 30 55 Q 60 20 90 55"
        fill="none"
        stroke="#D97A52"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect x="22" y="50" width="14" height="58" rx="4" fill="#211D18" />
      <rect x="84" y="50" width="14" height="58" rx="4" fill="#B2532E" />
    </svg>
  );
}
