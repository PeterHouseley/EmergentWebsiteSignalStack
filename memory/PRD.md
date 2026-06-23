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
- Sticky dossier nav with file-number wordmark, anchor links (Scan / Build / Process / Apply) and primary "Secure Briefing" CTA
- Hero with file metadata bar, big serif headline, "Apply in 3 minutes" secondary CTA that scrolls to the form
- Problem (01), What It Does (02), Scan £495 (03), Full Build £1,500+ (04), Who It Is For (05), Process (06), Why Different (07)
- **Apply / Qualifying Form** — 4-field intake (name, email, what you do, where the material lives). On submit it builds a pre-filled `mailto:peter@signalstack.co.uk` with the answers in the body and opens the user's email app. Zero backend, zero spam risk.
- Final CTA section (oxblood full-bleed)
- Footer with proper SPA routing to dedicated Privacy and Terms pages
- **/privacy** — proper UK GDPR-aware privacy notice in dossier style (8 sections)
- **/terms** — UK service terms covering Scan + Full Build, fees, IP, liability (10 sections)
- Mobile-safe (overflow-x hidden + scroll wrappers around wide tables)
- Scroll-reveal animations, paper grain overlay, dotted-leader index lines

## What's Tested
- 11 mailto CTAs verified: each points to `mailto:peter@signalstack.co.uk?subject=Signal%20Stack%20Scan%20Enquiry`
- 10 required sections present in correct DOM order (via data-testid)
- £495 Scan section: price + 8 deliverables confirmed
- £1,500+ Full Build: price + 4 feature cards confirmed
- Anchor nav (Scan / Build / Process) scrolls correctly
- Final CTA contrast (oxblood bg + paper text) verified
- No fake testimonials, no logo cloud, no robots, no neon, no console errors

## Backlog / Future
- **P2:** Add real social proof (case study tiles + client quotes) when first 3 case studies land
- **P2:** Add a server-side enquiry endpoint (Mongo persist + auto-reply via Resend/SendGrid) if mailto-only conversion proves insufficient
- **P3:** Add OG image + structured data (Service schema with £495 price)
- **P3:** Add a downloadable sample dossier PDF behind email gate

## Next Action Items
- Peter to review Privacy + Terms copy and confirm or amend before launch
- Monitor first batch of mailto applications to validate conversion vs. cold-email baseline
