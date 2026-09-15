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
  title: "NIS2 consultant for SMEs in Belgium | Millecam",
  description:
    "Does your organisation fall under NIS2 and do you have no internal compliance officer? Millecam guides Belgian SMEs from scoping and GAP analysis to demonstrable compliance.",
};

const VOORWIE = [
  {
    titel: "Essential or important entity",
    tekst: "Your organisation falls under one of the NIS2 sectors (energy, transport, digital infrastructure, healthcare, and more) and exceeds the size threshold.",
  },
  {
    titel: "A client or insurer asks for demonstrability",
    tekst: "You supply an essential or important entity, and they ask you to prove for yourself that your risk management is in order.",
  },
  {
    titel: "No internal compliance officer",
    tekst: "You know NIS2 is relevant, but no one on the team has the time or background to set this up structurally.",
  },
];

const DELIVERABLES = [
  "Scoping analysis: whether you fall under NIS2, and as an essential or important entity",
  "GAP report against the NIS2 risk management measures (Article 21), with scoring per measure",
  "Prioritised action plan with ownership and a realistic timeline",
  "Tailored policy documents and procedures: access management, supplier management, business continuity, incident response",
  "Incident notification procedure aligned with the NIS2 reporting deadlines",
  "Preparation of the management body for its NIS2 responsibility and reporting structure",
  "Support during verification or oversight by the competent authority",
];

const STAPPEN = [
  { naam: "Scoping & GAP analysis", tekst: "Whether you fall under NIS2, and where you stand today against the risk management measures." },
  { naam: "Implementation", tekst: "Findings translated into policy, procedures and technical measures — you stay in control." },
  { naam: "Demonstrability", tekst: "Documentation and evidence in order, ready for a possible audit." },
];

export default function Nis2Page() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">NIS2</span>: from directive to demonstrable compliance
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              The European cybersecurity directive for essential and important entities, transposed into
              Belgian law. Relevant from a certain size or sector onward — with director liability if
              nothing is done about it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact" variant="primary">Discuss your NIS2 track</Button>
              <Button href="/en/nis2-check" variant="secondary">Take the short NIS2 check</Button>
            </div>
          </div>
          <IllustrationNis2 className="hidden h-28 w-28 shrink-0 md:block" />
        </div>
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Who is this relevant for?</h2>
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
          Not sure whether this affects your organisation?{" "}
          <Link href="/en/nis2-check" className="text-terracotta hover:underline">
            Take the short NIS2 check
          </Link>
          .
        </p>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">What Millecam does</h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          A scoping analysis determines whether, and as what, your organisation falls under NIS2. This is
          followed by a GAP analysis against the risk management measures from Article 21: where you stand
          today, scored on both documentation and effective implementation. Findings are translated into a
          concrete action plan — not eighty pages of jargon, but a list of what needs to happen first, and
          by whom.
        </p>
      </Section>

      <Section dark>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold">What you actually get</h2>
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
        <h2 className="font-serif text-3xl font-semibold text-ink">How a NIS2 track unfolds</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STAPPEN.map((s, i) => (
            <div key={s.naam} className="border-l-2 border-terracotta bg-[#FBF9F4] py-5 pl-5 pr-4 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
              <p className="text-xs font-medium text-muted">Step {i + 1}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{s.naam}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.tekst}</p>
            </div>
          ))}
        </div>
        <Link href="/en/approach" className="mt-8 inline-block text-sm font-medium text-terracotta hover:underline">
          More about the approach
        </Link>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Result</h2>
            <p className="mt-4 text-ink/70">
              Demonstrable compliance with the NIS2 risk management measures: working risk management
              instead of documentation alone, a management body that knows its responsibility, and an
              incident notification process that is ready before it is needed.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Why Millecam</h2>
            <p className="mt-4 text-ink/70">
              One fixed point of contact, no rotating team. Direct contact with whoever does the work —
              no junior consultant, no escalation chain.{" "}
              <Link href="/en/about#credentials" className="text-terracotta hover:underline">
                More about Robin
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <Reveal className="mx-auto max-w-md text-center">
          <PillarGlyph className="mx-auto h-6 w-5" />
          <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Ready to get started?</h2>
          <p className="mt-3 text-sm text-ink/70">
            A no-obligation thirty-minute conversation is enough to determine whether, and how, Millecam
            can help.
          </p>
          <Button href="/en/contact" variant="primary" className="mx-auto mt-6 w-fit">
            Discuss your NIS2 track
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
