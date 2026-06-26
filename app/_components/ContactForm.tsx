"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import type { StepDirection } from "./ContactPageShell";

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

type FieldErrors = Partial<Record<keyof FormData, string>>;
type TouchedFields = Partial<Record<keyof FormData, boolean>>;

const INITIAL: FormData = {
  name: "", company: "", email: "", phone: "",
  service: "", budget: "", timeline: "", description: "",
};

// ── Options ────────────────────────────────────────────────────────────────

const SERVICES = [
  "Custom Web Application", "Mobile Application", "SaaS Platform",
  "CRM / ERP System", "AI Integration", "API Development",
  "Business Automation", "UI/UX Design", "Maintenance & Support",
  "Other / Not Sure Yet",
];

const BUDGETS = [
  "Under $5,000", "$5,000 – $15,000", "$15,000 – $30,000",
  "$30,000 – $60,000", "$60,000+", "Not Sure Yet",
];

const TIMELINES = ["ASAP (1–4 weeks)", "1–3 months", "3–6 months", "6+ months", "Flexible"];

// ── Validation ─────────────────────────────────────────────────────────────

function validateStep(step: number, data: FormData): FieldErrors {
  const e: FieldErrors = {};
  if (step === 1) {
    if (!data.name.trim()) e.name = "Full name is required";
    if (!data.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Enter a valid email address";
  }
  if (step === 2) {
    if (!data.service)  e.service  = "Please select a service";
    if (!data.budget)   e.budget   = "Please select a budget range";
    if (!data.timeline) e.timeline = "Please select a timeline";
  }
  if (step === 3) {
    if (data.description.trim().length < 20)
      e.description = "Please describe your project (at least 20 characters)";
  }
  return e;
}

// ── Slide variants ─────────────────────────────────────────────────────────

const slide = {
  enter: (dir: StepDirection) => ({
    x: dir === "forward" ? 40 : -40,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: (dir: StepDirection) => ({
    x: dir === "forward" ? -40 : 40,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

// ── Shared field styles ────────────────────────────────────────────────────

function inputCls(error?: string, value?: string) {
  const base =
    "w-full min-h-[48px] rounded-input border bg-bg-surface px-4 py-3 text-sm text-brand-dark placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50";
  if (error)
    return `${base} border-semantic-error focus:border-semantic-error focus:ring-semantic-error/15`;
  if (value?.trim())
    return `${base} border-semantic-success/50 focus:border-accent focus:ring-accent/15`;
  return `${base} border-border-subtle focus:border-accent focus:ring-accent/15`;
}

function selectCls(error?: string, value?: string) {
  return `${inputCls(error, value)} appearance-none cursor-pointer`;
}

// ── Main component ─────────────────────────────────────────────────────────

export default function ContactForm({
  step,
  direction,
  onNext,
}: {
  step: number;
  direction: StepDirection;
  onNext: () => void;
  onBack: () => void;
}) {
  const [data, setData]       = useState<FormData>(INITIAL);
  const [touched, setTouched] = useState<TouchedFields>({});
  const [errors, setErrors]   = useState<FieldErrors>({});
  const [status, setStatus]   = useState<"idle" | "submitting" | "success">("idle");
  const uid = useId();

  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [field]: e.target.value }));
      if (touched[field]) {
        const freshErrors = validateStep(step, { ...data, [field]: e.target.value });
        setErrors((prev) => ({ ...prev, [field]: freshErrors[field] }));
      }
    };

  const touch = (field: keyof FormData) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const freshErrors = validateStep(step, data);
    setErrors((prev) => ({ ...prev, [field]: freshErrors[field] }));
  };

  const handleContinue = () => {
    const allTouched: TouchedFields = {};
    const stepFields: (keyof FormData)[] =
      step === 1 ? ["name", "email"] :
      step === 2 ? ["service", "budget", "timeline"] :
                   ["description"];
    stepFields.forEach((f) => { allTouched[f] = true; });
    setTouched((t) => ({ ...t, ...allTouched }));
    const newErrors = validateStep(step, data);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) onNext();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateStep(3, data);
    if (Object.keys(newErrors).length > 0) {
      setTouched((t) => ({ ...t, description: true }));
      setErrors(newErrors);
      return;
    }
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") return <SuccessState name={data.name} />;

  const STEP_HEADS = [
    { label: "Step 1 of 3", title: "Your Details" },
    { label: "Step 2 of 3", title: "Project Scope" },
    { label: "Step 3 of 3", title: "Your Vision"  },
  ];
  const head = STEP_HEADS[step - 1];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project inquiry form"
      className="flex flex-col"
    >
      {/* ── Animated step header ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`head-${step}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: "easeOut" as const }}
          className="mb-8 flex flex-col gap-2"
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
            {head.label}
          </p>
          <h2 className="font-heading text-balance text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal tracking-tight text-brand-dark">
            {head.title}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* ── Animated step fields ── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`step-${step}`}
          custom={direction}
          variants={slide}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col gap-6"
        >
          {step === 1 && (
            <Step1
              data={data} errors={errors} touched={touched}
              set={set} touch={touch} uid={uid}
            />
          )}
          {step === 2 && (
            <Step2
              data={data} errors={errors} touched={touched}
              set={set} touch={touch} uid={uid}
            />
          )}
          {step === 3 && (
            <Step3
              data={data} errors={errors} touched={touched}
              set={set} touch={touch} uid={uid}
              submitting={status === "submitting"}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Summary strip (step 3 only) ── */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mt-7 rounded-card border border-border-subtle bg-bg-surface px-5 py-4"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
            Your answers so far
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            <SummaryRow label="Name" value={data.name || "—"} />
            <SummaryRow label="Email" value={data.email || "—"} />
            {data.company && <SummaryRow label="Company" value={data.company} />}
            {data.phone   && <SummaryRow label="Phone"   value={data.phone}   />}
            <SummaryRow label="Service"  value={data.service  || "—"} />
            <SummaryRow label="Budget"   value={data.budget   || "—"} />
            <SummaryRow label="Timeline" value={data.timeline || "—"} />
          </div>
        </motion.div>
      )}

      {/* ── Action button ── */}
      <div className="mt-8 flex flex-col gap-3">
        {step < 3 ? (
          <motion.button
            type="button"
            onClick={handleContinue}
            whileTap={{ scale: 0.97 }}
            className="flex min-h-14 w-full items-center justify-center gap-2.5 rounded-button bg-brand-primary px-8 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            Continue
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M6 3l5 5-5 5" />
            </svg>
          </motion.button>
        ) : (
          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileTap={{ scale: 0.97 }}
            className="flex min-h-14 w-full items-center justify-center gap-2.5 rounded-button bg-brand-primary px-8 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <SpinnerIcon />
                Sending your inquiry…
              </>
            ) : (
              <>
                Send Your Inquiry
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </>
            )}
          </motion.button>
        )}

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-text-muted">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0" aria-hidden>
            <rect x="3" y="7" width="10" height="8" rx="1.5" />
            <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
          </svg>
          Your information is secure and will never be shared.
        </p>
      </div>
    </form>
  );
}

