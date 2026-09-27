"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: "ahmed",
      quote: t(
        "Nexa Solutions hat genau das geliefert, was wir brauchten. Die Website sieht großartig aus und hat uns geholfen, mehr Kunden zu gewinnen.",
        "Nexa Solutions delivered exactly what we needed. The website looks great and has helped us get more customers."
      ),
      name: "Ahmed Khan",
      role: "Aura Masale",
      avatar: "/images/avatar-crop.png",
      rating: 5,
    },
    {
      id: "priya",
      quote: t(
        "Das Team hat unsere HRMS-Plattform mit großer Liebe zum Detail entwickelt. Die Kommunikation war während des gesamten Projekts reibungslos.",
        "The team built our HRMS platform with great attention to detail. Communication was smooth throughout the project."
      ),
      name: "Priya Sharma",
      role: "Meagle360",
      avatar: null,
      initials: "PS",
      rating: 5,
    },
    {
      id: "rohit",
      quote: t(
        "Professionell, pünktlich und sehr unterstützend. Sie haben unsere Anforderungen verstanden und eine hochwertige Lösung geliefert.",
        "Professional, timely and very supportive. They understood our requirements and delivered a high quality solution."
      ),
      name: "Rohit Verma",
      role: "Taibeena",
      avatar: null,
      initials: "RV",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-orange-600 text-xs font-bold tracking-wider uppercase mb-2.5">
            <span>|&rarr;</span>
            <span>{t("KUNDENSTIMMEN", "CLIENT TESTIMONIALS")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            {t("Was unsere Kunden sagen", "What Our Clients Say")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-orange-500 font-serif text-3xl font-bold leading-none mb-4 select-none">
                  &ldquo;&ldquo;
                </div>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  {item.avatar ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs shrink-0 border border-slate-200">
                      {item.initials}
                    </div>
                  )}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
