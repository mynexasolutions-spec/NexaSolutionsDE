"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  Download,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  FileText,
  User,
  Mail,
  Phone,
  Building,
  Tag,
  Trash2,
  X,
  Plus,
  RefreshCw,
  LogOut,
  Upload,
  ExternalLink,
  Menu,
  Sparkles,
  Edit3,
  ShieldCheck,
  ChevronLeft,
  LayoutDashboard,
  Filter,
} from "lucide-react";
import { QueryRecord, BlogRecord } from "@/lib/db";

// Pastel Avatar Colors for the initials
const AVATAR_BG_COLORS = [
  "bg-purple-100 text-purple-700 border-purple-200",
  "bg-pink-100 text-pink-700 border-pink-200",
  "bg-blue-100 text-blue-700 border-blue-200",
  "bg-orange-100 text-orange-700 border-orange-200",
  "bg-emerald-100 text-emerald-700 border-emerald-200",
  "bg-amber-100 text-amber-700 border-amber-200",
  "bg-indigo-100 text-indigo-700 border-indigo-200",
  "bg-rose-100 text-rose-700 border-rose-200",
];

function getAvatarColor(name: string = "") {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_BG_COLORS.length;
  return AVATAR_BG_COLORS[index];
}

export default function AdminDashboardPage() {
  // Language State: Defaults to English ("en"), switchable to "de"
  const [adminLang, setAdminLang] = useState<"en" | "de">("en");

  // Translation helper
  const tr = (en: string, de: string) => (adminLang === "en" ? en : de);

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loginEmail, setLoginEmail] = useState("contact@nexa-solutions.de");
  const [loginPassword, setLoginPassword] = useState("Nexa_Solution@2026Sadiq");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Navigation & View
  const [activeTab, setActiveTab] = useState<"queries" | "blogs" | "consultations">("queries");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerProfileOpen, setHeaderProfileOpen] = useState(false);
  const [sidebarProfileOpen, setSidebarProfileOpen] = useState(false);

  // Queries Data & Filtering
  const [queries, setQueries] = useState<QueryRecord[]>([]);
  const [loadingQueries, setLoadingQueries] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [formTypeFilter, setFormTypeFilter] = useState<string>("all");
  const [selectedQueryId, setSelectedQueryId] = useState<string | null>(null);
  const [selectedCheckboxIds, setSelectedCheckboxIds] = useState<string[]>([]);
  const [detailTab, setDetailTab] = useState<"details" | "reply">("details");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Stats
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    in_progress: 0,
    resolved: 0,
  });

  // Blogs Data & Modal
  const [blogs, setBlogs] = useState<BlogRecord[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<BlogRecord> | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [syncingBlogs, setSyncingBlogs] = useState(false);

  // Notifications & Refs
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const sidebarProfileRef = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Close profile dropdowns on outside click (mouse or touch on side)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      const insideHeaderDropdown = profileDropdownRef.current?.contains(target);
      const insideSidebarProfile = sidebarProfileRef.current?.contains(target);

      if (!insideHeaderDropdown) {
        setHeaderProfileOpen(false);
      }
      if (!insideSidebarProfile) {
        setSidebarProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Load language preference if stored
  useEffect(() => {
    const saved = localStorage.getItem("nexa_admin_lang");
    if (saved === "en" || saved === "de") {
      setAdminLang(saved);
    }
  }, []);

  const changeAdminLang = (newLang: "en" | "de") => {
    setAdminLang(newLang);
    localStorage.setItem("nexa_admin_lang", newLang);
  };

  // Check auth on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/me");
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setIsAuthenticated(true);
            return;
          }
        }
        setIsAuthenticated(false);
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  // Fetch queries
  const fetchQueries = async () => {
    setLoadingQueries(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.set("search", searchQuery.trim());
      if (statusFilter !== "all") params.set("status", statusFilter);
      if (formTypeFilter !== "all") params.set("type", formTypeFilter);

      const res = await fetch(`/api/queries?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setQueries(data.queries || []);
        if (data.stats) setStats(data.stats);

        // Auto select first query if none selected
        if (data.queries?.length > 0 && !selectedQueryId) {
          setSelectedQueryId(data.queries[0].id);
        }
      }
    } catch (err) {
      console.error("Failed to fetch queries:", err);
    } finally {
      setLoadingQueries(false);
    }
  };

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoadingBlogs(true);
    try {
      const res = await fetch("/api/blogs");
      if (res.ok) {
        const data = await res.json();
        setBlogs(data.blogs || []);
      }
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoadingBlogs(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchQueries();
      fetchBlogs();
    }
  }, [isAuthenticated, statusFilter, formTypeFilter]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        showToast(tr("Welcome back, Sadiq Ali!", "Willkommen zurück, Sadiq Ali!"));
      } else {
        setLoginError(data.message || tr("Invalid credentials", "Anmeldung fehlgeschlagen"));
      }
    } catch (err: any) {
      setLoginError(err?.message || "Network error");
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      setIsAuthenticated(false);
      setHeaderProfileOpen(false);
      setSidebarProfileOpen(false);
    }
  };

  // Status Change
  const handleStatusChange = async (id: string, newStatus: "pending" | "in_progress" | "resolved") => {
    try {
      const res = await fetch("/api/queries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setQueries((prev) =>
          prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q))
        );
        fetchQueries();
        showToast(tr(`Status updated to "${newStatus}"`, `Status geändert zu "${newStatus}"`));
      }
    } catch (err) {
      console.error(err);
      showToast(tr("Error updating status", "Fehler beim Aktualisieren"));
    }
  };

  // Delete Query
  const handleDeleteQuery = async (id: string) => {
    if (!confirm(tr("Are you sure you want to delete this query?", "Möchten Sie diese Anfrage wirklich löschen?"))) return;

    try {
      const res = await fetch(`/api/queries?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setQueries((prev) => prev.filter((q) => q.id !== id));
        if (selectedQueryId === id) {
          const remaining = queries.filter((q) => q.id !== id);
          setSelectedQueryId(remaining.length > 0 ? remaining[0].id : null);
        }
        showToast(tr("Query deleted successfully", "Anfrage gelöscht"));
        fetchQueries();
      }
    } catch (err) {
      console.error(err);
      showToast(tr("Failed to delete query", "Fehler beim Löschen"));
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (queries.length === 0) {
      showToast(tr("No data available to export", "Keine Daten zum Exportieren"));
      return;
    }

    const headers = [
      "ID",
      "Type",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Service",
      "Budget",
      "Topic",
      "Call Type",
      "Date Slot",
      "Time Slot",
      "Status",
      "Date",
      "Message",
    ];

    const rows = queries.map((q) => [
      q.id,
      q.type,
      `"${q.name.replace(/"/g, '""')}"`,
      `"${q.email.replace(/"/g, '""')}"`,
      `"${q.phone || ""}"`,
      `"${q.company || ""}"`,
      `"${q.service || ""}"`,
      `"${q.budget || ""}"`,
      `"${q.topic || ""}"`,
      `"${q.call_type || ""}"`,
      `"${q.date_slot || ""}"`,
      `"${q.time_slot || ""}"`,
      q.status,
      new Date(q.created_at).toLocaleString("en-US"),
      `"${(q.message || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `nexa_queries_export_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(tr("CSV export downloaded successfully", "CSV-Export heruntergeladen"));
  };

  // Sync Blogs to Supabase
  const handleSyncBlogs = async () => {
    setSyncingBlogs(true);
    try {
      const res = await fetch("/api/blogs/sync", { method: "POST" });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(tr("Blogs successfully synced to Supabase!", "Blogs erfolgreich mit Supabase synchronisiert!"));
        fetchBlogs();
      } else {
        showToast(data.error || tr("Sync failed", "Synchronisation fehlgeschlagen"));
      }
    } catch (err: any) {
      showToast(err?.message || tr("Sync error", "Fehler beim Synchronisieren"));
    } finally {
      setSyncingBlogs(false);
    }
  };

  // Handle ImageKit upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setEditingBlog((prev) => ({
          ...prev,
          cover_image: data.url,
        }));
        showToast(tr("Image uploaded to ImageKit CDN!", "Bild erfolgreich auf ImageKit hochgeladen!"));
      } else {
        showToast(data.error || tr("Image upload failed", "Bild-Upload fehlgeschlagen"));
      }
    } catch (err: any) {
      showToast(err?.message || tr("Upload error", "Upload-Fehler"));
    } finally {
      setUploadingImage(false);
    }
  };

  // Save Blog
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog) return;

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingBlog),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showToast(tr("Blog article saved successfully!", "Blog erfolgreich gespeichert!"));
        setBlogModalOpen(false);
        setEditingBlog(null);
        fetchBlogs();
      } else {
        showToast(data.error || tr("Failed to save article", "Speichern fehlgeschlagen"));
      }
    } catch (err: any) {
      showToast(err?.message || tr("Save error", "Fehler beim Speichern"));
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (idOrSlug: string) => {
    if (!confirm(tr("Are you sure you want to delete this blog post?", "Möchten Sie diesen Blogbeitrag wirklich löschen?"))) return;

    try {
      const res = await fetch(`/api/blogs?id=${idOrSlug}`, { method: "DELETE" });
      if (res.ok) {
        showToast(tr("Blog article deleted", "Blogbeitrag gelöscht"));
        fetchBlogs();
      }
    } catch (err) {
      console.error(err);
      showToast(tr("Delete error", "Fehler beim Löschen"));
    }
  };

  // Filtered queries for active view
  const filteredQueries = useMemo(() => {
    let list = [...queries];
    if (activeTab === "consultations") {
      list = list.filter((q) => q.type === "consultation");
    }
    return list;
  }, [queries, activeTab]);

  // Paginated items
  const paginatedQueries = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredQueries.slice(start, start + pageSize);
  }, [filteredQueries, currentPage]);

  const totalPages = Math.ceil(filteredQueries.length / pageSize) || 1;

  // Selected item object
  const selectedQuery = useMemo(() => {
    return queries.find((q) => q.id === selectedQueryId) || null;
  }, [queries, selectedQueryId]);

  // Select all checkbox handler
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedCheckboxIds(paginatedQueries.map((q) => q.id));
    } else {
      setSelectedCheckboxIds([]);
    }
  };

  const handleToggleRowCheckbox = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCheckboxIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Loading Screen
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-600 font-medium text-sm">{tr("Loading dashboard...", "Dashboard wird geladen...")}</p>
        </div>
      </div>
    );
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-4 selection:bg-orange-500 selection:text-white">
        <div className="w-full max-w-[440px] bg-white rounded-3xl shadow-2xl p-7 sm:p-9 border border-slate-100">
          <div className="flex justify-end mb-1">
            {/* Language Switcher in Login Screen */}
            <div className="inline-flex rounded-xl border border-slate-200 p-0.5 bg-slate-50 text-xs font-bold shadow-2xs">
              <button
                type="button"
                onClick={() => changeAdminLang("en")}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  adminLang === "en" ? "bg-white text-orange-600 shadow-2xs font-extrabold" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => changeAdminLang("de")}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  adminLang === "de" ? "bg-white text-orange-600 shadow-2xs font-extrabold" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                DE
              </button>
            </div>
          </div>

          <div className="text-center mb-7">
            {/* Nexa_logo.svg in Login */}
            <div className="flex items-center justify-center mb-4">
              <img
                src="/Nexa_logo.svg"
                alt="Nexa Solutions"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Nexa Solutions
            </h1>
            <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mt-1">
              {tr("Admin Dashboard Portal", "Admin Dashboard Portal")}
            </p>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
              {tr(
                "Sign in with your administrative credentials.",
                "Melden Sie sich mit Ihren Administrator-Zugangsdaten an."
              )}
            </p>
          </div>

          {loginError && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {tr("Email Address", "E-Mail-Adresse")}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 text-sm text-slate-900 transition-all"
                  placeholder="contact@nexa-solutions.de"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {tr("Password", "Passwort")}
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 text-sm text-slate-900 transition-all"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3 mt-2 rounded-xl bg-[#0F172A] hover:bg-orange-600 text-white font-bold text-sm transition-all duration-200 cursor-pointer shadow-md disabled:opacity-75 flex items-center justify-center gap-2"
            >
              {loginLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{tr("Authorizing...", "Wird autorisiert...")}</span>
                </>
              ) : (
                <>
                  <span>{tr("Sign in to Dashboard", "Zum Dashboard anmelden")}</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-500 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
            >
              ← {tr("Back to Website", "Zurück zur Website")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#0F172A] text-white px-4 py-2.5 rounded-2xl shadow-2xl text-xs font-semibold flex items-center gap-2.5 animate-in fade-in slide-in-from-top-3 border border-slate-700/60">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main App Layout */}
      <div className="flex flex-1 min-h-0 relative">
        {/* ===================== FIXED ULTRA-MODERN EXECUTIVE SIDEBAR ===================== */}
        <aside
          className={`sticky top-0 h-screen bg-white/95 backdrop-blur-2xl border-r border-slate-200/80 flex flex-col transition-all duration-300 z-30 shadow-[4px_0_24px_rgba(15,23,42,0.03)] shrink-0 ${
            sidebarCollapsed ? "w-[80px]" : "w-60"
          } hidden lg:flex`}
        >
          {/* Brand Header with Nexa_logo.svg */}
          <div className="relative h-20 border-b border-slate-100 flex items-center px-3 w-full shrink-0">
            <Link
              href="/admin"
              className={`flex items-center gap-2 group ${
                sidebarCollapsed ? "w-100 justify-center" : "w-auto"
              }`}
            >
              <div className="relative h-9 px-2 shrink-0 flex items-center justify-center">
                <img
                  src="/Nexa_logo.svg"
                  alt="Nexa Solutions"
                  className="h-7 w-auto object-contain object-center max-w-full"
                />
              </div>
              {!sidebarCollapsed && (
                <div className="flex flex-col text-left">
                  <span className="font-black text-slate-900 text-sm tracking-tight leading-none">
                    Nexa Solution
                  </span>
                  <span className="text-[9px] font-extrabold text-orange-600 tracking-widest uppercase mt-1">
                    Admin Portal
                  </span>
                </div>
              )}
            </Link>

            {/* Absolute Positioned Collapse/Expand Toggle Button on Right */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-[5px] border border-slate-200/90 bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer shadow-sm group hover:scale-110 shrink-0 z-50"
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <ChevronLeft className={`w-3.5 h-3.5 transition-transform duration-300 ${sidebarCollapsed ? "rotate-180 text-orange-600" : ""}`} />
            </button>
          </div>

          {/* Navigation Links (Scrollable & Centered when Collapsed) */}
          <nav className="p-2.5 space-y-5 flex-1 overflow-y-auto custom-scrollbar">
            {/* Group 1: MAIN */}
            <div className="space-y-1.5">
              {!sidebarCollapsed && (
                <div className="px-3 pb-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  {tr("Main Menu", "Hauptmenü")}
                </div>
              )}

              {/* Queries Tab */}
              <button
                onClick={() => setActiveTab("queries")}
                className={`w-full flex items-center ${
                  sidebarCollapsed ? "justify-center px-2 py-2.5" : "justify-between px-3 py-2.5"
                } rounded-[5px] text-xs font-semibold transition-all duration-200 cursor-pointer relative group ${
                  activeTab === "queries"
                    ? "bg-slate-900 text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                }`}
                title={sidebarCollapsed ? tr("Queries & Messages", "Anfragen & Nachrichten") : undefined}
              >
                <div className={`flex items-center ${sidebarCollapsed ? "justify-center" : "gap-2.5"}`}>
                  <MessageSquare className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${activeTab === "queries" ? "text-orange-400" : "text-slate-400"}`} />
                  {!sidebarCollapsed && <span>{tr("Queries & Messages", "Anfragen & Nachrichten")}</span>}
                </div>
                {!sidebarCollapsed && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-[5px] font-bold transition-all ${
                      activeTab === "queries"
                        ? "bg-orange-600 text-white shadow-2xs"
                        : "bg-slate-100 text-slate-700 border border-slate-200/70"
                    }`}
                  >
                    {stats.total}
                  </span>
                )}
              </button>

              {/* Consultations Tab */}
              <button
                onClick={() => setActiveTab("consultations")}
                className={`w-full flex items-center ${
                  sidebarCollapsed ? "justify-center px-2 py-2.5" : "justify-between px-3 py-2.5"
                } rounded-[5px] text-xs font-semibold transition-all duration-200 cursor-pointer relative group ${
                  activeTab === "consultations"
                    ? "bg-slate-900 text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                }`}
                title={sidebarCollapsed ? tr("Consultations", "Beratungen") : undefined}
              >
                <div className={`flex items-center ${sidebarCollapsed ? "justify-center" : "gap-2.5"}`}>
                  <Calendar className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${activeTab === "consultations" ? "text-orange-400" : "text-slate-400"}`} />
                  {!sidebarCollapsed && <span>{tr("Consultations", "Beratungen")}</span>}
                </div>
                {!sidebarCollapsed && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-[5px] font-bold transition-all ${
                      activeTab === "consultations"
                        ? "bg-orange-600 text-white shadow-2xs"
                        : "bg-slate-100 text-slate-700 border border-slate-200/70"
                    }`}
                  >
                    {queries.filter((q) => q.type === "consultation").length}
                  </span>
                )}
              </button>
            </div>

            {/* Group 2: CONTENT */}
            <div className="space-y-1.5">
              {!sidebarCollapsed && (
                <div className="px-3 pb-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  {tr("Content Management", "Inhaltsverwaltung")}
                </div>
              )}

              {/* Blogs Tab */}
              <button
                onClick={() => setActiveTab("blogs")}
                className={`w-full flex items-center ${
                  sidebarCollapsed ? "justify-center px-2 py-2.5" : "justify-between px-3 py-2.5"
                } rounded-[5px] text-xs font-semibold transition-all duration-200 cursor-pointer relative group ${
                  activeTab === "blogs"
                    ? "bg-slate-900 text-white font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                }`}
                title={sidebarCollapsed ? tr("Blog Articles", "Blogartikel") : undefined}
              >
                <div className={`flex items-center ${sidebarCollapsed ? "justify-center" : "gap-2.5"}`}>
                  <FileText className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${activeTab === "blogs" ? "text-orange-400" : "text-slate-400"}`} />
                  {!sidebarCollapsed && <span>{tr("Blog Articles", "Blogartikel")}</span>}
                </div>
                {!sidebarCollapsed && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-[5px] font-bold transition-all ${
                      activeTab === "blogs"
                        ? "bg-orange-600 text-white shadow-2xs"
                        : "bg-slate-100 text-slate-700 border border-slate-200/70"
                    }`}
                  >
                    {blogs.length}
                  </span>
                )}
              </button>
            </div>

            {/* Database & System Live Status Card */}
            {!sidebarCollapsed && (
              <div className="pt-2">
                <div className="p-3 rounded-[5px] bg-slate-900 text-white border border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-wider">System Live</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-100">Supabase & ImageKit</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Realtime Cloud DB active</p>
                </div>
              </div>
            )}
          </nav>

          {/* Bottom Profile Bar with User Icon */}
          <div className="p-2.5 border-t border-slate-100 shrink-0 bg-white relative" ref={sidebarProfileRef}>
            <div
              onClick={() => setSidebarProfileOpen(!sidebarProfileOpen)}
              className={`flex items-center ${
                sidebarCollapsed ? "justify-center p-2" : "justify-between p-2"
              } rounded-[5px] bg-white border border-slate-200/80 hover:border-orange-400 transition-all shadow-2xs cursor-pointer group`}
              title={tr("Toggle Admin Options", "Admin-Optionen umschalten")}
            >
              <div className={`flex items-center ${sidebarCollapsed ? "justify-center" : "gap-2"} overflow-hidden`}>
                <div className="relative shrink-0">
                  <div className="w-8 h-8 rounded-[5px] bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-2xs group-hover:scale-105 transition-transform">
                    <User className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                {!sidebarCollapsed && (
                  <div className="flex flex-col truncate">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900 truncate leading-tight">
                        Sadiq Ali
                      </span>
                    </div>
                    <span className="text-[9px] text-orange-600 font-bold uppercase tracking-wider mt-0.5">
                      Administrator
                    </span>
                  </div>
                )}
              </div>

              {!sidebarCollapsed && (
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${sidebarProfileOpen ? "rotate-180 text-orange-600" : ""}`} />
              )}
            </div>

            {/* Sidebar Profile Popover Dropdown */}
            {sidebarProfileOpen && (
              <div className="absolute bottom-full left-3 mb-2 w-64 bg-white rounded-[5px] shadow-2xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-bottom-2">
                <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/70">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 rounded-[5px] bg-orange-50 border border-orange-200/60 text-orange-600 shrink-0 mt-0.5">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-extrabold text-slate-900 truncate">Sadiq Ali</p>
                      </div>
                      <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                        contact@nexa-solutions.de
                      </p>
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[5px] bg-emerald-100 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Role: Super Admin
                    </span>
                  </div>
                </div>

                <div className="divide-y divide-slate-100">
                  <div className="py-1">
                    <Link
                      href="/"
                      target="_blank"
                      onClick={() => setSidebarProfileOpen(false)}
                      className="w-full px-4 py-2 text-[12px] text-slate-700 hover:bg-slate-100/80 flex items-center gap-3 transition-colors font-semibold cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-500" />
                      <span>{tr("View Live Website", "Website öffnen")}</span>
                    </Link>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => {
                        fetchQueries();
                        fetchBlogs();
                        showToast(tr("Data refreshed successfully", "Daten erfolgreich aktualisiert"));
                        setSidebarProfileOpen(false);
                      }}
                      className="w-full px-4 py-2 text-[12px] text-slate-700 hover:bg-slate-100/80 flex items-center gap-3 transition-colors font-semibold text-left cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4 text-slate-500" />
                      <span>{tr("Refresh Dashboard", "Dashboard aktualisieren")}</span>
                    </button>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => {
                        setSidebarProfileOpen(false);
                        handleLogout();
                      }}
                      className="w-full px-4 py-2 text-[12px] text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors font-bold text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 text-red-600" />
                      <span>{tr("Sign out", "Abmelden")}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* ===================== MOBILE SIDEBAR DRAWER ===================== */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 lg:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-76 bg-white h-full flex flex-col p-5 shadow-2xl animate-in slide-in-from-left duration-300 border-r border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drawer Header with Logo & Lang */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-[5px] bg-slate-50 border border-slate-200/80">
                    <img src="/Nexa_logo.svg" alt="Nexa Solutions" className="h-7 w-auto" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-slate-900 text-sm">Nexa Solution</span>
                    <span className="text-[9px] text-orange-600 font-extrabold tracking-widest uppercase">Admin</span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-[5px] text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="mb-5 p-2 rounded-[5px] bg-slate-100/80 border border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 pl-1">{tr("Language", "Sprache")}:</span>
                <div className="inline-flex rounded-[5px] bg-white p-0.5 border border-slate-200/60 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => changeAdminLang("en")}
                    className={`px-2.5 py-1 rounded-[5px] text-xs font-bold transition-all cursor-pointer ${
                      adminLang === "en" ? "bg-slate-900 text-white" : "text-slate-600"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => changeAdminLang("de")}
                    className={`px-2.5 py-1 rounded-[5px] text-xs font-bold transition-all cursor-pointer ${
                      adminLang === "de" ? "bg-slate-900 text-white" : "text-slate-600"
                    }`}
                  >
                    DE
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-2 flex-1 overflow-y-auto">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1 mb-1">
                  {tr("Navigation", "Navigation")}
                </div>

                <button
                  onClick={() => {
                    setActiveTab("queries");
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-[5px] text-xs font-bold transition-all ${
                    activeTab === "queries"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className={`w-4 h-4 ${activeTab === "queries" ? "text-orange-400" : "text-slate-500"}`} />
                    <span>{tr("Queries", "Anfragen")}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-[5px] font-extrabold ${activeTab === "queries" ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                    {stats.total}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab("consultations");
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-[5px] text-xs font-bold transition-all ${
                    activeTab === "consultations"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className={`w-4 h-4 ${activeTab === "consultations" ? "text-orange-400" : "text-slate-500"}`} />
                    <span>{tr("Consultations", "Beratungen")}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-[5px] font-extrabold ${activeTab === "consultations" ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                    {queries.filter((q) => q.type === "consultation").length}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab("blogs");
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-[5px] text-xs font-bold transition-all ${
                    activeTab === "blogs"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className={`w-4 h-4 ${activeTab === "blogs" ? "text-orange-400" : "text-slate-500"}`} />
                    <span>{tr("Blog Articles", "Blogartikel")}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-[5px] font-extrabold ${activeTab === "blogs" ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                    {blogs.length}
                  </span>
                </button>
              </div>

              {/* Mobile User Bottom */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center justify-between mb-3 p-2.5 rounded-[5px] bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-[5px] bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs">
                      <User className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span className="text-xs font-extrabold text-slate-900">Sadiq Ali</span>
                      </div>
                      <div className="text-[9px] font-bold text-orange-600 uppercase">Administrator</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-[5px] flex items-center justify-center gap-2 transition-colors border border-red-200/60 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{tr("Sign out", "Abmelden")}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===================== MAIN CONTENT WRAPPER ===================== */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* ===================== ULTRA-MODERN STICKY TOP HEADER ===================== */}
          <header className="h-20 bg-white/85 backdrop-blur-2xl border-b border-slate-200/80 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-1 shadow-[0_1px_3px_0_rgba(15,23,42,0.02)]">
            {/* Left: Mobile Toggle & Page Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-[5px] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200/60"
                aria-label="Open navigation"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-orange-600 uppercase tracking-widest">
                  Admin Dashboard
                </span>
                <span className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                  {activeTab === "queries"
                    ? tr("Customer Queries", "Kundenanfragen")
                    : activeTab === "consultations"
                    ? tr("Consultation Requests", "Beratungsanfragen")
                    : tr("Blog Management", "Blogverwaltung")}
                </span>
              </div>
            </div>

            {/* Right: Modern Actions Toolbar */}
            <div className="flex items-center gap-2 sm:gap-3 pl-2">
              {/* Language Switcher Segmented Control */}
              <div className="inline-flex rounded-[5px] border border-slate-200/80 p-0.5 bg-slate-100/80 text-xs font-bold shadow-2xs">
                <button
                  type="button"
                  onClick={() => changeAdminLang("en")}
                  className={`px-2.5 py-1 rounded-[5px] transition-all cursor-pointer ${
                    adminLang === "en"
                      ? "bg-slate-900 text-white shadow-xs font-extrabold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => changeAdminLang("de")}
                  className={`px-2.5 py-1 rounded-[5px] transition-all cursor-pointer ${
                    adminLang === "de"
                      ? "bg-slate-900 text-white shadow-xs font-extrabold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  DE
                </button>
              </div>

              {/* Refresh Data Button */}
              <button
                onClick={() => {
                  fetchQueries();
                  fetchBlogs();
                  showToast(tr("Data refreshed successfully", "Daten erfolgreich aktualisiert"));
                }}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-[5px] transition-colors cursor-pointer border border-transparent hover:border-slate-200/80"
                title={tr("Refresh data", "Aktualisieren")}
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              {/* Notifications Icon with Pulse Ring */}
              <div className="relative">
                <button
                  onClick={() => showToast(tr(`${stats.pending} pending inquiries requiring action`, `${stats.pending} ausstehende Anfragen`))}
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-[5px] transition-colors cursor-pointer relative border border-transparent hover:border-slate-200/80"
                  title="Notifications"
                >
                  <Bell className="w-4 h-4" />
                  {stats.pending > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-orange-600 ring-2 ring-white animate-pulse" />
                  )}
                </button>
              </div>

              <div className="h-5 w-px bg-slate-200/80 hidden sm:block" />

              {/* User Profile Chip Dropdown with Outside Click detection & Modern Styling */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() => setHeaderProfileOpen(!headerProfileOpen)}
                  className="flex items-center gap-2 p-1.5 sm:pl-2 sm:pr-2.5 rounded-[5px] hover:bg-slate-100 transition-colors cursor-pointer border border-transparent hover:border-slate-200/80 shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-[5px] bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                    <User className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="hidden sm:flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900 leading-tight">
                        Sadiq Ali
                      </span>
                    </div>
                    <span className="text-[9px] text-orange-600 font-bold uppercase">
                      Admin
                    </span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 hidden sm:block transition-transform duration-200 ${headerProfileOpen ? "rotate-180 text-orange-600" : ""}`} />
                </button>

                {headerProfileOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 sm:w-72 bg-white rounded-[5px] shadow-2xl border border-slate-200/90 py-2 z-[100] animate-in fade-in slide-in-from-top-2 max-w-[calc(100vw-2rem)]"
                  >
                    <div className="px-4 py-3.5 border-b border-slate-100 bg-slate-50/70">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-[5px] bg-orange-50 border border-orange-200/60 text-orange-600 shrink-0">
                          <User className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-extrabold text-slate-900 truncate">Sadiq Ali</p>
                          <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                            contact@nexa-solutions.de
                          </p>
                        </div>
                      </div>
                      <div className="mt-2.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[5px] bg-emerald-100 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Role: Super Admin
                        </span>
                      </div>
                    </div>

                    <div className="divide-y divide-slate-100">
                      <div className="py-1">
                        <Link
                          href="/"
                          target="_blank"
                          onClick={() => setHeaderProfileOpen(false)}
                          className="w-full px-4 py-2 text-[12px] text-slate-700 hover:bg-slate-100/80 flex items-center gap-3 transition-colors font-semibold cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4 text-slate-500" />
                          <span>{tr("View Live Website", "Website öffnen")}</span>
                        </Link>
                      </div>

                      <div className="py-1">
                        <button
                          onClick={() => {
                            fetchQueries();
                            fetchBlogs();
                            showToast(tr("Data refreshed successfully", "Daten erfolgreich aktualisiert"));
                            setHeaderProfileOpen(false);
                          }}
                          className="w-full px-4 py-2 text-[12px] text-slate-700 hover:bg-slate-100/80 flex items-center gap-3 transition-colors font-semibold text-left cursor-pointer"
                        >
                          <RefreshCw className="w-4 h-4 text-slate-500" />
                          <span>{tr("Refresh Dashboard", "Dashboard aktualisieren")}</span>
                        </button>
                      </div>

                      <div className="py-1">
                        <button
                          onClick={() => {
                            setHeaderProfileOpen(false);
                            handleLogout();
                          }}
                          className="w-full px-4 py-2 text-[12px] text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors font-bold text-left cursor-pointer"
                        >
                          <LogOut className="w-4 h-4 text-red-600" />
                          <span>{tr("Sign out", "Abmelden")}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* ===================== PAGE CONTENT BODY ===================== */}
          <main className="p-4 sm:p-7 space-y-6 flex-1">
            {/* TAB: QUERIES OR CONSULTATIONS */}
            {(activeTab === "queries" || activeTab === "consultations") && (
              <>
                {/* Header Title & Export Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {activeTab === "queries"
                          ? tr("Queries", "Anfragen")
                          : tr("Consultations", "Beratungstermine")}
                      </h1>
                      <span className="px-2.5 py-0.5 rounded-[5px] bg-orange-100 text-orange-700 text-xs font-bold">
                        {filteredQueries.length}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      {activeTab === "queries"
                        ? tr(
                            "Manage and respond to queries submitted from website forms.",
                            "Verwalten und beantworten Sie Anfragen aus den Website-Formularen."
                          )
                        : tr(
                            "Review and organize scheduled discovery and strategy consultation calls.",
                            "Überprüfen und organisieren Sie vereinbarte Erstgespräche und Scoping-Termine."
                          )}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={handleExportCSV}
                      className="px-4 py-2.5 bg-slate-900 hover:bg-orange-600 text-white rounded-[5px] text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>{tr("Export", "Exportieren")}</span>
                    </button>
                  </div>
                </div>

                {/* 4 STATS METRIC CARDS */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
                  {/* Total Queries */}
                  <div className="bg-white p-4 sm:p-5 rounded-[5px] border border-slate-200/80 shadow-2xs flex items-center gap-4 hover:shadow-sm transition-shadow">
                    <div className="w-11 h-11 rounded-[5px] bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100 shadow-2xs">
                      <MessageSquare className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                        {stats.total}
                      </div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">
                        {tr("Total Queries", "Gesamte Anfragen")}
                      </div>
                    </div>
                  </div>

                  {/* Pending */}
                  <div className="bg-white p-4 sm:p-5 rounded-[5px] border border-slate-200/80 shadow-2xs flex items-center gap-4 hover:shadow-sm transition-shadow">
                    <div className="w-11 h-11 rounded-[5px] bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100 shadow-2xs">
                      <Clock className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                        {stats.pending}
                      </div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">
                        {tr("Pending", "Ausstehend")}
                      </div>
                    </div>
                  </div>

                  {/* In Progress */}
                  <div className="bg-white p-4 sm:p-5 rounded-[5px] border border-slate-200/80 shadow-2xs flex items-center gap-4 hover:shadow-sm transition-shadow">
                    <div className="w-11 h-11 rounded-[5px] bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
                      <MessageSquare className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                        {stats.in_progress}
                      </div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">
                        {tr("In Progress", "In Bearbeitung")}
                      </div>
                    </div>
                  </div>

                  {/* Resolved */}
                  <div className="bg-white p-4 sm:p-5 rounded-[5px] border border-slate-200/80 shadow-2xs flex items-center gap-4 hover:shadow-sm transition-shadow">
                    <div className="w-11 h-11 rounded-[5px] bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                        {stats.resolved}
                      </div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">
                        {tr("Resolved", "Gelöst")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEARCH AND FILTERS BAR */}
                <div className="bg-white p-3.5 sm:p-4 rounded-[5px] border border-slate-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex flex-1 flex-wrap items-center gap-3">
                    {/* Search inside table */}
                    <div className="relative flex-1 min-w-[200px]">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder={tr("Search queries...", "Anfragen suchen...")}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2 bg-slate-50 border border-slate-200/90 rounded-[5px] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500"
                      />
                    </div>

                    {/* Status filter */}
                    <div className="relative min-w-[130px]">
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200/90 rounded-[5px] text-xs font-semibold text-slate-700 appearance-none focus:outline-none focus:bg-white cursor-pointer pr-8"
                      >
                        <option value="all">{tr("All Status", "Alle Status")}</option>
                        <option value="pending">{tr("Pending", "Ausstehend")}</option>
                        <option value="in_progress">{tr("In Progress", "In Bearbeitung")}</option>
                        <option value="resolved">{tr("Resolved", "Gelöst")}</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Form type filter */}
                    <div className="relative min-w-[140px]">
                      <select
                        value={formTypeFilter}
                        onChange={(e) => setFormTypeFilter(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200/90 rounded-[5px] text-xs font-semibold text-slate-700 appearance-none focus:outline-none focus:bg-white cursor-pointer pr-8"
                      >
                        <option value="all">{tr("All Forms", "Alle Formulare")}</option>
                        <option value="consultation">{tr("Consultations", "Beratungen")}</option>
                        <option value="project">{tr("Start Your Project", "Projekt starten")}</option>
                        <option value="contact">{tr("Contact Page", "Kontaktseite")}</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Batch actions if checked */}
                  {selectedCheckboxIds.length > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-600">
                        {selectedCheckboxIds.length} {tr("selected", "ausgewählt")}
                      </span>
                      <button
                        onClick={() => {
                          selectedCheckboxIds.forEach((id) =>
                            handleStatusChange(id, "resolved")
                          );
                          setSelectedCheckboxIds([]);
                        }}
                        className="px-2.5 py-1.5 rounded-[5px] bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        {tr("Mark as Resolved", "Als gelöst markieren")}
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(tr(`Delete ${selectedCheckboxIds.length} queries?`, `${selectedCheckboxIds.length} Anfragen löschen?`))) {
                            selectedCheckboxIds.forEach((id) => handleDeleteQuery(id));
                            setSelectedCheckboxIds([]);
                          }
                        }}
                        className="px-2.5 py-1.5 rounded-[5px] bg-red-50 text-red-700 border border-red-200 text-xs font-bold hover:bg-red-100 transition-colors cursor-pointer"
                      >
                        {tr("Delete Selected", "Ausgewählte löschen")}
                      </button>
                    </div>
                  )}
                </div>

                {/* DATA TABLE + DETAIL DRAWER CONTAINER */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                  {/* LEFT TABLE: 7 or 8 COLUMNS */}
                  <div
                    className={`${
                      selectedQuery ? "lg:col-span-8" : "lg:col-span-12"
                    } bg-white rounded-[5px] border border-slate-200/80 shadow-2xs overflow-hidden transition-all duration-300`}
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-100 bg-slate-50/60 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            <th className="py-3.5 pl-4 pr-2 w-10">
                              <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={
                                  paginatedQueries.length > 0 &&
                                  selectedCheckboxIds.length === paginatedQueries.length
                                }
                                className="rounded-[5px] border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
                              />
                            </th>
                            <th className="py-3.5 px-3">{tr("Name", "Name")}</th>
                            <th className="py-3.5 px-3">{tr("Email", "E-Mail")}</th>
                            <th className="py-3.5 px-3">{tr("Message", "Nachricht")}</th>
                            <th className="py-3.5 px-3">{tr("Date", "Datum")}</th>
                            <th className="py-3.5 px-3">{tr("Status", "Status")}</th>
                            <th className="py-3.5 pr-4 pl-2 text-right">{tr("Actions", "Aktionen")}</th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 text-xs">
                          {loadingQueries ? (
                            <tr>
                              <td colSpan={7} className="py-12 text-center text-slate-500">
                                <div className="flex items-center justify-center gap-2">
                                  <div className="w-4 h-4 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
                                  <span>{tr("Loading queries...", "Lade Anfragen...")}</span>
                                </div>
                              </td>
                            </tr>
                          ) : paginatedQueries.length === 0 ? (
                            <tr>
                              <td colSpan={7} className="py-14 text-center text-slate-400">
                                <div className="flex flex-col items-center gap-2">
                                  <MessageSquare className="w-8 h-8 text-slate-300" />
                                  <p className="font-semibold text-slate-600">{tr("No queries found", "Keine Anfragen gefunden")}</p>
                                  <p className="text-[11px] text-slate-400">
                                    {tr(
                                      "As soon as someone submits a form on the website, it will show up here in real time.",
                                      "Sobald jemand ein Formular auf der Website absendet, erscheint es hier in Echtzeit."
                                    )}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            paginatedQueries.map((item) => {
                              const isSelected = selectedQueryId === item.id;
                              const isChecked = selectedCheckboxIds.includes(item.id);
                              const initial = item.name ? item.name.charAt(0).toUpperCase() : "U";
                              const avatarColor = getAvatarColor(item.name);

                              return (
                                <tr
                                  key={item.id}
                                  onClick={() => setSelectedQueryId(item.id)}
                                  className={`cursor-pointer transition-colors ${
                                    isSelected
                                      ? "bg-orange-50/60 border-l-4 border-l-orange-600"
                                      : "hover:bg-slate-50/70"
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <td className="py-3.5 pl-4 pr-2" onClick={(e) => e.stopPropagation()}>
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => {}}
                                      onClick={(e) => handleToggleRowCheckbox(item.id, e)}
                                      className="rounded-[5px] border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
                                    />
                                  </td>

                                  {/* Name with Initial */}
                                  <td className="py-3.5 px-3">
                                    <div className="flex items-center gap-2.5">
                                      <div
                                        className={`w-7 h-7 rounded-[5px] flex items-center justify-center font-bold text-xs shrink-0 border ${avatarColor}`}
                                      >
                                        {initial}
                                      </div>
                                      <span className="font-semibold text-slate-900 truncate max-w-[120px] sm:max-w-[140px]">
                                        {item.name}
                                      </span>
                                    </div>
                                  </td>

                                  {/* Email */}
                                  <td className="py-3.5 px-3 text-slate-500 truncate max-w-[130px] sm:max-w-[160px]">
                                    {item.email}
                                  </td>

                                  {/* Message snippet */}
                                  <td className="py-3.5 px-3 text-slate-600 truncate max-w-[150px] sm:max-w-[200px]">
                                    {item.message}
                                  </td>

                                  {/* Date */}
                                  <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap text-[11px]">
                                    {new Date(item.created_at).toLocaleDateString(adminLang === "en" ? "en-US" : "de-DE", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    })}{" "}
                                    {new Date(item.created_at).toLocaleTimeString(adminLang === "en" ? "en-US" : "de-DE", {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </td>

                                  {/* Status badge */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <span
                                      className={`inline-flex items-center px-2.5 py-0.5 rounded-[5px] text-[11px] font-bold ${
                                        item.status === "pending"
                                          ? "bg-amber-100 text-amber-700"
                                          : item.status === "in_progress"
                                          ? "bg-blue-100 text-blue-700"
                                          : "bg-emerald-100 text-emerald-700"
                                      }`}
                                    >
                                      {item.status === "pending"
                                        ? tr("Pending", "Ausstehend")
                                        : item.status === "in_progress"
                                        ? tr("In Progress", "In Bearbeitung")
                                        : tr("Resolved", "Gelöst")}
                                    </span>
                                  </td>

                                  {/* Actions */}
                                  <td
                                    className="py-3.5 pr-4 pl-2 text-right"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <button
                                      onClick={() => handleDeleteQuery(item.id)}
                                      className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-[5px] transition-colors cursor-pointer"
                                      title={tr("Delete", "Löschen")}
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination Bar */}
                    <div className="p-3.5 sm:p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div>
                        {tr("Showing", "Zeige")} {(currentPage - 1) * pageSize + 1} {tr("to", "bis")}{" "}
                        {Math.min(currentPage * pageSize, filteredQueries.length)} {tr("of", "von")}{" "}
                        {filteredQueries.length} {tr("results", "Ergebnissen")}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="w-7 h-7 rounded-[5px] border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        >
                          ‹
                        </button>

                        {Array.from({ length: totalPages }).map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentPage(idx + 1)}
                            className={`w-7 h-7 rounded-[5px] text-xs font-bold transition-colors cursor-pointer ${
                              currentPage === idx + 1
                                ? "bg-slate-900 text-white"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {idx + 1}
                          </button>
                        ))}

                        <button
                          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="w-7 h-7 rounded-[5px] border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT DETAIL PANEL (DRAWER) */}
                  {selectedQuery && (
                    <div className="lg:col-span-4 bg-white rounded-[5px] border border-slate-200/80 shadow-sm p-5 sm:p-6 space-y-5 sticky top-24">
                      {/* Top Header with Avatar, Name, Email, Status & Close Button */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-11 h-11 rounded-[5px] flex items-center justify-center text-base font-extrabold border ${getAvatarColor(
                              selectedQuery.name
                            )}`}
                          >
                            {selectedQuery.name ? selectedQuery.name.charAt(0).toUpperCase() : "U"}
                          </div>
                          <div>
                            <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                              {selectedQuery.name}
                            </h3>
                            <p className="text-xs text-slate-500">{selectedQuery.email}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-[5px] text-[11px] font-bold ${
                              selectedQuery.status === "pending"
                                ? "bg-amber-100 text-amber-700"
                                : selectedQuery.status === "in_progress"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {selectedQuery.status === "pending"
                              ? tr("Pending", "Ausstehend")
                              : selectedQuery.status === "in_progress"
                              ? tr("In Progress", "In Bearbeitung")
                              : tr("Resolved", "Gelöst")}
                          </span>

                          <button
                            onClick={() => setSelectedQueryId(null)}
                            className="p-1 rounded-[5px] text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Detail / Reply Tabs */}
                      <div className="flex border-b border-slate-100 gap-4 text-xs font-bold">
                        <button
                          onClick={() => setDetailTab("details")}
                          className={`pb-2.5 cursor-pointer flex items-center gap-1.5 ${
                            detailTab === "details"
                              ? "text-orange-600 border-b-2 border-orange-600 font-extrabold"
                              : "text-slate-400 hover:text-slate-600"
                          }`}
                        >
                          <User className="w-3.5 h-3.5" />
                          <span>{tr("Details", "Details")}</span>
                        </button>
                        <button
                          onClick={() => setDetailTab("reply")}
                          className={`pb-2.5 cursor-pointer flex items-center gap-1.5 ${
                            detailTab === "reply"
                              ? "text-orange-600 border-b-2 border-orange-600 font-extrabold"
                              : "text-slate-400 hover:text-slate-600"
                          }`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>{tr("Reply", "Antworten")}</span>
                        </button>
                      </div>

                      {detailTab === "details" ? (
                        <>
                          {/* Info Rows */}
                          <div className="space-y-3 text-xs">
                            <div className="flex items-center justify-between py-1 border-b border-slate-50">
                              <span className="text-slate-400 flex items-center gap-2">
                                <User className="w-3.5 h-3.5" /> {tr("Name", "Name")}
                              </span>
                              <span className="font-semibold text-slate-800">
                                {selectedQuery.name}
                              </span>
                            </div>

                            <div className="flex items-center justify-between py-1 border-b border-slate-50">
                              <span className="text-slate-400 flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5" /> {tr("Email", "E-Mail")}
                              </span>
                              <a
                                href={`mailto:${selectedQuery.email}`}
                                className="font-semibold text-orange-600 hover:underline"
                              >
                                {selectedQuery.email}
                              </a>
                            </div>

                            {selectedQuery.phone && (
                              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                                <span className="text-slate-400 flex items-center gap-2">
                                  <Phone className="w-3.5 h-3.5" /> {tr("Phone", "Telefon")}
                                </span>
                                <span className="font-semibold text-slate-800">
                                  {selectedQuery.phone}
                                </span>
                              </div>
                            )}

                            {selectedQuery.company && (
                              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                                <span className="text-slate-400 flex items-center gap-2">
                                  <Building className="w-3.5 h-3.5" /> {tr("Company", "Unternehmen")}
                                </span>
                                <span className="font-semibold text-slate-800">
                                  {selectedQuery.company}
                                </span>
                              </div>
                            )}

                            <div className="flex items-center justify-between py-1 border-b border-slate-50">
                              <span className="text-slate-400 flex items-center gap-2">
                                <Tag className="w-3.5 h-3.5" /> {tr("Form Type", "Formular-Typ")}
                              </span>
                              <span className="font-bold uppercase text-[10px] px-2 py-0.5 rounded-[5px] bg-slate-100 text-slate-700">
                                {selectedQuery.type === "consultation"
                                  ? tr("Schedule Consultation", "Beratung buchen")
                                  : selectedQuery.type === "project"
                                  ? tr("Start Your Project", "Projekt starten")
                                  : tr("Contact Page", "Kontaktseite")}
                              </span>
                            </div>

                            {selectedQuery.service && (
                              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                                <span className="text-slate-400">{tr("Service", "Leistung")}</span>
                                <span className="font-semibold text-slate-800">
                                  {selectedQuery.service}
                                </span>
                              </div>
                            )}

                            {selectedQuery.budget && (
                              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                                <span className="text-slate-400">{tr("Budget", "Budget")}</span>
                                <span className="font-semibold text-slate-800">
                                  {selectedQuery.budget}
                                </span>
                              </div>
                            )}

                            {selectedQuery.call_type && (
                              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                                <span className="text-slate-400">{tr("Call Type", "Art der Beratung")}</span>
                                <span className="font-semibold text-slate-800">
                                  {selectedQuery.call_type}
                                </span>
                              </div>
                            )}

                            {selectedQuery.date_slot && (
                              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                                <span className="text-slate-400">{tr("Date Slot", "Termin-Tag")}</span>
                                <span className="font-semibold text-slate-800">
                                  {selectedQuery.date_slot}
                                </span>
                              </div>
                            )}

                            {selectedQuery.time_slot && (
                              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                                <span className="text-slate-400">{tr("Time Slot", "Uhrzeit")}</span>
                                <span className="font-semibold text-slate-800">
                                  {selectedQuery.time_slot} CET
                                </span>
                              </div>
                            )}

                            <div className="flex items-center justify-between py-1 border-b border-slate-50">
                              <span className="text-slate-400 flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5" /> {tr("Date", "Datum")}
                              </span>
                              <span className="font-semibold text-slate-800">
                                {new Date(selectedQuery.created_at).toLocaleString(adminLang === "en" ? "en-US" : "de-DE", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>

                            {/* Status Selector */}
                            <div className="flex items-center justify-between py-1">
                              <span className="text-slate-400 flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5" /> {tr("Status", "Status")}
                              </span>
                              <select
                                value={selectedQuery.status}
                                onChange={(e) =>
                                  handleStatusChange(
                                    selectedQuery.id,
                                    e.target.value as any
                                  )
                                }
                                className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-[5px] font-bold text-xs cursor-pointer focus:outline-none"
                              >
                                <option value="pending">🟠 {tr("Pending", "Ausstehend")}</option>
                                <option value="in_progress">🔵 {tr("In Progress", "In Bearbeitung")}</option>
                                <option value="resolved">🟢 {tr("Resolved", "Gelöst")}</option>
                              </select>
                            </div>
                          </div>

                          {/* Message Box */}
                          <div className="space-y-1.5">
                            <span className="text-xs font-bold text-slate-900">{tr("Message", "Nachricht")}</span>
                            <div className="p-3.5 rounded-[5px] bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed max-h-48 overflow-y-auto">
                              {selectedQuery.message || tr("No message provided.", "Keine Nachricht hinterlegt.")}
                            </div>
                          </div>

                          {/* Quick Actions Buttons */}
                          <div className="space-y-2 pt-2 border-t border-slate-100">
                            <span className="text-xs font-bold text-slate-900 block">
                              {tr("Quick Actions", "Schnellaktionen")}
                            </span>
                            <div className="flex flex-wrap items-center gap-2">
                              <button
                                onClick={() =>
                                  handleStatusChange(selectedQuery.id, "resolved")
                                }
                                className="flex-1 min-w-[120px] py-2 px-3 rounded-[5px] bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>{tr("Mark as Resolved", "Als gelöst markieren")}</span>
                              </button>

                              <button
                                onClick={() =>
                                  handleStatusChange(selectedQuery.id, "in_progress")
                                }
                                className="flex-1 min-w-[120px] py-2 px-3 rounded-[5px] bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <Clock className="w-3.5 h-3.5" />
                                <span>{tr("Mark as In Progress", "In Bearbeitung")}</span>
                              </button>

                              <button
                                onClick={() => handleDeleteQuery(selectedQuery.id)}
                                className="py-2 px-3 rounded-[5px] bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                                title={tr("Delete query", "Anfrage löschen")}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>{tr("Delete", "Löschen")}</span>
                              </button>
                            </div>
                          </div>
                        </>
                      ) : (
                        /* Reply tab composer */
                        <div className="space-y-3 text-xs">
                          <p className="text-slate-500">
                            {tr(
                              `Reply directly via email to ${selectedQuery.email}.`,
                              `Antworten Sie direkt per E-Mail an ${selectedQuery.email}.`
                            )}
                          </p>
                          <a
                            href={`mailto:${selectedQuery.email}?subject=Nexa%20Solutions%20-%20Your%20Inquiry`}
                            className="w-full py-2.5 rounded-[5px] bg-slate-900 hover:bg-orange-600 text-white font-bold text-center block transition-colors cursor-pointer shadow-sm"
                          >
                            {tr("Open in Mail App ↗", "Im E-Mail-Programm öffnen ↗")}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* TAB: BLOGS MANAGEMENT */}
            {activeTab === "blogs" && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {tr("Blogs Management", "Blog-Verwaltung")}
                      </h1>
                      <span className="px-2.5 py-0.5 rounded-[5px] bg-orange-100 text-orange-700 text-xs font-bold">
                        {blogs.length}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      {tr(
                        "Create and manage blog articles in Supabase with ImageKit CDN media upload.",
                        "Erstellen und verwalten Sie Blogartikel in Supabase mit ImageKit Bild-Upload."
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 flex-wrap">
                    <button
                      onClick={handleSyncBlogs}
                      disabled={syncingBlogs}
                      className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-[5px] text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-60 shadow-2xs"
                      title={tr("Sync all articles to Supabase", "Kopiert alle Artikel nach Supabase")}
                    >
                      <RefreshCw className={`w-4 h-4 ${syncingBlogs ? "animate-spin" : ""}`} />
                      <span>{syncingBlogs ? tr("Syncing...", "Synchronisiere...") : tr("Sync to Supabase", "Mit Supabase synchronisieren")}</span>
                    </button>

                    <button
                      onClick={() => {
                        setEditingBlog({
                          title_de: "",
                          title_en: "",
                          excerpt_de: "",
                          excerpt_en: "",
                          category: "ai-automation",
                          cover_image: "/images/ai-robot.png",
                          date: new Date().toLocaleDateString(adminLang === "en" ? "en-US" : "de-DE", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }),
                          read_time_de: "5 Min. Lesezeit",
                          read_time_en: "5 min read",
                          tags: ["AI", "Next.js"],
                          featured: false,
                        });
                        setBlogModalOpen(true);
                      }}
                      className="px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-[5px] text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{tr("New Blog Post", "Neuen Artikel verfassen")}</span>
                    </button>
                  </div>
                </div>

                {/* Blogs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {loadingBlogs ? (
                    <div className="col-span-full py-12 text-center text-slate-500">
                      {tr("Loading blog articles...", "Lade Blog-Artikel...")}
                    </div>
                  ) : blogs.length === 0 ? (
                    <div className="col-span-full py-12 text-center text-slate-400">
                      {tr("No blogs found. Click 'Sync to Supabase' to populate.", "Keine Blogs vorhanden. Klicken Sie auf 'Mit Supabase synchronisieren'.")}
                    </div>
                  ) : (
                    blogs.map((post) => (
                      <div
                        key={post.id || post.slug}
                        className="bg-white rounded-[5px] border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col hover:shadow-md transition-all group"
                      >
                        {/* Cover Image */}
                        <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                          {post.cover_image && (
                            <img
                              src={post.cover_image}
                              alt={post.title_en || post.title_de}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-[5px] text-[10px] font-bold bg-white/90 backdrop-blur-xs text-slate-800 shadow-xs uppercase">
                              {post.category}
                            </span>
                          </div>
                          {post.featured && (
                            <div className="absolute top-3 right-3">
                              <span className="px-2 py-0.5 rounded-[5px] text-[10px] font-bold bg-orange-500 text-white shadow-xs">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                          <div>
                            <div className="text-[11px] font-semibold text-slate-400 mb-1">
                              {post.date} • {adminLang === "en" ? post.read_time_en : post.read_time_de}
                            </div>
                            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug line-clamp-2">
                              {adminLang === "en" ? (post.title_en || post.title_de) : (post.title_de || post.title_en)}
                            </h3>
                            <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                              {adminLang === "en" ? (post.excerpt_en || post.excerpt_de) : (post.excerpt_de || post.excerpt_en)}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                            >
                              <span>{tr("Preview", "Vorschau")}</span>
                              <ExternalLink className="w-3 h-3" />
                            </Link>

                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => {
                                  setEditingBlog(post);
                                  setBlogModalOpen(true);
                                }}
                                className="p-1.5 rounded-[5px] text-slate-500 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                                title={tr("Edit", "Bearbeiten")}
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteBlog(post.id || post.slug)}
                                className="p-1.5 rounded-[5px] text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                                title={tr("Delete", "Löschen")}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ===================== BLOG EDITOR MODAL ===================== */}
      {blogModalOpen && editingBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setBlogModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-[5px] shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900">
                {editingBlog.id ? tr("Edit Article", "Artikel bearbeiten") : tr("New Blog Post", "Neuen Artikel verfassen")}
              </h3>
              <button
                onClick={() => setBlogModalOpen(false)}
                className="p-1.5 rounded-[5px] text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveBlog} className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {tr("Title (English) *", "Titel (Englisch) *")}
                </label>
                <input
                  type="text"
                  required
                  value={editingBlog.title_en || ""}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title_en: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-orange-500"
                  placeholder="e.g. How European Businesses Save 15+ Hours Weekly"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {tr("Title (German) *", "Titel (Deutsch) *")}
                </label>
                <input
                  type="text"
                  required
                  value={editingBlog.title_de || ""}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title_de: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:border-orange-500"
                  placeholder="z.B. Wie deutsche Unternehmen mit KI 15h sparen"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {tr("Category", "Kategorie")}
                  </label>
                  <select
                    value={editingBlog.category || "ai-automation"}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50 border border-slate-200 text-xs font-semibold focus:bg-white focus:outline-none cursor-pointer"
                  >
                    <option value="ai-automation">{tr("AI & Automation", "KI & Automatisierung")}</option>
                    <option value="web-development">{tr("Web Development", "Webentwicklung")}</option>
                    <option value="mobile-apps">{tr("Mobile Apps", "Mobile Apps")}</option>
                    <option value="cloud-tech">{tr("Cloud & Security", "Cloud & Sicherheit")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {tr("URL Slug", "URL-Slug")}
                  </label>
                  <input
                    type="text"
                    value={editingBlog.slug || ""}
                    onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:outline-none"
                    placeholder="my-new-blog-post-2026"
                  />
                </div>
              </div>

              {/* ImageKit Upload Area */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {tr("Cover Image (ImageKit CDN)", "Cover-Bild (ImageKit CDN)")}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={editingBlog.cover_image || ""}
                    onChange={(e) => setEditingBlog({ ...editingBlog, cover_image: e.target.value })}
                    className="flex-1 px-3.5 py-2.5 rounded-[5px] bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:outline-none"
                    placeholder="https://ik.imagekit.io/bvnsa8iey/..."
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploadingImage}
                    className="px-4 py-2.5 bg-slate-900 hover:bg-orange-600 text-white rounded-[5px] text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-60 shadow-xs shrink-0"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploadingImage ? tr("Uploading...", "Lädt hoch...") : tr("Upload to ImageKit", "Auf ImageKit hochladen")}</span>
                  </button>
                </div>

                {editingBlog.cover_image && (
                  <div className="mt-2.5 relative h-28 w-44 rounded-[5px] overflow-hidden border border-slate-200 shadow-2xs">
                    <img
                      src={editingBlog.cover_image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {tr("Excerpt / Summary (English)", "Kurzbeschreibung (Englisch)")}
                </label>
                <textarea
                  rows={2}
                  value={editingBlog.excerpt_en || ""}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt_en: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:outline-none"
                  placeholder="Short summary for the article card..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {tr("Excerpt / Summary (German)", "Kurzbeschreibung (Deutsch)")}
                </label>
                <textarea
                  rows={2}
                  value={editingBlog.excerpt_de || ""}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt_de: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[5px] bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:outline-none"
                  placeholder="Kurze Zusammenfassung für die Blog-Karte..."
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setBlogModalOpen(false)}
                  className="px-4 py-2.5 rounded-[5px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                >
                  {tr("Cancel", "Abbrechen")}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-[5px] bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-500/20 cursor-pointer"
                >
                  {tr("Save Article", "Artikel speichern")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
