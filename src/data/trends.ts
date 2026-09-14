// Chapter 5 — Timeless vs. Passing Trends (original copy)

export const timelessPrinciples = [
  {
    title: 'Classic silhouette over extreme shape',
    body: 'A balanced, familiar silhouette endures; an exaggerated shape is dated the moment the pendulum swings back.',
  },
  {
    title: 'Neutral, versatile colour over novelty',
    body: 'Navy, black, camel, ivory, and olive move across seasons. A single-season "it" colour rarely survives the year.',
  },
  {
    title: 'Quality material over clever branding',
    body: 'A well-made unbranded piece outlasts a logo. The label fades in value; the fabric and construction don\u2019t.',
  },
  {
    title: 'Subtle detail over loud statement',
    body: 'Quiet, considered details age well. Loud embellishment ties a piece to a specific moment.',
  },
]

export interface TrendQuizItem {
  item: string
  timeless: boolean
  why: string
}

export const trendQuiz: TrendQuizItem[] = [
  { item: 'A well-cut navy blazer', timeless: true, why: 'A classic silhouette in a neutral colour — it works for decades.' },
  { item: 'The colour-of-the-season oversized blazer', timeless: false, why: 'The shape and colour both have a built-in expiry date.' },
  { item: 'Straight-leg dark denim', timeless: true, why: 'A balanced cut and versatile wash age gracefully.' },
  { item: 'Ultra-wide barrel jeans', timeless: false, why: 'An extreme silhouette tied to a single trend cycle.' },
  { item: 'A white Oxford shirt', timeless: true, why: 'The definition of a classic — unchanged for a century for a reason.' },
  { item: 'A micro-bag that fits one lip gloss', timeless: false, why: 'Pure novelty — impractical and quickly dated.' },
  { item: 'A camel cashmere sweater', timeless: true, why: 'A neutral colour in a timeless fibre that improves with care.' },
  { item: 'Logo-print anything', timeless: false, why: 'Branding dates faster than any fabric — the logo loses value as trends move on.' },
  { item: 'Black leather loafers', timeless: true, why: 'A classic shoe that has never really gone out of style.' },
  { item: 'Platform foam slides', timeless: false, why: 'A comfort trend with a short lifespan.' },
]

export const timelessTakeaway = {
  title: 'Ask three questions before you buy',
  body: 'Will I still want this in five years? Can I wear it in at least three different outfits? Is the appeal in the piece itself — or only in the fact that it\u2019s everywhere right now? If the answer to the last question is yes, you\u2019re buying a moment, not a wardrobe.',
}
