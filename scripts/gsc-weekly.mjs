#!/usr/bin/env node
/**
 * Weekly Google Search Console check (SEO_PLAN_WEEKWISE.md, Section 6 / Ground rule 7).
 *
 * Usage:   npm run seo:weekly            (prints report + appends a row to the plan's Log table)
 *          npm run seo:weekly -- --no-log (prints report only)
 *
 * Needs a service-account JSON key with access to the GSC property.
 * Key path: env GSC_KEY_FILE, otherwise the first "meagle360-seo-*.json" in the repo root.
 * The key file is gitignored – never commit it.
 */
import { readFileSync, readdirSync, appendFileSync } from "node:fs";
import { createSign } from "node:crypto";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "sc-domain:nexa-solutions.de";
const ORIGIN = "https://www.nexa-solutions.de";
const PLAN_FILE = resolve(ROOT, "SEO_PLAN_WEEKWISE.md");
const WRITE_LOG = !process.argv.includes("--no-log");

// Pages to check index status for every week (quick-win + core pages)
const KEY_PAGES = [
  "/",
  "/app-entwicklung-kosten",
  "/blog/was-kostet-ein-ki-chatbot-unternehmen",
  "/loesungen/restaurant-software-qr-menue",
  "/loesungen/crm-system-entwickeln-lassen",
  "/de/services/llm-integration",
  "/services/web-development",
  "/services/mobile-app-development",
  "/services/ai-automation",
  "/website-kosten",
];

function findKeyFile() {
  if (process.env.GSC_KEY_FILE) return resolve(process.env.GSC_KEY_FILE);
  const f = readdirSync(ROOT).find((n) => /^meagle360-seo-.*\.json$/.test(n));
  if (!f) throw new Error("No key file. Set GSC_KEY_FILE or put meagle360-seo-*.json in the repo root.");
  return resolve(ROOT, f);
}

const b64 = (o) => Buffer.from(typeof o === "string" ? o : JSON.stringify(o)).toString("base64url");

