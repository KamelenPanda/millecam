type Props = { className?: string };

/**
 * A clock face with two hands — fractional support is measured in a rhythm
 * (days per month), not a fixed project. Same arc/rect/circle vocabulary as
 * the padlock and bridge glyphs elsewhere in this set.
 */
export default function IllustrationClock({ className = "h-24 w-24" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="42" fill="none" stroke="#211D18" strokeWidth="6" />
      <rect x="57" y="30" width="6" height="32" rx="3" fill="#211D18" />
      <rect x="60" y="58" width="26" height="6" rx="3" fill="#B2532E" transform="rotate(35 60 60)" />
      <circle cx="60" cy="60" r="5" fill="#B2532E" />
    </svg>
  );
}
