import fs from "fs";
import path from "path";
import { getSupabaseAdmin } from "./supabase";
import { blogPosts as initialBlogPosts, BlogPost } from "@/data/blogData";

export interface QueryRecord {
  id: string;
  type: "consultation" | "project" | "contact";
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  budget?: string | null;
  topic?: string | null;
  call_type?: string | null;
  date_slot?: string | null;
  time_slot?: string | null;
  message: string;
  status: "pending" | "in_progress" | "resolved";
  created_at: string;
  updated_at: string;
}

export interface BlogRecord {
  id: string;
  slug: string;
  title_de: string;
  title_en: string;
  excerpt_de: string;
  excerpt_en: string;
  category: string;
  category_label_de: string;
  category_label_en: string;
  category_badge_class: string;
  date: string;
  read_time_de: string;
  read_time_en: string;
  cover_image: string;
  featured: boolean;
  views: string;
  author: any;
  key_takeaways_de: string[];
  key_takeaways_en: string[];
  sections: any[];
  tags: string[];
  related_slugs: string[];
  created_at: string;
  updated_at: string;
}

interface LocalDB {
  queries: QueryRecord[];
  blogs: BlogRecord[];
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DB_FILE = path.join(DATA_DIR, "db.json");

function ensureLocalDB(): LocalDB {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    // Map initial blog posts from blogData.ts into BlogRecord format
    const seededBlogs: BlogRecord[] = initialBlogPosts.map((post, idx) => ({
      id: `seeded-blog-${idx + 1}`,
      slug: post.slug,
      title_de: post.titleDe,
      title_en: post.titleEn,
      excerpt_de: post.excerptDe,
      excerpt_en: post.excerptEn,
      category: post.category,
      category_label_de: post.categoryLabelDe,
      category_label_en: post.categoryLabelEn,
      category_badge_class: post.categoryBadgeClass,
      date: post.date,
      read_time_de: post.readTimeDe,
      read_time_en: post.readTimeEn,
      cover_image: post.coverImage,
      featured: !!post.featured,
      views: post.views,
      author: post.author,
      key_takeaways_de: post.keyTakeawaysDe || [],
      key_takeaways_en: post.keyTakeawaysEn || [],
      sections: post.sections || [],
      tags: post.tags || [],
      related_slugs: post.relatedSlugs || [],
      created_at: new Date(Date.now() - (idx * 86400000 * 2)).toISOString(),
      updated_at: new Date().toISOString(),
    }));

    const initialData: LocalDB = {
      queries: [],
      blogs: seededBlogs,
    };

    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), "utf-8");
    return initialData;
  }

  try {
    const raw = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading local db file, resetting:", err);
    return { queries: [], blogs: [] };
  }
}

function saveLocalDB(data: LocalDB) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write local DB:", err);
  }
}

/**
 * Check Supabase connection and table availability
 */
export async function checkSupabaseStatus() {
  try {
    const supabase = getSupabaseAdmin();
    const { error: qErr } = await supabase.from("queries").select("id").limit(1);
    const { error: bErr } = await supabase.from("blogs").select("id").limit(1);

    const queriesReady = !qErr;
    const blogsReady = !bErr;

    return {
      connected: true,
      queriesReady,
      blogsReady,
      queriesError: qErr ? qErr.message : null,
      blogsError: bErr ? bErr.message : null,
    };
  } catch (err: any) {
    return {
      connected: false,
      queriesReady: false,
      blogsReady: false,
      queriesError: err?.message || "Failed to connect to Supabase",
      blogsError: err?.message || "Failed to connect to Supabase",
    };
  }
}

/**
 * QUERIES / SUBMISSIONS METHODS
 */
export async function getQueriesList(params?: {
  search?: string;
  status?: string;
  type?: string;
}) {
  let queries: QueryRecord[] = [];
  let isFromSupabase = false;

  try {
    const supabase = getSupabaseAdmin();
    let query = supabase.from("queries").select("*").order("created_at", { ascending: false });

    if (params?.status && params.status !== "all") {
      query = query.eq("status", params.status);
    }
    if (params?.type && params.type !== "all") {
      query = query.eq("type", params.type);
    }

    const { data, error } = await query;

    if (!error && data) {
      queries = data as QueryRecord[];
      isFromSupabase = true;
    } else {
      throw error;
    }
  } catch (err) {
    // Fallback to local storage
    const local = ensureLocalDB();
    queries = [...local.queries].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    if (params?.status && params.status !== "all") {
      queries = queries.filter((q) => q.status === params.status);
    }
    if (params?.type && params.type !== "all") {
      queries = queries.filter((q) => q.type === params.type);
    }
  }

  // Filter by search string if given
  if (params?.search && params.search.trim()) {
    const s = params.search.toLowerCase().trim();
    queries = queries.filter(
      (q) =>
        q.name?.toLowerCase().includes(s) ||
        q.email?.toLowerCase().includes(s) ||
        q.message?.toLowerCase().includes(s) ||
        q.company?.toLowerCase().includes(s) ||
        q.service?.toLowerCase().includes(s) ||
        q.topic?.toLowerCase().includes(s)
    );
  }

  // Compute stats across all queries (unfiltered)
  let allForStats: QueryRecord[] = [];
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase.from("queries").select("status");
    if (data) {
      allForStats = data as any;
    } else {
      allForStats = ensureLocalDB().queries;
    }
  } catch {
    allForStats = ensureLocalDB().queries;
  }

  const stats = {
    total: allForStats.length,
    pending: allForStats.filter((q) => q.status === "pending").length,
    in_progress: allForStats.filter((q) => q.status === "in_progress").length,
    resolved: allForStats.filter((q) => q.status === "resolved").length,
  };

  return { queries, stats, isFromSupabase };
}

