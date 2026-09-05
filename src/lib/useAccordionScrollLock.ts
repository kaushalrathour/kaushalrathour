import { useLayoutEffect, useRef } from 'react'

export const ACCORDION_EXPAND_MS = 500

type ViewportLock = { kind: 'viewport'; y: number }
type ElementLock = {
  kind: 'element'
  getElement: () => HTMLElement | null
  top: number
}

export type AccordionScrollLock = ViewportLock | ElementLock

/**
 * Keeps the page visually stable while accordion rows animate height.
 * - viewport: freeze window.scrollY (left nav / no local click target)
 * - element: keep a row's top at the pre-click viewport Y (timeline click under cursor)
 */
export function useAccordionScrollLock(expandedKey: string) {
  const lockRef = useRef<AccordionScrollLock | null>(null)
  const rafRef = useRef<number | null>(null)

  const armLock = (lock: AccordionScrollLock) => {
    lockRef.current = lock
  }

  useLayoutEffect(() => {
    const lock = lockRef.current
    if (!lock) return

    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    const html = document.documentElement
    const previousOverflowAnchor = html.style.overflowAnchor
    html.style.overflowAnchor = 'none'

    const startedAt = performance.now()

    const apply = () => {
      if (lock.kind === 'viewport') {
        if (Math.abs(window.scrollY - lock.y) > 0.5) {
          window.scrollTo({ top: lock.y, behavior: 'instant' })
        }
        return
      }

      const el = lock.getElement()
      if (!el) return
      const delta = el.getBoundingClientRect().top - lock.top
      if (Math.abs(delta) > 0.5) {
        window.scrollBy({ top: delta, behavior: 'instant' })
      }
    }

    const tick = (now: number) => {
      apply()
      if (now - startedAt < ACCORDION_EXPAND_MS) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        if (lockRef.current === lock) lockRef.current = null
        rafRef.current = null
        html.style.overflowAnchor = previousOverflowAnchor
      }
    }

    apply()
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      html.style.overflowAnchor = previousOverflowAnchor
    }
  }, [expandedKey])

  return { armLock }
}
