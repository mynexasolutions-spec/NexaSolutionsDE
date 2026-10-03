-- =========================================================
-- Nexa Solutions DE - Supabase Database Schema
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)
-- =========================================================

-- 1. Create queries / submissions table
CREATE TABLE IF NOT EXISTS public.queries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type VARCHAR(50) NOT NULL DEFAULT 'contact', -- 'consultation', 'project', 'contact'
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(100),
    company VARCHAR(255),
    service VARCHAR(255),
    budget VARCHAR(100),
    topic VARCHAR(255),
    call_type VARCHAR(100),
    date_slot VARCHAR(100),
    time_slot VARCHAR(100),
    message TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'in_progress', 'resolved'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Create blogs table
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title_de TEXT NOT NULL,
    title_en TEXT NOT NULL,
    excerpt_de TEXT,
    excerpt_en TEXT,
    category VARCHAR(100) NOT NULL DEFAULT 'ai-automation',
    category_label_de VARCHAR(100) DEFAULT 'KI & Automatisierung',
    category_label_en VARCHAR(100) DEFAULT 'AI & Automation',
    category_badge_class VARCHAR(255) DEFAULT 'bg-amber-50 text-amber-700 border-amber-200/80',
    date VARCHAR(100) DEFAULT '28. März 2026',
    read_time_de VARCHAR(100) DEFAULT '5 Min. Lesezeit',
    read_time_en VARCHAR(100) DEFAULT '5 min read',
    cover_image TEXT NOT NULL DEFAULT '/images/ai-robot.png',
    featured BOOLEAN DEFAULT false,
    views VARCHAR(50) DEFAULT '1.0k',
    author JSONB DEFAULT '{"name": "Nexa Solutions Team", "roleDe": "Software-Architektur & KI-Entwicklung", "roleEn": "Software Architecture & AI Engineering", "avatar": "/favicon.ico"}'::jsonb,
    key_takeaways_de JSONB DEFAULT '[]'::jsonb,
    key_takeaways_en JSONB DEFAULT '[]'::jsonb,
    sections JSONB DEFAULT '[]'::jsonb,
    tags JSONB DEFAULT '[]'::jsonb,
    related_slugs JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_queries_type ON public.queries(type);
CREATE INDEX IF NOT EXISTS idx_queries_status ON public.queries(status);
CREATE INDEX IF NOT EXISTS idx_queries_created_at ON public.queries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON public.blogs(category);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON public.blogs(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Queries RLS Policies:
-- Allow anyone (public/anon) to INSERT a new query (form submissions)
DROP POLICY IF EXISTS "Public can insert queries" ON public.queries;
CREATE POLICY "Public can insert queries" 
ON public.queries 
FOR INSERT 
TO anon, authenticated, service_role 
WITH CHECK (true);

-- Allow service_role and anon to read and update queries for the admin API
DROP POLICY IF EXISTS "Allow all for service_role and anon on queries" ON public.queries;
CREATE POLICY "Allow all for service_role and anon on queries" 
ON public.queries 
FOR ALL 
TO service_role, anon, authenticated 
USING (true) 
WITH CHECK (true);

-- Blogs RLS Policies:
-- Allow public to SELECT blogs (for the blog reading pages)
DROP POLICY IF EXISTS "Public can read blogs" ON public.blogs;
CREATE POLICY "Public can read blogs" 
ON public.blogs 
FOR SELECT 
TO anon, authenticated, service_role 
USING (true);

-- Allow full access for service_role and anon on blogs for admin management
DROP POLICY IF EXISTS "Allow all for service_role and anon on blogs" ON public.blogs;
CREATE POLICY "Allow all for service_role and anon on blogs" 
ON public.blogs 
FOR ALL 
TO service_role, anon, authenticated 
USING (true) 
WITH CHECK (true);

-- Auto updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_queries_updated_at ON public.queries;
CREATE TRIGGER update_queries_updated_at
BEFORE UPDATE ON public.queries
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blogs_updated_at ON public.blogs;
CREATE TRIGGER update_blogs_updated_at
BEFORE UPDATE ON public.blogs
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
