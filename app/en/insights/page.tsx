import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import PillarGlyph from "@/components/PillarGlyph";
import RevealGroup from "@/components/RevealGroup";
import { ARTICLES_EN } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | Millecam",
  description: "Practical guidance on NIS2, ISO 27001, CyFun and GDPR — written from consultancy experience, not a marketing calendar.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function InsightsPage() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <PillarGlyph className="mb-4 h-6 w-5" />
        <h1 className="max-w-2xl font-serif text-4xl font-bold text-ink">
          Insights on <span className="text-terracotta">compliance in practice</span>
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          No content calendar — just guidance on what actually goes wrong or surprises people in real projects.
        </p>
      </Section>

      <Section className="bg-white pt-6">
        <RevealGroup
          className="grid gap-6 md:grid-cols-2"
          itemClassName="h-full"
          items={ARTICLES_EN.map((a) => (
            <Link
              key={a.slug}
              href={`/en/insights/${a.slug}`}
              className="flex h-full flex-col border-l-2 border-terracotta bg-[#FBF9F4] py-6 pl-6 pr-5 shadow-[0_14px_34px_rgba(33,29,24,0.09)] transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-terracotta-darker hover:bg-white"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">{a.framework}</p>
              <h2 className="mt-2 font-serif text-xl font-semibold text-ink">{a.title}</h2>
              <p className="mt-3 flex-1 text-sm text-ink/70">{a.dek}</p>
              <p className="mt-4 text-xs text-muted">
                {formatDate(a.publishedAt)} · {a.readingTime} read
              </p>
            </Link>
          ))}
        />
      </Section>
    </>
  );
}
