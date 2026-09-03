import { ExternalLink } from 'lucide-react'
import { projectsData, type StoreLink } from '@/data/projectsData'
import appleBadge from '@/assets/apple-app-store-badge.svg'
import playBadge  from '@/assets/google-play-store-badge.jpeg'

function StoreBadge({ store }: { store: StoreLink }) {
  const isIos = store.platform === 'ios'
  return (
    <a
      href={store.url}
      target="_blank"
      rel="noreferrer"
      aria-label={isIos ? 'Download on App Store' : 'Get it on Google Play'}
      className={[
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors h-7',
        isIos
          ? 'bg-white border border-gray-200 text-gray-800 hover:border-gray-400'
          : 'bg-gray-900 text-white hover:bg-gray-700',
      ].join(' ')}
    >
      <img
        src={isIos ? appleBadge : playBadge}
        alt={isIos ? 'Apple' : 'Google Play'}
        className="h-3.5 w-3.5 object-contain flex-shrink-0"
      />
      <span>{isIos ? 'App Store' : 'Play Store'}</span>
    </a>
  )
}

const KHELCOACH_LABELS = ['Athlete', 'Coach', 'Academy']

function StoreLinks({ stores, id }: { stores: StoreLink[]; id: string }) {
  if (id === 'khelcoach') {
    const ios     = stores.filter((s) => s.platform === 'ios')
    const android = stores.filter((s) => s.platform === 'android')
    return (
      <div className="space-y-1.5">
        {ios.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-gray-400 text-xs w-14 flex-shrink-0">{KHELCOACH_LABELS[i]}</span>
            <StoreBadge store={s} />
            {android[i] && <StoreBadge store={android[i]} />}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-wrap gap-2">
      {stores.map((s, i) => <StoreBadge key={i} store={s} />)}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Things I have shipped</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-2xl bg-white border border-gray-100 p-5 hover:border-violet-200 transition-all duration-300 flex flex-col shadow-sm hover:shadow-[0_8px_32px_rgba(109,40,217,0.08)]"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  {proj.logo && (
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0 flex items-center justify-center shadow-sm">
                      <img src={proj.logo} alt={`${proj.name} logo`} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-gray-900 font-semibold">{proj.name}</h3>
                    <span className="text-violet-600 text-xs font-medium">{proj.category}</span>
                  </div>
                </div>
                {/* Website or live link */}
                {(proj.website || proj.live) && (
                  <a
                    href={proj.website ?? proj.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${proj.name} website`}
                    className="text-gray-300 hover:text-violet-600 transition-colors flex-shrink-0 p-1.5 rounded-lg hover:bg-violet-50 mt-0.5"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{proj.description}</p>

              {/* Integration logos */}
              {proj.integrations && proj.integrations.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {proj.integrations.map((intg) => (
                    <div
                      key={intg.name}
                      title={intg.name}
                      className="h-7 px-2.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center hover:border-violet-200 transition-colors"
                    >
                      <img src={intg.logo} alt={intg.name} className="h-4 max-w-[64px] object-contain" />
                    </div>
                  ))}
                </div>
              )}

              {/* Tech stack - logo + name chips */}
              <div className="flex flex-wrap gap-1.5 mb-0">
                {proj.stack.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-gray-500 text-xs"
                  >
                    {tech.logo && (
                      <img src={tech.logo} alt={tech.name} className="h-3 w-3 object-contain flex-shrink-0" />
                    )}
                    {tech.name}
                  </div>
                ))}
              </div>

              {/* Store links */}
              {proj.stores && proj.stores.length > 0 && (
                <div className="pt-3 mt-3 border-t border-gray-50">
                  <StoreLinks stores={proj.stores} id={proj.id} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
