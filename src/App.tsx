import { motion } from 'framer-motion'

const tools = [
  {
    n: '01',
    title: 'Cost-Per-Wear Calculator',
    desc: 'See the real price of a piece, not the price tag.',
  },
  {
    n: '02',
    title: 'Quality Check Scorer',
    desc: 'Five fabric tests to tell investment from impulse.',
  },
  {
    n: '03',
    title: 'Your Style DNA',
    desc: 'Find your forever friends and your signature look.',
  },
]

const chapters = [
  'The Investment Mindset',
  'How to Recognize Quality',
  'Built-to-Last Pieces',
  'Investment Accessories',
  'Timeless vs. Passing Trends',
]

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/90 via-[#1F1B16]/40 to-[#1F1B16]/20" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 sm:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#E5DED2] tracking-[0.3em] uppercase text-xs sm:text-sm mb-5"
          >
            The Forever Wardrobe · Interactive Guide
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-white text-5xl sm:text-7xl md:text-8xl leading-[1.02] mb-6"
          >
            WearWise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/85 text-lg sm:text-2xl max-w-xl font-light"
          >
            Dress smarter. Buy once. Wear forever.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 inline-block text-[#A87C4F] bg-white/10 backdrop-blur px-4 py-2 rounded-pill text-sm"
          >
            Mockup · 10-phase build in progress
          </motion.p>
        </div>
      </section>

      {/* Tools preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[#A87C4F] tracking-[0.25em] uppercase text-xs mb-3">
          Coming soon
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-ink mb-12">
          Three tools that make advice usable
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((t, i) => (
            <motion.div
              key={t.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-card p-8"
            >
              <span className="font-display text-4xl text-primary">{t.n}</span>
              <h3 className="font-display text-2xl text-ink mt-4 mb-2">
                {t.title}
              </h3>
              <p className="text-ink-soft leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-surface-alt">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display text-4xl sm:text-5xl text-ink mb-10">
            Five chapters, one philosophy
          </h2>
          <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {chapters.map((c, i) => (
              <li
                key={c}
                className="flex items-baseline gap-4 border-b border-border pb-4"
              >
                <span className="font-display text-2xl text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-ink">{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-ink-soft text-sm">
        WearWise · Dress smarter. Buy once. Wear forever.
      </footer>
    </div>
  )
}

export default App
