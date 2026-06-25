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
          <div data-impeccable-variants="be886d3a" data-impeccable-variant-count="3" style={{ display: "contents" }}>
            {/* impeccable-variants-start be886d3a */}
            {/* Original */}
            <div data-impeccable-variant="original">
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
                  <HeroOutcomePanel />
                </motion.div>
              </div>
            </div>
            {/* Variants: insert below this line */}
<style data-impeccable-css="be886d3a">{`
  /* ── V1: Zapier Workflow ─────────────────────────────── */
  @scope ([data-impeccable-variant="1"]) {
    :scope > .v1-grid .v1-btn-primary {
      background-color: #ff4f00;
      color: #fff;
      box-shadow: 0 3px 0 0 #c73c00, 0 6px 20px rgba(255,79,0,calc(0.2 + var(--p-accent,0.7)*0.2));
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }
    :scope > .v1-grid .v1-btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 0 0 #c73c00, 0 8px 24px rgba(255,79,0,0.35);
    }
    :scope > .v1-grid .v1-btn-primary:active {
      transform: translateY(2px);
      box-shadow: 0 1px 0 0 #c73c00, 0 2px 8px rgba(255,79,0,0.2);
    }
    :scope > .v1-grid .v1-accent {
      color: color-mix(in srgb, #ff4f00 calc(var(--p-accent,0.7)*100%), #e63c00);
    }
    :scope > .v1-grid .v1-connector {
      width: 2px;
      background: linear-gradient(to bottom, rgba(255,79,0,calc(var(--p-accent,0.7)*0.6)), rgba(255,79,0,0.1));
    }
    :scope > .v1-grid[data-p-right-style="metrics"] .v1-workflow { display: none; }
    :scope > .v1-grid[data-p-right-style="flow"] .v1-metrics { display: none; }
  }

  /* ── V2: Zapier Orange Panel ─────────────────────────── */
  @scope ([data-impeccable-variant="2"]) {
    :scope > .v2-grid[data-p-panel="warm"] .v2-right-panel {
      background: #fff5f2;
      border-color: #ffd4c4;
    }
    :scope > .v2-grid[data-p-panel="dark"] .v2-right-panel {
      background: #0f0f0f;
      border-color: #2a2a2a;
    }
    :scope > .v2-grid[data-p-panel="dark"] .v2-monogram {
      color: #ff4f00;
    }
    :scope > .v2-grid[data-p-panel="dark"] .v2-panel-headline {
      color: rgba(255,255,255,0.92);
    }
    :scope > .v2-grid[data-p-panel="dark"] .v2-panel-sub {
      color: rgba(255,255,255,0.45);
    }
    :scope > .v2-grid[data-p-panel="dark"] .v2-panel-tag {
      background: rgba(255,79,0,0.15);
      color: #ff7a40;
      border-color: rgba(255,79,0,0.25);
    }
    :scope > .v2-grid[data-p-panel="orange"] .v2-right-panel {
      background: #ff4f00;
      border-color: #e03c00;
    }
    :scope > .v2-grid[data-p-panel="orange"] .v2-monogram { color: rgba(255,255,255,0.2); }
    :scope > .v2-grid[data-p-panel="orange"] .v2-panel-headline { color: #fff; }
    :scope > .v2-grid[data-p-panel="orange"] .v2-panel-sub { color: rgba(255,255,255,0.7); }
    :scope > .v2-grid[data-p-panel="orange"] .v2-panel-tag {
      background: rgba(0,0,0,0.15);
      color: rgba(255,255,255,0.9);
      border-color: rgba(0,0,0,0.2);
    }
    :scope > .v2-grid[data-p-cta="ink"] .v2-btn-primary {
      background: #0f0f0f;
      box-shadow: 0 3px 0 0 #3a3a3a, 0 6px 20px rgba(0,0,0,0.2);
    }
    :scope > .v2-grid[data-p-cta="orange"] .v2-btn-primary {
      background: #ff4f00;
      box-shadow: 0 3px 0 0 #c73c00, 0 6px 20px rgba(255,79,0,0.28);
    }
    :scope > .v2-grid .v2-btn-primary:hover { transform: translateY(-1px); }
    :scope > .v2-grid .v2-btn-primary:active { transform: translateY(2px); }
  }

  /* ── V3: Zapier Feature Grid ─────────────────────────── */
  @scope ([data-impeccable-variant="3"]) {
    :scope > .v3-grid .v3-feature-card {
      transition: box-shadow 0.18s ease, transform 0.18s ease;
    }
    :scope > .v3-grid .v3-feature-card:hover {
      box-shadow: 0 4px 20px rgba(255,79,0,calc(var(--p-orange,0.6)*0.15)), 0 1px 4px rgba(0,0,0,0.06);
      transform: translateY(-1px);
    }
    :scope > .v3-grid .v3-icon-circle {
      background-color: color-mix(in srgb, #ff4f00 calc(var(--p-orange,0.6)*12%), #f5f5f5);
      color: color-mix(in srgb, #ff4f00 calc(var(--p-orange,0.6)*100%), #888);
    }
    :scope > .v3-grid .v3-btn-primary {
      background: #ff4f00;
      box-shadow: 0 3px 0 0 #c73c00, 0 6px 20px rgba(255,79,0,calc(0.1 + var(--p-orange,0.6)*0.25));
      transition: transform 0.1s ease, box-shadow 0.1s ease;
    }
    :scope > .v3-grid .v3-btn-primary:hover { transform: translateY(-1px); }
    :scope > .v3-grid .v3-accent-line {
      background: color-mix(in srgb, #ff4f00 calc(var(--p-orange,0.6)*100%), transparent);
      height: 2px;
      opacity: calc(var(--p-orange,0.6)*0.9);
    }
    :scope > .v3-grid[data-p-density="compact"] .v3-feature-grid { gap: 10px; }
    :scope > .v3-grid[data-p-density="airy"] .v3-feature-grid { gap: 16px; }
    :scope > .v3-grid[data-p-density="compact"] .v3-left { gap: 20px; }
    :scope > .v3-grid[data-p-density="airy"] .v3-left { gap: 28px; }
  }
`}</style>

