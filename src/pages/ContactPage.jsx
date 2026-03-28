import { useState } from 'react'
import toast from 'react-hot-toast'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { PageHero } from '../components/ui/UIComponents'
import { SITE } from '../data/siteData'

const FAQS = [
  { q: 'How do I book a cleaning?', a: 'Use our online booking form or call us directly. Booking takes less than 60 seconds.' },
  { q: 'Do I need to be home during the clean?', a: 'No! You can provide access instructions when booking. Many customers leave a key or code.' },
  { q: 'What if I\'m not happy with the clean?', a: 'We offer a free re-clean within 48 hours, no questions asked. Your satisfaction is guaranteed.' },
  { q: 'Do I need to provide cleaning supplies?', a: 'No. Our cleaners bring all necessary equipment and eco-friendly products.' },
  { q: 'How much does it cost?', a: 'Use our instant quote calculator on the website to get a price in seconds. No hidden fees.' },
  { q: 'Can I get the same cleaner every time?', a: 'Yes! We try to assign the same cleaner for recurring bookings so you build familiarity and trust.' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const update = (k, v) => setForm(p => ({ ...p, [k]: v }))

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   await new Promise(r => setTimeout(r, 1200))
  //   setLoading(false)
  //   toast.success('Message sent! We\'ll get back to you within 24 hours.')
  //   setForm({ name: '', email: '', phone: '', message: '' })
  // }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    } )
    console.log('Sent form data:', form)  
    const data = await res.json()
    if (data.success) {
    console.log('Sent data:', data)  

      toast.success('Message sent!')
      setForm({ name: '', email: '', phone: '', message: '' })
    } else {
      toast.error(data.error || 'Something went wrong.')
    console.log('Sent data:', data)  

    }
  } catch {
    toast.error('Failed to send. Please try again.')
  }
  setLoading(false)
}

  return (
    <>
      <PageHero
        breadcrumb="Get in Touch"
        title="Contact Us"
        subtitle="Questions? Feedback? We'd love to hear from you."
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-dark mb-6">Reach Us Directly</h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: FiPhone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
                  { icon: FiMail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: FiMapPin, label: 'Address', value: SITE.address, href: null },
                  { icon: FiClock, label: 'Hours', value: SITE.hours, href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="card p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-dark font-medium hover:text-primary-600 transition-colors">{value}</a>
                      ) : (
                        <p className="text-dark font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-4 rounded-2xl hover:bg-[#1ebe5d] transition-colors w-full justify-center"
              >
                <FaWhatsapp size={22} />
                Chat on WhatsApp
              </a>

              {/* FAQ */}
              <div className="mt-10">
                <h3 className="text-xl font-heading font-bold text-dark mb-5">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }) => (
                    <FAQItem key={q} question={q} answer={a} />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="card p-8">
                <h2 className="text-xl font-heading font-bold text-dark mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                      placeholder="Jane Smith"
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => update('email', e.target.value)}
                        placeholder="jane@example.com"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => update('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={e => update('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="input-field resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 flex items-center justify-between text-left gap-4 hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-semibold text-dark">{question}</span>
        <span className={`text-primary-500 text-lg font-bold transition-transform duration-200 shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
          <p className="pt-3">{answer}</p>
        </div>
      )}
    </div>
  )
}
