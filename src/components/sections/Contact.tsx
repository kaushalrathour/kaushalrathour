import { Mail } from 'lucide-react'

const MAILTO =
  'mailto:kaushal.codes@gmail.com?subject=Project%20inquiry&body=Hi%20Kaushal,%0A%0A'

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-10 text-center">
        <h2 className="font-display text-4xl font-semibold tracking-[-0.96px] text-ink sm:text-5xl lg:text-[64px]">
          Have a project in mind? <span className="text-accent">Let&apos;s talk</span>
        </h2>

        <a
          href={MAILTO}
          className="inline-flex items-center gap-3 rounded-[60px] bg-accent px-8 py-5 font-display text-base font-medium tracking-[-0.3px] text-white transition hover:brightness-105 sm:px-10 sm:text-xl"
        >
          <Mail className="size-6 shrink-0" />
          kaushal.codes@gmail.com
        </a>
      </div>
    </section>
  )
}
