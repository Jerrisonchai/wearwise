import { useEffect, useState } from 'react'
import { chapters } from '../data/chapters'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-w flex items-center justify-between h-16 sm:h-[72px]">
        <a
          href="#top"
          className="font-display text-2xl tracking-tight text-ink"
        >
          Wear<span className="text-primary">Wise</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="text-sm text-ink-soft hover:text-primary transition-colors"
            >
              {c.number} {c.title.split(':')[0]}
            </a>
          ))}
        </nav>

        <a href="#mindset" className="btn btn-primary hidden sm:inline-flex">
          Start reading
        </a>
      </div>
    </header>
  )
}
