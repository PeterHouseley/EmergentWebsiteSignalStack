import React, { useState } from "react";
import { ArrowUpRight, ClipboardCheck, ShieldCheck, Loader2 } from "lucide-react";
import { submitEnquiry } from "../lib/supabase";

const MATERIAL_OPTIONS = [
  "Voice notes / Loom recordings",
  "Zoom / sales call transcripts",
  "Notion / Google Docs library",
  "Old proposals & decks",
  "A bit of everything — it's a mess",
];

const QualifyForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    material: MATERIAL_OPTIONS[0],
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const buildMailto = () => {
    const subject = "Signal Stack Scan Enquiry";
    const body = [
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      "",
      "What I do (one line):",
      form.role || "—",
      "",
      "Where the material lives:",
      form.material,
      "",
      "— Sent from signalstack.co.uk",
    ].join("\n");
    return `mailto:peter@signalstack.co.uk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const result = await submitEnquiry(form);

    if (result.ok) {
      setStatus("sent");
      // A successful database write is the primary intake route. Do not force
      // an email-client handoff after it succeeds; that creates unnecessary
      // buyer friction and implies a duplicate submission.
    } else {
      // DB write failed — fall back to mailto-only so the enquiry isn't lost
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong");
      window.location.href = buildMailto();
    }
  };

  return (
    <section
      id="apply"
      data-testid="apply-section"
      className="border-t border-line bg-bone"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-5 reveal">
            <span className="font-mono uppercase tracking-widerx text-[11px] text-cyan-deep">
              Intake · 4 fields · No spam
            </span>
            <h2 className="mt-5 font-sans font-semibold tracking-[-0.02em] text-navy text-4xl md:text-5xl leading-[1.05]">
              Apply for a Scan.
              <br />
              <span className="font-display italic font-normal text-cyan">
                Three minutes, max.
              </span>
            </h2>
            <p className="mt-6 text-mute text-base md:text-lg leading-relaxed max-w-md">
              We&apos;ll come back inside 24 hours with a yes, a no, or a
              sharper version of the brief. Your details are logged securely.
            </p>

            <div className="mt-8 flex items-center gap-2.5 text-[13px] text-mute">
              <ShieldCheck className="w-4 h-4 text-cyan" strokeWidth={2} />
              <span>Read by Peter only · Replied within 24 hours · Mon–Fri</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 reveal">
            <form
              onSubmit={onSubmit}
              data-testid="qualify-form"
              noValidate
              className="halo-card glow-ring p-6 md:p-9"
            >
              <div className="flex items-center justify-between pb-5 border-b border-line">
                <span className="font-mono uppercase tracking-widerx text-[11px] text-mute">
                  Form · Intake/SS-001
                </span>
                <span className="font-mono uppercase tracking-widerx text-[11px] text-cyan-deep flex items-center gap-1.5">
                  <span className="chip-dot" />
                  Open
                </span>
              </div>

              <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  label="Your name"
                  id="qf-name"
                  required
                  value={form.name}
                  onChange={handle("name")}
                  placeholder="e.g. Sarah Whitmore"
                  disabled={status === "sending" || status === "sent"}
                />
                <Field
                  label="Email"
                  id="qf-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handle("email")}
                  placeholder="you@company.co.uk"
                  disabled={status === "sending" || status === "sent"}
                />
              </div>

              <div className="mt-6">
                <Field
                  label="What you do (one line)"
                  id="qf-role"
                  required
                  value={form.role}
                  onChange={handle("role")}
                  placeholder="e.g. Brand consultant for B2B SaaS founders"
                  disabled={status === "sending" || status === "sent"}
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="qf-material"
                  className="block font-mono uppercase tracking-widerx text-[11px] text-mute mb-2"
                >
                  Where the material lives
                </label>
                <div className="relative">
                  <select
                    id="qf-material"
                    data-testid="qf-material"
                    value={form.material}
                    onChange={handle("material")}
                    disabled={status === "sending" || status === "sent"}
                    className="field appearance-none pr-10"
                  >
                    {MATERIAL_OPTIONS.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-mute">
                    ▾
                  </span>
                </div>
              </div>

              {status === "error" && (
                <div
                  data-testid="qualify-error"
                  className="mt-5 px-4 py-3 border border-oxblood/30 bg-cyan-soft/0 rounded-md text-[13px] text-navy"
                  style={{ borderColor: "rgba(122,32,33,0.35)" }}
                >
                  We couldn&apos;t save your details just now ({errorMsg}). We&apos;ve
                  opened your email instead so the enquiry still reaches Peter.
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <p className="font-mono uppercase tracking-widerx text-[11px] text-mute max-w-xs leading-relaxed">
                  Submitting saves your details under our{" "}
                  <a className="u-link text-cyan-deep" href="/privacy">
                    Privacy Policy
                  </a>
                  . If saving fails, an email draft to peter@signalstack.co.uk
                  opens instead.
                </p>
                <button
                  type="submit"
                  data-testid="qualify-submit"
                  disabled={status === "sending" || status === "sent"}
                  className="btn-primary disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {status === "sending" && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending…</span>
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <ClipboardCheck className="w-4 h-4" />
                      <span>Received</span>
                    </>
                  )}
                  {(status === "idle" || status === "error") && (
                    <>
                      <span>Send application</span>
                      <ArrowUpRight className="arr w-4 h-4" strokeWidth={2.25} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  disabled,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block font-mono uppercase tracking-widerx text-[11px] text-mute mb-2"
    >
      {label}
      {required && <span className="text-cyan-deep ml-1">*</span>}
    </label>
    <input
      id={id}
      data-testid={id}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="field disabled:opacity-70 disabled:cursor-not-allowed"
    />
  </div>
);

export default QualifyForm;
