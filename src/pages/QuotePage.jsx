import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { SERVICES, QUOTE_ROOMS, QUOTE_EXTRAS } from '../data/siteData'
import { PageHero, SectionHeader, Counter } from '../components/ui/UIComponents'

const BASE_PRICE = 50

export default function QuotePage() {
  const [selectedService, setSelectedService] = useState('standard')
  const [rooms, setRooms] = useState({ bedroom: 2, bathroom: 1, kitchen: 1, living: 1 })
  const [extras, setExtras] = useState([])
  const [frequency, setFrequency] = useState('once')

  const serviceMultipliers = {
    standard: 1, deep: 1.8, office: 1.4,
    movein: 2.2, 'post-construction': 2.5, airbnb: 1.3,
  }

  const frequencyDiscounts = { once: 1, fortnightly: 0.9, weekly: 0.85 }

  const roomTotal = QUOTE_ROOMS.reduce((sum, r) => sum + rooms[r.id] * r.price, 0)
  const extrasTotal = QUOTE_EXTRAS.filter(e => extras.includes(e.id)).reduce((sum, e) => sum + e.price, 0)
  const subtotal = (BASE_PRICE + roomTotal + extrasTotal) * (serviceMultipliers[selectedService] || 1)
  const total = Math.round(subtotal * (frequencyDiscounts[frequency] || 1))

  const toggleExtra = (id) => setExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id])

  return (
    <>
      <PageHero
        breadcrumb="Instant Pricing"
        title="Get Your Free Quote"
        subtitle="No obligations. No hidden costs. See your price in seconds."
      />

      <section className="section-padding bg-light">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Config */}
            <div className="lg:col-span-2 space-y-5">
              {/* Service */}
              <div className="card p-6">
                <h3 className="font-heading font-semibold text-dark mb-4">1. Choose Service</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SERVICES.map(({ id, icon, title, price }) => (
                    <button
                      key={id}
                      onClick={() => setSelectedService(id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all relative ${
                        selectedService === id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-100 bg-white hover:border-primary-200'
                      }`}
                    >
                      {selectedService === id && (
                        <span className="absolute top-2 right-2 text-primary-500 text-xs">✓</span>
                      )}
                      <span className="text-2xl block mb-2">{icon}</span>
                      <span className="text-xs font-bold text-dark block leading-tight mb-1">{title}</span>
                      <span className="text-xs text-gray-400">{price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rooms */}
              <div className="card p-6">
                <h3 className="font-heading font-semibold text-dark mb-4">2. Number of Rooms</h3>
                <div className="divide-y divide-gray-50">
                  {QUOTE_ROOMS.map(r => (
                    <Counter
                      key={r.id}
                      label={`${r.label} (+$${r.price} each)`}
                      value={rooms[r.id]}
                      onChange={v => setRooms(p => ({ ...p, [r.id]: v }))}
                      min={r.min}
                      max={r.max}
                    />
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div className="card p-6">
                <h3 className="font-heading font-semibold text-dark mb-4">3. Cleaning Frequency</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'once', label: 'One-Time', discount: null },
                    { id: 'fortnightly', label: 'Fortnightly', discount: '10% off' },
                    { id: 'weekly', label: 'Weekly', discount: '15% off' },
                  ].map(({ id, label, discount }) => (
                    <button
                      key={id}
                      onClick={() => setFrequency(id)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        frequency === id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-100 bg-white hover:border-primary-200'
                      }`}
                    >
                      <p className="text-sm font-bold text-dark">{label}</p>
                      {discount && <p className="text-xs text-primary-500 font-medium mt-0.5">{discount}</p>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div className="card p-6">
                <h3 className="font-heading font-semibold text-dark mb-4">4. Optional Extras</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {QUOTE_EXTRAS.map(({ id, icon, label, price }) => (
                    <button
                      key={id}
                      onClick={() => toggleExtra(id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        extras.includes(id)
                          ? 'border-accent bg-orange-50'
                          : 'border-gray-100 bg-white hover:border-orange-200'
                      }`}
                    >
                      <span className="text-2xl block mb-2">{icon}</span>
                      <span className="text-xs font-bold text-dark block">{label}</span>
                      <span className="text-xs text-gray-400">+${price}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price sidebar */}
            <div>
              <div className="card p-6 sticky top-28">
                <h3 className="font-heading font-semibold text-dark mb-5 text-sm uppercase tracking-widest text-gray-400">
                  Price Estimate
                </h3>

                <div className="space-y-2.5 mb-5 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Base</span><span>${BASE_PRICE}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Rooms</span><span>+${roomTotal}</span></div>
                  {extrasTotal > 0 && <div className="flex justify-between"><span className="text-gray-500">Extras</span><span>+${extrasTotal}</span></div>}
                  {selectedService !== 'standard' && (
                    <div className="flex justify-between"><span className="text-gray-500">Service</span><span>×{serviceMultipliers[selectedService]}</span></div>
                  )}
                  {frequency !== 'once' && (
                    <div className="flex justify-between text-primary-600 font-semibold">
                      <span>Recurring discount</span>
                      <span>−{frequency === 'weekly' ? '15' : '10'}%</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex items-end justify-between">
                    <span className="text-gray-600 font-medium">Your Price</span>
                    <div className="text-right">
                      <p className="text-3xl font-heading font-bold text-dark">${total}</p>
                      <p className="text-xs text-gray-400">{frequency === 'once' ? 'one-time' : `per ${frequency === 'weekly' ? 'week' : 'fortnight'}`}</p>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/booking?service=${selectedService}&price=${total}`}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 mb-3"
                >
                  Book This Clean <FiArrowRight />
                </Link>
                <p className="text-xs text-gray-400 text-center">✅ No payment required upfront</p>

                <div className="mt-5 pt-5 border-t border-gray-100 space-y-2">
                  <p className="text-xs text-gray-500 font-semibold">Included in every clean:</p>
                  {['Vetted & insured cleaner', 'All equipment provided', 'Satisfaction guarantee'].map(item => (
                    <p key={item} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="text-primary-500">✓</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
