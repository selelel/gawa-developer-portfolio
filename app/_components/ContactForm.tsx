"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
};

type Status = "idle" | "submitting" | "success";

const INITIAL: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  description: "",
};

// ── Field options ──────────────────────────────────────────────────────────

const SERVICES = [
  "Custom Web Application",
  "Mobile Application",
  "SaaS Platform",
  "CRM / ERP System",
  "AI Integration",
  "API Development",
  "Business Automation",
  "UI/UX Design",
  "Maintenance & Support",
  "Other / Not Sure Yet",
];

const BUDGETS = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $60,000",
  "$60,000+",
  "Not Sure Yet",
];

const TIMELINES = [
  "ASAP (1–4 weeks)",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Flexible",
];

// ── Shared styling ─────────────────────────────────────────────────────────

const inputCls =
  "w-full min-h-[48px] rounded-input border border-border-subtle bg-bg-canvas px-4 py-3 text-sm text-brand-dark placeholder:text-text-muted transition-all duration-fast focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/15 disabled:cursor-not-allowed disabled:opacity-50";

const selectCls =
  "w-full min-h-[48px] rounded-input border border-border-subtle bg-bg-canvas px-4 py-3 text-sm text-brand-dark transition-all duration-fast focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/15 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer";

// ── Main component ─────────────────────────────────────────────────────────

export default function ContactForm() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setData((d) => ({ ...d, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <SuccessState key="success" />
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" as const }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-8"
          aria-label="Project inquiry form"
        >
          {/* ── Contact details row ── */}
          <fieldset className="flex flex-col gap-5">
            <legend className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Your Details
            </legend>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input
                  type="text"
                  placeholder="Jan Russel"
                  required
                  autoComplete="name"
                  value={data.name}
                  onChange={set("name")}
                  disabled={status === "submitting"}
                  className={inputCls}
                />
              </Field>

              <Field label="Company" optional>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  autoComplete="organization"
                  value={data.company}
                  onChange={set("company")}
                  disabled={status === "submitting"}
                  className={inputCls}
                />
              </Field>

              <Field label="Email Address" required>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                  value={data.email}
                  onChange={set("email")}
                  disabled={status === "submitting"}
                  className={inputCls}
                />
              </Field>

              <Field label="Phone" optional>
                <input
                  type="tel"
                  placeholder="+63 912 345 6789"
                  autoComplete="tel"
                  value={data.phone}
                  onChange={set("phone")}
                  disabled={status === "submitting"}
                  className={inputCls}
                />
              </Field>
            </div>
          </fieldset>

          {/* ── Project details ── */}
          <fieldset className="flex flex-col gap-5">
            <legend className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Project Details
            </legend>

            <Field label="Service Needed" required>
              <SelectWrapper>
                <select
                  required
                  value={data.service}
                  onChange={set("service")}
                  disabled={status === "submitting"}
                  className={selectCls}
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </SelectWrapper>
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Estimated Budget" required>
                <SelectWrapper>
                  <select
                    required
                    value={data.budget}
                    onChange={set("budget")}
                    disabled={status === "submitting"}
                    className={selectCls}
                  >
                    <option value="" disabled>
                      Select a range…
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              </Field>

              <Field label="Desired Timeline" required>
                <SelectWrapper>
                  <select
                    required
                    value={data.timeline}
                    onChange={set("timeline")}
                    disabled={status === "submitting"}
                    className={selectCls}
                  >
                    <option value="" disabled>
                      Select timeline…
                    </option>
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              </Field>
            </div>

            <Field
              label="Project Description"
              required
              hint="Tell us about your idea, the problem you're solving, and any specific requirements."
            >
              <textarea
                required
                rows={5}
                placeholder="We're building a SaaS platform that helps logistics companies track shipments in real time. We need a web dashboard, mobile app, and API integrations with…"
                value={data.description}
                onChange={set("description")}
                disabled={status === "submitting"}
                className={`${inputCls} min-h-[140px] resize-y leading-relaxed`}
              />
            </Field>
          </fieldset>

          {/* ── Submit ── */}
          <div className="flex flex-col gap-3">
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileTap={{ scale: 0.97 }}
              className="flex min-h-14 w-full items-center justify-center gap-2.5 rounded-button bg-brand-primary px-8 text-base font-semibold text-white shadow-md shadow-brand-primary/20 transition-all duration-fast hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <SpinnerIcon />
                  Sending your inquiry…
                </>
              ) : (
                <>
                  Send Your Inquiry
                  <ArrowIcon />
                </>
              )}
            </motion.button>

            <p className="text-center text-xs text-text-muted">
              <span className="mr-1" aria-hidden>🔒</span>
              Your information is secure and will never be shared.
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

// ── Field wrapper ──────────────────────────────────────────────────────────

function Field({
  label,
  required,
  optional,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold text-brand-dark">
        {label}
        {required && (
          <span className="text-brand-primary" aria-hidden>
            *
          </span>
        )}
        {optional && (
          <span className="font-normal text-text-muted">(optional)</span>
        )}
      </label>
      {children}
      {hint && (
        <p className="text-[11px] leading-relaxed text-text-muted">{hint}</p>
      )}
    </div>
  );
}

// ── Select chevron wrapper ─────────────────────────────────────────────────

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06z"
          />
        </svg>
      </div>
    </div>
  );
}

// ── Success state ──────────────────────────────────────────────────────────

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" as const }}
      className="flex flex-col items-center gap-7 py-16 text-center"
      role="status"
      aria-live="polite"
    >
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring" as const,
          stiffness: 220,
          damping: 18,
          delay: 0.1,
        }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50"
        style={{ aspectRatio: "1/1" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>

      <div className="flex flex-col gap-3">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          className="text-2xl font-bold text-brand-dark"
        >
          Your inquiry has been received!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.35 }}
          className="max-w-sm text-sm leading-relaxed text-text-secondary"
        >
          We'll review your project details and get back to you within{" "}
          <strong className="text-brand-dark">24 hours</strong> to discuss
          next steps and schedule your free consultation call.
        </motion.p>
      </div>

      {/* What to expect */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.36, duration: 0.35 }}
        className="flex flex-col gap-3 rounded-card border border-border-subtle bg-bg-surface px-6 py-5 text-left"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
          What happens next
        </p>
        {[
          "We review your inquiry and prepare an initial assessment",
          "You receive a personalized response within 24 hours",
          "We schedule a free 30-minute strategy call",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-[10px] font-bold text-brand-primary">
              {i + 1}
            </span>
            <span className="text-sm text-text-secondary">{step}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-button border border-border-subtle bg-bg-canvas px-7 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}

// ── Icon helpers ───────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M2 8a.5.5 0 0 1 .5-.5h9.793L10.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.293 8.5H2.5A.5.5 0 0 1 2 8z"
      />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      className="h-4 w-4 animate-spin"
      aria-hidden
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
