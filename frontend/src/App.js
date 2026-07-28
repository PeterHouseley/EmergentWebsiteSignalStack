import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

const email = "peter@signalstack.co.uk";
const mailto =
  "mailto:peter@signalstack.co.uk?subject=Signal%20Stack%20copy%20pack%20request&body=Business%20name:%0AWebsite:%0AWhich%20pack%20are%20you%20interested%20in:%0AWhat%20customer%20message%20needs%20fixing:%0AAnything%20we%20should%20avoid:%0A";

const packs = [
  {
    name: "Lost Lead Follow-Up Pack",
    price: "£95+",
    body: "Ready-to-send email, SMS and WhatsApp wording for enquiries, quotes or bookings that went quiet.",
    includes: ["3–5 follow-up messages", "polite tone options", "simple send notes"],
  },
  {
    name: "Google Business Profile Glow-Up",
    price: "£150+",
    body: "Practical wording for your Google profile so local customers understand what you do and how to contact you.",
    includes: ["business description", "service wording", "Q&A prompts", "review replies"],
  },
  {
    name: "Small Business Email Template Pack",
    price: "£150+",
    body: "Reusable replies for bookings, enquiries, reminders, payments, cancellations, reviews and aftercare.",
    includes: ["reply templates", "subject lines", "copy/paste notes"],
  },
  {
    name: "Customer Touchpoint Clean-Up",
    price: "£495-ish",
    body: "A bundled pass across enquiry follow-up, Google trust points and everyday customer admin wording.",
    includes: ["three route review", "copy pack bundle", "priority fix list"],
  },
];

const samples = [
  "A quote follow-up that sounds helpful, not desperate.",
  "A Google profile description that explains the service in plain English.",
  "A review reply that feels human and local.",
  "A booking reminder that reduces no-shows without sounding robotic.",
];

function Shell({ children }) {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <header className="nav">
          <Link className="brand" to="/" aria-label="Signal Stack home">
            <span className="mark">SS</span>
            <span>
              <strong>Signal Stack</strong>
              <small>customer copy packs</small>
            </span>
          </Link>
          <nav>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/samples">Samples</NavLink>
            <NavLink to="/apply">Request</NavLink>
          </nav>
          <a className="nav-cta" href={mailto}>Email us</a>
        </header>
        <main>{children}</main>
        <footer>
          <span>Signal Stack · practical customer-message fixes</span>
          <a href={`mailto:${email}`}>{email}</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Small business copy packs · ready to send</p>
          <h1>Turn missed enquiries and awkward customer messages into ready-to-send copy.</h1>
          <p className="lead">
            Signal Stack helps local and service businesses fix the words customers actually see: follow-ups, Google profile wording, review replies, booking emails and everyday customer messages.
          </p>
          <div className="actions">
            <Link className="button primary" to="/apply">Request a copy pack</Link>
            <Link className="button ghost" to="/samples">See sample formats</Link>
          </div>
          <ul className="trust-row">
            <li>No system access</li>
            <li>No customer contact</li>
            <li>Manual, human-reviewed</li>
            <li>Copy/paste delivery</li>
          </ul>
        </div>
        <aside className="hero-card">
          <span className="card-label">What you receive</span>
          <h2>A compact customer-message pack</h2>
          <ol>
            <li>What the message needs to do</li>
            <li>Ready-to-send wording</li>
            <li>Tone variants where useful</li>
            <li>Simple notes on when to use it</li>
          </ol>
        </aside>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">The point</p>
          <h2>You may not need a new marketing system. You may need better customer wording.</h2>
        </div>
        <p>
          A quiet lead, thin Google profile, stiff reply, or unclear follow-up can cost money without looking dramatic. We package the fix into plain, usable copy Peter can send, paste, or hand to staff.
        </p>
      </section>

      <PackGrid />

      <section className="section proof">
        <p className="eyebrow">Boundaries</p>
        <h2>Useful, not invasive.</h2>
        <div className="proof-grid">
          <article><strong>No audits dressed as ambushes.</strong><p>We do not tell businesses their marketing is broken.</p></article>
          <article><strong>No platform access needed.</strong><p>The first packs work from public info and what the client provides.</p></article>
          <article><strong>No AI theatre.</strong><p>The delivery is simple: better wording, cleaner handoff, fewer awkward messages.</p></article>
        </div>
      </section>
    </>
  );
}

function PackGrid() {
  return (
    <section className="section" id="services">
      <p className="eyebrow">Services</p>
      <h2>Small customer-message jobs, packaged so they are easy to buy.</h2>
      <div className="packs">
        {packs.map((pack) => (
          <article className="pack" key={pack.name}>
            <div className="pack-top">
              <h3>{pack.name}</h3>
              <span>{pack.price}</span>
            </div>
            <p>{pack.body}</p>
            <ul>{pack.includes.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <>
      <section className="page-head">
        <p className="eyebrow">Services & pricing</p>
        <h1>Practical copy packs for the customer messages that leak trust.</h1>
        <p className="lead">Start small, fix one route, then bundle the pieces that are actually useful.</p>
      </section>
      <PackGrid />
      <section className="section note-panel">
        <h2>Best first buy</h2>
        <p>
          If a business relies on quotes, calls or booking requests, start with the Lost Lead Follow-Up Pack. It is the fastest proof of value and the least offensive first conversation.
        </p>
      </section>
    </>
  );
}

function Samples() {
  return (
    <>
      <section className="page-head">
        <p className="eyebrow">Samples</p>
        <h1>What a Signal Stack pack actually feels like.</h1>
        <p className="lead">Fictional examples only, but the format is the real delivery style: clear, short, ready to use.</p>
      </section>
      <section className="section sample-list">
        {samples.map((sample, index) => (
          <article key={sample}>
            <span>Sample {String(index + 1).padStart(2, "0")}</span>
            <h2>{sample}</h2>
            <p>Delivered as a short pack: purpose, final wording, optional softer/direct versions, and quick usage notes.</p>
          </article>
        ))}
      </section>
    </>
  );
}

function Apply() {
  return (
    <>
      <section className="page-head">
        <p className="eyebrow">Request a pack</p>
        <h1>Choose the customer message to fix first.</h1>
        <p className="lead">No login, no platform access, no customer contact. Send a short brief and we reply with the sensible first route.</p>
      </section>
      <section className="section form-card">
        <div>
          <h2>Copy this into the email</h2>
          <ul>
            <li>Business name and website</li>
            <li>Which message is currently awkward or missing</li>
            <li>Who receives it</li>
            <li>Any words or tone to avoid</li>
            <li>Which pack you want, if known</li>
          </ul>
        </div>
        <a className="button primary wide" href={mailto}>Draft request email</a>
      </section>
    </>
  );
}

function Privacy() {
  return (
    <section className="page-head legal">
      <p className="eyebrow">Privacy & contact</p>
      <h1>Safe, manual requests before anything goes live.</h1>
      <p>
        Signal Stack uses information you provide only to respond to your enquiry and prepare the requested copy pack. We do not need customer data or private system access for the first-stage packs.
      </p>
      <p>Contact: <a href={`mailto:${email}`}>{email}</a></p>
    </section>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services.html" element={<Services />} />
      <Route path="/samples" element={<Samples />} />
      <Route path="/samples.html" element={<Samples />} />
      <Route path="/resources" element={<Samples />} />
      <Route path="/resources.html" element={<Samples />} />
      <Route path="/demo" element={<Samples />} />
      <Route path="/demo.html" element={<Samples />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/apply.html" element={<Apply />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/privacy.html" element={<Privacy />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Shell>
      <AppRoutes />
    </Shell>
  );
}
