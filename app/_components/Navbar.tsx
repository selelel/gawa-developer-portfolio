"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";

// ── Data ───────────────────────────────────────────────────────────────────

type NavLink = { label: string; href: string; sectionId: string | null };

const SECTION_IDS = ["services", "process", "faq"];

const DESKTOP_NAV: NavLink[] = [
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Process",  href: "/#process",  sectionId: "process"  },
  { label: "FAQ",      href: "/#faq",      sectionId: "faq"      },
  { label: "Contact",  href: "/contact",   sectionId: null       },
];

const MOBILE_NAV: NavLink[] = [
  { label: "Home", href: "/", sectionId: null },
  ...DESKTOP_NAV,
];

// ── Scroll spy ─────────────────────────────────────────────────────────────
// Resets on pathname change so active state doesn't bleed across pages.
// rootMargin shrinks the detection zone to the top ~20% of the viewport so
// the highlight advances as the section header scrolls past the nav.

function useScrollSpy(pathname: string): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    setActive(null);
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [pathname]);

  return active;
}

// ── Component ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname                  = usePathname();
  const menuRef                   = useRef<HTMLDivElement>(null);
  const hamburgerRef              = useRef<HTMLButtonElement>(null);
  const activeSection             = useScrollSpy(pathname);
  const isHome                    = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Focus first item on open, trap Tab within panel, Escape returns focus to trigger
  useEffect(() => {
    if (!menuOpen) return;
    const panel = menuRef.current;
    if (!panel) return;

    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    focusables[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const first = focusables[0];
      const last  = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first?.focus(); }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function isActive({ href, sectionId }: NavLink): boolean {
    if (href === "/contact") return pathname === "/contact";
    if (href === "/")        return isHome && activeSection === null;
    if (sectionId !== null)  return isHome && activeSection === sectionId;
    return false;
  }

  return (
    <MotionConfig reducedMotion="user">
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border-subtle bg-bg-canvas/95 shadow-sm backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        {/*
          Three-zone layout: Logo (left) | Nav (absolute center) | CTA/toggle (right).
          The nav is absolutely centered so logo ≠ CTA widths don't shift it.
        */}
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            aria-label="Gawa Developer — Home"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-[11px] font-black text-white"
              style={{ aspectRatio: "1/1" }}
              aria-hidden
            >
              G
            </span>
            <span className="text-sm font-bold text-brand-dark">
              Gawa{" "}
              <span className="font-medium text-text-muted">Developer</span>
            </span>
          </Link>

          {/* Desktop nav — truly centered via absolute positioning */}
          <nav
            className="absolute left-1/2 top-0 hidden h-16 -translate-x-1/2 items-center gap-6 md:flex"
            aria-label="Main navigation"
          >
            {DESKTOP_NAV.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "relative py-1.5 text-sm font-medium transition-colors duration-fast hover:text-text-primary",
                    active ? "text-text-primary" : "text-text-secondary",
                  ].join(" ")}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-text-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side: CTA (desktop) + hamburger (mobile) */}
          <div className="relative z-10 flex items-center gap-3">
            {/* Desktop CTA — min-h-11 meets WCAG 2.5.5 44px target */}
            <motion.div className="hidden md:block" whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex min-h-11 min-w-10 items-center justify-center rounded-button bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition-colors duration-fast hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                Start Your Project
              </Link>
            </motion.div>

            {/* Mobile menu toggle — 48×48 touch target */}
            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-bg-surface transition-colors hover:bg-bg-muted md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-brand-dark/20 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            ref={menuRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
            className="fixed inset-x-4 top-[72px] z-50 overflow-hidden rounded-card border border-border-subtle bg-bg-canvas shadow-[0_12px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col p-3" aria-label="Mobile navigation">
              {MOBILE_NAV.map((link) => {
                const active = isActive(link);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "flex min-h-12 items-center rounded-xl px-4 text-sm font-medium transition-colors",
                      active
                        ? "bg-bg-muted font-semibold text-text-primary"
                        : "text-text-secondary hover:bg-bg-surface hover:text-text-primary",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-2 border-t border-border-subtle pt-3">
                <Link
                  href="/contact"
                  className="flex min-h-12 items-center justify-center rounded-button bg-brand-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                >
                  Start Your Project
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

// ── Animated hamburger / close icon ───────────────────────────────────────

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      className="h-5 w-5 text-brand-dark transition-all duration-200"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M4 4l12 12" />
          <path d="M16 4L4 16" />
        </>
      ) : (
        <>
          <path d="M2 5h16" />
          <path d="M2 10h16" />
          <path d="M2 15h16" />
        </>
      )}
    </svg>
  );
}
