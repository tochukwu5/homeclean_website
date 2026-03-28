import { useSearchParams } from 'react-router-dom'
import BookingForm from '../components/sections/BookingForm'
import { PageHero } from '../components/ui/UIComponents'
import { TRUST_BADGES } from '../data/siteData'

export default function BookingPage() {
  const [params] = useSearchParams()
  const service = params.get('service') || ''
  const price = params.get('price') || ''

  return (
    <>
      <PageHero
        breadcrumb="Schedule Your Clean"
        title="Book a Cleaning"
        subtitle="Pick your service, choose a time, and we'll take care of the rest."
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <BookingForm prefillService={service} prefillPrice={price} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Trust */}
              <div className="card p-6">
                <h3 className="font-heading font-bold text-dark mb-4">Why Book With Us?</h3>
                <div className="space-y-4">
                  {TRUST_BADGES.map(({ icon, title, description }) => (
                    <div key={title} className="flex gap-3">
                      <span className="text-xl shrink-0">{icon}</span>
                      <div>
                        <p className="font-semibold text-sm text-dark">{title}</p>
                        <p className="text-xs text-gray-500">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-primary-500 rounded-3xl p-6 text-white">
                <h3 className="font-heading font-bold mb-2">Need Help?</h3>
                <p className="text-primary-100 text-sm mb-4">
                  Our team is available Mon–Sat, 7am–7pm to assist you.
                </p>
                <a
                  href="tel:+1466096962"
                  className="bg-white text-primary-600 font-semibold text-sm px-4 py-2.5 rounded-xl inline-block hover:bg-primary-50 transition-colors"
                >
                  📞 Call Us Now
                </a>
              </div>

              {/* Promise */}
              <div className="card p-6">
                <div className="text-3xl mb-3">💯</div>
                <h3 className="font-heading font-bold text-dark mb-2">100% Satisfaction</h3>
                <p className="text-gray-500 text-sm">
                  Not happy? We'll re-clean for free — no questions asked. That's our guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
