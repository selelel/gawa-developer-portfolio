"use client";

import { motion, MotionConfig } from "motion/react";
import Link from "next/link";

// ── Dispatch bar chart ─────────────────────────────────────────────────────

function DispatchBarChart() {
  const BARS = [48, 62, 55, 78, 71, 83, 90];
  const H = 34;
  const W = 84;
  const barW = 8;
  const gap = 4;
  const total = BARS.length * barW + (BARS.length - 1) * gap;
  const startX = (W - total) / 2;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      aria-hidden
      style={{ height: H, display: "block" }}
    >
      {BARS.map((val, i) => {
        const barH = Math.max((val / 100) * H * 0.9, 2);
        const x = startX + i * (barW + gap);
        return (
          <rect
            key={i}
            x={x}
            y={H - barH}
            width={barW}
            height={barH}
            rx={2}
            fill={i === BARS.length - 1 ? "#3567a0" : "#e4e4e7"}
          />
        );
      })}
    </svg>
  );
}

// ── Redwood Ops preview ────────────────────────────────────────────────────

const ROUTES = [
  { id: "A-14", driver: "Martinez, J.", status: "Delivered", color: "#22c55e" },
  { id: "B-07", driver: "Chen, L.", status: "In Transit", color: "#f59e0b" },
  { id: "C-22", driver: "Williams, K.", status: "In Transit", color: "#f59e0b" },
  { id: "D-03", driver: "Torres, M.", status: "Delayed", color: "#e11d48" },
  { id: "E-11", driver: "Johnson, P.", status: "Delivered", color: "#22c55e" },
];

