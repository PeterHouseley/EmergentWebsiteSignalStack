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
      <div className="mt-10 space-y-7 text-navy/85 text-base md:text-[17px] leading-relaxed">
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

const UL = ({ children }) => (
  <ul className="list-disc pl-6 space-y-2 marker:text-cyan-deep">{children}</ul>
);

const Mail = () => (
  <a className="u-link text-cyan-deep" href="mailto:peter@signalstack.co.uk">
    peter@signalstack.co.uk
  </a>
);

/* ----------------------- Privacy ----------------------- */

export const Privacy = () => (
  <PageShell
    kicker="File · SS-PRIV-001 / Privacy Notice"
    title="Privacy Policy."
    testId="privacy-page"
  >
    <P>
      Signal Stack is a one-person UK consultancy operated by Peter. This
      notice explains, in plain English, what personal data we collect when
      you contact us about a Signal Stack Scan or Full Build engagement, why
      we collect it, and what we do with it.
    </P>

    <H2>1. Who we are</H2>
    <P>
      The data controller is Signal Stack, an unincorporated UK business
      operated by Peter, contactable at <Mail />.
    </P>

    <H2>2. What we collect</H2>
    <P>When you contact us or work with us, we may receive:</P>
    <UL>
      <li>Your name</li>
      <li>Your email address</li>
      <li>Your company or role, if supplied</li>
      <li>Any website or public business links you choose to share</li>
      <li>Notes about where your business material lives</li>
      <li>
        Any documents, notes, calls, content, examples or other business
        material that you choose to send us
      </li>
    </UL>

    <H2>3. Why we collect it</H2>
    <P>We rely on the following lawful bases under UK GDPR:</P>
    <UL>
      <li>
        <strong>Legitimate interests</strong> — for responding to enquiries
        and basic business communication.
      </li>
      <li>
        <strong>Contract performance</strong> — for paid engagements and
        delivery work you&apos;ve asked us to do.
      </li>
      <li>
        <strong>Legal obligation</strong> — where records must be kept for
        tax, accounting or other administrative reasons.
      </li>
    </UL>

    <H2>4. Where it lives & how long we keep it</H2>
    <P>
      Enquiry emails sit in our email provider&apos;s inbox. Engagement
      material is stored in a private workspace accessible only to Peter and
      the third-party tools used to support the work. Retention windows:
    </P>
    <UL>
      <li>
        <strong>Enquiry-only data</strong> — up to 12 months.
      </li>
      <li>
        <strong>Client / project material</strong> — duration of the project
        plus up to 24 months.
      </li>
      <li>
        <strong>Invoices and basic transaction records</strong> — up to 6
        years, where required by UK tax and accounting rules.
      </li>
    </UL>

    <H2>5. Sharing your data</H2>
    <P>
      We do not sell, rent or share your personal data with third parties for
      their own marketing purposes.
    </P>

    <H2>6. AI and software tools</H2>
    <P>
      Signal Stack may use reputable third-party AI and software tools to help
      organise, analyse and draft marketing material. Client material is only
      used to support the requested work and is not knowingly used to train
      public AI models where settings or provider terms allow us to prevent
      that.
    </P>
    <P>
      A current list of key processors can be requested by emailing <Mail />.
    </P>

    <H2>7. Cookies and analytics</H2>
    <P>
      The website does not currently use non-essential cookies or marketing
      analytics. If that changes, this notice will be updated.
    </P>

    <H2>8. Your rights</H2>
    <P>
      Under UK GDPR you have the right to access, correct, port or delete the
      personal data we hold about you, and to object to its processing. Email{" "}
      <Mail /> and we&apos;ll respond within 30 days.
    </P>

    <H2>9. Changes</H2>
    <P>
      We&apos;ll update this notice if our practices change. The effective
      date at the top of this page indicates the current version.
    </P>
  </PageShell>
);

/* ----------------------- Terms ----------------------- */

export const Terms = () => (
  <PageShell
    kicker="File · SS-TERMS-001 / Service Terms"
    title="Terms of Service."
    testId="terms-page"
  >
    <P>
      These terms cover engagements between Signal Stack (&quot;we&quot;,
      &quot;us&quot;) and the client (&quot;you&quot;) for the Signal Stack
      Scan and the Full Marketing Ops Build. They&apos;re written in plain
      English. By engaging us, you accept them; if anything below is
      incompatible with how you need to work, tell us before the project
      starts.
    </P>

    <H2>1. Scope</H2>
    <P>
      <strong>Signal Stack Scan (from £495):</strong> a fixed-scope audit and
      extraction, delivered as a single dossier / report, a practical action
      plan, and an optional Loom or video walkthrough. The exact format is
      confirmed at booking. Typical turnaround is 7–10 working days, subject
      to receiving the required material from you.
    </P>
    <P>
      <strong>Full Marketing Ops Build (from £1,500+):</strong> a custom
      engagement, with scope, timeline and deliverables agreed in writing
      before kickoff.
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
      Deliverables are produced with the help of reputable AI tooling and
      reviewed by Peter. We don&apos;t ship autopilot output — every claim,
      line of copy and recommendation is human-reviewed before delivery.
    </P>

    <H2>4. Ownership and confidentiality</H2>
    <P>
      On payment, you own the final deliverables and may use them however you
      wish. We will not publicly name or reference a client engagement without
      your permission. We may describe our work in general, anonymised terms
      where no client or confidential information can be identified.
    </P>
    <P>
      We treat everything you share as confidential and will not disclose it
      to anyone outside the engagement. A mutual NDA can be signed before
      kickoff on request.
    </P>

    <H2>5. Fees and payment</H2>
    <UL>
      <li>
        <strong>Scan:</strong> 100% payable on booking.
      </li>
      <li>
        <strong>Full Build:</strong> 50% upfront to start, 50% before final
        handover / delivery.
      </li>
      <li>Invoices are payable within 14 days, in GBP.</li>
    </UL>

    <H2>6. Revisions</H2>
    <P>
      One reasonable round of revisions is included in the Scan. Additional
      work is billed only if agreed in writing first, and is quoted
      separately.
    </P>

    <H2>7. Issues and feedback</H2>
    <P>
      You have 14 days after delivery to flag any material issues or
      reasonable corrections. We&apos;ll work with you to put things right
      within the agreed scope.
    </P>

    <H2>8. Refunds and cancellations</H2>
    <UL>
      <li>
        <strong>Scan fee</strong> is non-refundable once work has commenced.
      </li>
      <li>
        If you cancel <strong>before work begins</strong>, a refund may be
        offered minus any payment processing or admin costs.
      </li>
      <li>
        <strong>Full Build deposits</strong> are non-refundable once work has
        commenced.
      </li>
      <li>
        If Signal Stack is unable to deliver the agreed work, an appropriate
        partial or full refund may be offered at Signal Stack&apos;s
        discretion.
      </li>
    </UL>

    <H2>9. Liability</H2>
    <P>
      Our liability under any engagement is limited to the fees paid for that
      engagement. We don&apos;t accept liability for indirect or consequential
      losses (lost profits, lost opportunities, etc.).
    </P>

    <H2>10. Governing law</H2>
    <P>
      These terms are governed by the laws of England and Wales, and any
      disputes are subject to the exclusive jurisdiction of the courts of
      England and Wales.
    </P>

    <H2>11. Contact</H2>
    <P>
      Questions about these terms? Email <Mail />.
    </P>
  </PageShell>
);
