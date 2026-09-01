import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Aanpak | Millecam",
  description: "Hoe een traject bij Millecam verloopt: GAP-analyse, implementatie, ondersteuning.",
};

const STAPPEN = [
  {
    naam: "1. GAP-analyse",
    tekst:
      "Documentenreview, interviews met verantwoordelijken, en een tweedimensionale scoring (documentatie én implementatie) per control. Resultaat: een helder beeld, geen jargon-rapport.",
  },
  {
    naam: "2. Implementatie",
    tekst:
      "Vertaling van bevindingen naar een concreet stappenplan: beleid, procedures, technische maatregelen. Millecam coördineert, jij houdt overzicht: geen zwarte-doostraject.",
  },
  {
    naam: "3. Ondersteuning",
    tekst:
      "Compliance stopt niet bij een handtekening. Via DPO-as-a-Service of fractional ondersteuning blijft er een vast aanspreekpunt, zonder dat je iemand aanwerft.",
  },
];

const PRINCIPES = [
  "Eén vast aanspreekpunt: geen wisselende consultants",
  "Concrete rapportage: geen tachtig pagina's compliance-jargon",
  "Realistisch tempo, afgestemd op wat een KMO aankan, niet op een corporate draaiboek",
  "Framework-onafhankelijk advies: het kader volgt de situatie, niet omgekeerd",
];

export default function AanpakPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          Hoe een traject bij Millecam verloopt
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Geen generieke methodiek van de plank. Elk traject start met dezelfde vraag: waar sta je
          vandaag, en wat is realistisch haalbaar met de middelen die je hebt.
        </p>
      </Section>

      <Section className="bg-white pt-0">
        <div className="space-y-10">
          {STAPPEN.map((s) => (
            <div key={s.naam} className="border-b border-line pb-10 last:border-none">
              <h2 className="font-serif text-2xl font-semibold text-ink">{s.naam}</h2>
              <p className="mt-3 max-w-2xl text-ink/70">{s.tekst}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <h2 className="font-serif text-3xl font-semibold">Wat je van Millecam mag verwachten</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {PRINCIPES.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-paper/80">
              <span className="text-terracotta-light">—</span>
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-md border-t border-line pt-14 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Benieuwd hoe dat er voor jouw organisatie uitziet?
          </h2>
          <Button href="/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Plan een gesprek
          </Button>
        </div>
      </Section>
    </>
  );
}
