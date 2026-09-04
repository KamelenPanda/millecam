"use client";

import { useState } from "react";
import Button from "./Button";
import PillarGlyph from "./PillarGlyph";
import { localeHref, type Locale } from "@/lib/i18n";
import type { Nis2CheckerDict, Nis2Verdict } from "@/lib/content/types";

const NL_DICT: Nis2CheckerDict = {
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
  aantoonbaarheid: ["Ja", "Nee", "Niet zeker"],
  vragen: [
    "In welke sector is je organisatie actief?",
    "Hoeveel medewerkers (of jaaromzet) telt je organisatie?",
    "Vraagt een klant, verzekeraar of overheidsinstantie je al om aantoonbaarheid rond cybersecurity?",
  ],
  questionOf: "Vraag {step} van {total}",
  previous: "Vorige vraag",
  possiblePath: "Mogelijk traject",
  disclaimer:
    "Dit is een eerste indicatie op basis van drie vragen, geen juridisch sluitend antwoord. Een GAP-analyse geeft zekerheid.",
  ctaPrimary: "Plan een GAP-analyse",
  restart: "Opnieuw beginnen",
  verdicts: {
    inSectorAndGroot: {
      titel: "Waarschijnlijk NIS2-plichtig",
      tekst:
        "Op basis van je sector en omvang val je vermoedelijk onder NIS2. Dat vraagt een formele aantoonbaarheid van je cybersecuritymaatregelen: een GAP-analyse brengt precies in kaart wat daarvoor nog nodig is.",
      tijdlijn: [
        { periode: "Maand 1", activiteit: "GAP-analyse" },
        { periode: "Maand 2 tot 4", activiteit: "Implementatie" },
        { periode: "Doorlopend", activiteit: "Ondersteuning" },
      ],
    },
    inSectorNotGroot: {
      titel: "Waarschijnlijk (nog) niet NIS2-plichtig door je omvang",
      tekst:
        "Voor de meeste organisaties in jouw sector geldt een ondergrens qua omvang, al bestaan er uitzonderingen voor kritieke diensten. CyFun is dan vaak een goede, toegankelijke basis om toch aantoonbaar te zijn.",
      tijdlijn: [
        { periode: "Maand 1", activiteit: "CyFun-zelfevaluatie" },
        { periode: "Maand 2", activiteit: "Lichte implementatie" },
        { periode: "Jaarlijks", activiteit: "Herevaluatie" },
      ],
    },
    notInSectorButAsked: {
      titel: "Niet noodzakelijk NIS2-plichtig, maar wel iets om uit te klaren",
      tekst:
        "NIS2 lijkt niet meteen van toepassing, maar de vraag van je klant of verzekeraar wijst eerder richting ISO 27001 of CyFun. Een GAP-analyse legt uit welk kader het beste past.",
      tijdlijn: [
        { periode: "Maand 1", activiteit: "GAP-analyse (ISO 27001/CyFun)" },
        { periode: "Maand 2 tot 3", activiteit: "Aantoonbaarheid opbouwen" },
        { periode: "Doorlopend", activiteit: "Onderhoud" },
      ],
    },
    fallback: {
      titel: "Waarschijnlijk niet NIS2-plichtig",
      tekst:
        "Op basis van je antwoorden lijkt NIS2 nu niet van toepassing. Dat kan wijzigen naarmate je groeit. De AVG (GDPR) blijft in elk geval gelden, ongeacht sector of omvang.",
      tijdlijn: [
        { periode: "Nu", activiteit: "AVG blijft van toepassing" },
        { periode: "Bij groei", activiteit: "Herevalueer NIS2" },
      ],
    },
  },
};

type Answers = { sector?: string; grootte?: string; aantoonbaarheid?: string };

function verdict(a: Answers, dict: Nis2CheckerDict): Nis2Verdict {
  const inSector = a.sector !== dict.sectoren[dict.sectoren.length - 1];
  const groot = a.grootte !== dict.groottes[0];

  if (inSector && groot) return dict.verdicts.inSectorAndGroot;
  if (inSector && !groot) return dict.verdicts.inSectorNotGroot;
  if (!inSector && a.aantoonbaarheid === dict.aantoonbaarheid[0]) return dict.verdicts.notInSectorButAsked;
  return dict.verdicts.fallback;
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

type Nis2CheckerProps = { locale?: Locale; dict?: Nis2CheckerDict };

export default function Nis2Checker({ locale = "nl", dict = NL_DICT }: Nis2CheckerProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const steps = [
    { vraag: dict.vragen[0], key: "sector" as const, options: dict.sectoren },
    { vraag: dict.vragen[1], key: "grootte" as const, options: dict.groottes },
    { vraag: dict.vragen[2], key: "aantoonbaarheid" as const, options: dict.aantoonbaarheid },
  ];

  if (step >= steps.length) {
    const v = verdict(answers, dict);
    return (
      <div className="border-l-2 border-terracotta bg-[#FBF9F4] px-6 py-8 shadow-[0_14px_34px_rgba(33,29,24,0.09)] sm:px-8">
        <PillarGlyph className="h-5 w-4" />
        <p className="mt-3 font-serif text-2xl font-semibold text-ink">{v.titel}</p>
        <p className="mt-3 max-w-xl text-ink/70">{v.tekst}</p>

        <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-muted">{dict.possiblePath}</p>
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          {v.tijdlijn.map((f) => (
            <div key={f.activiteit} className="flex items-start gap-3 sm:flex-1 sm:flex-col sm:gap-2">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-terracotta sm:mt-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">{f.periode}</p>
                <p className="text-sm text-ink">{f.activiteit}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted">{dict.disclaimer}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href={localeHref(locale, "/contact")} variant="primary">
            {dict.ctaPrimary}
          </Button>
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
        {dict.questionOf
          .replace("{step}", String(step + 1))
          .replace("{total}", String(steps.length))}
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
