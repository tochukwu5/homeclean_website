import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { SERVICES } from '../../data/siteData'
import { SectionHeader, Badge } from '../ui/UIComponents'

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag="What We Offer"
            title="Cleaning Services for Every Need"
            subtitle="From quick weekly cleans to full post-renovation overhauls — we do it all."
          />
          <Link to="/services" className="btn-secondary shrink-0 flex items-center gap-2">
            All Services <FiArrowRight />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const { icon, title, description, features, price, popular } = service

  return (
    <div className={`card p-6 flex flex-col relative group hover:-translate-y-1 transition-all duration-300 ${
      popular ? 'ring-2 ring-accent' : ''
    }`}>
      {popular && (
        <div className="absolute -top-3 left-6">
          <Badge color="accent">Most Popular</Badge>
        </div>
      )}

      <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="font-heading font-bold text-lg text-dark mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

      <ul className="space-y-2 mb-5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <FiCheck className="text-primary-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="font-heading font-bold text-dark">{price}</span>
        <Link to="/quote" className="text-primary-600 text-sm font-semibold hover:gap-2 flex items-center gap-1 transition-all">
          Get Quote <FiArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
