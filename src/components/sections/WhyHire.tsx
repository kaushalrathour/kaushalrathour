import { motion } from 'motion/react'
import heroImg from '@/assets/kaushal-rathour-react-native-engineer.png'
import { projectsData } from '@/data/projectsData'

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
              Why <span className="text-accent">Hire me</span>?
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed tracking-[-0.3px] text-muted sm:text-xl">
              React Native engineer. I build and ship apps people use: commerce, AI tools, and my
              own products on the App Store and Play Store.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-display text-3xl font-medium tracking-[-0.54px] text-ink-strong sm:text-4xl">
                  {projectsData.length}+
                </p>
                <p className="mt-2 font-body text-sm tracking-[-0.3px] text-[#667085] sm:text-lg">
                  Projects Shipped
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium tracking-[-0.54px] text-ink-strong sm:text-4xl">
                  8
                </p>
                <p className="mt-2 font-body text-sm tracking-[-0.3px] text-[#667085] sm:text-lg">
                  Apps
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium tracking-[-0.54px] text-ink-strong sm:text-4xl">
                  2+
                </p>
                <p className="mt-2 font-body text-sm tracking-[-0.3px] text-[#667085] sm:text-lg">
                  Years Experience
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center rounded-[32px] border border-[#151515] bg-transparent px-12 py-6 font-display text-2xl font-semibold tracking-[-0.48px] text-[#151515] transition hover:bg-dark hover:text-white sm:text-[32px]"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
