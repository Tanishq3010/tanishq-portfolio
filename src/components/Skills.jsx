import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionLabel from './SectionLabel'

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 md:px-12 py-28 md:py-36 editorial-rule">
      <SectionLabel index="02" title="skills" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        className="font-display text-display font-bold text-ink lowercase mb-16 md:mb-24"
      >
        what i work with.
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-x-6 gap-y-14">
        {skills.map((group, gi) => (
          <div key={group.group}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05, duration: 0.5 }}
              className="font-body text-xs uppercase tracking-widest2 text-accent mb-6"
            >
              {group.group}
            </motion.p>
            <ul className="space-y-3">
              {group.items.map((item, ii) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  transition={{ delay: gi * 0.05 + ii * 0.04, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                  className="font-display text-xl md:text-2xl text-ink lowercase border-b border-line pb-3"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
