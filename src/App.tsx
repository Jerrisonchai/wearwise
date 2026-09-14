import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ChapterRail from './components/ChapterRail'
import MindsetSection from './sections/MindsetSection'
import QualitySection from './sections/QualitySection'
import TrendsSection from './sections/TrendsSection'
import Footer from './components/Footer'
import { chapters } from './data/chapters'

function Placeholder({ id }: { id: string }) {
  const chapter = chapters.find((c) => c.id === id)!
  return (
    <section id={id} className="section scroll-mt-20 border-t border-border">
      <div className="container-w">
        <p className="eyebrow mb-3">Chapter {chapter.number}</p>
        <h2 className="display-2 text-ink mb-4">{chapter.title}</h2>
        <p className="prose-w max-w-2xl mb-6">{chapter.description}</p>
        <span className="inline-flex px-4 py-2 rounded-pill bg-surface-alt border border-border text-sm text-ink-soft">
          Coming in the next phase
        </span>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Nav />
      <Hero />
      <ChapterRail />
      <MindsetSection />
      <QualitySection />
      <Placeholder id="pieces" />
      <Placeholder id="accessories" />
      <TrendsSection />
      <Footer />
    </div>
  )
}
