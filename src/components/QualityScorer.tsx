import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fabricTests } from '../data/quality'

type Answer = null | 'pass' | 'fail'

function verdictFor(score: number, total: number) {
  if (total === 0) return null
  const pct = score / total
  if (score === total) return { label: 'Exceptional quality — buy it', tone: '#3E4A3A' }
  if (pct >= 0.8) return { label: 'Very good — worth the investment', tone: '#3E4A3A' }
  if (pct >= 0.6) return { label: 'Decent — negotiate or pass', tone: '#A87C4F' }
  if (pct >= 0.4) return { label: 'Questionable — it may not last', tone: '#A87C4F' }
  return { label: 'Skip it — this one won\u2019t hold up', tone: '#A85A4F' }
}

export default function QualityScorer() {
  const [answers, setAnswers] = useState<Answer[]>(fabricTests.map(() => null))

  const answered = answers.filter((a) => a !== null).length
  const passed = answers.filter((a) => a === 'pass').length
  const allDone = answered === fabricTests.length
  const verdict = allDone ? verdictFor(passed, fabricTests.length) : null

  const setAnswer = (i: number, a: Answer) =>
    setAnswers((prev) => prev.map((v, idx) => (idx === i ? a : v)))

  return (
    <div className="card p-6 sm:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <div>
          <p className="eyebrow mb-2">Tool 02</p>
          <h3 className="heading-3 text-ink">Quality Check Scorer</h3>
        </div>
        <p className="text-sm text-ink-soft">
          <strong className="text-ink text-xl">{passed}</strong>/{fabricTests.length} passed
        </p>
      </div>

      <div className="space-y-4">
        {fabricTests.map((t, i) => {
          const ans = answers[i]
          return (
            <div
              key={t.name}
              className={`rounded-card border p-5 transition-colors ${
                ans === 'pass'
                  ? 'border-accent/40 bg-accent/5'
                  : ans === 'fail'
                  ? 'border-[#A85A4F]/30 bg-[#A85A4F]/5'
                  : 'border-border'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-[220px] flex-1">
                  <p className="font-display text-lg text-ink">{t.name}</p>
                  <p className="text-sm text-ink-soft mt-1">{t.instruction}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setAnswer(i, ans === 'pass' ? null : 'pass')}
                    className={`btn text-sm ${
                      ans === 'pass' ? 'btn-primary' : 'btn-ghost'
                    }`}
                  >
                    Pass ✓
                  </button>
                  <button
                    onClick={() => setAnswer(i, ans === 'fail' ? null : 'fail')}
                    className={`btn text-sm ${
                      ans === 'fail' ? 'bg-[#A85A4F] text-white border-transparent' : 'btn-ghost'
                    }`}
                  >
                    Fail ✗
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {ans !== null && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-ink-soft mt-4 overflow-hidden"
                  >
                    {t.verdict}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <AnimatePresence>
        {verdict && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="mt-8 flex items-center gap-4"
          >
            <span
              className="inline-flex px-5 py-2.5 rounded-pill text-white font-semibold"
              style={{ backgroundColor: verdict.tone }}
            >
              {verdict.label}
            </span>
            <span className="text-sm text-ink-soft">
              You passed {passed} of {fabricTests.length} fabric tests.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
