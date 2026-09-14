import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import StyleDnaQuiz from '../components/StyleDnaQuiz'
import { timelessPrinciples, timelessTakeaway } from '../data/trends'

export default function TrendsSection() {
  return (
    <section id="trends" className="section scroll-mt-20 border-t border-border">
      <div className="container-w">
        <p className="eyebrow mb-3">Chapter 05</p>
        <h2 className="display-2 text-ink mb-6">Timeless vs. Passing Trends</h2>
        <p className="prose-w max-w-2xl">
          The difference between a piece you'll love for a decade and one you'll
          donate next season often comes down to four simple principles. Test
          your own instinct below.
        </p>

        {/* Principles */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-6 mt-14"
        >
          {timelessPrinciples.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} className="card p-7">
              <span className="font-display text-3xl text-primary/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="heading-3 text-ink mt-2 mb-3">{p.title}</h3>
              <p className="text-ink-soft leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quiz */}
        <div className="mt-20">
          <StyleDnaQuiz />
        </div>

        {/* Takeaway */}
        <div className="mt-20 bg-surface-alt rounded-card p-8 sm:p-10 text-center">
          <p className="eyebrow mb-3">Remember</p>
          <h3 className="display-2 text-ink mb-6">{timelessTakeaway.title}</h3>
          <p className="prose-w max-w-2xl mx-auto">{timelessTakeaway.body}</p>
        </div>
      </div>
    </section>
  )
}
