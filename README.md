# CJDNS SASU — Company Website

Vite + React + React Router, bilingual EN/FR.

Structure: single page (`/`) with two pitch screens — Consultancy and Research
partnerships — plus credentials, how-we-work and contact; legal notice at
`/mentions-legales`; catch-all 404.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Configuration (`src/config.js`)

- `BOOKING_URL` — scheduling link for the "Book a 15-minute call" buttons.
  Recommended: a Cal.com event link (open source, on-brand) or Calendly.
  **Link out only — never embed the widget**: embedding loads third-party
  scripts, which breaks the strict CSP in `deploy/` and the site's
  "private by design" promise. While empty, the buttons fall back to a
  pre-filled email to info@cjdns.fr.
- `LEDGER_URL` — optional external reference for the LEDGER project card
  (e.g. https://ledgerproject.eu or the CORDIS page). Card link hidden while empty.
- `ECONET_WIKI_URL` — EcoNet Linux wiki (prefilled, verified).

## Funding attribution (verified July 2026)

- **EcoNet Linux**: funded under **NGI Zero** (NGI0 Core per the project wiki;
  also listed in NLnet's NGI0 Commons Fund selection) — administered by NLnet
  under the EC's Next Generation Internet programme. Tag on site: "NGI0 · NLnet".
- **LEDGER**: a Horizon 2020 NGI cascade-funding programme (CORDIS 825268,
  coordinated by FundingBox). Part of NGI but **not** NGI Zero. Tag on site:
  "NGI · Horizon 2020".

## Where to edit things

- **All copy (both languages):** `src/i18n.jsx` — consultancy areas, research
  capabilities, selected projects, credentials, contact.
- **Colours & type:** CSS variables at the top of `src/index.css`.
- **Logo & graphics:** `src/components/Logo.jsx`, `MeshCanvas.jsx` (animated
  hero mesh), `NodeMotif.jsx` (static echoes). Reduced-motion respected.
- Archived copy for the unannounced applied-AI project: `docs/calvad-copy.md`.

## Compliance & best practices baked in

- Mentions légales (`/mentions-legales`): publisher, SIREN/RCS, registered
  office, publication director, hosting (prefilled OVH SAS — verify), privacy, IP.
- No third-party requests: fonts self-hosted via Fontsource; no cookies or analytics.
- `<html lang>` follows the toggle; per-page titles/descriptions; skip link;
  accessible mobile menu; WCAG AA contrast verified; JSON-LD Organization markup.
- Security headers in `deploy/` (`_headers` for Netlify/Cloudflare Pages,
  `nginx.conf.example` for a VPS) with a strict CSP.
- `npm run build` copies `index.html` into each route folder for deep links on
  static hosts (SPA fallback, not prerendering).

## Deployment note

BrowserRouter needs the SPA fallback above, or switch to HashRouter in
`src/App.jsx`. Before going live, set `og:image` in `index.html` to the
absolute production URL (e.g. https://cjdns.fr/og.png).
