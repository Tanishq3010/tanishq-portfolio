import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/portfolio'
import SectionLabel from './SectionLabel'

function ProjectSpread({ project, i }) {
  const reversed = i % 2 === 1
  const imgContainerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imgContainerRef,
    offset: ['start end', 'end start'],
  })
  // Subtle parallax — the image drifts a little slower than the page scrolls
  const imgY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <section
      id={i === 0 ? 'work' : undefined}
      className="min-h-screen px-6 md:px-12 py-28 md:py-36 editorial-rule flex flex-col justify-center"
    >
      {i === 0 && <SectionLabel index="03" title="featured projects" />}

      <div
        className={`grid md:grid-cols-12 gap-y-10 gap-x-8 items-center ${
          reversed ? 'md:[direction:rtl]' : ''
        }`}
      >
        <motion.div
          ref={imgContainerRef}
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className={`md:col-span-6 overflow-hidden img-mono-wrap ${reversed ? 'md:[direction:ltr]' : ''}`}
        >
          <motion.img
            style={{ y: imgY }}
            src={project.image}
            alt={`${project.title} preview`}
            className="img-mono w-full h-[50vh] md:h-[70vh] object-cover scale-110"
          />
        </motion.div>

        <div className={`md:col-span-6 ${reversed ? 'md:[direction:ltr]' : ''}`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6 }}
            className="font-display text-6xl md:text-8xl font-bold text-line block leading-none mb-4"
          >
            {project.number}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-h2 font-bold text-ink lowercase mb-6"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-base md:text-lg text-ink leading-relaxed max-w-md mb-8"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-x-4 gap-y-2 mb-10"
          >
            {project.tech.map((t) => (
              <motion.span
                key={t}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="font-body text-xs uppercase tracking-widest2 text-muted inline-block"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-8"
          >
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="link-underline font-body text-sm uppercase tracking-widest2 text-ink"
              >
                live demo →
              </motion.a>
            )}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 4 }}
              className="link-underline font-body text-sm uppercase tracking-widest2 text-ink"
            >
              github →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Projects() {
  return (
    <>
      {projects.map((project, i) => (
        <ProjectSpread key={project.number} project={project} i={i} />
      ))}
    </>
  )
}
