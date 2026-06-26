---
version: 1
name: Gawa Developer
description: Software development agency site. Off-white (#f5f5f5) canvas, warm near-black ink (#0c0a09), and a muted steel trust blue (#3567a0) accent. EB Garamond for editorial display authority; Inter for legibility and precision. Trust earned through restraint — not saturation.

colors:
  brand-primary: "#292524"
  brand-primary-hover: "#0c0a09"
  brand-dark: "#0c0a09"
  brand-light: "#f5f5f5"
  bg-canvas: "#f5f5f5"
  bg-surface: "#ffffff"
  bg-muted: "#f0efed"
  bg-dark-elevated: "#1c1917"
  text-primary: "#0c0a09"
  text-secondary: "#4e4e4e"
  text-muted: "#6b6a63"
  border-subtle: "#e7e5e4"
  accent: "#3567a0"
  accent-hover: "#2a5286"
  gradient-mint: "#a7e5d3"
  gradient-peach: "#f4c5a8"
  gradient-lavender: "#c8b8e0"
  gradient-sky: "#a8c8e8"
  gradient-rose: "#e8b8c4"
  gradient-amber: "#e3c878"
  semantic-error: "#dc2626"
  semantic-success: "#16a34a"

typography:
  display-hero:
    fontFamily: "'EB Garamond', 'Times New Roman', Georgia, serif"
    fontSize: 76px
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: -0.01em
    note: "Fluid via clamp(2.5rem, 5.5vw, 4.75rem)"
  display-section:
    fontFamily: "'EB Garamond', 'Times New Roman', Georgia, serif"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -0.01em
    note: "Fluid via clamp(1.75rem, 4vw, 2.75rem)"
  display-compact:
    fontFamily: "'EB Garamond', 'Times New Roman', Georgia, serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: -0.01em
    note: "Fluid via clamp(1.4rem, 3vw, 1.875rem)"
  display-metric:
    fontFamily: "'EB Garamond', 'Times New Roman', Georgia, serif"
    fontSize: 88px
    fontWeight: 400
    lineHeight: 1.00
    letterSpacing: -0.02em
    note: "Large editorial numbers. clamp(3.5rem, 8vw, 5.5rem)"
  title-md:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-md:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0.16px
  body-sm:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: 0.15px
  label-uppercase:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0.08em
    textTransform: uppercase
  button:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: 0
  nav-link:
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0

rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 12px
  card: 16px
  xl: 20px
  xxl: 24px
  pill: 9999px

spacing:
  xs: 8px
  sm: 12px
  base: 16px
  md: 20px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.brand-primary}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
    height: 40px
  button-primary-hover:
    backgroundColor: "{colors.brand-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
    height: 40px
  button-accent-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 9px 19px
    height: 40px
    border: "1px solid {colors.border-subtle}"
  button-white-on-dark:
    backgroundColor: "#ffffff"
    textColor: "{colors.brand-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 40px
    height: 56px
  top-nav:
    backgroundColor: "{colors.bg-canvas}"
    textColor: "{colors.text-primary}"
    typography: "{typography.nav-link}"
    height: 64px
  top-nav-scrolled:
    backgroundColor: "{colors.bg-canvas}"
    textColor: "{colors.text-primary}"
    height: 64px
  card-reason:
    backgroundColor: "{colors.bg-canvas}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.card}"
    padding: 28px
    border: "1px solid {colors.border-subtle}"
  accordion-item-closed:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: 20px 24px
    border: "1px solid {colors.border-subtle}"
  accordion-item-open:
    backgroundColor: "rgba(53,103,160,0.08)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: 20px 24px
    border: "1px solid rgba(53,103,160,0.30)"
  text-input:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
    border: "1px solid {colors.border-subtle}"
  badge-pill:
    backgroundColor: "{colors.bg-muted}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  tech-badge:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
    border: "1px solid {colors.border-subtle}"
    typography: "{typography.body-sm}"
  footer:
    backgroundColor: "{colors.brand-dark}"
    textColor: "#ffffff"
    typography: "{typography.body-sm}"
    padding: 48px
---

## 1. Overview: The Precision Workbench

Gawa Developer is a software development agency — not a personal portfolio. The site's sole job is to convert visitors into qualified leads by projecting calm technical authority.

