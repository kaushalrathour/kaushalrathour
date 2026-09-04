import { skillsData } from '@/data/skillsData'
import { cn } from '@/lib/utils'

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1298px]">
        <h2 className="mb-12 text-center font-display text-4xl font-medium tracking-[-0.96px] text-ink sm:mb-16 sm:text-5xl lg:text-[64px]">
          What I <span className="text-accent">work with</span>
        </h2>

        <div className="flex flex-col gap-12">
          {skillsData.map((cat) => (
            <div key={cat.label}>
              <p className="mb-4 font-body text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                {cat.label}
              </p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    title={skill.name}
                    className={cn(
                      'flex aspect-square cursor-default flex-col items-center justify-center gap-2 rounded-2xl border p-3 transition-all duration-200 hover:-translate-y-0.5',
                      skill.darkBg
                        ? 'border-dark/80 bg-dark hover:border-ink-strong'
                        : 'border-[#e4e7ec] bg-white hover:border-accent/40'
                    )}
                  >
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="size-9 object-contain"
                      />
                    ) : (
                      <span
                        className={cn(
                          'font-display text-xl font-bold',
                          skill.darkBg ? 'text-white/40' : 'text-accent-soft'
                        )}
                      >
                        {skill.name.charAt(0)}
                      </span>
                    )}
                    <span
                      className={cn(
                        'text-center font-body text-[10px] leading-tight font-medium',
                        skill.darkBg ? 'text-white/55' : 'text-muted'
                      )}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
