import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ChatBot from './components/ChatBot'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <div className="bg-cream text-ink">
      {/* One-time curtain reveal on load — reuses the existing ink/cream tokens only */}
      <AnimatePresence>
        {!introDone && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            onAnimationComplete={() => setIntroDone(true)}
            className="fixed inset-0 z-[100] bg-ink flex items-center justify-center pointer-events-none"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-cream text-sm uppercase tracking-widest2"
            >
              tanishq bose
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <ChatBot />
    </div>
  )
}
