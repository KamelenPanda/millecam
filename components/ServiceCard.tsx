import { ReactNode } from "react";

type ServiceCardProps = {
  naam: string;
  vorm: string;
  voorWie: string;
  watJeKrijgt: string;
  icon?: ReactNode;
  accent?: string;
  /** Set true when the card sits inside a link — adds the restrained hover
   * lift/border/background shift; a non-interactive card stays static so it
   * never implies clickability it doesn't have. */
  interactive?: boolean;
};

export default function ServiceCard({
  naam,
  vorm,
  voorWie,
  watJeKrijgt,
  icon,
  accent = "border-terracotta",
  interactive = false,
}: ServiceCardProps) {
  return (
    <div
      className={
        `h-full border-l-2 ${accent} bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]` +
        (interactive
          ? " transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-terracotta-darker hover:bg-white"
          : "")
      }
    >
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="font-serif text-xl font-semibold text-ink">{naam}</h3>
      <p className="mt-1 text-sm font-medium text-terracotta">{vorm}</p>
      <p className="mt-4 text-sm text-ink/70">
        <span className="font-medium text-ink">Voor wie: </span>
        {voorWie}
      </p>
      <p className="mt-2 text-sm text-ink/70">
        <span className="font-medium text-ink">Wat je krijgt: </span>
        {watJeKrijgt}
      </p>
    </div>
  );
}
