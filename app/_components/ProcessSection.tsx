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

// ── Data ──────────────────────────────────────────────────────────────────

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: () => React.JSX.Element;
  duration: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, goals, and users through structured workshops. This phase surfaces constraints, defines success criteria, and ensures we solve the right problem — before writing a single line of code.",
    Icon: IconSearch,
    duration: "1–2 weeks",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "A detailed technical roadmap is created — architecture decisions, sprint milestones, tech stack choices, and resource allocation. You'll know exactly what's being built and when.",
    Icon: IconMap,
    duration: "1 week",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Wireframes, UI systems, and interactive prototypes are crafted and reviewed with your team. Nothing moves to development until the design is validated — saving costly revisions later.",
    Icon: IconPenTool,
    duration: "2–3 weeks",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Engineers build in focused sprints with daily standups, continuous integration, and code reviews. You receive regular demos so progress is always visible and aligned with your expectations.",
    Icon: IconCode,
    duration: "Ongoing sprints",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Automated and manual QA across browsers, devices, and edge cases. We test for performance, accessibility, and security before anything reaches production — so launch day is clean.",
    Icon: IconCheckCircle,
    duration: "1–2 weeks",
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "Your product goes live on scalable infrastructure with zero-downtime deployments, monitoring dashboards, and rollback capabilities. Launch is controlled, confident, and rehearsed.",
    Icon: IconRocket,
    duration: "1–3 days",
  },
  {
    number: "07",
    title: "Continuous Support",
    description:
      "We don't disappear after launch. Ongoing monitoring, security patches, performance tuning, and iterative feature development keep your software improving as your business grows.",
    Icon: IconHeadset,
    duration: "Ongoing",
  },
];

// ── Section ────────────────────────────────────────────────────────────────

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process"
      aria-label='Development Process'
      className='relative overflow-hidden bg-brand-dark py-28 sm:py-36'
    >
      <BackgroundDecor />

      <div className='relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20'>

          {/* Left column: sticky context panel */}
          <div className='lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
              <h2 className='font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.06] text-white text-balance'>
                Engineering{" "}
                <em>your platform</em>
              </h2>

              <p className='max-w-md text-sm leading-relaxed text-white/60'>
                A predictable, transparent pipeline that takes your idea from
                brief to production without surprises.
              </p>
            </div>

            {/* Active step detail panel */}
            <div className='overflow-hidden rounded-xl border border-white/8 bg-white/3 p-6'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* Step icon + identity */}
                  <div className='flex items-start gap-4 border-b border-white/8 pb-5 mb-5'>
                    <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/12 text-white/60'>
                      {React.createElement(STEPS[activeStep].Icon)}
                    </div>
                    <div>
                      <p className='text-xs text-white/40 mb-1'>
                        Step {STEPS[activeStep].number} · {STEPS[activeStep].duration}
                      </p>
                      <h4 className='text-lg font-semibold text-white'>
                        {STEPS[activeStep].title}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-sm leading-relaxed text-white/60'>
                    {STEPS[activeStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right column: interactive step list */}
          <div className='relative lg:col-span-7'>
            <div className='absolute left-6 top-6 bottom-6 w-px bg-linear-to-b from-white/15 via-white/6 to-transparent' />

            <div
              className='space-y-2'
              role='listbox'
              aria-label='Process steps'
            >
              {STEPS.map((step, i) => {
                const isActive = activeStep === i;
                return (
                  <div
                    key={step.number}
                    role='option'
                    aria-selected={isActive}
                    tabIndex={0}
                    onMouseEnter={() => setActiveStep(i)}
                    onFocus={() => setActiveStep(i)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") setActiveStep(Math.min(i + 1, STEPS.length - 1));
                      if (e.key === "ArrowUp") setActiveStep(Math.max(i - 1, 0));
                    }}
                    className='group relative flex gap-6 pl-14 pt-0.5 pb-0.5 cursor-default outline-none'
                  >
                    {/* Step node */}
                    <div className='absolute left-0 top-3.5 flex h-12 w-12 items-center justify-center'>
                      <span
                        className={`absolute text-xs font-semibold transition-colors duration-300 ${
                          isActive ? "text-white/70" : "text-white/25 group-hover:text-white/40"
                        }`}
                      >
                        {step.number}
                      </span>
                      <div
                        className={`h-2 w-2 rounded-full ring-4 ring-brand-dark transition-all duration-300 ${
                          isActive ? "bg-white scale-110" : "bg-white/15 group-hover:bg-white/30"
                        }`}
                      />
                    </div>

                    {/* Step card */}
                    <div
                      className={`flex-1 rounded-xl border p-5 transition-all duration-300 ${
                        isActive
                          ? "bg-white/4 border-white/10"
                          : "bg-white/1 border-white/5 group-hover:bg-white/3 group-hover:border-white/8"
                      }`}
                    >
                      <div className='flex items-center justify-between gap-4'>
                        <h3
                          className={`text-sm font-semibold transition-colors duration-300 ${
                            isActive ? "text-white" : "text-white/65 group-hover:text-white/85"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <span
                          className={`text-xs transition-colors duration-300 ${
                            isActive ? "text-white/55" : "text-white/30"
                          }`}
                        >
                          {step.duration}
                        </span>
                      </div>

                      <p
                        className={`mt-2.5 text-xs sm:text-sm leading-relaxed transition-all duration-300 ${
                          isActive
                            ? "text-white/55 max-h-40 opacity-100"
                            : "text-white/40 max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:text-white/50"
                        }`}
                      >
                        {step.description}
                      </p>
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

// ── Background ─────────────────────────────────────────────────────────────

function BackgroundDecor() {
  return (
    <div className='absolute inset-0 pointer-events-none select-none overflow-hidden'>
      {/* Lavender atmospheric orb */}
      <div
        className='absolute left-[-10%] top-1/3 rounded-full blur-[160px]'
        style={{
          width: "600px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(200,184,224,0.08) 0%, transparent 70%)",
        }}
      />
      <div className='absolute inset-x-0 top-0 h-32 bg-linear-to-b from-brand-dark to-transparent' />
      <div className='absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-dark to-transparent' />
    </div>
  );
}
