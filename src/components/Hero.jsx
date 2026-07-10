import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-10">
      {/* Vertical running label — editorial masthead detail */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{ duration: 2.4, delay: 0.8, ease: 'easeInOut' }}
        className="hidden md:block absolute top-1/2 right-8 -translate-y-1/2 rotate-90 origin-right font-body text-xs uppercase tracking-widest2 text-muted"
      >
        portfolio — 2026
      </motion.span>

      <div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="font-body text-xs md:text-sm uppercase tracking-widest2 text-muted mb-6"
        >
          engineer &nbsp;/&nbsp; developer &nbsp;/&nbsp; maker
        </motion.p>

        <h1 className="font-display text-hero font-bold text-ink lowercase">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="block"
          >
            {profile.firstName}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            className="block text-accent"
          >
            {profile.lastName}
          </motion.span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-body text-lg md:text-2xl text-ink max-w-xl leading-snug"
        >
          {profile.role}
        </motion.p>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          whileHover="hover"
          className="link-underline font-body text-sm uppercase tracking-widest2 text-ink self-start md:self-end inline-flex items-center gap-1"
        >
          <span>view work</span>
          <motion.span
            className="-translate-x-1 inline-block"
            variants={{ hover: { y: [0, 4, 0] } }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.a>
      </div>
    </section>
  )
}
