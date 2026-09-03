import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react'

const LINKS = [
  { icon: Mail,         label: 'kaushal.codes@gmail.com',        href: 'mailto:kaushal.codes@gmail.com' },
  { icon: Linkedin,     label: 'linkedin.com/in/kaushalrathour', href: 'https://linkedin.com/in/kaushalrathour' },
  { icon: Github,       label: 'github.com/kaushalrathour',      href: 'https://github.com/kaushalrathour' },
  { icon: ExternalLink, label: 'linktr.ee/kaushalrathour',       href: 'https://linktr.ee/kaushalrathour' },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-white/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Let's talk</h2>
            <p className="text-gray-500 mb-8 leading-relaxed max-w-sm">
              Open to new roles, freelance work, and interesting conversations. Best reached by email.
            </p>
            <a href="mailto:kaushal.codes@gmail.com"
              className="inline-block px-8 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all shadow-sm hover:shadow-[0_0_24px_rgba(109,40,217,0.3)]">
              Say Hello
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-violet-200 hover:shadow-[0_4px_20px_rgba(109,40,217,0.07)] transition-all duration-200 group">
                <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-100 transition-colors">
                  <Icon size={16} className="text-violet-600" />
                </div>
                <span className="text-gray-500 text-sm group-hover:text-gray-800 transition-colors">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
