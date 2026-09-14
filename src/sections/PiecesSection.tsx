import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { investmentPieces } from '../data/investmentPieces'

export default function PiecesSection() {
  return (
    <section id="pieces" className="section scroll-mt-20 border-t border-border">
      <div className="container-w">
        <p className="eyebrow mb-3">Chapter 03</p>
        <h2 className="display-2 text-ink mb-6">Eight Pieces Built to Last</h2>
        <p className="prose-w max-w-2xl">
          A forever wardrobe isn't big — it's deliberate. These eight pieces form
          the backbone: each one chosen for how it's made, and how it improves
          with time rather than wearing out.
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6 mt-14"
        >
          {investmentPieces.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="card p-8 flex flex-col"
            >
              <span className="font-display text-5xl text-primary/25 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="heading-3 text-ink mt-3">{p.title}</h3>
              <p className="font-display italic text-primary mt-1">{p.tagline}</p>

              <div className="mt-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-ink-soft mb-1.5">
                  What makes it last
                </p>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {p.makesItLast}
                </p>
              </div>

              <div className="mt-5 border-l-2 border-accent pl-4 bg-surface-alt/60 rounded-r-card py-3 pr-4 mt-auto">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-1">
                  Quality test
                </p>
                <p className="text-sm text-ink leading-relaxed">{p.qualityTest}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
