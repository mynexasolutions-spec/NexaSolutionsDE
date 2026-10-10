"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
  CreditCard,
  Scale,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServiceClient() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFF] text-slate-800 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Ambient Glows matching Homepage & Footer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#A78BFA]/30 via-[#C4B5FD]/20 to-transparent blur-3xl" />
          <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-l from-[#38BDF8]/20 via-[#818CF8]/15 to-transparent blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EA580C]/10 via-[#FED7AA]/20 to-transparent blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 text-xs sm:text-[13px] text-slate-500 font-medium">
            <ol className="flex items-center gap-1.5 sm:gap-2">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="text-slate-900 font-bold" aria-current="page">
                Terms of Service
              </li>
            </ol>
          </nav>

          {/* Header Hero Section */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-[13px] font-bold tracking-wide uppercase mb-3">
              <Scale className="w-4 h-4 text-blue-600" />
              <span>Legal Agreements &amp; User Terms</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-slate-900 tracking-tight leading-tight mb-4">
              Terms of Service
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span>Last updated: <strong>July 20, 2026</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>nexasolutions.de &amp; nexa-solutions.in</span>
              </div>
            </div>
          </div>

          {/* Introduction Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-9 shadow-xs mb-8">
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website{" "}
              <strong className="text-slate-900 font-semibold">nexasolutions.de</strong> and{" "}
              <strong className="text-slate-900 font-semibold">nexa-solutions.in</strong> (the &ldquo;Site&rdquo;) and the website development, software, and digital marketing services (the &ldquo;Services&rdquo;) provided by Nexa Solutions (&ldquo;Nexa Solutions&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By using our Site or engaging our Services, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Policy Sections Grid / Stack */}
          <div className="space-y-6 sm:space-y-8">
            {/* Section 1 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Our Services
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Nexa Solutions provides website design and development, application development, performance marketing, and related digital services. The specific scope, deliverables, timeline, and fees for any engagement will be set out in a separate quote, proposal, or agreement between Nexa Solutions and the client.
              </p>
            </article>

            {/* Section 2 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Fees and Payment
                </h2>
              </div>
              <ul className="space-y-3 pl-2 sm:pl-4">
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>Fees for Services are as agreed in the applicable quote or invoice and are payable in the currency specified.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>Payments may be made through supported online payment gateways, including PhonePe, or via bank transfer, as made available to you.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>Online payments are processed by our third-party payment gateway partners. By making a payment, you also agree to the applicable payment gateway&apos;s terms and privacy policy.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>Nexa Solutions is not responsible for delays, failures, or errors caused by the payment gateway, your bank, or your payment instrument.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>Unless otherwise agreed in writing, fees paid for Services already rendered are non-refundable. Advance payments for work not yet started may be eligible for a refund at Nexa Solutions&apos; discretion, less any costs already incurred.</span>
                </li>
              </ul>
            </article>

            {/* Section 3 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Client Responsibilities
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                You agree to provide accurate information, timely feedback, and any content, credentials, or assets reasonably required for us to deliver the Services.
              </p>
            </article>

            {/* Section 4 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Intellectual Property
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Unless otherwise agreed in writing, upon full payment, ownership of the final deliverables created specifically for you transfers to you. Nexa Solutions retains ownership of pre-existing tools, frameworks, and proprietary code libraries used to build the deliverables, and may reference completed work in its portfolio unless you request otherwise in writing.
              </p>
            </article>

            {/* Section 5 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Website Content and Use
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                All content on the Site, including text, graphics, logos, and design, is the property of Nexa Solutions or its licensors and may not be copied or reproduced without permission. You agree not to misuse the Site, attempt unauthorised access, or use it for unlawful purposes.
              </p>
            </article>

            {/* Section 6 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Third-Party Payment Gateway
                </h2>
              </div>

              <div className="mb-4 p-4 rounded-xl bg-blue-50/70 border border-blue-200/70 flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-blue-700 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-blue-900">
                  PhonePe and Third-Party Gateway Disclaimers
                </span>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Where payments are facilitated through PhonePe or any other third-party payment gateway, that provider&apos;s own terms of service, privacy policy, and security measures apply to the transaction. Nexa Solutions is not liable for any acts, omissions, security incidents, or service interruptions caused by the payment gateway provider.
              </p>
            </article>

            {/* Section 7 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                To the maximum extent permitted by law, Nexa Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site or Services. Our total liability for any claim shall not exceed the amount paid by you for the Services giving rise to the claim.
              </p>
            </article>

            {/* Section 8 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Termination
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We may suspend or terminate access to the Site or an ongoing engagement if these Terms are violated, or if required to comply with law.
              </p>
            </article>

            {/* Section 9 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Governing Law
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
                These Terms are governed by the laws of India, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.
              </div>
            </article>

            {/* Section 10 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Changes to These Terms
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We may update these Terms from time to time. Continued use of the Site or Services after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </article>

            {/* Section 11: Contact Us */}
            <article className="bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/20 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-9 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Contact Us
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                For questions about these Terms, please contact us:
              </p>

              {/* Contact Pills matching Homepage & Footer aesthetic */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Email */}
                <a
                  href="mailto:contact@nexa-solutions.in"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-blue-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 truncate block transition-colors">
                      contact@nexa-solutions.in
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918077313241"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-sky-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-sky-600 truncate block transition-colors">
                      +91 8077313241
                    </span>
                  </div>
                </a>

                {/* Office */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Office</span>
                    <span className="text-sm font-semibold text-slate-900 truncate block">
                      New Delhi, India
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