// ── Step 1 — Your Details ──────────────────────────────────────────────────

function Step1({ data, errors, touched, set, touch, uid }: StepProps) {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={`${uid}-name`} label="Full Name" required error={touched.name ? errors.name : undefined}>
          <input
            id={`${uid}-name`}
            type="text"
            placeholder="Jan Russel"
            required
            autoComplete="name"
            autoFocus
            value={data.name}
            onChange={set("name")}
            onBlur={() => touch("name")}
            className={inputCls(touched.name ? errors.name : undefined, data.name)}
          />
        </Field>

        <Field id={`${uid}-company`} label="Company" optional>
          <input
            id={`${uid}-company`}
            type="text"
            placeholder="Acme Corp"
            autoComplete="organization"
            value={data.company}
            onChange={set("company")}
            className={inputCls(undefined, data.company)}
          />
        </Field>

        <Field id={`${uid}-email`} label="Email Address" required error={touched.email ? errors.email : undefined}>
          <input
            id={`${uid}-email`}
            type="email"
            placeholder="you@company.com"
            required
            autoComplete="email"
            value={data.email}
            onChange={set("email")}
            onBlur={() => touch("email")}
            className={inputCls(touched.email ? errors.email : undefined, data.email)}
          />
        </Field>

        <Field id={`${uid}-phone`} label="Phone" optional>
          <input
            id={`${uid}-phone`}
            type="tel"
            placeholder="+63 912 345 6789"
            autoComplete="tel"
            value={data.phone}
            onChange={set("phone")}
            className={inputCls(undefined, data.phone)}
          />
        </Field>
      </div>
    </>
  );
}

// ── Step 2 — Project Scope ─────────────────────────────────────────────────

