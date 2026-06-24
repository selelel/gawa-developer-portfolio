"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

// ── Data ───────────────────────────────────────────────────────────────────

type FAQ = { question: string; answer: string };

const FAQS: FAQ[] = [
  {
    question: "How much does a custom project cost?",
    answer:
      "Every project is scoped and priced based on complexity, team size, and timeline. After a free discovery call we provide a detailed proposal with a clear cost breakdown — no hidden fees. Focused tools and internal apps typically start around $5,000, while full-scale SaaS platforms and enterprise systems range from $20,000 to $80,000+.",
  },
  {
    question: "How long does development typically take?",
    answer:
      "Most projects run 6–16 weeks from kickoff to launch. A focused web app or internal tool can ship in 4–6 weeks. Enterprise platforms with complex features take 3–6 months. We'll give you a realistic, milestone-based timeline during the planning phase — and we stick to it.",
  },
  {
    question: "Do you offer maintenance and support after launch?",
    answer:
      "Yes. We offer ongoing maintenance packages covering security updates, performance monitoring, bug fixes, and feature iterations. You choose the level of support that fits your business — from essential monitoring to a dedicated development retainer for continuous improvement.",
  },
  {
    question: "Can you build exactly what we have in mind?",
    answer:
      "Absolutely. All our work is 100% custom — no templates, no off-the-shelf solutions. We collaborate closely to understand your exact requirements and translate them into software that fits your business processes precisely. If your idea evolves during development, our sprint-based process accommodates that.",
  },
  {
    question: "Can you work with our existing codebase or systems?",
    answer:
      "Yes. We regularly audit, extend, and modernize existing systems. Whether you need a new feature added to a legacy codebase, a full refactor, a migration to a modern stack, or integration with third-party platforms — we evaluate what you have and define the most pragmatic path forward.",
  },
  {
    question: "How do you keep clients informed during development?",
    answer:
      "We use weekly sprint reviews, a shared project dashboard, and async communication via Slack or your preferred tool. You'll always know what's been completed, what's in progress, and what's coming next. No surprises — and you're always free to give feedback at any stage.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack is React, Next.js, TypeScript, Node.js, PostgreSQL, and Tailwind CSS. We also work with Supabase, Docker, AWS, and Vercel for infrastructure. For mobile we use React Native. We choose technologies based on what's right for your project and team — not just what's trending.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// ── Section ────────────────────────────────────────────────────────────────

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="relative overflow-hidden bg-bg-canvas py-24 sm:py-32"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-4 py-1.5 text-sm font-medium text-brand-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            FAQ
          </span>
          <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-brand-dark">
            Questions we hear
            <span className="text-brand-primary"> every day</span>
          </h2>
          <p className="mt-4 text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed text-text-secondary">
            Straightforward answers to the questions clients ask before starting
            a project. Still not sure? Just ask — we respond within 24 hours.
          </p>
        </motion.div>

        {/* ── Body: accordion + sidebar ── */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-16 xl:grid-cols-[1fr_380px]">

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
          >
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 }}
          >
            <ContactNudge />
          </motion.div>
        </div>
      </div>

      {/* FAQPage JSON-LD for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </section>
  );
}

// ── Accordion item ─────────────────────────────────────────────────────────

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={[
        "relative border-b border-border-subtle transition-colors duration-200",
        index === 0 ? "border-t" : "",
      ].join(" ")}
    >
      {/* Left accent line when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="accent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="absolute bottom-0 left-0 top-0 w-0.5 origin-top rounded-r bg-brand-primary"
          />
        )}
      </AnimatePresence>

      {/* Question button */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex min-h-[52px] w-full items-center justify-between gap-6 py-5 pl-5 pr-1 text-left"
      >
        <span
          className={[
            "text-sm font-semibold leading-snug transition-colors duration-200 sm:text-base",
            isOpen ? "text-brand-primary" : "text-brand-dark",
          ].join(" ")}
        >
          {faq.question}
        </span>

        {/* Rotating plus / cross */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" as const }}
          className={[
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
            isOpen
              ? "border-brand-primary/30 bg-brand-primary/10 text-brand-primary"
              : "border-border-subtle bg-bg-surface text-text-muted",
          ].join(" ")}
          style={{ aspectRatio: "1/1" }}
          aria-hidden
        >
          <svg
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-3.5 w-3.5"
          >
            <path d="M7 1v12M1 7h12" />
          </svg>
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-6 pl-5 pr-10 text-sm leading-relaxed text-text-secondary sm:text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Sidebar contact nudge ──────────────────────────────────────────────────

function ContactNudge() {
  return (
    <div className="sticky top-24 flex flex-col gap-6 rounded-card border border-border-subtle bg-bg-surface p-7 shadow-card">
      {/* Icon */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary"
        style={{ aspectRatio: "1/1" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-brand-dark">
          Still have questions?
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">
          Book a free 30-minute call. We'll answer everything, review your idea,
          and tell you exactly what it would take to build.
        </p>
      </div>

      {/* CTA */}
      <motion.div whileTap={{ scale: 0.97 }}>
        <Link
          href="/contact"
          className="flex min-h-12 w-full items-center justify-center rounded-button bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-primary/20 transition-colors duration-fast hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        >
          Schedule a Free Call
        </Link>
      </motion.div>

      {/* Trust signals */}
      <ul className="flex flex-col gap-2">
        {[
          "No commitment required",
          "Response within 24 hours",
          "Free project consultation",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-text-muted">
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-[9px] font-bold text-brand-primary"
              aria-hidden
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Background ─────────────────────────────────────────────────────────────

function BackgroundDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.04) 0%, transparent 70%)",
          aspectRatio: "1/1",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-brand-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-dark) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </>
  );
}
