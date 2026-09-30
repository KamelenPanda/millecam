type Props = { className?: string };

/**
 * Two overlapping speech bubbles with dialogue dots — a tabletop exercise is
 * a simulated conversation, not a document. Built from the same rounded-rect
 * + circle primitives as the rest of the set, rather than a literal
 * scenario-board or people icon.
 */
export default function IllustrationDialogue({ className = "h-24 w-24" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect x="14" y="24" width="70" height="46" rx="10" fill="#DCD3BF" />
      <rect x="40" y="52" width="66" height="42" rx="10" fill="#B2532E" />
      <circle cx="58" cy="73" r="4" fill="#F2EDE1" />
      <circle cx="72" cy="73" r="4" fill="#F2EDE1" />
      <circle cx="86" cy="73" r="4" fill="#F2EDE1" />
    </svg>
  );
}
