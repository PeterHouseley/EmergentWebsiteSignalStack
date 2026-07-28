import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Mic,
  PhoneCall,
  FileText,
  MessageSquareQuote,
  Workflow,
  AlertTriangle,
  ShieldCheck,
  Layers,
  Compass,
  Megaphone,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
} from "lucide-react";
import Splash from "./components/Splash";
import { Wordmark } from "./components/Logo";
import QualifyForm from "./components/QualifyForm";
import { Privacy, Terms } from "./pages/Legal";

const MAILTO =
  "mailto:peter@signalstack.co.uk?subject=Signal%20Stack%20copy%20pack%20request&body=Business%20name:%0AWebsite:%0AWhich%20pack%20are%20you%20interested%20in:%0AWhat%20customer%20message%20needs%20fixing:%0A";

/* ----------------------- primitives ----------------------- */

const Chip = ({ children, testId }) => (
  <span className="chip" data-testid={testId}>
    <span className="chip-dot" />
    {children}
  </span>
);

const Eyebrow = ({ children }) => (
  <span className="font-mono uppercase tracking-widerx text-[11px] text-cyan-deep">
    {children}
  </span>
);

const PrimaryCTA = ({ children, href = MAILTO, testId, internal = false }) => {
  const Comp = internal ? Link : "a";
  const props = internal ? { to: href } : { href };
  return (
    <Comp className="btn-primary" data-testid={testId} {...props}>
      <span>{children}</span>
      <ArrowUpRight className="arr w-4 h-4" strokeWidth={2.25} />
    </Comp>
  );
};

const GhostCTA = ({ children, href = MAILTO, testId }) => (
  <a className="btn-ghost" data-testid={testId} href={href}>
    <span>{children}</span>
    <ArrowUpRight className="arr w-4 h-4" strokeWidth={2.25} />
  </a>
);
// eslint-disable-next-line no-unused-vars
const _unused = GhostCTA;

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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ----------------------- nav ----------------------- */

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="block">
          <Wordmark size="md" showTag={false} />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-sans text-[14px] text-navy/75">
          <a href="#scan" className="u-link hover:text-navy" data-testid="nav-link-scan">
            Copy Packs
          </a>
          <a href="#build" className="u-link hover:text-navy" data-testid="nav-link-build">
            Google Profile
          </a>
          <a href="#process" className="u-link hover:text-navy" data-testid="nav-link-process">
            How it works
          </a>
          <a href="#apply" className="u-link hover:text-navy" data-testid="nav-link-apply">
            Apply
          </a>
        </nav>

        <a
          href={MAILTO}
          data-testid="nav-cta-button"
          className="btn-primary !py-2.5 !px-5 !text-[13px]"
        >
          <span>Request copy help</span>
          <ArrowUpRight className="arr w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
};

/* ----------------------- hero ----------------------- */

