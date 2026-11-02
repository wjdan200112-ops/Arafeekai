-- Aravic AI: initial database schema
create extension if not exists pgcrypto;

create type public.content_status as enum ('draft','pending_review','approved','rejected','published');
create type public.app_role as enum ('admin','editor','author','reviewer');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role public.app_role not null default 'author',
  created_at timestamptz not null default now()
);

create table public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  body text not null default '',
  section text not null default 'تقنية',
  status public.content_status not null default 'draft',
  source_name text,
  source_url text,
  author_id uuid references public.profiles(id),
  reviewer_id uuid references public.profiles(id),
  reviewed_at timestamptz,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint source_required_for_review check (status not in ('pending_review','approved','published') or (source_name is not null and source_url is not null))
);

create table public.social_accounts (
  id uuid primary key default gen_random_uuid(),
  platform text not null check (platform in ('facebook','x')),
  account_label text not null,
  external_account_id text,
  connected boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.social_posts (
  id uuid primary key default gen_random_uuid(),
  article_id uuid references public.articles(id) on delete set null,
  platform text not null check (platform in ('facebook','x')),
  message text not null,
  status public.content_status not null default 'draft',
  scheduled_for timestamptz,
  approved_by uuid references public.profiles(id),
  approved_at timestamptz,
  published_at timestamptz,
  external_post_id text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  constraint publish_requires_approval check (status <> 'published' or (approved_by is not null and approved_at is not null))
);

alter table public.profiles enable row level security;
alter table public.articles enable row level security;
alter table public.social_accounts enable row level security;
alter table public.social_posts enable row level security;

-- No public write policies are intentionally created. Add role-aware policies
-- after creating the first admin account. Keep service-role credentials server-only.
