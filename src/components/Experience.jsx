import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import SectionLabel from './SectionLabel'

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 md:px-12 py-28 md:py-36 editorial-rule">
      <SectionLabel index="04" title="experience" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        className="font-display text-display font-bold text-ink lowercase mb-16 md:mb-24"
      >
        how i got here.
      </motion.h2>

      <div>
        {experience.map((e, i) => (
          <motion.div
            key={e.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.65, 0, 0.35, 1] }}
            whileHover={{ x: 10 }}
            className="grid md:grid-cols-12 gap-x-6 gap-y-2 py-8 border-b border-line items-baseline"
          >
            <span className="md:col-span-2 font-display text-2xl md:text-3xl font-bold text-accent">
              {e.year}
            </span>
            <span className="md:col-span-4 font-display text-xl md:text-2xl text-ink lowercase">
              {e.role}
            </span>
            <span className="md:col-span-2 font-body text-sm text-muted">{e.org}</span>
            <span className="md:col-span-4 font-body text-base text-ink leading-snug">
              {e.description}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
