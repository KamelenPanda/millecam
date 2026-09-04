import { Fragment } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import FrameworkList from "@/components/FrameworkList";
import PillarGlyph from "@/components/PillarGlyph";
import HeroWatermark from "@/components/HeroWatermark";
import TornDivider from "@/components/TornDivider";
import SelfAssessment from "@/components/SelfAssessment";
import ScrollTimeline from "@/components/ScrollTimeline";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

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
      <Section className="relative overflow-hidden pb-20 pt-14 md:flex md:min-h-[88vh] md:items-center md:pb-24 md:pt-20">
        <HeroWatermark />
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.95fr] md:gap-10">
          <div>
            <h1 className="animate-hero-in font-serif text-6xl font-bold italic leading-[1.05] text-terracotta sm:text-7xl lg:text-[5.5rem]">
              Govern with confidence.
            </h1>
            <p
              className="animate-hero-in mt-7 max-w-lg text-lg text-ink/80"
              style={{ animationDelay: "0.1s" }}
            >
              Onafhankelijke GRC-expertise voor KMO&apos;s die compliance niet zelf kunnen opbouwen, maar
              wel moeten aantonen.
            </p>
            <FrameworkList
              items={["NIS2", "ISO 27001", "CyFun", "GDPR"]}
              className="animate-hero-in mt-8"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="animate-hero-in mt-6 flex flex-wrap gap-3"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/over"
                className="inline-flex items-center border border-white/70 bg-white/40 px-4 py-2 text-xs font-medium text-ink shadow-[0_4px_14px_rgba(33,29,24,0.06)] backdrop-blur-md transition-colors hover:bg-white/60"
              >
                Erkend Data Protection Officer
              </Link>
              <a
                href="https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=1026876048"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center border border-white/70 bg-white/40 px-4 py-2 text-xs font-medium text-ink shadow-[0_4px_14px_rgba(33,29,24,0.06)] backdrop-blur-md transition-colors hover:bg-white/60"
              >
                KBO BE 1026.876.048
              </a>
            </div>
            <div className="animate-hero-in" style={{ animationDelay: "0.4s" }}>
              <Button href="/contact" variant="primary" className="mt-9">
                Plan een gratis kennismaking
              </Button>
            </div>
          </div>

          <div className="animate-hero-in" style={{ animationDelay: "0.25s" }}>
            <div className="bg-white p-6 shadow-[0_28px_70px_rgba(33,29,24,0.14)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                Probeer het zelf
              </p>
              <p className="mt-1 text-sm text-ink/70">
                Zo werkt de scoring in een GAP-analyse.
              </p>
              <div className="mt-6">
                <SelfAssessment />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <TornDivider color="#FFFFFF" />

      {/* Probleemherkenning */}
      <Section className="bg-white pt-10">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          Compliance is verplicht. Zelf opbouwen is dat niet.
        </h2>
        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x md:divide-line"
          itemClassName="md:pl-8 md:first:pl-0"
          items={HERKENNING.map((h) => (
            <Fragment key={h.titel}>
              <h3 className="font-serif text-lg font-semibold text-ink">{h.titel}</h3>
              <p className="mt-3 text-sm text-ink/70">{h.tekst}</p>
            </Fragment>
          ))}
        />
        <p className="mt-8 italic text-muted">
          Herken je een van deze? Dan is dat precies waar Millecam voor bestaat. Niet zeker of NIS2
          voor jou geldt?{" "}
          <Link href="/nis2-check" className="not-italic text-terracotta hover:underline">
            Doe de korte NIS2-check
          </Link>
          .
        </p>
      </Section>

      {/* Diensten teaser */}
      <Section className="bg-white">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          Van eerste inzicht tot doorlopende ondersteuning
        </h2>
        <RevealGroup
          className="mt-10 grid gap-6 md:grid-cols-2"
          items={DIENSTEN.map((d) => (
            <ServiceCard key={d.naam} {...d} />
          ))}
        />
        <Link href="/diensten" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Bekijk alle diensten
        </Link>
      </Section>

      {/* Waarom Millecam */}
      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">Een specialist, geen callcenter</h2>
        <RevealGroup
          as="ul"
          itemAs="li"
          className="mt-10 grid gap-6 md:grid-cols-3"
          itemClassName="text-paper/80"
          items={[
            <Fragment key="1">
              <PillarGlyph className="h-5 w-4" color="#D97A52" />
              <p className="mt-3 text-sm">
                Rechtstreeks contact met de persoon die het werk doet: geen junior-consultant, geen
                escalatieketen.
              </p>
            </Fragment>,
            <Fragment key="2">
              <PillarGlyph className="h-5 w-4" color="#D97A52" />
              <p className="mt-3 text-sm">
                Erkend Data Protection Officer (DPI-gecertificeerd). Niet elke GRC-consultant kan die rol
                zelf opnemen.
              </p>
            </Fragment>,
            <Fragment key="3">
              <PillarGlyph className="h-5 w-4" color="#D97A52" />
              <p className="mt-3 text-sm">
                Bewezen aanpak bij CyFun-, ISO 27001- en NIS2-trajecten, van GAP-analyse tot volledige
                implementatie.
              </p>
            </Fragment>,
          ]}
        />
      </Section>
      <TornDivider color="#FFFFFF" />

      {/* Aanpak teaser + Slot CTA */}
      <Section className="bg-white pt-10">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">Hoe een traject verloopt</h2>
        <ScrollTimeline stappen={STAPPEN} />
        <Link href="/aanpak" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Lees meer over de aanpak
        </Link>

        <Reveal className="mx-auto mt-16 max-w-md pt-10 text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Klaar om te starten?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Een vrijblijvend gesprek van dertig minuten is genoeg om te weten of, en hoe, Millecam kan
            helpen.
          </p>
          <Button href="/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Plan een gratis kennismaking
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
