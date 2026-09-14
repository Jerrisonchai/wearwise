import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { accessories } from '../data/accessories'

export default function AccessoriesSection() {
  return (
    <section id="accessories" className="section scroll-mt-20 border-t border-border">
      <div className="container-w">
        <p className="eyebrow mb-3">Chapter 04</p>
        <h2 className="display-2 text-ink mb-6">The Six Accessories That Endure</h2>
        <p className="prose-w max-w-2xl">
          Accessories are where longevity and value intersect most sharply — a
          handful of well-chosen pieces can outlive, and even out-appreciate, the
          clothes they accompany.
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {accessories.map((a, i) => (
            <motion.article key={a.title} variants={fadeUp} className="card p-7 flex flex-col">
              {a.image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  {a.imageCredit && (
                    <p className="text-[10px] leading-snug text-ink-soft mt-1.5">
                      {a.imageCredit}
                    </p>
                  )}
                </div>
              )}
              <span className="font-display text-4xl text-primary/25 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="heading-3 text-ink mt-3">{a.title}</h3>
              <p className="font-display italic text-primary mt-1">{a.tagline}</p>

              <div className="mt-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-ink-soft mb-1.5">
                  What to look for
                </p>
                <p className="text-sm text-ink-soft leading-relaxed">{a.markers}</p>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-ink-soft mb-1.5">
                  Why it ages well
                </p>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {a.appreciation}
                </p>
              </div>

              <div className="mt-5 border-l-2 border-accent pl-4 bg-surface-alt/60 rounded-r-card py-3 pr-4 mt-auto">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-1">
                  The test
                </p>
                <p className="text-sm text-ink leading-relaxed">{a.test}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
