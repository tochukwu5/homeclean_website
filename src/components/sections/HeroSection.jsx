import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const TRUST_ITEMS = ['Fully Insured', '5-Star Rated', 'Same-Day Booking']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary-900/60 to-dark" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              Professional Cleaning Services
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6">
              A Spotless Clean,{' '} 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                Booked in 60 Seconds
              </span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              Trusted, vetted cleaners at your door. Get an instant quote, pick your time, and let us handle the rest.
            </p>

            {/* Trust items */}
            <div className="flex flex-wrap gap-4 mb-10">
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <FiCheckCircle className="text-primary-400" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quote"
                className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-4"
              >
                Get Instant Quote
                <FiArrowRight />
              </Link>
              <Link
                to="/booking"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20
                           text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Right: Floating card UI */}
          <div className="relative hidden lg:block">
            {/* Main illustration card */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 animate-float">
              {/* Mock booking UI */}
              <div className="bg-white rounded-2xl p-5 shadow-xl">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Quick Booking</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-primary-50 rounded-xl p-3">
                    <span className="text-2xl">🏠</span>
                    <div>
                      <p className="text-xs text-gray-400">Service</p>
                      <p className="text-sm font-semibold text-dark">Standard Home Clean</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="text-xs text-gray-400">Date & Time</p>
                      <p className="text-sm font-semibold text-dark">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-primary-500 rounded-xl p-3 text-white">
                    <span className="text-sm font-semibold">Estimated Price</span>
                    <span className="text-lg font-bold">$120</span>
                  </div>
                  <button className="w-full bg-dark text-white font-semibold py-3 rounded-xl text-sm">
                    Confirm Booking →
                  </button>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card p-3 flex items-center gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-yellow-400 text-lg">⭐</div>
              <div>
                <p className="text-xs font-bold text-dark">4.9 / 5</p>
                <p className="text-[10px] text-gray-400">1,200+ reviews</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white rounded-2xl shadow-lg p-3 text-sm font-semibold animate-float" style={{ animationDelay: '1s' }}>
              ✅ Bond-back guarantee
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
