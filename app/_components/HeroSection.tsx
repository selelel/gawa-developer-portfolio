"use client";

import Link from "next/link";
import { motion } from "motion/react";

const TRUST_ITEMS = [
  "Custom Solutions",
  "Scalable Architecture",
  "Modern Tech Stack",
  "Long-Term Support",
];

const STATS = [
  { value: "10+", label: "Projects Delivered" },
  { value: "100%", label: "Custom Dev" },
  { value: "98/100", label: "Core Web Vitals" },
];

const CODE_LINES = [
  { indent: 0, token: "const", name: " solution", op: " =", rest: " await" },
  { indent: 1, token: "gawa", name: ".build", op: "({", rest: "" },
  { indent: 2, token: "idea:", name: " yourVision", op: ",", rest: "" },
  { indent: 2, token: "stack:", name: " 'modern'", op: ",", rest: "" },
  { indent: 2, token: "quality:", name: " 'premium'", op: ",", rest: "" },
  { indent: 1, token: "}", name: ")", op: ";", rest: "" },
];

// High-end spring curves mirroring modern layout platforms
const transitionSpring = { type: "spring", stiffness: 90, damping: 20 } as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitionSpring },
};

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label='Hero'
      className='relative isolate min-h-[95svh] flex items-center overflow-hidden bg-bg-canvas px-4 sm:px-6 lg:px-8'
    >
      {/* Premium Futuristic Canvas Framework Backdrop */}
      <BackgroundDecor />

      <div className='relative z-10 mx-auto w-full max-w-7xl pt-24 pb-16 lg:pt-32'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8'>
          {/* ── Left Column: Content & Conversion Value Structure ── */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='flex flex-col gap-6 lg:col-span-7 lg:pr-4 text-center lg:text-left items-center lg:items-start'
          >
            {/* Inline Glow Badge */}
            <motion.div variants={itemVariants}>
              <span className='inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-brand-primary backdrop-blur-sm'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-brand-primary'></span>
                </span>
                Production-Ready Code
              </span>
            </motion.div>

            {/* Typography Header */}
            <motion.h1
              variants={itemVariants}
              className='text-[clamp(2.25rem,6vw,4rem)] font-black leading-[1.05] tracking-tighter text-brand-dark'
            >
              Build Software That <br />
              <span className='relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400'>
                Powers Your Business
              </span>
            </motion.h1>

            {/* Subtext Paragraph */}
            <motion.p
              variants={itemVariants}
              className='max-w-xl text-[clamp(1rem,2.5vw,1.125rem)] leading-relaxed text-text-secondary'
            >
              We engineer scalable custom web applications, SaaS ecosystems, and
              robust automation layers that help businesses optimize performance
              and step into the digital future.
            </motion.p>

            {/* Trust List with Clean Micro-Dividers */}
            <motion.ul
              variants={itemVariants}
              className='flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 border-y border-border-subtle/60 py-3 w-full max-w-xl'
              aria-label='Core Agency Vectors'
            >
              {TRUST_ITEMS.map((item) => (
                <li
                  key={item}
                  className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary'
                >
                  <span
                    className='h-1.5 w-1.5 rounded-full bg-brand-primary'
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Interaction Conversion Buttons */}
            <motion.div
              variants={itemVariants}
              className='flex flex-wrap justify-center lg:justify-start gap-4 w-full'
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href='/contact'
                  className='inline-flex min-h-12 items-center justify-center rounded-button bg-brand-primary px-8 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition-colors duration-fast hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary'
                >
                  Start Your Project
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={scrollToServices}
                  className='inline-flex min-h-12 items-center justify-center rounded-button border border-border-subtle bg-bg-canvas/50 backdrop-blur-sm px-8 text-sm font-bold text-brand-dark transition-colors duration-fast hover:bg-bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark'
                >
                  Explore Services
                </button>
              </motion.div>
            </motion.div>

            {/* Grid Metrics Display Panel */}
            <motion.div
              variants={itemVariants}
              className='mt-4 grid grid-cols-3 gap-3 w-full max-w-xl'
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className='flex flex-col rounded-card border border-border-subtle bg-bg-canvas/40 p-4 shadow-card backdrop-blur-sm'
                >
                  <span className='text-xl sm:text-2xl font-black tracking-tight text-brand-dark'>
                    {stat.value}
                  </span>
                  <span className='mt-1 text-[11px] font-medium uppercase tracking-wider text-text-muted leading-none'>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column: Interactive Integrated IDE Simulation Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...transitionSpring, delay: 0.4 }}
            className='relative lg:col-span-5 hidden lg:flex items-center justify-center'
            aria-hidden
          >
            <VisualPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Background Architectural Components ───────────────────────────────── */
function BackgroundDecor() {
  return (
    <div className='absolute inset-0 pointer-events-none select-none overflow-hidden'>
      {/* Futuristic Mesh Neumorphic Glow Matrices */}
      <div className='absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-brand-primary/10 to-blue-500/5 blur-[120px]' />
      <div className='absolute -left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-brand-primary/5 to-cyan-500/5 blur-[100px]' />

      {/* Performance Grid Pattern Accent matching image_7d923d.jpg */}
      <div
        className='absolute inset-0 opacity-[0.015]'
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-brand-dark) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-brand-dark) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

/* ─── Interactive Visual Code Panel ─────────────────────────────────────── */
function VisualPanel() {
  return (
    <div className='relative w-full max-w-[440px] group'>
      {/* Outer ambient blur shadow */}
      <div className='absolute -inset-1.5 rounded-card bg-gradient-to-r from-brand-primary/20 to-blue-500/20 opacity-40 blur-xl group-hover:opacity-60 transition duration-1000' />

      {/* Core Terminal Frame Container */}
      <div className='relative flex flex-col overflow-hidden rounded-card border border-white/10 bg-brand-dark shadow-2xl backdrop-blur-md'>
        {/* IDE Top Bar Window Trim */}
        <div className='flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-3'>
          <div className='flex items-center gap-1.5'>
            <span className='h-2.5 w-2.5 rounded-full bg-rose-500/80' />
            <span className='h-2.5 w-2.5 rounded-full bg-amber-500/80' />
            <span className='h-2.5 w-2.5 rounded-full bg-emerald-500/80' />
            <span className='ml-2 font-mono text-[11px] font-medium text-white/30 tracking-wider'>
              gawa-manifest.ts
            </span>
          </div>
          <span className='font-mono text-[10px] text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded-full font-bold'>
            v2.0
          </span>
        </div>

        {/* Dynamic Code Space */}
        <div className='flex-1 p-6 font-mono text-xs sm:text-sm leading-relaxed tracking-wide text-white/80'>
          {CODE_LINES.map((line, i) => (
            <div
              key={i}
              style={{ paddingLeft: `${line.indent * 1.25}rem` }}
              className='flex items-center whitespace-pre'
            >
              <span className='text-blue-400 font-medium'>{line.token}</span>
              <span className='text-sky-200'>{line.name}</span>
              <span className='text-brand-primary font-bold'>{line.op}</span>
              <span className='text-emerald-400 font-light'>{line.rest}</span>
            </div>
          ))}

          {/* Sharp CSS-Driven Blinking Caret */}
          <div className='mt-1.5 h-4 w-1.5 animate-pulse bg-brand-primary' />
        </div>

        {/* Dynamic Output Status Drawer */}
        <div className='flex items-center justify-between border-t border-white/5 bg-white/[0.01] px-4 py-2.5 font-mono text-[10px] tracking-wider text-white/40'>
          <span className='flex items-center gap-1.5'>
            <span className='h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping' />
            Engine Ready
          </span>
          <span className='text-emerald-400/90 font-medium'>
            Production Build Successful
          </span>
        </div>
      </div>

      {/* Overlapping Floating Status Badges */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={transitionSpring}
        className='absolute -right-6 -top-6 flex items-center gap-3 rounded-card border border-border-subtle bg-white/90 p-3 shadow-card backdrop-blur-md'
      >
        <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-sm'>
          ⚡
        </div>
        <div>
          <p className='text-xs font-black text-brand-dark leading-none'>
            Next.js 16
          </p>
          <p className='text-[10px] font-semibold text-text-muted mt-1'>
            App Router Edge
          </p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ y: 4 }}
        transition={transitionSpring}
        className='absolute -bottom-6 -left-6 flex items-center gap-3 rounded-card border border-border-subtle bg-white/90 p-3 shadow-card backdrop-blur-md'
      >
        <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm'>
          🚀
        </div>
        <div>
          <p className='text-[10px] font-bold text-text-muted uppercase tracking-wider leading-none'>
            Performance
          </p>
          <p className='text-sm font-black text-brand-primary mt-1'>
            100% Mobile Score
          </p>
        </div>
      </motion.div>
    </div>
  );
}
