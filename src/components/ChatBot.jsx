import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Replace this with a real call to your backend (see integration notes).
// It must NOT call the Anthropic/OpenAI API directly from the browser —
// that exposes your API key. Point it at your own server endpoint instead.
async function askAI(message) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  })
  if (!res.ok) throw new Error('request failed')
  const data = await res.json()
  return data.reply
}

function linkify(text) {
  const parts = text.split(/(\/[a-zA-Z0-9_-]+\.(?:pdf|docx?)|https?:\/\/\S+)/g)
  return parts.map((part, i) =>
    /^(\/[a-zA-Z0-9_-]+\.(?:pdf|docx?)|https?:\/\/)/.test(part) ? (
      <a
        key={i}
        href={part}
        download={part.startsWith('/')}
        target={part.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="underline text-accent"
      >
        {part}
      </a>
    ) : (
      part
    )
  )
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "hi — ask me anything about tanishq's work." },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [autoRead, setAutoRead] = useState(true)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  function speak(text) {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.rate = 1
    utter.pitch = 1
    window.speechSynthesis.speak(utter)
  }

  async function handleSend(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return
    setMessages((m) => [...m, { role: 'user', text }])
    setInput('')
    setLoading(true)
    try {
      const reply = await askAI(text)
      setMessages((m) => [...m, { role: 'assistant', text: reply }])
      if (autoRead) speak(reply)
    } catch {
      const fallback = "sorry — couldn't reach the server just now."
      setMessages((m) => [...m, { role: 'assistant', text: fallback }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'close chat' : 'open chat'}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-ink text-cream
                   flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.25)]
                   transition-transform duration-300 ease-editorial hover:scale-105"
      >
        <span className="font-display text-xl leading-none">{open ? '×' : 'ai'}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[520px]
                       bg-cream border border-line flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-line">
              <span className="font-display text-sm tracking-widest2 uppercase text-ink">
                ask tanishq
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download
                  className="font-body text-xs uppercase tracking-wide border border-line
                             text-ink px-2 py-1 hover:border-accent hover:text-accent
                             transition-colors duration-200"
                >
                  resume
                </a>
                <button
                  onClick={() => setAutoRead((r) => !r)}
                  className={`font-body text-xs uppercase tracking-wide border px-2 py-1
                              transition-colors duration-200 ${
                                autoRead
                                  ? 'border-accent text-accent'
                                  : 'border-line text-muted'
                              }`}
                  title="toggle read-aloud"
                >
                  {autoRead ? 'voice on' : 'voice off'}
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`font-body text-sm leading-relaxed max-w-[85%] px-3 py-2 ${
                    m.role === 'user'
                      ? 'ml-auto bg-ink text-cream'
                      : 'mr-auto bg-white text-ink border border-line'
                  }`}
                >
                  {m.role === 'assistant' ? linkify(m.text) : m.text}
                </div>
              ))}
              {loading && (
                <div className="mr-auto font-body text-sm text-muted px-3 py-2">…</div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="flex border-t border-line">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a question…"
                className="flex-1 bg-transparent px-4 py-3 font-body text-sm text-ink
                           placeholder:text-muted focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 font-display text-sm uppercase tracking-wide text-accent
                           disabled:opacity-40"
              >
                send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
