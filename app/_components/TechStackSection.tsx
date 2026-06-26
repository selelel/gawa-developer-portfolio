"use client";

import { motion, MotionConfig } from "motion/react";

// ── Data ───────────────────────────────────────────────────────────────────

const STACK = [
  {
    category: "Frontend",
    items: [
      { name: "React", note: "UI library" },
      { name: "Next.js", note: "Framework" },
      { name: "TypeScript", note: "Type-safe JS" },
      { name: "Tailwind CSS", note: "Utility styling" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", note: "Server runtime" },
      { name: "Express", note: "API layer" },
      { name: "PostgreSQL", note: "Relational DB" },
      { name: "Supabase", note: "Backend as a service" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", note: "Containerization" },
      { name: "AWS", note: "Cloud platform" },
      { name: "Vercel", note: "Edge deployment" },
    ],
  },
];

// ── Section ────────────────────────────────────────────────────────────────

export default function TechStackSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="stack"
        aria-label="Technology Stack"
        className="relative overflow-hidden bg-brand-dark py-24 sm:py-32"
      >
        <BackgroundDecor />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-normal tracking-tight text-white text-balance">
              Built with tools
              <br className="hidden sm:block" />
              <em> we trust in production</em>
            </h2>
            <p className="mt-4 max-w-[58ch] text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed text-white/55">
              A mature, interoperable stack chosen for reliability and developer
              experience — not trends. Every tool here has earned its place
              across real production systems.
            </p>
          </motion.div>

          {/* ── Stack columns ── */}
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 lg:mt-16 lg:gap-0">
            {STACK.map((col, ci) => (
              <motion.div
                key={col.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: ci * 0.1,
                  duration: 0.5,
                  ease: "easeOut" as const,
                }}
                className={[
                  "flex flex-col",
                  ci < STACK.length - 1
                    ? "sm:border-r sm:border-white/8 sm:pr-10 lg:pr-14"
                    : "",
                  ci > 0 ? "sm:pl-10 lg:pl-14" : "",
                ].join(" ")}
              >
                <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                  {col.category}
                </p>
                <ul>
                  {col.items.map((item, ii) => (
                    <li
                      key={item.name}
                      className={[
                        "flex items-baseline justify-between gap-4 py-3.5",
                        ii < col.items.length - 1
                          ? "border-b border-white/6"
                          : "",
                      ].join(" ")}
                    >
                      <span className="text-[15px] font-semibold text-white">
                        {item.name}
                      </span>
                      <span className="shrink-0 text-[11px] text-white/50">
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom trust line ── */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.4 }}
            className="mt-14 text-sm text-white/50 lg:mt-16"
          >
            All stacks are tailored per project — these are the tools we reach
            for first.
          </motion.p>
        </div>
      </section>
    </MotionConfig>
  );
}

// ── Background ─────────────────────────────────────────────────────────────

function BackgroundDecor() {
  return (
    <>
      {/* Sky blue orb — left (fade blue) */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 -translate-y-1/2 rounded-full blur-[160px]"
        style={{
          width: "500px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(168,200,232,0.13) 0%, transparent 70%)",
        }}
      />
      {/* Amber orb — bottom right (warm golden depth) */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 rounded-full blur-[160px]"
        style={{
          width: "420px",
          height: "340px",
          background:
            "radial-gradient(ellipse, rgba(227,200,120,0.09) 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-brand-dark to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-brand-dark to-transparent" />
    </>
  );
}
