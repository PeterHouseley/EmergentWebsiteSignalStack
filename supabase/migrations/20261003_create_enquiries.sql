-- Signal Stack live React intake: minimum compatible Supabase schema
-- Target client: frontend/src/lib/supabase.js (table: public.enquiries)
-- Apply only in the approved Supabase project whose public URL is configured as
-- GitHub Actions secrets REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY.
-- Never place a service_role key in GitHub Pages or in the React build.

create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(trim(name)) between 1 and 160),
  email text not null check (
    char_length(trim(email)) between 3 and 254
    and email ~* '^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$'
  ),
  role text null check (role is null or char_length(role) <= 1000),
  material text null check (material is null or char_length(material) <= 200),
  source text not null default 'signalstack.co.uk' check (source = 'signalstack.co.uk'),
  status text not null default 'new' check (status = 'new')
);

alter table public.enquiries enable row level security;

-- Idempotently replace only the narrowly scoped anonymous INSERT policy.
drop policy if exists "Public can submit Signal Stack enquiries" on public.enquiries;
create policy "Public can submit Signal Stack enquiries"
  on public.enquiries
  for insert
  to anon
  with check (source = 'signalstack.co.uk' and status = 'new');

-- No anon SELECT, UPDATE or DELETE policy is granted.
-- Use the Supabase Dashboard or an approved authenticated operator role to read intake.

create index if not exists enquiries_created_at_desc_idx
  on public.enquiries (created_at desc);
