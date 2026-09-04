import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown, ExternalLink, Linkedin } from 'lucide-react'
import { experienceData, EXPERIENCE_LOGOS } from '@/data/experienceData'
import { cn } from '@/lib/utils'

const TYPE_STYLES: Record<string, string> = {
  'Full-time': 'bg-surface text-ink-strong border-[#e4e7ec]',
  Freelance: 'bg-surface text-ink border-[#e4e7ec]',
  Internship: 'bg-surface text-muted border-[#e4e7ec]',
}

/** Must match the grid-rows open/close transition duration. */
const EXPAND_MS = 500

function scrollByInstant(delta: number) {
  if (Math.abs(delta) < 0.5) return
  // html { scroll-behavior: smooth } would animate scrollBy/auto and look like a jump.
  window.scrollBy({ top: delta, behavior: 'instant' })
}

export function Experience() {
  const [expanded, setExpanded] = useState<string>(experienceData[0].id)
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const pinRef = useRef<{ id: string; top: number } | null>(null)
  const rafRef = useRef<number | null>(null)

  const setExpandedPinned = (nextId: string, pinId: string) => {
    const el = itemRefs.current[pinId]
    if (el) pinRef.current = { id: pinId, top: el.getBoundingClientRect().top }
    setExpanded(nextId)
  }

  const toggleExpanded = (id: string) => {
    setExpandedPinned(expanded === id ? '' : id, id)
  }

  const selectExpanded = (id: string) => {
    setExpandedPinned(id, id)
  }

  useLayoutEffect(() => {
    const pin = pinRef.current
    if (!pin) return

    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    const startedAt = performance.now()

    const keepPinned = (now: number) => {
      const el = itemRefs.current[pin.id]
      if (!el) {
        pinRef.current = null
        rafRef.current = null
        return
      }

      scrollByInstant(el.getBoundingClientRect().top - pin.top)

      // Run for the full CSS height transition; one-shot correction is too early.
      if (now - startedAt < EXPAND_MS) {
        rafRef.current = requestAnimationFrame(keepPinned)
      } else {
        pinRef.current = null
        rafRef.current = null
      }
    }

    keepPinned(startedAt)

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [expanded])

  return (
    <section id="experience" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1298px]">
        <h2 className="mb-14 text-center font-display text-4xl font-medium tracking-[-0.96px] text-ink sm:mb-20 sm:text-5xl lg:text-[64px]">
          My <span className="text-accent">Work Experience</span>
        </h2>

        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          <div className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-1.5">
              {experienceData.map((exp) => {
                const logo = EXPERIENCE_LOGOS[exp.id]
                const active = expanded === exp.id
                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => selectExpanded(exp.id)}
                    className={cn(
                      'w-full rounded-2xl border px-3 py-3 text-left transition-all duration-200',
                      active
                        ? 'border-accent/30 bg-accent-soft shadow-[0_8px_24px_rgba(253,133,58,0.12)]'
                        : 'border-transparent hover:bg-surface'
                    )}
                  >
                    <div className="mb-1 flex items-center gap-2.5">
                      {logo && (
                        <img
                          src={logo}
                          alt={exp.company}
                          className="size-5 shrink-0 rounded object-contain"
                        />
                      )}
                      <span
                        className={cn(
                          'truncate font-body text-sm font-medium',
                          active ? 'text-accent' : 'text-muted'
                        )}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <p className="ml-7 font-body text-xs text-muted">{exp.period}</p>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-3 left-[19px] top-3 w-px bg-gradient-to-b from-accent/70 via-accent/25 to-transparent" />

            {/* overflow-anchor:none — browser scroll anchoring fights the height swap */}
            <div className="[overflow-anchor:none]">
              {experienceData.map((exp, index) => {
                const open = expanded === exp.id
                const logo = EXPERIENCE_LOGOS[exp.id]

                return (
                  <div
                    key={exp.id}
                    ref={(node) => {
                      itemRefs.current[exp.id] = node
                    }}
                    className="relative pl-14 [overflow-anchor:none]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleExpanded(exp.id)}
                      className="group absolute left-0 top-4 focus:outline-none"
                      aria-expanded={open}
                      aria-label={`Toggle ${exp.company}`}
                    >
                      <span
                        className={cn(
                          'flex size-10 items-center justify-center rounded-full border-2 bg-white transition-all duration-300',
                          open
                            ? 'border-accent shadow-[0_0_0_4px_rgba(253,133,58,0.14)]'
                            : 'border-[#e4e7ec] group-hover:border-accent/50'
                        )}
                      >
                        {logo ? (
                          <img
                            src={logo}
                            alt={exp.company}
                            className="size-6 rounded-md object-contain"
                          />
                        ) : (
                          <span
                            className={cn(
                              'size-2.5 rounded-full transition-all duration-300',
                              open ? 'bg-accent' : 'bg-muted group-hover:bg-accent'
                            )}
                          />
                        )}
                      </span>
                    </button>

                    <div className={cn('mb-8', index === experienceData.length - 1 && 'mb-4')}>
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-4 pt-1 text-left"
                        onClick={() => toggleExpanded(exp.id)}
                        aria-expanded={open}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex flex-wrap items-center gap-2">
                            <span className="font-display text-lg font-semibold tracking-[-0.3px] text-ink-strong sm:text-xl">
                              {exp.role}
                            </span>
                            <span
                              className={cn(
                                'rounded-full border px-2 py-0.5 font-body text-xs font-medium',
                                TYPE_STYLES[exp.type]
                              )}
                            >
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-body text-sm text-muted">
                              {exp.company} · {exp.location}
                            </p>
                            {exp.website && (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-muted transition-colors hover:text-accent"
                                aria-label={`${exp.company} website`}
                              >
                                <ExternalLink size={13} />
                              </a>
                            )}
                            {exp.linkedin && (
                              <a
                                href={exp.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-muted transition-colors hover:text-ink-strong"
                                aria-label={`${exp.company} LinkedIn`}
                              >
                                <Linkedin size={13} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-2 pt-0.5">
                          <span className="font-body text-xs text-muted">
                            {exp.period}
                          </span>
                          <ChevronDown
                            size={15}
                            className={cn(
                              'text-muted transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                              open && 'rotate-180'
                            )}
                          />
                        </div>
                      </button>

                      <div
                        className={cn(
                          'grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        )}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={cn(
                              'flex flex-col gap-3 pt-4 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                              open ? 'opacity-100' : 'opacity-0'
                            )}
                          >
                            {exp.projects.map((proj) => (
                              <div
                                key={proj.name}
                                className="rounded-2xl border border-[#e4e7ec] bg-white p-5"
                              >
                                <div className="mb-4 flex items-center gap-3">
                                  {proj.projectLogo && (
                                    <div className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#e4e7ec] bg-surface">
                                      <img
                                        src={proj.projectLogo}
                                        alt={proj.name}
                                        className="size-full object-contain"
                                      />
                                    </div>
                                  )}
                                  <div className="flex min-w-0 flex-1 items-center gap-2">
                                    <p className="truncate font-body text-sm font-semibold text-ink-strong">
                                      {proj.name}
                                    </p>
                                    {proj.website && (
                                      <a
                                        href={proj.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="shrink-0 text-muted transition-colors hover:text-accent"
                                        aria-label={`${proj.name} website`}
                                      >
                                        <ExternalLink size={12} />
                                      </a>
                                    )}
                                  </div>
                                </div>
                                <ul className="mb-4 flex flex-col gap-2">
                                  {proj.bullets.map((b) => (
                                    <li
                                      key={b}
                                      className="flex gap-2.5 font-body text-sm leading-relaxed text-ink"
                                    >
                                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent" />
                                      {b}
                                    </li>
                                  ))}
                                </ul>
                                {proj.integrations && proj.integrations.length > 0 && (
                                  <div className="flex flex-wrap gap-2 border-t border-[#f2f4f7] pt-3">
                                    {proj.integrations.map((intg) => (
                                      <div
                                        key={intg.name}
                                        title={intg.name}
                                        className="flex h-8 items-center justify-center rounded-lg border border-[#e4e7ec] bg-surface px-3 transition-colors hover:border-accent/40"
                                      >
                                        <img
                                          src={intg.logo}
                                          alt={intg.name}
                                          className="h-5 max-w-[96px] object-contain"
                                        />
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
