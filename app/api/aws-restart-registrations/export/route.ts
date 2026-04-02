import { supabase } from "@/lib/supabase";

const EXPORT_SECRET = process.env.EXPORT_SECRET_KEY;

export async function GET(request: Request) {
  // Simple secret key auth — share the URL with your team
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (!EXPORT_SECRET || key !== EXPORT_SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("aws_restart_registrations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  if (!data || data.length === 0) {
    return new Response("No registrations found", { status: 200 });
  }

  // Build CSV
  const headers = [
    "ID",
    "Full Name",
    "Phone",
    "Email",
    "Gender",
    "Age",
    "Educational Background",
    "District",
    "Province",
    "Previously Joined",
    "Has Computer",
    "English Proficiency",
    "Registered At",
  ];

  const rows = data.map((r) => [
    r.id,
    escapeCsv(r.full_name),
    escapeCsv(r.phone),
    escapeCsv(r.email),
    escapeCsv(r.gender),
    escapeCsv(r.age),
    escapeCsv(r.educational_background || ""),
    escapeCsv(r.district || ""),
    escapeCsv(r.province || ""),
    escapeCsv(r.previously_joined),
    escapeCsv(r.has_computer),
    escapeCsv(r.english_proficiency),
    r.created_at,
  ]);

  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="aws-restart-registrations-${new Date().toISOString().split("T")[0]}.csv"`,
    },
  });
}

function escapeCsv(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}
