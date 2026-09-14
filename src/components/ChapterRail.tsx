import { motion } from 'framer-motion'
import { chapters } from '../data/chapters'
import { stagger, fadeUp } from '../lib/motion'

export default function ChapterRail() {
  return (
    <section className="section bg-surface-alt">
      <div className="container-w">
        <p className="eyebrow mb-3">Contents</p>
        <h2 className="display-2 text-ink mb-12">Five chapters, one philosophy</h2>

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-x-12 gap-y-8"
        >
          {chapters.map((c) => (
            <motion.li key={c.id} variants={fadeUp}>
              <a
                href={`#${c.id}`}
                className="group flex items-start gap-5 border-b border-border pb-6 hover:border-primary transition-colors"
              >
                <span className="font-display text-3xl text-primary group-hover:text-primary-deep transition-colors">
                  {c.number}
                </span>
                <span>
                  <span className="block font-display text-xl text-ink">
                    {c.title}
                  </span>
                  <span className="block text-sm text-ink-soft mt-1">
                    {c.subtitle}
                  </span>
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
