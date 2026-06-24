"use client";

import { motion } from "motion/react";

// ── SVG Icons ──────────────────────────────────────────────────────────────

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[22px] w-[22px]",
};

function IconBrowser() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="3" width="20" height="18" rx="2.5" />
      <path d="M2 8.5h20" />
      <circle cx="6.5" cy="5.75" r=".75" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="5.75" r=".75" fill="currentColor" stroke="none" />
      <path d="M7 13h10M7 16.5h6" />
    </svg>
  );
}

function IconMobile() {
  return (
    <svg {...iconProps}>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M10 5.5h4" />
      <circle cx="12" cy="18.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg {...iconProps}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg {...iconProps}>
      <ellipse cx="12" cy="5" rx="8" ry="2.5" />
      <path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
      <path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
    </svg>
  );
}

function IconCpu() {
  return (
    <svg {...iconProps}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9.5 7V4M12 7V4M14.5 7V4" />
      <path d="M9.5 20v-3M12 20v-3M14.5 20v-3" />
      <path d="M7 9.5H4M7 12H4M7 14.5H4" />
      <path d="M20 9.5h-3M20 12h-3M20 14.5h-3" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg {...iconProps}>
      <path d="M7 8L3 12l4 4" />
      <path d="M17 8l4 4-4 4" />
      <path d="M14 4l-4 16" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconPen() {
  return (
    <svg {...iconProps}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      <path d="M15 5l3 3" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg {...iconProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

type Service = {
  title: string;
  description: string;
  Icon: () => React.JSX.Element;
  iconBg: string;
  iconColor: string;
  tag: string;
};

const SERVICES: Service[] = [
  {
    title: "Custom Web Applications",
    description:
      "Full-stack platforms engineered for speed, scale, and seamless UX — tailored precisely to your business processes and user workflows.",
    Icon: IconBrowser,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    tag: "Web",
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that deliver smooth, intuitive experiences on iOS and Android — from MVP to production.",
    Icon: IconMobile,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    tag: "Mobile",
  },
  {
    title: "SaaS Platforms",
    description:
      "End-to-end SaaS product development — multi-tenant architecture, subscription billing, dashboards, and the full product lifecycle.",
    Icon: IconLayers,
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
    tag: "SaaS",
  },
  {
    title: "CRM & ERP Systems",
    description:
      "Custom business management platforms that centralize client relationships, operations, and workflows in one unified system.",
    Icon: IconDatabase,
    iconBg: "bg-amber-600/10",
    iconColor: "text-amber-500",
    tag: "Enterprise",
  },
  {
    title: "AI Integrations",
    description:
      "LLM-powered features, intelligent automation, and data-driven insights embedded directly into your existing product stack.",
    Icon: IconCpu,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    tag: "AI",
  },
  {
    title: "API Development",
    description:
      "Robust RESTful and GraphQL APIs with clear documentation, authentication, rate limiting, and seamless third-party integrations.",
    Icon: IconCode,
    iconBg: "bg-orange-400/10",
    iconColor: "text-orange-300",
    tag: "Backend",
  },
  {
    title: "Business Automation",
    description:
      "Custom automation pipelines that eliminate repetitive tasks, reduce costly errors, and free your team to focus on what matters.",
    Icon: IconGear,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    tag: "Automation",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-driven interface design — from wireframes to pixel-perfect, accessible UI systems built to convert and retain users.",
    Icon: IconPen,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    tag: "Design",
  },
  {
    title: "Maintenance & Support",
    description:
      "Proactive monitoring, security patching, performance tuning, and ongoing feature iteration to keep your software thriving.",
    Icon: IconShield,
    iconBg: "bg-amber-300/10",
    iconColor: "text-amber-300",
    tag: "Support",
  },
];

// ── Section ────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative overflow-hidden bg-brand-dark py-24 sm:py-32"
    >
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-primary" />
            Our Services
          </span>

          <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-white">
            Everything Your Business
            <br className="hidden sm:block" />
            <span className="text-brand-primary"> Needs to Scale</span>
          </h2>

          <p className="mt-4 text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed text-white/55">
            From idea to production — we deliver the full stack of digital
            solutions modern businesses rely on to grow, automate, and lead
            their markets.
          </p>
        </motion.div>

        {/* ── Divider line ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.2 }}
          className="mx-auto mt-12 h-px max-w-xs origin-center bg-linear-to-r from-transparent via-brand-primary/40 to-transparent"
        />

        {/* ── Service cards grid ── */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Service card ───────────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { title, description, Icon, iconBg, iconColor, tag } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay: (index % 3) * 0.08,
        duration: 0.5,
        ease: "easeOut" as const,
      }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-card border border-white/[0.07] bg-white/3 p-6 transition-colors duration-300 hover:border-brand-primary/25 hover:bg-white/6"
    >
      {/* Top-edge accent line — sweeps in on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px w-0 bg-linear-to-r from-transparent via-brand-primary/70 to-transparent transition-all duration-500 group-hover:w-full" />

      {/* Inner glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-card opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,79,0,0.1), 0 0 50px rgba(255,79,0,0.04)",
        }}
      />

      {/* Tag pill */}
      <div className="flex items-start justify-between">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}
          style={{ aspectRatio: "1/1" }}
        >
          <Icon />
        </div>
        <span className="rounded-full border border-white/8 bg-white/4 px-2.5 py-1 text-[10px] font-medium text-white/40">
          {tag}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/50">{description}</p>
      </div>

      {/* Hover CTA */}
      <div className="mt-auto flex -translate-x-1 items-center gap-1.5 text-xs font-medium text-brand-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        Learn more
        <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
          <path
            fillRule="evenodd"
            d="M2 8a.5.5 0 0 1 .5-.5h9.793L10.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.293 8.5H2.5A.5.5 0 0 1 2 8z"
          />
        </svg>
      </div>
    </motion.div>
  );
}

// ── Background effects ─────────────────────────────────────────────────────

function BackgroundEffects() {
  return (
    <>
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Central blue depth glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(255,79,0,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top fade into hero section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-brand-dark to-transparent" />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-brand-dark to-transparent" />

      {/* Subtle side vignette */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-brand-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-brand-dark to-transparent" />
    </>
  );
}
