import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />

      <div className="container-w relative z-10 pb-16 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-border tracking-[0.3em] uppercase text-xs sm:text-sm mb-5"
        >
          The forever wardrobe · an interactive guide
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-1 text-white mb-6"
        >
          WearWise
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/85 text-lg sm:text-2xl max-w-xl font-light leading-relaxed"
        >
          Learn to buy fewer, better things — and build a wardrobe that lasts
          for years, not weeks.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#mindset" className="btn btn-primary">
            Start the guide
          </a>
          <a href="#calculator" className="btn btn-ghost text-white border-white/30">
            Try the calculator
          </a>
        </motion.div>
      </div>
    </section>
  )
}
