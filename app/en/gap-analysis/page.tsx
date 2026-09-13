import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationGap from "@/components/illustrations/IllustrationGap";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "GAP analysis for compliance | NIS2, ISO 27001, CyFun | Millecam",
  description:
    "A fixed-price GAP analysis against NIS2, ISO 27001, CyberFundamentals or GDPR: clear insight into where you stand, before you invest in implementation.",
};

const VOORWIE = [
  {
    titel: "See first, invest after",
    tekst: "You want to know how big the gap is before starting an implementation track.",
  },
  {
    titel: "Unsure which framework fits",
    tekst: "NIS2, ISO 27001 or CyberFundamentals — which framework fits, and at what level, isn't clear yet.",
  },
  {
    titel: "Having an existing programme checked",
    tekst: "A compliance effort is already underway, but no one has had it objectively checked for adequacy.",
  },
];

const DELIVERABLES = [
  "GAP report with scoring per control (documentation and implementation)",
  "Prioritisation of findings: critical, important, and nice-to-have",
  "Concrete action plan with a realistic estimate of the effort involved",
  "Substantiated advice on the most suitable framework or level, if not yet chosen",
  "Presentation of the results to management or the responsible team",
];

const STAPPEN = [
  { naam: "Intake & framework choice", tekst: "Which framework (or level) is relevant for this organisation." },
  { naam: "Document review & interviews", tekst: "This is where most of the timeline goes." },
  { naam: "Report & action plan", tekst: "The findings, prioritised and concrete." },
];

export default function GapAnalysisPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">GAP analysis</span>: know where you stand, before you invest
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              A fixed-price, short engagement that maps out where your organisation stands today against
              a chosen framework — NIS2, ISO 27001, CyberFundamentals or GDPR — before you invest in a
              full implementation track.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact" variant="primary">Start a GAP analysis</Button>
              <Button href="/en/nis2-check" variant="secondary">Not sure which framework?</Button>
            </div>
          </div>
          <IllustrationGap className="hidden h-28 w-28 shrink-0 md:block" />
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
      </Section>

      <Section>
        <h2 className="font-serif text-3xl font-semibold text-ink">What Millecam does</h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          Document review, interviews with responsible staff, and two-dimensional scoring —
          documentation and effective implementation — per control of the chosen framework. The result
          is a clear picture, not a jargon-filled report.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">How a GAP analysis unfolds</h2>
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
              A substantiated basis for deciding — whether to invest further, and in exactly what, instead
              of guessing.
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
            Start a GAP analysis
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