The design reads like a precision workshop at first light: clean surfaces, clear purpose, every element deliberate. **EB Garamond** at weight 400 carries the display copy — an editorial serif that signals considered craft without shouting. **Inter** handles body, navigation, forms, and CTAs — precision and legibility for all the surfaces that need to work.

The canvas is off-white (`{colors.bg-canvas}` — #f5f5f5). Near-black ink (`{colors.brand-dark}` — #0c0a09) provides the primary CTA pill. The accent is a muted **steel trust blue** (`{colors.accent}` — #3567a0): measured, professional, trustworthy — not electric, not generic SaaS cobalt. It appears on interactive states, FAQ accents, and trust-signal highlights. Six atmospheric gradient orbs (mint, peach, lavender, sky, rose, amber) drift through section backgrounds as the only chromatic decoration — they carry no content. Sky and amber anchor the dark tech-stack and process sections; mint and lavender anchor the hero; peach and rose warm the light content sections.

**Key characteristics:**
- Off-white canvas, near-black ink. Primary conversion CTAs use the ink pill (#292524).
- Steel trust blue (#3567a0) as the accent — for trust signals, accent CTAs, open accordion states, `text-accent` emphasis on copy.
- EB Garamond weight 400 for all display copy — editorial gravity, never bold.
- Inter 400/500 for body, navigation, forms. Subtle letter-spacing (+0.15–0.16px) maintains editorial feel.
- Atmospheric gradient orbs (mint/peach/lavender/sky/rose/amber) as decoration only — never content containers.
- Pill geometry (`{rounded.pill}`) for all CTAs and badges; 16px radius (`{rounded.card}`) for content cards.
- 96px section rhythm with generous editorial pacing.

## 2. Colors: The Trust Blue Palette

### Brand & Primary Actions
- **Brand Primary** (`{colors.brand-primary}` — #292524): The ink CTA pill. Used for main conversion CTAs — "Start Your Project", "Submit Inquiry". Never orange or saturated.
- **Brand Dark** (`{colors.brand-dark}` — #0c0a09): Deepest ink. Scrolled nav background, FinalCTA band, pressed ink pill state, `text-primary`.

### Accent — Steel Trust Blue
- **Accent** (`{colors.accent}` — #3567a0): The trust signal blue. Used for `text-accent` italic copy highlights, `bg-accent` on accent CTAs, `border-accent` on active accordion items, and outcome callout borders. Contrast: 5.4:1 on canvas (passes AA for normal text); 4.1:1 with white text (passes AA for large text and bold buttons).
- **Accent Hover** (`{colors.accent-hover}` — #2a5286): Deeper steel for hover states, focus rings, and small-text use on light backgrounds (7.2:1 on canvas).

### Surface
- **Canvas** (`{colors.bg-canvas}` — #f5f5f5): Page floor. Off-white — neutral, not warm.
- **Surface** (`{colors.bg-surface}` — #ffffff): Pure white for cards, form inputs, and open accordion items.
- **Muted** (`{colors.bg-muted}` — #f0efed): Subtle alternating bands, badge fills, tech-badge backgrounds.
- **Dark Elevated** (`{colors.bg-dark-elevated}` — #1c1917): Raised card surfaces on dark section bands.

### Text
- **Text Primary** (`{colors.text-primary}` — #0c0a09): Headings, labels, primary body. Contrast: 19:1 on canvas.
- **Text Secondary** (`{colors.text-secondary}` — #4e4e4e): Running body text, card descriptions. Contrast: 9.5:1 on canvas.
- **Text Muted** (`{colors.text-muted}` — #6b6a63): Sub-labels, step numbers, placeholder text. Contrast: 5.2:1 on canvas.

### Structural
- **Border Subtle** (`{colors.border-subtle}` — #e7e5e4): Default 1px card outlines, section dividers, accordion borders.

### Atmospheric Gradient Stops
- **Mint** (`{colors.gradient-mint}` — #a7e5d3) · **Peach** (`{colors.gradient-peach}` — #f4c5a8) · **Lavender** (`{colors.gradient-lavender}` — #c8b8e0) · **Sky** (`{colors.gradient-sky}` — #a8c8e8) · **Rose** (`{colors.gradient-rose}` — #e8b8c4) · **Amber** (`{colors.gradient-amber}` — #e3c878)

Used ONLY as soft radial-gradient atmospheric orbs in background decorations. Never as button fills, never as text colors.

### Semantic
- **Error** (`{colors.semantic-error}` — #dc2626): Form validation errors.
- **Success** (`{colors.semantic-success}` — #16a34a): Confirmation states.

## 3. Typography

### Font Families
**EB Garamond** (Google Fonts, weight 400) carries every display headline. Its editorial voice at weight 400 reads with authority and warmth without feeling heavy. **Inter** (Google Fonts, weights 400/500/600) handles body, navigation, forms, buttons. The contrast axis is serif editorial authority vs. sans-serif precision.

### Scale

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.display-hero}` | EB Garamond | clamp(2.5rem,5.5vw,4.75rem) | 400 | 1.06 | −0.01em | Hero h1 |
| `{typography.display-section}` | EB Garamond | clamp(1.75rem,4vw,2.75rem) | 400 | 1.10 | −0.01em | Section h2 |
| `{typography.display-compact}` | EB Garamond | clamp(1.4rem,3vw,1.875rem) | 400 | 1.17 | −0.01em | Project titles, card h3 |
| `{typography.display-metric}` | EB Garamond | clamp(3.5rem,8vw,5.5rem) | 400 | 1.00 | −0.02em | Editorial impact numbers |
| `{typography.title-md}` | Inter | 20px | 500 | 1.35 | 0 | Card titles, service names |
| `{typography.body-md}` | Inter | 16px | 400 | 1.50 | +0.16px | Default body copy |
| `{typography.body-sm}` | Inter | 15px | 400 | 1.47 | +0.15px | Footer, captions, card body |
| `{typography.label-uppercase}` | Inter | 10px | 600 | 1.40 | +0.08em + uppercase | Field labels, classifier badges |
| `{typography.button}` | Inter | 15px | 600 | 1.00 | 0 | All CTA labels |
| `{typography.nav-link}` | Inter | 15px | 500 | 1.40 | 0 | Navigation links |

### Principles
- **EB Garamond stays at weight 400.** Bolding display copy shifts from editorial authority to consumer-marketing loudness.
- **Fluid sizing via `clamp()`.** Headings scale gracefully between mobile and desktop — no jarring jump at breakpoints.
- **Body line length cap.** Running copy uses `max-w-[58ch]` to `max-w-[65ch]`.
- **`text-wrap: balance` on h1–h3.** Even line breaks; no orphan headlines.
- **Italic EB Garamond** for accent emphasis within display copy — `<em>` wrapped words in `text-accent` (#3567a0). One italic phrase per headline maximum.

## 4. Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Canvas | `{colors.bg-canvas}` (#f5f5f5) | Page bands, section floors |
| Surface | `{colors.bg-surface}` (#ffffff) | Content cards, form inputs |
| Card border | 1px `{colors.border-subtle}` | Card outlines at rest |
| Card shadow | `0px 4px 16px rgba(0,0,0,0.04)` | Resting floating cards |
| Hover lift | `0 8px 32px rgba(0,0,0,0.07)` | WhyChooseUs card hover state |
| Dark band | `{colors.brand-dark}` (#0c0a09) | FinalCTA section, scrolled nav |
| Dark elevated | `{colors.bg-dark-elevated}` (#1c1917) | Cards on dark-band surfaces |
| Atmospheric orb | Radial gradient, one of `{colors.gradient-*}` | Background decoration only |

### Accent tint layers
- `bg-accent/8` (rgba(53,103,160,0.08)): Open accordion background, light-surface badge fill
- `border-accent/30` (rgba(53,103,160,0.30)): Open accordion border, outcome callout border
- `bg-accent/5` (rgba(53,103,160,0.05)): Outcome block fill in project case studies

## 5. Components

### Navigation
**`{components.top-nav}`** (transparent at page top) → **`{components.top-nav-scrolled}`** (`{colors.bg-canvas}` at 95% opacity + `backdrop-blur-md` + 1px `{colors.border-subtle}` bottom border) on scroll. Height 64px. Wordmark left; section links (Services · Process · FAQ · Contact) absolutely centered so the nav is truly equidistant from logo and CTA at all widths; ink pill CTA right. Live scrollspy drives a sliding `layoutId` underline that highlights the active section. Mobile: wordmark + hamburger (48×48 touch target); opens a frosted-glass panel with stacked links and a full-width CTA. Focus trap and Escape-key return are implemented.

### Buttons
**`{components.button-primary}`** — Ink pill. Background `{colors.brand-primary}`, white text, `{typography.button}`, `{rounded.pill}`, height 40px. The primary conversion CTA.

**`{components.button-accent}`** — Blue accent pill. Background `{colors.accent}` (#3567a0), white text. Same shape as primary. Used for accent CTAs inside sections (FAQ). Hover: `{colors.accent-hover}`.

**`{components.button-ghost}`** — Transparent pill, 1px `{colors.border-subtle}` border, `{colors.text-primary}` text. Secondary action in hero. Hover: border darkens to `{colors.brand-primary}`.

**`{components.button-white-on-dark}`** — White background, `{colors.brand-dark}` text. Used on the obsidian FinalCTA band. Height 56px, padding 16px × 40px.

### Cards
**`{components.card-reason}`** — WhyChooseUs grid. Background `{colors.bg-canvas}`, 1px `{colors.border-subtle}`, `{rounded.card}`, padding 28px. Icon in `{colors.bg-muted}` rounded square, title in Inter 500 (`{typography.title-md}`), body in Inter 400 (`{typography.body-md}`) `{colors.text-secondary}`. Hover: shadow lifts.

**`{components.accordion-item-closed}` / `{components.accordion-item-open}`**
- Closed: `{colors.bg-surface}`, `1px {colors.border-subtle}`, `{rounded.card}`, padding 20px × 24px.
- Open: `bg-accent/8`, `border-accent/30`, same shape. Chevron rotates 180° on open.

**`{components.tech-badge}`** — Pill chip. `{colors.bg-surface}`, 1px `{colors.border-subtle}`, `{typography.body-sm}` `{colors.text-secondary}`. Sits inline in project case studies below tech stack list.

### Forms
**`{components.text-input}`** — White background, 1px `{colors.border-subtle}`, `{rounded.md}` (8px), height 44px. Focus: border changes to 1px `{colors.accent}`. Error: 1px `{colors.semantic-error}`. Labels in Inter 500 16px.

### Footer
**`{components.footer}`** — `{colors.brand-dark}` background, white text. 4-column grid at desktop (Gawa Dev column + 3 link columns), stacked on mobile. `{typography.body-sm}` links, muted on hover.

## 6. Do's and Don'ts

### Do
- Use `{colors.accent}` (#3567a0) for trust signals: accent CTA pills, `text-accent` italic emphasis, FAQ open states, outcome callout borders. It is the page's one saturated moment — use it deliberately.
- Use the ink pill (`{colors.brand-primary}`) for primary conversion CTAs — "Start Your Project", "Submit Inquiry". It earns attention through placement and hierarchy, not color.
- Use EB Garamond at weight 400 for all display headings. One italic word per headline, colored `text-accent`, for key copy emphasis.
- Use Inter 400/500 for body, nav, forms. Keep body letter-spacing at +0.15–0.16px.
- Use `clamp()` for all heading sizes. Cap body width at 58–65ch.
- Use `text-wrap: balance` on h1–h3.
- Keep cards flat at rest. Shadow is the hover-state signal.
- Use atmospheric orbs (mint/peach/lavender/sky/rose/amber) only as radial background decoration behind copy — never as content fills. Sky and amber belong on dark sections (Process, TechStack, FinalCTA); mint/peach/lavender/rose on light sections.
- Apply `whileInView` with `viewport={{ once: true, amount: 0.15 }}` for scroll reveals. Restrict to `opacity` and `transform` only.

### Don't
- Don't bold EB Garamond display copy. Weight 400 is the editorial signature.
- Don't use the accent blue for primary conversion CTAs. The ink pill is the conversion signal.
- Don't use gradient text (`background-clip: text`). Emphasis via weight or size only.
- Don't put uppercase tracked eyebrows above every section heading. One deliberate badge per feature, not a grammar for every section.
- Don't use `border-left` as a colored stripe on cards or callouts. Use full border, background tint, or nothing.
- Don't animate layout-triggering properties (`width`, `height`, `top`, `left`). Motion only via `transform` and `opacity`.
- Don't nest cards. Never.
- Don't use atmospheric gradient orbs as button fills, text colors, or card surfaces.
- Don't hardcode hex values for tokens in `globals.css`. Use Tailwind token classes (`text-accent`, `bg-brand-dark`, `border-border-subtle`).
