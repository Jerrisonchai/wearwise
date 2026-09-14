// Chapter 1 — The Investment Mindset (original copy)

export const investmentCriteria = [
  {
    title: 'Longevity',
    body: 'It is built to last — in construction and in style. The fabric won\u2019t pill after three washes, the seams won\u2019t give, and the silhouette won\u2019t look dated next season.',
  },
  {
    title: 'Versatility',
    body: 'It earns its place across many outfits and occasions. A piece that only works with one outfit isn\u2019t an investment — it\u2019s a costume.',
  },
  {
    title: 'Joy',
    body: 'You genuinely love wearing it. Every time it goes on, you feel like the best version of yourself — no tugging, no second-guessing.',
  },
]

export interface CostPerWearExample {
  label: string
  price: number
  wears: number
}

export const costPerWearExamples: CostPerWearExample[] = [
  { label: 'The Trendy Top', price: 35, wears: 4 },
  { label: 'The Quality Blouse', price: 120, wears: 150 },
]

export const wardrobeCategories = [
  {
    name: 'Fashion Pieces',
    share: '~20%',
    tone: 'accent' as const,
    body: 'Trend-driven pieces that capture the energy of the moment — an oversized blazer in the colour of the season, platform sandals, the micro-bag that fits one lip gloss. Fun and current by design, with a built-in expiry date. They add energy, but should never be the foundation.',
  },
  {
    name: 'Functional Pieces',
    share: '~30%',
    tone: 'neutral' as const,
    body: 'The workhorses you buy for practicality — everyday sneakers, gym clothes, a rain jacket, the jeans you wear to walk the dog. They should be comfortable, durable, and fit their purpose. They don\u2019t need to be glamorous, but they should still fit well and be cared for.',
  },
  {
    name: 'Investment Pieces',
    share: '~50%',
    tone: 'primary' as const,
    body: 'The backbone. These combine longevity, versatility, and emotional pull — the well-cut navy blazer, the perfect black trouser, a cashmere sweater in your most flattering neutral. Worth spending more on, caring for, and replacing thoughtfully.',
  },
]

export interface ForeverFriendQuestion {
  prompt: string
  hint: string
}

export const foreverFriendQuestions: ForeverFriendQuestion[] = [
  {
    prompt: 'Which colours show up most often?',
    hint: 'These are your true signature colours — not what looks good in theory, but what you actually reach for in real life.',
  },
  {
    prompt: 'Which fabrics dominate?',
    hint: 'Soft knits? Crisp cottons? Flowing silks? Your forever pieces reveal the fabrics that fit your life and comfort.',
  },
  {
    prompt: 'Which silhouettes repeat?',
    hint: 'Fitted, relaxed, or structured? The shapes you love wearing reveal your body\u2019s comfort zone — that\u2019s intelligence, not a limitation.',
  },
  {
    prompt: 'What\u2019s the common thread?',
    hint: 'Is there an aesthetic running through them — understated, detailed, a certain quality of fabric? That thread is the start of your style definition.',
  },
]

export const costPerWearInsight = {
  title: 'The math fast fashion doesn\u2019t want you to see',
  body: 'Cost-per-wear is simple: divide the price by how many times you\u2019ll actually wear it. A $35 trendy top worn four times costs $8.75 per wear. A $120 quality blouse worn 150 times costs just $0.80 — more than ten times cheaper in the end. When you think in cost-per-wear, you stop chasing deals and start chasing value.',
}
