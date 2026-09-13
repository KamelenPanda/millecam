"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import PillarGlyph from "./PillarGlyph";
import { pageHref, type Locale } from "@/lib/i18n";
import type { FrameworkCheckerDict } from "@/lib/content/types";

const NL_DICT: FrameworkCheckerDict = {
  sectoren: [
    "Energie, water of afvalbeheer",
    "Transport of logistiek",
    "Bankwezen of financiële infrastructuur",
    "Gezondheidszorg",
    "Digitale infrastructuur (cloud, hosting, datacenters)",
    "ICT-dienstverlening aan andere bedrijven",
    "Overheid",
    "Voedingsindustrie",
    "Andere / geen van deze",
  ],
  groottes: [
    "Minder dan 50 medewerkers én minder dan €10 miljoen omzet",
    "50 tot 249 medewerkers, of €10 tot 50 miljoen omzet",
    "250 of meer medewerkers, of meer dan €50 miljoen omzet",
  ],
  jaNeeNietZeker: ["Ja", "Nee", "Niet zeker"],
  vragen: [
    "In welke sector is je organisatie actief?",
    "Hoeveel medewerkers (of jaaromzet) telt je organisatie?",
    "Vraagt een klant, verzekeraar of overheidsinstantie je al om aantoonbaarheid rond cybersecurity of gegevensbescherming?",
    "Vraagt een klant, verzekeraar of aanbesteding specifiek een ISO 27001-certificaat?",
  ],
  questionOf: "Vraag {step} van {total}",
  previous: "Vorige vraag",
  resultTitle: "Jouw indicatie per kader",
  resultIntro:
    "Gebaseerd op vier korte vragen — geen juridisch sluitend antwoord. Een GAP-analyse geeft zekerheid.",
  ctaPrimary: "Bespreek je situatie",
  restart: "Opnieuw beginnen",
  relevantieLabels: {
    waarschijnlijk: "Waarschijnlijk relevant",
    mogelijk: "Mogelijk relevant",
    minderWaarschijnlijk: "Minder waarschijnlijk",
    vrijwelAltijd: "Vrijwel altijd relevant",
  },
  frameworks: {
    nis2: {
      naam: "NIS2",
      waarschijnlijk: {
        titel: "Waarschijnlijk relevant",
        tekst: "Op basis van je sector en omvang val je vermoedelijk onder NIS2.",
      },
      mogelijkSector: {
        titel: "Mogelijk relevant",
        tekst: "Je sector is relevant, maar de omvang ligt onder de gebruikelijke NIS2-drempel — dat kan uitzonderingen kennen voor kritieke diensten.",
      },
      mogelijkGevraagd: {
        titel: "Mogelijk relevant",
        tekst: "Niet je sector op zich, maar de vraag van een klant of verzekeraar wijst wel richting aantoonbaarheid.",
      },
      minderWaarschijnlijk: {
        titel: "Minder waarschijnlijk",
        tekst: "Op basis van sector en omvang lijkt NIS2 nu niet van toepassing.",
      },
    },
    cyfun: {
      naam: "CyFun",
      waarschijnlijk: {
        titel: "Waarschijnlijk relevant",
        tekst: "Een toegankelijk alternatief om toch aantoonbaar te zijn, zonder meteen een zwaar NIS2-traject te starten.",
      },
      mogelijk: {
        titel: "Mogelijk relevant",
        tekst: "Ook zonder directe NIS2-druk een bruikbare basis voor wie structureel met cybersecurity aan de slag wil.",
      },
    },
    iso27001: {
      naam: "ISO 27001",
      waarschijnlijk: {
        titel: "Waarschijnlijk relevant",
        tekst: "Een klant of aanbesteding vraagt er specifiek naar — vaak het directe startpunt voor een ISO 27001-traject.",
      },
      mogelijk: {
        titel: "Mogelijk relevant",
        tekst: "Nu (nog) geen expliciete vraag, maar vaak alsnog relevant zodra een klant of aanbesteding het gaat eisen.",
      },
    },
    gdpr: {
      naam: "GDPR / AVG",
      tekst: "Van toepassing op vrijwel elke organisatie die persoonsgegevens verwerkt — ongeacht sector of omvang.",
    },
  },
};

type Answers = {
  sector?: string;
  grootte?: string;
  gevraagd?: string;
  isoGevraagd?: string;
};

type Relevantie = "waarschijnlijk" | "mogelijk" | "minderWaarschijnlijk" | "vrijwelAltijd";

type Verdict = { naam: string; relevantie: Relevantie; tekst: string; href: string };