function Step2({ data, errors, touched, set, touch, uid }: StepProps) {
  return (
    <>
      <Field id={`${uid}-service`} label="Service Needed" required error={touched.service ? errors.service : undefined}>
        <SelectWrapper>
          <select
            id={`${uid}-service`}
            required
            value={data.service}
            onChange={set("service")}
            onBlur={() => touch("service")}
            className={selectCls(touched.service ? errors.service : undefined, data.service)}
          >
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </SelectWrapper>
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={`${uid}-budget`} label="Estimated Budget" required error={touched.budget ? errors.budget : undefined}>
          <SelectWrapper>
            <select
              id={`${uid}-budget`}
              required
              value={data.budget}
              onChange={set("budget")}
              onBlur={() => touch("budget")}
              className={selectCls(touched.budget ? errors.budget : undefined, data.budget)}
            >
              <option value="" disabled>Select a range…</option>
              {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </SelectWrapper>
        </Field>

        <Field id={`${uid}-timeline`} label="Desired Timeline" required error={touched.timeline ? errors.timeline : undefined}>
          <SelectWrapper>
            <select
              id={`${uid}-timeline`}
              required
              value={data.timeline}
              onChange={set("timeline")}
              onBlur={() => touch("timeline")}
              className={selectCls(touched.timeline ? errors.timeline : undefined, data.timeline)}
            >
              <option value="" disabled>Select timeline…</option>
              {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </SelectWrapper>
        </Field>
      </div>
    </>
  );
}

// ── Step 3 — Your Vision ───────────────────────────────────────────────────

function Step3({ data, errors, touched, set, touch, uid, submitting }: StepProps & { submitting: boolean }) {
  const charCount = data.description.trim().length;
  return (
    <Field
      id={`${uid}-description`}
      label="Project Description"
      required
      error={touched.description ? errors.description : undefined}
      hint="Describe the problem you're solving and what success looks like. No need to be technical."
    >
      <div className="relative">
        <textarea
          id={`${uid}-description`}
          required
          rows={7}
          placeholder="We're building a SaaS platform that helps logistics companies track shipments in real time. We need a web dashboard, mobile app, and API integrations…"
          value={data.description}
          onChange={set("description")}
          onBlur={() => touch("description")}
          disabled={submitting}
          className={`${inputCls(touched.description ? errors.description : undefined, data.description)} resize-y leading-relaxed`}
        />
        <span
          className={[
            "absolute bottom-3 right-3 text-[10px] tabular-nums transition-colors",
            charCount < 20 ? "text-text-muted" : "text-semantic-success",
          ].join(" ")}
        >
          {charCount} / 20+
        </span>
      </div>
    </Field>
  );
}

// ── Success state ──────────────────────────────────────────────────────────

function SuccessState({ name }: { name: string }) {
  const firstName = name.split(" ")[0];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" as const }}
      className="flex flex-col items-center gap-7 py-16 text-center"
      role="status"
      aria-live="polite"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" as const, stiffness: 220, damping: 18, delay: 0.1 }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50"
        style={{ aspectRatio: "1/1" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9" aria-hidden>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>

      <div className="flex flex-col gap-3">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-normal text-brand-dark"
        >
          {firstName ? `Thanks, ${firstName}!` : "Inquiry received!"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.35 }}
          className="max-w-sm text-sm leading-relaxed text-text-secondary"
        >
          We&apos;ll review your project details and get back to you within{" "}
          <strong className="text-brand-dark">24 hours</strong> to discuss next steps.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.36, duration: 0.35 }}
        className="flex flex-col gap-3 rounded-card border border-border-subtle bg-bg-surface px-6 py-5 text-left w-full max-w-sm"
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">What happens next</p>
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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
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

// ── Field wrapper ──────────────────────────────────────────────────────────

function Field({
  id, label, required, optional, hint, error, children,
}: {
  id: string; label: string; required?: boolean; optional?: boolean;
  hint?: string; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-center gap-1.5 text-xs font-semibold text-brand-dark">
        {label}
        {required && <span className="text-brand-primary" aria-hidden>*</span>}
        {optional && <span className="font-normal text-text-muted">(optional)</span>}
      </label>
      {children}
      <AnimatePresence mode="wait">
        {error ? (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            role="alert"
            className="flex items-center gap-1.5 text-[11px] text-semantic-error"
          >
            <svg viewBox="0 0 12 12" fill="currentColor" className="h-3 w-3 shrink-0" aria-hidden>
              <path d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1zm0 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 6 4zm0 5a.75.75 0 1 1 0-1.5A.75.75 0 0 1 6 9z" />
            </svg>
            {error}
          </motion.p>
        ) : hint ? (
          <motion.p key="hint" className="text-[11px] leading-relaxed text-text-muted">
            {hint}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// ── Select chevron wrapper ─────────────────────────────────────────────────

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
        <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4" aria-hidden>
          <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06z" />
        </svg>
      </div>
    </div>
  );
}

// ── Summary row ────────────────────────────────────────────────────────────

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-semibold uppercase tracking-wide text-text-muted">{label}</span>
      <span className="text-sm font-medium text-brand-dark truncate">{value}</span>
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────

function SpinnerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="h-4 w-4 animate-spin" aria-hidden>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

// ── Shared prop type ───────────────────────────────────────────────────────

type StepProps = {
  data: FormData;
  errors: FieldErrors;
  touched: TouchedFields;
  set: (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  touch: (field: keyof FormData) => void;
  uid: string;
};
