"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  User,
  Mail,
  Building,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BookingSectionProps {
  onOpenContact?: () => void;
}

export default function BookingSection({ onOpenContact }: BookingSectionProps = {}) {
  const { t, lang } = useLanguage();

  const [selectedCallType, setSelectedCallType] = useState<string>("discovery");
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string>("10:00");
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  // Call Types
  const callTypes = [
    {
      id: "discovery",
      duration: "15 Min",
      title: t("Kostenloses Erstgespräch", "Discovery Consultation"),
      description: t("Erste Einschätzung Ihrer Idee, Machbarkeit & grober Budgetrahmen.", "Brief overview of your project idea, feasibility, and budget ballpark."),
    },
    {
      id: "tech-scoping",
      duration: "30 Min",
      title: t("Technisches Scoping", "Tech Scoping & Roadmap"),
      description: t("Detaillierte Besprechung von Tech-Stack, Architektur & Zeitplan.", "In-depth review of software architecture, tech stack, and timeline."),
    },
    {
      id: "audit",
      duration: "45 Min",
      title: t("Tech- & KI-Audit", "Tech & Automation Audit"),
      description: t("Analyse bestehender Systeme & konkretes Automatisierungspotenzial.", "Review of existing stack and immediate automation bottlenecks."),
    },
  ];

  // Dynamically compute the next 5 working weekdays starting tomorrow
  const days = [
    { dayName: t("Mo", "Mon"), dateStr: "Montag, 10:00–18:00 CET", enDateStr: "Monday, 10:00–18:00 CET" },
    { dayName: t("Di", "Tue"), dateStr: "Dienstag, 10:00–18:00 CET", enDateStr: "Tuesday, 10:00–18:00 CET" },
    { dayName: t("Mi", "Wed"), dateStr: "Mittwoch, 10:00–18:00 CET", enDateStr: "Wednesday, 10:00–18:00 CET" },
    { dayName: t("Do", "Thu"), dateStr: "Donnerstag, 10:00–18:00 CET", enDateStr: "Thursday, 10:00–18:00 CET" },
    { dayName: t("Fr", "Fri"), dateStr: "Freitag, 10:00–16:00 CET", enDateStr: "Friday, 10:00–16:00 CET" },
  ];

  const timeSlots = ["09:30", "11:00", "13:30", "15:00", "16:30"];

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const selectedDayObj = days[selectedDay];
      const dayOnly = (lang === "de" ? selectedDayObj.dateStr : selectedDayObj.enDateStr).split(",")[0].trim();
      const activeCallObj = callTypes.find((c) => c.id === selectedCallType) || callTypes[0];

      await fetch("/api/forms/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          callType: activeCallObj.title,
          callDuration: activeCallObj.duration,
          dateSlot: dayOnly,
          timeSlot: selectedTime,
        }),
      });
    } catch (err) {
      console.error("Failed to submit consultation booking:", err);
    } finally {
      setIsSubmitting(false);
      setBookingSubmitted(true);
    }
  };

  const activeCall = callTypes.find((c) => c.id === selectedCallType) || callTypes[0];

  return (
    <section id="booking" className="py-10 sm:py-12 lg:py-16  bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-bold tracking-wider uppercase mb-3">
            <CalendarIcon className="w-3.5 h-3.5 text-orange-500" />
            <span>{t("TERMIN DIREKT ONLINE BUCHEN", "SCHEDULE A CONSULTATION")}</span>
          </div>

          <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] font-[900] text-[#0F172A] tracking-tight leading-[1.10] sm:leading-[1.09] mb-3 text-center">
            {t("Wählen Sie Ihren Wunschtermin für ein Erstgespräch", "Select Your Preferred Time for a Free Discovery Call")}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed  max-w-2xl mx-auto">
            {t(
              "Wählen Sie einen freien Slot. Das Gespräch findet bequem per Google Meet oder Microsoft Teams statt.",
              "Pick an available time slot. The consultation takes place directly via Google Meet or Microsoft Teams."
            )}
          </p>
        </div>

        {/* Booking Container */}
        <div className="max-w-[1150px] mx-auto bg-white rounded-[5px] border border-slate-200 shadow-xl overflow-hidden">
          {bookingSubmitted ? (
            <div className="p-10 sm:p-16 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 animate-in zoom-in-75">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                {t("TERMIN BESTÄTIGT", "BOOKING CONFIRMED")}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
                {t("Vielen Dank, ", "Thank You, ")} {formData.name || "Gast"}!
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mb-6">
                {t(
                  "Ihr Termin wurde erfolgreich reserviert. Eine Kalendereinladung mit Videolink wurde soeben an Ihre E-Mail gesendet.",
                  "Your consultation has been successfully booked. A calendar invite with a video link was sent to your email address."
                )}
              </p>

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-8">
                <span className="flex items-center gap-1.5 text-blue-600">
                  <Video className="w-4 h-4" /> Google Meet
                </span>
                <span>•</span>
                <span>{days[selectedDay].dayName}, {selectedTime} CET</span>
                <span>•</span>
                <span>{activeCall.duration}</span>
              </div>

              <button
                onClick={() => {
                  setBookingSubmitted(false);
                  setFormData({ name: "", email: "", company: "" });
                }}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-orange-600 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                {t("Weiteren Termin buchen", "Book Another Session")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              {/* Step 1: Call Type Selection (Left Column) */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>{t("SCHRITT 1", "STEP 1")}</span>
                  </div>

                  <h3 className="text-[20px] font-black text-slate-900 mb-4">
                    {t("Art der Beratung wählen", "Select Consultation Type")}
                  </h3>

                  <div className="space-y-3.5 mb-6">
                    {callTypes.map((type) => {
                      const isSelected = selectedCallType === type.id;
                      return (
                        <div
                          key={type.id}
                          onClick={() => setSelectedCallType(type.id)}
                          className={`p-4 rounded-[5px] border transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-white border-orange-500 shadow-sm ring-1 ring-orange-500/30"
                              : "bg-white/80 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`text-[18px] sm:text-[20px] font-bold ${isSelected ? "text-orange-600" : "text-slate-900"}`}>
                              {type.title}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                              <Clock className="w-3 h-3 text-slate-400" />
                              {type.duration}
                            </span>
                          </div>
                          <p className="text-[13px] sm:text-[15px] text-slate-500 leading-normal">
                            {type.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400"></div>

                <div className="p-4 rounded-[5px] text-[18px] sm:text-[20px] text-slate-600 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <ShieldCheck className="w-6.5 h-6.5 text-emerald-600" />
                    <span>{t("100% Unverbindlich & Kostenlos", "100% Free & No Obligation")}</span>
                  </div>
                  <p className="text-[13px] sm:text-[15px] text-slate-500 leading-normal">
                    {t(
                      "Wir analysieren Ihre Projektanforderungen und geben Ihnen sofort ehrliches Feedback zur Machbarkeit und Budget.",
                      "We analyze your project requirements and offer honest immediate feedback on feasibility and realistic budget."
                    )}
                  </p>
                </div>
              </div>

              {/* Step 2: Slot Selection & Form (Right Column) */}
              <div className="lg:col-span-7 p-6 sm:p-8">
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Day Picker */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      {t("Tag auswählen", "Select Day")}
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {days.map((d, idx) => {
                        const isSelected = selectedDay === idx;
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setSelectedDay(idx)}
                            className={`py-3 px-2 rounded-[5px] text-center border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                : "bg-white border-slate-200 hover:border-slate-300 text-slate-700"
                            }`}
                          >
                            <span className="block text-[12px] sm:text-[15px] font-bold">{d.dayName}</span>
                            <span className={`block text-[11px] mt-0.5 ${isSelected ? "text-slate-500" : "text-slate-600"}`}>
                              CET
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      {t("Uhrzeit (Deutsche Zeit / CET)", "Time Slot (CET / Berlin)")}
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {timeSlots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-1 text-[12px] sm:text-[15px] font-semibold rounded-[5px] border text-center transition-all cursor-pointer ${
                              isSelected
                                ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                                : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="pt-2 border-t border-slate-100 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[12px] sm:text-[15px] font-bold text-slate-700 uppercase mb-2">
                          {t("Ihr Name", "Your Name")} *
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            required
                            placeholder={t("z.B. Alexander Weber", "e.g. Alexander Weber")}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-[5px] border border-slate-300 text-[12px] sm:text-[15px] focus:outline-none focus:border-orange-500 bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] sm:text-[15px] font-bold text-slate-700 uppercase mb-2">
                          {t("Geschäftliche E-Mail", "Work Email")} *
                        </label>
                        <div className="relative">
                          <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="email"
                            required
                            placeholder="name@company.de"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-[5px] border border-slate-300 text-[12px] sm:text-[15px] focus:outline-none focus:border-orange-500 bg-slate-50/50"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] sm:text-[15px] font-bold text-slate-700 uppercase mb-2 mt-1">
                        {t("Unternehmen / Projekt", "Company or Project Name")}
                      </label>
                      <div className="relative">
                        <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          placeholder={t("z.B. Nexa Tech GmbH", "e.g. Acme Corp")}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-[5px] border border-slate-300 text-[12px] sm:text-[15px] focus:outline-none focus:border-orange-500 bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-[5px] bg-[#EA580C] hover:bg-[#C2410C] text-white text-[12px] sm:text-[15px] font-semibold transition-all duration-300 shadow-md hover:shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>{t("Termin wird gebucht...", "Booking session...")}</span>
                    ) : (
                      <>
                        <span>
                          {t(
                            `Termin für ${days[selectedDay].dayName}, ${selectedTime} Uhr buchen`,
                            `Confirm Booking for ${days[selectedDay].dayName}, ${selectedTime} CET`
                          )}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-1">
                    <p className="text-[12px] sm:text-[15px] text-slate-500">
                      {t("Lieber schriftlich anfragen?", "Prefer to write a message?")}{" "}
                      <Link
                        href="/contact"
                        className="text-orange-600 font-semibold hover:underline cursor-pointer ml-1"
                      >
                        {t("Nachricht senden", "Send an inquiry")}
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
