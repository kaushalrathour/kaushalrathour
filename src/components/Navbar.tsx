import { useState, useEffect } from 'react'
import { Home, User, Briefcase, Code2, FolderOpen, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { icon: Home,       href: '#hero',       label: 'Home' },
  { icon: User,       href: '#about',      label: 'About' },
  { icon: Briefcase,  href: '#experience', label: 'Experience' },
  { icon: Code2,      href: '#skills',     label: 'Skills' },
  { icon: FolderOpen, href: '#projects',   label: 'Projects' },
  { icon: Mail,       href: '#contact',    label: 'Contact' },
]

export function Navbar() {
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => n.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.10)]">
      {NAV_ITEMS.map(({ icon: Icon, href, label }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          onClick={() => setActive(href)}
          className={cn(
            'p-3 rounded-full transition-all duration-300',
            active === href
              ? 'bg-violet-600 text-white shadow-[0_0_14px_rgba(109,40,217,0.35)]'
              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
          )}
        >
          <Icon size={20} strokeWidth={2} />
        </a>
      ))}
    </nav>
  )
}
