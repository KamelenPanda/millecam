"use client";

import { useState, FormEvent } from "react";

const ONDERWERPEN = [
  "GAP-analyse",
  "DPO-ondersteuning",
  "ISO 27001-traject",
  "Tabletop exercise",
  "Andere vraag",
];

// Zelfde eenvoudige check als aan de serverkant (app/api/contact/route.ts) —
// hier enkel voor directe feedback, de server blijft de bron van waarheid.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "sent" | "error";
type Errors = { naam?: string; email?: string; bericht?: string };

// Shared underline treatment for text/email/tel/select fields — a ruled
// field instead of a boxed input, closer to a paper form than a default
// web-form control. Focus swaps to a thicker terracotta rule (not just a
// color change) so keyboard focus stays clearly visible without a boxy ring.
const fieldClass =
  "w-full appearance-none rounded-none border-x-0 border-t-0 border-b border-line bg-transparent px-0 py-2 text-sm text-ink " +
  "transition-all focus:border-b-2 focus:border-terracotta focus:!outline-none focus:ring-0";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  // Native browservalidatie (type="email"/required) toont een eigen,
  // Engelstalige, ongestileerde melding vóór onze JS de kans krijgt —
  // daarom noValidate op de form en de volledige controle hieronder.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const naam = String(data.naam || "").trim();
    const email = String(data.email || "").trim();
    const bericht = String(data.bericht || "").trim();

    const nextErrors: Errors = {};
    if (!naam) nextErrors.naam = "Vul je naam in.";
    if (!EMAIL_RE.test(email)) nextErrors.email = "Vul een geldig e-mailadres in, bijvoorbeeld naam@bedrijf.be.";
    if (!bericht) nextErrors.bericht = "Vul een bericht in.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStatus("sending");

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

  function clearError(field: keyof Errors) {
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  if (status === "sent") {
    return (
      <div className="border-l-2 border-status-conform bg-[#FBF9F4] py-6 pl-5 pr-4">
        <p className="font-serif text-xl font-semibold text-ink">Bericht verstuurd.</p>
        <p className="mt-2 text-sm text-ink/70">Je krijgt binnen de 24 uur een reactie.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <Field
          label="Naam"
          name="naam"
          required
          error={errors.naam}
          onChange={() => clearError("naam")}
        />
        <Field label="Bedrijf" name="bedrijf" />
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field
          label="E-mailadres"
          name="email"
          type="email"
          required
          error={errors.email}
          onChange={() => clearError("email")}
        />
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
          rows={5}
          onChange={() => clearError("bericht")}
          aria-invalid={!!errors.bericht}
          aria-describedby={errors.bericht ? "bericht-error" : undefined}
          className="w-full appearance-none resize-none border-x-0 border-t-0 border-b border-line bg-transparent py-2 text-sm leading-7 text-ink transition-all focus:border-b-2 focus:border-terracotta focus:!outline-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent calc(1.75rem - 1px), #DCD3BF calc(1.75rem - 1px), #DCD3BF 1.75rem)",
            backgroundPositionY: "0.6rem",
          }}
        />
        {errors.bericht && (
          <p id="bericht-error" className="mt-1.5 text-xs text-status-kritiek">
            {errors.bericht}
          </p>
        )}
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
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  onChange?: () => void;
}) {
  return (
    <div>
      <label className="block text-xs text-muted" htmlFor={name}>
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${fieldClass} ${error ? "border-status-kritiek" : ""}`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-status-kritiek">
          {error}
        </p>
      )}
    </div>
  );
}
