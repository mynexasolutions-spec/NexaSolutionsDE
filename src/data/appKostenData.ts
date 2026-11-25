/**
 * App-Entwicklung Kosten Konfigurationsdatei (Bilingual: DE & EN)
 * 
 * HINWEIS: Bewusst ohne konkrete Preise und Stundensätze. Jedes Projekt erhält ein
 * individuelles Festpreis-Angebot über /contact. Texte können hier zentral angepasst werden.
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
  priceLabelDe: string;
  priceLabelEn: string;
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
    titleDe: "App Entwicklung Kosten auf einen Blick (2026)",
    titleEn: "App Development Cost at a Glance (2026)",
    noteDe: "Die tatsächlichen Kosten hängen von Plattform, Funktionsumfang und Backend-Architektur ab. So ordnen Sie Ihr Projekt ein – den verbindlichen Festpreis erhalten Sie nach einem kostenlosen Erstgespräch:",
    noteEn: "Actual development costs depend on platform choice, feature complexity, and cloud architecture. Use these tiers to scope your project – you receive a binding fixed price after a free consultation:",
    ranges: [
      {
        labelDe: "MVP / Basis-App",
        labelEn: "MVP / Core App",
        rangeDe: "Festpreis auf Anfrage",
        rangeEn: "Fixed price on request",
        durationDe: "4–8 Wochen",
        durationEn: "4–8 Weeks",
        descriptionDe: "Fokussierter Kernfunktionsumfang für Markttests und Investorenpitches.",
        descriptionEn: "Focused core feature set to validate traction and pitch angel investors.",
      },
      {
        labelDe: "Business / Mittelstand-App",
        labelEn: "Business / SME App",
        rangeDe: "Festpreis auf Anfrage",
        rangeEn: "Fixed price on request",
        durationDe: "2–4 Monate",
        durationEn: "2–4 Months",
        descriptionDe: "Individuelle Workflows, API-Integrationen, Rollenkonzepte und Admin-Panel.",
        descriptionEn: "Tailored business logic, API integrations, role permissions, and web admin portal.",
      },
      {
        labelDe: "Enterprise / Komplexe Plattform",
        labelEn: "Enterprise / High-Scale Platform",
        rangeDe: "Individuelles Angebot",
        rangeEn: "Custom proposal",
        durationDe: "4–8 Monate",
        durationEn: "4–8 Months",
        descriptionDe: "Hochskalierbare Cloud-Architektur, Realtime-Daten, KI-Anbindung & Altsysteme.",
        descriptionEn: "High-concurrency cloud architecture, realtime sync, AI agents, and ERP legacy systems.",
      },
      {
        labelDe: "Agile Weiterentwicklung",
        labelEn: "Agile Development",
        rangeDe: "Budget pro Sprint",
        rangeEn: "Budget per sprint",
        durationDe: "2-Wochen-Sprints",
        durationEn: "2-week sprints",
        descriptionDe: "Transparente Sprint-Planung: Aufwand und Budget werden vor jedem Sprint gemeinsam festgelegt.",
        descriptionEn: "Transparent sprint planning: scope and budget are agreed together before every sprint.",
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
      priceLabelDe: "Festpreis auf Anfrage",
      priceLabelEn: "Fixed price on request",
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
      priceLabelDe: "Festpreis auf Anfrage",
      priceLabelEn: "Fixed price on request",
      durationDe: "ca. 2 bis 4 Monate",
      durationEn: "approx. 2 to 4 months",
      descriptionDe:
        "Vollwertige Kunden- oder Mitarbeiter-App zur Digitalisierung von Geschäftsprozessen. Nahtlose Anbindung an vorhandene ERP-, CRM- oder Buchhaltungssysteme.",
      descriptionEn:
        "Full-scale operational or customer-facing mobile application. Seamless bidirectional sync with your existing ERP, CRM, or accounting infrastructure.",
      featuresDe: [
        "Gemeinsame Codebasis für iOS & Android (native Haptik)",
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
      priceLabelDe: "Individuelles Angebot",
      priceLabelEn: "Custom proposal",
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
    yearlyRateDe: "einen festen jährlichen Wartungsanteil, den wir vorab transparent im Angebot ausweisen,",
    yearlyRateEn: "a fixed annual maintenance share, stated transparently in your proposal upfront",
    appleDeveloperDe: "99 USD / Jahr (Apple Developer Program)",
    appleDeveloperEn: "99 USD / year (Apple Developer Program)",
    googlePlayDe: "25 USD einmalig (Google Play Console Registrierung)",
    googlePlayEn: "25 USD one-time (Google Play Console Registration)",
    hostingEstimateDe: "monatliche Kosten, die mit Nutzerzahl und Datenvolumen skalieren",
    hostingEstimateEn: "monthly costs that scale with active users and data volume",
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
    startingPriceDe: "Individuelles Festpreis-Angebot – wahlweise als Einmalprojekt oder als monatliches Modell",
    startingPriceEn: "Custom fixed-price proposal – as a one-time project or a monthly plan",
    featuresDe: [
      "Digitales QR-Code Menü & kontaktlose Tischbestellung",
      "Anbindung an bestehende Gastronomie-Kassensysteme & TSE-Konformität",
      "Gäste-Web-App (kein App-Store-Download nötig)",
      "Optionale native Kunden-App für Treuepunkte & Vorbestellungen",
      "Weniger Laufwege für das Servicepersonal",
    ],
    featuresEn: [
      "High-speed digital QR menu & contactless table ordering",
      "Integration with certified POS systems & German fiscal TSE compliance",
      "Browser-based guest Web App (zero app store download barrier)",
      "Optional branded loyalty & pickup app for recurring diners",
      "Reduces waitstaff travel distance and bottlenecks",
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
      { id: "mvp", labelDe: "MVP / Basis-App (1-2 Kernfunktionen)", labelEn: "MVP / Core App (1-2 Core Features)", weeks: 4, hintDe: "Schneller Markttest", hintEn: "Fast market test" },
      { id: "medium", labelDe: "Standard Business-App", labelEn: "Standard Business App", weeks: 8, hintDe: "Meistgewählt im Mittelstand", hintEn: "Most chosen by SMEs" },
      { id: "complex", labelDe: "Komplexe Plattform / Marktplatz", labelEn: "Complex Enterprise Platform", weeks: 14, hintDe: "Skalierbare Architektur", hintEn: "Scalable architecture" },
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
        "Die Kosten für eine professionelle App-Entwicklung variieren je nach Komplexität stark. Die wichtigsten Kostentreiber sind: Anzahl der Plattformen (iOS, Android oder beide), Umfang der Kernfunktionen, individuelles UI/UX-Design, Backend und Schnittstellen zu ERP- oder CRM-Systemen sowie Sicherheits- und DSGVO-Anforderungen. Ein schlankes MVP mit 1–2 Kernfunktionen ist deutlich günstiger als eine Business-App mit Admin-Panel oder eine Enterprise-Plattform. Mit unserem App-Kostenrechner schätzen Sie die Projektdauer in Sekunden; ein verbindliches Festpreis-Angebot erhalten Sie nach einem kostenlosen Erstgespräch – ohne versteckte Mehrkosten.",
      answerEn:
        "Professional app development costs vary widely with complexity. The main cost drivers are: number of platforms (iOS, Android or both), scope of core features, custom UI/UX design, backend and integrations with ERP or CRM systems, and security and GDPR requirements. A lean MVP with 1–2 core features costs significantly less than a business app with an admin panel or an enterprise platform. Use our app cost calculator to estimate your timeline in seconds; you receive a binding fixed-price proposal after a free consultation – with no hidden surcharges.",
    },
    {
      questionDe: "Wie funktioniert der App Entwicklung Kosten Rechner?",
      questionEn: "How does the app development cost calculator work?",
      answerDe:
        "Unser App-Kostenrechner fragt vier Faktoren ab: Zielplattform (iOS, Android oder Cross-Platform), Projektumfang (MVP, Business-App oder Plattform), gewünschte Funktionen wie Login, Push-Benachrichtigungen, Zahlungen oder Admin-Panel sowie das Design-Level. Daraus berechnet er in Echtzeit die geschätzte Entwicklungsdauer in Wochen – der wichtigste Treiber der App Entwicklung Kosten. Auf Basis Ihrer Konfiguration erstellen wir Ihnen anschließend kostenlos ein verbindliches Festpreis-Angebot.",
      answerEn:
        "Our app cost calculator asks for four factors: target platform (iOS, Android or cross-platform), project scope (MVP, business app or platform), required features such as login, push notifications, payments or an admin panel, and the design level. It then calculates the estimated development time in weeks in real time – the main driver of app development costs. Based on your configuration, we then prepare a free, binding fixed-price proposal.",
    },
    {
      questionDe: "Warum ist Cross-Platform-Entwicklung (React Native) günstiger als zwei native Apps?",
      questionEn: "Why is cross-platform engineering (React Native) more cost-effective than dual native apps?",
      answerDe:
        "Bei herkömmlicher nativer Entwicklung müssen zwei getrennte Codebasen geschrieben werden: Swift für iOS und Kotlin für Android. Dadurch verdoppeln sich Konzeptions-, Programmier- und Testaufwand fast. Mit modernen Cross-Platform-Technologien wie React Native teilen iOS und Android einen Großteil des Codes. Das senkt die initialen Entwicklungskosten deutlich und reduziert die späteren Wartungskosten – bei flüssiger nativer Performance.",
      answerEn:
        "Conventional native workflows require engineering two segregated codebases: Swift for iOS and Kotlin for Android, nearly doubling delivery timelines. With modern React Native frameworks, iOS and Android share most of their code. This significantly reduces upfront build costs and recurring maintenance expenses – with smooth native performance.",
    },
    {
      questionDe: "Welche laufenden Kosten entstehen nach dem App-Store-Release?",
      questionEn: "What recurring operating expenses occur after launching on app stores?",
      answerDe:
        "Nach der Veröffentlichung fallen primär drei Kostenblöcke an: 1. Store-Gebühren (Apple Developer: 99 USD/Jahr, Google Play: einmalig 25 USD). 2. Cloud-Hosting & Backend-Infrastruktur (monatliche Kosten, die mit Nutzerzahl und Datenvolumen skalieren). 3. Wartung und Betriebssystem-Updates: Durch jährliche iOS- und Android-Updates müssen Apps gepflegt werden. Den jährlichen Wartungsanteil weisen wir vorab transparent im Angebot aus, damit Sicherheit und Kompatibilität dauerhaft gesichert sind.",
      answerEn:
        "Post-launch operating costs consist of: 1. Developer store accounts (Apple: $99/year, Google Play: $25 one-time). 2. Cloud database & hosting (monthly costs that scale with active users and data volume). 3. Proactive OS update maintenance: As Apple and Google update iOS/Android annually, apps need ongoing care. We state the annual maintenance share transparently in your proposal upfront to guarantee uninterrupted performance and store compliance.",
    },
    {
      questionDe: "Festpreis oder Stundensatz: Welches Abrechnungsmodell ist für mich besser?",
      questionEn: "Fixed price vs. time & materials: Which engagement model is better for my project?",
      answerDe:
        "Für klar abgegrenzte Projekte wie ein MVP oder eine definierte Business-App mit festem Lastenheft empfehlen wir ein transparentes Festpreis-Modell. Damit tragen wir das Risiko von Verzögerungen und Sie genießen volle Budgetsicherheit. Für dynamische Plattformen oder kontinuierliche Feature-Erweiterungen arbeiten wir mit agilen 2-Wochen-Sprints: Vor jedem Sprint legen wir Aufwand, Prioritäten und Budget gemeinsam fest, sodass Sie jederzeit die volle Kostenkontrolle behalten.",
      answerEn:
        "For well-scoped projects like an MVP or defined business application, we recommend our guaranteed fixed-price model for total financial certainty. For dynamic SaaS platforms or evolving digital ventures, we execute disciplined 2-week agile sprints: scope, priorities and budget are agreed together before every sprint, giving you full cost control at all times.",
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
        "Ja. Wenn Sie bereits eine bestehende mobile App besitzen, führen unsere Senior-Ingenieure zunächst ein gründliches Code- und Architektur-Audit durch. Wir prüfen Performance, Sicherheit und Wartbarkeit und erstellen Ihnen ein transparentes Angebot für Bugfixing, Performance-Tuning, UI/UX-Relaunch oder die Migration auf zeitgemäße Frameworks wie React Native.",
      answerEn:
        "Yes. If your organization operates an existing mobile product, our senior engineering team conducts an architectural and code-quality audit. We evaluate security vulnerabilities, performance bottlenecks, and refactoring pathways to modernize legacy code onto high-speed React Native frameworks.",
    },
  ] as FaqItem[],
};
