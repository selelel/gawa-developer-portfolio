"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ── Icons ──────────────────────────────────────────────────────────────────

const svgConfig = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
};

const IconSearch = () => (
  <svg {...svgConfig}>
    <circle cx='10.5' cy='10.5' r='7' />
    <path d='M21 21l-4.35-4.35' />
  </svg>
);
const IconMap = () => (
  <svg {...svgConfig}>
    <polygon points='3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21' />
    <path d='M9 3v15M15 6v15' />
  </svg>
);
const IconPenTool = () => (
  <svg {...svgConfig}>
    <path d='M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586' />
    <circle cx='11' cy='11' r='2' />
  </svg>
);
const IconCode = () => (
  <svg {...svgConfig}>
    <path d='M7 8L3 12l4 4M17 8l4 4-4 4M14 4l-4 16' />
  </svg>
);
const IconCheckCircle = () => (
  <svg {...svgConfig}>
    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
    <polyline points='22 4 12 14.01 9 11.01' />
  </svg>
);
const IconRocket = () => (
  <svg {...svgConfig}>
    <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' />
  </svg>
);
const IconHeadset = () => (
  <svg {...svgConfig}>
    <path d='M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' />
  </svg>
);

// ── Data Types ─────────────────────────────────────────────────────────────

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: () => React.JSX.Element;
  duration: string;
  metric: string;
  metricLabel: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, goals, and users through structured workshops. This phase surfaces constraints, defines success criteria, and ensures we solve the right problem — before writing a single line of code.",
    Icon: IconSearch,
    duration: "1–2 weeks",
    metric: "0% → 15%",
    metricLabel: "Scope Alignment",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "A detailed technical roadmap is created — architecture decisions, sprint milestones, tech stack choices, and resource allocation. You'll know exactly what's being built and when.",
    Icon: IconMap,
    duration: "1 week",
    metric: "15% → 30%",
    metricLabel: "Blueprint Fixed",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Wireframes, UI systems, and interactive prototypes are crafted and reviewed with your team. Nothing moves to development until the design is validated — saving costly revisions later.",
    Icon: IconPenTool,
    duration: "2–3 weeks",
    metric: "30% → 45%",
    metricLabel: "UI Specs Locked",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Engineers build in focused sprints with daily standups, continuous integration, and code reviews. You receive regular demos so progress is always visible and aligned with your expectations.",
    Icon: IconCode,
    duration: "Sprints",
    metric: "45% → 75%",
    metricLabel: "Active Compilation",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Automated and manual QA across browsers, devices, and edge cases. We test for performance, accessibility, and security before anything reaches production — so launch day is clean.",
    Icon: IconCheckCircle,
    duration: "1–2 weeks",
    metric: "75% → 90%",
    metricLabel: "QA Pass Index",
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "Your product goes live on scalable infrastructure with zero-downtime deployments, monitoring dashboards, and rollback capabilities. Launch is controlled, confident, and rehearsed.",
    Icon: IconRocket,
    duration: "1–3 days",
    metric: "90% → 100%",
    metricLabel: "Production Push",
  },
  {
    number: "07",
    title: "Continuous Support",
    description:
      "We don't disappear after launch. Ongoing monitoring, security patches, performance tuning, and iterative feature development keep your software improving as your business grows.",
    Icon: IconHeadset,
    duration: "Ongoing",
    metric: "24/7",
    metricLabel: "Telemetry Feed",
  },
];

