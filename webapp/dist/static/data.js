// Data Configuration - Single Source of Truth
const PORTFOLIO_DATA = {
  roofing: [
    {
      id: 'roofing-1',
      title: 'Luxury Home Roof Installation',
      description: 'Complete premium asphalt shingle roof installation on Houston luxury home. Perfect craftsmanship with 30-year warranty.',
      image: '/static/images/roofing-1.jpg',
      category: 'ROOFING',
      duration: '2 Weeks',
      location: 'Houston, TX'
    },
    {
      id: 'roofing-2',
      title: 'Professional Roof Installation',
      description: 'Expert residential roof installation with premium materials and professional safety standards.',
      image: '/static/images/roofing-2.jpg',
      category: 'ROOFING',
      duration: '10 Days',
      location: 'Sugar Land, TX'
    },
    {
      id: 'roofing-3',
      title: 'Modern Home Roofing',
      description: 'Contemporary home with pristine architectural shingles and professional finish.',
      image: '/static/images/roofing-3.jpg',
      category: 'ROOFING',
      duration: '2 Weeks',
      location: 'Katy, TX'
    },
    {
      id: 'roofing-4',
      title: 'Quality Roof Inspection',
      description: 'Professional roof quality inspection and installation verification with detailed documentation.',
      image: '/static/images/roofing-4.jpg',
      category: 'ROOFING',
      duration: '1 Week',
      location: 'Pearland, TX'
    },
    {
      id: 'roofing-5',
      title: 'Estate Roof Project',
      description: 'Large luxury estate roofing project with multiple levels and premium materials.',
      image: '/static/images/roofing-5.jpg',
      category: 'ROOFING',
      duration: '3 Weeks',
      location: 'The Woodlands, TX'
    }
  ],
  
  drywall: [
    {
      id: 'drywall-1',
      title: 'Modern Home Drywall',
      description: 'Professional drywall finishing in modern Houston home with perfect smooth walls.',
      image: '/static/images/drywall-1.jpg',
      category: 'DRYWALL',
      duration: '1 Week',
      location: 'Houston, TX'
    },
    {
      id: 'drywall-2',
      title: 'Living Room Perfection',
      description: 'Flawless drywall finish in spacious living room with modern interior design.',
      image: '/static/images/drywall-2.jpg',
      category: 'DRYWALL',
      duration: '5 Days',
      location: 'Sugar Land, TX'
    },
    {
      id: 'drywall-3',
      title: 'Expert Taping Work',
      description: 'Precision joint taping and mud application with professional technique.',
      image: '/static/images/drywall-3.jpg',
      category: 'DRYWALL',
      duration: '3 Days',
      location: 'Katy, TX'
    },
    {
      id: 'drywall-4',
      title: 'Master Bedroom Walls',
      description: 'Stunning master bedroom with perfectly finished walls and ceiling.',
      image: '/static/images/drywall-4.jpg',
      category: 'DRYWALL',
      duration: '1 Week',
      location: 'Pearland, TX'
    },
    {
      id: 'drywall-5',
      title: 'Ceiling Installation',
      description: 'Professional ceiling drywall installation with perfect alignment and finish.',
      image: '/static/images/drywall-5.jpg',
      category: 'DRYWALL',
      duration: '4 Days',
      location: 'The Woodlands, TX'
    }
  ],
  
  kitchen: [
    {
      id: 'kitchen-1',
      title: 'Modern Luxury Kitchen',
      description: 'Stunning luxury kitchen with white cabinets, quartz countertops, and stainless steel appliances.',
      image: '/static/images/kitchen-1.jpg',
      category: 'KITCHEN REMODEL',
      duration: '3 Weeks',
      location: 'Houston, TX'
    },
    {
      id: 'kitchen-2',
      title: 'Contemporary Elegance',
      description: 'Beautiful contemporary kitchen with gray cabinets, marble countertops, and modern backsplash.',
      image: '/static/images/kitchen-2.jpg',
      category: 'KITCHEN REMODEL',
      duration: '3 Weeks',
      location: 'Sugar Land, TX'
    },
    {
      id: 'kitchen-3',
      title: 'Traditional Sophistication',
      description: 'Elegant traditional kitchen with custom wood cabinets and granite countertops.',
      image: '/static/images/kitchen-3.jpg',
      category: 'KITCHEN REMODEL',
      duration: '4 Weeks',
      location: 'Katy, TX'
    },
    {
      id: 'kitchen-4',
      title: 'Open Concept Luxury',
      description: 'Spacious open concept kitchen with navy island and waterfall countertops.',
      image: '/static/images/kitchen-4.jpg',
      category: 'KITCHEN REMODEL',
      duration: '3 Weeks',
      location: 'Pearland, TX'
    },
    {
      id: 'kitchen-5',
      title: 'Modern Farmhouse',
      description: 'Charming modern farmhouse kitchen with shaker cabinets and butcher block countertops.',
      image: '/static/images/kitchen-5.jpg',
      category: 'KITCHEN REMODEL',
      duration: '3 Weeks',
      location: 'The Woodlands, TX'
    }
  ]
};

const SERVICES_DATA = [
  {
    icon: 'fa-home',
    title: 'ROOFING',
    description: 'Expert roof installation, repair, and maintenance. We specialize in all types of roofing materials and guarantee quality that stands the test of Texas weather.'
  },
  {
    icon: 'fa-paint-roller',
    title: 'DRYWALL',
    description: 'Professional drywall installation, repair, and finishing. From new construction to renovations, we deliver smooth, flawless walls every time.'
  },
  {
    icon: 'fa-wrench',
    title: 'HANDYMAN',
    description: 'Complete home maintenance and repair services. Whatever your home needs, we\'ve got the skills and experience to get it done right.'
  },
  {
    icon: 'fa-hammer',
    title: 'REMODELING',
    description: 'Transform your space with our expert remodeling services. Kitchen, bathroom, or whole-home renovations done with precision and care.'
  },
  {
    icon: 'fa-bolt',
    title: 'EMERGENCY',
    description: '24/7 emergency repair services available. When disaster strikes, we\'re here to help restore your home quickly and efficiently.'
  },
  {
    icon: 'fa-star',
    title: 'QUALITY',
    description: 'Licensed, insured, and committed to excellence. We take pride in every project and ensure complete customer satisfaction.'
  }
];

const STATS_DATA = [
  { number: 15, label: 'YEARS EXPERIENCE' },
  { number: 500, label: 'HAPPY CLIENTS' },
  { number: 1000, label: 'PROJECTS COMPLETED' },
  { number: 100, label: '5-STAR REVIEWS' }
];

const CONTACT_DATA = [
  {
    icon: 'fa-map-marker-alt',
    title: 'LOCATION',
    content: 'Serving Greater Houston Area<br>Houston, Katy, Sugar Land<br>The Woodlands, Pearland, TX'
  },
  {
    icon: 'fa-phone',
    title: 'PHONE',
    content: '<a href="tel:+17135551234">(713) 555-1234</a><br>Monday - Saturday<br>7AM - 7PM'
  },
  {
    icon: 'fa-envelope',
    title: 'EMAIL',
    content: '<a href="mailto:info@houstonpro.com">info@houstonpro.com</a><br>24-hour response time<br>Free estimates'
  },
  {
    icon: 'fa-clock',
    title: 'HOURS',
    content: 'Mon-Fri: 7:00 AM - 7:00 PM<br>Saturday: 8:00 AM - 5:00 PM<br>Sunday: Emergency Only'
  }
];
