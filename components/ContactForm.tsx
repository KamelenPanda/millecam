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

// Shared underline treatment for text/email/tel/select fields — a ruled
// field instead of a boxed input, closer to a paper form than a default
// web-form control.
const fieldClass =
  "w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-2 text-sm text-ink " +
  "transition-colors focus:border-ink focus:outline-none focus:ring-0";

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
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Naam" name="naam" required />
        <Field label="Bedrijf" name="bedrijf" />
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="E-mailadres" name="email" type="email" required />
        <Field label="Telefoonnummer" name="telefoon" type="tel" />
      </div>

      <div>
        <label className="block text-xs text-muted" htmlFor="onderwerp">
          Onderwerp
        </label>
        <div className="relative">
          <select id="onderwerp" name="onderwerp" className={`${fieldClass} appearance-none pr-6`}>
            {ONDERWERPEN.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 text-ink/50"
            viewBox="0 0 10 6"
            fill="none"
            aria-hidden="true"
          >
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div>
        <label className="block text-xs text-muted" htmlFor="bericht">
          Bericht {"*"}
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          className="w-full resize-none border-0 border-b border-line bg-transparent py-2 text-sm leading-7 text-ink outline-none focus:border-ink"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent calc(1.75rem - 1px), #DCD3BF calc(1.75rem - 1px), #DCD3BF 1.75rem)",
            backgroundPositionY: "0.6rem",
          }}
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
        className="inline-flex items-center justify-center bg-terracotta px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-terracotta-light disabled:opacity-60"
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
      <label className="block text-xs text-muted" htmlFor={name}>
        {label} {required && "*"}
      </label>
      <input id={name} name={name} type={type} required={required} className={fieldClass} />
    </div>
  );
}
