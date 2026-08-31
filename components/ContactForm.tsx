"use client";

import { useState, FormEvent } from "react";

const ONDERWERPEN = [
  "GAP-analyse",
  "DPO-ondersteuning",
  "ISO 27001-traject",
  "Tabletop exercise",
  "Andere vraag",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Verzenden mislukt");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-white p-8 text-center">
        <p className="font-serif text-xl font-semibold text-ink">Bericht verstuurd.</p>
        <p className="mt-2 text-sm text-ink/70">Je krijgt binnen de 24 uur een reactie.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Naam" name="naam" required />
        <Field label="Bedrijf" name="bedrijf" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="E-mailadres" name="email" type="email" required />
        <Field label="Telefoonnummer" name="telefoon" type="tel" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-ink" htmlFor="onderwerp">
          Onderwerp
        </label>
        <select
          id="onderwerp"
          name="onderwerp"
          className="w-full border border-line bg-white px-3 py-2 text-sm text-ink focus:border-terracotta focus:outline-none"
        >
          {ONDERWERPEN.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-ink" htmlFor="bericht">
          Bericht *
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          className="w-full border border-line bg-white px-3 py-2 text-sm text-ink focus:border-terracotta focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-status-kritiek">
          Er ging iets mis. Probeer opnieuw, of mail rechtstreeks naar info@millecam.be.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded bg-terracotta px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-terracotta-light disabled:opacity-60"
      >
        {status === "sending" ? "Versturen..." : "Verstuur bericht"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-ink" htmlFor={name}>
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-line bg-white px-3 py-2 text-sm text-ink focus:border-terracotta focus:outline-none"
      />
    </div>
  );
}
