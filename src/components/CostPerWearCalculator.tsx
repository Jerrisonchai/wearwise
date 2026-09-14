import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { costPerWearExamples } from '../data/mindset'

function verdictFor(cpw: number) {
  if (cpw <= 0) return { label: '', tone: '' }
  if (cpw < 0.5) return { label: 'Excellent value', tone: '#3E4A3A' }
  if (cpw < 1) return { label: 'Great value', tone: '#3E4A3A' }
  if (cpw < 2) return { label: 'Reasonable', tone: '#A87C4F' }
  if (cpw < 5) return { label: 'Wear it more to justify', tone: '#A87C4F' }
  return { label: 'Think twice', tone: '#A85A4F' }
}

function money(n: number) {
  return `$${n.toFixed(2)}`
}

export default function CostPerWearCalculator() {
  const [price, setPrice] = useState(120)
  const [wearsPerWeek, setWearsPerWeek] = useState(2)
  const [years, setYears] = useState(3)

  const totalWears = Math.round(wearsPerWeek * 52 * years)
  const costPerWear = totalWears > 0 ? price / totalWears : 0
  const verdict = verdictFor(costPerWear)

  const comparisons = useMemo(
    () =>
      costPerWearExamples.map((ex) => ({
        ...ex,
        cpw: ex.price / ex.wears,
      })),
    [],
  )

  const maxCpw = Math.max(costPerWear, ...comparisons.map((c) => c.cpw))

  return (
    <div id="calculator" className="card p-6 sm:p-10">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div>
          <p className="eyebrow mb-2">Tool 01</p>
          <h3 className="heading-3 text-ink mb-6">Cost-Per-Wear Calculator</h3>

          <label className="block mb-5">
            <span className="block text-sm font-semibold text-ink mb-2">
              Price
            </span>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft">
                $
              </span>
              <input
                type="number"
                min={0}
                value={price}
                onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
                className="field pl-8"
              />
            </div>
          </label>

          <label className="block mb-2">
            <span className="flex justify-between text-sm font-semibold text-ink mb-2">
              <span>Wears per week</span>
              <span className="text-primary">{wearsPerWeek}×</span>
            </span>
            <input
              type="range"
              min={0.5}
              max={7}
              step={0.5}
              value={wearsPerWeek}
              onChange={(e) => setWearsPerWeek(Number(e.target.value))}
              className="w-full accent-[#A87C4F]"
            />
          </label>

          <label className="block">
            <span className="flex justify-between text-sm font-semibold text-ink mb-2">
              <span>Years you'll keep it</span>
              <span className="text-primary">{years} yrs</span>
            </span>
            <input
              type="range"
              min={1}
              max={15}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-[#A87C4F]"
            />
          </label>

          <p className="text-sm text-ink-soft mt-4">
            ≈ <strong className="text-ink">{totalWears.toLocaleString()}</strong>{' '}
            total wears over {years} {years === 1 ? 'year' : 'years'}
          </p>
        </div>

        {/* Result */}
        <div className="bg-surface-alt rounded-card p-6 sm:p-8 flex flex-col justify-center">
          <p className="text-sm text-ink-soft mb-2">Your cost per wear</p>
          <motion.p
            key={costPerWear.toFixed(2)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-1 text-ink"
          >
            {money(costPerWear)}
          </motion.p>

          {verdict.label && (
            <span
              className="mt-3 inline-flex self-start px-4 py-1.5 rounded-pill text-sm font-semibold text-white"
              style={{ backgroundColor: verdict.tone }}
            >
              {verdict.label}
            </span>
          )}

          <div className="mt-8 space-y-4">
            <p className="text-sm font-semibold text-ink">
              Compare with the classic examples
            </p>
            {comparisons.map((c) => {
              const width = maxCpw > 0 ? (c.cpw / maxCpw) * 100 : 0
              return (
                <div key={c.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-ink-soft">{c.label}</span>
                    <span className="font-semibold text-ink">
                      {money(c.cpw)} / wear
                    </span>
                  </div>
                  <div className="h-2 rounded-pill bg-border overflow-hidden">
                    <div
                      className="h-full rounded-pill bg-primary"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
