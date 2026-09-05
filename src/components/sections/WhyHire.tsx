import { motion } from 'motion/react'
import heroImg from '@/assets/kaushal-rathour-react-native-engineer.png'

const POINTS = [
  'I make the technical decisions, not just implement the ticket, and I\'m comfortable being wrong and fixing it.',
  'Before something ships, I think about what breaks in production and plan for it, not after.',
  'Mobile is my main lane, but I\'ve built backends too - MERN for Kash, FastAPI for House AI - when the product needed it.',
]

export function WhyHire() {
  return (
    <section id="why-hire" className="px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[40px] bg-surface px-5 py-14 sm:rounded-[50px] sm:px-12 sm:py-[90px] lg:px-[71px]">
        <div className="mx-auto flex max-w-[1299px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex w-full max-w-[520px] items-end justify-center"
          >
            <div className="absolute bottom-0 h-[78%] w-[72%] rounded-[120px] bg-accent" />
            <img
              src={heroImg}
              alt="Kaushal Rathour"
              className="relative z-10 w-[88%] max-w-[420px] object-contain object-bottom"
            />
          </motion.div>

          <div className="w-full max-w-xl">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.96px] text-ink sm:text-5xl lg:text-[64px]">
              How I <span className="text-accent">work</span>
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed tracking-[-0.3px] text-muted sm:text-xl">
              I don&apos;t wait around for instructions. Most of what I&apos;ve shipped, I
              owned end to end, including the calls on how to build it.
            </p>

            <ul className="mt-8 flex max-w-md flex-col gap-3">
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
      </div>
    </section>
  )
}
