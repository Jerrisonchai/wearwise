import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trendQuiz } from '../data/trends'

type Choice = 'timeless' | 'trend' | null

function archetypeFor(score: number, total: number) {
  const pct = score / total
  if (pct >= 0.8)
    return {
      title: 'The Timeless Eye',
      body: 'You instinctively separate lasting pieces from passing fads. You buy for years, not moments — and your wardrobe rewards you for it.',
      tone: '#3E4A3A',
    }
  if (pct >= 0.5)
    return {
      title: 'The Balanced Selector',
      body: 'You have a good instinct, with a few blind spots. A couple of the pieces that tempted you were trends in disguise — keep the three questions close.',
      tone: '#A87C4F',
    }
  return {
    title: 'The Trend Catcher',
    body: 'You\u2019re drawn to the energy of the moment — which is fun, but it means more pieces that won\u2019t last. Pause before you buy, and ask if it\u2019ll still work in five years.',
    tone: '#A85A4F',
  }
}

export default function StyleDnaQuiz() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Choice[]>(trendQuiz.map(() => null))
  const [finished, setFinished] = useState(false)

  const current = trendQuiz[index]
  const choice = answers[index]
  const answeredCount = answers.filter((a) => a !== null).length
  const correct = answers.filter(
    (a, i) => (a === 'timeless') === trendQuiz[i].timeless,
  ).length

  const answer = (c: 'timeless' | 'trend') => {
    if (choice !== null) return
    setAnswers((prev) => prev.map((v, i) => (i === index ? c : v)))
  }

  const next = () => {
    if (index + 1 >= trendQuiz.length) setFinished(true)
    else setIndex((i) => i + 1)
  }

  const restart = () => {
    setAnswers(trendQuiz.map(() => null))
    setIndex(0)
    setFinished(false)
  }

  if (finished) {
    const archetype = archetypeFor(correct, trendQuiz.length)
    return (
      <div className="card p-8 sm:p-12 text-center">
        <p className="eyebrow mb-4">Your result</p>
        <motion.h3
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="display-1 text-ink mb-3"
          style={{ color: archetype.tone }}
        >
          {archetype.title}
        </motion.h3>
        <p className="text-lg text-ink-soft mb-6">
          You got <strong className="text-ink">{correct}</strong> of{' '}
          {trendQuiz.length} right.
        </p>
        <p className="prose-w max-w-xl mx-auto mb-8">{archetype.body}</p>

        <div className="w-full max-w-md mx-auto h-2 rounded-pill bg-border overflow-hidden mb-8">
          <div
            className="h-full rounded-pill"
            style={{
              width: `${(correct / trendQuiz.length) * 100}%`,
              backgroundColor: archetype.tone,
            }}
          />
        </div>

        <button onClick={restart} className="btn btn-primary">
          Retake the quiz
        </button>
      </div>
    )
  }

  const isCorrect = choice === null ? null : (choice === 'timeless') === current.timeless

  return (
    <div className="card p-6 sm:p-10">
      <div className="flex items-center justify-between mb-2">
        <p className="eyebrow">Tool 03 · Style DNA</p>
        <p className="text-sm text-ink-soft">
          {index + 1} / {trendQuiz.length}
        </p>
      </div>
      <div className="h-1.5 rounded-pill bg-border overflow-hidden mb-8">
        <div
          className="h-full bg-primary rounded-pill transition-all duration-300"
          style={{ width: `${((index + (choice !== null ? 1 : 0)) / trendQuiz.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-sm text-ink-soft mb-3">Timeless, or a passing trend?</p>
          <h3 className="display-2 text-ink mb-8">{current.item}</h3>

          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => answer('timeless')}
              disabled={choice !== null}
              className={`btn text-base ${
                choice === 'timeless' ? 'btn-primary' : 'btn-ghost'
              } disabled:cursor-not-allowed`}
            >
              Timeless
            </button>
            <button
              onClick={() => answer('trend')}
              disabled={choice !== null}
              className={`btn text-base ${
                choice === 'trend'
                  ? 'bg-[#A85A4F] text-white border-transparent'
                  : 'btn-ghost'
              } disabled:cursor-not-allowed`}
            >
              Passing trend
            </button>
          </div>

          <AnimatePresence>
            {choice !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div
                  className={`rounded-card border p-5 mb-6 ${
                    isCorrect
                      ? 'border-accent/40 bg-accent/5'
                      : 'border-[#A85A4F]/30 bg-[#A85A4F]/5'
                  }`}
                >
                  <p className={`font-semibold mb-1 ${isCorrect ? 'text-accent' : 'text-[#A85A4F]'}`}>
                    {isCorrect ? 'Correct' : 'Not quite'}
                  </p>
                  <p className="text-sm text-ink-soft leading-relaxed">{current.why}</p>
                </div>
                <button onClick={next} className="btn btn-primary">
                  {index + 1 >= trendQuiz.length ? 'See my result' : 'Next'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
