"use client";

import { useId } from "react";
import Link from "next/link";
import { motion, MotionConfig, useScroll, useTransform } from "motion/react";

// ── Data ──────────────────────────────────────────────────────────────────

const HEADLINE = [
  { text: "Build Software That", italic: false },
  { text: "Powers Your Business", italic: true },
] as const;

const DEALS = [
  { company: "Redwood Partners", value: "$42K", stage: "Proposal",    color: "#3567a0", initial: "R" },
  { company: "TerraVault Inc.",   value: "$18K", stage: "Negotiation", color: "#d97706", initial: "T" },
  { company: "Caledon Health",    value: "$67K", stage: "Closed Won",  color: "#15803d", initial: "C" },
] as const;

// ── Section ───────────────────────────────────────────────────────────────

export default function HeroSection() {
  const scrollToServices = () =>
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });

  const { scrollY } = useScroll();
  const browserCardY = useTransform(scrollY, [0, 500], [0, -55]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-label="Hero"
        className="relative isolate min-h-screen flex items-center overflow-hidden bg-bg-canvas px-5 sm:px-8 lg:px-12"
        style={{ minHeight: "100svh" }}
      >
        <HeroBackground />

        <div className="relative z-10 mx-auto w-full max-w-7xl pt-28 pb-20 lg:pt-32 lg:pb-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">

            {/* ── Left: copy ── */}
            <div className="flex flex-col items-center gap-7 text-center lg:col-span-6 lg:items-start lg:text-left">

              <h1 className="font-heading text-[clamp(2.5rem,5.5vw,4.75rem)] font-normal leading-[1.06] tracking-[-0.01em] text-balance">
                {HEADLINE.map((line, i) => (
                  <span key={i} className="block overflow-hidden pb-[0.06em]">
                    <motion.span
                      className={`block ${line.italic ? "text-accent italic" : "text-brand-dark"}`}
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{ delay: 0.1 + i * 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
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
                transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
              >
                We engineer scalable web applications, SaaS platforms, and
                business automation that help companies streamline operations
                and grow with confidence.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72, duration: 0.45, ease: "easeOut" }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-button bg-accent px-8 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  >
                    Start Your Project
                  </Link>
                </motion.div>

                <motion.button
                  onClick={scrollToServices}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-12 items-center justify-center rounded-button border border-border-subtle px-7 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent hover:bg-bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  View Services
                </motion.button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-2 lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95, duration: 0.5 }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <p className="text-xs text-text-muted">
                  Trusted by founders, operators, and engineering teams to deliver
                  production-ready software
                </p>
              </motion.div>
            </div>

            {/* ── Right: product preview ── */}
            <motion.div
              className="hidden items-center justify-center lg:col-span-6 lg:flex"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ y: browserCardY }}
              transition={{ delay: 0.38, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden
            >
              <HeroBrowserCard />
            </motion.div>

          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

// ── Browser card ──────────────────────────────────────────────────────────

function HeroBrowserCard() {
  return (
    <motion.div
      className="w-full max-w-122.5 select-none font-sans"
      animate={{ y: [0, -8, 0] }}
      whileHover={{ scale: 1.015, transition: { duration: 0.35, ease: "easeOut" } }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      style={{ willChange: "transform" }}
    >
      <div className="overflow-hidden rounded-card ring-1 ring-black/[0.07] shadow-[0_20px_72px_rgba(0,0,0,0.09),0_4px_16px_rgba(0,0,0,0.05)]">

        {/* Chrome bar */}
        <div className="flex items-center gap-3 bg-bg-muted px-4 py-2.5 border-b border-border-subtle">
          <div className="flex gap-1.5 shrink-0">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-1.5 rounded-md bg-bg-surface px-3 py-1 ring-1 ring-border-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-semantic-success shrink-0 opacity-80" />
              <span className="text-[10px] text-text-muted leading-none">app.stratos.io</span>
            </div>
          </div>
          <div className="w-10 shrink-0" />
        </div>

        {/* App header */}
        <div className="flex items-center gap-1.5 bg-brand-dark px-4 py-2.5">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-accent text-[9px] font-black text-white shrink-0">S</div>
          <span className="text-[11px] font-bold text-white mr-2">Stratos</span>
          <div className="h-3 w-px bg-white/15 shrink-0" />
          {(["Dashboard", "Pipeline", "Reports", "Settings"] as const).map((tab, i) => (
            <span key={tab} className={`px-1.5 text-[10px] ${i === 0 ? "text-white font-semibold" : "text-white/40"}`}>
              {tab}
            </span>
          ))}
          <div className="ml-auto h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-[9px] font-semibold text-white/70 shrink-0">JR</div>
        </div>

        {/* Dashboard body */}
        <div className="bg-bg-canvas px-4 py-3.5 space-y-2.5">

          {/* Metric tiles — stagger in */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Monthly Revenue", value: "$124.8K", change: "+18%" },
              { label: "Active Clients",   value: "47",       change: "+6 new" },
              { label: "Avg. Close Time",  value: "24 days",  change: "↓ 3 days" },
            ].map(({ label, value, change }, i) => (
              <motion.div
                key={label}
                className="rounded-lg bg-bg-surface p-2.5 ring-1 ring-black/5"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.09, duration: 0.35, ease: "easeOut" }}
              >
                <p className="text-[8.5px] text-text-muted leading-snug">{label}</p>
                <p className="text-[13px] font-bold text-brand-dark leading-none mt-1">{value}</p>
                <span className="text-[8px] font-semibold mt-1 inline-block" style={{ color: "#15803d" }}>
                  {change}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Revenue chart — fades in, line draws */}
          <motion.div
            className="rounded-lg bg-bg-surface p-3 ring-1 ring-black/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.82, duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-semibold text-text-secondary">Revenue · Last 6 Months</span>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-[8px] text-text-muted">Jan – Jun 2025</span>
              </div>
            </div>
            <DashboardChart />
          </motion.div>

          {/* Recent deals — slide in from left */}
          <div className="rounded-lg bg-bg-surface ring-1 ring-black/5 overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle">
              <span className="text-[9px] font-semibold text-text-secondary">Recent Deals</span>
              <span className="text-[8px] font-medium text-accent cursor-default">View pipeline →</span>
            </div>
            {DEALS.map(({ company, value, stage, color, initial }, i) => (
              <motion.div
                key={company}
                className="flex items-center gap-2 px-3 py-2 border-b border-[#f2f1f0] last:border-b-0"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.05 + i * 0.09, duration: 0.3, ease: "easeOut" }}
              >
                <div className="h-5 w-5 rounded-md bg-bg-muted flex items-center justify-center text-[8px] font-bold text-text-muted shrink-0">
                  {initial}
                </div>
                <span className="flex-1 text-[10px] font-medium text-brand-dark truncate min-w-0">{company}</span>
                <span className="text-[10px] font-bold text-brand-dark shrink-0 mr-1">{value}</span>
                <div
                  className="flex items-center gap-1 rounded-full px-1.5 py-0.5 shrink-0"
                  style={{ background: `${color}1a` }}
                >
                  <span className="h-1 w-1 rounded-full shrink-0" style={{ background: color }} />
                  <span className="text-[8px] font-semibold leading-none" style={{ color }}>{stage}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// ── Dashboard chart ────────────────────────────────────────────────────────

function DashboardChart() {
  const gradId = useId();
  const values = [58, 72, 65, 89, 107, 124.8];
  const max = 140;
  const W = 340;
  const H = 52;
  const pts = values.map((v, i) => ({
    x: (i / (values.length - 1)) * W,
    y: H - (v / max) * H,
  }));
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;
  const lastPt = pts[pts.length - 1];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 52 }} preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--color-accent)", stopOpacity: 0.14 }} />
          <stop offset="100%" style={{ stopColor: "var(--color-accent)", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      {/* Area fill fades in when chart appears */}
      <motion.path
        d={area}
        fill={`url(#${gradId})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.92, duration: 0.5 }}
      />
      {/* Line draws left → right */}
      <motion.path
        d={line}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: "var(--color-accent)" }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.92, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Terminal dot scales in when line reaches it */}
      <motion.circle
        cx={lastPt.x.toFixed(1)}
        cy={lastPt.y.toFixed(1)}
        r="2.5"
        style={{ transformBox: "fill-box", transformOrigin: "center", fill: "var(--color-accent)" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.62, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

// ── Background ─────────────────────────────────────────────────────────────

function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Static atmospheric field — all 5 gradient tokens */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 68% 62% at 90% 50%, color-mix(in srgb, var(--color-gradient-mint) 48%, transparent) 0%, transparent 100%)",
            "radial-gradient(ellipse 52% 54% at 4% 14%, color-mix(in srgb, var(--color-gradient-lavender) 36%, transparent) 0%, transparent 100%)",
            "radial-gradient(ellipse 40% 44% at 68% 92%, color-mix(in srgb, var(--color-gradient-peach) 28%, transparent) 0%, transparent 100%)",
            "radial-gradient(ellipse 34% 46% at 48% 4%, color-mix(in srgb, var(--color-gradient-sky) 24%, transparent) 0%, transparent 100%)",
            "radial-gradient(ellipse 28% 36% at 20% 76%, color-mix(in srgb, var(--color-gradient-rose) 20%, transparent) 0%, transparent 100%)",
          ].join(", "),
        }}
      />

      {/* Animated drift orbs */}
      <motion.div
        className="absolute rounded-full blur-[60px]"
        style={{
          width: 300,
          height: 240,
          right: "-6%",
          top: "18%",
          background: "color-mix(in srgb, var(--color-gradient-mint) 36%, transparent)",
          willChange: "transform",
        }}
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-[70px]"
        style={{
          width: 220,
          height: 220,
          left: "-8%",
          top: "-8%",
          background: "color-mix(in srgb, var(--color-gradient-lavender) 30%, transparent)",
          willChange: "transform",
        }}
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(circle, #0c0a09 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Left vignette — keeps headline legible against colored orbs */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 48% 88% at 8% 50%, rgba(245,245,245,0.58) 0%, transparent 68%)",
        }}
      />
    </div>
  );
}
