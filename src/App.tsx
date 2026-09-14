import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ChapterRail from './components/ChapterRail'
import MindsetSection from './sections/MindsetSection'
import QualitySection from './sections/QualitySection'
import PiecesSection from './sections/PiecesSection'
import AccessoriesSection from './sections/AccessoriesSection'
import TrendsSection from './sections/TrendsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Nav />
      <Hero />
      <ChapterRail />
      <MindsetSection />
      <QualitySection />
      <PiecesSection />
      <AccessoriesSection />
      <TrendsSection />
      <Footer />
    </div>
  )
}
