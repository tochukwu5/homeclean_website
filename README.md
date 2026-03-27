# Perth Kleeners — Professional Cleaning Website

A modern, responsive React + Tailwind CSS cleaning service website.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.jsx          # Root layout wrapper
│   │   ├── Header.jsx          # Sticky responsive navbar
│   │   └── Footer.jsx          # Footer with CTA banner
│   ├── sections/
│   │   ├── HeroSection.jsx     # Hero with animated booking card
│   │   ├── QuoteCalculator.jsx # Live price calculator
│   │   ├── ServicesSection.jsx # Services grid cards
│   │   ├── HowItWorksSection.jsx
│   │   ├── TrustSection.jsx    # Stats + trust badges
│   │   ├── TestimonialsSection.jsx
│   │   ├── BeforeAfterSection.jsx
│   │   ├── BookingForm.jsx     # 2-step booking form
│   │   └── BookingCtaSection.jsx
│   └── ui/
│       ├── UIComponents.jsx    # Reusable: Button, SectionHeader, etc.
│       └── WhatsAppButton.jsx  # Floating WhatsApp chat button
├── data/
│   └── siteData.js             # All content, services, testimonials
├── pages/
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   ├── BookingPage.jsx
│   ├── QuotePage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx                     # Router + routes
├── main.jsx
└── index.css                   # Tailwind + custom styles
```

---

## 🎨 Design System

**Colors**
- Primary: `#00b496` (green) — main brand color
- Accent: `#FF6B35` (orange) — CTAs and highlights
- Dark: `#0F1F1C` — backgrounds and headings

**Fonts**
- Headings: Plus Jakarta Sans (Google Fonts)
- Body: DM Sans (Google Fonts)

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home (Hero, Calculator, Services, How it Works, Trust, Reviews, Before/After) |
| `/services` | Full services listing |
| `/quote` | Detailed quote calculator |
| `/booking` | 2-step booking form |
| `/about` | About, team, values |
| `/contact` | Contact form + FAQ |
| `*` | 404 Not Found |

---

## ✏️ Customization

### Update Business Info
Edit `src/data/siteData.js`:
```js
export const SITE = {
  name: 'Perth Kleeners',
  phone: '+1 (555) 234-5678',
  whatsapp: '15552345678',   // ← your WhatsApp number
  email: 'hello@Perth Kleeners.com',
  address: '123 Main St...',
}
```

### Update Services & Pricing
Edit `SERVICES`, `QUOTE_ROOMS`, and `QUOTE_EXTRAS` arrays in `siteData.js`.

### Update Testimonials
Edit the `TESTIMONIALS` array in `siteData.js`.

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `react-router-dom` | Client-side routing |
| `react-datepicker` | Date picker in booking form |
| `react-hot-toast` | Toast notifications |
| `react-icons` | Icon library (FI, FA sets) |
| `framer-motion` | (installed, available for future animations) |

---

## 📱 Responsive

Fully responsive across:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1280px+)

Mobile nav uses a slide-in drawer with overlay.
