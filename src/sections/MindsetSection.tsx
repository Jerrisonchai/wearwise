import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import CostPerWearCalculator from '../components/CostPerWearCalculator'
import {
  investmentCriteria,
  wardrobeCategories,
  costPerWearInsight,
} from '../data/mindset'

const toneStyles: Record<string, { border: string; badge: string }> = {
  primary: { border: 'border-t-primary', badge: 'bg-primary' },
  accent: { border: 'border-t-accent', badge: 'bg-accent' },
  neutral: { border: 'border-t-border', badge: 'bg-ink-soft' },
}

export default function MindsetSection() {
  return (
    <section id="mindset" className="section scroll-mt-20">
      <div className="container-w">
        <p className="eyebrow mb-3">Chapter 01</p>
        <h2 className="display-2 text-ink mb-6">The Investment Mindset</h2>
        <p className="prose-w max-w-2xl">
          There's a quiet shift happening in closets everywhere — away from the
          fast-fashion cycle of buy, wear once, discard, and toward something
          more intentional. An investment wardrobe isn't about spending more or
          chasing labels. It's about making every purchase count, and choosing
          pieces that serve you for years rather than weeks.
        </p>

        {/* Criteria */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6 mt-14"
        >
          {investmentCriteria.map((c) => (
            <motion.div key={c.title} variants={fadeUp} className="card p-8">
              <h3 className="heading-3 text-ink mb-3">{c.title}</h3>
              <p className="text-ink-soft leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Calculator */}
        <div className="mt-20">
          <CostPerWearCalculator />
          <p className="prose-w max-w-2xl mt-6">
            <strong>{costPerWearInsight.title}.</strong> {costPerWearInsight.body}
          </p>
        </div>

        {/* Wardrobe categories */}
        <div className="mt-20">
          <p className="eyebrow mb-3">The three categories</p>
          <h3 className="display-2 text-ink mb-10">Every piece has a purpose</h3>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {wardrobeCategories.map((c) => {
              const s = toneStyles[c.tone]
              return (
                <motion.div
                  key={c.name}
                  variants={fadeUp}
                  className={`card p-8 border-t-4 ${s.border}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display text-xl text-ink">{c.name}</h4>
                    <span
                      className={`${s.badge} text-white text-xs font-semibold px-3 py-1 rounded-pill`}
                    >
                      {c.share}
                    </span>
                  </div>
                  <p className="text-ink-soft leading-relaxed text-sm">
                    {c.body}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
