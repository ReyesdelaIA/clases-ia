import { NextResponse } from "next/server";
import { Resend } from "resend";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  work?: string;
  aiLevel?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.LEADS_TO_EMAIL ?? "felipe@reyesia.com";
const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Reyes IA <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const countryCode = body.countryCode?.trim() ?? "";
    const work = body.work?.trim() ?? "No informado";
    const aiLevel = body.aiLevel?.trim() ?? "No informado";

    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, message: "Faltan campos obligatorios." },
        { status: 400 },
      );
    }

    if (!resendApiKey) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Falta configurar RESEND_API_KEY en variables de entorno.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Nueva inscripción Reyes IA - ${name}`,
      html: `
        <h2>Nueva inscripción al curso presencial</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${countryCode} ${phone}</p>
        <p><strong>Trabajo:</strong> ${work}</p>
        <p><strong>Nivel IA:</strong> ${aiLevel}</p>
        <hr />
        <p>Enviado desde la landing de Reyes IA.</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, message: "No se pudo enviar el correo.", error },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Error inesperado.", error },
      { status: 500 },
    );
  }
}
