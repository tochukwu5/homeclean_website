import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import { NAV_LINKS, SITE } from '../../data/siteData'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isHome = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-glow group-hover:scale-105 transition-transform">
            C
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${
            scrolled || !isHome ? 'text-dark' : 'text-white'
          }`}>
            Clean<span className="text-primary-400">Home</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : scrolled || !isHome
                    ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled || !isHome ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
            }`}
          >
            <FiPhone className="text-primary-400" />
            {SITE.phone}
          </a>
          <Link to="/booking" className="btn-primary text-sm px-5 py-2.5">
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled || !isHome ? 'text-dark' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-dark/50" onClick={() => setMobileOpen(false)} />
        <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
          <div className="flex items-center justify-between p-5 border-b">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">C</div>
              <span className="font-heading font-bold text-lg text-dark">Clean<span className="text-primary-500">Home</span></span>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-1 text-gray-500">
              <HiX size={22} />
            </button>
          </div>
          <nav className="flex-1 p-5 flex flex-col gap-1 overflow-y-auto">
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="p-5 border-t flex flex-col gap-3">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-gray-600">
              <FiPhone className="text-primary-500" /> {SITE.phone}
            </a>
            <Link to="/booking" className="btn-primary text-center text-sm">
              Book Now
            </Link>
            <Link to="/quote" className="btn-secondary text-center text-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
