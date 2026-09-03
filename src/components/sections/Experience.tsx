import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown, ExternalLink, Linkedin } from 'lucide-react'
import { experienceData, EXPERIENCE_LOGOS } from '@/data/experienceData'
import { cn } from '@/lib/utils'

const TYPE_STYLES: Record<string, string> = {
  Indie:       'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Full-time': 'bg-violet-50 text-violet-700 border-violet-200',
  Freelance:   'bg-blue-50 text-blue-700 border-blue-200',
  Internship:  'bg-amber-50 text-amber-700 border-amber-200',
}

export function Experience() {
  const [expanded, setExpanded] = useState<string>(experienceData[0].id)
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const anchor = useRef<{ id: string; top: number } | null>(null)

  const changeExpanded = (nextId: string, anchorId: string) => {
    const el = itemRefs.current[anchorId]
    if (el) anchor.current = { id: anchorId, top: el.getBoundingClientRect().top }
    setExpanded(nextId)
  }

  useLayoutEffect(() => {
    const pending = anchor.current
    if (!pending) return
    anchor.current = null
    const el = itemRefs.current[pending.id]
    if (!el) return
    const delta = el.getBoundingClientRect().top - pending.top
    if (Math.abs(delta) > 1) window.scrollBy(0, delta)
    const top = el.getBoundingClientRect().top
    if (top < 8 || top > window.innerHeight * 0.45) {
      el.scrollIntoView({ block: 'nearest' })
    }
  }, [expanded])

  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-14">My journey</h2>

        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* Desktop left nav */}
          <div className="hidden lg:block">
            <div className="sticky top-8 space-y-1.5">
              {experienceData.map((exp) => {
                const logo = EXPERIENCE_LOGOS[exp.id]
                const active = expanded === exp.id
                return (
                  <button key={exp.id} onClick={() => changeExpanded(exp.id, exp.id)}
                    className={cn(
                      'w-full text-left px-3 py-3 rounded-xl transition-all duration-200',
                      active ? 'bg-violet-50 border border-violet-200 shadow-sm' : 'hover:bg-gray-50 border border-transparent'
                    )}
                  >
                    <div className="flex items-center gap-2.5 mb-1">
                      {logo && <img src={logo} alt={exp.company} className="w-5 h-5 rounded object-contain flex-shrink-0" />}
                      <span className={cn('text-sm font-medium truncate', active ? 'text-violet-700' : 'text-gray-500')}>{exp.company}</span>
                    </div>
                    <p className="text-xs text-gray-400 ml-7">{exp.period}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-violet-400/70 via-violet-200/50 to-transparent" />

            <div className="space-y-0">
              {experienceData.map((exp, index) => {
                const open = expanded === exp.id
                const logo = EXPERIENCE_LOGOS[exp.id]

                return (
                  <div
                    key={exp.id}
                    ref={(node) => { itemRefs.current[exp.id] = node }}
                    className="relative pl-14"
                  >
                    {/* Timeline dot */}
                    <button
                      type="button"
                      onClick={(e) => { e.preventDefault(); changeExpanded(open ? '' : exp.id, exp.id) }}
                      className="absolute left-0 top-[16px] focus:outline-none group" aria-label={`Toggle ${exp.company}`}>
                      <span className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300',
                        open ? 'border-violet-500 bg-violet-50 shadow-[0_0_0_4px_rgba(109,40,217,0.12)]'
                             : 'border-gray-200 bg-white group-hover:border-violet-300 shadow-sm'
                      )}>
                        {logo
                          ? <img src={logo} alt={exp.company} className="w-6 h-6 rounded-md object-contain" />
                          : <span className={cn('h-2.5 w-2.5 rounded-full transition-all duration-300', open ? 'bg-violet-500' : 'bg-gray-300 group-hover:bg-violet-400')} />
                        }
                      </span>
                    </button>

                    <div className={cn('mb-8', index === experienceData.length - 1 && 'mb-4')}>
                      {/* Header */}
                      <button className="w-full text-left flex items-start justify-between gap-4 pt-1"
                        onClick={() => changeExpanded(open ? '' : exp.id, exp.id)}>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-gray-900 font-semibold">{exp.role}</span>
                            <span className={cn('px-2 py-0.5 rounded-full text-xs font-medium border', TYPE_STYLES[exp.type])}>
                              {exp.type}
                            </span>
                          </div>
                          {/* Company + location + links */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="text-gray-400 text-sm">{exp.company} · {exp.location}</p>
                            {exp.website && (
                              <a href={exp.website} target="_blank" rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-gray-300 hover:text-violet-600 transition-colors">
                                <ExternalLink size={13} />
                              </a>
                            )}
                            {exp.linkedin && (
                              <a href={exp.linkedin} target="_blank" rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-gray-300 hover:text-blue-600 transition-colors">
                                <Linkedin size={13} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                          <span className="text-gray-400 text-xs font-mono hidden sm:block">{exp.period}</span>
                          <ChevronDown size={15} className={cn('text-gray-400 transition-transform duration-300', open && 'rotate-180')} />
                        </div>
                      </button>

                      {/* Expanded content */}
                      <div className={cn(open ? 'mt-4' : 'hidden')}>
                        <div className="space-y-3">
                          {exp.projects.map((proj) => (
                            <div key={proj.name} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                              <div className="flex items-center gap-3 mb-4">
                                {proj.projectLogo && (
                                  <div className="w-9 h-9 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                                    <img src={proj.projectLogo} alt={proj.name} className="w-full h-full object-contain" />
                                  </div>
                                )}
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                  <p className="text-gray-900 text-sm font-semibold truncate">{proj.name}</p>
                                  {proj.website && (
                                    <a href={proj.website} target="_blank" rel="noreferrer"
                                      className="text-gray-300 hover:text-violet-600 transition-colors flex-shrink-0">
                                      <ExternalLink size={12} />
                                    </a>
                                  )}
                                </div>
                              </div>
                              <ul className="space-y-2 mb-4">
                                {proj.bullets.map((b, i) => (
                                  <li key={i} className="flex gap-2.5 text-gray-500 text-sm leading-relaxed">
                                    <span className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-violet-400" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                              {proj.integrations && proj.integrations.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-50">
                                  {proj.integrations.map((intg) => (
                                    <div key={intg.name} title={intg.name}
                                      className="h-7 px-2.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center hover:border-violet-200 transition-colors">
                                      <img src={intg.logo} alt={intg.name} className="h-4 max-w-[64px] object-contain" />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
