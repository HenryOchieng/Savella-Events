import React, { useEffect, useRef, useState } from 'react'
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi'

const starterMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hi! I’m the Savella Events Assistant. Ask about packages, booking, or event ideas and I’ll help right away.',
  },
]

const quickReplies = ['What packages do you offer?', 'How do I book an event?', 'What does pricing look like?']

function getBotReply(input) {
  const text = input.toLowerCase()

  if (/(price|cost|budget|quote)/.test(text)) {
    return 'Our pricing depends on the event size, location, and add-ons. The easiest next step is to use our estimator or contact us for a tailored quote.'
  }

  if (/(book|booking|reserve|schedule)/.test(text)) {
    return 'You can book a consultation directly from the booking section or send us a message through the contact form. We usually confirm availability within one business day.'
  }

  if (/(service|services|event|party|wedding|corporate)/.test(text)) {
    return 'We support weddings, corporate gatherings, private celebrations, and curated event experiences. Tell me the vibe you want and I can suggest the right package.'
  }

  if (/(contact|email|whatsapp|call)/.test(text)) {
    return 'You can reach us through the contact section or WhatsApp button on the page for a fast reply.'
  }

  return 'I can help with pricing, booking, packages, or event ideas. If you want, try one of the quick options above.'
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(starterMessages)
  const [draft, setDraft] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const sendMessage = (text) => {
    const message = text.trim()
    if (!message) return

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'user', text: message },
    ])
    setDraft('')

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: getBotReply(message) },
      ])
    }, 250)
  }

  return (
    <>
      <button
        type="button"
        className="chatbot-fab"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle chatbot"
      >
        {open ? <FiX size={18} /> : <FiMessageCircle size={18} />}
        <span>{open ? 'Close chat' : 'Savella Events Assistant'}</span>
      </button>

      {open && (
        <aside className="chatbot-panel" aria-label="Savella chatbot">
          <header className="chatbot-header">
            <div>
              <p className="chatbot-eyebrow">Live assistant</p>
              <h3>Savella Events Assistant</h3>
            </div>
            <button type="button" className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chatbot">
              <FiX size={16} />
            </button>
          </header>

          <div className="chatbot-body">
            {messages.map((message) => (
              <article key={message.id} className={`chatbot-bubble ${message.sender}`}>
                {message.text}
              </article>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="chatbot-suggestions">
            {quickReplies.map((item) => (
              <button key={item} type="button" className="chatbot-chip" onClick={() => sendMessage(item)}>
                {item}
              </button>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={(e) => { e.preventDefault(); sendMessage(draft) }}>
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your question here..."
              aria-label="Ask the chatbot"
            />
            <button type="submit" className="chatbot-send" aria-label="Send message">
              <FiSend size={16} />
            </button>
          </form>
        </aside>
      )}
    </>
  )
}
