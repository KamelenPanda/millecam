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

const AANTOONBAARHEID = ["Ja", "Nee", "Niet zeker"];

type Answers = { sector?: string; grootte?: string; aantoonbaarheid?: string };

function verdict(a: Answers): { titel: string; tekst: string } {
  const inSector = a.sector !== "Andere / geen van deze";
  const groot = a.grootte !== GROOTTES[0];

  if (inSector && groot) {
    return {
      titel: "Waarschijnlijk NIS2-plichtig",
      tekst:
        "Op basis van je sector en omvang val je vermoedelijk onder NIS2. Dat vraagt een formele aantoonbaarheid van je cybersecuritymaatregelen: een GAP-analyse brengt precies in kaart wat daarvoor nog nodig is.",
    };
  }
  if (inSector && !groot) {
    return {
      titel: "Waarschijnlijk (nog) niet NIS2-plichtig door je omvang",
      tekst:
        "Voor de meeste organisaties in jouw sector geldt een ondergrens qua omvang, al bestaan er uitzonderingen voor kritieke diensten. CyFun is dan vaak een goede, toegankelijke basis om toch aantoonbaar te zijn.",
    };
  }
  if (!inSector && a.aantoonbaarheid === "Ja") {
    return {
      titel: "Niet noodzakelijk NIS2-plichtig, maar wel iets om uit te klaren",
      tekst:
        "NIS2 lijkt niet meteen van toepassing, maar de vraag van je klant of verzekeraar wijst eerder richting ISO 27001 of CyFun. Een GAP-analyse legt uit welk kader het beste past.",
    };
  }
  return {
    titel: "Waarschijnlijk niet NIS2-plichtig",
    tekst:
      "Op basis van je antwoorden lijkt NIS2 nu niet van toepassing. Dat kan wijzigen naarmate je groeit. De AVG (GDPR) blijft in elk geval gelden, ongeacht sector of omvang.",
  };
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

export default function Nis2Checker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const steps = [
    {
      vraag: "In welke sector is je organisatie actief?",
      key: "sector" as const,
      options: SECTOREN,
    },
    {
      vraag: "Hoeveel medewerkers (of jaaromzet) telt je organisatie?",
      key: "grootte" as const,
      options: GROOTTES,
    },
    {
      vraag: "Vraagt een klant, verzekeraar of overheidsinstantie je al om aantoonbaarheid rond cybersecurity?",
      key: "aantoonbaarheid" as const,
      options: AANTOONBAARHEID,
    },
  ];

  if (step >= steps.length) {
    const v = verdict(answers);
    return (
      <div className="border-l-2 border-terracotta bg-[#FBF9F4] px-6 py-8 sm:px-8">
        <PillarGlyph className="h-5 w-4" />
        <p className="mt-3 font-serif text-2xl font-semibold text-ink">{v.titel}</p>
        <p className="mt-3 max-w-xl text-ink/70">{v.tekst}</p>
        <p className="mt-4 text-xs text-muted">
          Dit is een eerste indicatie op basis van drie vragen, geen juridisch sluitend antwoord.
          Een GAP-analyse geeft zekerheid.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Plan een GAP-analyse
          </Button>
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
