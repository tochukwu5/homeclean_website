import sit1 from '../img/sit1.jpeg'
import sit2 from '../img/sit2.jpeg'
import bat1 from '../img/bat1.jpeg'
import bat2 from '../img/bat2.jpeg'
import kit1 from '../img/kit1.jpeg'
import kit2 from '../img/kit2.jpeg'

import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeader } from '../ui/UIComponents'

// ─────────────────────────────────────────────────────────
// HOW TO ADD YOUR IMAGES:
//
// 1. Put your images inside src/assets/ folder
// 2. Import them at the top like this:
//
//    import kitchen_before from '../../assets/kitchen_before.jpg'
//    import kitchen_after  from '../../assets/kitchen_after.jpg'
//    import bathroom_before from '../../assets/bathroom_before.jpg'
//    import bathroom_after  from '../../assets/bathroom_after.jpg'
//    import living_before  from '../../assets/living_before.jpg'
//    import living_after   from '../../assets/living_after.jpg'
//
// 3. Replace null values below with your imported variables:
//    beforeImg: kitchen_before,
//    afterImg:  kitchen_after,
// ─────────────────────────────────────────────────────────

const ROOMS = [
  {
    id: 3,
    room: 'Living Room',
    emoji: '🛋️',
    beforeImg: sit1,
    afterImg: sit2,
    beforeDesc: 'Dusty surfaces, dirty floors',
    afterDesc: 'Dust-free, vacuumed, fresh space',
    beforeBg: 'from-gray-500 to-gray-600',
    afterBg: 'from-primary-400 to-primary-600',
  },
    {
    id: 2,
    room: 'Bathroom',
    emoji: '🚿',
    beforeImg: bat1,
    afterImg: bat2,
    beforeDesc: 'Soap scum, mildew, water stains',
    afterDesc: 'Sanitized tiles, polished fixtures',
    beforeBg: 'from-gray-500 to-gray-600',
    afterBg: 'from-primary-400 to-primary-600',
  },
  {
    id: 1,
    room: 'Kitchen',
    emoji: '🍳',
    beforeImg: kit1,       // e.g. kitchen_before
    afterImg: kit2,        // e.g. kitchen_after
    beforeDesc: 'Greasy stovetop, grimy counters',
    afterDesc: 'Spotless counters, shining sink',
    beforeBg: 'from-gray-500 to-gray-600',
    afterBg: 'from-primary-400 to-primary-600',
  },
  
]

// ── Individual drag-slider card ──
function BeforeAfterCard({ room }) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e) => { dragging.current = true; e.preventDefault() }
  const onMouseMove = useCallback((e) => { if (dragging.current) updateSlider(e.clientX) }, [updateSlider])
  const onMouseUp = () => { dragging.current = false }
  const onTouchMove = useCallback((e) => { updateSlider(e.touches[0].clientX) }, [updateSlider])

  const containerWidth = containerRef.current?.offsetWidth

  return (
    <div className="card overflow-hidden">
      {/* ── Slider area ── */}
      <div
        ref={containerRef}
        className="relative h-56 overflow-hidden cursor-col-resize select-none"
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
      >
        {/* AFTER — full background */}
        <div className="absolute inset-0">
          {room.afterImg ? (
            <img
              src={room.afterImg}
              alt={`${room.room} after cleaning`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${room.afterBg} flex flex-col items-center justify-center`}>
              <span className="text-5xl mb-2">{room.emoji}</span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">✨ After</span>
              <p className="text-white/70 text-xs mt-1 text-center px-6">{room.afterDesc}</p>
            </div>
          )}
          <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md">
            AFTER ✨
          </div>
        </div>

        {/* BEFORE — clipped to left of slider handle */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          {room.beforeImg ? (
            <img
              src={room.beforeImg}
              alt={`${room.room} before cleaning`}
              className="absolute inset-0 h-full object-cover"
              style={{ width: containerWidth ?? '100%' }}
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${room.beforeBg} flex flex-col items-center justify-center`}
              style={{ width: containerWidth ?? '100%' }}
            >
              <span className="text-5xl mb-2 opacity-40">{room.emoji}</span>
              <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Before</span>
              <p className="text-white/40 text-xs mt-1 text-center px-6">{room.beforeDesc}</p>
            </div>
          )}
          <div className="absolute top-3 left-3 bg-gray-800/90 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md">
            BEFORE
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] z-10 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2
                     w-10 h-10 bg-white rounded-full shadow-xl
                     flex items-center justify-center cursor-col-resize
                     border-2 border-primary-400 hover:scale-110 transition-transform"
          style={{ left: `${sliderPos}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={(e) => { updateSlider(e.touches[0].clientX) }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 4L3 9L6 14M12 4L15 9L12 14" stroke="#00b496" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── Card footer ── */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="font-heading font-bold text-dark">{room.room}</p>
          <p className="text-xs text-gray-400">Drag slider to compare</p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setSliderPos(95)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              sliderPos > 80 ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setSliderPos(50)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
          >
            50/50
          </button>
          <button
            onClick={() => setSliderPos(5)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              sliderPos < 20 ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
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
            subtitle="Drag the slider to reveal the transformation. Every room, spotless."
            center
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROOMS.map(room => (
            <BeforeAfterCard key={room.id} room={room} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-100 mb-2">Limited Time Offer</p>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            First Clean — 15% Off
          </h3>
          <p className="text-primary-100 mb-6 max-w-md mx-auto">
            New customers get 15% off their first booking. No code needed — discount applied at checkout.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors"
          >
            Claim Discount & Book
          </Link>
        </div>
      </div>
    </section>
  )
}