"use client";

import Link from "next/link";
import { motion, MotionConfig } from "motion/react";

// ── Data ──────────────────────────────────────────────────────────────────

const HEADLINE = [
  { text: "Build Software That", italic: false },
  { text: "Powers Your Business", italic: true },
] as const;

const OUTCOME_ROWS = [
  {
    pain: "Monday reporting",
    painSub: "4 hrs of copy-pasting data",
    gain: "Reports run themselves",
    gainSub: "Every Monday at 7am",
  },
  {
    pain: "Stale sales data",
    painSub: "3 days behind, always",
    gain: "Real-time dashboard",
    gainSub: "Always current, always ready",
  },
  {
    pain: "Manual invoicing",
    painSub: "2 hrs every month-end",
    gain: "Auto-invoiced on schedule",
    gainSub: "Zero manual steps",
  },
] as const;

// ── Section ───────────────────────────────────────────────────────────────

export default function HeroSection() {
  const scrollToServices = () =>
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-label="Hero"
        className="relative isolate min-h-svh flex items-center overflow-hidden bg-bg-canvas px-5 sm:px-8 lg:px-12"
      >
        <HeroBackground />

        <div className="relative z-10 mx-auto w-full max-w-7xl pt-28 pb-20 lg:pt-32 lg:pb-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">

            {/* ── Left: copy ── */}
            <div className="flex flex-col items-center gap-7 text-center lg:col-span-7 lg:items-start lg:pr-4 lg:text-left">

              <h1 className="font-heading text-[clamp(2.5rem,5.5vw,4.75rem)] font-normal leading-[1.06] tracking-[-0.01em] [text-wrap:balance]">
                {HEADLINE.map((line, i) => (
                  <span key={i} className="block overflow-hidden pb-[0.06em]">
                    <motion.span
                      className={`block text-brand-dark${line.italic ? " italic" : ""}`}
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        delay: 0.1 + i * 0.15,
                        duration: 0.65,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {line.text}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                className="max-w-[52ch] text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-text-secondary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
              >
                We engineer scalable web applications, SaaS platforms, and
                business automation that help companies streamline operations
                and grow with confidence.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.82, duration: 0.45, ease: "easeOut" }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-button bg-brand-primary px-8 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  >
                    Start Your Project
                  </Link>
                </motion.div>

                <motion.button
                  onClick={scrollToServices}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-12 items-center justify-center rounded-button border border-border-subtle px-7 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-brand-primary hover:bg-bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  View Services
                </motion.button>
              </motion.div>

              <motion.p
                className="text-xs text-text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05, duration: 0.5 }}
              >
                Trusted by founders, operators, and engineering teams to deliver
                production-ready software
              </motion.p>
            </div>

            {/* ── Right: outcome panel ── */}
            <motion.div
              className="hidden items-center justify-center lg:col-span-5 lg:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              aria-hidden
            >
              <HeroOutcomePanel />
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

// ── Outcome Panel ─────────────────────────────────────────────────────────

function HeroOutcomePanel() {
  return (
    <div className="w-full max-w-105 font-sans">
      <motion.div
        className="overflow-hidden rounded-card border border-border-subtle bg-bg-surface shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex border-b border-border-subtle">
          <div className="flex-1 border-r border-border-subtle bg-bg-muted px-4 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
              Before
            </span>
          </div>
          <div className="flex-1 px-4 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
              After Gawa
            </span>
          </div>
        </div>

        {OUTCOME_ROWS.map((row, i) => (
          <motion.div
            key={row.pain}
            className="flex border-b border-border-subtle last:border-b-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 + i * 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-1 flex-col gap-0.5 border-r border-border-subtle bg-bg-muted px-4 py-3.5">
              <span className="text-[12px] font-medium text-text-secondary">{row.pain}</span>
              <span className="text-[11px] text-text-muted">{row.painSub}</span>
            </div>
            <div className="flex flex-1 flex-col gap-0.5 px-4 py-3.5">
              <span className="text-[12px] font-semibold text-accent">✓ {row.gain}</span>
              <span className="text-[11px] text-text-muted">{row.gainSub}</span>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="flex items-center justify-between bg-bg-muted px-4 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.4 }}
        >
          <span className="text-[11px] font-medium text-text-muted">Your team's time back</span>
          <span className="text-[13px] font-bold text-accent">22 hrs / week</span>
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-3 text-center text-[11px] text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.4 }}
      >
        Real outcomes from real projects
      </motion.p>
    </div>
  );
}

// ── Background ─────────────────────────────────────────────────────────────

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      <div
        className="absolute -right-24 top-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{
          width: "640px",
          height: "640px",
          background: "radial-gradient(ellipse, rgba(167,229,211,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -left-48 -top-24 rounded-full blur-[180px]"
        style={{
          width: "480px",
          height: "480px",
          background: "radial-gradient(ellipse, rgba(200,184,224,0.14) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(circle, #0c0a09 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