{/* ── Variant 1: Zapier Workflow ── */}
<div
  data-impeccable-variant="1"
  data-impeccable-params='[
    {"id":"accent","kind":"range","min":0,"max":1,"step":0.05,"default":0.7,"label":"Orange intensity"},
    {"id":"right-style","kind":"steps","default":"flow","label":"Right panel","options":[{"value":"flow","label":"Flow steps"},{"value":"metrics","label":"Metrics"}]}
  ]'
>
  <div className="v1-grid grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
    {/* Left */}
    <div className="flex flex-col gap-6 lg:col-span-7 lg:pr-4 text-center lg:text-left items-center lg:items-start">
      <h1 className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance" style={{ color: "#111" }}>
        Build Software That{" "}
        <span className="v1-accent">Powers Your Business</span>
      </h1>
      <p className="max-w-[52ch] text-[clamp(0.95rem,2vw,1.08rem)] leading-relaxed" style={{ color: "#555" }}>
        We engineer scalable web applications, SaaS platforms, and business
        automation that help companies streamline operations and grow with
        confidence.
      </p>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link
            href="/contact"
            className="v1-btn-primary inline-flex min-h-[48px] items-center justify-center rounded-full px-7 text-sm font-semibold"
          >
            Start Your Project
          </Link>
        </motion.div>
        <button
          onClick={scrollToServices}
          className="inline-flex min-h-[48px] items-center gap-1.5 rounded-full border px-6 text-sm font-medium transition-colors hover:border-[#ff4f00] hover:text-[#ff4f00]"
          style={{ borderColor: "#e0e0e0", color: "#333", background: "#fff" }}
        >
          See our services
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h9.793L10.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.293 8.5H2.5A.5.5 0 0 1 2 8z" />
          </svg>
        </button>
      </div>
      <p className="text-xs" style={{ color: "#888" }}>
        Trusted by founders, operators, and engineering teams to deliver production-ready software
      </p>
    </div>
    {/* Right — workflow steps */}
    <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center gap-0">
      {/* flow panel */}
      <div className="v1-workflow flex flex-col items-center w-full max-w-[300px]">
        {[
          { icon: "💡", label: "Your Idea", sub: "Share what you need to build" },
          { icon: "⚙️", label: "Gawa Builds It", sub: "We architect, design & develop" },
          { icon: "🚀", label: "Business Grows", sub: "Ship, scale, and succeed" },
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <div
              className="w-full flex items-start gap-3 rounded-xl p-4"
              style={{
                background: "#fff",
                border: "1px solid #ebebeb",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              <span className="text-xl shrink-0 mt-0.5">{step.icon}</span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold" style={{ color: "#111" }}>{step.label}</span>
                <span className="text-xs mt-0.5" style={{ color: "#777" }}>{step.sub}</span>
              </div>
              {i === 0 && (
                <span className="ml-auto shrink-0 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: "#fff3ee", color: "#ff4f00" }}>
                  Start here
                </span>
              )}
            </div>
            {i < 2 && (
              <div className="flex flex-col items-center py-1">
                <div className="v1-connector mx-auto" style={{ width: 2, height: 24 }} />
                <svg viewBox="0 0 8 6" fill="none" className="w-2" style={{ color: "rgba(255,79,0,0.4)" }}>
                  <path d="M4 6L0 0h8L4 6z" fill="currentColor" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* metrics panel (hidden by default, shown via param) */}
      <div className="v1-metrics grid grid-cols-3 gap-3 w-full max-w-[300px]">
        {[["10+","Projects"], ["100%","Custom code"], ["98/100","Core Web Vitals"]].map(([num, lbl]) => (
          <div key={lbl} className="flex flex-col gap-1 rounded-xl p-3 text-center" style={{ background: "#fff", border: "1px solid #ebebeb" }}>
            <span className="text-xl font-bold v1-accent">{num}</span>
            <span className="text-[10px] leading-tight" style={{ color: "#777" }}>{lbl}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* ── Variant 2: Zapier Orange Panel ── */}
<div
  data-impeccable-variant="2"
  style={{ display: "none" }}
  data-impeccable-params='[
    {"id":"panel","kind":"steps","default":"warm","label":"Panel tone","options":[{"value":"warm","label":"Warm"},{"value":"dark","label":"Dark"},{"value":"orange","label":"Orange"}]},
    {"id":"cta","kind":"steps","default":"orange","label":"CTA color","options":[{"value":"orange","label":"Orange"},{"value":"ink","label":"Ink"}]}
  ]'
>
  <div className="v2-grid grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
    {/* Left */}
    <div className="flex flex-col gap-6 lg:col-span-6 text-center lg:text-left items-center lg:items-start">
      <h1 className="text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance" style={{ color: "#111" }}>
        Build Software That{" "}
        <span style={{ color: "#ff4f00" }}>Powers Your Business</span>
      </h1>
      <p className="max-w-[48ch] text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed" style={{ color: "#555" }}>
        We engineer scalable web applications, SaaS platforms, and business
        automation that help companies streamline operations and grow with
        confidence.
      </p>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link
            href="/contact"
            className="v2-btn-primary inline-flex min-h-[48px] items-center justify-center rounded-full px-7 text-sm font-semibold text-white transition-transform"
          >
            Start Your Project
          </Link>
        </motion.div>
        <button
          onClick={scrollToServices}
          className="inline-flex min-h-[48px] items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#ff4f00]"
          style={{ color: "#444" }}
        >
          See our services →
        </button>
      </div>
      <p className="text-xs" style={{ color: "#999" }}>
        Trusted by founders, operators, and engineering teams to deliver production-ready software
      </p>
    </div>
    {/* Right — accent panel */}
    <div className="hidden lg:flex lg:col-span-6 items-center justify-center">
      <div
        className="v2-right-panel w-full max-w-[340px] rounded-2xl border p-8 flex flex-col items-center justify-center gap-5 relative overflow-hidden"
        style={{ minHeight: 300, transition: "background 0.3s, border-color 0.3s" }}
      >
        {/* Monogram */}
        <div
          className="v2-monogram font-heading select-none"
          style={{ fontSize: "clamp(5rem,10vw,8rem)", fontWeight: 400, lineHeight: 1, opacity: 0.15 }}
        >
          G
        </div>
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {["Custom Solutions", "Scalable Architecture", "Modern Tech Stack", "Long-Term Support"].map((tag) => (
              <span
                key={tag}
                className="v2-panel-tag inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium"
                style={{ transition: "background 0.3s, color 0.3s, border-color 0.3s" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="v2-panel-headline text-center text-lg font-semibold leading-snug" style={{ transition: "color 0.3s" }}>
            Everything your business needs to grow
          </p>
          <p className="v2-panel-sub text-center text-xs leading-relaxed" style={{ transition: "color 0.3s" }}>
            Production-ready software built to scale with your ambition.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ── Variant 3: Zapier Feature Grid ── */}
<div
  data-impeccable-variant="3"
  style={{ display: "none" }}
  data-impeccable-params='[
    {"id":"orange","kind":"range","min":0.2,"max":1,"step":0.05,"default":0.6,"label":"Orange amount"},
    {"id":"density","kind":"steps","default":"airy","label":"Density","options":[{"value":"airy","label":"Airy"},{"value":"compact","label":"Compact"}]}
  ]'
>
  <div className="v3-grid grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
    {/* Left */}
    <div className="v3-left flex flex-col gap-7 lg:col-span-7 text-center lg:text-left items-center lg:items-start">
      {/* Orange accent line */}
      <div className="v3-accent-line w-10 hidden lg:block" style={{ borderRadius: 2 }} />
      <h1 className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance" style={{ color: "#111" }}>
        Build Software That{" "}
        <span style={{ color: "#ff4f00" }}>Powers Your Business</span>
      </h1>
      <p className="max-w-[50ch] text-[clamp(0.95rem,2vw,1.08rem)] leading-relaxed" style={{ color: "#555" }}>
        We engineer scalable web applications, SaaS platforms, and business
        automation that help companies streamline operations and grow with
        confidence.
      </p>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link
            href="/contact"
            className="v3-btn-primary inline-flex min-h-[48px] items-center justify-center rounded-full px-7 text-sm font-semibold text-white"
          >
            Start Your Project
          </Link>
        </motion.div>
        <button
          onClick={scrollToServices}
          className="inline-flex min-h-[48px] items-center gap-1.5 rounded-full border px-6 text-sm font-medium transition-colors hover:border-[#ff4f00] hover:text-[#ff4f00]"
          style={{ borderColor: "#e0e0e0", color: "#333", background: "#fff" }}
        >
          See our services
        </button>
      </div>
      <p className="text-xs" style={{ color: "#888" }}>
        Trusted by founders, operators, and engineering teams to deliver production-ready software
      </p>
    </div>
    {/* Right — feature card grid */}
    <div className="hidden lg:block lg:col-span-5">
      <div className="v3-feature-grid grid grid-cols-2" style={{ gap: 16 }}>
        {[
          { icon: "⚡", title: "Custom Solutions", desc: "Tailored precisely to your business processes and user workflows." },
          { icon: "📐", title: "Scalable Architecture", desc: "Built to handle growth from day one, not retrofitted later." },
          { icon: "🛠", title: "Modern Tech Stack", desc: "React, Next.js, TypeScript, Node.js — production-grade tools." },
          { icon: "🤝", title: "Long-Term Support", desc: "We're your development partner, not just a one-time vendor." },
        ].map((feat) => (
          <div
            key={feat.title}
            className="v3-feature-card flex flex-col gap-2 rounded-xl p-4"
            style={{
              background: "#fff",
              border: "1px solid #ebebeb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <div className="v3-icon-circle flex h-8 w-8 items-center justify-center rounded-full text-sm" style={{ fontFamily: "system-ui" }}>
              {feat.icon}
            </div>
            <p className="text-sm font-semibold leading-tight" style={{ color: "#111" }}>{feat.title}</p>
            <p className="text-xs leading-relaxed" style={{ color: "#777" }}>{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
            {/* impeccable-variants-end be886d3a */}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

// ── Hero Outcome Panel ────────────────────────────────────────────────────

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

function HeroOutcomePanel() {
  return (
    <div className="w-full max-w-[420px] font-sans">
      <motion.div
        className="overflow-hidden rounded-card border border-border-subtle bg-bg-surface shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex border-b border-border-subtle">
          <div className="flex-1 border-r border-border-subtle bg-bg-muted px-4 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Before</span>
          </div>
          <div className="flex-1 px-4 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">After Gawa</span>
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
