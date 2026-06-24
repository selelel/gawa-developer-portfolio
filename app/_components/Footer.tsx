import Link from "next/link";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Web Applications", href: "/#services" },
  { label: "Mobile Apps", href: "/#services" },
  { label: "SaaS Platforms", href: "/#services" },
  { label: "AI Integrations", href: "/#services" },
  { label: "API Development", href: "/#services" },
  { label: "Business Automation", href: "/#services" },
];

const PROCESS_STEPS = [
  { label: "Discovery & Planning", href: "/#process" },
  { label: "Design & Development", href: "/#process" },
  { label: "Testing & Deployment", href: "/#process" },
  { label: "Continuous Support", href: "/#process" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-dark" aria-label="Site footer">
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg w-fit"
              aria-label="Gawa Developer — Home"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-sm font-black text-white"
                style={{ aspectRatio: "1/1" }}
                aria-hidden
              >
                G
              </span>
              <span className="text-base font-bold text-white">
                Gawa{" "}
                <span className="font-medium text-white/40">Developer</span>
              </span>
            </Link>

            <p className="max-w-[260px] text-sm leading-relaxed text-white/40">
              We help businesses transform ideas into scalable digital products
              through modern software engineering and thoughtful design.
            </p>

            {/* Availability indicator */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-white/40">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                aria-hidden
              />
              Available for new projects
            </span>
          </div>

          {/* ── Pages ── */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-white/25">
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {PAGES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 transition-colors duration-fast hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-white/25">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 transition-colors duration-fast hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Process ── */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-white/25">
              Our Process
            </p>
            <ul className="flex flex-col gap-3">
              {PROCESS_STEPS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 transition-colors duration-fast hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-14 h-px bg-white/[0.06]" />

        {/* ── Bottom bar ── */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/25 sm:flex-row">
          <span>
            © {year} Gawa Developer. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5">
            Built with
            <span className="text-white/40">Next.js 16 · React 19 · Tailwind CSS v4</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
