// Chapter 3 — Built-to-Last Investment Pieces (original copy)

export interface InvestmentPiece {
  title: string
  tagline: string
  makesItLast: string
  qualityTest: string
  imageQuery: string
}

export const investmentPieces: InvestmentPiece[] = [
  {
    title: 'The Button-Down Shirt',
    tagline: 'Ages like fine linen',
    makesItLast:
      'Long-staple cotton — Supima, Egyptian, or Sea Island — softens wash after wash without losing its structure. Mother-of-pearl buttons won\u2019t crack or yellow like plastic. Reinforced seams at stress points stop the tiny tears that unravel cheap shirts, and single-needle stitching means less bulk and less friction.',
    qualityTest:
      'Hold it to the light — you should see a consistent, tight weave with no thin spots. Pull gently on a seam: it should have zero give. Check that buttons are cross-stitched (an X pattern) rather than parallel-stitched.',
    imageQuery: 'white button down shirt folded',
  },
  {
    title: 'Tailored Trousers',
    tagline: 'Built on architecture',
    makesItLast:
      'Wool fibres can bend over 20,000 times before breaking — polyester fails at roughly 3,000. This natural resilience is why quality wool trousers recover from wrinkles overnight while cheaper pairs develop permanent creases and knee sag within weeks. Inside, curtain waistbands and finished seams distribute tension evenly.',
    qualityTest:
      'Scrunch the fabric and release — quality wool smooths itself within minutes. Check the interior for finished seams and a proper waistband lining. That\u2019s where longevity lives.',
    imageQuery: 'tailored trousers hanging',
  },
  {
    title: 'The Blazer',
    tagline: 'A lifetime companion',
    makesItLast:
      'A well-made blazer has a canvas interlining — horsehair or wool — between the outer fabric and lining that gradually moulds to your body, so it fits better after a year than on day one. Fused (glued) interlinings bubble and separate with heat and humidity. Functional sleeve buttonholes signal construction confidence.',
    qualityTest:
      'Pinch the lapel and gently separate the layers. In a canvassed blazer the interlining moves independently; in a fused one, the layers are glued and won\u2019t separate. This single test says more about longevity than the price tag.',
    imageQuery: 'tailored blazer on hanger',
  },
  {
    title: 'Denim',
    tagline: 'Tells your story',
    makesItLast:
      'Raw or minimally washed denim develops fades — "whiskers" and "honeycombs" — unique to your body and movement. Weight matters: denim under 10oz wears thin and develops holes, while 12–14oz develops rich texture while holding its integrity. Selvedge denim has tightly bound edges that resist fraying.',
    qualityTest:
      'Quality denim feels substantial and slightly stiff when new. Check the selvedge edge on the outseam and examine the rivets — copper and brass patina beautifully, while painted base metal chips and corrodes.',
    imageQuery: 'raw denim jeans texture',
  },
  {
    title: 'Cashmere',
    tagline: 'The fibre that rewards patience',
    makesItLast:
      'Fibre length is everything. Long fibres (36mm+) interlock securely and resist pilling; short fibres work loose and bobble within a few wears. Ply count matters too — two-ply is far more durable than single-ply, and four-ply creates garments that last decades.',
    qualityTest:
      'Stretch the fabric gently — quality cashmere snaps back immediately. Hold it to the light for consistent density, then rub the surface: if fibres shed straight away, the staple length is too short.',
    imageQuery: 'folded cashmere sweaters',
  },
  {
    title: 'Outerwear',
    tagline: 'Defies decades',
    makesItLast:
      'Tightly woven gabardine becomes more water-resistant over time, wool coatings develop surface character, and waxed cotton renews with re-waxing. The best outerwear is engineered for repair — replaceable linings and buttons, re-waxing services — so it\u2019s maintained, not replaced.',
    qualityTest:
      'Check inside seams for bound or Hong Kong finishing that won\u2019t fray. Examine stitching at stress points — underarms, pocket corners, hem — for reinforcement. Hardware should be metal, never plastic.',
    imageQuery: 'wool coat outerwear',
  },
  {
    title: 'The Dress',
    tagline: 'Transcends occasions',
    makesItLast:
      'A quality dress keeps its architecture through internal structure — interfacing, proper darts, and generous seam allowances. Quality crepe, ponte, and silk hold their drape through countless wearings, and proper construction means it can be let out, taken in, or re-hemmed as your body changes.',
    qualityTest:
      'Turn it inside out. Are the seams pressed open and finished? Is there interfacing at the neckline? Are hems blind-stitched rather than machine-topstitched? Is there enough allowance (1.5cm+) for future alterations?',
    imageQuery: 'elegant dress on hanger',
  },
  {
    title: 'Footwear',
    tagline: 'Improves with every step',
    makesItLast:
      'Full-grain leather develops a patina — a surface luster from oils, wear, and polish — that can\u2019t be manufactured, only earned. Goodyear-welted or Blake-stitched shoes can be re-soled multiple times, while cemented soles can\u2019t. Leather insoles conform to your foot for a custom fit no new shoe can match.',
    qualityTest:
      'Flex the shoe — quality leather bends smoothly without cracking. Check for a visible welt that signals resoleable construction. Use shoe trees, condition regularly, and rotate between pairs.',
    imageQuery: 'quality leather shoes',
  },
]
