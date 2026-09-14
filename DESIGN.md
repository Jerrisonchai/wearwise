---
version: "wearwise-v1"
name: "WearWise — Dress smarter. Buy once. Wear forever."
description: "Interactive educational microsite teaching the investment-wardrobe philosophy. Editorial, timeless, luxury aesthetic with warm neutrals, serif display type, and three interactive tools (cost-per-wear calculator, quality scorer, style-DNA quiz)."
colors:
  background: "#F7F4EF"
  surface: "#FFFFFF"
  surface-alt: "#EFE9DF"
  text-primary: "#1F1B16"
  text-secondary: "#6B6257"
  primary: "#A87C4F"
  primary-deep: "#8A6438"
  accent: "#3E4A3A"
  border: "#E5DED2"
typography:
  display:
    fontFamily: "Playfair Display"
    fontWeight: 500
  heading:
    fontFamily: "Playfair Display"
    fontWeight: 500
  body:
    fontFamily: "Inter"
    fontWeight: 400
  label:
    fontFamily: "Inter"
    fontWeight: 600
spacing:
  base: "8px"
  section: "96px"
  card-padding: "32px"
rounded:
  card: "16px"
  control: "10px"
  pill: "9999px"
components:
  card:
    background: "surface with border token"
    radius: "card radius (16px)"
  button:
    background: "primary (camel) for primary action"
    radius: "pill (9999px)"
---

# WearWise — Design Direction

## Overview
Editorial "luxury slow-fashion magazine" aesthetic. The design must feel **timeless and premium**, not techy — this is about a wardrobe that lasts decades, so the interface should feel calm, confident, and unhurried. Warm ivory canvas, generous whitespace, a refined serif for display, and photography that shows real, tactile fabrics and garments.

## Visual Mood
- **Warm, natural, tactile.** Think linen, leather, cashmere, wool — the palette echoes these materials (ivory, camel, olive, charcoal).
- **Editorial type.** Large serif headlines, comfortable measure for body copy, mono/small-caps labels for UI details.
- **Real photography.** Unsplash fashion/wardrobe imagery: close-up fabric texture, folded sweaters, tailored blazers, leather accessories. No illustrations, no clipart.

## Colors
Anchor the palette in warm neutrals so imagery (which carries color) can breathe:
- `background` `#F7F4EF` (warm ivory) — page canvas
- `surface` `#FFFFFF` — cards, tool panels
- `surface-alt` `#EFE9DF` — alternate section backgrounds, callouts
- `text-primary` `#1F1B16` — near-black warm ink
- `text-secondary` `#6B6257` — muted warm gray for supporting copy
- `primary` `#A87C4F` (camel/leather) — buttons, accents, highlights
- `accent` `#3E4A3A` (deep sage) — secondary emphasis, quiz verdicts
- `border` `#E5DED2` — hairline separators

## Typography
- **Display / headings:** Playfair Display (serif) — conveys heritage and elegance.
- **Body:** Inter — clean, highly readable for long-form advice.
- **Labels / UI metadata:** Inter 600, often uppercase + letter-spacing for small-caps feel.
- Fluid type scale using `clamp()`; headings large and confident, body ~16–18px.

## Layout
- Single-page, long-scroll with a sticky top nav + chapter rail (desktop).
- Generous section padding (`96px`), max-width content column (~1120px).
- Card grids for investment pieces (2–3 columns) and accessories (2 columns).
- Calculators/quizzes in elevated `surface` panels with clear input → result flow.

## Motion (framer-motion)
- Restrained and elegant: fade + slight upward slide on scroll into view.
- Staggered card entrances, subtle hover lift.
- Smooth number count-up in the cost-per-wear result.
- Respect `prefers-reduced-motion`.

## Guardrails
- Do NOT make it look like a generic SaaS landing page (no blue gradients, no dark tech theme).
- Keep imagery dominant — text should never feel cramped.
- Buttons use the camel `primary` + pill radius; keep one primary action per section.
- Preserve the "quiet luxury" tone — no loud animations, no neon.
