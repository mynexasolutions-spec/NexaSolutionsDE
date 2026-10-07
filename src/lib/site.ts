/**
 * Single source of truth for the canonical website base URL.
 * Defaults to "https://www.nexa-solutions.de" without a trailing slash.
 */
const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.nexa-solutions.de";

export const SITE_URL = rawUrl.replace(/\/+$/, "");
