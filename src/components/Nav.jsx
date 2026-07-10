import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

const links = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'work', label: 'work' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const barRef = useRef(null)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: 'max',
      onUpdate: (self) => setProgress(self.progress),
    })
    return () => trigger.kill()
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-normal">
        <motion.a
          href="#top"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
          className="font-display text-sm font-medium tracking-tight text-ink"
        >
          {profile.firstName}&nbsp;{profile.lastName}
        </motion.a>

        <motion.button
          onClick={() => setOpen((o) => !o)}
          whileTap={{ scale: 0.92 }}
          className="font-body text-xs uppercase tracking-widest2 text-ink flex items-center gap-3"
        >
          <span>{open ? 'close' : 'menu'}</span>
          <span className="relative w-6 h-4 flex flex-col justify-between">
            <span
              className={`h-px bg-ink w-full transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`h-px bg-ink w-full transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-px bg-ink w-full transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </motion.button>
      </header>

      {/* Running folio counter — bottom-left, print-magazine style page index */}
      <div className="fixed bottom-6 left-6 md:left-12 z-40 font-body text-xs text-muted tabular-nums hidden md:block">
        {String(Math.round(progress * 100)).padStart(2, '0')} / 100
      </div>

      {/* Thin progress rule, top of viewport */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent">
        <motion.div
          ref={barRef}
          className="h-full bg-accent origin-left"
          animate={{ scaleX: progress }}
          transition={{ type: 'spring', stiffness: 120, damping: 25, mass: 0.3 }}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col justify-center px-6 md:px-12"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                  whileHover={{ x: 16 }}
                  className="font-display text-display text-ink hover:text-accent transition-colors duration-300 lowercase"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <p className="absolute bottom-10 left-6 md:left-12 font-body text-xs text-muted">
              {profile.location}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
