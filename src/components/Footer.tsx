export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-w py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-xl text-ink">
            Wear<span className="text-primary">Wise</span>
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Dress smarter. Buy once. Wear forever.
          </p>
        </div>
        <p className="text-xs text-ink-soft text-center sm:text-right max-w-xs">
          An interactive guide to the investment-wardrobe mindset — original
          writing, for educational use.
        </p>
      </div>
    </footer>
  )
}
