# Signal Stack — Product Requirements Document

## Original Problem Statement
Build a premium one-page website for Signal Stack, a UK AI marketing operations service.
It helps consultants, agencies, founders and service businesses turn scattered business knowledge
— notes, calls, offers, customer language, proof, objections and content ideas — into a clear
campaign-ready marketing operating system.

- **Main offer:** Signal Stack Scan, from £495
- **Secondary offer:** full marketing ops build, from £1,500+
- **Email CTA:** peter@signalstack.co.uk (subject: "Signal Stack Scan Enquiry")
- **Style:** premium editorial intelligence dossier / classified brief
- **Sections:** hero, problem, what it does, Scan, full build, who it's for, 3-step process, why different, final CTA, footer

## User Choices (locked in)
- Aesthetic: Intelligence brief / classified dossier (typewriter accents, file tabs, stamps)
- Hero headline: "Turn scattered business knowledge into campaign-ready action."
- No fake testimonials / no logo cloud / no "trusted by" — credibility through process only
- Wordmark: "Signal Stack" with tagline "AI Marketing Ops"
- Footer: company name + email + United Kingdom + © 2026 + Privacy/Terms/Contact links

## Architecture
- **Frontend:** React 18 (CRA) + Tailwind CSS 3 + lucide-react
- **Backend:** FastAPI minimal (health endpoint only; site is static-content one-pager)
- **Storage:** none required — pure marketing page with mailto CTAs
- **Typography:** IBM Plex Serif (headings), IBM Plex Sans (body), IBM Plex Mono (labels, buttons)
- **Color tokens:** paper #F4F1ED, paperShade #EAE6DF, ink #1A1A1A, oxblood #7A2021, brass #B59A5A, olive #4B5320

## Implemented (2026-01)
- Sticky dossier nav with file-number wordmark and primary "Secure Briefing" CTA
- Hero: file metadata bar, big serif headline with oxblood italic accent, dossier "Case File · Index" card with CONFIDENTIAL stamp, scroll cue, ticker rail
- Problem (01): six-cell grid of artefact types (voice notes, sales calls, old proposals, client emails, Notion/Slack, blank-page syndrome)
- What It Does (02): dossier-style input → output table, 6 rows
- Signal Stack Scan (03): full deliverables sheet (8 items), £495 price, turnaround/format/review/revisions metadata, Human-Reviewed stamp
- Full Build (04): £1,500+ tier with 4 feature cards (content engine, calendar, sales asset pack, ops layer)
- Who It Is For (05): two-column fit / not-fit list with `[ ✓ ]` / `[ × ]` typewriter markers
- Process (06): 3-step methodology with vertical rule timeline (Extract → Synthesise → Deploy, day 1-10)
- Why Different (07): 5-row strike-through "not / yes" comparison table
- Final CTA (08): full-bleed oxblood section with reply-window aside, large "good thinking?" line, two CTAs, page-number bar
- Footer: wordmark, contact, index links, © 2026, Privacy/Terms/Contact (all → mailto)
- Mobile-safe: `overflow-x: hidden` on body, scroll wrappers around wide tables
- Scroll-reveal animations, paper grain overlay, dotted-leader index lines, hard-edged buttons (no rounded corners)

## What's Tested
- 11 mailto CTAs verified: each points to `mailto:peter@signalstack.co.uk?subject=Signal%20Stack%20Scan%20Enquiry`
- 10 required sections present in correct DOM order (via data-testid)
- £495 Scan section: price + 8 deliverables confirmed
- £1,500+ Full Build: price + 4 feature cards confirmed
- Anchor nav (Scan / Build / Process) scrolls correctly
- Final CTA contrast (oxblood bg + paper text) verified
- No fake testimonials, no logo cloud, no robots, no neon, no console errors

## Backlog / Future
- **P1:** Replace mailto Privacy Policy / Terms with proper static pages once content is approved
- **P2:** Add real social proof (case study tiles + client quotes) when first 3 case studies land
- **P2:** Add a lightweight "Apply for a Scan" form with email + 3 qualifying questions (would lift conversion vs. cold mailto)
- **P3:** Add OG image + structured data (Service schema with £495 price)
- **P3:** Add a downloadable sample dossier PDF behind email gate

## Next Action Items
- Confirm with Peter whether the footer Privacy/Terms should remain mailto (current spec) or move to dedicated pages
- Decide if a qualifying form is desired before launch (vs. pure mailto)
