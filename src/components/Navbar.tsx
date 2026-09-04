import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const RESUME_URL =
  'https://drive.google.com/file/d/1KgQr2QLefblzr1q6YikEwpYHMiQDgNJ8'

const NAV_ITEMS = [
  { href: '#hero', label: 'Home', external: false },
  { href: RESUME_URL, label: 'Resume', external: true },
  { href: '#projects', label: 'Project', external: false },
  { href: '#contact', label: 'Contact', external: false },
]

export function Navbar() {
  const [active, setActive] = useState('#hero')
  const [scrolled, setScrolled] = useState(false)

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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id === 'experience' || id === 'skills' || id === 'why-hire') setActive('')
            else setActive(`#${id}`)
          }
        })
      },
      { threshold: 0.35 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={cn(
          'pointer-events-auto flex w-full max-w-[1298px] items-center justify-between gap-1 rounded-[50px] border border-white/80 bg-dark px-2 py-2 text-white shadow-[0_12px_40px_rgba(23,23,23,0.18)] backdrop-blur-md transition-all sm:px-2.5',
          scrolled && 'shadow-[0_16px_48px_rgba(23,23,23,0.28)]'
        )}
      >
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.slice(0, 2).map((item) => (
            <NavLink
              key={item.href}
              {...item}
              active={!item.external && active === item.href}
              onClick={() => {
                if (!item.external) setActive(item.href)
              }}
            />
          ))}
        </div>

        <a
          href="#hero"
          className="mx-auto flex items-center gap-2.5 rounded-[60px] px-4 py-2 md:mx-0"
          aria-label="Kaushal Rathour home"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white sm:size-11 sm:text-base">
            KR
          </span>
          <span className="font-display text-lg font-bold tracking-tight sm:text-xl">KAUSHAL</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.slice(2).map((item) => (
            <NavLink
              key={item.href}
              {...item}
              active={!item.external && active === item.href}
              onClick={() => {
                if (!item.external) setActive(item.href)
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {NAV_ITEMS.filter((n) => n.href !== '#hero').map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              onClick={() => {
                if (!item.external) setActive(item.href)
              }}
              className={cn(
                'rounded-full px-2.5 py-2 text-xs',
                !item.external && active === item.href
                  ? 'bg-accent font-semibold'
                  : 'text-white/80'
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
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
