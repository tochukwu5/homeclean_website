import { Link } from 'react-router-dom'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { SERVICES, HOW_IT_WORKS } from '../data/siteData'
import { PageHero, Badge, SectionHeader } from '../components/ui/UIComponents'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="What We Offer"
        title="Our Cleaning Services"
        subtitle="Professional cleaning for every room, every home, every need."
      />

      {/* Services grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map(service => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeader
              tag="The Process"
              title="How Booking Works"
              subtitle="Simple, fast, and transparent from start to finish."
              center
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ step, icon, title, description }) => (
              <div key={step} className="text-center">
                <div className="relative inline-flex mb-5">
                  <div className="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center text-3xl">
                    {icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    {step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-primary-100 mb-8 max-w-lg mx-auto">
            Use our quote calculator to find the right service and get an instant price estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
              Get Instant Quote
            </Link>
            <Link to="/booking" className="bg-dark/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-dark/30 transition-colors flex items-center gap-2">
              Book Now <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceDetailCard({ service }) {
  const { icon, title, description, features, price, popular } = service

  return (
    <div className={`card p-7 flex flex-col relative ${popular ? 'ring-2 ring-accent' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-6">
          <Badge color="accent">Most Popular</Badge>
        </div>
      )}
      <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl mb-5">
        {icon}
      </div>
      <h3 className="font-heading font-bold text-xl text-dark mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
      <ul className="space-y-2.5 mb-6 flex-1">
        {features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <FiCheck className="text-primary-500 shrink-0" /> {f}
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 mb-0.5">Starting from</p>
          <p className="font-heading font-bold text-xl text-dark">{price}</p>
        </div>
        <Link to={`/booking?service=${service.id}`} className="btn-primary text-sm px-5 py-2.5 flex items-center gap-1.5">
          Book <FiArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
