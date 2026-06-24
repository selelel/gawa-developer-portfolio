"use client";

import { motion } from "motion/react";

const NEXT_STEPS = [
  {
    title: "We review your inquiry",
    body: "Your submission lands directly with our team. We read every word and assess your project's scope, goals, and fit.",
  },
  {
    title: "You hear back within 24 hours",
    body: "A senior team member will reach out with an initial assessment and any clarifying questions.",
  },
  {
    title: "Free 30-minute strategy call",
    body: "We get on a call to align on vision, timeline, and budget before proposing an engagement.",
  },
];

const TRUST = ["No commitment required", "< 24h response", "Free consultation"];

export default function ContactInfoPanel() {
  return (
    <aside
      aria-label="Contact information"
      className="relative flex flex-col overflow-hidden bg-brand-dark px-6 pb-16 pt-28 sm:px-10 sm:pt-32 lg:sticky lg:top-16 lg:h-[calc(100svh-4rem)] lg:w-[44%] lg:overflow-y-auto lg:px-14 lg:pt-16"
    >
      <PanelBackground />

      <div className="relative z-10 flex flex-col gap-10">
        {/* ── Header ── */}
        <div className="flex flex-col gap-5">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
            </span>
            Free Consultation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" as const, delay: 0.06 }}
            className="text-[clamp(2rem,4vw,2.75rem)] font-black leading-[1.06] tracking-tighter text-white"
          >
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-brand-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              remarkable
            </span>{" "}
            together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" as const, delay: 0.12 }}
            className="max-w-sm text-sm leading-relaxed text-white/50"
          >
            Fill in your project details on the right. We&apos;ll review
            everything and get back to you within 24 hours — no sales pressure,
            no commitment needed.
          </motion.p>
        </div>

        {/* ── What happens next ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" as const, delay: 0.2 }}
          className="flex flex-col gap-1"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30">
            What happens next
          </p>

          {NEXT_STEPS.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 border-b border-white/[0.05] py-4 last:border-none"
            >
              <div className="flex flex-col items-center gap-1 pt-0.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 font-mono text-[10px] font-bold text-brand-primary">
                  {i + 1}
                </span>
                {i < NEXT_STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-white/[0.06]" />
                )}
              </div>
              <div className="flex flex-col gap-1 pb-2">
                <p className="text-sm font-semibold text-white/90">{item.title}</p>
                <p className="text-xs leading-relaxed text-white/40">{item.body}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Trust chips ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {TRUST.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-semibold text-white/50"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </aside>
  );
}

function PanelBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/[0.06] blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
