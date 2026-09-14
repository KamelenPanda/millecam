import { Fragment } from "react";
import Image from "next/image";
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
import IllustrationNis2 from "@/components/illustrations/IllustrationNis2";
import IllustrationIso27001 from "@/components/illustrations/IllustrationIso27001";
import IllustrationCyfun from "@/components/illustrations/IllustrationCyfun";
import IllustrationGdpr from "@/components/illustrations/IllustrationGdpr";
import IllustrationGap from "@/components/illustrations/IllustrationGap";
import IllustrationBuild from "@/components/illustrations/IllustrationBuild";
import IllustrationSupport from "@/components/illustrations/IllustrationSupport";
import IllustrationDialogue from "@/components/illustrations/IllustrationDialogue";
import IllustrationClock from "@/components/illustrations/IllustrationClock";

const DIENSTEN = [
  {
    naam: "GAP-analyse",
    vorm: "Vaste prijs, kort traject",
    voorWie: "Organisaties die willen weten waar ze staan t.o.v. NIS2, ISO 27001 of CyFun.",
    watJeKrijgt: "Rapport met scoring per control, geprioriteerde bevindingen en een concreet stappenplan.",
    icon: <IllustrationGap className="h-12 w-12" />,
    accent: "border-terracotta",
    href: "/gap-analyse",
  },
  {
    naam: "Implementatietraject",
    vorm: "Projectbasis",
    voorWie: "Organisaties die van bevindingen naar aantoonbare compliance willen.",
    watJeKrijgt: "Begeleiding bij beleid, documentatie en technische maatregelen. Jij houdt de regie.",
    icon: <IllustrationBuild className="h-12 w-12" />,
    accent: "border-ink",
    href: "/aanpak",
  },
  {
    naam: "DPO-as-a-Service",
    vorm: "Maandelijkse retainer",
    voorWie: "Organisaties die een DPO nodig hebben, geen fulltime rol.",
    watJeKrijgt: "Erkend extern aanspreekpunt voor AVG-vraagstukken, meldingen en toezicht.",
    icon: <IllustrationSupport className="h-12 w-12" />,
    accent: "border-muted",
    href: "/dpo-as-a-service",
  },
  {
    naam: "Tabletop exercises & awareness",
    vorm: "Projectbasis / event",
    voorWie: "Teams die theorie willen omzetten in reflex.",
    watJeKrijgt: "Scenario-oefeningen op maat, met rapportage van leerpunten.",
    icon: <IllustrationDialogue className="h-12 w-12" />,
    accent: "border-terracotta-light/60",
    href: "/tabletop-exercises",
  },
  {
    naam: "Fractional GRC-ondersteuning",
    vorm: "Dagprijs, doorlopend",
    voorWie: "Organisaties die af en toe of structureel capaciteit nodig hebben.",
    watJeKrijgt: "Vaste beschikbaarheid, op het ritme dat past.",
    icon: <IllustrationClock className="h-12 w-12" />,
    accent: "border-line",
    href: "/fractional-grc",
  },
];

const HERKENNING = [
  {
    titel: "NIS2 of CyFun raakt jouw organisatie",
    tekst: "Je valt onder de NIS2-richtlijn of een klant/verzekeraar vraagt aantoonbaarheid, maar een interne compliance-officer heb je niet.",
    hoeHelpt: "Een GAP-analyse brengt in kaart of, en op welk niveau, NIS2 of CyFun voor jou geldt — met een concreet stappenplan als resultaat.",
  },
  {
    titel: "Je hebt een DPO nodig, geen fulltime rol",
    tekst: "De AVG verplicht een functionaris gegevensbescherming, maar dat vult geen volledige werkweek.",
    hoeHelpt: "Via DPO-as-a-Service nemen wij die rol extern op: een vast aanspreekpunt, op maandbasis, zonder dat je iemand aanwerft.",
  },
  {
    titel: "Een klant of aanbesteding vraagt ISO 27001",
    tekst: "Certificering is een contractvoorwaarde geworden, geen interne prioriteit.",
    hoeHelpt: "Wij begeleiden het volledige traject, van GAP-analyse tot aantoonbare certificering — jij houdt de regie.",
  },
];

