"use client";

import Link from "next/link";
import { motion, MotionConfig } from "motion/react";

// ── Data ──────────────────────────────────────────────────────────────────

const HEADLINE = [
  { text: "Build Software That", accent: false },
  { text: "Powers Your Business", accent: true },
] as const;

// ── Section ───────────────────────────────────────────────────────────────

export default function HeroPage() {
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

              {/* Headline — clip-mask line reveal */}
              <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.04] tracking-[-0.02em] text-balance">
                {HEADLINE.map((line, i) => (
                  <span key={i} className="block overflow-hidden pb-[0.06em]">
                    <motion.span
                      className={`block ${line.accent ? "text-brand-primary" : "text-brand-dark"}`}
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        delay: 0.1 + i * 0.15 + (line.accent ? 0.08 : 0),
                        duration: 0.65,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {line.text}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {/* Subline */}
              <motion.p
                className="max-w-[52ch] text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-text-secondary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
              >
                We engineer scalable web applications, SaaS platforms, and business
                automation that help companies streamline operations and grow with
                confidence.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-5 lg:justify-start"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.82, duration: 0.45, ease: "easeOut" }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-button bg-brand-primary px-8 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(255,79,0,0.25)] transition-all duration-300 hover:bg-brand-primary-hover hover:shadow-[0_4px_20px_rgba(255,79,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  >
                    Start Your Project
                  </Link>
                </motion.div>

                <button
                  onClick={scrollToServices}
                  className="group inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-brand-dark transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                >
                  See our services
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h9.793L10.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.293 8.5H2.5A.5.5 0 0 1 2 8z"
                    />
                  </svg>
                </button>
              </motion.div>

              {/* Authority line */}
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

            {/* ── Right: craft mark ── */}
            <motion.div
              className="hidden items-center justify-center lg:col-span-5 lg:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              aria-hidden
            >
              <CraftMark />
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

// ── Craft Mark SVG ────────────────────────────────────────────────────────

const EASE_DRAW: [number, number, number, number] = [0.6, 0, 0.4, 1];

const CORNER_BRACKETS = [
  "M 52 52 L 52 84 L 84 84",
  "M 428 52 L 428 84 L 396 84",
  "M 52 428 L 52 396 L 84 396",
  "M 428 428 L 428 396 L 396 396",
];

const QUARTER_DOTS = [
  { cx: 240, cy: 40 },
  { cx: 440, cy: 240 },
  { cx: 240, cy: 440 },
  { cx: 40, cy: 240 },
];

const TICK_LINES = [
  { x1: 240, y1: 110, x2: 240, y2: 96 },
  { x1: 370, y1: 240, x2: 384, y2: 240 },
  { x1: 240, y1: 370, x2: 240, y2: 384 },
  { x1: 110, y1: 240, x2: 96, y2: 240 },
];

function CraftMark() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      className="w-full max-w-[440px]"
      style={{ aspectRatio: "1 / 1" }}
    >
      {/* Outer ring */}
      <motion.circle
        cx={240} cy={240} r={200}
        stroke="#201515" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.13 }}
        transition={{ delay: 0.5, duration: 1.4, ease: EASE_DRAW }}
      />

      {/* Middle ring */}
      <motion.circle
        cx={240} cy={240} r={130}
        stroke="#201515" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.1 }}
        transition={{ delay: 0.7, duration: 1.1, ease: EASE_DRAW }}
      />

      {/* Inner accent ring — orange */}
      <motion.circle
        cx={240} cy={240} r={68}
        stroke="#ff4f00" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.65 }}
        transition={{ delay: 1.0, duration: 0.9, ease: EASE_DRAW }}
      />

      {/* Horizontal axis */}
      <motion.line
        x1="40" y1="240" x2="440" y2="240"
        stroke="#201515" strokeWidth="0.75"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.09 }}
        transition={{ delay: 0.55, duration: 0.9, ease: EASE_DRAW }}
      />

      {/* Vertical axis */}
      <motion.line
        x1="240" y1="40" x2="240" y2="440"
        stroke="#201515" strokeWidth="0.75"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.09 }}
        transition={{ delay: 0.6, duration: 0.9, ease: EASE_DRAW }}
      />

      {/* Dashed diagonal — TL to BR */}
      <motion.line
        x1="90" y1="90" x2="390" y2="390"
        stroke="#201515" strokeWidth="0.5" strokeDasharray="3 10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      />

      {/* Dashed diagonal — TR to BL */}
      <motion.line
        x1="390" y1="90" x2="90" y2="390"
        stroke="#201515" strokeWidth="0.5" strokeDasharray="3 10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 1.15, duration: 0.5 }}
      />

      {/* Cardinal tick marks */}
      {TICK_LINES.map((t, i) => (
        <motion.line
          key={i}
          x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          stroke="#201515" strokeWidth="1.5" strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1.25 + i * 0.05, duration: 0.3 }}
        />
      ))}

      {/* Corner brackets — orange */}
      {CORNER_BRACKETS.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="#ff4f00" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ delay: 1.35 + i * 0.07, duration: 0.35, ease: "easeOut" }}
        />
      ))}

      {/* Quarter dots on outer ring */}
      {QUARTER_DOTS.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx} cy={p.cy} r={3.5}
          fill="#ff4f00"
          style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ delay: 1.6 + i * 0.06, duration: 0.3, ease: "backOut" }}
        />
      ))}

      {/* Center dot — last to arrive */}
      <motion.circle
        cx={240} cy={240} r={5.5}
        fill="#ff4f00"
        style={{ transformOrigin: "240px 240px" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.85, duration: 0.4, ease: [0.175, 0.885, 0.32, 1.2] }}
      />
    </svg>
  );
}

// ── Background ─────────────────────────────────────────────────────────────

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      {/* Warm radial glow behind craft mark area */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(ellipse, rgba(255,79,0,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Fine dot grid — warm ink, barely-there */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #201515 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
