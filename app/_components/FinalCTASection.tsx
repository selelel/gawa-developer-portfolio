"use client";

import Link from "next/link";
import { motion } from "motion/react";

// ── Data ───────────────────────────────────────────────────────────────────

const HEADLINE: { text: string; italic: boolean }[] = [
  { text: "Ready", italic: false },
  { text: "to", italic: false },
  { text: "build", italic: false },
  { text: "software", italic: false },
  { text: "that", italic: false },
  { text: "powers", italic: true },
  { text: "your", italic: true },
  { text: "business?", italic: true },
];

const TRUST_CHIPS = [
  "No commitment required",
  "Free initial consultation",
  "Response within 24 hours",
];

// ── Section ────────────────────────────────────────────────────────────────

export default function FinalCTASection() {
  return (
    <section
      aria-label="Start Your Project"
      className="relative overflow-hidden bg-brand-dark py-32 sm:py-44"
    >
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-12">

        {/* ── Status badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" style={{ aspectRatio: "1/1" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" style={{ aspectRatio: "1/1" }} />
            </span>
            Currently Accepting New Projects
          </span>
        </motion.div>

        {/* ── Headline — word-by-word reveal ── */}
        <h2 className="font-heading mt-8 text-[clamp(2.25rem,6vw,4.5rem)] font-normal leading-[1.1] tracking-tight text-balance">
          {HEADLINE.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: 0.1 + i * 0.055,
                duration: 0.45,
                ease: "easeOut" as const,
              }}
              className={[
                "mr-[0.22em] inline-block last:mr-0",
                word.italic ? "italic text-accent" : "text-white",
              ].join(" ")}
            >
              {word.text}
            </motion.span>
          ))}
        </h2>

        {/* ── Subtext ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-white/60"
        >
          Tell us about your idea. We'll get back to you within 24 hours with
          a clear, no-fluff plan for bringing it to life.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.72 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* Primary — white pill on dark */}
          <motion.div whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className="group inline-flex min-h-14 min-w-12 items-center justify-center gap-2 rounded-button bg-white px-10 py-4 text-base font-semibold text-brand-dark transition-colors duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              Start Your Project
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h9.793L10.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.293 8.5H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Secondary — ghost outline */}
          <motion.div whileTap={{ scale: 0.96 }}>
            <Link
              href="/#services"
              className="inline-flex min-h-14 min-w-12 items-center justify-center rounded-button border border-white/14 bg-white/4 px-9 py-4 text-base font-semibold text-white/75 transition-all duration-200 hover:border-white/30 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Trust chips ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
        >
          {TRUST_CHIPS.map((chip) => (
            <span
              key={chip}
              className="flex items-center gap-2 text-xs text-white/40"
            >
              <span className="h-1 w-1 rounded-full bg-accent/50" aria-hidden />
              {chip}
            </span>
          ))}
        </motion.div>

        {/* ── Decorative divider line above ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="absolute inset-x-0 top-0 mx-auto h-px max-w-2xl origin-center bg-linear-to-r from-transparent via-white/10 to-transparent"
        />
      </div>
    </section>
  );
}

// ── Background ─────────────────────────────────────────────────────────────

function BackgroundEffects() {
  return (
    <>
      {/* Central mint atmospheric orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]"
        style={{
          width: "900px",
          height: "700px",
          background:
            "radial-gradient(ellipse, rgba(167,229,211,0.12) 0%, rgba(167,229,211,0.04) 45%, transparent 70%)",
        }}
      />

      {/* Lavender — top left */}
      <div
        className="animate-pulse-glow pointer-events-none absolute -left-24 -top-24 rounded-full blur-3xl"
        style={{
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(ellipse, rgba(200,184,224,0.1) 0%, transparent 70%)",
          aspectRatio: "1/1",
        }}
      />

      {/* Peach — bottom right */}
      <div
        className="animate-pulse-glow pointer-events-none absolute -bottom-24 -right-24 rounded-full blur-3xl"
        style={{
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(ellipse, rgba(244,197,168,0.1) 0%, transparent 70%)",
          aspectRatio: "1/1",
        }}
      />

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-brand-dark to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-brand-dark to-transparent" />
    </>
  );
}