const Hero = () => (
  <section
    id="top"
    data-testid="hero-section"
    className="relative overflow-hidden"
  >
    <div className="absolute inset-0 grid-backdrop opacity-50" />
    <div className="absolute inset-0 spotlight" />

    <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="reveal flex items-center justify-between gap-4 mb-12 md:mb-16">
        <Chip>Copy help · 24h reply</Chip>
        <span className="hidden md:inline font-mono text-[11px] uppercase tracking-widerx text-mute">
          File · SS-COPY
        </span>
      </div>

      <div className="grid grid-cols-12 gap-10 items-center">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="reveal font-sans font-semibold tracking-[-0.02em] text-navy text-[44px] sm:text-[64px] md:text-[80px] lg:text-[92px] leading-[0.96]">
            Turn missed
            <br />
            enquiries
            <br />
            into{" "}
            <span className="font-display italic font-normal text-cyan">
              ready-to-send
            </span>
            <br />
            copy.
          </h1>

          <p className="reveal mt-8 max-w-xl text-mute text-lg md:text-xl leading-relaxed">
            For small businesses that need clearer replies, follow-ups,
            Google profile wording and everyday customer messages — without
            sounding corporate, pushy or weird.
          </p>

          <div className="reveal mt-10 flex flex-col sm:flex-row gap-3.5">
            <PrimaryCTA testId="hero-primary-cta">
              Ask for the right pack
            </PrimaryCTA>
            <a
              href="#apply"
              data-testid="hero-secondary-cta"
              className="btn-ghost"
            >
              <span>Send a quick brief</span>
              <ArrowRight className="arr w-4 h-4" strokeWidth={2.25} />
            </a>
          </div>

          <div className="reveal mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-mute">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan" strokeWidth={2} />
              Human-written, practical copy
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan" strokeWidth={2} />
              Usually delivered in a few days
            </span>
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan" strokeWidth={2} />
              Built from your real business details
            </span>
          </div>
        </div>

        {/* hero card preview */}
        <aside className="col-span-12 lg:col-span-4">
          <div className="reveal relative">
            <div className="halo-card glow-ring p-6 md:p-7">
              <div className="flex items-center justify-between">
                <Chip>Sample · Follow-up</Chip>
                <span className="font-mono text-[10px] uppercase tracking-widerx text-mute">
                  SS-COPY
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-navy mt-5 leading-tight">
                Lost lead
                <br />
                <span className="italic text-cyan">follow-up.</span>
              </h3>

              <p className="mt-4 text-mute text-[14px] leading-relaxed">
                A polite message for enquiries that went quiet — clear, useful
                and easy to paste into email, SMS or WhatsApp.
              </p>

              <div className="mt-6 pt-5 border-t border-line space-y-3">
                {[
                  ["Message variants", "3–5"],
                  ["Reply friction reduced", "11"],
                  ["Subject lines", "6"],
                  ["Ready to use", "10"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between text-[13px]"
                  >
                    <span className="text-mute">{k}</span>
                    <span className="font-mono text-navy">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widerx text-mute">
                  Checked · Peter
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widerx text-cyan-deep">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Ready
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    {/* signal ticker */}
    <div className="relative border-y border-line bg-bone/60">
      <div className="overflow-hidden mask-x">
        <div className="ticker-track flex gap-12 py-4 font-mono text-[11px] uppercase tracking-widerx text-navy/70 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {[
                "Follow-ups written",
                "Google wording cleaned up",
                "Templates prepared",
                "Reply friction reduced",
                "Trust points clarified",
                "Copy pack delivered",
                "Human-written",
                "Built from your details",
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan inline-block rounded-full" />
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

/* ----------------------- problem ----------------------- */

const Problem = () => {
  const items = [
    { icon: Mic, label: "Missed enquiries", body: "Good leads that quietly go cold after a quote or enquiry." },
    { icon: PhoneCall, label: "Google profile", body: "The first thing local customers check before contacting you." },
    { icon: FileText, label: "Customer emails", body: "Everyday replies that should not need rewriting from scratch." },
    { icon: MessageSquareQuote, label: "Review replies", body: "Public responses that need to sound calm, human and trustworthy." },
    { icon: Workflow, label: "Booking admin", body: "Reminders, cancellations and aftercare messages that need clarity." },
    { icon: AlertTriangle, label: "Awkward wording", body: "The bit that delays sending the message at all." },
  ];

  return (
    <section
      id="problem"
      data-testid="problem-section"
      className="relative border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5 reveal">
            <Eyebrow>01 · The problem</Eyebrow>
            <h2 className="mt-5 font-sans font-semibold tracking-[-0.02em] text-navy text-4xl md:text-5xl leading-[1.04]">
              Your customer messages
              <br />
              are the{" "}
              <span className="font-display italic font-normal text-cyan">
                easiest fix.
              </span>
            </h2>
            <p className="mt-6 text-mute text-lg leading-relaxed max-w-md">
              You do not always need a new website, funnel or agency. Sometimes
              the quickest win is having the right words ready for the
              customer moments you already handle every week.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal">
              {items.map(({ icon: Icon, label, body }) => (
                <div key={label} className="halo-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-soft border border-cyan/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-cyan-deep" strokeWidth={2} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widerx text-mute">
                      {label}
                    </span>
                  </div>
                  <p className="mt-5 font-display text-xl md:text-2xl text-navy leading-snug">
                    {body}
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

/* ----------------------- what it does ----------------------- */

const WhatItDoes = () => {
  const rows = [
    ["Missed or quiet enquiries", "Follow-up emails, SMS and WhatsApp wording"],
    ["Google Business Profile copy", "Clear description, services, Q&A prompts and review replies"],
    ["Common customer questions", "Reusable reply templates and subject lines"],
    ["Bookings, reminders and aftercare", "Plain-English customer touchpoint copy"],
    ["Reviews and awkward replies", "Calm, human response wording"],
    ["Existing website/profile details", "Copy that sounds like your business, not a bot"],
  ];

  return (
    <section
      id="what"
      data-testid="what-it-does-section"
      className="bg-bone border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="reveal max-w-3xl">
          <Eyebrow>02 · What it does</Eyebrow>
          <h2 className="mt-5 font-sans font-semibold tracking-[-0.02em] text-navy text-4xl md:text-5xl leading-[1.04]">
            Messy input.{" "}
            <span className="font-display italic font-normal text-cyan">
              Ready-to-send copy.
            </span>
          </h2>
          <p className="mt-6 text-mute text-lg leading-relaxed">
            Signal Stack turns the customer wording you keep putting off into
            copy you can paste, send and reuse — without giving up your
            normal voice.
          </p>
        </div>

        <div className="mt-14 reveal">
          <div className="halo-card overflow-hidden">
            <div className="grid grid-cols-12 bg-navy text-white font-mono text-[11px] uppercase tracking-widerx">
              <div className="col-span-1 px-5 py-4 hidden sm:block">No.</div>
              <div className="col-span-12 sm:col-span-5 px-5 py-4 sm:border-l border-white/10">
                Input · what you give us
              </div>
              <div className="hidden sm:block col-span-1 px-5 py-4 border-l border-white/10 text-center text-cyan">
                →
              </div>
              <div className="col-span-12 sm:col-span-5 px-5 py-4 sm:border-l border-white/10">
                Output · what you receive
              </div>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-12 border-t border-line row-hover"
              >
                <div className="col-span-1 px-5 py-6 font-mono text-[12px] text-mute hidden sm:flex items-center">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-12 sm:col-span-5 px-5 py-5 sm:py-6 sm:border-l border-line text-mute text-[15px]">
                  {r[0]}
                </div>
                <div className="hidden sm:flex col-span-1 px-5 py-6 border-l border-line text-cyan items-center justify-center">
                  →
                </div>
                <div className="col-span-12 sm:col-span-5 px-5 pb-6 pt-2 sm:py-6 sm:border-l border-line font-display text-navy text-xl md:text-2xl leading-snug">
                  {r[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------- Scan offer ----------------------- */

const Scan = () => {
  const deliverables = [
    "Lost lead follow-up wording for email, SMS or WhatsApp",
    "Google Business Profile description and service wording",
    "Small business email templates for common customer situations",
    "Review reply examples that sound human and local",
    "Subject lines and short-message variants",
    "Simple send notes so the copy is easy to use",
    "Optional one-route customer-contact snapshot if useful",
    "One tidy pack you can copy from immediately",
  ];

  return (
    <section
      id="scan"
      data-testid="scan-section"
      className="border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-5 reveal">
            <Eyebrow>03 · Copy packs</Eyebrow>
            <h2 className="mt-5 font-sans font-semibold tracking-[-0.02em] text-navy text-5xl md:text-6xl leading-[1.02]">
              Signal Stack{" "}
              <span className="font-display italic font-normal text-cyan">
                Packs.
              </span>
            </h2>

            <div className="mt-8">
              <span className="block font-mono text-[11px] uppercase tracking-widerx text-mute">
                From
              </span>
              <span className="block font-display text-7xl md:text-8xl text-navy leading-none mt-2">
                £95
              </span>
            </div>

            <p className="mt-8 text-mute text-lg leading-relaxed max-w-md">
              A fixed-scope copy pass for one customer-message problem. You send
              the context; we return practical wording you can use without
              turning it into a giant marketing project.
            </p>

            <dl className="mt-8 space-y-3 text-[14px]">
              {[
                ["Turnaround", "A few working days"],
                ["Format", "Copy/paste document + notes"],
                ["Review", "Human, by Peter"],
                ["Revisions", "One tidy-up pass, included"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between border-b border-line pb-3"
                >
                  <dt className="font-mono uppercase tracking-widerx text-[11px] text-mute">
                    {k}
                  </dt>
                  <dd className="font-mono text-navy">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <PrimaryCTA testId="scan-cta-button">Request a copy pack</PrimaryCTA>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 reveal">
            <div className="halo-card glow-ring overflow-hidden">
              <div className="px-6 md:px-8 py-5 border-b border-line flex items-center justify-between bg-bone/50">
                <Chip>What can be included</Chip>
                <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widerx text-cyan-deep">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Ready to paste
                </span>
              </div>
              <ul>
                {deliverables.map((d, i) => (
                  <li
                    key={i}
                    className="px-6 md:px-8 py-5 border-b border-line last:border-0 flex items-start gap-5 row-hover"
                  >
                    <span className="font-mono text-[11px] text-mute mt-1 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-6 h-6 rounded-md bg-cyan-soft border border-cyan/30 flex items-center justify-center shrink-0">
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-cyan-deep"
                        strokeWidth={2.4}
                      />
                    </span>
                    <span className="text-navy text-[15px] md:text-base leading-relaxed">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------- Google Profile ----------------------- */

const FullBuild = () => {
  const features = [
    {
      icon: Layers,
      title: "Lost Lead Follow-Up Pack",
      detail: "3–5 ready-to-send follow-ups for quotes, bookings or enquiries that went quiet.",
    },
    {
      icon: Compass,
      title: "Google Profile Glow-Up",
      detail: "Clearer profile wording, services, Q&A prompts and review replies.",
    },
    {
      icon: Megaphone,
      title: "Email Template Pack",
      detail: "Reusable wording for bookings, reminders, payments, cancellations and aftercare.",
    },
    {
      icon: Workflow,
      title: "Touchpoint Clean-Up",
      detail: "A bundled pass across the customer moments that cause the most message friction.",
    },
  ];

  return (
    <section
      id="build"
      data-testid="build-section"
      className="border-t border-line bg-navy text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-backdrop opacity-[0.07]" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-5 reveal">
            <span className="font-mono uppercase tracking-widerx text-[11px] text-cyan">
              04 · Bigger clean-up
            </span>
            <h2 className="mt-5 font-sans font-semibold tracking-[-0.02em] text-5xl md:text-6xl leading-[1.02]">
              Customer
              <br />
              touchpoint{" "}
              <span className="font-display italic font-normal text-cyan">
                clean-up.
              </span>
            </h2>
            <div className="mt-8">
              <span className="block font-mono text-[11px] uppercase tracking-widerx text-cyan">
                From
              </span>
              <span className="block font-display text-7xl md:text-8xl leading-none mt-2">
                £495
                <span className="text-cyan">+</span>
              </span>
            </div>
            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-md">
              For businesses that want more than one message fixed: enquiry follow-up, Google trust points and everyday customer-admin wording in one practical pass.
            </p>
            <div className="mt-10">
              <a
                href={MAILTO}
                data-testid="full-build-cta-button"
                className="btn-ghost !text-white !border-white/30 hover:!bg-white hover:!text-navy"
              >
                <span>Ask about the clean-up</span>
                <ArrowUpRight className="arr w-4 h-4" strokeWidth={2.25} />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-cyan/40 rounded-2xl p-6 md:p-7 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan/15 border border-cyan/30 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-cyan" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mt-5 leading-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-white/65 text-[15px] leading-relaxed">
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

/* ----------------------- Who for ----------------------- */

const WhoFor = () => {
  const yes = [
    "Local service businesses handling enquiries, quotes, bookings or call-backs",
    "Owners who know what they mean but keep rewriting the same replies",
    "Businesses with Google profile, review or customer-admin wording that feels weak",
    "Small teams that want useful copy, not a monthly marketing retainer",
    "Anyone who needs one awkward customer message fixed properly",
  ];
  const no = [
    "Businesses looking for bulk cold email or spammy outreach",
    "Anyone wanting fake urgency or pressure-selling scripts",
    "Teams needing a full agency, ad account build or website redesign",
    "Requests that need legal, medical or regulated advice",
  ];

  return (
    <section
      id="who"
      data-testid="who-section"
      className="border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="reveal max-w-3xl">
          <Eyebrow>05 · Who it helps</Eyebrow>
          <h2 className="mt-5 font-sans font-semibold tracking-[-0.02em] text-navy text-4xl md:text-5xl leading-[1.04]">
            Who this{" "}
            <span className="font-display italic font-normal text-cyan">
              is for.
            </span>
          </h2>
          <p className="mt-6 text-mute text-lg leading-relaxed">
            Signal Stack is for small businesses that already have customers, enquiries and reviews — but need clearer words around the handoff moments.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="reveal halo-card p-7 md:p-9">
            <span className="font-mono uppercase tracking-widerx text-[11px] text-cyan-deep">
              Good fit
            </span>
            <h3 className="font-display text-3xl md:text-4xl mt-3 text-navy">
              Yes, probably useful.
            </h3>
            <ul className="mt-7 space-y-4">
              {yes.map((y, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-deep shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-navy/85 leading-relaxed">{y}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal halo-card p-7 md:p-9 bg-bone/60">
            <span className="font-mono uppercase tracking-widerx text-[11px] text-mute">
              Not the right fit
            </span>
            <h3 className="font-display text-3xl md:text-4xl mt-3 text-navy">
              Probably not for you.
            </h3>
            <ul className="mt-7 space-y-4">
              {no.map((n, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-mute shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-mute leading-relaxed">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------- How it works ----------------------- */

const Process = () => {
  const steps = [
    {
      n: "01",
      meta: "Step 1",
      title: "Clarify",
      sub: "Send the situation.",
      detail:
        "Send the business, the customer moment, your current wording if you have it, and anything the message must avoid.",
    },
    {
      n: "02",
      meta: "Step 2",
      title: "Draft",
      sub: "Human copy pass.",
      detail:
        "Peter turns the context into clear message options, subject lines and practical notes. No fake corporate fog.",
    },
    {
      n: "03",
      meta: "Step 3",
      title: "Use",
      sub: "You get usable copy.",
      detail:
        "A simple copy/paste pack with the final wording, variants and notes on when to use each version.",
    },
  ];

  return (
    <section
      id="process"
      data-testid="process-section"
      className="bg-bone border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="reveal max-w-3xl">
          <Eyebrow>06 · Method</Eyebrow>
          <h2 className="mt-5 font-sans font-semibold tracking-[-0.02em] text-navy text-4xl md:text-5xl leading-[1.04]">
            Three steps.{" "}
            <span className="font-display italic font-normal text-cyan">
              Simple and tidy.
            </span>
          </h2>
          <p className="mt-6 text-mute text-lg leading-relaxed">
            The job stays narrow: understand the message problem, draft the copy, then tidy it into something you can actually send.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="reveal halo-card p-7 md:p-9 relative">
              <div className="flex items-start justify-between">
                <span className="step-num">{s.n}</span>
                <Chip>{s.meta}</Chip>
              </div>
              <h3 className="font-sans font-semibold tracking-tight text-navy text-2xl md:text-3xl mt-6 leading-tight">
                {s.title}.
              </h3>
              <p className="mt-1 font-display italic text-cyan text-lg">
                {s.sub}
              </p>
              <p className="mt-5 text-mute leading-relaxed text-[15px]">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----------------------- Why different ----------------------- */

const WhyDifferent = () => {
  const points = [
    ["Blank AI prompts", "A human-edited copy pack"],
    ["A narrow fixed-scope job", "A few days, clear price, practical output"],
    ["Vague advice you still have to rewrite", "Messages you can actually paste and send"],
    ["Pushy sales scripts", "Calm wording that protects trust"],
    ["Generic agency voice", "Plain English in your business voice"],
  ];

  return (
    <section
      id="why"
      data-testid="why-section"
      className="border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="reveal max-w-3xl">
          <Eyebrow>07 · Why this way</Eyebrow>
          <h2 className="mt-5 font-sans font-semibold tracking-[-0.02em] text-navy text-4xl md:text-5xl leading-[1.04]">
            No fuss.{" "}
            <span className="font-display italic font-normal text-cyan">
              Just usable copy.
            </span>
          </h2>
          <p className="mt-6 text-mute text-lg leading-relaxed">
            Signal Stack is not a SaaS, course or agency retainer. It is a small, sharp, human-led copy service built around real customer moments.
          </p>
        </div>

        <div className="mt-14 reveal halo-card overflow-hidden">
          {points.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-12 items-center border-b border-line last:border-0 row-hover"
            >
              <div className="col-span-12 md:col-span-1 px-5 md:px-7 pt-5 md:py-7 font-mono text-[11px] uppercase tracking-widerx text-mute">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-12 md:col-span-5 px-5 md:px-7 pb-2 md:py-7 md:border-l md:border-line text-mute font-mono text-[14px] line-through decoration-mute/40">
                {p[0]}
              </div>
              <div className="col-span-12 md:col-span-6 px-5 md:px-7 pb-5 md:py-7 md:border-l md:border-line font-display text-2xl md:text-3xl text-navy leading-snug">
                {p[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----------------------- Final CTA ----------------------- */

const FinalCTA = () => (
  <section
    id="contact"
    data-testid="final-cta-section"
    className="relative overflow-hidden bg-navy text-white border-t border-line"
  >
    <div className="absolute inset-0 grid-backdrop opacity-[0.08]" />
    <div
      className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full opacity-40 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(0,167,225,0.45) 0%, rgba(0,167,225,0) 60%)",
      }}
    />
    <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-36">
      <div className="grid grid-cols-12 gap-10 items-start">
        <div className="col-span-12 md:col-span-8 reveal">
          <Chip>Ready when useful</Chip>
          <h2 className="font-sans font-semibold tracking-[-0.02em] mt-6 text-5xl md:text-7xl leading-[1.02]">
            Ready to stop
            <br />
            rewriting the{" "}
            <span className="font-display italic font-normal text-cyan">
              same message?
            </span>
          </h2>
          <p className="mt-7 max-w-xl text-white/70 text-lg leading-relaxed">
            One email. Tell us what customer message needs fixing, where it is used, and what tone you want. We&apos;ll suggest the simplest useful pack.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3.5">
            <a
              href={MAILTO}
              data-testid="final-cta-primary"
              className="btn-primary !bg-white !text-navy !border-white hover:!bg-cyan hover:!text-white hover:!border-cyan"
            >
              <span>Email Peter · Request copy help</span>
              <ArrowUpRight className="arr w-4 h-4" strokeWidth={2.25} />
            </a>
            <a
              href={MAILTO}
              data-testid="final-cta-secondary"
              className="btn-ghost !text-white !border-white/30 hover:!bg-white/10 hover:!text-white hover:!border-white"
            >
              <span>Ask about a bigger clean-up</span>
              <ArrowUpRight className="arr w-4 h-4" strokeWidth={2.25} />
            </a>
          </div>

          <div className="mt-8 font-mono text-[13px] text-cyan">
            peter@signalstack.co.uk
          </div>
        </div>

        <aside className="col-span-12 md:col-span-4 reveal">
          <div className="border border-white/15 bg-white/[0.04] rounded-2xl p-6 md:p-7">
            <span className="font-mono uppercase tracking-widerx text-[11px] text-white/55">
              Reply window
            </span>
            <div className="font-display text-4xl mt-3">Within 24 hrs</div>
            <dl className="mt-6 space-y-3 text-[13px]">
              {[
                ["Mon – Fri", "09:00 – 18:00 GMT"],
                ["Calls", "By appointment"],
                ["Location", "United Kingdom"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0"
                >
                  <dt className="font-mono uppercase tracking-widerx text-[10px] text-white/55">
                    {k}
                  </dt>
                  <dd className="text-white/85">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex items-center gap-2 text-cyan text-[12px] font-mono uppercase tracking-widerx">
              <span className="chip-dot" />
              Copy help open
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

/* ----------------------- Footer ----------------------- */

const Footer = () => (
  <footer data-testid="site-footer" className="bg-white border-t border-line">
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-6">
          <Wordmark size="lg" />
          <p className="mt-6 max-w-md text-mute leading-relaxed">
            Practical customer copy packs for missed enquiries, Google profiles, review replies and everyday small-business messages — human-written, ready to use.
          </p>
          <div className="mt-6 flex items-center gap-2 text-cyan-deep text-[12px] font-mono uppercase tracking-widerx">
            <Sparkles className="w-3.5 h-3.5" />
            Copy help open · 24h reply
          </div>
        </div>

        <div className="col-span-6 md:col-span-3">
          <span className="font-mono uppercase tracking-widerx text-[11px] text-mute">
            Contact
          </span>
          <ul className="mt-4 space-y-2.5 text-navy">
            <li>
              <a
                href={MAILTO}
                data-testid="footer-email-link"
                className="u-link text-cyan-deep"
              >
                peter@signalstack.co.uk
              </a>
            </li>
            <li className="text-mute">United Kingdom</li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-3">
          <span className="font-mono uppercase tracking-widerx text-[11px] text-mute">
            Index
          </span>
          <ul className="mt-4 space-y-2.5 text-[14px] text-navy/80">
            <li>
              <a href="#scan" className="u-link" data-testid="footer-link-scan">
                Copy Packs
              </a>
            </li>
            <li>
              <a href="#build" className="u-link" data-testid="footer-link-build">
                Google Profile
              </a>
            </li>
            <li>
              <a href="#process" className="u-link" data-testid="footer-link-process">
                How it works
              </a>
            </li>
            <li>
              <a href="#contact" className="u-link" data-testid="footer-link-contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-mono text-[11px] uppercase tracking-widerx text-mute">
          © 2026 Signal Stack. All rights reserved.
        </div>
        <div className="flex gap-6 font-mono text-[11px] uppercase tracking-widerx text-mute">
          <Link to="/privacy" className="u-link" data-testid="footer-privacy">
            Privacy Policy
          </Link>
          <Link to="/terms" className="u-link" data-testid="footer-terms">
            Terms
          </Link>
          <a href={MAILTO} className="u-link" data-testid="footer-contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);

/* ----------------------- App ----------------------- */

function Home() {
  const [splashDone, setSplashDone] = useState(false);

  useReveal();

  return (
    <div className="min-h-screen bg-white text-navy" data-testid="app-root">
      {!splashDone && <Splash onDone={() => setSplashDone(true)} />}
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
