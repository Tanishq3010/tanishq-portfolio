import { motion } from 'framer-motion'
import { profile, socials } from '../data/portfolio'
import SectionLabel from './SectionLabel'

const links = [
  { label: 'github', href: socials.github },
  { label: 'linkedin', href: socials.linkedin },
  { label: 'leetcode', href: socials.leetcode },
]

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 md:px-12 py-28 md:py-36 flex flex-col justify-between editorial-rule">
      <SectionLabel index="05" title="contact" />

      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm uppercase tracking-widest2 text-muted mb-6"
        >
          got something in mind?
        </motion.p>

        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="link-underline font-display text-display font-bold text-ink lowercase  block max-w-4xl origin-left"
        >
          {profile.email}
        </motion.a>
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mt-24">
        <div className="flex gap-8">
          {links.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              className="link-underline font-body text-sm uppercase tracking-widest2 text-ink"
            >
              {l.label}
            </motion.a>
          ))}
        </div>
        <p className="font-body text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </p>
      </div>
    </section>
  )
}
