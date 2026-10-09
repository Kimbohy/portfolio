import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { renderContactEmail } from "@/utils/contactEmail";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.email().max(254),
  message: z.string().trim().min(1).max(5000),
  // Honeypot : champ invisible pour les humains, rempli par les bots
  website: z.string().optional(),
});

// Créé à la première requête (et réutilisé ensuite) plutôt qu'à l'import du module
type Transporter = ReturnType<typeof nodemailer.createTransport>;
let transporter: Transporter | null = null;

function getTransporter(user: string, pass: string) {
  transporter ??= nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
  return transporter;
}

export async function POST(request: Request) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) {
    console.error("send-email: EMAIL_USER / EMAIL_PASSWORD are not configured");
    return NextResponse.json(
      { message: "Service unavailable" },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid form data" }, { status: 400 });
  }

  const { website, ...payload } = parsed.data;

  // Bot détecté : on répond "OK" sans rien envoyer
  if (website) {
    return NextResponse.json({ message: "Email sent successfully" });
  }

  try {
    const { subject, text, html } = renderContactEmail(payload);

    await getTransporter(user, pass).sendMail({
      from: user,
      to: user,
      replyTo: payload.email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    // Le détail reste dans les logs serveur, jamais dans la réponse
    console.error("send-email: failed to send", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
