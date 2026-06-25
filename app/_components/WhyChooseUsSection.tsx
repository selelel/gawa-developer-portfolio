"use client";

import { motion } from "motion/react";

// ── SVG Icons ──────────────────────────────────────────────────────────────

const svg = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconTerminal() {
  return (
    <svg {...svg} className="h-5 w-5">
      <rect x="2" y="3" width="20" height="18" rx="2.5" />
      <path d="M7 9l3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

function IconExpand() {
  return (
    <svg {...svg} className="h-5 w-5">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg {...svg} className="h-5 w-5">
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.42 1.42M16.95 16.95l1.41 1.41M5.64 18.36l1.42-1.41M16.95 7.05l1.41-1.41" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg {...svg} className="h-5 w-5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg {...svg} className="h-5 w-5">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg {...svg} className="h-5 w-5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg {...svg} className="h-5 w-5">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

type Reason = {
  title: string;
  description: string;
  Icon: () => React.JSX.Element;
  highlight?: string;
  featured?: boolean;
};

const REASONS: Reason[] = [
  {
    title: "Modern Development Practices",
    description:
      "CI/CD pipelines, automated testing, code reviews, and clean architecture ensure every project is built on a foundation that stays reliable, extensible, and easy to hand off to any team.",
    Icon: IconTerminal,
    highlight: "Industry best practices",
    featured: true,
  },
  {
    title: "Scalable Architecture",
    description:
      "Every system we design is ready to grow — from 100 to 100,000 users without a painful rewrite. We build with the future in mind from day one.",
    Icon: IconExpand,
    highlight: "Grows with you",
  },
  {
    title: "Clean & Maintainable Code",
    description:
      "Well-structured, thoroughly reviewed code that any developer can read and extend. No spaghetti, no hidden debt — just sustainable clarity.",
    Icon: IconSparkle,
  },
  {
    title: "Fast Communication",
    description:
      "You'll always know exactly where your project stands. We respond quickly, keep you in the loop, and surface blockers before they become problems.",
    Icon: IconZap,
    highlight: "< 24h response",
  },
  {
    title: "Security-Conscious Development",
    description:
      "OWASP standards, encrypted data at rest and in transit, secure auth patterns, and regular dependency audits — baked in, not bolted on.",
    Icon: IconLock,
  },
  {
    title: "Transparent Project Management",
    description:
      "Clear roadmaps, sprint reviews, and milestone tracking. You have full visibility into progress, decisions, and trade-offs at every stage.",
    Icon: IconEye,
  },
  {
    title: "Long-Term Support",
    description:
      "We don't disappear after launch. Ongoing maintenance, proactive performance monitoring, feature iterations, and a dedicated support relationship that evolves with your business.",
    Icon: IconRefresh,
    highlight: "Post-launch partner",
    featured: true,
  },
];

// ── Section ────────────────────────────────────────────────────────────────

export default function WhyChooseUsSection() {
  return (
    <section
      aria-label="Why Choose Us"
      className="relative overflow-hidden bg-bg-canvas py-24 sm:py-32"
    >
      <BackgroundDecor />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-normal tracking-tight text-brand-dark text-balance">
            Built on principles
            <br className="hidden sm:block" />
            <em> that actually matter</em>
          </h2>

          <p className="mt-4 text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed text-text-secondary">
            We don't just write code — we engineer reliable systems, communicate
            with clarity, and stay invested in your success long after launch.
          </p>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {REASONS.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Card ───────────────────────────────────────────────────────────────────

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  const { title, description, Icon, highlight, featured } = reason;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay: (index % 3) * 0.08,
        duration: 0.5,
        ease: "easeOut" as const,
      }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "group relative flex flex-col gap-5 overflow-hidden rounded-card border p-7 transition-all duration-300",
        featured
          ? "border-border-subtle bg-bg-surface hover:border-accent/25 hover:shadow-card sm:col-span-2 lg:col-span-2"
          : "border-border-subtle bg-bg-canvas hover:border-accent/15 hover:bg-bg-surface hover:shadow-card",
      ].join(" ")}
    >
      {/* Top row: icon + highlight badge */}
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-muted text-text-secondary transition-colors duration-300 group-hover:bg-accent/8 group-hover:text-accent"
          style={{ aspectRatio: "1/1" }}
        >
          <Icon />
        </div>

        {highlight && (
          <span className="shrink-0 rounded-full bg-accent/8 px-3 py-1 text-[11px] font-semibold tracking-wide text-accent-hover">
            {highlight}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2.5">
        <h3
          className={[
            "font-semibold leading-snug tracking-tight text-brand-dark",
            featured ? "text-lg" : "text-base",
          ].join(" ")}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">{description}</p>
      </div>
    </motion.div>
  );
}

// ── Background ─────────────────────────────────────────────────────────────

function BackgroundDecor() {
  return (
    <>
      {/* Sky atmospheric orb — top right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 rounded-full blur-3xl"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(168,200,232,0.22) 0%, transparent 70%)",
          aspectRatio: "1/1",
        }}
      />
      {/* Peach orb — bottom left */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 rounded-full blur-3xl"
        style={{
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(ellipse, rgba(244,197,168,0.18) 0%, transparent 70%)",
          aspectRatio: "1/1",
        }}
      />
    </>
  );
}
