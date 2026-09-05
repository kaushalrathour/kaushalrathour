import { ArrowUpRight, Quote } from 'lucide-react'
import { motion } from 'motion/react'
import heroImg from '@/assets/kaushal-rathour-react-native-engineer.png'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-2 flex flex-col items-center text-center"
        >
          <h1 className="max-w-[18ch] font-display text-4xl font-semibold leading-none tracking-[-1.4px] text-dark sm:text-6xl lg:text-[88px]">
            I&apos;m <span className="text-accent">Kaushal</span>,
            <br />
            React Native Engineer
          </h1>
        </motion.div>

        <div className="relative mt-6 grid w-full max-w-[1298px] grid-cols-1 items-end gap-8 lg:mt-2 lg:grid-cols-[1fr_minmax(280px,640px)_1fr]">
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="order-2 hidden max-w-xs flex-col gap-4 self-center lg:order-1 lg:flex"
          >
            <Quote className="size-9 text-muted" strokeWidth={1.5} fill="currentColor" />
            <p className="font-body text-lg font-medium leading-snug tracking-[-0.3px] text-ink">
              Building and shipping production mobile apps for iOS and Android, across consumer,
              commerce, sports, and AI products.
            </p>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="relative order-1 mx-auto w-full max-w-[640px] lg:order-2"
          >
            <div className="absolute bottom-0 left-1/2 h-[55%] w-[92%] -translate-x-1/2 rounded-t-full bg-accent" />
            <img
              src={heroImg}
              alt="Kaushal Rathour, React Native Engineer"
              className="relative z-10 mx-auto h-auto w-[88%] max-w-[520px] object-contain object-bottom drop-shadow-[0_24px_60px_rgba(23,23,23,0.18)]"
            />

            <div className="absolute bottom-6 left-1/2 z-20 flex w-[min(100%,380px)] -translate-x-1/2 items-center gap-1.5 rounded-[50px] border-2 border-white bg-white/15 p-2 backdrop-blur-[7.5px]">
              <a
                href="#projects"
                className="inline-flex shrink-0 items-center justify-center gap-1 rounded-[60px] bg-accent px-5 py-2.5 font-body text-lg font-medium tracking-[-0.3px] text-white transition hover:brightness-105"
              >
                Portfolio
                <ArrowUpRight className="size-6" strokeWidth={2} />
              </a>
              <a
                href="#contact"
                className="flex min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-[60px] px-3 py-2.5 font-body text-lg font-light tracking-[-0.3px] text-white transition hover:bg-white/10"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="order-3 flex flex-col items-center gap-3 self-center lg:items-end"
          >
            <div className="text-center lg:text-right">
              <p className="font-display text-4xl font-bold tracking-[-0.7px] text-dark sm:text-[47px]">2+ Years</p>
              <p className="font-body text-lg tracking-[-0.3px] text-dark">Experience</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