export async function createQueryRecord(item: {
  type: "consultation" | "project" | "contact";
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  topic?: string;
  call_type?: string;
  date_slot?: string;
  time_slot?: string;
  message: string;
}) {
  const newRecord: QueryRecord = {
    id: `qr_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    type: item.type,
    name: item.name,
    email: item.email,
    phone: item.phone || null,
    company: item.company || null,
    service: item.service || null,
    budget: item.budget || null,
    topic: item.topic || null,
    call_type: item.call_type || null,
    date_slot: item.date_slot || null,
    time_slot: item.time_slot || null,
    message: item.message,
    status: "pending",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // Always save to local backup
  const local = ensureLocalDB();
  local.queries.unshift(newRecord);
  saveLocalDB(local);

  // Attempt insert into Supabase
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("queries")
      .insert([
        {
          type: newRecord.type,
          name: newRecord.name,
          email: newRecord.email,
          phone: newRecord.phone,
          company: newRecord.company,
          service: newRecord.service,
          budget: newRecord.budget,
          topic: newRecord.topic,
          call_type: newRecord.call_type,
          date_slot: newRecord.date_slot,
          time_slot: newRecord.time_slot,
          message: newRecord.message,
          status: newRecord.status,
          created_at: newRecord.created_at,
          updated_at: newRecord.updated_at,
        },
      ])
      .select()
      .single();

    if (!error && data) {
      // Update local ID with the Supabase generated ID if any
      newRecord.id = data.id;
      local.queries[0].id = data.id;
      saveLocalDB(local);
      return { success: true, record: data, supabase: true };
    }
  } catch (err) {
    console.warn("Supabase insert failed, stored in local cache:", err);
  }

  return { success: true, record: newRecord, supabase: false };
}

export async function updateQueryStatusRecord(id: string, status: "pending" | "in_progress" | "resolved") {
  const local = ensureLocalDB();
  const idx = local.queries.findIndex((q) => q.id === id);
  if (idx !== -1) {
    local.queries[idx].status = status;
    local.queries[idx].updated_at = new Date().toISOString();
    saveLocalDB(local);
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("queries")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();

    if (!error) {
      return { success: true, data, supabase: true };
    }
  } catch (err) {
    console.warn("Supabase query update error:", err);
  }

  return { success: true, record: idx !== -1 ? local.queries[idx] : null, supabase: false };
}

export async function deleteQueryRecord(id: string) {
  const local = ensureLocalDB();
  local.queries = local.queries.filter((q) => q.id !== id);
  saveLocalDB(local);

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("queries").delete().eq("id", id);
    if (!error) {
      return { success: true, supabase: true };
    }
  } catch (err) {
    console.warn("Supabase query delete error:", err);
  }

  return { success: true, supabase: false };
}

/**
 * BLOGS METHODS
 */
export async function getBlogsList() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      return { blogs: data as BlogRecord[], isFromSupabase: true };
    }
  } catch (err) {
    console.warn("Failed to fetch blogs from Supabase:", err);
  }

  // Fallback to local storage
  const local = ensureLocalDB();
  return { blogs: local.blogs, isFromSupabase: false };
}

export async function saveBlogRecord(blog: Partial<BlogRecord>) {
  const local = ensureLocalDB();
  const now = new Date().toISOString();

  let existingIdx = local.blogs.findIndex((b) => b.slug === blog.slug || (blog.id && b.id === blog.id));
  let savedRecord: BlogRecord;

  if (existingIdx !== -1) {
    savedRecord = {
      ...local.blogs[existingIdx],
      ...blog,
      updated_at: now,
    } as BlogRecord;
    local.blogs[existingIdx] = savedRecord;
  } else {
    savedRecord = {
      id: blog.id || `blog_${Date.now()}`,
      slug: blog.slug || `post-${Date.now()}`,
      title_de: blog.title_de || "Neuer Beitrag",
      title_en: blog.title_en || "New Article",
      excerpt_de: blog.excerpt_de || "",
      excerpt_en: blog.excerpt_en || "",
      category: blog.category || "ai-automation",
      category_label_de: blog.category_label_de || "KI & Automatisierung",
      category_label_en: blog.category_label_en || "AI & Automation",
      category_badge_class: blog.category_badge_class || "bg-amber-50 text-amber-700 border-amber-200/80",
      date: blog.date || new Date().toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" }),
      read_time_de: blog.read_time_de || "5 Min. Lesezeit",
      read_time_en: blog.read_time_en || "5 min read",
      cover_image: blog.cover_image || "/images/ai-robot.png",
      featured: !!blog.featured,
      views: blog.views || "1.0k",
      author: blog.author || {
        name: "Nexa Solutions Team",
        roleDe: "Software-Architektur & KI-Entwicklung",
        roleEn: "Software Architecture & AI Engineering",
        avatar: "/favicon.ico",
      },
      key_takeaways_de: blog.key_takeaways_de || [],
      key_takeaways_en: blog.key_takeaways_en || [],
      sections: blog.sections || [],
      tags: blog.tags || [],
      related_slugs: blog.related_slugs || [],
      created_at: now,
      updated_at: now,
    };
    local.blogs.unshift(savedRecord);
  }

  saveLocalDB(local);

  // Upsert to Supabase
  try {
    const supabase = getSupabaseAdmin();
    const payload = {
      slug: savedRecord.slug,
      title_de: savedRecord.title_de,
      title_en: savedRecord.title_en,
      excerpt_de: savedRecord.excerpt_de,
      excerpt_en: savedRecord.excerpt_en,
      category: savedRecord.category,
      category_label_de: savedRecord.category_label_de,
      category_label_en: savedRecord.category_label_en,
      category_badge_class: savedRecord.category_badge_class,
      date: savedRecord.date,
      read_time_de: savedRecord.read_time_de,
      read_time_en: savedRecord.read_time_en,
      cover_image: savedRecord.cover_image,
      featured: savedRecord.featured,
      views: savedRecord.views,
      author: savedRecord.author,
      key_takeaways_de: savedRecord.key_takeaways_de,
      key_takeaways_en: savedRecord.key_takeaways_en,
      sections: savedRecord.sections,
      tags: savedRecord.tags,
      related_slugs: savedRecord.related_slugs,
      updated_at: now,
    };

    const { data, error } = await supabase
      .from("blogs")
      .upsert(payload, { onConflict: "slug" })
      .select()
      .single();

    if (!error && data) {
      return { success: true, record: data, supabase: true };
    }
  } catch (err) {
    console.warn("Supabase blog save failed, preserved locally:", err);
  }

  return { success: true, record: savedRecord, supabase: false };
}

export async function deleteBlogRecord(idOrSlug: string) {
  const local = ensureLocalDB();
  local.blogs = local.blogs.filter((b) => b.id !== idOrSlug && b.slug !== idOrSlug);
  saveLocalDB(local);

  try {
    const supabase = getSupabaseAdmin();
    await supabase.from("blogs").delete().or(`id.eq.${idOrSlug},slug.eq.${idOrSlug}`);
    return { success: true, supabase: true };
  } catch (err) {
    console.warn("Supabase blog delete error:", err);
  }

  return { success: true, supabase: false };
}

/**
 * Migration helper: Push all 5 blog posts from blogData.ts into Supabase
 */
export async function syncBlogsToSupabase() {
  try {
    const supabase = getSupabaseAdmin();
    const rows = initialBlogPosts.map((post) => ({
      slug: post.slug,
      title_de: post.titleDe,
      title_en: post.titleEn,
      excerpt_de: post.excerptDe,
      excerpt_en: post.excerptEn,
      category: post.category,
      category_label_de: post.categoryLabelDe,
      category_label_en: post.categoryLabelEn,
      category_badge_class: post.categoryBadgeClass,
      date: post.date,
      read_time_de: post.readTimeDe,
      read_time_en: post.readTimeEn,
      cover_image: post.coverImage,
      featured: !!post.featured,
      views: post.views,
      author: post.author,
      key_takeaways_de: post.keyTakeawaysDe || [],
      key_takeaways_en: post.keyTakeawaysEn || [],
      sections: post.sections || [],
      tags: post.tags || [],
      related_slugs: post.relatedSlugs || [],
    }));

    const { data, error } = await supabase
      .from("blogs")
      .upsert(rows, { onConflict: "slug" })
      .select();

    if (error) {
      return {
        success: false,
        error: error.message,
        hint: "Make sure you have run supabase-schema.sql in the Supabase SQL editor",
      };
    }

    return { success: true, count: data?.length || rows.length, data };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || "Failed to sync blogs to Supabase",
    };
  }
}
