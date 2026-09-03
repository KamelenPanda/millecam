type Props = { className?: string };

/**
 * A small hub-and-spoke network — the regulated entity as the centre node,
 * connected outward — rather than a shield or lock icon. NIS2 governs
 * network and information systems, so the glyph is literally a network,
 * built from the same flat circle/line primitives as the rest of the set.
 */
export default function IllustrationNis2({ className = "h-24 w-24" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path d="M60,55 L26,30 M60,55 L94,30 M60,55 L60,100" stroke="#DCD3BF" strokeWidth="4" />
      <circle cx="26" cy="30" r="8" fill="#211D18" />
      <circle cx="94" cy="30" r="8" fill="#211D18" />
      <circle cx="60" cy="100" r="8" fill="#211D18" />
      <circle cx="60" cy="55" r="11" fill="#B2532E" />
    </svg>
  );
}