const KADERS = [
  {
    naam: "NIS2",
    tekst: "Raakt je als je in een kritieke sector zit of als een klant het van je leverancier verwacht. Wij bepalen samen of, en op welk niveau, dit voor jou geldt.",
    glyph: <IllustrationNis2 className="h-14 w-14" />,
    accent: "border-terracotta",
    href: "/nis2",
  },
  {
    naam: "ISO 27001",
    tekst: "Vaak geen eigen keuze, maar een voorwaarde van een klant of aanbesteding. Wij begeleiden van GAP-analyse tot aantoonbare certificering.",
    glyph: <IllustrationIso27001 className="h-14 w-14" />,
    accent: "border-terracotta-light",
    href: "/iso-27001",
  },
  {
    naam: "CyberFundamentals",
    tekst: "Het Belgische instapkader onder NIS2, met een niveau dat past bij jouw rol als belangrijke of essentiële entiteit. Wij brengen dat niveau in kaart en bouwen het stap voor stap op.",
    glyph: <IllustrationCyfun className="h-14 w-14" />,
    accent: "border-ink",
    href: "/cyberfundamentals",
  },
  {
    naam: "GDPR",
    tekst: "Een doorlopende verplichting, geen eenmalig project. Als erkend extern DPO nemen wij die rol op zonder dat je iemand aanwerft.",
    glyph: <IllustrationGdpr className="h-14 w-14" />,
    accent: "border-muted",
    href: "/gdpr",
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
              Compliance die je kan bewijzen
            </h1>
            <p
              className="animate-hero-in mt-7 max-w-lg text-lg text-ink/80"
              style={{ animationDelay: "0.1s" }}
            >
              Onafhankelijke compliance-begeleiding voor KMO&apos;s die dat niet zelf kunnen opbouwen, maar
              wel moeten aantonen.
            </p>
            <FrameworkList
              items={[
                { label: "NIS2", href: "/nis2" },
                { label: "ISO 27001", href: "/iso-27001" },
                { label: "CyFun", href: "/cyberfundamentals" },
                { label: "GDPR", href: "/gdpr" },
              ]}
              className="animate-hero-in mt-8"
              style={{ animationDelay: "0.2s" }}
            />
            <p
              className="animate-hero-in mt-3 text-sm text-ink/60"
              style={{ animationDelay: "0.22s" }}
            >
              Niet zeker of dit jouw organisatie raakt?{" "}
              <Link href="/nis2-check" className="text-terracotta hover:underline">
                Doe de korte NIS2-check
              </Link>
              .
            </p>
            <div
              className="animate-hero-in mt-6 flex flex-wrap gap-3"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/over#credentials"
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

      {/* Kaders */}
      <Section className="bg-white pb-0">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          Welke kaders gelden voor jou?
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/70">
          Niet elk kader is voor elke organisatie relevant. Een kort overzicht van waar Millecam in
          gespecialiseerd is.
        </p>
        <RevealGroup
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="h-full"
          items={KADERS.map((k) => (
            <Link key={k.naam} href={k.href} className="block h-full">
              <div
                className={`h-full border-t-4 ${k.accent} bg-[#FBF9F4] p-6 shadow-[0_14px_34px_rgba(33,29,24,0.09)] transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-terracotta-darker hover:bg-white`}
              >
                {k.glyph}
                <h3 className="mt-4 font-serif text-lg font-semibold text-ink">{k.naam}</h3>
                <p className="mt-2 text-sm text-ink/70">{k.tekst}</p>
              </div>
            </Link>
          ))}
        />
      </Section>

      {/* Probleemherkenning */}
      <Section className="bg-white pt-10">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          Compliance is verplicht. Zelf opbouwen is dat niet.
        </h2>
        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x-2 md:divide-terracotta-light"
          itemClassName="md:pl-8 md:first:pl-0"
          items={HERKENNING.map((h) => (
            <Fragment key={h.titel}>
              <h3 className="font-serif text-lg font-semibold text-ink">{h.titel}</h3>
              <p className="mt-3 text-sm text-ink/70">{h.tekst}</p>
              <div className="mt-4 border-l-2 border-terracotta-light/60 bg-[#FBF9F4]/60 py-3 pl-4 pr-3 shadow-[0_6px_16px_rgba(33,29,24,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                  Hoe Millecam helpt
                </p>
                <p className="mt-1.5 text-sm text-ink/70">{h.hoeHelpt}</p>
              </div>
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
          itemClassName="h-full"
          items={DIENSTEN.slice(0, 4).map(({ href, ...d }) => (
            <Link key={d.naam} href={href} className="block h-full">
              <ServiceCard {...d} interactive />
            </Link>
          ))}
        />
        <Link href="/diensten" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Bekijk alle diensten
        </Link>
      </Section>

      {/* Waarom Millecam */}
      <Section dark>
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16">
          <Reveal className="mx-auto w-full max-w-xs md:mx-0 md:max-w-none">
            <div className="bg-white p-3 shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/robin.jpg"
                alt="Robin Millecam"
                width={900}
                height={1125}
                className="w-full"
                sizes="(min-width: 768px) 30vw, 320px"
              />
            </div>
          </Reveal>

          <Reveal>
            <h2 className="max-w-2xl font-serif text-3xl font-semibold">Een specialist, geen callcenter</h2>
            <p className="mt-4 max-w-xl text-sm text-paper/80">
              Ik ben Robin Millecam. Geen team, geen escalatieketen — wie het werk doet, is wie je aan de
              telefoon krijgt.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <PillarGlyph className="mt-1 h-5 w-4 shrink-0" color="#D97A52" />
                <p className="text-sm text-paper/80">
                  Rechtstreeks contact met de persoon die het werk doet: geen junior-consultant, geen
                  escalatieketen.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <PillarGlyph className="mt-1 h-5 w-4 shrink-0" color="#D97A52" />
                <p className="text-sm text-paper/80">
                  Erkend Data Protection Officer (DPI-gecertificeerd). Niet elke GRC-consultant kan die rol
                  zelf opnemen.
                </p>
              </li>
            </ul>

            <div className="mt-10 border-t border-paper/20 pt-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-terracotta-light">
                Uit de praktijk
              </p>
              <ul className="mt-4 space-y-4">
                <li className="text-sm text-paper/80">
                  <span className="font-medium text-paper">ISO 27001-certificatietraject</span> —
                  adtech/SaaS, ±40 medewerkers, begeleiding tot auditfase.
                </li>
                <li className="text-sm text-paper/80">
                  <span className="font-medium text-paper">CyberFundamentals GAP-analyse</span> —
                  accountancy, 11–50 medewerkers, concrete remediatieroadmap.
                </li>
                <li className="text-sm text-paper/80">
                  <span className="font-medium text-paper">Cybersecurity governance &amp; policies</span> —
                  industriële productie, ±50 medewerkers, technische controls vertaald naar praktisch
                  beleid.
                </li>
              </ul>
              <p className="mt-4 text-xs text-paper/50">
                Geanonimiseerde voorbeelden op basis van eerdere consultancy-ervaring, niet als directe
                Millecam-klantreferenties.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
      <TornDivider color="#FFFFFF" />

      {/* Aanpak teaser + Slot CTA */}
      <Section className="bg-white pt-10">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">Hoe een traject verloopt</h2>
        <ScrollTimeline stappen={STAPPEN} />
        <Link href="/aanpak" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Lees meer over de aanpak
        </Link>

        <Reveal className="mx-auto mt-16 max-w-md text-center">
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
