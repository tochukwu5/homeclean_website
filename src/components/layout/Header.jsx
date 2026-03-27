import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import { NAV_LINKS, SITE } from '../../data/siteData'

// Drawer rendered via Portal — completely outside the header DOM tree
function MobileDrawer({ open, onClose }) {
  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          backgroundColor: 'rgba(15,31,28,0.55)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Slide-in panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '288px',
          zIndex: 9999,
          backgroundColor: '#ffffff',
          boxShadow: '-4px 0 40px rgba(0,0,0,0.18)',
          display: 'flex',
          flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #f1f5f9' }}>
          <Link to="/" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, background: '#00b496', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16 }}>C</div>
            <span style={{ fontWeight: 700, fontSize: 18, color: '#0F1F1C', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Perth<span style={{ color: '#00b496' }}> Kleeners</span>
            </span>
          </Link>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', padding: 4 }}>
            <HiX size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: 4, overflowY: 'auto' }}>
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={onClose}
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

        {/* Bottom CTA */}
        <div style={{ padding: '20px', borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-gray-600">
            <FiPhone className="text-primary-500" /> {SITE.phone}
          </a>
          <Link to="/booking" onClick={onClose} className="btn-primary text-center text-sm">
            Book Now
          </Link>
          <Link to="/quote" onClick={onClose} className="btn-secondary text-center text-sm">
            Get a Quote
          </Link>
        </div>
      </div>
    </>,
    document.body
  )
}

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
    <>
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
              P
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${
              scrolled || !isHome ? 'text-dark' : 'text-white'
            }`}>
              Perth<span className="text-primary-400"> Kleeners</span>
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

          {/* Desktop CTA */}
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

          {/* Hamburger */}
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
      </header>

      {/* Portal drawer — rendered directly on document.body, never affected by header */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}