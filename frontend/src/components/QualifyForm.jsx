import React, { useState } from "react";
import { ArrowUpRight, ClipboardCheck } from "lucide-react";

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
      className="border-b border-ink/15 bg-paper"
      data-testid="apply-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-10">
          {/* LEFT — context */}
          <div className="col-span-12 lg:col-span-5 reveal">
            <span className="font-mono text-[11px] uppercase tracking-widerx text-oxblood">
              Intake · 4 fields · No spam
            </span>
            <h2 className="font-serif font-medium tracking-tight mt-4 text-4xl md:text-5xl leading-[1.05]">
              Apply for a Scan.
              <br />
              <span className="italic text-ink/55 font-normal">
                Three minutes, max.
              </span>
            </h2>
            <p className="mt-6 text-ink/75 text-base md:text-lg leading-relaxed max-w-md">
              We&apos;ll come back inside 24 hours with a yes, a no, or a
              sharper version of the brief. Submitting this opens your email
              client with the details pre-filled — nothing is sent anywhere
              else.
            </p>

            <div className="mt-8 space-y-2.5 font-mono text-[12px] text-ink/65">
              <div className="dotted-leader">
                <span>Privacy</span>
                <span className="leader" />
                <span>Read by Peter only</span>
              </div>
              <div className="dotted-leader">
                <span>Reply</span>
                <span className="leader" />
                <span>Within 24 hrs · Mon–Fri</span>
              </div>
              <div className="dotted-leader">
                <span>Commitment</span>
                <span className="leader" />
                <span>None — it&apos;s a conversation</span>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="col-span-12 lg:col-span-7 reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-ink/10 translate-x-2 translate-y-2" />
              <form
                onSubmit={onSubmit}
                data-testid="qualify-form"
                className="relative border border-ink/30 bg-paper p-6 md:p-9"
                noValidate
              >
                <div className="flex items-center justify-between border-b border-ink/15 pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-widerx text-ink/60">
                    Form · Intake/SS-001
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widerx text-olive">
                    Open · Briefings
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-7">
                  <FormField
                    label="Your name"
                    id="qf-name"
                    required
                    value={form.name}
                    onChange={handle("name")}
                    placeholder="e.g. Sarah Whitmore"
                  />
                  <FormField
                    label="Email"
                    id="qf-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handle("email")}
                    placeholder="you@company.co.uk"
                  />
                </div>

                <div className="mt-7">
                  <FormField
                    label="What you do (one line)"
                    id="qf-role"
                    required
                    value={form.role}
                    onChange={handle("role")}
                    placeholder="e.g. Brand consultant for B2B SaaS founders"
                  />
                </div>

                <div className="mt-7">
                  <label
                    htmlFor="qf-material"
                    className="block font-mono text-[11px] uppercase tracking-widerx text-ink/60 mb-2"
                  >
                    Where the material lives
                  </label>
                  <div className="relative">
                    <select
                      id="qf-material"
                      data-testid="qf-material"
                      value={form.material}
                      onChange={handle("material")}
                      className="w-full appearance-none bg-paper border border-ink/25 px-4 py-3 font-sans text-ink focus:outline-none focus:border-oxblood transition-colors rounded-none"
                    >
                      {MATERIAL_OPTIONS.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-ink/55">
                      ▾
                    </span>
                  </div>
                </div>

                <div className="mt-9 pt-6 border-t border-ink/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <p className="font-mono text-[11px] uppercase tracking-widerx text-ink/55 max-w-xs">
                    Submitting opens your email app with a pre-filled message
                    to peter@signalstack.co.uk.
                  </p>
                  <button
                    type="submit"
                    data-testid="qualify-submit"
                    className="group inline-flex items-center justify-center gap-3 bg-oxblood text-paper px-7 py-4 font-mono text-[12px] md:text-[13px] uppercase tracking-widerx border border-oxblood hover:bg-ink hover:border-ink transition-colors duration-300"
                  >
                    {sent ? (
                      <>
                        <ClipboardCheck className="w-4 h-4" />
                        <span>Email Opened</span>
                      </>
                    ) : (
                      <>
                        <span>Send Application</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({ label, id, value, onChange, type = "text", required, placeholder }) => (
  <div>
    <label
      htmlFor={id}
      className="block font-mono text-[11px] uppercase tracking-widerx text-ink/60 mb-2"
    >
      {label}
      {required && <span className="text-oxblood ml-1">*</span>}
    </label>
    <input
      id={id}
      data-testid={id}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-paper border border-ink/25 px-4 py-3 font-sans text-ink placeholder:text-ink/35 focus:outline-none focus:border-oxblood transition-colors rounded-none"
    />
  </div>
);

export default QualifyForm;
