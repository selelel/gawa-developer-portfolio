import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { clientConfirmationEmail, teamNotificationEmail } from "@/app/lib/emailTemplates";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  const body = await req.json();
  const { name, company, email, phone, service, budget, timeline, description } = body;

  if (!name || !email || !description) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const data = { name, company, email, phone, service, budget, timeline, description };
  const confirmation = clientConfirmationEmail(data);
  const notification = teamNotificationEmail(data);

  try {
    await Promise.all([
      transporter.sendMail({
        from: `"Gawa Solutions" <${process.env.SMTP_USER}>`,
        to: email,
        subject: confirmation.subject,
        html: confirmation.html,
      }),
      transporter.sendMail({
        from: `"Gawa Solutions" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_TO,
        replyTo: email,
        subject: notification.subject,
        html: notification.html,
      }),
    ]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
