import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { SITE } from '../../data/siteData'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  const message = encodeURIComponent("Hi! I'd like to book a cleaning service.")
  const url = `https://wa.me/${SITE.whatsapp}?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-white rounded-2xl shadow-card-hover p-4 w-56 animate-slide-up border border-gray-100">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-0.5 text-gray-500 hover:bg-gray-300 transition-colors"
          >
            <IoClose size={14} />
          </button>
          <p className="text-sm font-semibold text-dark mb-1">Chat with us 💬</p>
          <p className="text-xs text-gray-500 mb-3">Usually replies within minutes</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white text-xs font-semibold text-center py-2 rounded-xl hover:bg-[#1ebe5d] transition-colors"
          >
            Start Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl shadow-lg hover:shadow-xl
                   flex items-center justify-center transition-all duration-300 hover:-translate-y-1 animate-pulse-slow"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>
    </div>
  )
}
