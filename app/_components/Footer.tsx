import Link from "next/link";

const SERVICES = [
  { label: "Custom Web Applications", href: "/#services" },
  { label: "Mobile Applications", href: "/#services" },
  { label: "SaaS Platforms", href: "/#services" },
  { label: "CRM & ERP Systems", href: "/#services" },
  { label: "AI Integrations", href: "/#services" },
  { label: "Business Automation", href: "/#services" },
];

const COMPANY = [
  { label: "Services", href: "/#services" },
  { label: "Our Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Start a Project", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Site footer" className="border-t border-white/[0.07] bg-brand-dark">
      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 border-b border-white/7 py-16 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1 lg:pr-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-lg w-fit"
              aria-label="Gawa Solutions — Home"
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/8 text-[11px] font-black text-white/80"
                style={{ aspectRatio: "1/1" }}
                aria-hidden
              >
                G
              </span>
              <span className="text-sm font-bold text-white/90">
                Gawa{" "}
                <span className="font-medium text-white/55">Solutions</span>
              </span>
            </Link>

            <p className="max-w-[28ch] text-sm leading-relaxed text-white/50">
              We engineer custom software that helps businesses streamline
              operations and grow with confidence.
            </p>

            <Link
              href="/contact"
              className="inline-flex min-h-11 w-fit items-center justify-center rounded-button border border-white/20 px-5 text-sm font-semibold text-white/80 transition-colors duration-200 hover:border-white/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              Start Your Project
            </Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold text-white/50">Services</p>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-sm text-white/55 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:ring-offset-1 focus-visible:ring-offset-brand-dark rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold text-white/50">Company</p>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-sm text-white/55 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:ring-offset-1 focus-visible:ring-offset-brand-dark rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold text-white/50">Get in touch</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:gimelcontz@gmail.com"
                className="block py-2.5 text-sm text-white/60 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:ring-offset-1 focus-visible:ring-offset-brand-dark rounded-sm"
              >
                gimelcontz@gmail.com
              </a>
              <div className="flex items-center gap-2 text-xs text-white/55">
                <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Accepting new projects
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center gap-3 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/50">
            © {year} Gawa Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Build Better Software. Grow Faster.
          </p>
        </div>
      </div>
    </footer>
  );
}
