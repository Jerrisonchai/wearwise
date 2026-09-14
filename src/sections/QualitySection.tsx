import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import QualityScorer from '../components/QualityScorer'
import {
  enduringFabrics,
  constructionChecks,
  fitChecks,
  tailoringTip,
} from '../data/quality'

export default function QualitySection() {
  return (
    <section id="quality" className="section scroll-mt-20 border-t border-border">
      <div className="container-w">
        <p className="eyebrow mb-3">Chapter 02</p>
        <h2 className="display-2 text-ink mb-6">How to Recognize Quality</h2>
        <p className="prose-w max-w-2xl">
          Quality isn't a price tag — it's a set of observable details anyone can
          learn to read. Before you buy, run the garment through these five
          simple tests. If it passes, it's built to last.
        </p>

        <div className="mt-14">
          <QualityScorer />
        </div>

        {/* Enduring fabrics */}
        <div className="mt-20">
          <p className="eyebrow mb-3">Materials that endure</p>
          <h3 className="display-2 text-ink mb-10">Know your fabrics</h3>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {enduringFabrics.map((f) => (
              <motion.div key={f.name} variants={fadeUp} className="card p-6">
                <h4 className="font-display text-lg text-ink mb-2">{f.name}</h4>
                <p className="text-sm text-ink-soft leading-relaxed">{f.why}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Construction checks */}
        <div className="mt-20">
          <p className="eyebrow mb-3">Inside the garment</p>
          <h3 className="display-2 text-ink mb-10">Construction tells the truth</h3>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {constructionChecks.map((c) => (
              <motion.div key={c.name} variants={fadeUp} className="card p-6">
                <h4 className="heading-3 text-ink mb-4">{c.name}</h4>
                <ul className="space-y-2.5">
                  {c.checks.map((ch) => (
                    <li key={ch} className="flex gap-2 text-sm text-ink-soft leading-relaxed">
                      <span className="text-primary mt-0.5">—</span>
                      {ch}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fit checks */}
        <div className="mt-20">
          <p className="eyebrow mb-3">How it sits on you</p>
          <h3 className="display-2 text-ink mb-10">The fit checklist</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fitChecks.map((f) => (
              <div key={f.area} className="border-l-2 border-primary pl-5">
                <h4 className="font-display text-lg text-ink">{f.area}</h4>
                <p className="text-sm text-ink-soft mt-1 leading-relaxed">{f.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tailoring tip */}
        <div className="mt-20 bg-surface-alt rounded-card p-8 sm:p-10">
          <p className="eyebrow mb-3">The secret weapon</p>
          <h3 className="heading-3 text-ink mb-4">{tailoringTip.title}</h3>
          <p className="prose-w max-w-2xl">{tailoringTip.body}</p>
        </div>
      </div>
    </section>
  )
}
