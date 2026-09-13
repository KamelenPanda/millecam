"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import PillarGlyph from "./PillarGlyph";

const SECTOREN = [
  "Energie, water of afvalbeheer",
  "Transport of logistiek",
  "Bankwezen of financiële infrastructuur",
  "Gezondheidszorg",
  "Digitale infrastructuur (cloud, hosting, datacenters)",
  "ICT-dienstverlening aan andere bedrijven",
  "Overheid",
  "Voedingsindustrie",
  "Andere / geen van deze",
];
const GROOTTES = [
  "Minder dan 50 medewerkers én minder dan €10 miljoen omzet",
  "50 tot 249 medewerkers, of €10 tot 50 miljoen omzet",
  "250 of meer medewerkers, of meer dan €50 miljoen omzet",
];
const JA_NEE_NIET_ZEKER = ["Ja", "Nee", "Niet zeker"];

const VRAGEN = [
  "In welke sector is je organisatie actief?",
  "Hoeveel medewerkers (of jaaromzet) telt je organisatie?",
  "Vraagt een klant, verzekeraar of overheidsinstantie je al om aantoonbaarheid rond cybersecurity of gegevensbescherming?",
  "Vraagt een klant, verzekeraar of aanbesteding specifiek een ISO 27001-certificaat?",
];

type Answers = {
  sector?: string;
  grootte?: string;
  gevraagd?: string;
  isoGevraagd?: string;
};

type Verdict = {
  naam: string;
  relevantie: "waarschijnlijk" | "mogelijk" | "minder waarschijnlijk" | "vrijwel altijd";
  tekst: string;
  href: string;
};

function computeVerdicts(a: Answers): Verdict[] {
  const inSector = a.sector !== SECTOREN[SECTOREN.length - 1];
  const groot = a.grootte !== GROOTTES[0];
  const gevraagd = a.gevraagd === "Ja";
  const isoGevraagd = a.isoGevraagd === "Ja";

  const nis2Groot = inSector && groot;

  const nis2: Verdict = nis2Groot
    ? {
        naam: "NIS2",
        relevantie: "waarschijnlijk",
        tekst: "Op basis van je sector en omvang val je vermoedelijk onder NIS2.",
        href: "/nis2",
      }
    : inSector || gevraagd
      ? {
          naam: "NIS2",
          relevantie: "mogelijk",
          tekst: inSector
            ? "Je sector is relevant, maar de omvang ligt onder de gebruikelijke NIS2-drempel — dat kan uitzonderingen kennen voor kritieke diensten."
            : "Niet je sector op zich, maar de vraag van een klant of verzekeraar wijst wel richting aantoonbaarheid.",
          href: "/nis2",
        }
      : {
          naam: "NIS2",
          relevantie: "minder waarschijnlijk",
          tekst: "Op basis van sector en omvang lijkt NIS2 nu niet van toepassing.",
          href: "/nis2",
        };

  const cyfun: Verdict =
    !nis2Groot && (inSector || gevraagd)
      ? {
          naam: "CyFun",
          relevantie: "waarschijnlijk",
          tekst: "Een toegankelijk alternatief om toch aantoonbaar te zijn, zonder meteen een zwaar NIS2-traject te starten.",
          href: "/cyberfundamentals",
        }
      : {
          naam: "CyFun",
          relevantie: "mogelijk",
          tekst: "Ook zonder directe NIS2-druk een bruikbare basis voor wie structureel met cybersecurity aan de slag wil.",
          href: "/cyberfundamentals",
        };

  const iso27001: Verdict = isoGevraagd
    ? {
        naam: "ISO 27001",
        relevantie: "waarschijnlijk",
        tekst: "Een klant of aanbesteding vraagt er specifiek naar — vaak het directe startpunt voor een ISO 27001-traject.",
        href: "/iso-27001",
      }
    : {
        naam: "ISO 27001",
        relevantie: "mogelijk",
        tekst: "Nu (nog) geen expliciete vraag, maar vaak alsnog relevant zodra een klant of aanbesteding het gaat eisen.",
        href: "/iso-27001",
      };

  const gdpr: Verdict = {
    naam: "GDPR / AVG",
    relevantie: "vrijwel altijd",
    tekst: "Van toepassing op vrijwel elke organisatie die persoonsgegevens verwerkt — ongeacht sector of omvang.",
    href: "/gdpr",
  };

  return [nis2, cyfun, iso27001, gdpr];
}

const RELEVANTIE_LABEL: Record<Verdict["relevantie"], string> = {
  waarschijnlijk: "Waarschijnlijk relevant",
  mogelijk: "Mogelijk relevant",
  "minder waarschijnlijk": "Minder waarschijnlijk",
  "vrijwel altijd": "Vrijwel altijd relevant",
};

function VerdictBadge({ relevantie }: { relevantie: Verdict["relevantie"] }) {
  const filled = relevantie === "waarschijnlijk" || relevantie === "vrijwel altijd";
  return (
    <span
      className={
        "inline-block px-2.5 py-1 text-xs font-medium " +
        (filled ? "bg-terracotta-deep text-paper" : "border border-line text-muted")
      }
    >
      {RELEVANTIE_LABEL[relevantie]}
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

export default function FrameworkChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const steps = [
    { vraag: VRAGEN[0], key: "sector" as const, options: SECTOREN },
    { vraag: VRAGEN[1], key: "grootte" as const, options: GROOTTES },
    { vraag: VRAGEN[2], key: "gevraagd" as const, options: JA_NEE_NIET_ZEKER },
    { vraag: VRAGEN[3], key: "isoGevraagd" as const, options: JA_NEE_NIET_ZEKER },
  ];

  if (step >= steps.length) {
    const verdicts = computeVerdicts(answers);
    return (
      <div className="animate-confirm-in">
        <PillarGlyph className="h-5 w-4" />
        <p className="mt-3 font-serif text-2xl font-semibold text-ink">Jouw indicatie per kader</p>
        <p className="mt-2 max-w-xl text-sm text-ink/70">
          Gebaseerd op vier korte vragen — geen juridisch sluitend antwoord. Een GAP-analyse geeft
          zekerheid.
        </p>

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
                <VerdictBadge relevantie={v.relevantie} />
              </div>
              <p className="mt-2 text-sm text-ink/70">{v.tekst}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">Bespreek je situatie</Button>
          <button
            onClick={() => {
              setStep(0);
              setAnswers({});
            }}
            className="text-sm text-ink/60 hover:text-terracotta hover:underline"
          >
            Opnieuw beginnen
          </button>
        </div>
      </div>
    );
  }

  const current = steps[step];

  return (
    <div>
      <p className="text-xs text-muted">
        Vraag {step + 1} van {steps.length}
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
          Vorige vraag
        </button>
      )}
    </div>
  );
}
