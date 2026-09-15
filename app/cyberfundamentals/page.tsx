import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationCyfun from "@/components/illustrations/IllustrationCyfun";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "CyberFundamentals (CyFun) consultant in België | Millecam",
  description:
    "CyFun GAP-analyse en niveaubepaling (Basic, Important, Essential) voor Belgische KMO's — een toegankelijk alternatief voor NIS2-aantoonbaarheid.",
};

const VOORWIE = [
  {
    titel: "NIS2-aantoonbaarheid zoeken, pragmatisch",
    tekst: "KMO's die moeten aantonen dat ze NIS2-conform zijn, maar niet meteen een volledig ISO 27001-certificeringstraject willen starten.",
  },
  {
    titel: "Een klant of opdrachtgever vraagt een niveau aan",
    tekst: "Een klant of overheidsopdracht vraagt aantoonbaarheid op een specifiek CyFun-niveau (Basic, Important of Essential).",
  },
  {
    titel: "Twijfel tussen kaders",
    tekst: "Organisaties die niet zeker zijn of NIS2, CyFun of ISO 27001 het juiste startpunt is, en eerst pragmatisch advies willen.",
  },
];

const DELIVERABLES = [
  "GAP-analyse tegen het gekozen CyFun-niveau (Basic, Important of Essential)",
  "Onderbouwde niveaubepaling: welk niveau past bij de risico's en verplichtingen van de organisatie",
  "Geprioriteerde remediatieroadmap",
  "Beleids- en proceduredocumentatie afgestemd op het gekozen niveau",
  "Ondersteuning bij de zelfevaluatie en eventuele verificatie",
  "Waar relevant: een duidelijke brug naar bredere NIS2-aantoonbaarheid",
];

const STAPPEN = [
  { naam: "GAP-analyse & niveaubepaling", tekst: "Waar sta je vandaag, en welk niveau is realistisch." },
  { naam: "Remediatie", tekst: "Bevindingen vertaald naar concrete maatregelen en documentatie." },
  { naam: "Zelfevaluatie", tekst: "Ondersteuning bij het afronden en, waar van toepassing, verifiëren van de zelfevaluatie." },
];

export default function CyberfundamentalsPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">CyberFundamentals (CyFun)</span>: NIS2-aantoonbaarheid
              zonder overkill
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              CyFun is het Belgische zelfevaluatiekader van het Centre for Cybersecurity Belgium (CCB), met
              drie niveaus — Basic, Important, Essential — en een toegankelijker instapmogelijkheid dan een
              volledige ISO 27001-certificering voor wie NIS2-aantoonbaarheid zoekt.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Bespreek je CyberFundamentals-traject</Button>
              <Button href="/nis2-check" variant="secondary">Doe de korte NIS2-check</Button>
            </div>
          </div>
          <IllustrationCyfun className="hidden h-28 w-28 shrink-0 md:block" />
        </div>
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Voor wie is dit relevant?</h2>
        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x-2 md:divide-terracotta-light"
          itemClassName="md:pl-8 md:first:pl-0"
          items={VOORWIE.map((v) => (
            <Fragment key={v.titel}>
              <h3 className="font-serif text-lg font-semibold text-ink">{v.titel}</h3>
              <p className="mt-3 text-sm text-ink/70">{v.tekst}</p>
            </Fragment>
          ))}
        />
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">Wat Millecam doet</h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          Een GAP-analyse tegen het gekozen of nog te bepalen CyFun-niveau (Basic, Important of Essential)
          brengt in kaart waar je vandaag staat. Daarbij hoort een eerlijk advies over welk niveau
          realistisch en voldoende is voor de werkelijke risico&apos;s en verplichtingen van de organisatie
          — niet automatisch het hoogste — gevolgd door een geprioriteerd remediatieplan.
        </p>
      </Section>

      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">Wat je concreet krijgt</h2>
        <RevealGroup
          as="ul"
          itemAs="li"
          className="mt-10 grid gap-4 md:grid-cols-2"
          itemClassName="flex items-start gap-3 text-sm text-paper/80"
          items={DELIVERABLES.map((d) => (
            <Fragment key={d}>
              <PillarGlyph className="mt-1 h-4 w-3 shrink-0" color="#D97A52" />
              <span>{d}</span>
            </Fragment>
          ))}
        />
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Hoe een CyberFundamentals-traject verloopt</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STAPPEN.map((s, i) => (
            <div key={s.naam} className="border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
              <p className="text-xs font-medium text-muted">Stap {i + 1}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{s.naam}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.tekst}</p>
            </div>
          ))}
        </div>
        <Link href="/aanpak" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Meer over de aanpak
        </Link>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Resultaat</h2>
            <p className="mt-4 text-ink/70">
              Aantoonbare naleving op het niveau dat er echt toe doet, zonder tijd en budget te verspillen
              aan een zwaarder traject dan nodig.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Waarom Millecam</h2>
            <p className="mt-4 text-ink/70">
              Eén vast aanspreekpunt, geen wisselend team. Rechtstreeks contact met wie het werk uitvoert —
              geen junior-consultant, geen escalatieketen.{" "}
              <Link href="/over#credentials" className="text-terracotta hover:underline">
                Meer over Robin
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Klaar om te starten?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Een vrijblijvend gesprek van dertig minuten is genoeg om te bepalen of, en hoe, Millecam kan
            helpen.
          </p>
          <Button href="/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Bespreek je CyberFundamentals-traject
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
