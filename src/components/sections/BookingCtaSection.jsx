import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE } from '../../data/siteData'

export default function BookingCtaSection() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a cleaning service.")}`

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-dark rounded-3xl overflow-hidden relative">
          {/* Decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10 p-10 md:p-16 text-center">
            <p className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-3">Ready to get started?</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              Book Your Clean Today.<br />
              <span className="text-primary-400">You Deserve It.</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Takes 60 seconds. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                Book Now <FiArrowRight />
              </Link>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors text-base"
              >
                Get Instant Quote
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold px-8 py-4 rounded-xl hover:bg-[#25D366]/30 transition-colors text-base"
              >
                <FaWhatsapp size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
