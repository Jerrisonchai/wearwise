export interface Chapter {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
}

export const chapters: Chapter[] = [
  {
    id: 'mindset',
    number: '01',
    title: 'The Investment Mindset',
    subtitle: 'What actually makes a piece worth keeping',
    description:
      'Before fabric, fit, or label — the first shift is how you think about the clothes you own.',
  },
  {
    id: 'quality',
    number: '02',
    title: 'How to Recognize Quality',
    subtitle: 'The details that matter before you buy',
    description:
      'Train your eye and your fingertips to tell genuine quality from clever marketing.',
  },
  {
    id: 'pieces',
    number: '03',
    title: 'Built-to-Last Pieces',
    subtitle: 'Why quality foundations outlast everything',
    description:
      'Eight categories where construction and material turn a purchase into an appreciating asset.',
  },
  {
    id: 'accessories',
    number: '04',
    title: 'Investment Accessories',
    subtitle: 'Small details, enormous impact',
    description:
      'Where your budget stretches furthest — pieces that never change with your weight or the season.',
  },
  {
    id: 'trends',
    number: '05',
    title: 'Timeless vs. Passing Trends',
    subtitle: 'The art of knowing what will endure',
    description:
      'A simple framework for separating pieces that will age with you from pieces that will age you.',
  },
]