async function getToken(key) {
  const now = Math.floor(Date.now() / 1000);
  const unsigned =
    b64({ alg: "RS256", typ: "JWT" }) +
    "." +
    b64({
      iss: key.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    });
  const sig = createSign("RSA-SHA256").update(unsigned).sign(key.private_key, "base64url");
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${sig}`,
    }),
  });
  const j = await r.json();
  if (!j.access_token) throw new Error(`Token error: ${j.error || r.status}`);
  return j.access_token;
}

const day = (offset) => {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - offset);
  return d.toISOString().slice(0, 10);
};

async function main() {
  const key = JSON.parse(readFileSync(findKeyFile(), "utf8"));
  const H = { authorization: `Bearer ${await getToken(key)}`, "content-type": "application/json" };

  const query = async (body) => {
    const r = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
      { method: "POST", headers: H, body: JSON.stringify(body) }
    );
    const j = await r.json();
    if (j.error) throw new Error(`GSC query error: ${j.error.message}`);
    return j.rows || [];
  };

  // GSC lags ~3 days → "this week" = days -9..-3, "last week" = -16..-10
  const cur = { startDate: day(9), endDate: day(3) };
  const prev = { startDate: day(16), endDate: day(10) };

  const totals = async (range) => {
    const rows = await query({ ...range, dimensions: ["date"], rowLimit: 50 });
    const t = rows.reduce(
      (a, r) => ({ i: a.i + r.impressions, c: a.c + r.clicks, p: a.p + r.position * r.impressions }),
      { i: 0, c: 0, p: 0 }
    );
    return { impressions: t.i, clicks: t.c, position: t.i ? t.p / t.i : 0 };
  };

  const [now, before] = await Promise.all([totals(cur), totals(prev)]);
  const pct = (a, b) => (b ? `${a >= b ? "+" : ""}${Math.round(((a - b) / b) * 100)}%` : "n/a");

  console.log(`\n# GSC weekly check – ${SITE}`);
  console.log(`Week ${cur.startDate} → ${cur.endDate} (vs ${prev.startDate} → ${prev.endDate})\n`);
  console.log("## 1. Totals");
  console.log(`Impressions: ${now.impressions} (${pct(now.impressions, before.impressions)})`);
  console.log(`Clicks:      ${now.clicks} (prev ${before.clicks})`);
  console.log(`CTR:         ${now.impressions ? ((now.clicks / now.impressions) * 100).toFixed(2) : "0.00"}%`);
  console.log(`Avg. pos.:   ${now.position.toFixed(1)} (prev ${before.position.toFixed(1)})`);

  // 2. Striking distance: position 5–20, 10+ impressions (last 28 days for enough data)
  const last28 = { startDate: day(30), endDate: day(3) };
  const qp = await query({ ...last28, dimensions: ["query", "page"], rowLimit: 1000 });
  const byQuery = new Map();
  for (const r of qp) {
    const [q, p] = r.keys;
    if (!byQuery.has(q)) byQuery.set(q, []);
    byQuery.get(q).push({ page: p.replace(/^https:\/\/(www\.)?nexa-solutions\.de/, "") || "/", ...r });
  }
  const striking = [...byQuery.entries()]
    .map(([q, rows]) => {
      const imp = rows.reduce((s, r) => s + r.impressions, 0);
      const pos = rows.reduce((s, r) => s + r.position * r.impressions, 0) / imp;
      const best = rows.sort((a, b) => b.impressions - a.impressions)[0];
      return { q, imp, pos, page: best.page };
    })
    .filter((r) => r.pos >= 5 && r.pos <= 20 && r.imp >= 10)
    .sort((a, b) => b.imp - a.imp);
  console.log("\n## 2. Striking distance (pos 5–20, 10+ impr., last 28 days) → improve these pages this week");
  if (!striking.length) console.log("(none yet)");
  striking.slice(0, 15).forEach((r) => console.log(`- ${r.q} | ${r.imp} impr. | pos ${r.pos.toFixed(1)} | ${r.page}`));

  // 3. Cannibalization: query with 2+ pages each getting 5+ impressions
  const cannibal = [...byQuery.entries()]
    .map(([q, rows]) => ({ q, rows: rows.filter((r) => r.impressions >= 5) }))
    .filter((x) => x.rows.length > 1)
    .sort((a, b) => b.rows.reduce((s, r) => s + r.impressions, 0) - a.rows.reduce((s, r) => s + r.impressions, 0));
  console.log("\n## 3. Cannibalization (same query, 2+ pages) → apply ground rule 1");
  if (!cannibal.length) console.log("(none)");
  cannibal
    .slice(0, 10)
    .forEach((x) => console.log(`- ${x.q}: ${x.rows.map((r) => `${r.page} (${r.impressions}, p${r.position.toFixed(0)})`).join(" ; ")}`));

  // 4. Index status of key pages
  console.log("\n## 4. Index status (key pages)");
  for (const path of KEY_PAGES) {
    const r = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
      method: "POST",
      headers: H,
      body: JSON.stringify({ inspectionUrl: ORIGIN + path, siteUrl: SITE }),
    });
    const s = (await r.json()).inspectionResult?.indexStatusResult;
    console.log(`- ${path}: ${s ? `${s.coverageState} (last crawl ${s.lastCrawlTime?.slice(0, 10) || "–"})` : "inspection failed"}`);
  }

  // 5. Pages with impressions that no longer return 200 (404 / broken redirects)
  const pages = await query({ ...last28, dimensions: ["page"], rowLimit: 500 });
  const broken = [];
  for (const p of pages) {
    try {
      const r = await fetch(p.keys[0], { redirect: "follow" });
      if (r.status !== 200) broken.push(`${r.status} ${p.keys[0]} (${p.impressions} impr.)`);
    } catch {
      broken.push(`ERR ${p.keys[0]}`);
    }
  }
  console.log("\n## 5. Pages with impressions that are not 200 → add a 301 redirect");
  console.log(broken.length ? broken.map((b) => `- ${b}`).join("\n") : "(none)");

  // 6. Log row
  const note = [
    striking.length ? `${striking.length} striking-distance` : null,
    cannibal.length ? `${cannibal.length} cannibalization` : null,
    broken.length ? `${broken.length} broken` : null,
  ]
    .filter(Boolean)
    .join(", ");
  const row = `| ${cur.startDate} → ${cur.endDate} | ${now.impressions} | ${now.clicks} | ${now.position.toFixed(1)} | ${note || "–"} |`;
  console.log("\n## 6. Log row\n" + row);
  if (WRITE_LOG) {
    appendFileSync(PLAN_FILE, row + "\n");
    console.log(`(appended to ${PLAN_FILE})`);
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
