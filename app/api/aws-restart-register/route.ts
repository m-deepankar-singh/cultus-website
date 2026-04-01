import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

interface AWSRestartFormData {
  fullName: string;
  phone: string;
  email: string;
  gender: string;
  age: string;
  state: string;
  previouslyJoined: string;
  hasComputer: string;
  englishProficiency: string;
  agreedToTerms: boolean;
  turnstileToken: string;
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
      }),
    }
  );
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const body: AWSRestartFormData = await request.json();

    if (
      !body.fullName ||
      !body.phone ||
      !body.email ||
      !body.gender ||
      !body.age ||
      !body.previouslyJoined ||
      !body.hasComputer ||
      !body.englishProficiency ||
      !body.agreedToTerms
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify Turnstile CAPTCHA
    if (!body.turnstileToken) {
      return Response.json(
        { error: "CAPTCHA verification required" },
        { status: 400 }
      );
    }

    const isTurnstileValid = await verifyTurnstile(body.turnstileToken);
    if (!isTurnstileValid) {
      return Response.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Store in Supabase
    const { error: dbError } = await supabase
      .from("aws_restart_registrations")
      .insert({
        full_name: body.fullName,
        phone: body.phone,
        email: body.email,
        gender: body.gender,
        age: body.age,
        state: body.state || null,
        previously_joined: body.previouslyJoined,
        has_computer: body.hasComputer,
        english_proficiency: body.englishProficiency,
      });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return Response.json(
        { error: "Failed to save registration" },
        { status: 500 }
      );
    }

    // Send email notification
    const { error: emailError } = await resend.emails.send({
      from: "Cultus AWS re/Start Registration <noreply@cultusskillscenter.com>",
      to: ["info@cultusworkforce.com"],
      replyTo: body.email,
      subject: `New AWS re/Start Registration: ${body.fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B4580;">New AWS re/Start Program Registration</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 200px;">Full Name</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(body.fullName)}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Phone (WhatsApp)</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(body.phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 12px; color: #1f2937;"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Gender</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(body.gender)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Age</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(body.age)}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">State</td>
              <td style="padding: 8px 12px; color: #1f2937;">${body.state ? escapeHtml(body.state) : "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Previously Joined AWS re/Start</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(body.previouslyJoined)}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Has Required Computer</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(body.hasComputer)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">English Proficiency</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(body.englishProficiency)}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (emailError) {
      // Log but don't fail — data is already saved in Supabase
      console.error("Email send error:", emailError);
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to submit registration" },
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
