import { Github, Linkedin, ExternalLink, FileText } from 'lucide-react'
import { FlipWords } from '@/components/FlipWords'
import heroImg from '@/assets/kaushal-rathour-react-native-engineer.png'

const ROLES = ['React Native Engineer', 'Mobile Engineer', 'iOS and Android', 'Indie Developer']

const SOCIALS = [
  { icon: Linkedin,     href: 'https://linkedin.com/in/kaushalrathour',  label: 'LinkedIn' },
  { icon: Github,       href: 'https://github.com/kaushalrathour',       label: 'GitHub' },
  { icon: ExternalLink, href: 'https://linktr.ee/kaushalrathour',        label: 'Portfolio' },
  { icon: FileText,     href: 'https://drive.google.com/file/d/1KgQr2QLefblzr1q6YikEwpYHMiQDgNJ8', label: 'Resume' },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Avatar */}
      <div className="relative mb-8 z-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-200 via-indigo-200 to-violet-300 blur-xl opacity-80 scale-110" />
        <img
          src={heroImg}
          alt="Kaushal Rathour, React Native Engineer"
          className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-[0_8px_40px_rgba(109,40,217,0.18)]"
        />
      </div>

      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-3 z-10">
        Kaushal Rathour
      </h1>

      <div className="text-xl sm:text-2xl mb-2 h-8 flex items-center justify-center z-10">
        <span className="text-violet-600 font-medium">
          <FlipWords words={ROLES} />
        </span>
      </div>

      <p className="text-gray-500 max-w-md mb-2 text-sm sm:text-base leading-relaxed z-10">
        2+ years shipping production apps for iOS and Android. Consumer, D2C, and AI-powered.
      </p>

      <p className="text-gray-400 text-sm mb-8 z-10">Noida, India</p>

      <div className="flex flex-wrap gap-3 justify-center mb-10 z-10">
        <a href="#projects"
          className="px-6 py-2.5 rounded-full bg-violet-600 text-white font-medium text-sm hover:bg-violet-700 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(109,40,217,0.3)]">
          View Work
        </a>
        <a href="#contact"
          className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">
          Get in Touch
        </a>
        <a
          href="https://drive.google.com/file/d/1KgQr2QLefblzr1q6YikEwpYHMiQDgNJ8"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-1.5">
          <FileText size={14} />
          Resume
        </a>
      </div>

      <div className="flex items-center gap-5 z-10">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="text-gray-400 hover:text-gray-900 transition-colors">
            <Icon size={20} />
          </a>
        ))}
        <span className="text-gray-300 text-xs">|</span>
        <a href="mailto:kaushal.codes@gmail.com"
          className="text-gray-400 hover:text-gray-900 transition-colors text-sm font-mono">
          kaushal.codes@gmail.com
        </a>
      </div>
    </section>
  )
}
