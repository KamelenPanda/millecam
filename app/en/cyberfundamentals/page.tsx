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
  title: "CyberFundamentals (CyFun) consultant in Belgium | Millecam",
  description:
    "CyFun GAP analysis and level determination (Basic, Important, Essential) for Belgian SMEs: an accessible alternative for demonstrating NIS2 compliance.",
};

const VOORWIE = [
  {
    titel: "Looking for NIS2 demonstrability, pragmatically",
    tekst: "SMEs that need to demonstrate NIS2 compliance, but don't want to launch a full ISO 27001 certification track right away.",
  },
  {
    titel: "A client or contracting authority asks for a level",
    tekst: "A client or public tender requires demonstrability at a specific CyFun level (Basic, Important or Essential).",
  },
  {
    titel: "Unsure which framework to start with",
    tekst: "Organisations that aren't sure whether NIS2, CyFun or ISO 27001 is the right starting point, and want pragmatic advice first.",
  },
];

const DELIVERABLES = [
  "GAP analysis against the chosen CyFun level (Basic, Important or Essential)",
  "A substantiated level determination: which level fits the organisation's risks and obligations",
  "A prioritised remediation roadmap",
  "Policy and procedure documentation aligned with the chosen level",
  "Support with the self-assessment and any verification",
  "Where relevant: a clear bridge to broader NIS2 demonstrability",
];

const STAPPEN = [
  { naam: "GAP analysis & level determination", tekst: "Where you stand today, and which level is realistic." },
  { naam: "Remediation", tekst: "Findings translated into concrete measures and documentation." },
  { naam: "Self-assessment", tekst: "Support in completing and, where applicable, verifying the self-assessment." },
];

export default function CyberfundamentalsPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">CyberFundamentals (CyFun)</span>: NIS2 demonstrability
              without overkill
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              CyFun is the Belgian self-assessment framework from the Centre for Cybersecurity Belgium
              (CCB), with three levels (Basic, Important, Essential) offering a more accessible entry
              point than full ISO 27001 certification for anyone seeking NIS2 demonstrability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact" variant="primary">Discuss your CyberFundamentals track</Button>
              <Button href="/en/nis2-check" variant="secondary">Take the short NIS2 check</Button>
            </div>
          </div>
          <IllustrationCyfun className="hidden h-28 w-28 shrink-0 md:block" />
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
          A GAP analysis against the chosen or still-to-be-determined CyFun level (Basic, Important or
          Essential) maps out where you stand today. This comes with honest advice on which level is
          realistic and sufficient for the organisation&apos;s actual risks and obligations (not
          automatically the highest), followed by a prioritised remediation plan.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">How a CyberFundamentals track unfolds</h2>
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
              Demonstrable compliance at the level that actually matters, without wasting time and budget
              on a heavier track than necessary.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Why Millecam</h2>
            <p className="mt-4 text-ink/70">
              One fixed point of contact, no rotating team. Direct contact with whoever does the work:
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
            Discuss your CyberFundamentals track
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
