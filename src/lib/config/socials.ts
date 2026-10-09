/**
 * Centralized Social Media Configuration.
 * 
 * TODO: Replace placeholder URLs with official verified profile URLs when available.
 * Do NOT invent facts or fake social accounts.
 */
export const SOCIAL_LINKS = {
  // Verified active company profile:
  linkedin: "https://in.linkedin.com/company/mynexasolutions",
  
  // TODO: Add official company URLs if/when profiles are established:
  instagram: null as string | null, // TODO: e.g. "https://instagram.com/mynexasolutions"
  x: null as string | null,         // TODO: e.g. "https://x.com/mynexasolutions"
  youtube: null as string | null,   // TODO: e.g. "https://youtube.com/@mynexasolutions"
  github: null as string | null,    // TODO: e.g. "https://github.com/mynexasolutions"
} as const;

export const SOCIAL_PROFILES_SAMEAS = [
  SOCIAL_LINKS.linkedin,
  // Only include verified non-null URLs for Schema.org sameAs
].filter(Boolean) as string[];
