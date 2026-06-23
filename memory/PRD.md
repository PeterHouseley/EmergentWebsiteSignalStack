# Signal Stack — Product Requirements Document

## Original Problem Statement
Build a premium one-page website for Signal Stack, a UK AI marketing operations service.
It helps consultants, agencies, founders and service businesses turn scattered business knowledge
— notes, calls, offers, customer language, proof, objections and content ideas — into a clear
campaign-ready marketing operating system.

- **Main offer:** Signal Stack Scan, from £495
- **Secondary offer:** full marketing ops build, from £1,500+
- **Email CTA:** peter@signalstack.co.uk (subject: "Signal Stack Scan Enquiry")
- **Sections:** hero, problem, what it does, Scan, full build, who it's for, 3-step process, why different, final CTA, footer

## Visual Direction (current — v2)
- **Aesthetic:** premium B2B, white-and-blue, drawn from the brand logo
- **Brand colors:** Cyan `#00A7E1` (accent), Deep navy `#10273B` (text + dark sections), white `#FFFFFF`, bone `#F6F8FB` (section bg), line `#E4EAF0` (hairlines), mute `#5B6B7B` (secondary text)
- **Typography:** Instrument Serif (display italic accents only), Geist (body & headings), JetBrains Mono (uppercase labels)
- **Splash:** fullscreen white-and-cyan loader on first visit; 6 cyan bars rise into place (staggered), wordmark slides in, tagline + sweep bar fade in, then overlay fades. Suppressed for the rest of the session via `sessionStorage.ss_splash_done`.

## Architecture
- **Frontend:** React 18 (CRA) + React Router v6 + Tailwind CSS 3 + lucide-react
- **Backend:** FastAPI minimal (health endpoint only)
- **Storage:** none required — pure marketing page with mailto CTAs
- **Routes:** `/` (home), `/privacy`, `/terms` — client-side SPA navigation

## Implemented (2026-01)
### v1 — dossier aesthetic (replaced)
- Initial premium dossier/classified-brief one-pager

### v2 — current
- **Splash loader** with animated SVG mark (6 cyan bars), wordmark, tagline + sweep bar; auto-dismisses in ~2.4s; once-per-session via sessionStorage
- **Cover hero** with massive Geist headline + Instrument-Serif italic cyan accent on "campaign-ready", chip "Briefing Open · 24h reply", trust row with three checkpoints, sample "Positioning statement" preview card
- Sticky transparent-to-blurred nav with brand mark, anchor links, primary "Book the Scan" CTA
- **01 Problem** — 6-card grid in white/cyan-soft icon tiles
- **02 What it does** — input → output table on bone background with navy header row
- **03 Scan £495** — large display price ("From" above), 8 deliverables with cyan check chips, glow-ring on hover
- **04 Full Build £1,500+** — full-bleed navy section with cyan accents and 4 feature cards
- **05 Who it's for** — fit / not-fit two-column dossier-style cards
- **06 Process** — 3-step horizontal grid with serif step-numbers and italic sub-titles
- **07 Why different** — strike-through "not / yes" comparison table
- **Apply form** — 4 fields, builds pre-filled `mailto:` on submit, dossier-style form card with glow ring
- **Final CTA** — navy full-bleed with cyan radial wash, big italic question headline, primary white CTA + ghost CTA, reply-window aside
- **Footer** — wordmark, contact, index links, Privacy/Terms as SPA routes
- **/privacy** & **/terms** — proper UK GDPR-aware notices, dossier-style legal page shells

## Testing
- iteration_1.json (v1 dossier): 98% — fixed mobile horizontal overflow
- iteration_2.json (v2 white/navy/cyan): **100% — no bugs, no design issues**
  - Splash flow verified (sessionStorage skip on reload)
  - 11 sections in correct order, all 8 mailto CTAs correct
  - Apply form submission verified — builds correct pre-filled mailto
  - /privacy and /terms render client-side with correct headings
  - No overflow at 390/768/1280px

## Legal copy — confirmed by Peter (2026-01)
- `/privacy` and `/terms` rewritten verbatim against Peter's amendments:
  - Privacy: unincorporated UK business, 3-basis lawful processing (incl. legal obligation), 3-tier retention windows (12mo / project+24mo / 6yr tax), AI tooling transparency clause, no fake cookies/analytics
  - Terms: Scan format confirmed at booking, Full Build 50/50 payment, anonymised-reference clause replaces auto-reference, "quoted separately" replaces day-rate language, new dedicated Refunds & Cancellations section, England & Wales jurisdiction

## Backlog / Future
- **P2:** Real social proof tiles once 3+ case studies exist
- **P2:** Graduate to `/api/enquiries` endpoint (MongoDB + Resend auto-reply) if mailto-only proves insufficient
- **P3:** OG image + Service schema for SEO
- **P3:** Downloadable sample dossier PDF behind email gate
- **P4:** Split App.js (~1075 lines) into per-section components; add React Router v7 future flags to silence console warnings

## Next Action Items
- Site is **launch-ready**. Hand off the preview URL to Peter, point him at /privacy and /terms one last time, then deploy.
- Monitor first batch of mailto applications; revisit a real `/api/enquiries` + auto-reply backend if volume warrants.
