import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import IllustrationSupport from "@/components/illustrations/IllustrationSupport";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";

export const metadata: Metadata = {
  title: "DPO-as-a-Service | External DPO in Belgium | Millecam",
  description:
    "A recognised, external Data Protection Officer on a monthly basis — for organisations that need a DPO, not a full-time role.",
};

const WHOFOR = [
  {
    titel: "A statutory DPO obligation",
    tekst: "Public authorities, organisations with large-scale processing, or organisations processing special categories of personal data, must appoint a DPO.",
  },
  {
    titel: "An 'accidental' internal DPO",
    tekst: "Someone on the team was handed the DPO role without the time, independence or background to take it on properly.",
  },
  {
    titel: "Need for a recognised point of contact",
    tekst: "Clients, staff or the supervisory authority expect a clear, externally recognisable point of contact for privacy questions.",
  },
];

const DELIVERABLES = [
  "Appointment as external DPO, including registration with the Belgian Data Protection Authority",
  "Fixed, periodic consultation with the organisation",
  "Advice on new processing activities and DPIAs",
  "Point of contact for the supervisory authority and for data subjects (e.g. for an access request)",
  "Follow-up on data breach notification obligations",
  "Annual report to management on the state of affairs",
];

const STAPPEN = [
  { naam: "Introduction & scoping", tekst: "Which processing activities, risks and expectations are involved." },
  { naam: "Taking over the DPO role", tekst: "Formal appointment and registration with the supervisory authority." },
  { naam: "Ongoing support", tekst: "A fixed rhythm of consultation, advice and reporting." },
];

export default function DpoAsAServicePage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <PillarGlyph className="mb-4 h-6 w-5" />
            <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
              <span className="text-terracotta">DPO-as-a-Service</span>: an external DPO, not a full-time role
            </h1>
            <p className="mt-4 max-w-xl text-ink/70">
              GDPR requires a Data Protection Officer in certain cases, but the role rarely fills a full
              working week. DPO-as-a-Service provides a recognised external point of contact, on a
              monthly basis, without hiring.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/en/contact" variant="primary">Discuss DPO-as-a-Service</Button>
              <Button href="/en/gdpr" variant="secondary">More about GDPR</Button>
            </div>
          </div>
          <IllustrationSupport className="hidden h-28 w-28 shrink-0 md:block" />
        </div>
      </Section>

      <Section className="bg-white pt-10">
        <h2 className="font-serif text-3xl font-semibold text-ink">Who is this relevant for?</h2>
        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x-2 md:divide-terracotta-light"
          itemClassName="md:pl-8 md:first:pl-0"
          items={WHOFOR.map((v) => (
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
          Robin takes on the statutory DPO role as a certified Data Protection Officer (DPI-certified,
          since February 2025) — overseeing compliance, advising on processing activities and DPIAs, and
          acting as the point of contact for both the supervisory authority and data subjects, on a
          fixed, predictable rhythm.
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
        <h2 className="font-serif text-3xl font-semibold text-ink">How this works in practice</h2>
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
          More about our approach
        </Link>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">Result</h2>
            <p className="mt-4 text-ink/70">
              A DPO function that actually works — not just a name on a GDPR register — without the cost
              and risk of a mis-hire.
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
            Discuss DPO-as-a-Service
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
