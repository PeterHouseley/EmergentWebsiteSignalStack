import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import QualifyForm from "./components/QualifyForm";
import { Privacy, Terms } from "./pages/Legal";
import {
  ArrowUpRight,
  ChevronDown,
  Mic,
  FileText,
  PhoneCall,
  MessageSquareQuote,
  Layers,
  Compass,
  Megaphone,
  Workflow,
  CheckSquare,
  AlertTriangle,
} from "lucide-react";

const MAILTO =
  "mailto:peter@signalstack.co.uk?subject=Signal%20Stack%20Scan%20Enquiry";

/* ------------------------------------------------------------------ */
/*  Small primitives                                                   */
/* ------------------------------------------------------------------ */

const FileLabel = ({ children, color = "text-ink/60" }) => (
  <span
    className={`font-mono text-[11px] md:text-xs uppercase tracking-widerx ${color}`}
  >
    {children}
  </span>
);

const SectionHeader = ({ kicker, title, lead, align = "left" }) => (
  <div className={align === "center" ? "text-center" : ""}>
    <FileLabel>{kicker}</FileLabel>
    <h2 className="font-serif font-medium tracking-tight text-ink mt-4 text-3xl md:text-5xl leading-[1.05]">
      {title}
    </h2>
    {lead && (
      <p className="mt-5 max-w-2xl text-ink/70 text-base md:text-lg leading-relaxed">
        {lead}
      </p>
    )}
  </div>
);

const PrimaryCTA = ({ children, testId, className = "" }) => (
  <a
    href={MAILTO}
    data-testid={testId}
    className={`group inline-flex items-center gap-3 bg-oxblood text-paper px-7 py-4 font-mono text-[12px] md:text-[13px] uppercase tracking-widerx border border-oxblood hover:bg-ink hover:border-ink transition-colors duration-300 ${className}`}
  >
    <span>{children}</span>
    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </a>
);

const SecondaryCTA = ({ children, testId, className = "" }) => (
  <a
    href={MAILTO}
    data-testid={testId}
    className={`group inline-flex items-center gap-3 bg-transparent text-ink px-7 py-4 font-mono text-[12px] md:text-[13px] uppercase tracking-widerx border border-ink hover:bg-ink hover:text-paper transition-colors duration-300 ${className}`}
  >
    <span>{children}</span>
    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </a>
);

