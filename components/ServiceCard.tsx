type ServiceCardProps = {
  naam: string;
  vorm: string;
  voorWie: string;
  watJeKrijgt: string;
};

export default function ServiceCard({ naam, vorm, voorWie, watJeKrijgt }: ServiceCardProps) {
  return (
    <div className="border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
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
