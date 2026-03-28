import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'
import { FiCalendar, FiClock, FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { SERVICES } from '../../data/siteData'

const TIME_SLOTS = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM',
]

const INITIAL_FORM = {
  name: '', email: '', phone: '', address: '',
  service: 'standard', date: null, time: '', notes: '',
}

export default function BookingForm({ prefillService = '', prefillPrice = '' }) {
  const [form, setForm] = useState({ ...INITIAL_FORM, service: prefillService || 'standard' })
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const handleNext = () => {
    if (step === 1) {
      if (!form.service || !form.date || !form.time) {
        toast.error('Please fill in all required fields.')
        return
      }
    }
    setStep(s => s + 1)
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (!form.name || !form.email || !form.phone || !form.address) {
  //     toast.error('Please fill in all required fields.')
  //     return
  //   }
  //   setLoading(true)
  //   await new Promise(r => setTimeout(r, 1500))
  //   setLoading(false)
  //   setSubmitted(true)
  //   toast.success('Booking confirmed! We\'ll be in touch shortly.')
  // }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  try {
    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (data.success) {
      toast.success('Booking confirmed! We\'ll be in touch shortly!.')
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    } else {
      toast.error(data.error || 'Something went wrong.')
    }
  } catch {
    toast.error('Failed to send. Please try again.')
  }
  setLoading(false)
}

 

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-heading font-bold text-dark mb-2">Booking Confirmed!</h3>
        <p className="text-gray-500 mb-2">Thanks, <strong>{form.name}</strong>! Your booking is received.</p>
        <p className="text-gray-500 text-sm mb-6">
          We'll send a confirmation to <strong>{form.email}</strong> and call you on <strong>{form.phone}</strong> to confirm.
        </p>
        <div className="inline-block bg-primary-50 rounded-2xl p-5 text-left mb-8 text-sm">
          <p className="font-semibold text-dark mb-3">Booking Summary</p>
          <div className="space-y-1 text-gray-600">
            <p>📋 Service: <strong>{SERVICES.find(s => s.id === form.service)?.title}</strong></p>
            <p>📅 Date: <strong>{form.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong></p>
            <p>🕐 Time: <strong>{form.time}</strong></p>
            <p>📍 Address: <strong>{form.address}</strong></p>
          </div>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); setStep(1) }}
          className="btn-secondary"
        >
          Book Another Clean
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              step >= s ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-400'
            }`}>
              {step > s ? '✓' : s}
            </div>
            <span className={`text-sm font-medium ${step >= s ? 'text-dark' : 'text-gray-400'}`}>
              {s === 1 ? 'Service & Time' : 'Your Details'}
            </span>
            {s < 2 && <div className={`flex-1 h-0.5 w-12 ${step > s ? 'bg-primary-500' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Service + Date */}
        {step === 1 && (
          <div className="space-y-5">
            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Service Type *</label>
              <select
                value={form.service}
                onChange={e => update('service', e.target.value)}
                className="select-field"
              >
                {SERVICES.map(s => (
                  <option key={s.id} value={s.id}>{s.icon} {s.title} — {s.price}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">
                <FiCalendar className="inline mr-2 text-primary-500" />Preferred Date *
              </label>
              <DatePicker
                selected={form.date}
                onChange={date => update('date', date)}
                minDate={new Date()}
                placeholderText="Select a date"
                dateFormat="MMMM d, yyyy"
                className="input-field w-full"
                filterDate={d => d.getDay() !== 0}
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">
                <FiClock className="inline mr-2 text-primary-500" />Preferred Time *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {TIME_SLOTS.map(slot => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => update('time', slot)}
                    className={`py-2 px-2 rounded-xl text-xs font-medium border-2 transition-all ${
                      form.time === slot
                        ? 'border-primary-500 bg-primary-50 text-primary-600'
                        : 'border-gray-100 bg-white text-gray-600 hover:border-primary-200'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Special Instructions (Optional)</label>
              <textarea
                value={form.notes}
                onChange={e => update('notes', e.target.value)}
                placeholder="E.g. pets at home, access code, areas to focus on..."
                rows={3}
                className="input-field resize-none"
              />
            </div>

            <button type="button" onClick={handleNext} className="btn-primary w-full py-4">
              Continue to Details →
            </button>
          </div>
        )}

        {/* Step 2: Personal details */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  <FiUser className="inline mr-2 text-primary-500" />Full Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder="Jane Smith"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  <FiPhone className="inline mr-2 text-primary-500" />Phone Number *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => update('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark mb-2">
                <FiMail className="inline mr-2 text-primary-500" />Email Address *
              </label>
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
              <label className="block text-sm font-semibold text-dark mb-2">
                <FiMapPin className="inline mr-2 text-primary-500" />Property Address *
              </label>
              <input
                type="text"
                value={form.address}
                onChange={e => update('address', e.target.value)}
                placeholder="123 Main Street, City, State, ZIP"
                className="input-field"
                required
              />
            </div>

            {/* Summary */}
            <div className="bg-primary-50 rounded-2xl p-4 text-sm">
              <p className="font-semibold text-dark mb-2">Booking Summary</p>
              <div className="space-y-1 text-gray-600 text-xs">
                <p>Service: <strong>{SERVICES.find(s => s.id === form.service)?.title}</strong></p>
                <p>Date: <strong>{form.date?.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}</strong></p>
                <p>Time: <strong>{form.time}</strong></p>
                {prefillPrice && <p className="text-primary-600 font-semibold mt-1">Estimated: ${prefillPrice}</p>}
              </div>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1 py-3">
                ← Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex-1 py-4 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Confirming...
                  </>
                ) : 'Confirm Booking ✓'}
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center">
              🔒 Your information is secure and will never be shared.
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
