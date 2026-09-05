import { useEffect } from 'react'

/**
 * SPA cold-load fix: browser tries to scroll to #hash before React mounts sections,
 * so /#experience lands on home. In-app nav works because the nodes already exist.
 */
export function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const raw = window.location.hash
      if (!raw || raw === '#') return

      const id = decodeURIComponent(raw.slice(1))
      const el = document.getElementById(id)
      if (!el) return

      // Instant on load so we don't animate from top after a failed native jump.
      el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }

    const run = () => scrollToHash()

    // After paint + short retries for fonts/images shifting layout.
    const raf = requestAnimationFrame(() => {
      run()
      requestAnimationFrame(run)
    })
    const t1 = window.setTimeout(run, 80)
    const t2 = window.setTimeout(run, 300)
    const t3 = window.setTimeout(run, 700)

    window.addEventListener('pageshow', run)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      window.removeEventListener('pageshow', run)
    }
  }, [])

  return null
}
