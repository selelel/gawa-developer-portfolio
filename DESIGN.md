---
name: Gawa Developer
description: A Zapier-inspired warm-confidence design — cream canvas (#fffefb), deep coffee ink (#201515), and a single saturated orange CTA (#ff4f00); display type pairs a geometric sans at hero scale with Inter for sub-displays and body, giving the brand a confident-warm rather than cool-tech voice.

colors:
  primary: "#ff4f00"
  on-primary: "#fffefb"
  ink: "#201515"
  ink-soft: "#2f2a26"
  ink-mid: "#36342e"
  body: "#605d52"
  body-mid: "#939084"
  mute: "#c5c0b1"
  canvas: "#fffefb"
  canvas-soft: "#f8f4f0"

typography:
  display-xl:
    fontFamily: "Mona Sans, Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.01em"
  display-lg:
    fontFamily: "Mona Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 500
    lineHeight: 1
  display-md:
    fontFamily: "Mona Sans, Inter, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 500
    lineHeight: 1.125
    letterSpacing: "0.0625rem"
  display-sub-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1.04
  display-sub-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.25
  display-sub-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025rem"
  display-xs:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025rem"
  body-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01rem"
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  body-md-strong:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.5
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-sm-strong:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow-uppercase:
    fontFamily: "Mona Sans, Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.0625rem"
  button-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.5
  button-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.009rem"

rounded:
  none: "0px"
  sm: "6px"
  md: "12px"
  pill: "9999px"
  full: "9999px"

spacing:
  xxs: "2px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  4xl: "64px"

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  card-content:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-feature-cream:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-feature-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  hero-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  content-band-cream:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.xl}"
  content-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.xl}"
  badge-pill:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
---

# Design System: Gawa Developer

## Overview

**Creative North Star: "The Confident Workshop"**

Gawa Developer's design language borrows the calm authority of a mature, well-run service brand — the kind that doesn't need to shout because its track record speaks. The palette is warm but not decorative: a cream-white canvas `{colors.canvas}` (`#fffefb`) that is slightly warmer than clinical, a deep coffee-brown ink `{colors.ink}` (`#201515`) that is slightly warmer than pure black, and a single saturated orange CTA `{colors.primary}` (`#ff4f00`) that signals action without aggression. Temperature is the voice.

