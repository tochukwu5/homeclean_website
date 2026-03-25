import HeroSection from '../components/sections/HeroSection'
import QuoteCalculator from '../components/sections/QuoteCalculator'
import ServicesSection from '../components/sections/ServicesSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import TrustSection from '../components/sections/TrustSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import BeforeAfterSection from '../components/sections/BeforeAfterSection'
import BookingCtaSection from '../components/sections/BookingCtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuoteCalculator />
      <ServicesSection />
      <HowItWorksSection />
      <TrustSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <BookingCtaSection />
    </>
  )
}
