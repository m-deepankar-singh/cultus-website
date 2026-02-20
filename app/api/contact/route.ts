import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  type: string;
  message: string;
}

const TYPE_LABELS: Record<string, string> = {
  learner: "Learner / Student",
  business: "Business / Employer",
  government: "Government Body",
  university: "University / Institution",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.type || !body.message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const typeLabel = TYPE_LABELS[body.type] || body.type;

    const { data, error } = await resend.emails.send({
      from: "Cultus Website Contact Form <noreply@cultusskillscenter.com>",
      to: ["sales@cultusedu.com"],
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B4580;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 140px;">Name</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(body.name)}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 12px; color: #1f2937;"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 8px 12px; color: #1f2937;">${body.phone ? escapeHtml(body.phone) : "—"}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Organization</td>
              <td style="padding: 8px 12px; color: #1f2937;">${body.organization ? escapeHtml(body.organization) : "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Type</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(typeLabel)}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f3f4f6; border-radius: 8px;">
            <p style="font-weight: bold; color: #374151; margin: 0 0 8px 0;">Message</p>
            <p style="color: #1f2937; margin: 0; white-space: pre-wrap;">${escapeHtml(body.message)}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch {
    return Response.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
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
