import { skillsData } from '@/data/skillsData'

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-white/60">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">What I work with</h2>

        <div className="space-y-10">
          {skillsData.map((cat) => (
            <div key={cat.label}>
              <p className="text-gray-400 text-xs font-semibold mb-4 tracking-widest uppercase">{cat.label}</p>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    title={skill.name}
                    className={[
                      'flex flex-col items-center justify-center gap-2 rounded-2xl border p-3 aspect-square',
                      'shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-default',
                      skill.darkBg
                        ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                        : 'bg-white border-gray-100 hover:border-violet-200',
                    ].join(' ')}
                  >
                    {skill.logo ? (
                      <img src={skill.logo} alt={skill.name} className="w-9 h-9 object-contain" />
                    ) : (
                      <span className="text-xl font-bold text-violet-200">{skill.name.charAt(0)}</span>
                    )}
                    <span className={`text-[10px] text-center leading-tight font-medium ${skill.darkBg ? 'text-gray-400' : 'text-gray-500'}`}>
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