function RedwoodOpsPreview() {
  return (
    <div
      className="select-none overflow-hidden rounded-2xl border border-[#e4e4e7] bg-white shadow-[0_12px_48px_rgba(0,0,0,0.09)]"
      aria-hidden
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-[#f4f4f5] bg-[#fafafa] px-4 py-2.5">
        <div className="flex gap-1.5">
          {(["#fc5353", "#fdbc40", "#34c84a"] as const).map((c) => (
            <span
              key={c}
              className="block h-2.5 w-2.5 rounded-full"
              style={{ background: c, aspectRatio: "1/1" }}
            />
          ))}
        </div>
        <div className="mx-auto flex items-center rounded bg-[#f0f0f2] px-2.5 py-1">
          <span className="text-[9px] text-[#a0a0ab]">ops.redwoodlogistics.com</span>
        </div>
      </div>

      {/* App shell */}
      <div className="bg-[#f9f9fb] p-3.5">
        {/* App header */}
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-[#09090b]">Dispatch Board</p>
            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[9px] text-[#71717a]">23 routes active</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
              Live
            </span>
            <span className="rounded-md bg-[#09090b] px-2.5 py-1 text-[9px] font-semibold text-white">
              + Assign
            </span>
          </div>
        </div>

        {/* Table + sidebar */}
        <div className="flex gap-3">
          {/* Route table */}
          <div className="min-w-0 flex-1 overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
            <div className="grid grid-cols-[40px_1fr_72px] border-b border-[#f4f4f5] px-3 py-1.5">
              {["Route", "Driver", "Status"].map((h) => (
                <p
                  key={h}
                  className="text-[8.5px] font-semibold uppercase tracking-wider text-[#a0a0ab]"
                >
                  {h}
                </p>
              ))}
            </div>
            {ROUTES.map((r, i) => (
              <div
                key={r.id}
                className={[
                  "grid grid-cols-[40px_1fr_72px] items-center gap-0 px-3 py-1.5",
                  i < ROUTES.length - 1 ? "border-b border-[#f9f9fb]" : "",
                ].join(" ")}
              >
                <span className="font-mono text-[9px] font-semibold text-[#3f3f46]">
                  {r.id}
                </span>
                <span className="text-[9px] text-[#71717a]">{r.driver}</span>
                <span
                  className="flex items-center gap-1 text-[9px]"
                  style={{ color: r.color }}
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: r.color, aspectRatio: "1/1" }}
                  />
                  {r.status}
                </span>
              </div>
            ))}
          </div>

          {/* Stats sidebar */}
          <div className="flex w-[88px] shrink-0 flex-col gap-2">
            <div className="rounded-lg bg-white px-2 py-1.5 ring-1 ring-black/5">
              <p className="text-[8px] font-medium text-[#a0a0ab]">On time</p>
              <p className="text-base font-bold leading-tight text-[#09090b]">91%</p>
            </div>
            <div className="rounded-lg bg-white px-2 py-1.5 ring-1 ring-black/5">
              <p className="text-[8px] font-medium text-[#a0a0ab]">Delivered</p>
              <p className="text-base font-bold leading-tight text-[#09090b]">18</p>
            </div>
            <div className="rounded-lg bg-white px-2 py-2 ring-1 ring-black/5">
              <p className="mb-1.5 text-[8px] font-medium text-[#a0a0ab]">Weekly</p>
              <DispatchBarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Stratos CRM preview ────────────────────────────────────────────────────

const KANBAN_COLS = [
  {
    name: "Qualified",
    deals: [
      { name: "Apex Corp", value: "$42K", color: "#3b82f6" },
      { name: "NorthWave", value: "$18K", color: "#8b5cf6" },
    ],
  },
  {
    name: "Proposal",
    deals: [
      { name: "Rimstone Inc.", value: "$75K", color: "#f59e0b" },
      { name: "Vantacore", value: "$31K", color: "#10b981" },
    ],
  },
  {
    name: "Closed Won",
    deals: [{ name: "Glitch Media", value: "$56K", color: "#e11d48" }],
  },
];

function StratosCRMPreview() {
  return (
    <div
      className="select-none overflow-hidden rounded-2xl border border-[#e4e4e7] bg-white shadow-[0_6px_28px_rgba(0,0,0,0.07)]"
      aria-hidden
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-[#f4f4f5] bg-[#fafafa] px-4 py-2.5">
        <div className="flex gap-1.5">
          {(["#fc5353", "#fdbc40", "#34c84a"] as const).map((c) => (
            <span
              key={c}
              className="block h-2.5 w-2.5 rounded-full"
              style={{ background: c, aspectRatio: "1/1" }}
            />
          ))}
        </div>
        <div className="mx-auto flex items-center rounded bg-[#f0f0f2] px-2.5 py-1">
          <span className="text-[9px] text-[#a0a0ab]">app.stratoscrm.io</span>
        </div>
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-3 gap-2 bg-[#f9f9fb] p-3">
        {KANBAN_COLS.map((col) => (
          <div
            key={col.name}
            className="flex flex-col gap-1.5 rounded-lg bg-[#f2f2f5] p-2"
          >
            <p className="text-[8.5px] font-semibold text-[#71717a]">
              {col.name}{" "}
              <span className="text-[#a0a0ab]">({col.deals.length})</span>
            </p>
            {col.deals.map((deal) => (
              <div
                key={deal.name}
                className="rounded-md bg-white p-1.5 ring-1 ring-black/[0.06]"
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded text-[7px] font-bold text-white"
                    style={{ background: deal.color, aspectRatio: "1/1" }}
                  >
                    {deal.name[0]}
                  </span>
                  <span className="truncate text-[9px] font-medium text-[#3f3f46]">
                    {deal.name}
                  </span>
                </div>
                <p className="mt-1 text-[9.5px] font-semibold text-[#09090b]">
                  {deal.value}
                </p>
              </div>
            ))}
            {/* Empty slot */}
            <div className="h-6 rounded-md border border-dashed border-[#e4e4e7]" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Background ─────────────────────────────────────────────────────────────

function BackgroundDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -right-40 -top-24 rounded-full blur-3xl"
        style={{
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(ellipse, rgba(251,191,36,0.09) 0%, transparent 70%)",
          aspectRatio: "1/1",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 rounded-full blur-3xl"
        style={{
          width: "460px",
          height: "460px",
          background:
            "radial-gradient(ellipse, rgba(147,197,253,0.12) 0%, transparent 70%)",
          aspectRatio: "1/1",
        }}
      />
    </>
  );
}

// ── Tech badge ─────────────────────────────────────────────────────────────

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border-subtle bg-bg-surface px-3 py-1 text-[11px] font-medium text-text-secondary">
      {label}
    </span>
  );
}

// ── Section ────────────────────────────────────────────────────────────────

export default function FeaturedProjectsSection() {
  return (
    <MotionConfig reducedMotion="user">
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative overflow-hidden bg-bg-canvas py-24 sm:py-32"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ── Header — left-aligned for editorial contrast with centered neighbors ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="max-w-2xl"
        >
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-normal tracking-tight text-brand-dark text-balance">
            Work that <em>moved the needle</em>
          </h2>
          <p className="mt-4 max-w-[58ch] text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed text-text-secondary">
            Three different problems. One consistent outcome — software that
            earned its keep.
          </p>
        </motion.div>

        {/* ── Hero project — Redwood Ops ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: "easeOut" as const, delay: 0.1 }}
          className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-14"
        >
          {/* Mockup — 3/5 */}
          <div className="lg:col-span-3">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: 1.4,
              }}
              whileHover={{
                scale: 1.015,
                transition: { duration: 0.3, ease: "easeOut" as const },
              }}
              style={{ willChange: "transform" }}
            >
              <RedwoodOpsPreview />
            </motion.div>
          </div>

          {/* Copy — 2/5 */}
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: "easeOut" as const }} className="flex flex-col gap-6 lg:col-span-2">
            <div>
              <p className="text-xs font-medium text-text-muted">
                Logistics Platform
              </p>
              <h3 className="font-heading mt-1 text-[clamp(1.4rem,3vw,1.875rem)] font-normal tracking-tight text-brand-dark">
                Redwood Ops
              </h3>
            </div>

            <div className="flex flex-col gap-4 border-t border-border-subtle pt-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                  The challenge
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                  Three dispatch teams coordinating via shared spreadsheets.
                  Deals fell through gaps between shifts.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                  What we built
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                  Real-time dispatch board with automated route assignment and
                  weekly reporting, built on a Supabase-backed Next.js platform.
                </p>
              </div>
            </div>

            {/* Outcome */}
            <div className="rounded-xl border border-accent/15 bg-accent/5 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-accent/70">
                Outcome
              </p>
              <p className="mt-2 text-[15px] font-semibold leading-snug text-brand-dark">
                40% fewer dispatch errors. 22 hours recovered per week.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Next.js", "Node.js", "PostgreSQL", "Supabase"].map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Section divider ── */}
        <div className="my-16 border-t border-border-subtle sm:my-20" />

        {/* ── Compact duo ── */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-16">

          {/* Stratos CRM — col-span-3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="flex flex-col gap-5 lg:col-span-3"
          >
            <StratosCRMPreview />

            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3, ease: "easeOut" as const }} className="flex flex-col gap-4 pt-1">
              <div>
                <p className="text-xs font-medium text-text-muted">B2B SaaS</p>
                <h3 className="font-heading mt-1 text-[clamp(1.2rem,2.5vw,1.5rem)] font-normal tracking-tight text-brand-dark">
                  Stratos CRM
                </h3>
              </div>
              <p className="max-w-[48ch] text-sm leading-relaxed text-text-secondary">
                End-to-end CRM for B2B sales teams — kanban pipeline, deal
                forecasting, and Stripe-connected automation. Launched in 11 weeks.
              </p>
              <p className="text-[15px] font-semibold text-brand-dark">
                $2.1M in pipeline tracked on launch week.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Stripe"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Meridian Health — col-span-2, text-forward */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.12 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            {/* Large impact visual anchor — EB Garamond carries editorial weight */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
              className="flex flex-col justify-end gap-2.5 rounded-2xl border border-border-subtle bg-bg-surface px-7 py-9 transition-shadow duration-300 hover:shadow-(--shadow-card-hover)"
            >
              <p className="font-heading text-[clamp(3.5rem,8vw,5.5rem)] font-normal leading-none tracking-tight text-brand-dark">
                89%
              </p>
              <p className="text-sm font-medium text-accent">
                drop in phone appointment volume
              </p>
            </motion.div>

            <div className="flex flex-col gap-4 pt-1">
              <div>
                <p className="text-xs font-medium text-text-muted">
                  Healthcare Portal
                </p>
                <h3 className="font-heading mt-1 text-[clamp(1.2rem,2.5vw,1.5rem)] font-normal tracking-tight text-brand-dark">
                  Meridian Health
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                HIPAA-compliant patient portal replacing paper-based appointment
                booking across 14 clinics.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "AWS"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── CTA bridge ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mt-16 flex flex-wrap items-center gap-5 sm:mt-20"
        >
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="group inline-flex min-h-11 items-center gap-2 rounded-button bg-brand-dark px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-dark/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Start a project like this
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
            </Link>
          </motion.div>
          <span className="text-sm text-text-muted">
            Free consultation — no commitment required.
          </span>
        </motion.div>
      </div>
    </section>
    </MotionConfig>
  );
}
