"use client";

import { motion, AnimatePresence } from "motion/react";

// ── Step content ───────────────────────────────────────────────────────────

const STEP_CONTENT = [
  {
    step: 1,
    heading: (
      <>
        Let&apos;s get{" "}
        <em className="text-accent">acquainted.</em>
      </>
    ),
    body: "Tell us who you are and how to reach you. We read every submission personally — no bots, no auto-replies.",
    tag: "Step 1 of 3 · Your details",
  },
  {
    step: 2,
    heading: (
      <>
        What are you{" "}
        <em className="text-accent">building?</em>
      </>
    ),
    body: "Help us understand the scope. Service type, budget, and timeline set the foundation for an honest, tailored proposal.",
    tag: "Step 2 of 3 · Project scope",
  },
  {
    step: 3,
    heading: (
      <>
        Paint us{" "}
        <em className="text-accent">the picture.</em>
      </>
    ),
    body: "Describe your idea as clearly as you can. No need to be technical — the problem, the goal, and what success looks like is enough.",
    tag: "Step 3 of 3 · Your vision",
  },
];

const NEXT_STEPS = [
  {
    title: "We review your inquiry",
    body: "Your submission lands directly with our team. We read every word and assess your project's scope, goals, and fit.",
  },
  {
    title: "You hear back within 24 hours",
    body: "A senior team member reaches out with an initial assessment and any clarifying questions.",
  },
  {
    title: "Free 30-minute strategy call",
    body: "We align on vision, timeline, and budget before proposing an engagement.",
  },
];

const TRUST = ["No commitment required", "< 24h response", "Free consultation"];

// ── Component ──────────────────────────────────────────────────────────────

export default function ContactInfoPanel({ step }: { step: number }) {
  const content = STEP_CONTENT[step - 1];

  return (
    <aside
      aria-label="Contact information"
      className="relative flex flex-col overflow-hidden bg-brand-dark px-6 pb-16 pt-20 sm:px-10 sm:pt-24 lg:sticky lg:top-0 lg:h-svh lg:w-[44%] lg:overflow-y-auto lg:px-14 lg:pt-20"
    >
      <PanelBackground />

      <div className="relative z-10 flex flex-col gap-10">
        {/* ── Step-aware header ── */}
        <div className="flex flex-col gap-5">
          {/* Live badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3.5 py-1.5 text-[11px] font-medium text-white/60"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span
                className="relative inline-flex h-2 w-2 rounded-full bg-accent"
                style={{ aspectRatio: "1/1" }}
              />
            </span>
            Free consultation · No commitment
          </motion.span>

          {/* Animated heading + body — swap on step change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="flex flex-col gap-4"
            >
              {/* Step tag */}
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
                {content.tag}
              </p>

              {/* Heading */}
              <h1 className="font-heading text-balance text-[clamp(2rem,4vw,2.875rem)] font-normal leading-[1.08] tracking-[-0.01em] text-white">
                {content.heading}
              </h1>

              {/* Body */}
              <p className="max-w-[42ch] text-[15px] leading-relaxed text-white/55">
                {content.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Step progress dots ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
          aria-label={`Step ${step} of 3`}
        >
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <motion.div
                animate={{
                  width: n === step ? 24 : 8,
                  backgroundColor: n <= step ? "rgb(53 103 160)" : "rgba(255,255,255,0.15)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" as const }}
                className="h-1.5 rounded-full"
                style={{ aspectRatio: n === step ? undefined : "1/1" }}
              />
            </div>
          ))}
          <span className="ml-1 text-[11px] text-white/30">{step} / 3</span>
        </motion.div>

        {/* ── What happens next ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" as const, delay: 0.23 }}
          className="flex flex-col"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-widest text-white/30">
            What happens next
          </p>

          {NEXT_STEPS.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 border-b border-white/6 py-4 last:border-none"
            >
              <div className="flex flex-col items-center gap-1.5 pt-0.5">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/8 font-mono text-[10px] font-semibold text-white/55"
                  style={{ aspectRatio: "1/1" }}
                >
                  {i + 1}
                </span>
                {i < NEXT_STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-white/5" />
                )}
              </div>
              <div className="flex flex-col gap-1.5 pb-2">
                <p className="text-sm font-semibold leading-snug text-white/85">
                  {item.title}
                </p>
                <p className="text-xs leading-relaxed text-white/40">{item.body}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Trust chips ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.38, duration: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {TRUST.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-[11px] font-medium text-white/55"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </aside>
  );
}

// ── Background ─────────────────────────────────────────────────────────────

function PanelBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute -right-20 -top-16 rounded-full blur-[100px]"
        style={{
          width: "380px",
          height: "340px",
          background: "radial-gradient(ellipse, rgba(168,200,232,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-12 rounded-full blur-[110px]"
        style={{
          width: "340px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(227,200,120,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-dark to-transparent" />
    </div>
  );
}
