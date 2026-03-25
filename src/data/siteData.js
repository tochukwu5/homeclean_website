export const SITE = {
  name: 'CleanHome',
  tagline: 'Your space, spotless.',
  phone: '+1 (555) 234-5678',
  whatsapp: '15552345678',
  email: 'hello@cleanhome.com',
  address: '123 Sparkle Street, Clean City, CC 10001',
  hours: 'Mon–Sat: 7am – 7pm',
}

export const SERVICES = [
  {
    id: 'standard',
    icon: '🏠',
    title: 'Standard Cleaning',
    description: 'Regular cleaning to keep your home fresh and tidy every week or fortnight.',
    features: ['Dusting all surfaces', 'Vacuuming & mopping', 'Bathroom sanitizing', 'Kitchen wipe-down', 'Trash removal'],
    price: 'From $80',
    popular: false,
    color: 'primary',
  },
  {
    id: 'deep',
    icon: '✨',
    title: 'Deep Cleaning',
    description: 'A thorough top-to-bottom clean for when your home needs extra attention.',
    features: ['Everything in Standard', 'Inside appliances', 'Cabinet interiors', 'Grout & tile scrubbing', 'Window sills & tracks'],
    price: 'From $180',
    popular: true,
    color: 'accent',
  },
  {
    id: 'office',
    icon: '🏢',
    title: 'Office Cleaning',
    description: 'Keep your workspace productive and hygienic with our commercial service.',
    features: ['Desk & surface wipe', 'Restroom sanitizing', 'Common area cleaning', 'Trash & recycling', 'Flexible scheduling'],
    price: 'From $120',
    popular: false,
    color: 'primary',
  },
  {
    id: 'movein',
    icon: '📦',
    title: 'Move In / Move Out',
    description: 'Leave the old place spotless or arrive to a perfectly clean new home.',
    features: ['Full deep clean', 'Inside all cabinets', 'Appliance interiors', 'Wall spot cleaning', 'Bond-back guarantee'],
    price: 'From $220',
    popular: false,
    color: 'primary',
  },
  {
    id: 'post-construction',
    icon: '🔨',
    title: 'Post-Construction',
    description: 'Remove dust, debris and residue after a renovation or build project.',
    features: ['Dust extraction', 'Paint & adhesive removal', 'Window cleaning', 'Floor polishing', 'Full sanitization'],
    price: 'From $280',
    popular: false,
    color: 'primary',
  },
  {
    id: 'airbnb',
    icon: '🛏️',
    title: 'Airbnb / Short-Stay',
    description: 'Fast, reliable turnovers that keep your guests impressed every time.',
    features: ['Linen change', 'Full room reset', 'Bathroom deep clean', 'Restocking essentials', 'Photo-ready finish'],
    price: 'From $100',
    popular: false,
    color: 'primary',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Get Your Quote',
    description: 'Select your service, number of rooms and any extras. See your price instantly — no hidden fees.',
    icon: '💬',
  },
  {
    step: '02',
    title: 'Pick Your Time',
    description: 'Choose a date and time that works for you. We work 7 days a week including holidays.',
    icon: '📅',
  },
  {
    step: '03',
    title: 'We Clean, You Relax',
    description: 'Our vetted, insured professionals arrive on time and leave your space spotless.',
    icon: '🧹',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Downtown',
    rating: 5,
    text: 'Absolutely incredible service! They cleaned every corner of my apartment. I came home and it looked brand new. Booking took less than 2 minutes!',
    avatar: 'SM',
    color: 'bg-emerald-500',
    service: 'Deep Cleaning',
  },
  {
    id: 2,
    name: 'James O.',
    location: 'Westside',
    rating: 5,
    text: 'Used them for move-out cleaning and got my full bond back. Professional, punctual, and thorough. Will definitely use again for my new place.',
    avatar: 'JO',
    color: 'bg-blue-500',
    service: 'Move-Out Clean',
  },
  {
    id: 3,
    name: 'Priya K.',
    location: 'Northbridge',
    rating: 5,
    text: 'I\'ve tried 3 cleaning companies before CleanHome. None of them come close. The quote calculator was super easy and the cleaner was amazing.',
    avatar: 'PK',
    color: 'bg-purple-500',
    service: 'Standard Cleaning',
  },
  {
    id: 4,
    name: 'David L.',
    location: 'Eastside',
    rating: 5,
    text: 'Our office has never looked this clean. We have a weekly schedule now and the team is always consistent. Highly recommend for businesses!',
    avatar: 'DL',
    color: 'bg-orange-500',
    service: 'Office Cleaning',
  },
  {
    id: 5,
    name: 'Fatima A.',
    location: 'Southpark',
    rating: 5,
    text: 'Booked same-day and the cleaner arrived exactly on time. She was so thorough with the kitchen — it literally sparkled. 10/10!',
    avatar: 'FA',
    color: 'bg-pink-500',
    service: 'Standard Cleaning',
  },
  {
    id: 6,
    name: 'Tom R.',
    location: 'Riverside',
    rating: 5,
    text: 'Post-renovation clean was exactly what we needed. All the construction dust is gone and the floors look incredible. Fast and affordable.',
    avatar: 'TR',
    color: 'bg-teal-500',
    service: 'Post-Construction',
  },
]

