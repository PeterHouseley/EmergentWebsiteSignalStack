import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "../components/Logo";

const PageShell = ({ kicker, title, children, testId }) => (
  <div className="min-h-screen bg-white text-navy" data-testid={testId}>
    <header className="border-b border-line bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" data-testid="legal-back-home">
          <Wordmark size="md" showTag={false} />
        </Link>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-sans text-[13px] text-mute hover:text-navy"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span>Back to brief</span>
        </Link>
      </div>
    </header>

    <main className="max-w-4xl mx-auto px-5 md:px-10 py-14 md:py-24">
      <div className="pb-7 border-b border-line flex items-center justify-between">
        <span className="font-mono uppercase tracking-widerx text-[11px] text-cyan-deep">
          {kicker}
        </span>
        <span className="font-mono uppercase tracking-widerx text-[11px] text-mute">
          Effective · 01 Jan 2026
        </span>
      </div>
      <h1 className="mt-10 font-sans font-semibold tracking-[-0.02em] text-5xl md:text-6xl leading-[1.04]">
        {title}
      </h1>
      <div className="mt-10 space-y-8 text-navy/85 text-base md:text-[17px] leading-relaxed">
        {children}
      </div>

      <div className="mt-16 pt-6 border-t border-line font-mono uppercase tracking-widerx text-[11px] text-mute flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <span>Signal Stack · United Kingdom</span>
        <span className="text-cyan-deep">peter@signalstack.co.uk</span>
      </div>
    </main>
  </div>
);

const H2 = ({ children }) => (
  <h2 className="font-sans font-semibold tracking-tight text-navy text-2xl md:text-3xl mt-10">
    {children}
  </h2>
);

const P = ({ children }) => <p className="leading-relaxed">{children}</p>;

const Mail = () => (
  <a
    className="u-link text-cyan-deep"
    href="mailto:peter@signalstack.co.uk"
  >
    peter@signalstack.co.uk
  </a>
);

export const Privacy = () => (
  <PageShell
    kicker="File · SS-PRIV-001 / Privacy Notice"
    title="Privacy Policy."
    testId="privacy-page"
  >
    <P>
      Signal Stack is a one-person UK consultancy operated by Peter. This
      notice explains, in plain English, what personal data we collect when you
      contact us about a Signal Stack Scan or Full Build engagement, why we
      collect it, and what we do with it.
    </P>

    <H2>1. Who we are</H2>
    <P>
      The data controller is Signal Stack, an unincorporated UK business
      contactable at <Mail />.
    </P>

    <H2>2. What we collect</H2>
    <P>
      When you complete the intake form or email us, we receive: your name,
      email address, a one-line description of what you do, and an indication
      of where your business material lives. If you proceed to a Scan or Full
      Build, we additionally receive whatever business material you choose to
      send (voice notes, transcripts, decks, etc.).
    </P>

    <H2>3. Why we collect it</H2>
    <P>
      To respond to your enquiry, qualify whether a Scan is a fit, and — if you
      engage us — to produce your dossier. The lawful basis is legitimate
      interest for initial enquiries, and contract performance once an
      engagement begins.
    </P>

    <H2>4. Where it lives</H2>
    <P>
      Enquiry emails sit in our email provider&apos;s inbox. Engagement
      material is stored in a private workspace accessible only to Peter and
      the AI tooling used to assist extraction. We do not sell, share, rent or
      otherwise pass your data to any third party for marketing purposes.
    </P>

    <H2>5. How long we keep it</H2>
    <P>
      Enquiry-only data is held for 12 months unless you ask us to delete it
      sooner. Engagement material is held for the duration of the project plus
      24 months, after which it is permanently deleted unless you request
      earlier removal.
    </P>

    <H2>6. Your rights</H2>
    <P>
      Under UK GDPR you have the right to access, correct, port or delete the
      personal data we hold about you, and to object to its processing. Email{" "}
      <Mail /> and we&apos;ll respond within 30 days.
    </P>

    <H2>7. Cookies & analytics</H2>
    <P>
      This website does not set marketing or tracking cookies. We may add
      privacy-preserving, aggregate analytics in future; if we do, this notice
      will be updated.
    </P>

    <H2>8. Changes</H2>
    <P>
      We&apos;ll update this notice if our practices change. The effective
      date at the top of this page indicates the current version.
    </P>
  </PageShell>
);

export const Terms = () => (
  <PageShell
    kicker="File · SS-TERMS-001 / Service Terms"
    title="Terms of Service."
    testId="terms-page"
  >
    <P>
      These terms cover engagements between Signal Stack (&quot;we&quot;,
      &quot;us&quot;) and the client (&quot;you&quot;) for the Signal Stack
      Scan and the Full Marketing Ops Build. By engaging us, you accept these
      terms; if anything below is incompatible with how you need to work, tell
      us before the project starts.
    </P>

    <H2>1. Scope</H2>
    <P>
      <strong>Signal Stack Scan (from £495):</strong> a fixed-scope audit and
      extraction delivered as a single dossier (PDF + Notion + 60-minute
      walkthrough), including one round of revisions. Typical turnaround is
      7–10 working days from receipt of all your input material.
    </P>
    <P>
      <strong>Full Marketing Ops Build (from £1,500+):</strong> a custom
      engagement scoped against the deliverables agreed in writing before
      kick-off. Timeline, milestones and revisions are confirmed in the scope
      document.
    </P>

    <H2>2. Your inputs</H2>
    <P>
      You agree that any material you share with us is yours to share — i.e.
      you own it or have permission to use it. Recordings of third parties
      (calls, interviews) should only be shared with appropriate consent in
      place.
    </P>

    <H2>3. Our work</H2>
    <P>
      Deliverables are produced with AI tooling and reviewed line-by-line by
      Peter. We don&apos;t ship autopilot output. Where we use AI to assist,
      every claim, line of copy and recommendation is human-reviewed before
      delivery.
    </P>

    <H2>4. Ownership</H2>
    <P>
      On payment, you own the final deliverables and may use them however you
      wish. We retain the right to reference the engagement in a high-level,
      non-confidential way (e.g. &quot;a UK consulting firm&quot;) unless you
      ask us in writing not to.
    </P>

    <H2>5. Fees & payment</H2>
    <P>
      The Scan is invoiced 100% on booking. Full Build engagements are split
      50% on signature and 50% on delivery, unless agreed otherwise in
      writing. Invoices are payable within 14 days in GBP.
    </P>

    <H2>6. Revisions & disputes</H2>
    <P>
      One round of revisions is included in the Scan. Additional revisions are
      billed at our prevailing day rate. If you&apos;re not happy with a
      deliverable, tell us within 14 days of delivery and we&apos;ll work to
      put it right.
    </P>

    <H2>7. Confidentiality</H2>
    <P>
      We treat everything you share as confidential and will not disclose it
      to anyone outside the engagement. A mutual NDA can be signed before
      kick-off on request.
    </P>

    <H2>8. Liability</H2>
    <P>
      Our liability under any engagement is limited to the fees paid for that
      engagement. We don&apos;t accept liability for indirect or consequential
      losses (lost profits, lost opportunities, etc.).
    </P>

    <H2>9. Governing law</H2>
    <P>
      These terms are governed by the laws of England & Wales, and any disputes
      are subject to the exclusive jurisdiction of the English courts.
    </P>

    <H2>10. Contact</H2>
    <P>
      Questions about these terms? Email <Mail />.
    </P>
  </PageShell>
);