/* ------------------------------------------------------------------ */
/*  Scroll reveal hook                                                 */
/* ------------------------------------------------------------------ */

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ------------------------------------------------------------------ */
/*  Nav                                                                */
/* ------------------------------------------------------------------ */

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur-sm" : "bg-paper"
      } border-b border-ink/15`}
      data-testid="site-nav"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-14 md:h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-3" data-testid="nav-logo">
          <span className="font-serif text-xl md:text-2xl font-medium tracking-tight">
            Signal<span className="text-oxblood">.</span>Stack
          </span>
          <span className="hidden md:inline font-mono text-[10px] uppercase tracking-widerx text-ink/60">
            AI Marketing Ops
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] uppercase tracking-widerx text-ink/70">
          <a href="#scan" className="hover:text-ink" data-testid="nav-link-scan">
            01 · Scan
          </a>
          <a href="#build" className="hover:text-ink" data-testid="nav-link-build">
            02 · Build
          </a>
          <a
            href="#process"
            className="hover:text-ink"
            data-testid="nav-link-process"
          >
            03 · Process
          </a>
          <a href="#apply" className="hover:text-ink" data-testid="nav-link-apply">
            04 · Apply
          </a>
        </nav>

        <PrimaryCTA testId="nav-cta-button" className="!py-2.5 !px-4 !text-[11px]">
          Secure Briefing
        </PrimaryCTA>
      </div>
    </header>
  );
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

const Hero = () => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section
      id="top"
      className="relative border-b border-ink/15"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-16 md:pb-24">
        {/* Dossier header bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-ink/15">
          <div className="flex items-center gap-4 font-mono text-[10px] md:text-[11px] uppercase tracking-widerx text-ink/60">
            <span>File No · SS-001</span>
            <span className="hidden sm:inline">/</span>
            <span className="hidden sm:inline">Class · Operational</span>
            <span className="hidden md:inline">/</span>
            <span className="hidden md:inline">Issued · {today}</span>
          </div>
          <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-widerx text-ink/60">
            United Kingdom · EN
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10 mt-12 md:mt-16">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-8">
            <div className="reveal">
              <FileLabel color="text-oxblood">
                Brief · Marketing Operating System
              </FileLabel>
            </div>

            <h1 className="reveal mt-6 font-serif font-medium text-ink leading-[0.98] tracking-tight text-[44px] sm:text-[64px] md:text-[84px] lg:text-[96px]">
              Turn scattered
              <br />
              business knowledge
              <br />
              into <span className="italic text-oxblood">campaign-ready</span>
              <br />
              action.
            </h1>

            <p className="reveal mt-8 max-w-xl text-ink/75 text-lg md:text-xl leading-relaxed">
              For consultants, agencies and founders who already know what works
              — but it&apos;s buried in voice notes, call transcripts and old
              proposals. We extract it, structure it, and hand back a marketing
              operating system you can actually run.
            </p>

            <div className="reveal mt-10 flex flex-col sm:flex-row gap-4">
              <PrimaryCTA testId="hero-primary-cta">
                Request the Scan · £495
              </PrimaryCTA>
              <a
                href="#apply"
                data-testid="hero-secondary-cta"
                className="group inline-flex items-center gap-3 bg-transparent text-ink px-7 py-4 font-mono text-[12px] md:text-[13px] uppercase tracking-widerx border border-ink hover:bg-ink hover:text-paper transition-colors duration-300"
              >
                <span>Apply in 3 minutes</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="reveal mt-10 flex items-center gap-2 text-ink/55 font-mono text-[11px] uppercase tracking-widerx">
              <span>Scroll</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </div>

          {/* RIGHT — dossier index card */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="reveal relative">
              {/* offset block */}
              <div className="absolute inset-0 bg-ink/10 translate-x-2 translate-y-2 -z-0" />
              <div className="relative border border-ink/30 bg-paper p-6 md:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widerx text-ink/60">
                      Case File · Index
                    </div>
                    <div className="font-serif text-2xl mt-2 leading-tight">
                      Signal Stack
                      <br />
                      <span className="text-ink/60 italic text-lg">
                        AI Marketing Ops
                      </span>
                    </div>
                  </div>
                  <div className="stamp text-oxblood text-xs">Confidential</div>
                </div>

                <div className="mt-6 space-y-2.5 font-mono text-[12px] text-ink/75">
                  <div className="dotted-leader">
                    <span>01</span>
                    <span className="leader" />
                    <span>The Chaos</span>
                  </div>
                  <div className="dotted-leader">
                    <span>02</span>
                    <span className="leader" />
                    <span>The Extraction</span>
                  </div>
                  <div className="dotted-leader">
                    <span>03</span>
                    <span className="leader" />
                    <span>The Scan · £495</span>
                  </div>
                  <div className="dotted-leader">
                    <span>04</span>
                    <span className="leader" />
                    <span>Full Build · £1,500+</span>
                  </div>
                  <div className="dotted-leader">
                    <span>05</span>
                    <span className="leader" />
                    <span>Target Profiles</span>
                  </div>
                  <div className="dotted-leader">
                    <span>06</span>
                    <span className="leader" />
                    <span>Methodology</span>
                  </div>
                  <div className="dotted-leader">
                    <span>07</span>
                    <span className="leader" />
                    <span>Advantage</span>
                  </div>
                  <div className="dotted-leader">
                    <span>08</span>
                    <span className="leader" />
                    <span>Contact</span>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-ink/15 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widerx text-ink/55">
                    Reviewed by · Peter
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widerx text-olive">
                    Human-led ✓
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-ink/15 bg-paperShade/60 overflow-hidden">
        <div className="overflow-hidden w-full">
          <div className="ticker-track flex gap-12 py-3 font-mono text-[11px] uppercase tracking-widerx text-ink/70 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                {[
                  "Positioning sharpened",
                  "Offer clarified",
                  "Messaging structured",
                  "Objections handled",
                  "Proof catalogued",
                  "Pipeline copy ready",
                  "Campaign plan delivered",
                  "Human-reviewed",
                ].map((t, i) => (
                  <span key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brass inline-block" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Problem                                                            */
/* ------------------------------------------------------------------ */

const Problem = () => {
  const items = [
    {
      icon: Mic,
      label: "Voice notes",
      detail: "Half-finished ideas you never come back to.",
    },
    {
      icon: PhoneCall,
      label: "Sales calls",
      detail: "Goldmine of language, sitting in transcripts.",
    },
    {
      icon: FileText,
      label: "Old proposals",
      detail: "Your real offer, locked inside .pdf and .docx.",
    },
    {
      icon: MessageSquareQuote,
      label: "Client emails",
      detail: "The exact words they use — never reused.",
    },
    {
      icon: Workflow,
      label: "Notion + Slack",
      detail: "Thinking everywhere. Direction nowhere.",
    },
    {
      icon: AlertTriangle,
      label: "Blank-page syndrome",
      detail: "Every campaign starts from zero again.",
    },
  ];

  return (
    <section
      id="problem"
      className="border-b border-ink/15"
      data-testid="problem-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5 reveal">
            <SectionHeader
              kicker="01 · The Chaos"
              title={
                <>
                  Your sharpest thinking
                  <br />
                  is the least usable.
                </>
              }
              lead="You don't have a marketing problem. You have an extraction problem. The expertise is there — it's just locked inside a thousand surfaces, none of which talk to each other."
            />
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-ink/15 reveal">
              {items.map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="border-r border-b border-ink/15 p-6 md:p-7 bg-paper/40 hover:bg-paper transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-oxblood" strokeWidth={1.5} />
                    <FileLabel>{label}</FileLabel>
                  </div>
                  <p className="mt-3 font-serif text-lg md:text-xl text-ink leading-snug">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  What it does — input → output                                      */
/* ------------------------------------------------------------------ */

const WhatItDoes = () => {
  const rows = [
    {
      input: "Voice notes & loose thinking",
      output: "Narrative pillars & positioning lines",
    },
    {
      input: "Sales call transcripts",
      output: "Customer language bank & objection map",
    },
    {
      input: "Old proposals & pitch decks",
      output: "Offer architecture & price logic",
    },
    {
      input: "Case studies & client wins",
      output: "Proof catalogue, ready to drop into copy",
    },
    {
      input: "Half-written posts & drafts",
      output: "90-day content & campaign plan",
    },
    {
      input: "Founder interviews",
      output: "Editorial point of view, in your voice",
    },
  ];

  return (
    <section
      id="what"
      className="border-b border-ink/15 bg-paperShade/40"
      data-testid="what-it-does-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="reveal">
          <SectionHeader
            kicker="02 · The Extraction"
            title={
              <>
                Raw input,
                <br />
                <span className="italic text-oxblood">structured output.</span>
              </>
            }
            lead="Signal Stack is a process, not a SaaS. We take the artefacts you already have and convert them into the assets a marketing team can actually run with — without losing your voice."
          />
        </div>

        <div className="mt-14 reveal">
          <div className="border border-ink/25 overflow-x-auto">
            <div className="grid grid-cols-12 bg-ink text-paper font-mono text-[10px] md:text-[11px] uppercase tracking-widerx min-w-[640px]">
              <div className="col-span-1 px-4 py-3 border-r border-paper/20">
                #
              </div>
              <div className="col-span-5 px-4 py-3 border-r border-paper/20">
                Input · what you give us
              </div>
              <div className="col-span-1 px-4 py-3 border-r border-paper/20 text-center">
                →
              </div>
              <div className="col-span-5 px-4 py-3">
                Output · what you receive
              </div>
            </div>

            {rows.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-12 border-t border-ink/15 hover:bg-paper transition-colors min-w-[640px]"
              >
                <div className="col-span-1 px-4 py-5 font-mono text-xs text-ink/55 border-r border-ink/15 flex items-center">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-5 px-4 py-5 border-r border-ink/15 font-sans text-ink/80 text-sm md:text-base">
                  {r.input}
                </div>
                <div className="col-span-1 px-4 py-5 border-r border-ink/15 text-center text-brass font-mono">
                  →
                </div>
                <div className="col-span-5 px-4 py-5 font-serif text-ink text-base md:text-lg">
                  {r.output}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Signal Stack Scan — primary offer                                  */
/* ------------------------------------------------------------------ */

const Scan = () => {
  const deliverables = [
    "Positioning statement — one sentence, defensible, written in your voice",
    "Offer clarity matrix — what you sell, to whom, at what price, against what alternative",
    "Customer language bank — verbatim phrases pulled from calls & emails",
    "Objection map — the 8–12 real objections, with handled responses",
    "Proof catalogue — case studies, numbers, quotes, indexed for reuse",
    "90-day campaign blueprint — channels, hooks, sequencing",
    "Content engine starter pack — 30 hooks, 10 angles, 3 long-form briefs",
    "One 60-minute review call to walk through the file together",
  ];

  return (
    <section
      id="scan"
      className="border-b border-ink/15"
      data-testid="scan-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5 reveal">
            <FileLabel color="text-oxblood">03 · Entry Protocol</FileLabel>
            <h2 className="font-serif font-medium tracking-tight mt-4 text-4xl md:text-6xl leading-[1.02]">
              Signal Stack
              <br />
              <span className="italic">Scan.</span>
            </h2>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widerx text-ink/55">
                From
              </span>
              <span className="font-serif text-5xl md:text-6xl text-oxblood">
                £495
              </span>
            </div>

            <p className="mt-8 text-ink/75 text-lg leading-relaxed max-w-md">
              A fixed-scope audit + extraction. You send the raw material — we
              return a single, version-controlled dossier that gives the next
              ninety days of marketing one direction.
            </p>

            <div className="mt-8 space-y-2.5 font-mono text-[12px] text-ink/70">
              <div className="dotted-leader">
                <span>Turnaround</span>
                <span className="leader" />
                <span>7–10 working days</span>
              </div>
              <div className="dotted-leader">
                <span>Format</span>
                <span className="leader" />
                <span>PDF + Notion + Loom walkthrough</span>
              </div>
              <div className="dotted-leader">
                <span>Review</span>
                <span className="leader" />
                <span>Human, by Peter</span>
              </div>
              <div className="dotted-leader">
                <span>Revisions</span>
                <span className="leader" />
                <span>One round, included</span>
              </div>
            </div>

            <div className="mt-10">
              <PrimaryCTA testId="scan-cta-button">
                Initiate the Scan
              </PrimaryCTA>
            </div>
          </div>

          {/* RIGHT — deliverables sheet */}
          <div className="col-span-12 lg:col-span-7 reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-ink/10 translate-x-2 translate-y-2 card-shadow" />
              <div className="relative border border-ink/30 bg-paper card-hover">
                <div className="px-6 md:px-8 py-5 border-b border-ink/20 flex items-center justify-between">
                  <FileLabel>Deliverables · 08 items</FileLabel>
                  <FileLabel color="text-olive">Status · Ready</FileLabel>
                </div>
                <ul className="divide-y divide-ink/10">
                  {deliverables.map((d, i) => (
                    <li
                      key={i}
                      className="px-6 md:px-8 py-5 flex items-start gap-4"
                    >
                      <span className="font-mono text-[11px] text-ink/45 mt-1 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <CheckSquare
                        className="w-4 h-4 text-oxblood mt-1 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="text-ink/85 text-[15px] md:text-base leading-relaxed">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="px-6 md:px-8 py-5 border-t border-ink/20 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widerx text-ink/55">
                    Signed · Signal Stack
                  </span>
                  <span className="stamp text-olive text-[10px]">
                    Human-Reviewed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Full Build — secondary offer                                       */
/* ------------------------------------------------------------------ */

const FullBuild = () => {
  const features = [
    {
      icon: Layers,
      title: "Custom content engine",
      detail:
        "Templated workflows for posts, emails, sales pages — built from your Scan.",
    },
    {
      icon: Compass,
      title: "Editorial calendar",
      detail:
        "A 90-day plan, mapped to launches, offers and seasonality, not vibes.",
    },
    {
      icon: Megaphone,
      title: "Sales asset pack",
      detail:
        "Proposal templates, objection scripts, case study one-pagers — reusable.",
    },
    {
      icon: Workflow,
      title: "Operations layer",
      detail:
        "Notion / Airtable / Make.com pipelines so the work actually ships.",
    },
  ];

  return (
    <section
      id="build"
      className="border-b border-ink/15 bg-paperShade/40"
      data-testid="build-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5 reveal">
            <FileLabel>04 · Advanced Deployment</FileLabel>
            <h2 className="font-serif font-medium tracking-tight mt-4 text-4xl md:text-6xl leading-[1.02]">
              Full marketing
              <br />
              ops <span className="italic">build.</span>
            </h2>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widerx text-ink/55">
                From
              </span>
              <span className="font-serif text-5xl md:text-6xl text-ink">
                £1,500
                <span className="text-brass">+</span>
              </span>
            </div>
            <p className="mt-8 text-ink/75 text-lg leading-relaxed max-w-md">
              For businesses that have a Scan (or equivalent clarity) and now
              need the system, the calendar and the pipes to actually run
              marketing every week — without you holding it up.
            </p>
            <div className="mt-10">
              <SecondaryCTA testId="full-build-cta-button">
                Request build scope
              </SecondaryCTA>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-ink/20">
              {features.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="border-r border-b border-ink/20 p-6 md:p-8 bg-paper"
                >
                  <Icon
                    className="w-5 h-5 text-oxblood"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif text-xl md:text-2xl mt-4 leading-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-ink/70 text-[15px] leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Who it is for                                                      */
/* ------------------------------------------------------------------ */

const WhoFor = () => {
  const yes = [
    "Solo consultants billing £100k+ who can't scale because the IP is in their head",
    "Specialist agencies (B2B, brand, growth) tired of starting every client from scratch",
    "Founders of high-ticket service businesses (£3k+ engagements)",
    "Coaches & advisors with deep methodology and shallow marketing",
    "Operators inheriting a chaotic content function that needs structure",
  ];
  const no = [
    "Pure e-commerce / DTC volume plays",
    "Founders chasing a single viral hack",
    "Anyone wanting an AI to do their thinking for them",
    "Sub-£1k offers where the maths doesn't work",
  ];

  return (
    <section
      id="who"
      className="border-b border-ink/15"
      data-testid="who-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="reveal">
          <SectionHeader
            kicker="05 · Target Profiles"
            title={<>Who this is for.</>}
            lead="Signal Stack is a B2B service. It's built for people who already have signal in their business — they just can't get to it fast enough."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="reveal border border-ink/20 p-7 md:p-9 bg-paper">
            <FileLabel color="text-olive">Profile Match · A</FileLabel>
            <h3 className="font-serif text-2xl md:text-3xl mt-3">
              Fit for the Scan.
            </h3>
            <ul className="mt-6 space-y-4">
              {yes.map((y, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-olive mt-0.5">[ ✓ ]</span>
                  <span className="text-ink/80 leading-relaxed">{y}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal border border-ink/20 p-7 md:p-9 bg-paperShade/50">
            <FileLabel color="text-oxblood">Profile Match · B</FileLabel>
            <h3 className="font-serif text-2xl md:text-3xl mt-3">
              Probably not for you.
            </h3>
            <ul className="mt-6 space-y-4">
              {no.map((n, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-oxblood mt-0.5">[ × ]</span>
                  <span className="text-ink/75 leading-relaxed">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Process — 3 steps                                                  */
/* ------------------------------------------------------------------ */

const Process = () => {
  const steps = [
    {
      n: "01",
      title: "Extract",
      sub: "You send the raw material.",
      detail:
        "Calls, notes, transcripts, proposals, decks, old emails. Anything that has signal in it. We give you a secure intake checklist so nothing important is missed.",
      meta: "Day 1–2",
    },
    {
      n: "02",
      title: "Synthesise",
      sub: "AI structures, a human edits.",
      detail:
        "We run a structured extraction pass with custom models trained on your inputs — then Peter rewrites, prunes and pressure-tests every line. No autopilot. No AI slop.",
      meta: "Day 3–8",
    },
    {
      n: "03",
      title: "Deploy",
      sub: "You get a working dossier.",
      detail:
        "A single, version-controlled file: positioning, offer, messaging, objections, proof, 90-day plan, content seeds. Built to be read by you and ran by your team.",
      meta: "Day 9–10",
    },
  ];

  return (
    <section
      id="process"
      className="border-b border-ink/15 bg-paperShade/40"
      data-testid="process-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="reveal">
          <SectionHeader
            kicker="06 · Methodology"
            title={
              <>
                Three steps.
                <br />
                <span className="italic text-oxblood">Ten working days.</span>
              </>
            }
            lead="The same operating procedure every time. Fixed scope, fixed timeline, fixed price. No 'discovery phases' that drag for a month."
          />
        </div>

        <div className="mt-16 relative">
          {/* Vertical rule for desktop */}
          <div className="hidden md:block absolute left-[7px] top-2 bottom-2 w-px bg-ink/25" />
          <div className="space-y-12 md:space-y-16">
            {steps.map((s, idx) => (
              <div key={s.n} className="reveal grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3 flex md:block items-center gap-4">
                  <div className="relative">
                    <div className="hidden md:block w-4 h-4 border border-ink bg-paper" />
                    <span className="md:hidden font-mono text-xs uppercase tracking-widerx text-ink/55">
                      Step {s.n}
                    </span>
                  </div>
                  <div className="md:mt-4">
                    <div className="hidden md:block font-mono text-[11px] uppercase tracking-widerx text-ink/55">
                      Step {s.n} · {s.meta}
                    </div>
                    <div className="md:hidden font-mono text-[10px] uppercase tracking-widerx text-ink/55 ml-3">
                      · {s.meta}
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-9 md:pl-8 md:border-l md:border-ink/15">
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                    {s.title}.{" "}
                    <span className="text-ink/55 italic font-normal">
                      {s.sub}
                    </span>
                  </h3>
                  <p className="mt-4 text-ink/75 text-base md:text-lg leading-relaxed max-w-2xl">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Why different                                                      */
/* ------------------------------------------------------------------ */

const WhyDifferent = () => {
  const points = [
    {
      not: "A generic AI tool",
      yes: "A done-with-you extraction service",
    },
    {
      not: "A 12-week agency engagement",
      yes: "A 10-working-day dossier, fixed price",
    },
    {
      not: "Strategy decks no one reads",
      yes: "An operating file you actually run from",
    },
    {
      not: "Invented social proof",
      yes: "Credibility through process and deliverables",
    },
    {
      not: "AI on autopilot",
      yes: "Every line human-reviewed, in your voice",
    },
  ];

  return (
    <section
      id="why"
      className="border-b border-ink/15"
      data-testid="why-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="reveal max-w-3xl">
          <FileLabel color="text-oxblood">07 · Advantage</FileLabel>
          <h2 className="font-serif font-medium tracking-tight mt-4 text-4xl md:text-6xl leading-[1.02]">
            No hype.
            <br />
            <span className="italic">Just output.</span>
          </h2>
          <p className="mt-6 text-ink/75 text-lg leading-relaxed">
            Signal Stack isn&apos;t a SaaS. It isn&apos;t an agency retainer. It
            isn&apos;t a course. It&apos;s a small, sharp, human-led service
            built from your actual business material. Here&apos;s the line we
            hold.
          </p>
        </div>

        <div className="mt-14 border-t border-ink/20 reveal">
          {points.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-12 border-b border-ink/15 py-6 md:py-8"
            >
              <div className="col-span-12 md:col-span-1 font-mono text-[11px] uppercase tracking-widerx text-ink/45">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-12 md:col-span-5 font-mono text-sm md:text-base text-ink/45 line-through">
                {p.not}
              </div>
              <div className="col-span-12 md:col-span-6 font-serif text-xl md:text-2xl text-ink leading-snug">
                {p.yes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Final CTA                                                          */
/* ------------------------------------------------------------------ */

const FinalCTA = () => (
  <section
    id="contact"
    className="bg-oxblood text-paper relative overflow-hidden"
    data-testid="final-cta-section"
  >
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-36">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-8 reveal">
          <span className="font-mono text-[11px] uppercase tracking-widerx text-paper/70">
            08 · Action · Final Notice
          </span>
          <h2 className="font-serif font-medium mt-5 text-4xl md:text-7xl leading-[1.02]">
            Ready to stop
            <br />
            losing your own
            <br />
            <span className="italic">good thinking?</span>
          </h2>
          <p className="mt-7 max-w-xl text-paper/80 text-lg leading-relaxed">
            One email. Tell us what you&apos;re building, what&apos;s in the
            way, and where the material is. We&apos;ll come back with a yes,
            a no, or a smarter version of the brief.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={MAILTO}
              data-testid="final-cta-primary"
              className="group inline-flex items-center gap-3 bg-paper text-oxblood px-7 py-4 font-mono text-[12px] md:text-[13px] uppercase tracking-widerx border border-paper hover:bg-ink hover:text-paper hover:border-ink transition-colors duration-300"
            >
              <span>Email Peter · £495 Scan</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={MAILTO}
              data-testid="final-cta-secondary"
              className="group inline-flex items-center gap-3 bg-transparent text-paper px-7 py-4 font-mono text-[12px] md:text-[13px] uppercase tracking-widerx border border-paper/60 hover:border-paper hover:bg-paper hover:text-oxblood transition-colors duration-300"
            >
              <span>Discuss Full Build</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-10 font-mono text-[12px] text-paper/70">
            <span className="caret">peter@signalstack.co.uk</span>
          </div>
        </div>

        <aside className="col-span-12 md:col-span-4 reveal">
          <div className="border border-paper/30 p-6 md:p-7">
            <FileLabel color="text-paper/60">Reply window · Typical</FileLabel>
            <div className="font-serif text-3xl md:text-4xl mt-3">
              Within 24 hrs
            </div>
            <div className="mt-7 space-y-2.5 font-mono text-[12px] text-paper/75">
              <div className="dotted-leader">
                <span>Mon – Fri</span>
                <span
                  className="leader"
                  style={{ borderColor: "rgba(244,241,237,0.35)" }}
                />
                <span>09:00 – 18:00 GMT</span>
              </div>
              <div className="dotted-leader">
                <span>Calls</span>
                <span
                  className="leader"
                  style={{ borderColor: "rgba(244,241,237,0.35)" }}
                />
                <span>By appointment</span>
              </div>
              <div className="dotted-leader">
                <span>Location</span>
                <span
                  className="leader"
                  style={{ borderColor: "rgba(244,241,237,0.35)" }}
                />
                <span>United Kingdom</span>
              </div>
            </div>
            <div className="mt-7 stamp text-paper text-[10px]">
              Briefings · Open
            </div>
          </div>
        </aside>
      </div>
    </div>

    {/* Page number footer for the CTA "page" */}
    <div className="border-t border-paper/20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3 flex justify-between font-mono text-[10px] uppercase tracking-widerx text-paper/55">
        <span>Signal Stack · Brief SS-001</span>
        <span>Page 08 / 08</span>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

const Footer = () => (
  <footer
    className="bg-paper border-t border-ink/15"
    data-testid="site-footer"
  >
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-6">
          <div className="font-serif text-3xl md:text-4xl tracking-tight">
            Signal<span className="text-oxblood">.</span>Stack
          </div>
          <div className="mt-2 font-mono text-[11px] uppercase tracking-widerx text-ink/55">
            AI Marketing Ops
          </div>
          <p className="mt-6 max-w-md text-ink/70 leading-relaxed">
            AI marketing ops for sharper positioning, faster campaigns and
            clearer client action plans. Built from your actual business
            material — human-reviewed, end to end.
          </p>
        </div>

        <div className="col-span-6 md:col-span-3">
          <FileLabel>Contact</FileLabel>
          <ul className="mt-4 space-y-2 text-ink/80">
            <li>
              <a
                href={MAILTO}
                data-testid="footer-email-link"
                className="brass-underline hover:text-oxblood"
              >
                peter@signalstack.co.uk
              </a>
            </li>
            <li className="text-ink/65">United Kingdom</li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-3">
          <FileLabel>Index</FileLabel>
          <ul className="mt-4 space-y-2 font-mono text-[12px] uppercase tracking-widerx text-ink/65">
            <li>
              <a href="#scan" className="hover:text-ink" data-testid="footer-link-scan">
                Signal Stack Scan
              </a>
            </li>
            <li>
              <a href="#build" className="hover:text-ink" data-testid="footer-link-build">
                Full Build
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-ink" data-testid="footer-link-process">
                Process
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-ink" data-testid="footer-link-contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-ink/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-mono text-[11px] uppercase tracking-widerx text-ink/55">
          © 2026 Signal Stack. All rights reserved.
        </div>
        <div className="flex gap-6 font-mono text-[11px] uppercase tracking-widerx text-ink/55">
          <Link to="/privacy" className="hover:text-ink" data-testid="footer-privacy">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-ink" data-testid="footer-terms">
            Terms
          </Link>
          <a href={MAILTO} className="hover:text-ink" data-testid="footer-contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  useReveal();
  return (
    <div className="min-h-screen bg-paper text-ink page-frame" data-testid="app-root">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhatItDoes />
        <Scan />
        <FullBuild />
        <WhoFor />
        <Process />
        <WhyDifferent />
        <QualifyForm />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
