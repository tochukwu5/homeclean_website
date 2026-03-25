import { Link } from 'react-router-dom'
import { HOW_IT_WORKS } from '../../data/siteData'
import { SectionHeader } from '../ui/UIComponents'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <SectionHeader
            tag="How It Works"
            title="Clean Home in 3 Simple Steps"
            subtitle="From quote to clean, we make it ridiculously easy."
            center
            light
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-primary-500/50 via-primary-400 to-primary-500/50" />

          {HOW_IT_WORKS.map(({ step, icon, title, description }) => (
            <div key={step} className="text-center relative group">
              {/* Step number + icon */}
              <div className="relative inline-flex mb-6">
                <div className="w-24 h-24 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center text-4xl
                               group-hover:bg-primary-500/30 group-hover:border-primary-400/50 transition-all duration-300">
                  {icon}
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-primary-500 rounded-xl flex items-center justify-center
                                text-white text-xs font-bold shadow-lg">
                  {step}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/booking"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            Book Your First Clean
          </Link>
          <p className="text-white/40 text-sm mt-3">Takes less than 60 seconds</p>
        </div>
      </div>
    </section>
  )
}
