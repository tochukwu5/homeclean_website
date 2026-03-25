import { useState } from 'react'
import { SectionHeader } from '../ui/UIComponents'

const ROOMS = [
  {
    id: 1,
    room: 'Kitchen',
    emoji: '🍳',
    beforeDesc: 'Greasy stovetop, dirty dishes, grimy counters',
    afterDesc: 'Spotless counters, degreased stovetop, shining sink',
    beforeColor: 'from-gray-500 to-gray-700',
    afterColor: 'from-primary-400 to-primary-600',
  },
  {
    id: 2,
    room: 'Bathroom',
    emoji: '🚿',
    beforeDesc: 'Soap scum, mildew, water stains on tiles',
    afterDesc: 'Sanitized tiles, polished fixtures, fresh scent',
    beforeColor: 'from-gray-500 to-gray-700',
    afterColor: 'from-primary-400 to-primary-600',
  },
  {
    id: 3,
    room: 'Living Room',
    emoji: '🛋️',
    beforeDesc: 'Dusty surfaces, cluttered corners, dirty floors',
    afterDesc: 'Dust-free, vacuumed, fresh and welcoming space',
    beforeColor: 'from-gray-500 to-gray-700',
    afterColor: 'from-primary-400 to-primary-600',
  },
]

function BeforeAfterCard({ room }) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="card overflow-hidden group">
      {/* Image area */}
      <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => setShowAfter(!showAfter)}>
        {/* Before */}
        <div className={`absolute inset-0 bg-gradient-to-br ${room.beforeColor} flex flex-col items-center justify-center transition-all duration-500 ${showAfter ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <span className="text-5xl mb-3 opacity-30">{room.emoji}</span>
          <span className="text-white/60 text-sm font-medium tracking-wide">BEFORE</span>
          <p className="text-white/40 text-xs mt-2 text-center px-4">{room.beforeDesc}</p>
        </div>

        {/* After */}
        <div className={`absolute inset-0 bg-gradient-to-br ${room.afterColor} flex flex-col items-center justify-center transition-all duration-500 ${showAfter ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <span className="text-5xl mb-3">{room.emoji}</span>
          <span className="text-white text-sm font-semibold tracking-wide">✨ AFTER</span>
          <p className="text-white/80 text-xs mt-2 text-center px-4">{room.afterDesc}</p>
        </div>

        {/* Toggle hint */}
        <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg">
          {showAfter ? 'Tap for Before' : 'Tap for After'}
        </div>
      </div>

      {/* Label */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="font-heading font-bold text-dark">{room.room}</p>
          <p className="text-xs text-gray-400">Tap image to toggle</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowAfter(false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              !showAfter ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              showAfter ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            After
          </button>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionHeader
            tag="See the Difference"
            title="Before & After Our Clean"
            subtitle="The results speak for themselves. Every room transformed."
            center
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROOMS.map(room => (
            <BeforeAfterCard key={room.id} room={room} />
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-100 mb-2">Limited Time Offer</p>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            First Clean — 15% Off
          </h3>
          <p className="text-primary-100 mb-6 max-w-md mx-auto">
            New customers get 15% off their first booking. No code needed — discount applied at checkout.
          </p>
          <a href="/booking" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors">
            Claim Discount & Book
          </a>
        </div>
      </div>
    </section>
  )
}
