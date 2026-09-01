import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import FrameworkList from "@/components/FrameworkList";
import PillarGlyph from "@/components/PillarGlyph";

const DIENSTEN = [
  {
    naam: "GAP-analyse",
    vorm: "Vaste prijs, kort traject",
    voorWie: "Organisaties die willen weten waar ze staan t.o.v. NIS2, ISO 27001 of CyFun.",
    watJeKrijgt: "Rapport met scoring per control, geprioriteerde bevindingen en een concreet stappenplan.",
  },
  {
    naam: "Implementatietraject",
    vorm: "Projectbasis",
    voorWie: "Organisaties die van bevindingen naar aantoonbare compliance willen.",
    watJeKrijgt: "Begeleiding bij beleid, documentatie en technische maatregelen. Jij houdt de regie.",
  },
  {
    naam: "DPO-as-a-Service",
    vorm: "Maandelijkse retainer",
    voorWie: "Organisaties die een DPO nodig hebben, geen fulltime rol.",
    watJeKrijgt: "Erkend extern aanspreekpunt voor AVG-vraagstukken, meldingen en toezicht.",
  },
  {
    naam: "Tabletop exercises & awareness",
    vorm: "Projectbasis / event",
    voorWie: "Teams die theorie willen omzetten in reflex.",
    watJeKrijgt: "Scenario-oefeningen op maat, met rapportage van leerpunten.",
  },
  {
    naam: "Fractional GRC-ondersteuning",
    vorm: "Dagprijs, doorlopend",
    voorWie: "Organisaties die af en toe of structureel capaciteit nodig hebben.",
    watJeKrijgt: "Vaste beschikbaarheid, op het ritme dat past.",
  },
];

const HERKENNING = [
  {
    titel: "NIS2 of CyFun raakt jouw organisatie",
    tekst: "Je valt onder de NIS2-richtlijn of een klant/verzekeraar vraagt aantoonbaarheid, maar een interne compliance-officer heb je niet.",
  },
  {
    titel: "Je hebt een DPO nodig, geen fulltime rol",
    tekst: "De AVG verplicht een functionaris gegevensbescherming, maar dat vult geen volledige werkweek.",
  },
  {
    titel: "Een klant of aanbesteding vraagt ISO 27001",
    tekst: "Certificering is een contractvoorwaarde geworden, geen interne prioriteit.",
  },
];

const STAPPEN = [
  { naam: "GAP-analyse", tekst: "Waar sta je vandaag, tegenover het kader dat voor jou relevant is." },
  { naam: "Implementatie", tekst: "Bevindingen vertaald naar beleid, procedures en technische maatregelen." },
  { naam: "Ondersteuning", tekst: "Een vast aanspreekpunt dat blijft, zonder dat je iemand aanwerft." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pb-16 pt-24">
        <h1 className="max-w-2xl font-serif text-5xl font-bold italic text-terracotta">
          Govern with confidence.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink/80">
          Onafhankelijke GRC-expertise voor KMO&apos;s die compliance niet zelf kunnen opbouwen, maar wel
          moeten aantonen.
        </p>
        <FrameworkList items={["NIS2", "ISO 27001", "CyFun", "GDPR"]} className="mt-7" />
        <Button href="/contact" variant="primary" className="mt-8">
          Plan een gratis kennismaking
        </Button>
      </Section>

      {/* Probleemherkenning */}
      <Section className="bg-white">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          Compliance is verplicht. Zelf opbouwen is dat niet.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x md:divide-line">
          {HERKENNING.map((h) => (
            <div key={h.titel} className="md:pl-8 md:first:pl-0">
              <h3 className="font-serif text-lg font-semibold text-ink">{h.titel}</h3>
              <p className="mt-3 text-sm text-ink/70">{h.tekst}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 italic text-muted">
          Herken je een van deze? Dan is dat precies waar Millecam voor bestaat.
        </p>
      </Section>

      {/* Diensten teaser */}
      <Section>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          Van eerste inzicht tot doorlopende ondersteuning
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {DIENSTEN.map((d) => (
            <ServiceCard key={d.naam} {...d} />
          ))}
        </div>
        <Link href="/diensten" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Bekijk alle diensten
        </Link>
      </Section>

      {/* Waarom Millecam */}
      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">Een specialist, geen callcenter</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          <li className="text-paper/80">
            <PillarGlyph className="h-5 w-4" color="#D97A52" />
            <p className="mt-3 text-sm">
              Rechtstreeks contact met de persoon die het werk doet: geen junior-consultant, geen
              escalatieketen.
            </p>
          </li>
          <li className="text-paper/80">
            <PillarGlyph className="h-5 w-4" color="#D97A52" />
            <p className="mt-3 text-sm">
              Erkend Data Protection Officer (DPI-gecertificeerd). Niet elke GRC-consultant kan die rol
              zelf opnemen.
            </p>
          </li>
          <li className="text-paper/80">
            <PillarGlyph className="h-5 w-4" color="#D97A52" />
            <p className="mt-3 text-sm">
              Bewezen aanpak bij CyFun-, ISO 27001- en NIS2-trajecten, van GAP-analyse tot volledige
              implementatie.
            </p>
          </li>
        </ul>
      </Section>

      {/* Aanpak teaser */}
      <Section className="bg-white">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">Hoe een traject verloopt</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STAPPEN.map((s, i) => (
            <div key={s.naam} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta font-serif font-bold text-paper">
                {i + 1}
              </span>
              <div>
                <p className="font-serif text-lg font-semibold text-ink">{s.naam}</p>
                <p className="mt-1 text-sm text-ink/70">{s.tekst}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/aanpak" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Lees meer over de aanpak
        </Link>
      </Section>

      {/* Slot CTA */}
      <Section className="bg-white">
        <div className="mx-auto max-w-md pt-14 text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Klaar om te starten?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Een vrijblijvend gesprek van dertig minuten is genoeg om te weten of, en hoe, Millecam kan
            helpen.
          </p>
          <Button href="/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Plan een gratis kennismaking
          </Button>
        </div>
      </Section>
    </>
  );
}