export const TRUST_BADGES = [
  { icon: '🛡️', title: 'Fully Insured', description: 'Every job is covered by our comprehensive insurance policy.' },
  { icon: '✅', title: 'Vetted Cleaners', description: 'Background-checked and professionally trained staff only.' },
  { icon: '💯', title: '100% Satisfaction', description: 'Not happy? We\'ll re-clean for free — no questions asked.' },
  { icon: '🕐', title: 'Always On Time', description: 'We respect your schedule and arrive within the agreed window.' },
]

export const QUOTE_ROOMS = [
  { id: 'bedroom', label: 'Bedrooms', min: 0, max: 8, default: 2, price: 25 },
  { id: 'bathroom', label: 'Bathrooms', min: 0, max: 6, default: 1, price: 30 },
  { id: 'kitchen', label: 'Kitchens', min: 0, max: 3, default: 1, price: 35 },
  { id: 'living', label: 'Living Areas', min: 0, max: 4, default: 1, price: 20 },
]

export const QUOTE_EXTRAS = [
  { id: 'oven', label: 'Oven Clean', price: 35, icon: '🍳' },
  { id: 'fridge', label: 'Fridge Clean', price: 25, icon: '🧊' },
  { id: 'windows', label: 'Interior Windows', price: 40, icon: '🪟' },
  { id: 'laundry', label: 'Laundry & Folding', price: 30, icon: '👕' },
  { id: 'balcony', label: 'Balcony / Patio', price: 30, icon: '🏡' },
  { id: 'cabinets', label: 'Inside Cabinets', price: 45, icon: '🗄️' },
]

export const BEFORE_AFTER = [
  {
    id: 1,
    room: 'Kitchen',
    beforeBg: 'from-gray-400 to-gray-600',
    afterBg: 'from-primary-400 to-primary-600',
  },
  {
    id: 2,
    room: 'Bathroom',
    beforeBg: 'from-gray-400 to-gray-600',
    afterBg: 'from-primary-400 to-primary-600',
  },
  {
    id: 3,
    room: 'Living Room',
    beforeBg: 'from-gray-400 to-gray-600',
    afterBg: 'from-primary-400 to-primary-600',
  },
]

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Get Quote', path: '/quote' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const FOOTER_LINKS = {
  services: [
    { label: 'Standard Cleaning', path: '/services' },
    { label: 'Deep Cleaning', path: '/services' },
    { label: 'Office Cleaning', path: '/services' },
    { label: 'Move In/Out', path: '/services' },
    { label: 'Post-Construction', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'How It Works', path: '/#how-it-works' },
    { label: 'Testimonials', path: '/#testimonials' },
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/contact' },
  ],
}
