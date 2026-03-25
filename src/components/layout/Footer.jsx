import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'
import { SITE, FOOTER_LINKS } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* CTA Banner */}
      <div className="bg-primary-500">
        <div className="container-custom py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
              Ready for a spotless home?
            </h3>
            <p className="text-primary-100 text-sm">Book today and get your first clean 15% off.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/quote" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors text-sm">
              Get Free Quote
            </Link>
            <Link to="/booking" className="bg-dark/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-dark/30 transition-colors text-sm">
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold">C</div>
              <span className="font-heading font-bold text-xl">Clean<span className="text-primary-400">Home</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional cleaning services you can trust. Vetted cleaners, instant quotes, flexible bookings.
            </p>
            <div className="flex gap-3">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/10 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary-400 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary-400 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary-400 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <FiPhone className="mt-0.5 shrink-0 text-primary-400" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <FiMail className="mt-0.5 shrink-0 text-primary-400" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-gray-400 text-sm">
                  <FiMapPin className="mt-0.5 shrink-0 text-primary-400" />
                  {SITE.address}
                </span>
              </li>
              <li className="text-gray-400 text-sm pl-6">{SITE.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CleanHome. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
