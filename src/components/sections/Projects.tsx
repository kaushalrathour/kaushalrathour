import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { projectsData, type StoreLink } from '@/data/projectsData'
import { cn } from '@/lib/utils'
import appStoreBadge from '@/assets/app-store-badge.png'
import playStoreBadge from '@/assets/google-play-badge.png'

const KHELCOACH_LABELS = ['Athlete', 'Coach', 'Academy']

function StoreBadge({ store }: { store: StoreLink }) {
  const isIos = store.platform === 'ios'
  return (
    <a
      href={store.url}
      target="_blank"
      rel="noreferrer"
      aria-label={isIos ? 'Download on the App Store' : 'Get it on Google Play'}
      className="inline-flex h-11 w-[148px] items-center justify-center transition hover:opacity-90 sm:h-12 sm:w-[160px]"
    >
      <img
        src={isIos ? appStoreBadge : playStoreBadge}
        alt={isIos ? 'Download on the App Store' : 'Get it on Google Play'}
        width={isIos ? 467 : 564}
        height={isIos ? 156 : 168}
        className="h-full w-full object-contain"
      />
    </a>
  )
}

function StoreLinks({ stores, id }: { stores: StoreLink[]; id: string }) {
  if (id === 'khelcoach') {
    const ios = stores.filter((s) => s.platform === 'ios')
    const android = stores.filter((s) => s.platform === 'android')
    return (
      <div className="flex w-full flex-col gap-2.5">
        {ios.map((store, index) => (
          <div key={store.url} className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="w-16 shrink-0 font-body text-sm text-white/70">
              {KHELCOACH_LABELS[index]}
            </span>
            <StoreBadge store={store} />
            {android[index] ? <StoreBadge store={android[index]} /> : null}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
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

  return (
    <section id="projects" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-10 sm:mb-14">
          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.96px] text-ink sm:text-5xl lg:text-[64px]">
            Lets have a look at my <span className="text-accent">Portfolio</span>
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

        <div className="h-[520px] sm:h-[560px] lg:h-[480px]">
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
                <div
                  className={cn(
                    'grid h-full w-full',
                    active.logoWide
                      ? 'lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]'
                      : 'lg:grid-cols-[1fr_1.15fr]'
                  )}
                >
                  <div className="relative hidden items-center justify-center p-8 lg:flex xl:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(253,133,58,0.35),transparent_60%)]" />
                    {active.logo ? (
                      <img
                        src={active.logo}
                        alt=""
                        className={cn(
                          'relative z-10 drop-shadow-2xl',
                          active.logoWide
                            ? 'h-auto w-full max-w-[380px] object-contain xl:max-w-[460px]'
                            : 'size-44 rounded-[32px] object-cover xl:size-52'
                        )}
                      />
                    ) : null}
                  </div>

                  <div className="relative flex h-full flex-col gap-5 p-8 sm:p-10 lg:py-12 lg:pr-12">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-4">
                        {active.logo ? (
                          <img
                            src={active.logo}
                            alt=""
                            className={cn(
                              'shrink-0 drop-shadow-lg lg:hidden',
                              active.logoWide
                                ? 'h-10 w-28 object-contain sm:h-12 sm:w-36'
                                : 'size-14 rounded-2xl object-cover'
                            )}
                          />
                        ) : null}
                        <h3 className="font-display text-3xl font-bold tracking-[-0.72px] text-[#fffaf5] sm:text-4xl lg:text-5xl">
                          {active.name}
                        </h3>
                      </div>
                      {(active.live || active.website) && (
                        <a
                          href={active.live ?? active.website}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${active.name}`}
                          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent text-accent transition hover:bg-accent hover:text-white sm:size-14"
                        >
                          <ArrowUpRight className="size-6" />
                        </a>
                      )}
                    </div>

                    <p className="line-clamp-4 font-body text-base leading-relaxed tracking-[-0.3px] text-white/85 sm:text-lg lg:line-clamp-5">
                      {active.description}
                    </p>

                    <div className="mt-auto min-h-[140px]">
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
