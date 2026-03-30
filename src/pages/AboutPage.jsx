import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { PageHero, SectionHeader, StarRating } from '../components/ui/UIComponents'
import { TRUST_BADGES, TESTIMONIALS } from '../data/siteData'

const TEAM = [
  { name: 'Maria J.', role: 'Lead Cleaner', rating: 5, jobs: 320, emoji: '👩🏽' },
  { name: 'Kwame A.', role: 'Senior Cleaner', rating: 5, jobs: 280, emoji: '👨🏿' },
  { name: 'Priya S.', role: 'Deep Clean Specialist', rating: 5, jobs: 195, emoji: '👩🏽‍🦱' },
  { name: 'Tom R.', role: 'Commercial Specialist', rating: 5, jobs: 210, emoji: '👨🏻' },
]

const VALUES = [
  { emoji: '🌿', title: 'Eco-Friendly', desc: 'We use non-toxic, biodegradable cleaning products safe for your family and pets.' },
  { emoji: '🤝', title: 'Community First', desc: 'We hire locally and pay fair wages to invest in the communities we serve.' },
  { emoji: '🔄', title: 'Consistency', desc: "Same cleaner every visit so you always know who's in your home." },
  { emoji: '📱', title: 'Tech-Powered', desc: 'Easy booking, real-time updates, and instant quotes — all online.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="Our Story"
        title="About Perth Kleeners"
        subtitle="We started Perth Kleeners because everyone deserves a clean space without the hassle."
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                tag="Who We Are"
                title="More Than Just a Cleaning Company"
                subtitle=""
              />
              <div className="space-y-4 text-gray-600 leading-relaxed mt-4">
                <p>
                  Perth Kleeners was founded with one simple goal: to make professional home cleaning as easy as ordering food online. No phone tag. No wondering who's showing up. No confusing pricing.
                </p>
                <p>
                  We carefully vet every cleaner on our platform — background checks, skills training, and ongoing quality reviews. When you book with us, you're getting a professional you can trust.
                </p>
                <p>
                  Since launching, we've completed over <strong className="text-dark">10,000+ cleans</strong> with a <strong className="text-dark">4.9-star rating</strong>. We're proud of every sparkle we've left behind.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link to="/booking" className="btn-primary flex items-center gap-2">
                  Book a Clean <FiArrowRight />
                </Link>
                <Link to="/contact" className="btn-secondary">Contact Us</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '10,000+', label: 'Cleans Completed', emoji: '🧹' },
                { val: '4.9★', label: 'Average Rating', emoji: '⭐' },
                { val: '500+', label: 'Vetted Cleaners', emoji: '✅' },
                { val: '5 yrs', label: 'In Business', emoji: '📅' },
              ].map(stat => (
                <div key={stat.label} className="card p-5 text-center">
                  <p className="text-3xl mb-1">{stat.emoji}</p>
                  <p className="text-2xl font-heading font-bold text-dark">{stat.val}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeader tag="Our Values" title="What Drives Us" center />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ emoji, title, desc }) => (
              <div key={title} className="card p-6 text-center hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-heading font-bold text-dark mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionHeader
              tag="Meet the Team"
              title="Our Top-Rated Cleaners"
              subtitle="Every cleaner is vetted, trained, and rated by real customers."
              center
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map(({ name, role, rating, jobs, emoji }) => (
              <div key={name} className="card p-6 text-center hover:-translate-y-1 transition-all">
                <div className="text-5xl mb-3">{emoji}</div>
                <h3 className="font-heading font-bold text-dark">{name}</h3>
                <p className="text-primary-500 text-xs font-semibold mt-0.5 mb-2">{role}</p>
                <StarRating rating={rating} />
                <p className="text-xs text-gray-400 mt-1">{jobs} jobs completed</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Trust */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-10">
            <SectionHeader tag="Our Promise" title="Why You Can Trust Us" center />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_BADGES.map(({ icon, title, description }) => (
              <div key={title} className="card p-6 hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-heading font-bold text-dark mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
