import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { projectsData, type StoreLink } from '@/data/projectsData'
import { cn } from '@/lib/utils'
import appStoreBadge from '@/assets/app-store-badge.png'
import playStoreBadge from '@/assets/google-play-badge.png'

const KHELCOACH_LABELS = ['Athlete', 'Coach', 'Academy']

function StoreBadge({
  store,
  compact = false,
}: {
  store: StoreLink
  compact?: boolean
}) {
  const isIos = store.platform === 'ios'
  return (
    <a
      href={store.url}
      target="_blank"
      rel="noreferrer"
      aria-label={isIos ? 'Download on the App Store' : 'Get it on Google Play'}
      className={cn(
        'inline-flex shrink-0 items-center justify-center transition hover:opacity-90',
        compact ? 'h-8 sm:h-9' : 'h-11 sm:h-12'
      )}
    >
      <img
        src={isIos ? appStoreBadge : playStoreBadge}
        alt={isIos ? 'Download on the App Store' : 'Get it on Google Play'}
        width={isIos ? 467 : 564}
        height={isIos ? 156 : 168}
        className="h-full w-auto max-w-none object-contain"
      />
    </a>
  )
}

function StoreLinks({ stores, id }: { stores: StoreLink[]; id: string }) {
  if (id === 'khelcoach') {
    const ios = stores.filter((s) => s.platform === 'ios')
    const android = stores.filter((s) => s.platform === 'android')
    return (
      <div className="flex h-full w-full flex-col justify-end gap-1.5 sm:gap-2">
        {ios.map((store, index) => (
          <div
            key={store.url}
            className="grid w-full grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[6rem_minmax(0,1fr)]"
          >
            <span className="font-body text-xs leading-none text-white/70 sm:text-sm">
              {KHELCOACH_LABELS[index]}
            </span>
            <div className="flex min-w-0 items-center justify-between gap-2">
              <StoreBadge store={store} compact />
              {android[index] ? <StoreBadge store={android[index]} compact /> : <span />}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex h-full w-full items-end',
        stores.length > 1 ? 'justify-between gap-3' : 'justify-start'
      )}
    >
      {stores.map((store) => (
        <StoreBadge key={store.url} store={store} />
      ))}
    </div>
  )
}

export function Projects() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))],
    []
  )
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(0)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projectsData
    return projectsData.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const safeIndex = Math.min(activeIndex, Math.max(filtered.length - 1, 0))
  const active = filtered[safeIndex]
  const showPagination = filtered.length > 1
  const externalUrl = active?.live ?? active?.website

  return (
    <section id="projects" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-10 sm:mb-14">
          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.96px] text-ink sm:text-5xl lg:text-[64px]">
            Selected <span className="text-accent">work</span>
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category)
                setActiveIndex(0)
              }}
              className={cn(
                'rounded-[24px] px-6 py-3.5 font-body text-base tracking-tight transition sm:text-lg',
                activeCategory === category
                  ? 'bg-dark text-white'
                  : 'bg-surface text-black hover:bg-[#e8eaee]'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="h-[560px] sm:h-[580px] lg:h-[500px]">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.article
                key={`${activeCategory}-${active.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="flex h-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1f1f1f] via-[#2c2118] to-accent/80"
              >
                <div className="grid h-full w-full lg:grid-cols-[1fr_1.15fr]">
                  <div className="relative hidden h-full items-center justify-center p-10 lg:flex">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(253,133,58,0.35),transparent_60%)]" />
                    {active.logo ? (
                      <div className="relative z-10 flex h-52 w-full max-w-[420px] items-center justify-center">
                        <img
                          src={active.logo}
                          alt=""
                          className={cn(
                            'drop-shadow-2xl',
                            active.logoWide
                              ? 'max-h-full max-w-full object-contain'
                              : 'size-44 rounded-[32px] object-cover xl:size-52'
                          )}
                        />
                      </div>
                    ) : null}
                  </div>

                  <div className="relative flex h-full min-h-0 flex-col p-6 sm:p-10 lg:py-12 lg:pr-12">
                    <div className="flex h-14 shrink-0 items-center justify-between gap-4 sm:h-16">
                      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        {active.logo ? (
                          <div className="flex size-14 shrink-0 items-center justify-center lg:hidden">
                            <img
                              src={active.logo}
                              alt=""
                              className={cn(
                                'drop-shadow-lg',
                                active.logoWide
                                  ? 'max-h-10 max-w-full object-contain'
                                  : 'size-14 rounded-2xl object-cover'
                              )}
                            />
                          </div>
                        ) : (
                          <div className="size-14 shrink-0 lg:hidden" aria-hidden />
                        )}
                        <h3 className="truncate font-display text-3xl font-bold tracking-[-0.72px] text-[#fffaf5] sm:text-4xl lg:text-5xl">
                          {active.name}
                        </h3>
                      </div>
                      <div className="flex size-12 shrink-0 items-center justify-center sm:size-14">
                        {externalUrl ? (
                          <a
                            href={externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${active.name}`}
                            className="flex size-full items-center justify-center rounded-full border border-accent text-accent transition hover:bg-accent hover:text-white"
                          >
                            <ArrowUpRight className="size-6" />
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-5 h-[4.75rem] shrink-0 overflow-hidden font-body text-base leading-relaxed tracking-[-0.3px] text-white/85 sm:mt-6 sm:h-[6.5rem] sm:text-lg">
                      <span className="line-clamp-3 sm:line-clamp-4">{active.description}</span>
                    </p>

                    {(active.stack.length > 0 || (active.integrations?.length ?? 0) > 0) && (
                      <div className="mt-3 flex shrink-0 flex-wrap gap-2">
                        {[...active.stack, ...(active.integrations ?? [])].map((item) => (
                          <span
                            key={item.name}
                            title={item.name}
                            className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5"
                          >
                            {'logo' in item && item.logo ? (
                              <img
                                src={item.logo}
                                alt=""
                                className="h-4 max-w-[56px] object-contain"
                              />
                            ) : null}
                            <span className="font-body text-xs text-white/80">{item.name}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="min-h-0 flex-1" aria-hidden />

                    <div className="h-[132px] shrink-0 sm:h-[148px]">
                      {active.stores && active.stores.length > 0 ? (
                        <StoreLinks stores={active.stores} id={active.id} />
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            ) : null}
          </AnimatePresence>
        </div>

        {showPagination ? (
          <div className="mt-8 flex items-center justify-center gap-3">
            {filtered.map((project, index) => (
              <button
                key={project.id}
                type="button"
                aria-label={`Show ${project.name}`}
                aria-current={index === safeIndex}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'h-3.5 rounded-full transition-all',
                  index === safeIndex ? 'w-14 bg-accent' : 'w-3.5 bg-[#e4e7ec] hover:bg-muted'
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
