"use client";

import React from "react";
import { X, Play, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center p-8 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.15),transparent_70%)]" />

          {/* Reel preview simulation */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center text-orange-400 mb-6 animate-pulse">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("NEXA SHOWREEL", "NEXA SHOWREEL")}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              {t("Ideen in digitale Realität verwandeln", "Transforming Ideas into Digital Reality")}
            </h3>
            <p className="text-slate-400 text-sm max-w-md mb-6">
              {t(
                "Erfahren Sie, wie unsere Entwicklungs- und Designteams moderne Web-, Mobile- und KI-Lösungen für internationale Kunden umsetzen.",
                "Watch how our engineering and design teams build mission-critical web, mobile, and AI solutions for global clients."
              )}
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> 4K Ultra HD
              </span>
              <span>•</span>
              <span>{t("Dauer: 1m 45s", "Duration: 1m 45s")}</span>
              <span>•</span>
              <span>{t("Audio: Stereo Surround", "Audio: Spatial Stereo")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
