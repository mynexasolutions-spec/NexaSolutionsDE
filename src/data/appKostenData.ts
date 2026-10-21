/**
 * App-Entwicklung Kosten Konfigurationsdatei (Bilingual: DE & EN)
 * 
 * HINWEIS: Alle Preise und Stundensätze sind mit Platzhaltern versehen und können
 * jederzeit zentral hier angepasst werden, ohne den Code der Seite zu verändern.
 */

export interface PricingTier {
  id: string;
  nameDe: string;
  nameEn: string;
  subtitleDe: string;
  subtitleEn: string;
  badgeDe?: string;
  badgeEn?: string;
  popular?: boolean;
  priceRange: string;
  durationDe: string;
  durationEn: string;
  descriptionDe: string;
  descriptionEn: string;
  featuresDe: string[];
  featuresEn: string[];
}

export interface FaqItem {
  questionDe: string;
  questionEn: string;
  answerDe: string;
  answerEn: string;
}

export const APP_COST_CONFIG = {
  // Schnelle Zusammenfassungsbox direkt unter H1
  summaryBox: {
    titleDe: "App Entwicklung Kosten auf einen Blick (Richtwerte 2026)",
    titleEn: "App Development Cost at a Glance (2026 Benchmarks)",
    noteDe: "Die tatsächlichen Kosten hängen von Plattform, Funktionsumfang und Backend-Architektur ab. Nachfolgend transparente Orientierungswerte:",
    noteEn: "Actual development costs depend on platform choice, feature complexity, and cloud architecture. Below are transparent guidelines:",
    ranges: [
      {
        labelDe: "MVP / Basis-App",
        labelEn: "MVP / Core App",
        range: "[PREIS HIER EINTRAGEN: z. B. 12.000 € – 25.000 €]",
        durationDe: "4–8 Wochen",
        durationEn: "4–8 Weeks",
        descriptionDe: "Fokussierter Kernfunktionsumfang für Markttests und Investorenpitches.",
        descriptionEn: "Focused core feature set to validate traction and pitch angel investors.",
      },
      {
        labelDe: "Business / Mittelstand-App",
        labelEn: "Business / SME App",
        range: "[PREIS HIER EINTRAGEN: z. B. 25.000 € – 60.000 €]",
        durationDe: "2–4 Monate",
        durationEn: "2–4 Months",
        descriptionDe: "Individuelle Workflows, API-Integrationen, Rollenkonzepte und Admin-Panel.",
        descriptionEn: "Tailored business logic, API integrations, role permissions, and web admin portal.",
      },
      {
        labelDe: "Enterprise / Komplexe Plattform",
        labelEn: "Enterprise / High-Scale Platform",
        range: "[PREIS HIER EINTRAGEN: z. B. ab 60.000 €]",
        durationDe: "4–8 Monate",
        durationEn: "4–8 Months",
        descriptionDe: "Hochskalierbare Cloud-Architektur, Realtime-Daten, KI-Anbindung & Altsysteme.",
        descriptionEn: "High-concurrency cloud architecture, realtime sync, AI agents, and ERP legacy systems.",
      },
      {
        labelDe: "Agentur-Stundensatz",
        labelEn: "Agency Hourly Rate",
        range: "[PREIS HIER EINTRAGEN: z. B. 95 € – 140 € / Std.]",
        durationDe: "Senior Engineering",
        durationEn: "Senior Engineering",
        descriptionDe: "Transparente Sprint-Abrechnung durch erfahrene Entwickler aus Stuttgart.",
        descriptionEn: "Transparent sprint billing delivered by senior software engineers in Germany.",
      },
    ],
  },

  // Detaillierte App-Typen
  pricingTiers: [
    {
      id: "mvp",
      nameDe: "MVP (Minimum Viable Product)",
      nameEn: "MVP (Minimum Viable Product)",
      subtitleDe: "Schneller Markteintritt & Validierung",
      subtitleEn: "Rapid Market Validation & Proof of Concept",
      badgeDe: "Beliebt bei Startups",
      badgeEn: "Startup Favorite",
      priceRange: "[PREIS HIER EINTRAGEN: z. B. 12.000 € – 25.000 €]",
      durationDe: "ca. 4 bis 8 Wochen",
      durationEn: "approx. 4 to 8 weeks",
      descriptionDe:
        "Ideal für Startups und innovative Unternehmensbereiche, die eine App-Idee mit echten Nutzern testen oder Investoren überzeugen möchten. Fokussiert auf 1–2 Kernfunktionen.",
      descriptionEn:
        "Engineered for founders and innovation teams validating concepts with real users or raising seed capital. Strictly focused on 1–2 high-impact workflows.",
      featuresDe: [
        "Plattform: iOS & Android via React Native / Expo",
        "1 Kernfunktions-Workflow (z. B. Buchung oder Matching)",
        "Sichere Authentifizierung (E-Mail, Google/Apple Login)",
        "Schlankes Cloud-Backend & Datenbank",
        "Einhaltung der DSGVO & App Store Guideline Konformität",
        "Begleitung bis zum erfolgreichen Store-Release",
      ],
      featuresEn: [
        "Cross-platform iOS & Android via React Native / Expo",
        "1 primary core workflow (e.g. booking, ordering or matching)",
        "Secure user authentication (Apple, Google, Email/Password)",
        "High-performance cloud database & REST/GraphQL API",
        "GDPR compliance & App Store guideline validation",
        "Guaranteed App Store & Google Play approval support",
      ],
    },
    {
      id: "business",
      nameDe: "Maßgeschneiderte Business-App",
      nameEn: "Custom Business App",
      subtitleDe: "Für wachsende KMU & etablierte Unternehmen",
      subtitleEn: "For Established SMEs & Scaling Brands",
      popular: true,
      badgeDe: "Meistgewählt",
      badgeEn: "Most Popular",
      priceRange: "[PREIS HIER EINTRAGEN: z. B. 25.000 € – 60.000 €]",
      durationDe: "ca. 2 bis 4 Monate",
      durationEn: "approx. 2 to 4 months",
      descriptionDe:
        "Vollwertige Kunden- oder Mitarbeiter-App zur Digitalisierung von Geschäftsprozessen. Nahtlose Anbindung an vorhandene ERP-, CRM- oder Buchhaltungssysteme.",
      descriptionEn:
        "Full-scale operational or customer-facing mobile application. Seamless bidirectional sync with your existing ERP, CRM, or accounting infrastructure.",
      featuresDe: [
        "Gemeinsame Codebasis für iOS & Android (100% native Haptik)",
        "Individuelles UI/UX-Design nach Firmen-CI in Figma",
        "Push-Benachrichtigungen & personalisierte Feeds",
        "Zahlungsabwicklung (Stripe, PayPal, In-App-Purchases)",
        "Webbasiertes Admin-Dashboard zur Datenverwaltung",
        "Offline-Funktionalität & Daten-Synchronisation",
        "Automatisierte Tests & CI/CD Deployment Pipeline",
      ],
      featuresEn: [
        "Unified codebase for iOS & Android with 60 FPS native feel",
        "Bespoke Figma UI/UX design matching your exact brand identity",
        "Automated push notifications & user retention messaging",
        "Payment integration (Stripe, PayPal, In-App Subscriptions)",
        "Web-based admin portal for real-time operations management",
        "Offline-first SQLite architecture with automatic cloud sync",
        "Automated E2E testing suites & CI/CD deployment pipeline",
      ],
    },
    {
      id: "enterprise",
      nameDe: "Enterprise & High-End Plattform",
      nameEn: "Enterprise & High-Scale Platform",
      subtitleDe: "Für Konzerne, FinTechs & komplexe Portale",
      subtitleEn: "For Corporations, FinTechs & Complex Ecosystems",
      badgeDe: "Maximale Skalierbarkeit",
      badgeEn: "Ultimate Scalability",
      priceRange: "[PREIS HIER EINTRAGEN: z. B. ab 60.000 €]",
      durationDe: "ca. 4 bis 8 Monate",
      durationEn: "approx. 4 to 8 months",
      descriptionDe:
        "Hochkomplexe Multiplattform-Systeme mit strengsten Sicherheits- und Compliance-Anforderungen, Microservices-Architektur und KI-gestützter Prozessautomatisierung.",
      descriptionEn:
        "Mission-critical multi-platform digital ecosystems featuring strict security standards, microservices architecture, and integrated AI automation agents.",
      featuresDe: [
        "Microservice- oder Serverless-Cloud-Architektur (AWS/GCP)",
        "Echtzeit-Synchronisierung via WebSockets / GraphQL",
        "KI-Agenten & Chatbot-Integration (DSGVO-konform)",
        "Enterprise Single Sign-On (SAML, Okta, Azure AD)",
        "Rollen- und Rechte-Matrix auf Feldebene",
        "Höchste Sicherheitsaudits, Pentests & DSGVO-Verschlüsselung",
        "Dedizierter Support- und Wartungsvertrag (SLA)",
      ],
      featuresEn: [
        "Serverless or microservices cloud architecture on AWS / GCP",
        "Low-latency realtime bi-directional WebSockets / GraphQL",
        "Autonomous AI customer service agents (GDPR compliant)",
        "Enterprise Single Sign-On (SAML, Okta, Microsoft Azure AD)",
        "Field-level role-based access control (RBAC) & audit logs",
        "Rigorous penetration testing, encryption & compliance audits",
        "Dedicated Enterprise Service Level Agreement (SLA)",
      ],
    },
  ] as PricingTier[],

  // Laufende Kosten & Wartung
  maintenanceCosts: {
    yearlyRateDe: "[PREIS HIER EINTRAGEN: z. B. 15 % – 20 % der initialen Entwicklungskosten pro Jahr]",
    yearlyRateEn: "[PREIS HIER EINTRAGEN: e.g. 15% – 20% of initial build costs annually]",
    appleDeveloperDe: "99 USD / Jahr (Apple Developer Program)",
    appleDeveloperEn: "99 USD / year (Apple Developer Program)",
    googlePlayDe: "25 USD einmalig (Google Play Console Registrierung)",
    googlePlayEn: "25 USD one-time (Google Play Console Registration)",
    hostingEstimateDe: "[PREIS HIER EINTRAGEN: z. B. ab 29 € – 250 € / Monat je nach Nutzeraufkommen]",
    hostingEstimateEn: "[PREIS HIER EINTRAGEN: e.g. from €29 – €250 / month based on active users]",
    servicesCoveredDe: [
      "Regelmäßige Updates für neue iOS- & Android-Hauptversionen",
      "Sicherheits-Patches für Frontend- und Backend-Bibliotheken",
      "Server-Monitoring, Uptime-Garantie und automatische Backups",
      "Bugfixing und kontinuierliche Leistungsoptimierung",
      "Aktualisierung von Drittanbieter-Schnittstellen (APIs)",
    ],
    servicesCoveredEn: [
      "Continuous compatibility updates for annual iOS & Android OS upgrades",
      "Proactive security patches across mobile SDKs and server dependencies",
      "24/7 server monitoring, uptime guarantees, and automated encrypted backups",
      "Bug resolution, performance tuning, and crash analytics reviews",
      "Maintenance of third-party APIs (payment, maps, push gateways)",
    ],
  },

  // Restaurant & Gastronomie App Kosten
  restaurantCosts: {
    startingPriceDe: "[PREIS HIER EINTRAGEN: z. B. ab 4.500 € bzw. monatlich ab 149 €]",
    startingPriceEn: "[PREIS HIER EINTRAGEN: e.g. from €4,500 turnkey or from €149 / month]",
    featuresDe: [
      "Digitales QR-Code Menü & kontaktlose Tischbestellung",
      "Anbindung an bestehende Gastronomie-Kassensysteme & TSE-Konformität",
      "Gäste-Web-App (kein App-Store-Download nötig)",
      "Optionale native Kunden-App für Treuepunkte & Vorbestellungen",
      "Reduzierung von Service-Laufwegen um bis zu 40%",
    ],
    featuresEn: [
      "High-speed digital QR menu & contactless table ordering",
      "Integration with certified POS systems & German fiscal TSE compliance",
      "Browser-based guest Web App (zero app store download barrier)",
      "Optional branded loyalty & pickup app for recurring diners",
      "Reduces waitstaff travel distance and bottlenecks by up to 40%",
    ],
  },

  // Interaktiver Kostenrechner Konfiguration
  calculator: {
    platforms: [
      { id: "cross", labelDe: "iOS & Android (Cross-Platform / React Native)", labelEn: "iOS & Android (Cross-Platform / React Native)", baseWeeks: 5, multiplier: 1.0, recommended: true },
      { id: "ios", labelDe: "Nur iOS (Apple iPhone & iPad)", labelEn: "iOS Only (Apple iPhone & iPad)", baseWeeks: 4, multiplier: 0.8 },
      { id: "android", labelDe: "Nur Android (Google Play)", labelEn: "Android Only (Google Play)", baseWeeks: 4, multiplier: 0.8 },
      { id: "native_both", labelDe: "Separate native Entwicklung (Swift + Kotlin)", labelEn: "Dual Native Development (Swift + Kotlin)", baseWeeks: 9, multiplier: 1.7 },
    ],
    scopes: [
      { id: "mvp", labelDe: "MVP / Basis-App (1-2 Kernfunktionen)", labelEn: "MVP / Core App (1-2 Core Features)", weeks: 4, labelPrice: "[PREIS HIER EINTRAGEN: ca. 12.000 € – 20.000 €]" },
      { id: "medium", labelDe: "Standard Business-App", labelEn: "Standard Business App", weeks: 8, labelPrice: "[PREIS HIER EINTRAGEN: ca. 25.000 € – 45.000 €]" },
      { id: "complex", labelDe: "Komplexe Plattform / Marktplatz", labelEn: "Complex Enterprise Platform", weeks: 14, labelPrice: "[PREIS HIER EINTRAGEN: ab 50.000 €]" },
    ],
    features: [
      { id: "auth", labelDe: "Benutzer-Authentifizierung (Apple, Google, E-Mail)", labelEn: "User Authentication (Apple, Google, Email)", weeks: 1 },
      { id: "push", labelDe: "Push-Benachrichtigungen & Benachrichtigungszentrum", labelEn: "Push Notifications & Message Center", weeks: 1 },
      { id: "payment", labelDe: "Zahlungsintegration (Stripe, PayPal, In-App-Abo)", labelEn: "Payment Processing (Stripe, PayPal, Subscriptions)", weeks: 2 },
      { id: "chat", labelDe: "Echtzeit-Chat / In-App-Kommunikation", labelEn: "Real-Time Chat & Direct Messaging", weeks: 2 },
      { id: "admin", labelDe: "Webbasiertes Admin-Panel & CMS", labelEn: "Web-Based Admin Dashboard & CMS", weeks: 2 },
      { id: "ai", labelDe: "KI-Assistent / Smarte Automatisierung", labelEn: "AI Chatbot & Intelligent Automation", weeks: 2 },
      { id: "offline", labelDe: "Offline-Modus mit lokaler Synchronisation", labelEn: "Offline-First Mode with Auto-Sync", weeks: 1.5 },
      { id: "bluetooth_hardware", labelDe: "Bluetooth- / Hardware- / IoT-Anbindung", labelEn: "Bluetooth BLE & Hardware Integration", weeks: 2.5 },
    ],
    designs: [
      { id: "standard", labelDe: "Modernes UI-Kit (Clean & Funktional)", labelEn: "Modern UI Kit (Clean & Functional)", weeks: 0 },
      { id: "custom", labelDe: "Maßgeschneidertes High-End Figma UI/UX Design", labelEn: "Custom High-End Figma UI/UX Design", weeks: 2 },
    ],
  },

  // Echte FAQs mit detaillierten Antworten (Bilingual)
  faqs: [
    {
      questionDe: "Was kostet eine App-Entwicklung im Durchschnitt in Deutschland?",
      questionEn: "What does mobile app development cost on average in Germany?",
      answerDe:
        "Die Kosten für eine professionelle App-Entwicklung in Deutschland variieren je nach Komplexität stark: Ein schlankes MVP startet in der Regel bei [PREIS HIER EINTRAGEN: ca. 12.000 € bis 25.000 €], eine mittelgroße Unternehmens-App mit individueller Backend-Anbindung liegt typischerweise zwischen [PREIS HIER EINTRAGEN: 25.000 € und 60.000 €], während hochkomplexe Enterprise-Plattformen oder FinTech-Anwendungen ab [PREIS HIER EINTRAGEN: 60.000 € aufwärts] beginnen. Bei Nexa Solutions kalkulieren wir stets transparente Festpreise oder agile Sprint-Budgets ohne versteckte Mehrkosten.",
      answerEn:
        "Professional app engineering costs in Germany depend directly on scope: a lean MVP typically begins at [PREIS HIER EINTRAGEN: approx. €12,000 to €25,000], a customized business application ranges between [PREIS HIER EINTRAGEN: €25,000 and €60,000], while complex enterprise platforms or FinTech products start from [PREIS HIER EINTRAGEN: €60,000 upwards]. At Nexa Solutions, we deliver transparent fixed-price proposals with zero hidden surcharges.",
    },
    {
      questionDe: "Warum ist Cross-Platform-Entwicklung (React Native) günstiger als zwei native Apps?",
      questionEn: "Why is cross-platform engineering (React Native) more cost-effective than dual native apps?",
      answerDe:
        "Bei herkömmlicher nativer Entwicklung müssen zwei getrennte Codebasen geschrieben werden: Swift für iOS und Kotlin für Android. Dadurch verdoppeln sich Konzeptions-, Programmier- und Testaufwand fast. Mit modernen Cross-Platform-Technologien wie React Native teilen wir bis zu 85–90 % des Codes zwischen iOS und Android. Das senkt die initialen Entwicklungskosten um rund 30 bis 40 % und halbiert die späteren Wartungskosten bei identischer 60-FPS-Performance.",
      answerEn:
        "Conventional native workflows require engineering two segregated codebases: Swift for iOS and Kotlin for Android, nearly doubling delivery timelines. With modern React Native frameworks, we share up to 85–90% of code across platforms. This reduces upfront build costs by 30% to 40% and cuts recurring maintenance expenses in half with identical 60 FPS performance.",
    },
    {
      questionDe: "Welche laufenden Kosten entstehen nach dem App-Store-Release?",
      questionEn: "What recurring operating expenses occur after launching on app stores?",
      answerDe:
        "Nach der Veröffentlichung fallen primär drei Kostenblöcke an: 1. Store-Gebühren (Apple Developer: 99 USD/Jahr, Google Play: einmalig 25 USD). 2. Cloud-Hosting & Backend-Infrastruktur (je nach Nutzerzahl ca. [PREIS HIER EINTRAGEN: 29 € bis 250 € / Monat]). 3. Wartung und Betriebssystem-Updates: Durch jährliche iOS- und Android-Updates müssen Apps gepflegt werden. Als Richtwert gelten [PREIS HIER EINTRAGEN: 15 % bis 20 % der initialen Projektkosten pro Jahr], um Sicherheit und Kompatibilität dauerhaft zu sichern.",
      answerEn:
        "Post-launch operating costs consist of: 1. Developer store accounts (Apple: $99/year, Google Play: $25 one-time). 2. Cloud database & hosting ([PREIS HIER EINTRAGEN: approx. €29 to €250 / month]). 3. Proactive OS update maintenance: As Apple and Google update iOS/Android annually, budgeting [PREIS HIER EINTRAGEN: 15% to 20% of initial build costs annually] guarantees uninterrupted performance and store compliance.",
    },
    {
      questionDe: "Festpreis oder Stundensatz: Welches Abrechnungsmodell ist für mich besser?",
      questionEn: "Fixed price vs. time & materials: Which engagement model is better for my project?",
      answerDe:
        "Für klar abgegrenzte Projekte wie ein MVP oder eine definierte Business-App mit festem Lastenheft empfehlen wir ein transparentes Festpreis-Modell. Damit tragen wir das Risiko von Verzögerungen und Sie genießen volle Budgetsicherheit. Für dynamische Plattformen oder kontinuierliche Feature-Erweiterungen arbeiten wir mit agilen 2-Wochen-Sprints auf Basis eines festen Stundensatzes von [PREIS HIER EINTRAGEN: 95 € – 140 € / Std.], bei dem Sie vor jedem Sprint über Aufwand und Prioritäten entscheiden.",
      answerEn:
        "For well-scoped projects like an MVP or defined business application, we recommend our guaranteed fixed-price model for total financial certainty. For dynamic SaaS platforms or evolving digital ventures, we execute disciplined 2-week agile sprints at a transparent senior engineering rate of [PREIS HIER EINTRAGEN: €95 – €140 / hr], giving you full backlog control before every cycle.",
    },
    {
      questionDe: "Wie lange dauert es, eine App programmieren zu lassen?",
      questionEn: "How long does it take to develop a production-ready mobile application?",
      answerDe:
        "Die Entwicklungsdauer gliedert sich in Discovery, UI/UX-Design, Frontend- und Backend-Programmierung, Qualitätssicherung und Store-Review. Ein funktionsfähiges MVP realisieren wir in der Regel innerhalb von 4 bis 8 Wochen. Eine umfangreichere Unternehmens-App benötigt typischerweise 2 bis 4 Monate, während unternehmensweite Enterprise-Systeme meist in 4 bis 8 Monaten schrittweise umgesetzt werden.",
      answerEn:
        "Delivery encompasses discovery, Figma prototyping, full-stack engineering, QA, and store reviews. A functional MVP is delivered within 4 to 8 weeks. Comprehensive business applications require 2 to 4 months, whereas expansive enterprise platforms are released in phased milestones across 4 to 8 months.",
    },
    {
      questionDe: "Kann Nexa Solutions auch bestehende Apps modernisieren oder weiterentwickeln?",
      questionEn: "Can Nexa Solutions modernize, audit, or refactor our existing mobile app?",
      answerDe:
        "Ja. Wenn Sie bereits eine bestehende mobile App besitzen, führen unsere Senior-Ingenieure in Stuttgart zunächst ein gründliches Code- und Architektur-Audit durch. Wir prüfen Performance, Sicherheit und Wartbarkeit und erstellen Ihnen ein transparentes Angebot für Bugfixing, Performance-Tuning, UI/UX-Relaunch oder die Migration auf zeitgemäße Frameworks wie React Native.",
      answerEn:
        "Yes. If your organization operates an existing mobile product, our senior engineering team conducts an architectural and code-quality audit. We evaluate security vulnerabilities, performance bottlenecks, and refactoring pathways to modernize legacy code onto high-speed React Native frameworks.",
    },
  ] as FaqItem[],
};