Typography delivers the second signal. The display face — Mona Sans at weight 500 (substituting Zapier's proprietary Degular Display) — carries hero and section headings. Inter handles sub-displays, body, buttons, and eyebrows. The two-face pairing reads as "the brand has a distinct voice for the loud moments and uses the workhorse for the rest." Confident, not flashy.

The brand rejects the blue-and-slate developer cliché, gradient-heavy SaaS hero dashboards with hero-metric stat blocks, overcrowded agency sites that list forty services without landing on a promise, and the clinical white-on-obsidian dark-mode portfolio aesthetic. Warmth is deliberate. It signals that Gawa builds software for businesses — approachable competence, not terminal aesthetics.

**Key Characteristics:**
- Orange CTA accent `{colors.primary}` (`#ff4f00`) — the single conversion signature. High visibility, high intent.
- Warm cream canvas `{colors.canvas}` (`#fffefb`) — not pure white. The temperature IS the brand voice.
- Deep coffee ink `{colors.ink}` (`#201515`) — not pure black. Warmth carries through every text color.
- Mona Sans (weight 500) for hero and section displays; Inter for everything else. Two-face system.
- `{rounded.md}` 12px for buttons and cards — the brand's middle-radius signature. Not pills, not square.
- A muted cream/coffee neutral ladder where every neutral carries warmth and none are cool grey.

## Colors

A warm trio: cream canvas, coffee ink, and saturated orange. Every neutral is tinted toward warmth — none borrow from cool-slate conventions.

### Primary

- **Gawa Orange** (`{colors.primary}` — `#ff4f00`): The single conversion accent. Every primary CTA button, every action trigger. Saturated and warm — distinct from the blue and teal language of competing dev agencies.
- **Cream White** (`{colors.on-primary}` — `#fffefb`): On-primary text — appears on orange buttons and dark bands.

### Neutral

- **Coffee Ink** (`{colors.ink}` — `#201515`): Deep warm near-black. Every heading, every primary text. The brand's authority color — not cold black.
- **Ink Soft** (`{colors.ink-soft}` — `#2f2a26`): Near-black with brown warmth. Sub-headings and strong body emphasis.
- **Ink Mid** (`{colors.ink-mid}` — `#36342e`): Mid-emphasis text in dark contexts.
- **Body** (`{colors.body}` — `#605d52`): Default body text on cream canvas. Warm grey-brown — contrast ≥4.5:1 against `{colors.canvas}`.
- **Body Mid** (`{colors.body-mid}` — `#939084`): Secondary body, metadata, captions. Warm desaturated mid-tone.
- **Mute** (`{colors.mute}` — `#c5c0b1`): Lowest-priority text — fine print, placeholder text, subtle dividers.
- **Canvas** (`{colors.canvas}` — `#fffefb`): Page background. Warm off-white — the defining temperature signal.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f8f4f0`): Cards, inset regions, alternating sections. One step darker and warmer than canvas.

**The One Voice Rule.** `{colors.primary}` orange appears on one element per viewport: the primary CTA. Every additional orange element dilutes the conversion signal.

**The Warmth Rule.** No cool-grey neutral enters this system. Every neutral — from `{colors.canvas}` to `{colors.mute}` — must carry warmth. Slate-50 and slate-100 read as cold; canvas-soft and mute do not.

## Typography

**Display Font:** Mona Sans (Inter at weight 500 as web-safe fallback, system-ui)
**Body Font:** Inter (system-ui fallback)

**Character:** Mona Sans is a geometric variable sans with subtle warmth in its proportions — closer to Degular Display's confident-warm register than a cold geometric like Helvetica. Inter handles all sub-display and body roles. The two-face system creates a clear hierarchy: the brand has a voice for big moments and a workhorse for the rest.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | clamp(2.5rem, 7vw, 3.5rem) | 500 | 1 | −0.01em | Hero headline (Mona Sans) |
| `{typography.display-lg}` | clamp(2rem, 5vw, 3rem) | 500 | 1 | 0 | Section display headlines (Mona Sans) |
| `{typography.display-md}` | 2rem | 500 | 1.125 | +0.0625rem | Sub-section displays (Mona Sans, positive tracking) |
| `{typography.display-sub-lg}` | 3rem | 500 | 1.04 | 0 | Inter-rendered sub-display |
| `{typography.display-sub-md}` | 2rem | 400 | 1.25 | 0 | Inter sub-display |
| `{typography.display-sub-sm}` | 1.5rem | 600 | 1.25 | −0.025rem | Card titles (Inter, semibold) |
| `{typography.body-lg}` | 1.25rem | 400 | 1.5 | −0.01rem | Lead paragraphs |
| `{typography.body-md}` | 1.125rem | 400 | 1.5 | 0 | Default body text; max-width 65–72ch |
| `{typography.body-sm}` | 1rem | 400 | 1.5 | 0 | Secondary body, nav links |
| `{typography.caption}` | 0.875rem | 400 | 1.5 | 0 | Fine print, metadata |
| `{typography.eyebrow-uppercase}` | 0.875rem | 500 | 1 | +0.0625rem | UPPERCASE kicker (Mona Sans, positive tracking) |
| `{typography.button-md}` | 1.125rem | 600 | 1.5 | 0 | Primary button label |
| `{typography.button-sm}` | 0.9rem | 700 | 1 | +0.009rem | Small button label |

**The Two-Face Rule.** Mona Sans for displays and eyebrows; Inter for everything else. Do not use Mona Sans at body sizes — the proportions are optimized for display, not reading.

**The Sentence-Case Rule.** Display and headline copy is always sentence-case. All-caps is reserved for `{typography.eyebrow-uppercase}` labels only.

## Elevation

The system uses tonal layering as its primary depth signal. Surfaces step through the warm neutral ladder — canvas → canvas-soft — rather than relying on shadow intensity. Shadows are minimal, diffuse, and functional.

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Canvas | `{colors.canvas}` `#fffefb` — no shadow, no border | Hero, primary page sections |
| Level 1 — Soft Card | `{colors.canvas-soft}` `#f8f4f0` fill against canvas — surface contrast carries elevation | Default content cards, feature cards, alternating sections |
| Level 2 — Hairline | 1px solid `{colors.ink}` border | Pricing cards, outline buttons, form inputs — structural separation only |
| Level 3 — Dark Inversion | `{colors.ink}` `#201515` fill — full tonal flip | Footer, dark CTA bands, polarity-flipped feature cards |

**The Flat-By-Default Rule.** Surfaces are flat at rest. No shadows on static content cards — tonal elevation handles depth. Shadows appear only on floating elements (tooltips, popovers, sticky nav on scroll).

## Components

### Buttons

The brand uses a 12px rounded rectangle — not a pill, not square. The radius signals approachability without softness.

- **Shape:** `{rounded.md}` 12px. Minimum height 48px for WCAG touch-target compliance.
- **Primary (`button-primary`):** Orange fill (`{colors.primary}` `#ff4f00`), warm white label (`{colors.on-primary}` `#fffefb`), `{typography.button-md}` 1.125rem semibold. Hover: darken via brightness filter or `#e64500`. Focus-visible: 2px orange ring with 2px offset.
- **Secondary (`button-secondary`):** Coffee ink fill (`{colors.ink}` `#201515`), warm white label. Same radius, typography, and padding. Used in dark-section bands.
- **Tertiary (`button-tertiary`):** Cream fill (`{colors.canvas}`), ink label, 1px solid ink border. The brand's outline button for lower-emphasis actions.
- **Tap feedback:** `whileTap={{ scale: 0.98 }}` spring animation via motion/react. No bounce, no elastic.

### Cards

- **Corner style:** `{rounded.md}` 12px. Consistent across the system.
- **Default card (`card-content`):** `{colors.canvas-soft}` background, `{spacing.xl}` 24px padding. Used for service cards, process steps, FAQ answers.
- **Feature cream (`card-feature-cream`):** Same as default. Hosts headline + body + optional icon.
- **Feature dark (`card-feature-dark`):** `{colors.ink}` background, `{colors.on-primary}` text. Used for high-emphasis feature callouts.

### Inputs & Forms

- **Style:** Canvas background, 1px solid `{colors.ink}` border, `{rounded.sm}` 6px radius.
- **Focus:** 2px ring in `{colors.primary}` with 10% orange tint on background. The orange focus state signals the form is a conversion event.
- **Placeholder:** `{colors.mute}` `#c5c0b1` — contrast ≥4.5:1 against canvas verified.
- **Error:** Border shifts to `{colors.primary}` orange with inline error message below.
- **Label:** `{typography.body-sm}` weight 600, `{colors.ink}`, above each field.

### Navigation

- **Style:** Cream canvas background, coffee ink links in `{typography.body-sm}`. The "Start Your Project" CTA is a primary button at all times.
- **Scroll state:** Thin 1px bottom border in `{colors.canvas-soft}` separates the nav from content.
- **Mobile:** Hamburger trigger into full-width slide-down menu. Touch targets minimum 48px.

### Signature Components

**`hero-band`** — Cream hero section. Background `{colors.canvas}`, headline in `{typography.display-xl}` Mona Sans weight 500. Hero is split at desktop (text left, visual right) and stacked at mobile. No large gradient blobs — geometry and type carry the section.

**`content-band-cream`** — Cream alternating section. Background `{colors.canvas-soft}`. Section headline in `{typography.display-lg}`.

**`content-band-dark`** — Dark inversion section for the final CTA band. Background `{colors.ink}`, headline and CTA in `{colors.on-primary}`. Orange CTA button stands against the deep ink.

**`footer`** — Deep coffee footer. Background `{colors.ink}`, text `{colors.on-primary}` at varying opacities for hierarchy.

**`eyebrow-uppercase`** — Small UPPERCASE Mona Sans kicker above select headings. Text `{colors.ink}`, `{typography.eyebrow-uppercase}` 14px / 500 / +1px tracking. Used sparingly — not above every section.

**`badge-pill`** — Pill tag for metadata, capability labels. `{colors.canvas-soft}` background, `{colors.ink}` text, `{rounded.pill}` radius.

## Do's and Don'ts

### Do

- **Do** reserve `{colors.primary}` orange for the primary CTA only. One orange element per viewport — its scarcity is the conversion signal.
- **Do** keep the canvas warm — `{colors.canvas}` `#fffefb`, not pure white. The temperature IS the brand voice. Pure `#ffffff` breaks the warmth.
- **Do** set hero headlines in `{typography.display-xl}` Mona Sans weight 500. Sentence-case, never all-caps.
- **Do** pair Mona Sans (displays, eyebrows) with Inter (body, labels, buttons). Two faces, two roles, strict separation.
- **Do** use `{rounded.md}` 12px for buttons and cards. The middle radius is the brand's shape signature.
- **Do** use motion/react spring physics for interaction feedback — `whileTap={{ scale: 0.98 }}` on buttons, staggered `whileInView` entrances for section content.
- **Do** cap body text at 65–72ch maximum width. Wide text is not easier to read.

### Don't

- **Don't** replace cream canvas with pure white `#ffffff` or cool slate-50. Warmth carries through every surface — losing it breaks the brand voice.
- **Don't** use pure black `#000000` ink. The coffee-warmth in `{colors.ink}` `#201515` carries through every text color.
- **Don't** render CTAs as pills (`border-radius: 9999px`). The brand's button is a 12px rounded rectangle — pill shape is a different aesthetic register.
- **Don't** introduce a second chromatic accent. Orange + cream + coffee is the complete palette. Blue, teal, purple, and green are not brand colors.
- **Don't** use cool-grey neutrals (slate-50, slate-100, slate-200 from Tailwind). Every neutral must carry warmth. Replace with `{colors.canvas-soft}` and `{colors.mute}`.
- **Don't** build gradient-heavy hero sections with large metric stat dashboards. That is the SaaS template anti-reference this brand rejects.
- **Don't** list all services in a wall of icon + heading + text cards with identical dimensions. Vary treatment and hierarchy.
- **Don't** use `border-left` stripes as card decoration. Side-stripe cards are AI scaffolding. Use background tints or nothing.
- **Don't** animate layout properties (`width`, `height`, `top`, `left`, `margin`). All animation must use hardware-accelerated `transform` and `opacity` only.
