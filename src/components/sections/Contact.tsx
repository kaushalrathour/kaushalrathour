import { Calendar, Github, Linkedin, Mail } from 'lucide-react'

const MAILTO =
  'mailto:kaushal.codes@gmail.com?subject=Role%20inquiry&body=Hi%20Kaushal,%0A%0A'
const LINKEDIN = 'https://linkedin.com/in/kaushalrathour'
const GITHUB = 'https://github.com/kaushalrathour'
const CALENDLY_URL = 'https://calendly.com/kaushallsbd'

const secondaryBtn =
  'inline-flex items-center justify-center gap-3 rounded-[60px] border border-dark px-6 py-4 font-display text-base font-medium tracking-[-0.3px] text-dark transition hover:bg-dark hover:text-white sm:px-8 sm:py-5 sm:text-xl'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
    }
  }
}

function openCalendly(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    return
  }
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
}

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-8 text-center">
        <h2 className="font-display text-4xl font-semibold tracking-[-0.96px] text-ink sm:text-5xl lg:text-[64px]">
          Open to React Native roles. <span className="text-accent">Let&apos;s talk</span>
        </h2>

        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-xl lg:max-w-2xl">
          <a
            href={MAILTO}
            className="inline-flex w-full items-center justify-center gap-3 rounded-[60px] bg-accent px-6 py-4 font-display text-base font-medium tracking-[-0.3px] text-white transition hover:brightness-105 sm:px-8 sm:py-5 sm:text-xl"
          >
            <Mail className="size-6 shrink-0" />
            kaushal.codes@gmail.com
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className={secondaryBtn}
            >
              <Linkedin className="size-6 shrink-0" />
              LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className={secondaryBtn}
            >
              <Github className="size-6 shrink-0" />
              GitHub
            </a>
          </div>

          <a
            href={CALENDLY_URL}
            onClick={openCalendly}
            className={`${secondaryBtn} w-full`}
          >
            <Calendar className="size-6 shrink-0" />
            Book a call
          </a>
        </div>
      </div>
    </section>
  )
}
