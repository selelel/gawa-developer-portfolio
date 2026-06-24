# Gawa Developer Portfolio — Claude Context

## Project Overview

**Gawa Developer** is a software development agency website, not a personal portfolio. Its sole purpose is to convert visitors into paying clients through professional presentation, trust signals, and clear calls-to-action.

- **Company name:** Gawa Developer
- **Tagline:** Build Better Software. Grow Faster.
- **Mission:** Help businesses transform ideas into scalable digital products through modern software engineering and thoughtful design.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Runtime | React 19 |
| Package Manager | pnpm |

Run dev server: `pnpm dev`
Build: `pnpm build`
Lint: `pnpm lint`

## Page Structure

The site has **exactly two pages**:

1. **`/` — Landing Page** (`app/page.tsx`) — introduces the company, services, process, projects, tech stack, FAQs, and a final CTA.
2. **`/contact` — Contact Page** (`app/contact/page.tsx`) — lead generation form for project inquiries.

No other pages should be added without explicit instruction.

## Landing Page Sections (in order)

1. **Hero** — headline, subheadline, "Start Your Project" (primary CTA → /contact), "View Services" (secondary, scrolls to services)
2. **Services** — Custom Web Apps, Mobile Apps, SaaS, CRM/ERP, AI Integrations, API Dev, Automation, UI/UX, Maintenance
3. **Why Choose Us** — trust signals: modern practices, scalable architecture, clean code, fast comms, security, transparency, long-term support
4. **Development Process** — 7 steps: Discovery → Planning → Design → Development → Testing → Deployment → Continuous Support
5. **Featured Projects** — case studies: image, challenge, solution, tech used, business impact
6. **Technology Stack** — visual grid: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, Supabase, Tailwind CSS, Docker, AWS, Vercel
7. **FAQ** — pricing, timelines, maintenance, custom dev, upgrades, communication
8. **Final CTA** — "Ready to build software that helps your business grow?" with link to /contact

## Contact Page

A lead generation form with:
- Name (required)
- Company (optional)
- Email (required)
- Phone (optional)
- Service Needed (select)
- Estimated Budget (select)
- Desired Timeline (select)
- Project Description (textarea, required)

After submission: show a friendly confirmation message (no page redirect needed).

## Navigation

Minimal nav: **Home** | **Contact**. The primary CTA ("Start Your Project") should always be visible in the header.

## Brand & Design Rules

- **Colors:** Soft reds as the primary accent; neutral (white/dark gray/slate) backgrounds; clean typography.
- **Style:** Minimalist with subtle futuristic aesthetics. No garish gradients or heavy drop shadows.
- **Animations:** Smooth and understated. Performance first — no layout-shifting or janky effects.
- **Tone:** Clear, professional, confident, friendly, business-oriented. Emphasize outcomes, not raw tech capabilities.
- **Responsive:** Desktop, tablet, and mobile. Mobile-first preferred.
- **Accessibility:** Semantic HTML, sufficient color contrast, keyboard-navigable.
- **SEO:** Proper meta tags, semantic headings, descriptive alt text.

## Target Audience

Startup founders, SMBs, enterprise teams, agencies, SaaS entrepreneurs, companies needing custom tools or automation.

## Conversion Goal

Every section should guide users toward: **request a consultation → submit a project inquiry → become a qualified lead.**

## Success Criteria (User Journey)

1. Arrive on Landing Page
2. Understand the offering within seconds
3. Explore services and expertise
4. Build trust via process, projects, and tech
5. Click the primary CTA
6. Reach the Contact Page
7. Submit a project inquiry
8. Become a qualified lead

## Coding Conventions

- Use the **App Router** (`app/` directory) exclusively — no `pages/` directory.
- Prefer **Server Components** by default; use `"use client"` only when interactivity requires it.
- Co-locate section components in `app/components/` or `app/_components/`.
- No unnecessary abstraction — build what the section needs, not a generic system.
- No comments unless the WHY is non-obvious.
- Tailwind classes only for styling — no inline styles, no CSS Modules unless Tailwind cannot cover the case.

---

## Frontend Architecture Mandate

Act as an elite mobile-first frontend architect specializing in Google Mobile-First Indexing SEO, high-conversion mobile UX, and performance-tuned motion.dev (Framer Motion) interactions.

### 1. Mobile-First Layout & Architecture

- Design completely from the mobile view upward — stacked single-column grids by default, expanding to 2 or 3 columns only at `md`/`lg` breakpoints.
- Retain an airy white space aesthetic with subtle borders (`#e2e8f0`) and floating card styles, scaling font sizes dynamically via fluid `clamp()` sizing so headers never wrap awkwardly on small viewports.
- **Core Palette:**
  - Canvas white: `#ffffff`
  - Obsidian Black: `#09090b` (key blocks / dark sections)
  - Soft Red: `#e11d48` (high-intent interactive states, CTAs, accents)

### 2. Mobile UX & Mobile-First SEO

- **Touch Targets:** All interactive elements (buttons, form inputs, nav links) must have a minimum hit target of `48×48px` with generous spacing to prevent accidental taps.
- **CLS Prevention:** Eliminate Cumulative Layout Shift on mobile by assigning explicit `aspect-ratio` values to placeholder content, tech logos, and card grids.
- **Font Delivery:** Use system-fallback font stacks in CSS declarations to prevent FOIT (invisible text flash) and protect mobile LCP scores.

### 3. Rich Snippets, Metadata & Mobile Crawlability

Every page must include declarative configuration for:

- **Structured Data (JSON-LD):**
  - Landing page: `ProfessionalService` schema
  - FAQ section: `FAQPage` schema
- **Viewport Meta:** `width=device-width, initial-scale=1, shrink-to-fit=no`
- **OpenGraph / Twitter Cards:** Optimized for micro-messaging previews on mobile apps (concise `og:title`, `og:description`, `og:image` at 1200×630).

### 4. motion.dev Animations (Mobile-Processor Optimized)

- **Hardware Acceleration:** Restrict animations to `opacity` and `transform: translate3d(...)` only — never animate `width`, `height`, `top`, `left`, or layout-triggering properties.
- **Scroll Triggers:** Use `whileInView` with `viewport={{ once: true, amount: 0.15 }}` so elements fade/slide in as the user scrolls without stuttering on older mobile chipsets.
- **Tap Feedback:** Apply `whileTap={{ scale: 0.96 }}` with a spring config on all interactive elements to simulate native mobile app responsiveness.
- **Entry animations:** Prefer `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` with `transition={{ duration: 0.4, ease: "easeOut" }}` as the standard entry pattern.
