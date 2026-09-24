import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationGdpr from "@/components/illustrations/IllustrationGdpr";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "GDPR consultant for SMEs in Belgium | Millecam",
  description:
    "GDPR GAP analysis, record of processing activities, DPIAs and data breach procedures. Set up in practice, not just a privacy statement on the website.",
};

const VOORWIE = [
  {
    titel: "No record of processing activities or DPIA process",
    tekst: "The organisation processes personal data, but has no up-to-date record of processing activities and no process to assess new processing activities.",
  },
  {
    titel: "DPO obligation, no internal candidate",
    tekst: "A legal DPO obligation applies, but no one on the team has the time, independence or background to take on that role.",
  },
  {
    titel: "Wanting structure after an incident",
    tekst: "A complaint, data breach or audit has revealed that privacy has been handled ad hoc until now.",
  },
];

const DELIVERABLES = [
  "GAP analysis against GDPR obligations",
  "Record of processing activities, built and kept maintainable",
  "Working process and template for DPIAs (Data Protection Impact Assessments)",
  "Data breach notification procedure within the legal 72-hour deadline",
  "Review or drafting of data processing agreements with suppliers",
  "Tailored privacy policy and statements, no boilerplate",
  "Team awareness training on the key obligations",
];

const STAPPEN = [
  { naam: "GAP analysis", tekst: <>Where you stand today against GDPR obligations.</> },
  { naam: "Build-up", tekst: <>Record of processing activities, DPIA process and procedures in place.</> },
  {
    naam: "Ongoing support",
    tekst: (
      <>
        Through{" "}
        <Link href="/en/dpo-as-a-service" className="text-terracotta hover:underline">
          DPO-as-a-Service
        </Link>{" "}
        you keep a fixed point of contact.
      </>
    ),
  },
];

export default function GdprPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">GDPR</span>: from privacy statement to a working
              programme
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              GDPR is European privacy legislation, applicable to virtually every organisation that
              processes personal data, but a privacy statement on the website is not the same as a
              working privacy programme.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact" variant="primary">Discuss your GDPR journey</Button>
              <Button href="/en/dpo-as-a-service" variant="secondary">Discover DPO-as-a-Service</Button>
            </div>
          </div>
          <IllustrationGdpr className="hidden h-28 w-28 shrink-0 md:block" />
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
          A GAP analysis against GDPR obligations, followed by building a record of processing
          activities, a workable DPIA process, and reviewing or drafting data processing agreements:
          with attention to what&apos;s practically feasible for an SME, not a compliance programme built
          for a multinational.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">How a GDPR journey unfolds</h2>
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
              A privacy programme that holds up under a complaint, audit or data breach, not just a
              folder of documents that never gets consulted.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Why Millecam</h2>
            <p className="mt-4 text-ink/70">
              One fixed point of contact, no rotating team. Direct contact with the person doing the
              work: no junior consultant, no escalation chain.{" "}
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
            Discuss your GDPR journey
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
