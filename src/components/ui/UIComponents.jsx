// Button component
export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'text-gray-600 hover:text-primary-600 hover:bg-primary-50 font-medium px-4 py-2 rounded-xl transition-all',
  }
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  }
  return (
    <button className={`${variants[variant]} ${size !== 'md' ? sizes[size] : ''} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Section header component
export function SectionHeader({ tag, title, subtitle, center = false, light = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// Star rating
export function StarRating({ rating = 5, size = 'sm' }) {
  const sizes = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' }
  return (
    <div className={`flex gap-0.5 ${sizes[size]}`}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-200'}>★</span>
      ))}
    </div>
  )
}

// Badge
export function Badge({ children, color = 'primary' }) {
  const colors = {
    primary: 'bg-primary-50 text-primary-600',
    accent: 'bg-orange-50 text-accent',
    green: 'bg-green-50 text-green-600',
  }
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${colors[color]}`}>
      {children}
    </span>
  )
}

// Divider
export function Divider({ className = '' }) {
  return <div className={`border-t border-gray-100 ${className}`} />
}

// Counter component for quote calculator
export function Counter({ value, onChange, min = 0, max = 10, label }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-8 h-8 rounded-lg border-2 border-gray-200 flex items-center justify-center text-gray-500
                     hover:border-primary-400 hover:text-primary-600 transition-colors font-bold text-lg leading-none"
          disabled={value <= min}
        >
          −
        </button>
        <span className="w-6 text-center font-semibold text-dark">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-8 h-8 rounded-lg border-2 border-gray-200 flex items-center justify-center text-gray-500
                     hover:border-primary-400 hover:text-primary-600 transition-colors font-bold text-lg leading-none"
          disabled={value >= max}
        >
          +
        </button>
      </div>
    </div>
  )
}

// Page Hero Banner (for inner pages)
export function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-gradient-to-br from-dark via-primary-900 to-dark pt-32 pb-16">
      <div className="container-custom text-center">
        {breadcrumb && (
          <p className="text-primary-400 text-sm font-medium mb-3 tracking-wide uppercase">{breadcrumb}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-white/60 text-lg max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