function computeVerdicts(a: Answers, dict: FrameworkCheckerDict, locale: Locale): Verdict[] {
  const inSector = a.sector !== dict.sectoren[dict.sectoren.length - 1];
  const groot = a.grootte !== dict.groottes[0];
  const gevraagd = a.gevraagd === dict.jaNeeNietZeker[0];
  const isoGevraagd = a.isoGevraagd === dict.jaNeeNietZeker[0];
  const nis2Groot = inSector && groot;
  const f = dict.frameworks;

  const nis2: Verdict = nis2Groot
    ? { naam: f.nis2.naam, relevantie: "waarschijnlijk", tekst: f.nis2.waarschijnlijk.tekst, href: pageHref(locale, "nis2") }
    : inSector || gevraagd
      ? {
          naam: f.nis2.naam,
          relevantie: "mogelijk",
          tekst: inSector ? f.nis2.mogelijkSector.tekst : f.nis2.mogelijkGevraagd.tekst,
          href: pageHref(locale, "nis2"),
        }
      : { naam: f.nis2.naam, relevantie: "minderWaarschijnlijk", tekst: f.nis2.minderWaarschijnlijk.tekst, href: pageHref(locale, "nis2") };

  const cyfun: Verdict =
    !nis2Groot && (inSector || gevraagd)
      ? { naam: f.cyfun.naam, relevantie: "waarschijnlijk", tekst: f.cyfun.waarschijnlijk.tekst, href: pageHref(locale, "cyfun") }
      : { naam: f.cyfun.naam, relevantie: "mogelijk", tekst: f.cyfun.mogelijk.tekst, href: pageHref(locale, "cyfun") };

  const iso27001: Verdict = isoGevraagd
    ? { naam: f.iso27001.naam, relevantie: "waarschijnlijk", tekst: f.iso27001.waarschijnlijk.tekst, href: pageHref(locale, "iso27001") }
    : { naam: f.iso27001.naam, relevantie: "mogelijk", tekst: f.iso27001.mogelijk.tekst, href: pageHref(locale, "iso27001") };

  const gdpr: Verdict = { naam: f.gdpr.naam, relevantie: "vrijwelAltijd", tekst: f.gdpr.tekst, href: pageHref(locale, "gdpr") };

  return [nis2, cyfun, iso27001, gdpr];
}

function VerdictBadge({ relevantie, dict }: { relevantie: Relevantie; dict: FrameworkCheckerDict }) {
  const filled = relevantie === "waarschijnlijk" || relevantie === "vrijwelAltijd";
  return (
    <span
      className={
        "inline-block px-2.5 py-1 text-xs font-medium " +
        (filled ? "bg-terracotta-deep text-paper" : "border border-line text-muted")
      }
    >
      {dict.relevantieLabels[relevantie]}
    </span>
  );
}

function Options({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected?: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`block w-full border-l-2 px-4 py-3 text-left text-sm transition-colors ${
            selected === opt
              ? "border-terracotta bg-[#FBF9F4] text-ink"
              : "border-line text-ink/70 hover:border-terracotta hover:bg-[#FBF9F4]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

type FrameworkCheckerProps = { locale?: Locale; dict?: FrameworkCheckerDict };

export default function FrameworkChecker({ locale = "nl", dict = NL_DICT }: FrameworkCheckerProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const steps = [
    { vraag: dict.vragen[0], key: "sector" as const, options: dict.sectoren },
    { vraag: dict.vragen[1], key: "grootte" as const, options: dict.groottes },
    { vraag: dict.vragen[2], key: "gevraagd" as const, options: dict.jaNeeNietZeker },
    { vraag: dict.vragen[3], key: "isoGevraagd" as const, options: dict.jaNeeNietZeker },
  ];

  if (step >= steps.length) {
    const verdicts = computeVerdicts(answers, dict, locale);
    return (
      <div className="animate-confirm-in">
        <PillarGlyph className="h-5 w-4" />
        <p className="mt-3 font-serif text-2xl font-semibold text-ink">{dict.resultTitle}</p>
        <p className="mt-2 max-w-xl text-sm text-ink/70">{dict.resultIntro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {verdicts.map((v, i) => (
            <Link
              key={v.naam}
              href={v.href}
              className="animate-confirm-in block border-l-2 border-terracotta bg-[#FBF9F4] p-5 shadow-[0_14px_34px_rgba(33,29,24,0.09)] transition-colors hover:bg-white"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-serif text-lg font-semibold text-ink">{v.naam}</p>
                <VerdictBadge relevantie={v.relevantie} dict={dict} />
              </div>
              <p className="mt-2 text-sm text-ink/70">{v.tekst}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={pageHref(locale, "contact")} variant="primary">{dict.ctaPrimary}</Button>
          <button
            onClick={() => {
              setStep(0);
              setAnswers({});
            }}
            className="text-sm text-ink/60 hover:text-terracotta hover:underline"
          >
            {dict.restart}
          </button>
        </div>
      </div>
    );
  }

  const current = steps[step];

  return (
    <div>
      <p className="text-xs text-muted">
        {dict.questionOf.replace("{step}", String(step + 1)).replace("{total}", String(steps.length))}
      </p>
      <h2 className="mt-2 max-w-xl font-serif text-2xl font-semibold text-ink">{current.vraag}</h2>
      <div className="mt-6 max-w-xl">
        <Options
          options={current.options}
          selected={answers[current.key]}
          onSelect={(v) => {
            setAnswers((a) => ({ ...a, [current.key]: v }));
            setTimeout(() => setStep((s) => s + 1), 150);
          }}
        />
      </div>
      {step > 0 && (
        <button
          onClick={() => setStep((s) => s - 1)}
          className="mt-6 text-sm text-ink/50 hover:text-terracotta hover:underline"
        >
          {dict.previous}
        </button>
      )}
    </div>
  );
}
