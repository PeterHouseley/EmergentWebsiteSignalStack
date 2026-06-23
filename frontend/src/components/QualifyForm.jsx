import React, { useState } from "react";
import { ArrowUpRight, ClipboardCheck, ShieldCheck } from "lucide-react";

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
  const [sent, setSent] = useState(false);

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const buildMailto = () => {
    const subject = "Signal Stack Scan Enquiry";
    const body = [
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      "",
      `What I do (one line):`,
      form.role || "—",
      "",
      `Where the material lives:`,
      form.material,
      "",
      "— Sent from signalstack.co.uk",
    ].join("\n");
    return `mailto:peter@signalstack.co.uk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildMailto();
    setSent(true);
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
              sharper version of the brief. Submitting opens your email client
              with the details pre-filled — nothing is stored or sent
              anywhere else.
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
                />
                <Field
                  label="Email"
                  id="qf-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handle("email")}
                  placeholder="you@company.co.uk"
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

              <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <p className="font-mono uppercase tracking-widerx text-[11px] text-mute max-w-xs leading-relaxed">
                  Submitting opens your email app with a pre-filled message to
                  peter@signalstack.co.uk
                </p>
                <button
                  type="submit"
                  data-testid="qualify-submit"
                  className="btn-primary"
                >
                  {sent ? (
                    <>
                      <ClipboardCheck className="w-4 h-4" />
                      <span>Email opened</span>
                    </>
                  ) : (
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

const Field = ({ label, id, value, onChange, type = "text", required, placeholder }) => (
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
      className="field"
    />
  </div>
);

export default QualifyForm;
