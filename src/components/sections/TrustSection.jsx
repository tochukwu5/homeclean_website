import { TRUST_BADGES } from '../../data/siteData'
import { SectionHeader } from '../ui/UIComponents'

const STATS = [
  { value: '1,200+', label: 'Happy Customers' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {STATS.map(({ value, label }) => (
            <div key={label} className="card p-6 text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-500 mb-1">{value}</p>
              <p className="text-gray-500 text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <SectionHeader
              tag="Why Choose Us"
              title="Safety & Trust is Our Priority"
              subtitle="We connect you with hardworking individuals who are background-checked, trained, and dependable."
            />

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {TRUST_BADGES.map(({ icon, title, description }) => (
                <div key={title} className="flex gap-4 p-4 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all">
                  <div className="text-2xl shrink-0">{icon}</div>
                  <div>
                    <p className="font-semibold text-dark text-sm mb-1">{title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual block */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <p className="text-primary-100 text-sm font-semibold uppercase tracking-widest mb-4">Our Promise</p>
                <h3 className="text-2xl font-heading font-bold mb-3">100% Satisfaction Guarantee</h3>
                <p className="text-primary-100 text-sm leading-relaxed mb-6">
                  If you're not completely happy with your clean, we'll come back and re-clean the areas in question — completely free.
                </p>

                <div className="space-y-3">
                  {[
                    'Free re-clean within 48 hours',
                    'No questions asked',
                    'Applies to every booking',
                    'Full refund if still not satisfied',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                      <span className="text-primary-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card-hover p-4 flex items-center gap-3">
              <div className="text-3xl">🏆</div>
              <div>
                <p className="font-bold text-dark text-sm">Top Rated 2024</p>
                <p className="text-xs text-gray-400">Best Cleaning Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
