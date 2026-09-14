// Chapter 4 — Investment Accessories (original copy)

export interface Accessory {
  title: string
  tagline: string
  markers: string
  appreciation: string
  test: string
  imageQuery: string
}

export const accessories: Accessory[] = [
  {
    title: 'The Structured Handbag',
    tagline: 'One of the few items that truly appreciates',
    markers:
      'Leather should feel substantial and slightly firm when new, softening over time. Stitching should be tight and recessed into channels to protect the thread. Hardware should be solid metal — never hollow or plated over plastic.',
    appreciation:
      'Quality leather, conditioned regularly, becomes more supple and luminous each year. The structure holds its shape when stored stuffed and upright, and certain heritage bags resell for more than their original price after years of use.',
    test: 'Quality leather has a rich, natural scent, not a chemical one. Press a thumbnail into an inconspicuous spot — the mark should fade. Check the lining: stitched linings can be replaced; glued linings peel and can\u2019t.',
    imageQuery: 'structured leather handbag',
  },
  {
    title: 'The Leather Belt',
    tagline: 'The single longest-lasting item you can own',
    markers:
      'It should be a single piece of full-grain hide — not bonded leather, which delaminates. The buckle should attach with a screw post so it can be replaced, and the holes should be cleanly punched.',
    appreciation:
      'A quality belt becomes more beautiful each year: the leather darkens and develops character, the buckle acquires a soft luster. Many makers offer lifetime repair, which tells you everything about expected longevity.',
    test: 'Bend the belt firmly — quality leather flexes without cracking or showing white stress marks. Look at the cross-section: you should see one consistent layer, not compressed layers.',
    imageQuery: 'full grain leather belt',
  },
  {
    title: 'The Silk Scarf',
    tagline: 'Stronger than steel, softer than air',
    markers:
      'A single silk fibre is stronger than steel of the same diameter. Weight, measured in momme, determines durability — look for 14-momme or higher. Hand-rolled edges are structural: they flex naturally, while machine-rolled edges stiffen and unravel.',
    appreciation:
      'Quality silk develops a more beautiful hand with wear, and its colours remain remarkably stable. Vintage scarves are actively collected, with certain prints commanding prices far above their original retail.',
    test: 'Hold it to the light for a consistent weave. Quality silk feels cool and liquid, not papery. Stored rolled and away from light, a silk scarf lasts generations.',
    imageQuery: 'silk scarf draped',
  },
  {
    title: 'Timeless Jewelry',
    tagline: 'Craftsmanship over carats',
    markers:
      'Solid gold and sterling silver can be restored indefinitely; plated pieces have a finite lifespan. Prongs should grip securely (bezel settings offer the most protection), and everything should be soldered — never glued. Solid-metal clasps outlast spring-ring and magnetic closures.',
    appreciation:
      'Quality jewelry exists on a timeline measured in generations, developing the "vintage glow" that only time can create. It\u2019s defined by craftsmanship, not stone size or brand.',
    test: 'Surfaces should be uniformly smooth or evenly textured — rough spots predict premature wear. Check the clasp and settings for solid, secure construction.',
    imageQuery: 'gold jewelry craftsmanship',
  },
  {
    title: 'Quality Sunglasses',
    tagline: 'Flexes without breaking',
    markers:
      'Quality frames use acetate, which flexes without breaking, holds its colour, and can be adjusted for years. Hinges should contain a metal core. Lenses should be optical-grade glass or CR-39 resin, not polycarbonate that scratches within weeks.',
    appreciation:
      'Acetate develops warmth and depth over years, while cheap plastic yellows and cracks. Quality sunglasses can be adjusted and have their lenses replaced, evolving with you.',
    test: 'Temples should move smoothly with gentle resistance. Look through the lenses at a straight line — any distortion reveals low-quality optics.',
    imageQuery: 'acetate sunglasses',
  },
  {
    title: 'The Overnight Bag',
    tagline: 'Built for a lifetime of travel',
    markers:
      'Military-grade cotton canvas (18oz+) is virtually indestructible, and leather trim should be vegetable-tanned. Zippers should be YKK or RiRi, and stress points reinforced with bar tacks or rivets.',
    appreciation:
      'A quality travel bag tells your story — worn corners, darkened handles, canvas softened from stiff to supple. These bags are handed down through families and can be repaired indefinitely.',
    test: 'Check the weight and weave of the canvas, and inspect the stress points for reinforcement. Hardware should be solid and securely attached.',
    imageQuery: 'canvas overnight bag',
  },
]
