import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface FlipWordsProps {
  words: string[]
  duration?: number
  className?: string
}

export function FlipWords({ words, duration = 2800, className }: FlipWordsProps) {
  const [current, setCurrent] = useState(words[0])
  const [animating, setAnimating] = useState(false)

  const next = useCallback(() => {
    const idx = words.indexOf(current)
    setCurrent(words[(idx + 1) % words.length])
    setAnimating(true)
  }, [current, words])

  useEffect(() => {
    if (!animating) {
      const t = setTimeout(next, duration)
      return () => clearTimeout(t)
    }
  }, [animating, duration, next])

  return (
    <AnimatePresence onExitComplete={() => setAnimating(false)}>
      <motion.span
        key={current}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20, filter: 'blur(6px)', scale: 1.1, position: 'absolute' }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        className={cn('inline-block', className)}
      >
        {current.split('').map((ch, i) => (
          <motion.span
            key={`${current}-${i}`}
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: i * 0.03, duration: 0.2 }}
            className="inline-block"
          >
            {ch === ' ' ? '\u00a0' : ch}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  )
}