// ── Main Section Component ─────────────────────────────────────────────────

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process"
      aria-label='Development Process'
      className='relative overflow-hidden bg-brand-dark py-28 sm:py-36 selection:bg-brand-primary/30'
    >
      <BackgroundMatrixDecor />

      <div className='relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20'>
          {/* Left column: sticky context panel */}
          <div className='lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
              <span className='inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/2 px-3.5 py-1 text-xs font-medium text-brand-primary'>
                <span className='h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse' />
                Development process
              </span>

              <h2 className='text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-[1.02] tracking-tight text-white'>
                Engineering{" "}
                <span className='text-brand-primary'>Your Platform</span>
              </h2>

              <p className='max-w-md text-sm leading-relaxed text-white/40 font-medium'>
                A highly continuous, predictable pipeline meticulously optimized
                to transition complex business logic into custom production
                builds.
              </p>
            </div>

            {/* Active step detail panel */}
            <div className='relative overflow-hidden rounded-xl border border-white/6 bg-linear-to-b from-white/3 to-transparent p-6 backdrop-blur-xl shadow-2xl'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className='flex items-center gap-4 border-b border-white/5 pb-5 mb-5'>
                    <div className='h-12 w-12 rounded-xl flex items-center justify-center bg-brand-primary/10 text-brand-primary shadow-inner border border-brand-primary/20'>
                      {React.createElement(STEPS[activeStep].Icon)}
                    </div>
                    <div>
                      <p className='text-[10px] font-mono tracking-wider text-brand-primary font-bold leading-none'>
                        Active phase
                      </p>
                      <h4 className='text-lg font-black text-white mt-1.5 tracking-tight'>
                        {STEPS[activeStep].title}
                      </h4>
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-3 mb-4'>
                    <div className='rounded-xl bg-white/2 border border-white/4 p-3'>
                      <span className='block text-[9px] font-bold text-white/30 uppercase tracking-widest'>
                        Pipeline Anchor
                      </span>
                      <span className='mt-1 block font-mono text-xs font-bold text-white'>
                        SYSTEM_NODE_0{activeStep + 1}
                      </span>
                    </div>
                    <div className='rounded-xl bg-white/2 border border-white/4 p-3'>
                      <span className='block text-[9px] font-bold text-white/30 uppercase tracking-widest'>
                        Time Budget
                      </span>
                      <span className='mt-1 block font-mono text-xs font-bold text-white/80'>
                        {STEPS[activeStep].duration}
                      </span>
                    </div>
                  </div>

                  {/* Progress metric */}
                  <div className='rounded-xl bg-white/1 border border-white/3 p-4'>
                    <div className='flex justify-between items-center mb-2 text-[10px] font-mono tracking-wide text-white/40'>
                      <span>{STEPS[activeStep].metricLabel}</span>
                      <span className='text-brand-primary font-bold'>
                        {STEPS[activeStep].metric}
                      </span>
                    </div>
                    <div className='h-1 w-full bg-white/5 rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${((activeStep + 1) / STEPS.length) * 100}%`,
                        }}
                        className='h-full bg-linear-to-r from-brand-primary to-amber-400'
                        transition={{ type: "spring", stiffness: 80 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right column: interactive step list */}
          <div className='relative lg:col-span-7'>
            <div className='absolute left-6 top-6 bottom-6 w-px bg-linear-to-b from-brand-primary/30 via-white/6 to-transparent' />

            <div className='space-y-3.5'>
              {STEPS.map((step, i) => {
                const isActive = activeStep === i;
                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setActiveStep(i)}
                    className='group relative flex gap-6 pl-14 pt-0.5 pb-0.5 transition-all duration-normal cursor-default'
                  >
                    {/* Step node */}
                    <div className='absolute left-0 top-3.5 flex h-12 w-12 items-center justify-center'>
                      <div
                        className={`absolute font-mono text-[10px] font-bold tracking-tighter transition-colors duration-normal ${isActive ? "text-brand-primary" : "text-white/20 group-hover:text-white/40"}`}
                      >
                        {step.number}
                      </div>
                      <div
                        className={`h-2 w-2 rounded-full ring-4 ring-brand-dark transition-all duration-normal ${isActive ? "bg-brand-primary scale-110" : "bg-white/10 group-hover:bg-white/30"}`}
                      />
                      <span
                        className={`absolute inset-1.5 border border-white/8 rounded-full transition-all duration-normal ${isActive ? "opacity-100 scale-105 border-brand-primary/30 animate-pulse" : "opacity-0 group-hover:opacity-100"}`}
                      />
                    </div>

                    {/* Step card */}
                    <div
                      className={`flex-1 rounded-xl border p-5 transition-all duration-normal ${isActive ? "bg-white/3 border-white/8 shadow-lg" : "bg-white/1 border-white/4 group-hover:bg-white/2 group-hover:border-white/6"}`}
                    >
                      <div className='flex items-center justify-between gap-4'>
                        <h3
                          className={`text-sm font-black tracking-wide transition-colors ${isActive ? "text-white" : "text-white/70 group-hover:text-white/90"}`}
                        >
                          {step.title}
                        </h3>
                        <span
                          className={`font-mono text-[9px] tracking-wider uppercase border px-2.5 py-0.5 rounded-md transition-colors ${isActive ? "text-brand-primary bg-brand-primary/5 border-brand-primary/20" : "text-white/30 bg-white/1 border-white/4"}`}
                        >
                          {step.duration}
                        </span>
                      </div>

                      <p
                        className={`mt-3 text-xs sm:text-sm leading-relaxed transition-colors font-medium ${isActive ? "text-white/60" : "text-white/40 group-hover:text-white/50"}`}
                      >
                        {step.description}
                      </p>

                      <div
                        className={`mt-4 flex items-center gap-1.5 transition-opacity duration-normal ${isActive ? "opacity-100" : "opacity-0"}`}
                      >
                        <span className='h-0.5 w-6 rounded-full bg-brand-primary/50' />
                        <span className='h-0.5 w-0.5 rounded-full bg-brand-primary/50' />
                        <span className='h-0.5 w-0.5 rounded-full bg-brand-primary/50' />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Background ──────────────────────────────────────────────────────────── */
function BackgroundMatrixDecor() {
  return (
    <div className='absolute inset-0 pointer-events-none select-none overflow-hidden'>
      <div
        className='absolute inset-0 opacity-[0.06]'
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-brand-primary) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className='absolute inset-x-0 top-1/4 h-px bg-linear-to-r from-transparent via-white/3 to-transparent' />
      <div className='absolute inset-x-0 bottom-1/3 h-px bg-linear-to-r from-transparent via-white/2 to-transparent' />
      <div
        className='absolute left-[-10%] top-1/4 rounded-full blur-[140px]'
        style={{
          width: "650px",
          height: "650px",
          background:
            "radial-gradient(circle, rgba(255,79,0,0.04) 0%, transparent 70%)",
        }}
      />
      <div className='absolute inset-x-0 top-0 h-32 bg-linear-to-b from-brand-dark to-transparent' />
      <div className='absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-dark to-transparent' />
    </div>
  );
}
