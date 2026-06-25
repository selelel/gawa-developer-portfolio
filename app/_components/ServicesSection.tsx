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
  className: "h-5 w-5",
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
};

const FEATURED: Service[] = [
  {
    title: "Custom Web Applications",
    description:
      "Full-stack platforms engineered for speed, scale, and seamless UX — tailored precisely to your business processes and user workflows.",
    Icon: IconBrowser,
  },
  {
    title: "SaaS Platforms",
    description:
      "End-to-end SaaS product development — multi-tenant architecture, subscription billing, dashboards, and the full product lifecycle.",
    Icon: IconLayers,
  },
  {
    title: "AI Integrations",
    description:
      "LLM-powered features, intelligent automation, and data-driven insights embedded directly into your existing product stack.",
    Icon: IconCpu,
  },
];

const SUPPORTING: Service[] = [
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that deliver smooth, intuitive experiences on iOS and Android.",
    Icon: IconMobile,
  },
  {
    title: "CRM & ERP Systems",
    description:
      "Custom business management platforms that centralize client relationships, operations, and workflows.",
    Icon: IconDatabase,
  },
  {
    title: "API Development",
    description:
      "Robust RESTful and GraphQL APIs with clear documentation, authentication, and third-party integrations.",
    Icon: IconCode,
  },
  {
    title: "Business Automation",
    description:
      "Custom pipelines that eliminate repetitive tasks, reduce errors, and free your team to focus on growth.",
    Icon: IconGear,
  },
  {
    title: "UI/UX Design",
    description:
      "Research-driven interface design — from wireframes to pixel-perfect, accessible UI systems.",
    Icon: IconPen,
  },
  {
    title: "Maintenance & Support",
    description:
      "Proactive monitoring, security patching, and ongoing iteration to keep your software thriving.",
    Icon: IconShield,
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
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-white text-balance">
            Everything your business{" "}
            <em>needs to grow</em>
          </h2>

          <p className="mt-4 text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed text-white/60">
            From idea to production — we deliver the full stack of digital
            solutions modern businesses rely on to grow, automate, and lead
            their markets.
          </p>
        </motion.div>

        {/* ── Featured services — editorial list ── */}
        <div className="mt-14 divide-y divide-white/8">
          {FEATURED.map((service, i) => (
            <FeaturedRow key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* ── Section bridge ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-xs font-medium text-white/30">
            Additional services
          </span>
          <div className="h-px flex-1 bg-white/8" />
        </motion.div>

        {/* ── Supporting services — compact grid ── */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORTING.map((service, i) => (
            <CompactCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Featured row ───────────────────────────────────────────────────────────

function FeaturedRow({ service, index }: { service: Service; index: number }) {
  const { title, description, Icon } = service;
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      }}
      className="group flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:gap-8"
    >
      <div className="flex shrink-0 items-center gap-4 sm:w-64 lg:w-72">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 text-white/50 transition-colors duration-200 group-hover:border-white/25 group-hover:text-white/75">
          <Icon />
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-white/55 sm:flex-1">
        {description}
      </p>
    </motion.div>
  );
}

// ── Compact card ───────────────────────────────────────────────────────────

function CompactCard({ service, index }: { service: Service; index: number }) {
  const { title, description, Icon } = service;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay: (index % 3) * 0.07,
        duration: 0.45,
        ease: "easeOut" as const,
      }}
      className="flex flex-col gap-3 rounded-card border border-white/7 p-5 transition-colors duration-200 hover:border-white/13 hover:bg-white/3"
    >
      <div className="text-white/40">
        <Icon />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs leading-relaxed text-white/50">{description}</p>
      </div>
    </motion.div>
  );
}

// ── Background effects ─────────────────────────────────────────────────────

function BackgroundEffects() {
  return (
    <>
      {/* Subtle rose atmospheric orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{
          width: "700px",
          height: "480px",
          background:
            "radial-gradient(ellipse, rgba(200,184,224,0.09) 0%, transparent 70%)",
        }}
      />
      {/* Top + bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-brand-dark to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-brand-dark to-transparent" />
    </>
  );
}
