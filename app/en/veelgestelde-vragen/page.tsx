import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";

export const metadata: Metadata = {
  title: "FAQ | Millecam",
  description: "Answers to frequently asked questions about NIS2, ISO 27001, CyFun, GDPR and working with Millecam.",
};

const FAQS = [
  {
    vraag: "What's the difference between NIS2, ISO 27001, CyFun and GDPR?",
    antwoord:
      "NIS2 is a European directive, a legal obligation for certain sectors and organisation sizes. ISO 27001 is an international standard, voluntary but often contractually required by clients or tenders. CyFun is a Belgian self-assessment framework from the Centre for Cybersecurity Belgium, a more accessible alternative for demonstrating NIS2 compliance. GDPR is European privacy legislation, applicable to virtually every organisation that processes personal data. They overlap partly, for example on information security controls, but each serves a different purpose.",
  },
  {
    vraag: "Does my company fall under NIS2?",
    antwoord:
      "That depends on your sector and size: medium and large organisations in designated sectors (such as energy, transport, digital infrastructure and healthcare) generally fall under the directive. A short scoping check during an introductory call quickly clarifies your situation.",
  },
  {
    vraag: "How long does a GAP analysis take?",
    antwoord:
      "Usually a few weeks, depending on the size of the organisation and the chosen framework. Document review and interviews take up most of the time; how quickly documentation and access are available also affects the timeline.",
  },
  {
    vraag: "Can Millecam act as our external DPO?",
    antwoord:
      "Yes. Robin is a DPI-certified Data Protection Officer and takes on that role externally through DPO-as-a-Service, on a monthly basis.",
  },
  {
    vraag: "Does Millecam only work with SMEs?",
    antwoord:
      "The focus is on SMEs, because they rarely have an in-house compliance officer yet still have to meet the same requirements as larger organisations. Larger engagements are negotiable, on request.",
  },
  {
    vraag: "What does an engagement with Millecam cost?",
    antwoord:
      "That depends on the service: a GAP analysis has a fixed price, an implementation track is estimated per project, and DPO-as-a-Service or fractional support run on a monthly or day rate. A concrete figure follows only after a short intake call.",
  },
  {
    vraag: "Is a first conversation non-binding?",
    antwoord:
      "Yes. An introduction of around thirty minutes is free and non-binding, and serves to determine if, and how, Millecam can help.",
  },
  {
    vraag: "Do you work together with other IT or security partners?",
    antwoord:
      "Yes. GRC advice is often separate from technical implementation. Millecam works alongside a client's existing IT partners where useful, or refers out when needed.",
  },
];

export default function FAQPage() {
  return (
    <Section className="pb-24 pt-16">
      <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">Frequently asked questions</h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Don&apos;t see your question? Ask it directly through the contact form.
      </p>

      <div className="mt-10 max-w-2xl divide-y divide-line border-t border-line">
        {FAQS.map((f) => (
          <details key={f.vraag} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg font-semibold text-ink">
              {f.vraag}
              <span className="mt-1 shrink-0 text-2xl font-normal leading-none text-terracotta transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">{f.antwoord}</p>
          </details>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-md pt-14 text-center">
        <PillarGlyph className="mx-auto h-6 w-5" />
        <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">Have another question?</h2>
        <p className="mt-3 text-sm text-ink/70">
          A short conversation often answers more than a list of questions.
        </p>
        <Button href="/en/contact" variant="primary" className="mx-auto mt-6 w-fit">
          Book a call
        </Button>
      </div>
    </Section>
  );
}
