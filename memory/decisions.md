# Decisions — Gawa Developer Portfolio

---

## 2026-06-26 — Accent color changed from red to steel trust blue

- **Context:** Original CLAUDE.md specified soft red `#e11d48` as the primary accent. After adopting the ElevenLabs editorial direction, user switched to a muted steel blue for trust signals.
- **Decision:** `--color-accent: #3567a0`, `--color-accent-hover: #2a5286`. Red is retained only for semantic use (`--color-semantic-error: #dc2626`) and `aria-hidden` mockup status indicators (Delayed = red inside FeaturedProjectsSection — intentional semantic color, not brand accent).
- **CLAUDE.md note:** CLAUDE.md still says "soft reds" — that is stale. `globals.css` is the source of truth.

---

## 2026-06-26 — ElevenLabs editorial design direction

- **Context:** User adopted an editorial aesthetic inspired by ElevenLabs: off-white canvas, near-black ink, restrained typography, generous whitespace.
- **Decision:** Canvas `#f5f5f5`, ink CTA `#292524`, EB Garamond for display headings, Inter for body. Pill button geometry (`9999px`). No heavy drop shadows; card ring `ring-black/[0.07]` only.
- **Tradeoffs:** More editorial/premium feel; less aggressive CTA contrast than pure red/white. Acceptable given the target audience (founders, engineering teams).

---

## 2026-06-26 — LayoutShell as the single client boundary at layout level

- **Context:** Navbar needs `usePathname()` to both detect the active page and implement scroll spy. Making the root layout a client component would server-render nothing; making Navbar itself client while keeping layout server causes hydration mismatches.
- **Decision:** `LayoutShell.tsx` is `"use client"` and wraps Navbar + Footer. All page sections and `app/layout.tsx` remain server components. LayoutShell is the only client boundary at the layout tier.

---

## 2026-06-26 — Bare layout on /contact (no Navbar, no Footer)

- **Context:** Contact page is a focused lead-gen form; nav + footer are visual noise that increase drop-off.
- **Decision:** `LayoutShell` checks `pathname === "/contact"` and conditionally omits Navbar and Footer. No dedicated contact layout file needed — single conditional is sufficient.

---

## 2026-06-26 — Tailwind CSS v4 @theme block for all tokens

- **Context:** Tailwind v4 reads CSS custom properties from an `@theme` block directly, eliminating `tailwind.config.js` for token management.
- **Decision:** All color, radius, font, shadow, and easing tokens live in `globals.css @theme`. Tailwind utility classes (`text-accent`, `bg-bg-canvas`, `rounded-button`, etc.) are auto-generated from these tokens. No `tailwind.config.js`.

---

## 2026-06-26 — motion/react (not framer-motion)

- **Context:** Framer Motion split the package. The current import path is `motion/react`, not `framer-motion`.
- **Decision:** All animation imports use `from "motion/react"`. Never import from `framer-motion` in this project.

---

## 2026-06-26 — MotionConfig reducedMotion="user" per animated section

- **Context:** Accessibility requirement. Users with vestibular/motion sensitivity set `prefers-reduced-motion: reduce` at the OS level.
- **Decision:** Wrap each animated section in `<MotionConfig reducedMotion="user">`. This delegates motion preference to the OS without disabling animations for users who haven't opted out. `globals.css` also has a `@media (prefers-reduced-motion: reduce)` CSS rule as a fallback for non-Motion elements.

---

## 2026-06-26 — Hero mockup is a CRM dashboard (Stratos CRM), not a generic app

- **Context:** Hero visual needs to communicate "we build real business software," not a toy or marketing site template.
- **Decision:** Animated browser card shows "Stratos" CRM dashboard with metric tiles (revenue, clients, close time), an SVG revenue chart that draws via `pathLength` animation, and a recent deals list. The mockup references the Stratos CRM case study in FeaturedProjectsSection — intentional continuity.

---

## 2026-06-26 — useId() for SVG gradient IDs in DashboardChart

- **Context:** SVG `<linearGradient id="...">` IDs are global in the DOM. If `DashboardChart` renders more than once, duplicate IDs cause the second chart to steal the gradient from the first.
- **Decision:** `useId()` generates a unique ID per component instance. `gradId` is used as the gradient `id` and `url(#${gradId})` as the fill reference.

---

## 2026-06-26 — Hero uses min-h-screen + 100svh inline style

- **Context:** Mobile browsers have a dynamic viewport — `100vh` on iOS Safari includes the address bar height and causes content to be hidden behind it. `100svh` (small viewport height) is the correct unit but needs a fallback.
- **Decision:** `className="... min-h-screen"` (Tailwind fallback) + `style={{ minHeight: "100svh" }}` (override for supporting browsers). The `svh` inline style wins where supported.
