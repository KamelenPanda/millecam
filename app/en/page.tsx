import { Fragment } from "react";
import type { Metadata } from "next";
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
import { selfAssessment as selfAssessmentDict } from "@/lib/content/en";

export const metadata: Metadata = {
  title: "Millecam: Govern with confidence.",
  description:
    "Independent GRC expertise for SMEs that can't build compliance in-house, but still have to demonstrate it. NIS2 · ISO 27001 · CyFun · GDPR.",
};

const DIENSTEN = [
  {
    naam: "GAP analysis",
    vorm: "Fixed price, short track",
    voorWie: "Organisations that want to know where they stand against NIS2, ISO 27001 or CyFun.",
    watJeKrijgt: "A report with scoring per control, prioritised findings and a concrete action plan.",
  },
  {
    naam: "Implementation track",
    vorm: "Project basis",
    voorWie: "Organisations that want to turn findings into demonstrable compliance.",
    watJeKrijgt: "Guidance on policy, documentation and technical measures. You stay in control.",
  },
  {
    naam: "DPO-as-a-Service",
    vorm: "Monthly retainer",
    voorWie: "Organisations that need a DPO, not a full-time role.",
    watJeKrijgt: "A recognised external point of contact for GDPR questions, breach notifications and oversight.",
  },
  {
    naam: "Tabletop exercises & awareness",
    vorm: "Project basis / event",
    voorWie: "Teams that want to turn theory into reflex.",
    watJeKrijgt: "Tailored scenario exercises, with a report of lessons learned.",
  },
  {
    naam: "Fractional GRC support",
    vorm: "Day rate, ongoing",
    voorWie: "Organisations that need capacity occasionally or structurally.",
    watJeKrijgt: "Consistent availability, at whatever pace fits.",
  },
];

const HERKENNING = [
  {
    titel: "NIS2 or CyFun affects your organisation",
    tekst:
      "You fall under the NIS2 directive, or a client/insurer is asking for proof of compliance — but you don't have an in-house compliance officer.",
  },
  {
    titel: "You need a DPO, not a full-time role",
    tekst: "GDPR requires a data protection officer, but that role doesn't fill a full working week.",
  },
  {
    titel: "A client or tender requires ISO 27001",
    tekst: "Certification has become a contractual requirement, not an internal priority.",
  },
];

const STAPPEN = [
  { naam: "GAP analysis", tekst: "Where you stand today, measured against the framework that's relevant to you." },
  { naam: "Implementation", tekst: "Findings translated into policy, procedures and technical measures." },
  { naam: "Support", tekst: "A fixed point of contact that stays, without you having to hire anyone." },
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
              Independent GRC expertise for SMEs that can&apos;t build compliance in-house, but still have to
              demonstrate it.
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
                href="/en/about"
                className="inline-flex items-center border border-white/70 bg-white/40 px-4 py-2 text-xs font-medium text-ink shadow-[0_4px_14px_rgba(33,29,24,0.06)] backdrop-blur-md transition-colors hover:bg-white/60"
              >
                Certified Data Protection Officer
              </Link>
              <a
                href="https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=1026876048"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center border border-white/70 bg-white/40 px-4 py-2 text-xs font-medium text-ink shadow-[0_4px_14px_rgba(33,29,24,0.06)] backdrop-blur-md transition-colors hover:bg-white/60"
              >
                Belgian company no. BE 1026.876.048
              </a>
            </div>
            <div className="animate-hero-in" style={{ animationDelay: "0.4s" }}>
              <Button href="/en/contact" variant="primary" className="mt-9">
                Book a free consultation
              </Button>
            </div>
          </div>

          <div className="animate-hero-in" style={{ animationDelay: "0.25s" }}>
            <div className="bg-white p-6 shadow-[0_28px_70px_rgba(33,29,24,0.14)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                Try it yourself
              </p>
              <p className="mt-1 text-sm text-ink/70">
                This is how scoring works in a GAP analysis.
              </p>
              <div className="mt-6">
                <SelfAssessment dict={selfAssessmentDict} />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <TornDivider color="#FFFFFF" />

      {/* Probleemherkenning */}
      <Section className="bg-white pt-10">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          Compliance is mandatory. Building it yourself isn&apos;t.
        </h2>
        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x-2 md:divide-terracotta-light"
          itemClassName="md:pl-8 md:first:pl-0"
          items={HERKENNING.map((h) => (
            <Fragment key={h.titel}>
              <h3 className="font-serif text-lg font-semibold text-ink">{h.titel}</h3>
              <p className="mt-3 text-sm text-ink/70">{h.tekst}</p>
            </Fragment>
          ))}
        />
        <p className="mt-8 italic text-muted">
          Recognise one of these? That&apos;s exactly what Millecam exists for. Not sure whether NIS2 applies
          to you?{" "}
          <Link href="/en/nis2-check" className="not-italic text-terracotta hover:underline">
            Take the short NIS2 check
          </Link>
          .
        </p>
      </Section>

      {/* Diensten teaser */}
      <Section className="bg-white">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">
          From first insight to ongoing support
        </h2>
        <RevealGroup
          className="mt-10 grid gap-6 md:grid-cols-2"
          items={DIENSTEN.map((d) => (
            <ServiceCard key={d.naam} {...d} />
          ))}
        />
        <Link href="/en/services" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          View all services
        </Link>
      </Section>

      {/* Waarom Millecam */}
      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">A specialist, not a call centre</h2>
        <RevealGroup
          as="ul"
          itemAs="li"
          className="mt-10 grid gap-6 md:grid-cols-3"
          itemClassName="text-paper/80"
          items={[
            <Fragment key="1">
              <PillarGlyph className="h-5 w-4" color="#D97A52" />
              <p className="mt-3 text-sm">
                Direct contact with the person doing the work: no junior consultant, no escalation chain.
              </p>
            </Fragment>,
            <Fragment key="2">
              <PillarGlyph className="h-5 w-4" color="#D97A52" />
              <p className="mt-3 text-sm">
                Certified Data Protection Officer (DPI-certified). Not every GRC consultant can take on
                that role themselves.
              </p>
            </Fragment>,
            <Fragment key="3">
              <PillarGlyph className="h-5 w-4" color="#D97A52" />
              <p className="mt-3 text-sm">
                A proven approach across CyFun, ISO 27001 and NIS2 projects, from GAP analysis to full
                implementation.
              </p>
            </Fragment>,
          ]}
        />
      </Section>
      <TornDivider color="#FFFFFF" />

      {/* Aanpak teaser + Slot CTA */}
      <Section className="bg-white pt-10">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-ink">How an engagement unfolds</h2>
        <ScrollTimeline stappen={STAPPEN} />
        <Link href="/en/approach" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          Read more about the approach
        </Link>

        <Reveal className="mx-auto mt-16 max-w-md pt-10 text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Ready to get started?</h2>
          <p className="mt-3 text-sm text-ink/70">
            A no-obligation thirty-minute conversation is enough to find out if, and how, Millecam can
            help.
          </p>
          <Button href="/en/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Book a free consultation
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
