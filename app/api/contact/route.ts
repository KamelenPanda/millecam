import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const { naam, bedrijf, email, telefoon, onderwerp, bericht } = await req.json();

  if (!naam || !email || !bericht) {
    return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
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
      reply_to: email,
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
