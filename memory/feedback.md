# Feedback — Gawa Developer Portfolio

Validated patterns and corrections from prior sessions.

---

## CLAUDE.md accent color is stale — globals.css is the source of truth

CLAUDE.md says "soft reds as the primary accent." This is outdated. The accent was changed to steel trust blue `#3567a0` on 2026-06-26. Always read `globals.css @theme` for current token values; never use CLAUDE.md color specs as ground truth.

---

## Red is kept only for semantic and aria-hidden mockup use

Do not reintroduce red as an interactive accent color. The only valid uses of red in this project:
- `--color-semantic-error: #dc2626` — form validation errors
- Status indicators inside `aria-hidden` mockups (e.g., "Delayed" status in FeaturedProjectsSection bar chart) — intentional semantic color, not brand

---

## motion/react, not framer-motion

Always import from `"motion/react"`. The `framer-motion` package is the old import path — using it will cause a mismatch or double-bundle.

---

## Animate only opacity and transform — never layout properties

Hardware-accelerated animations only. Never animate `width`, `height`, `top`, `left`, `margin`, `padding`, or any property that triggers layout recalc. Scroll-triggered animations must use `whileInView` with `viewport={{ once: true }}` to avoid re-triggering on scroll back.

---

## whileInView animations must include viewport={{ once: true }}

Without `once: true`, animations re-fire every time the element enters the viewport. Always set `viewport={{ once: true, amount: 0.15 }}` for scroll-triggered reveals.

---

## TechStackSection exists in the app but is not in the CLAUDE.md section list

`TechStackSection.tsx` is rendered between FeaturedProjectsSection and FAQSection in `app/page.tsx`. CLAUDE.md omits it. The actual section order in `page.tsx` is the source of truth.

---

## LayoutShell bare-layout check must use strict equality

`pathname === "/contact"` — not `pathname.startsWith("/contact")`. The contact page is the only bare-layout route. Do not generalize this to a pattern unless explicitly asked.
