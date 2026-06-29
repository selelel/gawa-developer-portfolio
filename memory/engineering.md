# Engineering — Gawa Developer Portfolio

## Stack

- **Framework**: Next.js 16 App Router (no `pages/` dir)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 — `@theme` block in `globals.css` for all design tokens
- **Runtime**: React 19
- **Animation**: `motion/react` (the split package — NOT `framer-motion`)
- **Package manager**: pnpm

## Route Structure

```
app/
  layout.tsx              → root layout: fonts, metadata, JSON-LD, LayoutShell
  page.tsx                → landing page (8 sections)
  globals.css             → @theme tokens + keyframes + utility classes
  contact/
    page.tsx              → contact/lead-gen page
  _components/
    LayoutShell.tsx       → "use client" wrapper — conditionally mounts Navbar + Footer
    Navbar.tsx            → scroll-spy nav, animated mobile drawer
    Footer.tsx            → dark footer, service + company links
    HeroSection.tsx       → animated CRM mockup, scroll parallax, gradient bg
    ServicesSection.tsx   → 9 services with inline SVG icons
    WhyChooseUsSection.tsx → trust signal cards
    ProcessSection.tsx    → 7-step process
    FeaturedProjectsSection.tsx → 3 case studies
    TechStackSection.tsx  → technology grid
    FAQSection.tsx        → accordion FAQ
    FinalCTASection.tsx   → closing CTA
    ContactPageShell.tsx  → contact page shell
    ContactForm.tsx       → multi-field lead gen form (name, company, email, phone, service, budget, timeline, description)
    ContactInfoPanel.tsx  → contact info panel
```

## Landing Page Section Order (app/page.tsx)

1. HeroSection
2. ServicesSection (`id="services"`)
3. WhyChooseUsSection
4. ProcessSection (`id="process"`)
5. FeaturedProjectsSection
6. TechStackSection
7. FAQSection (`id="faq"`)
8. FinalCTASection

## Design Tokens (globals.css @theme)

| Token | Value | Usage |
|---|---|---|
| `--color-bg-canvas` | `#f5f5f5` | page background |
| `--color-bg-surface` | `#ffffff` | card surfaces |
| `--color-bg-muted` | `#f0efed` | muted backgrounds |
| `--color-bg-dark-elevated` | `#1c1917` | dark card variant |
| `--color-brand-primary` | `#292524` | ink CTA pill |
| `--color-brand-dark` | `#0c0a09` | near-black text / footer bg |
| `--color-accent` | `#3567a0` | steel trust blue — interactive, CTAs, chart line |
| `--color-accent-hover` | `#2a5286` | accent hover state |
| `--color-text-primary` | `#0c0a09` | body text |
| `--color-text-secondary` | `#4e4e4e` | subtext |
| `--color-text-muted` | `#6b6a63` | captions |
| `--color-border-subtle` | `#e7e5e4` | dividers, card rings |
| `--radius-card` | `16px` | card border radius |
| `--radius-button` | `9999px` | pill button |
| `--font-heading` | EB Garamond + serif fallbacks | display headings |
| `--font-sans` | Inter + system-ui fallbacks | body, nav, forms |

Atmospheric gradient tokens (decoration only, used in HeroBackground):
`--color-gradient-mint`, `--color-gradient-peach`, `--color-gradient-lavender`, `--color-gradient-sky`, `--color-gradient-rose`

## Animation Patterns

- Entry: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}`
- Scroll reveal: `whileInView` + `viewport={{ once: true, amount: 0.15 }}`
- Tap feedback: `whileTap={{ scale: 0.96 }}` or `whileTap={{ scale: 0.97 }}`
- Hover lift: `whileHover={{ scale: 1.02 }}`
- Hardware-accelerated only: `opacity` + `transform` — never `width`, `height`, `top`, `left`
- Reduced motion: `<MotionConfig reducedMotion="user">` wraps animated sections
- Hero text: staggered `y: "110%" → "0%"` clip reveal per line

## Notable HeroSection Internals

- `HeroBrowserCard`: floating Stratos CRM dashboard mockup — metric tiles, revenue SVG chart, recent deals list
- `DashboardChart`: custom SVG chart; uses `useId()` to prevent gradient ID collisions
- `HeroBackground`: 5 atmospheric radial gradients + 2 animated blur orbs + dot grid
- `browserCardY`: `useTransform(scrollY, [0, 500], [0, -55])` — parallax on scroll

## Navbar Internals

- `useScrollSpy`: IntersectionObserver on `["services", "process", "faq"]`, resets on pathname change
- Mobile: animated drawer via `AnimatePresence` + slide-down panel
- Desktop: underline indicator slides between active nav items

## Layout

- `LayoutShell` checks `pathname === "/contact"` → bare layout (no Navbar, no Footer) on contact page
- Root `<body>` class: `min-h-full flex flex-col bg-bg-canvas text-brand-dark`
- JSON-LD `ProfessionalService` schema injected in `<head>` via `layout.tsx`
