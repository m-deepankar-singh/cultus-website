import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

interface WebinarFormData {
  fullName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Team inbox notified on each registration (best-effort, secondary to the DB).
const NOTIFY_TO = "info@cultusworkforce.com";

export async function POST(request: Request) {
  try {
    const body: WebinarFormData = await request.json();

    // --- Validation ---
    if (!body.fullName?.trim() || !body.email?.trim() || !body.phone?.trim()) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(body.email.trim())) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }
    if (!body.consent) {
      return Response.json(
        { error: "Consent is required to register" },
        { status: 400 }
      );
    }

    const entry = {
      full_name: body.fullName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      consent: body.consent,
    };

    // --- Persist to Supabase ---
    const { error: dbError } = await supabase
      .from("webinar_registrations")
      .insert(entry);

    if (dbError) {
      console.error("[webinar-register] Supabase insert error:", dbError);
      return Response.json(
        { error: "Failed to save registration" },
        { status: 500 }
      );
    }

    // --- Notify the team (best-effort: don't fail the request on email errors) ---
    await sendNotification(entry);

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to register. Please try again." },
      { status: 500 }
    );
  }
}

async function sendNotification(entry: {
  full_name: string;
  email: string;
  phone: string;
  consent: boolean;
}) {
  if (!process.env.RESEND_API_KEY) return;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Cultus Webinar Registration <noreply@cultusworkforce.com>",
    to: [NOTIFY_TO],
    replyTo: entry.email,
    subject: `New Webinar Registration: ${entry.full_name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1B4580;">Transforming BFSI Talent for the AI Era</h2>
        <p style="color: #475569;">New webinar registration received.</p>
        <hr style="border: 1px solid #e5e7eb;" />
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 160px;">Full Name</td>
            <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(entry.full_name)}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Email</td>
            <td style="padding: 8px 12px; color: #1f2937;"><a href="mailto:${escapeHtml(entry.email)}">${escapeHtml(entry.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Phone</td>
            <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(entry.phone)}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Consent</td>
            <td style="padding: 8px 12px; color: #1f2937;">Agreed to receive updates</td>
          </tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("[webinar-register] email send error:", error);
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
