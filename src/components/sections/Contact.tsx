import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'

export function Contact() {
  const [email, setEmail] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const target = email.trim() || 'kaushal.codes@gmail.com'
    window.location.href = `mailto:kaushal.codes@gmail.com?subject=Project%20inquiry&body=Hi%20Kaushal,%0A%0AMy%20email%20is%20${encodeURIComponent(target)}.%0A%0A`
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-10 text-center">
        <h2 className="font-display text-4xl font-semibold tracking-[-0.96px] text-ink sm:text-5xl lg:text-[64px]">
          Have a project in mind? <span className="text-accent">Let&apos;s talk</span>
        </h2>

        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-[832px] flex-col gap-3 rounded-[50px] border border-[#e4e7ec] bg-white/70 p-3 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-3.5"
        >
          <div className="flex flex-1 items-center gap-3 px-1">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Mail className="size-7" />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-transparent font-display text-base font-medium tracking-[-0.3px] text-black outline-none placeholder:text-black/70 sm:text-xl"
            />
          </div>
          <button
            type="submit"
            className="rounded-[60px] bg-accent px-10 py-5 font-display text-lg font-medium tracking-[-0.3px] text-white transition hover:brightness-105 sm:text-xl"
          >
            Send
          </button>
        </form>

        <p className="font-body text-base text-muted">
          Or email{' '}
          <a href="mailto:kaushal.codes@gmail.com" className="text-ink underline-offset-2 hover:underline">
            kaushal.codes@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
