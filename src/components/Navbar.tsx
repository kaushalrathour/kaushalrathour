import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const RESUME_URL =
  'https://drive.google.com/file/d/1KgQr2QLefblzr1q6YikEwpYHMiQDgNJ8'

const NAV_ITEMS = [
  { href: '#hero', label: 'Home', external: false },
  { href: '#projects', label: 'Projects', external: false },
  { href: '#experience', label: 'Experience', external: false },
  { href: RESUME_URL, label: 'Resume', external: true },
  { href: '#contact', label: 'Contact', external: false },
]

const MOBILE_ITEMS = NAV_ITEMS.filter((n) => n.href !== '#hero')

/** Ignore section spy while smooth-scrolling to a clicked nav target. */
const NAV_LOCK_MS = 1200

export function Navbar() {
  const [active, setActive] = useState('#hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navLockRef = useRef(false)
  const unlockTimerRef = useRef<number | null>(null)
  const scrollEndHandlerRef = useRef<(() => void) | null>(null)

  const releaseNavLock = () => {
    navLockRef.current = false
    if (unlockTimerRef.current != null) {
      window.clearTimeout(unlockTimerRef.current)
      unlockTimerRef.current = null
    }
    if (scrollEndHandlerRef.current) {
      window.removeEventListener('scrollend', scrollEndHandlerRef.current)
      scrollEndHandlerRef.current = null
    }
  }

  const lockToSection = (href: string) => {
    releaseNavLock()
    navLockRef.current = true
    setActive(href)

    const onScrollEnd = () => {
      releaseNavLock()
    }
    scrollEndHandlerRef.current = onScrollEnd
    window.addEventListener('scrollend', onScrollEnd)
    unlockTimerRef.current = window.setTimeout(releaseNavLock, NAV_LOCK_MS)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', 'projects', 'experience', 'why-hire', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        if (navLockRef.current) return

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const top = visible[0]
        if (!top) return

        const id = top.target.id
        if (id === 'skills' || id === 'why-hire') setActive('')
        else setActive(`#${id}`)
      },
      { threshold: [0.2, 0.35, 0.5] }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => {
      observer.disconnect()
      releaseNavLock()
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const goTo = (href: string, external: boolean) => {
    if (!external) lockToSection(href)
    setMenuOpen(false)
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <div className="pointer-events-auto relative w-full max-w-[1298px]">
        <nav
          className={cn(
            'flex w-full items-center justify-between gap-2 rounded-[50px] border border-white/80 bg-dark px-2 py-2 text-white shadow-[0_12px_40px_rgba(23,23,23,0.18)] backdrop-blur-md transition-all sm:px-2.5',
            scrolled && 'shadow-[0_16px_48px_rgba(23,23,23,0.28)]'
          )}
        >
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <NavLink
                key={item.href}
                {...item}
                active={!item.external && active === item.href}
                onClick={() => {
                  if (!item.external) lockToSection(item.href)
                }}
              />
            ))}
          </div>

          <a
            href="#hero"
            onClick={() => {
              lockToSection('#hero')
              setMenuOpen(false)
            }}
            className="group flex min-w-0 items-center gap-2.5 rounded-[60px] px-2 py-2 transition-[gap] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:gap-2 active:gap-2 sm:px-4"
            aria-label="Kaushal Rathour home"
          >
            <span className="flex size-10 shrink-0 origin-center items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[0.78] group-hover:-translate-x-1 group-active:scale-[0.78] group-active:-translate-x-1 sm:size-11 sm:group-hover:-translate-x-1.5 sm:group-active:-translate-x-1.5">
              KR
            </span>
            <span className="relative flex h-11 min-w-[9.5rem] items-center overflow-hidden sm:min-w-[12.75rem]">
              <span className="absolute inset-y-0 left-0 flex items-center font-display text-lg font-bold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pointer-events-none group-hover:translate-x-2 group-hover:opacity-0 group-active:pointer-events-none group-active:translate-x-2 group-active:opacity-0 sm:text-xl">
                KAUSHAL
              </span>
              <span className="absolute inset-y-0 left-0 flex -translate-x-2 flex-col justify-center opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 group-active:translate-x-0 group-active:opacity-100">
                <span className="font-display text-[12px] font-normal leading-none tracking-[-0.21px] text-white/80 sm:text-[14px]">
                  Made by
                </span>
                <span className="mt-0.5 font-display text-[17px] font-semibold leading-none tracking-[-0.3px] whitespace-nowrap text-white sm:text-[20px]">
                  Kaushal Rathour
                </span>
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.slice(3).map((item) => (
              <NavLink
                key={item.href}
                {...item}
                active={!item.external && active === item.href}
                onClick={() => {
                  if (!item.external) lockToSection(item.href)
                }}
              />
            ))}
          </div>

          <button
            type="button"
            className="flex size-11 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/10 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {menuOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 cursor-default bg-dark/40 md:hidden"
              aria-label="Close menu overlay"
              onClick={() => setMenuOpen(false)}
            />
            <div
              id="mobile-nav-menu"
              className="absolute inset-x-0 top-[calc(100%+0.75rem)] z-50 overflow-hidden rounded-[28px] border border-white/80 bg-dark p-2 shadow-[0_16px_48px_rgba(23,23,23,0.28)] md:hidden"
            >
              <div className="flex flex-col gap-1">
                {MOBILE_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    onClick={() => goTo(item.href, item.external)}
                    className={cn(
                      'rounded-[20px] px-5 py-3.5 font-body text-base tracking-[-0.3px] transition-colors',
                      !item.external && active === item.href
                        ? 'bg-accent font-semibold text-white'
                        : 'font-normal text-white/90 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  )
}

function NavLink({
  href,
  label,
  active,
  external,
  onClick,
}: {
  href: string
  label: string
  active: boolean
  external: boolean
  onClick: () => void
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick}
      className={cn(
        'rounded-[60px] px-5 py-3 font-body text-[15px] tracking-[-0.3px] transition-colors lg:px-8 lg:text-[18px]',
        active ? 'bg-accent font-bold text-white' : 'font-normal text-white/90 hover:text-white'
      )}
    >
      {label}
    </a>
  )
}
