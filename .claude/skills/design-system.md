---
skill: design-system
description: Design system for slfd.dev — centered column layout with dotted borders, grid background, dither texture, monochromatic palette. Reference this when making any visual/UI changes.
---

# Design System: slfd.dev

Minimal, mono, centered. Inspired by rinkitadhana.com (dotted line patterns, centered grid) and zed.dev (clean mono aesthetic). Single-page scrolling portfolio.

---

## Architecture

- **Single-page homepage** with sections: Hero → Experience → Projects → Blogs → Skills
- **Centered narrow column** (`750px` max-width) with flanking vertical dotted borders on desktop
- **Sub-pages**: `/projects`, `/blogs`, `/contact` use same `content-column` layout
- **Dither background**: Three.js WebGL dither effect at 7% opacity (fixed, behind all content)
- **CSS grid background**: 48px grid lines at 8% opacity with radial gradient glow from top

---

## Colors (Monochromatic)

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| Primary | `--color-primary` | `#000000` | Text, buttons, active states |
| Background | `--color-background` | `#fafafa` | Base canvas |
| On Surface | `--color-on-surface` | `#1a1c1d` | Primary text |
| On Surface Variant | `--color-on-surface-variant` | `#6e7072` | Muted/secondary text |
| Outline Variant | `--color-outline-variant` | `#c4c6c8` | Borders, outlines |
| Dot Color | `--dot-color` | `#b0b3b5` | Dotted dividers and flanking borders |
| Muted Background | — | `#f0f0f1` | Social pill buttons bg |
| Muted Hover | — | `#e4e4e5` | Social pill buttons hover bg |

**One exception**: Status dot uses `#22c55e` (green) with pulse animation.

---

## Typography

- **Single font**: Inter (via `next/font/google`, variable `--font-inter`)
- **Mono stack**: SF Mono, Fira Code, JetBrains Mono, Cascadia Code (via `--font-mono`)
- **All text is lowercase** — headings, labels, subtitles
- **Section labels**: `font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#6e7072]`
- **Mono used for**: labels, tags, dates, status text, buttons, nav links

---

## Layout

- **Content column**: `max-width: 750px`, `padding: 0 1.5rem`, centered with `margin: 0 auto`
- **Flanking dotted borders**: `::before`/`::after` pseudo-elements, `position: fixed`, hidden below 840px
- **Dotted dividers**: `repeating-linear-gradient` with 6px dash, 14px gap
- **Section spacing**: `2.5rem` margin on dotted dividers
- **Top space**: Homepage uses `pt-32`, sub-pages use `pt-24`

---

## Components

### Header
- Sticky, frosted glass: `bg-[#fafafa]/80 backdrop-blur-md`
- Nav constrained to `max-w-[750px]`
- Links: `font-mono text-xs uppercase tracking-[0.15em] text-[#6e7072]`
- Bottom: dotted divider (margin: 0)

### Footer
- Top: dotted divider
- Constrained to `max-w-[750px]`
- Copyright + social icons in `font-mono text-[11px]`

### Buttons
- **Solid** (`.btn-solid`): Black bg, white text, mono uppercase, `0.25rem` radius
- **Outline** (`.btn-outline`): Transparent bg, `outline-variant` border, hover → black

### Social Pills
- `bg-[#f0f0f1] hover:bg-[#e4e4e5] rounded-[6px]`
- `font-mono text-[11px]` with icon + label
- No border, background-based hover

### Skill Tags (`.skill-tag`)
- Bordered pill: `1px solid outline-variant`, `0.25rem` radius
- Mono text, hover → black border + text

### Project Grid (`.project-grid`)
- 2-column CSS grid on desktop, 1-column on mobile
- Dotted separators between cells via `background-image` gradients

### GitHub Heatmap
- `react-activity-calendar` with zinc gray theme: `#f4f4f5 → #d4d4d8 → #a1a1aa → #52525b → #18181b`
- Block size 10px, radius 2px, margin 3px
- Shows "X activities in YYYY" footer

### Dither Background
- Three.js WebGL (`@react-three/fiber` + `postprocessing`)
- Fixed fullscreen at `z-index: 0`, `opacity: 0.07`
- Props: `waveColor=[0.95,0.95,0.95]`, `colorNum=4`, `pixelSize=4`, `waveSpeed=0.03`
- Dynamically imported with `ssr: false`

---

## Dotted Line System

Used everywhere for visual rhythm:
- **Horizontal dividers**: `repeating-linear-gradient(to right, dot-color 0 6px, transparent 6px 14px)`
- **Vertical flanking**: Same pattern but `to bottom`
- **Grid cell separators**: 4px dash, 10px gap variant
- All use `--dot-color: #b0b3b5`

---

## Do's and Don'ts

### Do
- Keep everything lowercase
- Use mono font for all labels, metadata, navigation, buttons
- Use dotted lines (not solid) for all visual separation
- Keep the centered narrow column — don't go full-width
- Use background shifts for interactive states (not borders or shadows)

### Don't
- Add color — everything is monochromatic (exception: green status dot)
- Use solid borders for large sections — use dotted or tonal shifts
- Add shadows — use tonal layering instead
- Use fonts other than Inter and the mono stack
