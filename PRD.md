# WearWise — Product Requirements Document

> **MANDATE:** WHO=Jerrison (via Luffy) | WHEN=2026-09-14 | PURPOSE=Turn MOSSO's "Style That Lasts: The Forever Wardrobe" PDF into an interactive educational webpage | STATUS=Setup complete, phases pending approval

---

## 1. Overview

**WearWise** is an interactive educational microsite that teaches the "investment wardrobe" philosophy — buying fewer, better pieces that last (cost-per-wear, quality recognition, timeless vs trendy).

The source is a 53-page static PDF (MOSSO's lead magnet). The goal is to make the advice **usable**, not just readable, by turning the core concepts into live interactive tools.

**Tagline:** *Dress smarter. Buy once. Wear forever.*

**Target audience:** Women (primary) and men 25–45 interested in capsule wardrobes, slow fashion, and quality-over-quantity.

---

## 2. Goals / Success Criteria

1. Convert the 5-chapter PDF into a scannable, single-page experience.
2. Ship **3 interactive tools** that deliver the content's value instantly (this is what makes it "better" than a PDF).
3. Use **realistic photography** (licensed stock, not illustrations) throughout.
4. Editorial, luxury "timeless style" aesthetic — not a generic SaaS look.
5. Mobile-first, performant, accessible.
6. Deploy live on Vercel as a portfolio/pitch piece.

---

## 3. The 3 Interactive Tools (core differentiators)

### A. Cost-Per-Wear Calculator (Chapter 1)
- Input: price, wears-per-month (or total wears), expected lifespan.
- Output: cost-per-wear + a live side-by-side comparison of "trendy $35 top worn 4×" vs "quality $120 blouse worn 150×".
- Screenshot-worthy / shareable result card.

### B. Quality Check Scorer (Chapter 2)
- A step-through checklist of the 5 fabric tests (touch / scrunch / light / stretch / pill) + construction checks.
- Produces a 0–100 "quality score" with a verdict (Invest / Pass / Caution).

### C. "Find Your Forever Friends" → Style DNA (Chapter 1)
- Guided quiz: colors, fabrics, silhouettes, acquisition patterns.
- Generates a shareable "Your Style DNA" summary card (signature colors / fabrics / shapes / common thread).

---

## 4. Content Map (from the PDF)

| Chapter | Title | Interactive | Section |
|---|---|---|---|
| 1 | The Investment Wardrobe Mindset | Cost-Per-Wear Calc + Style DNA quiz | Intro, cost-per-wear, 3 categories, forever friends |
| 2 | How to Recognize Quality | Quality Check Scorer | Fabric tests, fabrics that last, construction, fit |
| 3 | Built to Last Investment Pieces | — (expandable cards) | 8 pieces (shirt, trousers, blazer, denim, cashmere, coat, dress, shoes) |
| 4 | Investment Accessories | — (expandable cards) | 6 accessories (handbag, belt, silk scarf, jewelry, sunglasses, travel bag) |
| 5 | Timeless vs Passing Trends | Trend quiz | keeper vs passing trend |

---

## 5. 10-Phase Build Plan

| Phase | Deliverable |
|---|---|
| **P1** | Scaffold: Vite + React 19 + TS + framer-motion + Tailwind 4. Config, fonts, lint. |
| **P2** | Design system: `@theme` tokens from DESIGN.md, global styles, typography scale. |
| **P3** | Content finalization: proofread/copywrite all 5 chapters into typed data files. |
| **P4** | App shell: nav, hero, chapter rail, scroll-progress, footer. |
| **P5** | Tool A — Cost-Per-Wear Calculator. |
| **P6** | Tool B — Quality Check Scorer. |
| **P7** | Tool C — Style DNA quiz. |
| **P8** | Content sections: 8 investment pieces + 6 accessories (animated cards). |
| **P9** | Chapter 5 trend quiz + remaining sections. |
| **P10** | Responsive polish, realistic photography, SEO/meta, accessibility, Vercel prod deploy. |

---

## 6. Tech Stack

- **Build:** Vite 8 + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 (`@theme` tokens)
- **Animation:** framer-motion 12
- **State:** React hooks + localStorage (persist calculator/quiz results)
- **Images:** Unsplash (free, license-safe) bundled into `public/images`
- **Deploy:** Vercel

---

## 7. Folder Architecture

```
wearwise/
├── PRD.md
├── DESIGN.md
├── README.md
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── vercel.json
├── public/
│   ├── favicon.svg
│   └── images/            # realistic Unsplash photography
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css          # Tailwind @theme tokens
│   ├── data/
│   │   ├── chapters.ts
│   │   ├── investmentPieces.ts
│   │   ├── accessories.ts
│   │   └── trends.ts
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── ChapterRail.tsx
│   │   ├── CostPerWearCalculator.tsx
│   │   ├── QualityScorer.tsx
│   │   ├── StyleDnaQuiz.tsx
│   │   ├── InvestmentCards.tsx
│   │   ├── AccessoryCards.tsx
│   │   ├── TrendQuiz.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   └── (chapter sections)
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   └── lib/
│       └── motion.ts
```

---

## 8. Non-Functional Requirements

- **Performance:** LCP < 2.5s, images lazy-loaded + responsive sizes.
- **Accessibility:** semantic HTML, keyboard-navigable tools, `prefers-reduced-motion` support.
- **Responsive:** mobile-first, breakpoints at 640 / 768 / 1024 / 1280.
- **Copyright:** original copywriting (rewritten from the PDF, not verbatim). MOSSO content is the *conceptual* source; this is a portfolio/pitch piece, not for resale.

---

## 9. Open Questions / Risks

- Final name approval ("WearWise") — pending Jerrison sign-off.
- Image licensing: confirm Unsplash license usage (free, no attribution required).
- Copywriting ownership: rewrite in original voice to avoid MOSSO copyright claims.
