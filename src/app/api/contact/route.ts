import { contactSchema } from "@/lib/contact-schema";

export const dynamic = "force-dynamic";

/**
 * POST /api/contact — contact form intake.
 *
 * CURRENT STATE (honest integration status):
 *   - Full server-side validation with the shared Zod schema.
 *   - Honeypot spam filtering.
 *   - Submissions are logged server-side (visible in hosting logs).
 *
 *   Email delivery is intentionally NOT faked: no SMTP/transactional email
 *   provider is configured yet. To enable delivery, add a provider
 *   (Resend, Postmark, SES — any), set CONTACT_EMAIL_API_KEY and
 *   CONTACT_EMAIL_TO env vars, and send inside the marked block below.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    const issues: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "form");
      issues[field] = [...(issues[field] ?? []), issue.message];
    }
    /* Silently accept spam-trapped submissions without processing them. */
    if (issues.company_site) {
      return Response.json({ ok: true }, { status: 200 });
    }
    return Response.json(
      {
        ok: false,
        message: "Some fields need attention before your message can be submitted.",
        issues,
      },
      { status: 422 },
    );
  }

  const { name, email, topic, message } = parsed.data;

  /* ---------------------------------------------------------------------
   * EMAIL DELIVERY INTEGRATION POINT
   * Example (Resend):
   *   await resend.emails.send({
   *     from: "website@manualosteopaths.org",
   *     to: process.env.CONTACT_EMAIL_TO!,
   *     subject: `[Website] ${topic} inquiry from ${name}`,
   *     replyTo: email,
   *     text: message,
   *   });
   * ------------------------------------------------------------------- */
  console.info("[contact] validated submission received (email delivery pending)", {
    name,
    email,
    topic,
    messageLength: message.length,
    receivedAt: new Date().toISOString(),
  });

  return Response.json(
    {
      ok: true,
      delivery: "logged",
      message:
        "Submission validated and logged by the preview site. Email delivery is pending the production mail-service integration.",
    },
    { status: 200 },
  );
}
