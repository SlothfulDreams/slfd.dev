---
skill: design-system
description: "The Technical Curator" design system specification for slfd.dev. Reference this when making any visual/UI changes.
---

# Design System: "The Technical Curator"

A bridge between code editor aesthetics and luxury editorial design. Monolithic, precision-engineered. Every element looks machined from a single block of material.

---

## Colors (Strictly Monochromatic)

Hierarchy communicated through tonal shifts, not color pops.

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#000000` | Structural elements, high-contrast text, primary CTAs |
| `primary_container` | `#3b3b3e` | Gradient endpoint for primary actions |
| `background` | `#f9f9fa` | Base canvas |
| `surface_container_low` | `#f3f3f4` | Secondary sidebar/navigation areas |
| `surface_container_lowest` | `#ffffff` | Cards, active content areas ("lift") |
| `on_surface` | `#1a1c1d` | Primary text |
| `on_surface_variant` | `#6e7072` | Secondary/muted text |
| `outline_variant` | `#c4c6c8` | Ghost borders base color |

### Rules
- **"No-Line" Rule**: No `1px solid` borders for large layout blocks. Use background shifts instead.
- **"Glass & Gradient" Rule**: Floating components (modals, dropdowns) use `surface_container_lowest` at 80% opacity with `20px` backdrop-blur.
- **Signature Gradient**: Primary actions use `linear-gradient(135deg, #000000, #3b3b3e)` for "machined metal" depth.

---

## Typography (Dual-Font)

| Scale | Font | Usage |
|-------|------|-------|
| Display, Headline, Title | **Plus Jakarta Sans** | Premium, wide apertures |
| Body | **Inter** | Maximum legibility at high density |
| Label (md, sm), Data | **Monospaced** | Technical feel (SF Mono, Fira Code, JetBrains Mono) |

- High-contrast sizing: `display-lg` headlines near `label-sm` mono tags = "Curated" editorial look
- Use monospaced for ALL numerical data and status indicators

---

## Elevation & Depth

Depth is "baked-in" not "dropped-on."

- **Tonal Layering**: No shadows for static components. Cards elevated by being `surface_container_lowest` on `surface` background.
- **Ambient Shadow** (floating only): `0 12px 40px rgba(26, 28, 29, 0.06)` — tinted with `on_surface`, not pure gray.
- **Ghost Border**: `1px solid outline_variant at 15% opacity` — hairline suggestion of container.
- **Inner Glow** (active states): `0.5px` inner stroke of white at 10% opacity.

---

## Components

### Buttons
- **Primary**: Gradient fill (primary → primary_container at 135deg), white text, `0.25rem` radius
- **Secondary**: `surface_container_highest` background, no border, `on_surface` text
- **Tertiary**: Ghost. No background. Mono text in `label-md`, sharp `1px` underline on hover

### Input Fields
- No background fill. Bottom ghost border only (`outline_variant`).
- Focus: bottom border → `primary` (#000) with `0.1rem` height
- Labels: `label-sm` mono, positioned above field

### Cards & Lists
- No dividers. Use `spacing-8` (1.75rem) vertical whitespace between items.
- Hover: shift from `surface` to `surface_container_low`. No shadow on hover.

### Tags/Chips
- Rectangular, `0.125rem` radius
- `surface_container_high` background, `label-sm` mono text
- Look like metadata tags in a code editor

---

## Spacing & Grid

- **Base unit**: 4px (`0.1rem` scale)
- **Layout**: 12-column grid. Offset content for asymmetry (e.g., headline cols 1-6, data starts col 8).
- **Internal padding**: `spacing-2` (0.4rem) for compact technical feel
- Use `0.5` and `1` spacing increments for tight technical groupings

---

## Do's and Don'ts

### Do
- Use monospaced fonts for numerical data and status indicators
- Embrace "Extreme Density" — small text is fine if aligned to spacing scale
- Use `0.5` and `1` spacing for tight label+icon groupings

### Don't
- Border-radius larger than `xl` (0.75rem) — system is about sharpness
- 100% opaque borders — always use reduced opacity or tonal shifts
- Third-party colors — even success states should be monochromatic (bold blacks, icons)
