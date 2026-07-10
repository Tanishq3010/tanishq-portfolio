import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 md:px-12 py-28 md:py-36 editorial-rule">
      <SectionLabel index="01" title="about" />

      <div className="grid md:grid-cols-12 gap-y-10 gap-x-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="md:col-span-5 font-display text-display font-bold text-ink lowercase"
        >
          hardware
          <br />
          meets
          <br />
          <span className="text-accent">software.</span>
        </motion.h2>

        <div className="md:col-span-1" />

        <div className="md:col-span-6 flex flex-col justify-end gap-6">
          {profile.bio.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.65, 0, 0.35, 1] }}
              className="font-body text-lg md:text-xl text-ink leading-relaxed"
            >
              {p}
            </motion.p>
          ))}

          <motion.a
            href={profile.resumeUrl}
            download
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover="hover"
            className="link-underline font-body text-sm uppercase tracking-widest2 text-ink mt-4 self-start inline-flex items-center gap-1"
          >
            <span>download résumé</span>
            <motion.span variants={{ hover: { x: 6 } }} transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}>
              →
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
