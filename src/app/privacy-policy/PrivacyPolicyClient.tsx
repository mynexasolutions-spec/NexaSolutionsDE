"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Lock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  FileCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyClient() {
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
                Privacy Policy
              </li>
            </ol>
          </nav>

          {/* Header Hero Section */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs sm:text-[13px] font-bold tracking-wide uppercase mb-3">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Legal & Privacy Compliance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-slate-900 tracking-tight leading-tight mb-4">
              Privacy Policy
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
              Nexa Solutions (&ldquo;Nexa Solutions&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website{" "}
              <strong className="text-slate-900 font-semibold">nexasolutions.de</strong> and{" "}
              <strong className="text-slate-900 font-semibold">nexa-solutions.in</strong> (the &ldquo;Site&rdquo;) and provides website development, software, and digital marketing services (the &ldquo;Services&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site, contact us, or purchase our Services, including payments made through payment gateway providers such as PhonePe.
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
                  Information We Collect
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                We may collect the following categories of information:
              </p>
              <ul className="space-y-3 pl-2 sm:pl-4">
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-semibold">Contact details:</strong> name, email address, phone number, and company name submitted through our contact, quote, or newsletter forms.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-semibold">Project information:</strong> details you share about your business or project requirements.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-semibold">Payment information:</strong> when you make a payment for our Services, payment processing is handled by our third-party payment gateway partner (e.g., PhonePe). We do not store your card, UPI PIN, or bank credentials on our servers; we may retain transaction identifiers, amount, date, and payment status for invoicing and record-keeping.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-semibold">Usage data:</strong> IP address, browser type, device information, pages visited, and referring URLs, collected automatically via cookies and analytics tools such as Google Analytics and Google Tag Manager.
                  </div>
                </li>
              </ul>
            </article>

            {/* Section 2 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  How We Use Your Information
                </h2>
              </div>
              <ul className="space-y-2.5 pl-2 sm:pl-4">
                {[
                  "To respond to enquiries and provide quotes for our Services.",
                  "To deliver, invoice, and support the Services you purchase.",
                  "To process payments and prevent fraud, in coordination with our payment gateway provider.",
                  "To send updates, newsletters, or marketing communications, where you have opted in.",
                  "To improve our Site, understand usage patterns, and comply with legal obligations.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Section 3 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors relative overflow-hidden">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Payment Processing
                </h2>
              </div>

              <div className="mb-4 p-4 rounded-xl bg-purple-50/70 border border-purple-200/70 flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-purple-700 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-purple-900">
                  Secure Third-Party Gateway Integration (PhonePe &amp; PCI-DSS Standards)
                </span>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Payments made on our Site or for our Services are processed by licensed third-party payment gateways, including PhonePe. When you make a payment, information you provide is transmitted directly to and processed by the payment gateway under its own privacy policy and security standards (including PCI-DSS compliance). Nexa Solutions does not have access to or store your full payment card details or UPI credentials.
              </p>
            </article>

            {/* Section 4 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Sharing of Information
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="space-y-2.5 pl-2 sm:pl-4">
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>Payment gateway providers (such as PhonePe) solely to process transactions.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>Service providers who help us operate the Site (hosting, analytics, email delivery), under confidentiality obligations.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span>Authorities, where required by law, regulation, or legal process.</span>
                </li>
              </ul>
            </article>

            {/* Section 5 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Data Retention
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We retain personal and transaction information for as long as necessary to provide the Services, comply with legal, tax, and accounting obligations, and resolve disputes.
              </p>
            </article>

            {/* Section 6 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Cookies
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We use cookies and similar technologies to operate the Site, remember preferences, and analyse traffic. You can control cookies through your browser settings; disabling cookies may affect Site functionality.
              </p>
            </article>

            {/* Section 7 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Data Security
                </h2>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70 mb-3">
                <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-emerald-900 font-medium leading-relaxed">
                  We implement reasonable technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. No method of transmission or storage is 100% secure.
                </p>
              </div>
            </article>

            {/* Section 8 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Your Rights
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us using the details below.
              </p>
            </article>

            {/* Section 9 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Children&apos;s Privacy
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Our Services are not directed to individuals under 18. We do not knowingly collect personal information from children.
              </p>
            </article>

            {/* Section 10 */}
            <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-0.5">
                  Changes to This Policy
                </h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised &ldquo;Last updated&rdquo; date.
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
                If you have questions about this Privacy Policy, please contact us:
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
