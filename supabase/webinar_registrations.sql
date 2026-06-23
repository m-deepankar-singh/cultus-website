-- Webinar registrations for the BFSI AI-Era landing page (/bfsi-ai-webinar).
-- Run this once in the Supabase SQL editor to create the table the
-- /api/webinar-register and /api/webinar-registrations/export routes use.

create table if not exists public.webinar_registrations (
  id          uuid primary key default gen_random_uuid(),
  full_name   text not null,
  email       text not null,
  phone       text not null,
  consent     boolean not null default false,
  created_at  timestamptz not null default now()
);

-- Row Level Security
alter table public.webinar_registrations enable row level security;

-- Allow the public landing-page form (anon key) to insert registrations.
create policy "Allow anon inserts"
  on public.webinar_registrations
  for insert
  to anon
  with check (true);

-- Allow the CSV export endpoint (which uses the anon key, gated by
-- EXPORT_SECRET_KEY) to read registrations.
-- SECURITY NOTE: this also lets anyone holding the public anon key read all
-- rows directly via Supabase's REST API. If that is a concern, drop this
-- policy and switch the export route to a SUPABASE_SERVICE_ROLE_KEY client.
create policy "Allow anon select"
  on public.webinar_registrations
  for select
  to anon
  using (true);
