# Operations — Gawa Solutions Portfolio

## Dev Setup

```bash
pnpm dev      # Next.js dev server
pnpm build    # production build
pnpm lint     # ESLint
```

No worker process, no separate services. Pure static/SSR Next.js.

## Branch Flow

- **Main branch**: `main`
- **Active working branch**: `draft-design-elevenlabs` (as of 2026-06-29)
- Git user: `selelel`

## Commit History (key milestones)

| Commit | Description |
|---|---|
| `7b90397` | draft design — initial scaffold |
| `0681589` | adopt ElevenLabs design direction, DESIGN.md written |
| `e69982e` | leverage impeccable feature |
| `04714d2` | change fade blue (accent → `#3567a0`) |
| `6fcec27` | feat (latest) |

## File Locations

| File | Purpose |
|---|---|
| `app/globals.css` | All design tokens (`@theme` block) — source of truth for colors, radii, fonts |
| `app/layout.tsx` | Root layout: fonts (EB Garamond + Inter), metadata, viewport, JSON-LD |
| `app/page.tsx` | Landing page section order |
| `app/_components/` | All section and layout components |
| `DESIGN.md` | Design system doc — reflects current ElevenLabs editorial direction with blue accent |
| `.impeccable/design.json` | Impeccable design tokens (colorMeta, typographyMeta, components) |

## What Is and Isn't Built

**Built:**
- All 8 landing page sections (Hero through FinalCTA)
- Navbar with scroll spy + mobile drawer
- Dark footer
- Contact page with lead gen form + info panel
- Full design token system
- JSON-LD structured data (ProfessionalService schema)
- OpenGraph / Twitter card metadata
- Responsive layout (mobile-first)
- `prefers-reduced-motion` support

**Not built (no backend):**
- Contact form submission endpoint — form currently has no POST action; submissions are not processed
- Email delivery
- Analytics
