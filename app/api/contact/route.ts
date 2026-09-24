import { NextResponse } from "next/server";
import { Resend } from "resend";

// Bewust eenvoudig (geen volledige RFC 5322-regex): dekt alle realistische
// adressen en weigert overduidelijk foutieve invoer, zonder legitieme
// adressen ten onrechte af te wijzen.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_LENGTH: Record<string, number> = {
  naam: 100,
  bedrijf: 200,
  email: 200,
  telefoon: 50,
  onderwerp: 200,
  bericht: 5000,
};

// Best-effort per-IP rate limit: resets on cold start and isn't shared
// across concurrent serverless instances, so it won't stop a distributed
// bot, but it does stop a single script from hammering this endpoint
// within a warm instance. Real bot/DDoS protection belongs at the edge
// (Vercel Firewall), not in application code.
const submissions = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = submissions.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    submissions.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Te veel aanvragen. Probeer het later opnieuw." }, { status: 429 });
  }

  const body = await req.json();
  const { naam, bedrijf, email, telefoon, onderwerp, bericht, akkoordPrivacy, website } = body;

  // Honeypot: real visitors never see or fill this field. Pretend success
  // so scripted bots don't learn to look for another tell.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!naam || !email || !bericht) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
  }

  for (const [field, max] of Object.entries(MAX_LENGTH)) {
    const value = body[field];
    if (typeof value === "string" && value.length > max) {
      return NextResponse.json({ error: "Een van de velden is te lang." }, { status: 400 });
    }
  }

  if (akkoordPrivacy !== true && akkoordPrivacy !== "on") {
    return NextResponse.json({ error: "Je moet akkoord gaan met het privacybeleid." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Vul een geldig e-mailadres in." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@millecam.be";

  if (!apiKey) {
    // Geen API-key ingesteld (bv. lokale dev zonder .env) — log en geef een duidelijke fout terug
    // in plaats van in productie stil te falen.
    console.warn("RESEND_API_KEY ontbreekt — contactformulier kan geen mail versturen.");
    return NextResponse.json({ error: "E-mailservice niet geconfigureerd." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Millecam website <noreply@millecam.be>",
      to,
      reply_to: email.trim(),
      subject: `Nieuw contactformulier: ${onderwerp || "Algemene vraag"}`,
      text: [
        `Naam: ${naam}`,
        `Bedrijf: ${bedrijf || "-"}`,
        `E-mail: ${email}`,
        `Telefoon: ${telefoon || "-"}`,
        `Onderwerp: ${onderwerp || "-"}`,
        "",
        bericht,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Versturen mislukt." }, { status: 500 });
  }
}
