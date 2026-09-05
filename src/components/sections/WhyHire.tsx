const POINTS = [
  'I make the technical decisions, not just implement the ticket, and I\'m comfortable being wrong and fixing it.',
  'Before something ships, I think about what breaks in production and plan for it, not after.',
  'Mobile is my main lane, but I\'ve built backends too - MERN for Kash, FastAPI for House AI - when the product needed it.',
]

export function WhyHire() {
  return (
    <section id="why-hire" className="px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[40px] bg-surface px-5 py-14 sm:rounded-[50px] sm:px-12 sm:py-[90px] lg:px-[71px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-start">
          <p className="font-body text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            Working style
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.96px] text-ink sm:text-5xl lg:text-[64px]">
            How I <span className="text-accent">work</span>
          </h2>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed tracking-[-0.3px] text-muted sm:text-xl">
            I don&apos;t wait around for instructions. Most of what I&apos;ve shipped, I owned end
            to end, including the calls on how to build it.
          </p>

          <ul className="mt-8 flex max-w-xl flex-col gap-3">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex gap-2.5 font-body text-base leading-relaxed tracking-[-0.3px] text-ink sm:text-lg"
              >
                <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-[60px] bg-accent px-8 py-4 font-display text-base font-medium tracking-[-0.3px] text-white transition hover:brightness-105 sm:px-10 sm:text-xl"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
