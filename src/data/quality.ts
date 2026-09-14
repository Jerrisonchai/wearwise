// Chapter 2 — How to Recognize Quality (original copy)

export interface QualityTest {
  name: string
  instruction: string
  verdict: string
}

export const fabricTests: QualityTest[] = [
  {
    name: 'The Touch Test',
    instruction: 'Run the fabric between your thumb and forefinger.',
    verdict:
      'Quality fabric feels dense and purposeful — not necessarily heavy, but substantial. Silk should feel cool and liquid; good cotton has subtle texture; cashmere should be soft yet resilient, never flimsy.',
  },
  {
    name: 'The Scrunch Test',
    instruction: 'Squeeze a handful of fabric for five seconds, then release.',
    verdict:
      'Quality natural fibres spring back smoothly. If it stays deeply creased, it will wrinkle constantly in wear — a sign of lower-grade fibre or poor finishing.',
  },
  {
    name: 'The Light Test',
    instruction: 'Hold the fabric up to a light source.',
    verdict:
      'If you can see your hand through it and it isn\u2019t meant to be sheer, it\u2019s too thin — it will wear through quickly and won\u2019t drape well.',
  },
  {
    name: 'The Stretch Recovery Test',
    instruction: 'Gently stretch a small section, then let go.',
    verdict:
      'If it springs back to shape, good. If it stays stretched, the garment will lose its form after a few wears — especially important for knits and anything with stretch.',
  },
  {
    name: 'The Pill Test',
    instruction: 'Gently rub the fabric against itself.',
    verdict:
      'Tiny balls forming immediately means it will pill fast. Quality fabric resists pilling because its fibres are longer and more tightly spun.',
  },
]

export interface EnduringFabric {
  name: string
  why: string
}

export const enduringFabrics: EnduringFabric[] = [
  { name: 'Merino wool', why: 'Temperature-regulating, naturally odour-resistant, versatile. Look for a tight, even weave and a soft hand.' },
  { name: 'Silk charmeuse & crêpe de chine', why: 'Luxury that lasts decades when cared for — charmeuse drapes like liquid, crêpe de chine offers structure.' },
  { name: 'Cotton poplin & Oxford cloth', why: 'The backbone of great shirting. Long-staple cotton (Supima, Pima, Egyptian) means softness and durability.' },
  { name: 'Irish & Belgian linen', why: 'Develops a beautiful patina with age — the wrinkles are part of the charm, and it softens with every wash.' },
  { name: 'Grade-A cashmere', why: 'Long, fine, dense fibres resist pilling. Budget cashmere uses short fibres that bobble within months.' },
  { name: 'Full-grain leather', why: 'Develops a unique patina over decades. Avoid "genuine leather" (the lowest grade) and bonded leather (leather dust glued together).' },
]

export const constructionChecks = [
  {
    name: 'Seams',
    checks: [
      'Generous seam allowance (at least 1cm, ideally more) — room for alterations.',
      'Finished edges — serged, bound, or French-seamed, never raw and fraying.',
      'Even, straight stitching with no puckering, especially at stress points (armholes, crotch, waistband).',
      'Pattern matching — stripes and plaids should align across seams.',
    ],
  },
  {
    name: 'Buttons & closures',
    checks: [
      'Buttons in natural materials — mother-of-pearl, horn, corozo, or quality metal.',
      'A thread shank (a small stem) so the button sits smoothly without pulling.',
      'Clean, tight, reinforced buttonholes.',
      'Zippers that glide smoothly and lie flat (YKK, Riri, or Lampo are the gold standard).',
    ],
  },
  {
    name: 'Linings & interfacing',
    checks: [
      'A smooth lining (Bemberg rayon or silk) that helps the garment slide on and protects the outer fabric.',
      'Sewn-in interfacing, not fused — fused interfacing bubbles and separates over time.',
      'Clean internal finishing — no loose threads, exposed raw edges, or glue marks.',
    ],
  },
]

export const fitChecks = [
  { area: 'Shoulders', tip: 'The shoulder seam should sit exactly where your shoulder ends — not drooping, not pulling. It\u2019s the hardest area to alter, so it must be right from the start.' },
  { area: 'Bust & chest', tip: 'Fabric should lie smooth without pulling, gaping, or odd wrinkles. If a button-down gapes, it\u2019s the wrong cut — regardless of the size on the label.' },
  { area: 'Waist', tip: 'A defined waist should sit at your natural waist, the narrowest part of your torso. Too high looks juvenile; too low truncates your silhouette.' },
  { area: 'Length', tip: 'Trouser hems should just kiss the top of your shoe. Skirts should hit a flattering point — just above the knee, mid-calf, or ankle.' },
  { area: 'Drape', tip: 'The garment should hang naturally, following your body without clinging or adding bulk. Quality fabric and construction create drape; cheap materials fight against you.' },
]

export const tailoringTip = {
  title: 'Build a relationship with a tailor',
  body: 'A good tailor is the secret weapon of every well-dressed person. Basic alterations — hemming, taking in a waist, adjusting sleeves — are inexpensive and turn a good garment into a perfect one. When budgeting, always factor in alterations: a $150 blazer with $40 of tailoring that fits like it was made for you beats a $300 blazer that\u2019s "close enough."',
}
