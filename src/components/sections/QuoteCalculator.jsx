import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { SERVICES, QUOTE_ROOMS, QUOTE_EXTRAS } from '../../data/siteData'
import { SectionHeader, Counter } from '../ui/UIComponents'

const BASE_PRICE = 50

export default function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState('standard')
  const [rooms, setRooms] = useState({ bedroom: 2, bathroom: 1, kitchen: 1, living: 1 })
  const [extras, setExtras] = useState([])

  const serviceMultipliers = {
    standard: 1,
    deep: 1.8,
    office: 1.4,
    movein: 2.2,
    'post-construction': 2.5,
    airbnb: 1.3,
  }

  const roomTotal = QUOTE_ROOMS.reduce((sum, r) => sum + rooms[r.id] * r.price, 0)
  const extrasTotal = QUOTE_EXTRAS.filter(e => extras.includes(e.id)).reduce((sum, e) => sum + e.price, 0)
  const subtotal = (BASE_PRICE + roomTotal + extrasTotal) * (serviceMultipliers[selectedService] || 1)
  const total = Math.round(subtotal)

  const toggleExtra = (id) => {
    setExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id])
  }

  return (
    <section id="quote-calculator" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionHeader
            tag="Instant Pricing"
            title="Get Your Price in Seconds"
            subtitle="No surprises, no hidden fees. Customize your clean and see the price update live."
            center
          />
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Left: Configurator */}
          <div className="lg:col-span-2 space-y-5">
            {/* Service Type */}
            <div className="card p-6">
              <h3 className="font-heading font-semibold text-dark mb-4 text-sm uppercase tracking-widest text-gray-400">
                1. Choose Service
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SERVICES.map(({ id, icon, title }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedService(id)}
                    className={`relative p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedService === id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-100 bg-white hover:border-primary-200'
                    }`}
                  >
                    {selectedService === id && (
                      <span className="absolute top-2 right-2 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</span>
                    )}
                    <span className="text-xl block mb-1">{icon}</span>
                    <span className="text-xs font-semibold text-dark leading-tight">{title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Rooms */}
            <div className="card p-6">
              <h3 className="font-heading font-semibold text-dark mb-4 text-sm uppercase tracking-widest text-gray-400">
                2. Select Rooms
              </h3>
              <div className="divide-y divide-gray-50">
                {QUOTE_ROOMS.map((room) => (
                  <Counter
                    key={room.id}
                    label={`${room.label} (+$${room.price} each)`}
                    value={rooms[room.id]}
                    onChange={(val) => setRooms(prev => ({ ...prev, [room.id]: val }))}
                    min={room.min}
                    max={room.max}
                  />
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="card p-6">
              <h3 className="font-heading font-semibold text-dark mb-4 text-sm uppercase tracking-widest text-gray-400">
                3. Add Extras (Optional)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {QUOTE_EXTRAS.map(({ id, icon, label, price }) => (
                  <button
                    key={id}
                    onClick={() => toggleExtra(id)}
                    className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                      extras.includes(id)
                        ? 'border-accent bg-orange-50'
                        : 'border-gray-100 bg-white hover:border-orange-200'
                    }`}
                  >
                    <span className="text-xl block mb-1">{icon}</span>
                    <span className="text-xs font-semibold text-dark block">{label}</span>
                    <span className="text-xs text-gray-400">+${price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Price Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-28">
              <h3 className="font-heading font-semibold text-dark mb-5 text-sm uppercase tracking-widest text-gray-400">
                Your Estimate
              </h3>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Base price</span>
                  <span className="font-medium">${BASE_PRICE}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Rooms</span>
                  <span className="font-medium">+${roomTotal}</span>
                </div>
                {extrasTotal > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Extras</span>
                    <span className="font-medium">+${extrasTotal}</span>
                  </div>
                )}
                {selectedService !== 'standard' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Service multiplier</span>
                    <span className="font-medium">×{serviceMultipliers[selectedService]}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex items-end justify-between">
                  <span className="text-gray-600 font-medium">Total estimate</span>
                  <div className="text-right">
                    <span className="text-3xl font-heading font-bold text-dark">${total}</span>
                    <p className="text-xs text-gray-400">one-time</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to={`/booking?service=${selectedService}&price=${total}`}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4"
                >
                  Book Now — ${total}
                  <FiArrowRight />
                </Link>
                <Link
                  to="/quote"
                  className="btn-secondary w-full text-center block py-3 text-sm"
                >
                  Detailed Quote
                </Link>
              </div>

              <p className="text-xs text-gray-400 text-center mt-4">
                ✅ No credit card required to book
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
