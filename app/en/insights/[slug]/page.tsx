import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PillarGlyph from "@/components/PillarGlyph";
import Reveal from "@/components/Reveal";
import { ARTICLES_EN, getArticleEn } from "@/lib/insights";

export function generateStaticParams() {
  return ARTICLES_EN.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleEn(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Millecam`,
    description: article.dek,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleEn(slug);
  if (!article) notFound();

  return (
    <Section className="pb-24 pt-16">
      <Reveal className="mx-auto max-w-2xl">
        <Link href="/en/insights" className="text-sm text-ink/60 hover:text-terracotta hover:underline">
          ← All insights
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-terracotta">{article.framework}</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg text-ink/70">{article.dek}</p>
        <p className="mt-4 text-xs text-muted">
          Robin Millecam · {formatDate(article.publishedAt)} · {article.readingTime} read
        </p>

        <div className="insight-body mt-10">{article.body}</div>

        <div className="mt-14 border-l-2 border-terracotta bg-[#FBF9F4] py-6 pl-6 pr-5 shadow-[0_14px_34px_rgba(33,29,24,0.09)]">
          <PillarGlyph className="h-5 w-4" />
          <p className="mt-3 text-sm text-ink/70">
            Wondering how this applies to your organisation?{" "}
            <Link href={article.relatedHref} className="text-terracotta hover:underline">
              {article.relatedLabel}
            </Link>
            , or{" "}
            <Link href="/en/contact" className="text-terracotta hover:underline">
              schedule a conversation right away
            </Link>
            .
          </p>
        </div>

        <Button href="/en/contact" variant="primary" className="mt-8">
          Schedule a no-obligation conversation
        </Button>
      </Reveal>
    </Section>
  );
}
