import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import PillarGlyph from "@/components/PillarGlyph";
import FrameworkGrid from "@/components/FrameworkGrid";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";
import IllustrationNis2 from "@/components/illustrations/IllustrationNis2";
import IllustrationIso27001 from "@/components/illustrations/IllustrationIso27001";
import IllustrationCyfun from "@/components/illustrations/IllustrationCyfun";
import IllustrationGdpr from "@/components/illustrations/IllustrationGdpr";

export const metadata: Metadata = {
  title: "Services | Millecam",
  description: "GAP analysis, implementation tracks, DPO-as-a-Service, tabletop exercises and fractional GRC support.",
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
    watJeKrijgt: "A recognised external point of contact for GDPR questions, breach notifications and processing oversight.",
  },
  {
    naam: "Tabletop exercises & awareness",
    vorm: "Project basis / event",
    voorWie: "Teams that want to turn theory into reflex — before an incident, not after.",
    watJeKrijgt: "Tailored, interactive scenario exercises, with a concrete report of lessons learned.",
  },
  {
    naam: "Fractional GRC support",
    vorm: "Day rate, ongoing",
    voorWie: "Organisations that need compliance capacity occasionally (or structurally) without hiring.",
    watJeKrijgt: "Consistent availability, at whatever pace fits.",
  },
];

const FRAMEWORKS = [
  {
    naam: "NIS2",
    tekst: "European cybersecurity directive for essential and important entities, relevant from a certain size or sector onward.",
    glyph: <IllustrationNis2 className="h-14 w-14 shrink-0" />,
  },
  {
    naam: "ISO 27001",
    tekst: "International standard for information security. Often a contractual requirement for clients or tenders.",
    glyph: <IllustrationIso27001 className="h-14 w-14 shrink-0" />,
  },
  {
    naam: "CyFun",
    tekst: "Belgium's CyberFundamentals framework from the Centre for Cybersecurity Belgium: an accessible alternative for demonstrating NIS2 compliance.",
    glyph: <IllustrationCyfun className="h-14 w-14 shrink-0" />,
  },
  {
    naam: "GDPR",
    tekst: "European privacy legislation, applicable to virtually every organisation that processes personal data.",
    glyph: <IllustrationGdpr className="h-14 w-14 shrink-0" />,
  },
];

export default function DienstenPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <PillarGlyph className="mb-4 h-6 w-5" />
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          From a first <span className="text-terracotta">GAP analysis</span> to ongoing support
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          An offering that grows with what you need, not with whatever happens to be in a package.
        </p>
      </Section>

      <Section className="bg-white pt-10">
        <RevealGroup
          className="grid gap-6 md:grid-cols-2"
          items={DIENSTEN.map((d) => (
            <ServiceCard key={d.naam} {...d} />
          ))}
        />
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">What Millecam specialises in</h2>
        <div className="mt-8">
          <FrameworkGrid frameworks={FRAMEWORKS} />
        </div>
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md pt-14 text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Not sure which service fits?</h2>
          <p className="mt-3 text-sm text-ink/70">
            Schedule a no-obligation conversation. Within thirty minutes you&apos;ll know which approach
            fits your situation.
          </p>
          <Button href="/en/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Schedule a conversation
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
