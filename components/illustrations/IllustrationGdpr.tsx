type Props = { className?: string };

/**
 * A padlock, built from the same arc + rounded-rect primitives as
 * IllustrationSupport's bridge shape rather than an imported icon —
 * the one framework where a lock is the honest, unambiguous read
 * (data protection), so it stays a lock instead of reaching for an
 * abstract stand-in.
 */
export default function IllustrationGdpr({ className = "h-24 w-24" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path d="M 40 54 A 20 20 0 0 1 80 54" fill="none" stroke="#C08A54" strokeWidth="8" strokeLinecap="round" />
      <rect x="28" y="50" width="64" height="48" rx="8" fill="#16323B" />
      <circle cx="60" cy="70" r="5" fill="#EDEEE9" />
      <rect x="57" y="74" width="6" height="12" fill="#EDEEE9" />
    </svg>
  );
}
