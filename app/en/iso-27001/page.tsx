import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationIso27001 from "@/components/illustrations/IllustrationIso27001";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "ISO 27001 consultant for SMEs in Belgium | Millecam",
  description:
    "ISO/IEC 27001:2022 implementation from GAP analysis to certification audit. Millecam guides Belgian SMEs step by step towards a working ISMS.",
};

const VOORWIE = [
  {
    titel: "A client or tender requires it",
    tekst: "ISO 27001 has become a contractual requirement from a client, insurer or tender — not (only) an internal priority.",
  },
  {
    titel: "Growing team, growing risk",
    tekst: "Information security ran on ad-hoc agreements and loose documents. That no longer scales with the organisation.",
  },
  {
    titel: "The will is there, the time isn't",
    tekst: "You know what an ISMS should look like, but no one on the team has the bandwidth to build it from scratch.",
  },
];

const DELIVERABLES = [
  "GAP analysis against ISO/IEC 27001:2022, scored per control",
  "Scope definition of the ISMS (information security management system)",
  "Risk assessment and risk treatment plan",
  "Statement of Applicability",
  "Policy documents and procedures, tailored to how the organisation actually works",
  "Security objectives aligned with business operations",
  "Collecting and structuring evidence",
  "Internal audit preparation",
  "Management review preparation",
  "Guidance during the certification audit",
  "Remediation of findings from audit or internal review",
];

const STAPPEN = [
  { naam: "GAP analysis", tekst: "Where you stand today against ISO/IEC 27001:2022, resulting in a concrete step-by-step plan." },
  { naam: "Implementation", tekst: "ISMS scope, risk assessment, Statement of Applicability, policy and procedures — built, not just written." },
  { naam: "Certification", tekst: "Internal audit, management review and guidance up to and during the certification audit." },
];

export default function Iso27001Page() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">ISO 27001</span>: an ISMS that actually works, not just on
              paper
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              The international standard for information security. Often a contractual requirement for
              clients or tenders — and a good reason to organise security structurally instead of ad hoc.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact" variant="primary">Discuss your ISO 27001 track</Button>
              <Button href="/en/gap-analysis" variant="secondary">Start with a GAP analysis</Button>
            </div>
          </div>
          <IllustrationIso27001 className="hidden h-28 w-28 shrink-0 md:block" />
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
          A GAP analysis maps out where you stand today against ISO/IEC 27001:2022 — per control, not in
          vague generalities. From there, the ISMS is built: scope, risk assessment, Statement of
          Applicability, policy and procedures that fit how the organisation actually works. Millecam also
          guides the final phase: internal audit, management review and the certification audit itself.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">How an ISO 27001 track unfolds</h2>
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
              An ISMS an auditor can review without surprises: evidence that holds up, policy that&apos;s
              actually followed, and a certificate that demonstrates what actually happens — not just what
              is written on paper.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Why Millecam</h2>
            <p className="mt-4 text-ink/70">
              One fixed point of contact, no rotating team. Direct contact with whoever does the work —
              pragmatic implementation instead of purely theoretical advice.{" "}
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
            Discuss your ISO 27001 track
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
