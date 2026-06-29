type InquiryData = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
};

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── Sent to the client who submitted the form ──────────────────────────────

export function clientConfirmationEmail(data: InquiryData): { subject: string; html: string } {
  const firstName = esc(data.name.split(" ")[0]);
  const subject = `We received your inquiry, ${data.name.split(" ")[0]}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f5f5f5;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0c0a09;padding:28px 40px;border-radius:12px 12px 0 0;">
              <span style="font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:400;color:#ffffff;letter-spacing:-0.01em;">Gawa Solutions</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:48px 40px 36px;">
              <h1 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:38px;font-weight:400;line-height:1.08;letter-spacing:-0.01em;color:#0c0a09;">
                We got it, ${firstName}.
              </h1>
              <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:#4e4e4e;">
                Your project inquiry has landed with us. We read every submission personally, and you'll hear back within <strong style="color:#0c0a09;font-weight:600;">24 hours</strong> with our initial thoughts.
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:#4e4e4e;">
                No automated back-and-forth — a real person reviews your project before we reply.
              </p>
            </td>
          </tr>

          <!-- Inquiry summary -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #e7e5e4;background-color:#f5f5f5;">
                <!-- Fields -->
                <tr>
                  <td style="padding:18px 20px 14px;">
                    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b6a63;">What you submitted</p>
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      ${data.company ? `<tr>
                        <td style="padding:5px 0;width:110px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6a63;vertical-align:top;">Company</td>
                        <td style="padding:5px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;color:#0c0a09;">${esc(data.company)}</td>
                      </tr>` : ""}
                      ${data.phone ? `<tr>
                        <td style="padding:5px 0;width:110px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6a63;vertical-align:top;">Phone</td>
                        <td style="padding:5px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;color:#0c0a09;">${esc(data.phone)}</td>
                      </tr>` : ""}
                      <tr>
                        <td style="padding:5px 0;width:110px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6a63;vertical-align:top;">Service</td>
                        <td style="padding:5px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;color:#0c0a09;">${esc(data.service)}</td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;width:110px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6a63;vertical-align:top;">Budget</td>
                        <td style="padding:5px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;color:#0c0a09;">${esc(data.budget)}</td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;width:110px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6a63;vertical-align:top;">Timeline</td>
                        <td style="padding:5px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;color:#0c0a09;">${esc(data.timeline)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Description -->
                <tr>
                  <td style="padding:14px 20px 18px;border-top:1px solid #e7e5e4;">
                    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b6a63;">Your description</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.65;color:#0c0a09;white-space:pre-wrap;">${esc(data.description)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What's next -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px 40px;">
              <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b6a63;">What happens next</p>

              <!-- Step 1 -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:18px;">
                <tr>
                  <td style="width:36px;vertical-align:top;padding-top:1px;">
                    <div style="width:26px;height:26px;background-color:#3567a0;border-radius:50%;text-align:center;line-height:26px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#ffffff;">1</div>
                  </td>
                  <td style="padding-left:4px;">
                    <p style="margin:0 0 3px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:#0c0a09;line-height:1.4;">We review your project</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.55;color:#4e4e4e;">We assess your scope, feasibility, and the right approach before reaching out.</p>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:18px;">
                <tr>
                  <td style="width:36px;vertical-align:top;padding-top:1px;">
                    <div style="width:26px;height:26px;background-color:#3567a0;border-radius:50%;text-align:center;line-height:26px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#ffffff;">2</div>
                  </td>
                  <td style="padding-left:4px;">
                    <p style="margin:0 0 3px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:#0c0a09;line-height:1.4;">You get a personal response</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.55;color:#4e4e4e;">Within 24 hours — specific to your project, not a templated reply.</p>
                  </td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="width:36px;vertical-align:top;padding-top:1px;">
                    <div style="width:26px;height:26px;background-color:#3567a0;border-radius:50%;text-align:center;line-height:26px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#ffffff;">3</div>
                  </td>
                  <td style="padding-left:4px;">
                    <p style="margin:0 0 3px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:#0c0a09;line-height:1.4;">Free 30-minute strategy call</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.55;color:#4e4e4e;">We align on scope, timeline, and what building together looks like — no pressure.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider + CTA -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px 44px;border-top:1px solid #e7e5e4;">
              <p style="margin:28px 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#4e4e4e;">
                While you wait, feel free to explore what we've built.
              </p>
              <a href="https://gawadeveloper.com" style="display:inline-block;background-color:#292524;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;text-decoration:none;padding:13px 28px;border-radius:9999px;">
                Visit Gawa Solutions
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f5f5f5;padding:24px 40px;border-top:1px solid #e7e5e4;border-radius:0 0 12px 12px;">
              <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#6b6a63;">
                This email confirms we received your inquiry. Reply here with any questions.
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6a63;">
                © ${new Date().getFullYear()} Gawa Solutions
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}

// ── Sent to the Gawa Solutions team ───────────────────────────────────────

export function teamNotificationEmail(data: InquiryData): { subject: string; html: string } {
  const subject = `New inquiry from ${data.name}${data.company ? ` — ${data.company}` : ""}`;
  const submittedAt = new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila", dateStyle: "full", timeStyle: "short" });

  function row(label: string, value: string): string {
    return `<tr>
      <td style="padding:9px 0;width:130px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;color:#6b6a63;">${label}</td>
      <td style="padding:9px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#0c0a09;">${esc(value)}</td>
    </tr>`;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f5f5f5;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0c0a09;padding:24px 36px;border-radius:12px 12px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td>
                    <span style="font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:400;color:#ffffff;">Gawa Solutions</span>
                  </td>
                  <td align="right">
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:600;color:#6b6a63;letter-spacing:0.06em;text-transform:uppercase;">New Inquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Name + quick reply -->
          <tr>
            <td style="background-color:#ffffff;padding:32px 36px 24px;">
              <h1 style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:400;line-height:1.1;letter-spacing:-0.01em;color:#0c0a09;">
                ${esc(data.name)}${data.company ? `<span style="color:#6b6a63;"> — ${esc(data.company)}</span>` : ""}
              </h1>
              <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6a63;">${submittedAt}</p>
              <a href="mailto:${esc(data.email)}" style="display:inline-block;background-color:#3567a0;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;text-decoration:none;padding:10px 22px;border-radius:9999px;">
                Reply to ${esc(data.name.split(" ")[0])}
              </a>
            </td>
          </tr>

          <!-- Contact fields -->
          <tr>
            <td style="background-color:#ffffff;padding:0 36px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e7e5e4;">
                ${row("Email", data.email)}
                ${data.phone ? row("Phone", data.phone) : ""}
                ${data.company ? row("Company", data.company) : ""}
              </table>
            </td>
          </tr>

          <!-- Project fields -->
          <tr>
            <td style="background-color:#f5f5f5;padding:20px 36px;border-top:1px solid #e7e5e4;border-bottom:1px solid #e7e5e4;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                ${row("Service", data.service)}
                ${row("Budget", data.budget)}
                ${row("Timeline", data.timeline)}
              </table>
            </td>
          </tr>

          <!-- Description -->
          <tr>
            <td style="background-color:#ffffff;padding:24px 36px 36px;">
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b6a63;">Project description</p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#0c0a09;white-space:pre-wrap;">${esc(data.description)}</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f5f5f5;padding:20px 36px;border-top:1px solid #e7e5e4;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6a63;">
                Submitted via gawadeveloper.com · Reply-To is set to the client's email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}
