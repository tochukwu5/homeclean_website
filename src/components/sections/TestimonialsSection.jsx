import { useState } from 'react'
import { TESTIMONIALS } from '../../data/siteData'
import { SectionHeader, StarRating } from '../ui/UIComponents'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionHeader
            tag="Customer Reviews"
            title="What Our Clients Say"
            subtitle="Over 1,200 five-star reviews and counting. Here's why they keep coming back."
            center
          />
          {/* Aggregate stars */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <StarRating rating={5} size="lg" />
            <span className="font-heading font-bold text-2xl text-dark">4.9</span>
            <span className="text-gray-400 text-sm">/ 5 from 1,200+ reviews</span>
          </div>
        </div>

        {/* Grid of cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`card p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                active === i ? 'ring-2 ring-primary-400' : ''
              }`}
              onClick={() => setActive(i)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${t.color} rounded-xl flex items-center justify-center text-white font-bold text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
                <span className="text-xs bg-primary-50 text-primary-600 font-medium px-2 py-1 rounded-lg">{t.service}</span>
              </div>

              <StarRating rating={t.rating} />

              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Join thousands of happy homeowners</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:shadow-card transition-all"
            >
              <span className="text-lg">🔵</span> View Google Reviews
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:shadow-card transition-all"
            >
              <span className="text-lg">🔷</span> View Facebook Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
