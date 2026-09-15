import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationNis2 from "@/components/illustrations/IllustrationNis2";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "NIS2-consultant voor KMO's in België | Millecam",
  description:
    "Val je onder NIS2 en heb je geen interne compliance-officer? Millecam begeleidt Belgische KMO's van scoping en GAP-analyse tot aantoonbare naleving.",
};

const VOORWIE = [
  {
    titel: "Essentiële of belangrijke entiteit",
    tekst: "Je organisatie valt onder een van de NIS2-sectoren (energie, transport, digitale infrastructuur, gezondheidszorg, en meer) en overschrijdt de omvangdrempel.",
  },
  {
    titel: "Klant of verzekeraar vraagt aantoonbaarheid",
    tekst: "Je levert aan een essentiële of belangrijke entiteit, en die vraagt je om zelf te bewijzen dat je risicobeheer op orde is.",
  },
  {
    titel: "Geen interne compliance-officer",
    tekst: "Je weet dat NIS2 relevant is, maar niemand in het team heeft de tijd of achtergrond om dit structureel op te zetten.",
  },
];

const DELIVERABLES = [
  "Scopingsanalyse: val je onder NIS2, en als essentiële of belangrijke entiteit",
  "GAP-rapport tegen de NIS2-risicobeheersmaatregelen (artikel 21), met scoring per maatregel",
  "Geprioriteerd stappenplan met eigenaarschap en realistische tijdlijn",
  "Beleidsdocumenten en procedures op maat: toegangsbeheer, leveranciersbeheer, bedrijfscontinuïteit, incidentrespons",
  "Incidentmeldingsprocedure afgestemd op de NIS2-meldingstermijnen",
  "Voorbereiding van het bestuursorgaan op zijn NIS2-verantwoordelijkheid en rapportagestructuur",
  "Begeleiding bij verificatie of toezicht door de bevoegde instantie",
];

const STAPPEN = [
  { naam: "Scoping & GAP-analyse", tekst: "Val je onder NIS2, en waar sta je vandaag tegenover de risicobeheersmaatregelen." },
  { naam: "Implementatie", tekst: "Bevindingen vertaald naar beleid, procedures en technische maatregelen — jij houdt de regie." },
  { naam: "Aantoonbaarheid", tekst: "Documentatie en bewijsvoering op orde, klaar voor een eventuele controle." },
];

export default function Nis2Page() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">NIS2</span>: van richtlijn naar aantoonbare naleving
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              De Europese cybersecurity-richtlijn voor essentiële en belangrijke entiteiten, omgezet in
              Belgisch recht. Relevant vanaf een bepaalde omvang of sector — en met bestuurdersaansprakelijkheid
              als er niets mee gebeurt.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Bespreek je NIS2-traject</Button>
              <Button href="/nis2-check" variant="secondary">Doe de korte NIS2-check</Button>
            </div>
          </div>
          <IllustrationNis2 className="hidden h-28 w-28 shrink-0 md:block" />
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
        <p className="mt-8 text-sm text-ink/70">
          Niet zeker of dit jouw organisatie raakt?{" "}
          <Link href="/nis2-check" className="text-terracotta hover:underline">
            Doe de korte NIS2-check
          </Link>
          .
        </p>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">Wat Millecam doet</h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          Een scopingsanalyse bepaalt of, en als wat, je organisatie onder NIS2 valt. Daarna volgt een
          GAP-analyse tegen de risicobeheersmaatregelen uit artikel 21: waar sta je vandaag, gescoord op
          zowel documentatie als effectieve implementatie. Bevindingen worden vertaald naar een concreet
          stappenplan — geen tachtig pagina&apos;s jargon, maar een lijst met wat eerst moet gebeuren en
          door wie.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">Hoe een NIS2-traject verloopt</h2>
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
              Aantoonbare naleving van de NIS2-risicobeheersmaatregelen: werkend risicobeheer in plaats van
              enkel documentatie, een bestuursorgaan dat zijn verantwoordelijkheid kent, en een
              incidentmeldingsproces dat klaarstaat vóór het nodig is.
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
            Bespreek je NIS2-traject
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
