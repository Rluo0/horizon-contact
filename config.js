// ─────────────────────────────────────────────────────────────
//  Project Horizon contact page settings
// ─────────────────────────────────────────────────────────────
//  To add a team member: add a row to the `team_members` table
//  in Supabase (Table Editor → team_members → Insert row).
//  The page picks it up the next time someone opens it. No redeploy needed.
//
//  FALLBACK_TEAM is only used if Supabase can't be reached,
//  so the page still works on bad venue Wi-Fi.
// ─────────────────────────────────────────────────────────────
window.HORIZON_CONFIG = {
  // Supabase → Project Settings → API. The anon/publishable key is safe to
  // put in a public page; row-level security limits it to reading this table.
  SUPABASE_URL: "",       // e.g. "https://abcdxyz.supabase.co"
  SUPABASE_ANON_KEY: "",  // e.g. "eyJhbGciOi..." or "sb_publishable_..."

  TEAM_EMAIL: "projecthorizon06@gmail.com",

  FALLBACK_TEAM: [
    { name: "Brandon Draws", role: "", linkedin_url: "https://www.linkedin.com/in/brandon-draws-963a0135b/" },
    { name: "Richard Luo", role: "", linkedin_url: "https://www.linkedin.com/in/richard-luo-a93889339/" },
    { name: "Christina Pham", role: "", linkedin_url: "https://www.linkedin.com/in/christina-pham-b33354302/" },
    { name: "Abegael Reballos", role: "", linkedin_url: "https://www.linkedin.com/in/gaelleleogaellelei/" },
  ],
};
