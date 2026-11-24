export const SITE = {
  name: "Zyra Digitals",
  tagline: "Website Design, SEO & Branding Agency in Coimbatore, India",
  email: "zyradigitalsofficial@gmail.com",
  phoneDisplay: "+91 90254 21149",
  phoneHref: "+919025421149",
  whatsappHref: "https://wa.me/919025421149",
  whatsappLabel: "WhatsApp: +91 90254 21149",
  location: "Malumichampatti, Coimbatore, Tamil Nadu, India",
  city: "Coimbatore",
  region: "Tamil Nadu",
  country: "India",
  locationNote: "Working 100% online - serving clients worldwide",
  url: "https://www.zyradigitals.com",
  hours: "Mon - Sat: 9:30 AM - 7:00 PM IST",
  founderName: "Mohan Prasath S",
  /** Add genuine official profile URLs only (e.g. LinkedIn). Leave empty until verified. */
  sameAs: [] as string[],
  ogImage: "/zyra-digitals-logo.jpg",
};

export type NavLink = {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/web-design", label: "Web Design" },
  { to: "/seo", label: "SEO" },
  {
    to: "/industries",
    label: "Industries",
    children: [
      { to: "/industries/dental-clinics", label: "Dental Clinics" },
      { to: "/industries/interior-designers", label: "Interior Designers" },
      { to: "/industries/real-estate", label: "Real Estate" },
      { to: "/industries/solar-companies", label: "Solar Companies" },
    ],
  },
  { to: "/our-work", label: "Our Work" },
  { to: "/blogs", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const OG_IMAGE_PATHS = {
  website: "/og/web-design.jpg",
  seo: "/og/seo.jpg",
  blog: "/og/blog.jpg",
  work: "/og/work.jpg",
};

export const getPageOgImage = (path: string) => {
  if (path.startsWith("/blogs")) return OG_IMAGE_PATHS.blog;
  if (
    path === "/seo" ||
    path === "/local-seo" ||
    path === "/google-business-profile-optimisation"
  ) {
    return OG_IMAGE_PATHS.seo;
  }
  if (
    path === "/about" ||
    path === "/our-work" ||
    path === "/services" ||
    path === "/industries" ||
    path.startsWith("/industries/")
  ) {
    return OG_IMAGE_PATHS.work;
  }
  if (path === "/privacy-policy" || path === "/terms-of-use" || path === "/accessibility") {
    return SITE.ogImage;
  }
  return OG_IMAGE_PATHS.website;
};

export const FOOTER_AGENCY_LINKS = [
  { to: "/", label: "Home" },
  { to: "/our-work", label: "Our Work & Case Studies" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blog" },
  { to: "/contact", label: "Let's Talk" },
];

/**
 * Footer link columns. These are the main internal-link routes into the
 * service and location landing pages (they are intentionally kept out of the
 * header navigation).
 */
export const FOOTER_SERVICES = [
  { to: "/web-design", label: "Website Design & Development" },
  { to: "/seo", label: "SEO Services" },
  { to: "/logo-design", label: "Logo Design" },
  { to: "/ecommerce-website-design", label: "Ecommerce Website Design" },
  { to: "/website-redesign", label: "Website Redesign" },
  { to: "/landing-page-design", label: "Landing Page Design" },
  { to: "/local-seo", label: "Local SEO" },
  { to: "/google-business-profile-optimisation", label: "Google Business Profile" },
  { to: "/ui-ux-design", label: "UI/UX Design" },
  { to: "/mvp-development", label: "MVP Development" },
  { to: "/website-speed-optimisation", label: "Website Speed Optimisation" },
  { to: "/wordpress-website-design", label: "WordPress Website Design" },
  { to: "/website-maintenance", label: "Website Maintenance" },
  { to: "/seo-content-writing", label: "SEO Content Writing" },
  { to: "/services", label: "All Services" },
];

export const FOOTER_LOCATIONS = [
  { to: "/website-design-coimbatore", label: "Website Design in Coimbatore" },
  { to: "/website-design-tiruppur", label: "Website Design in Tiruppur" },
  { to: "/website-design-erode", label: "Website Design in Erode" },
  { to: "/website-design-salem", label: "Website Design in Salem" },
  { to: "/website-design-chennai", label: "Website Design in Chennai" },
  { to: "/website-design-kochi", label: "Website Design in Kochi" },
  { to: "/locations", label: "All Locations" },
];

export const FOOTER_INDUSTRIES = [
  { to: "/industries/dental-clinics", label: "Dental Clinics" },
  { to: "/industries/interior-designers", label: "Interior Designers" },
  { to: "/industries/real-estate", label: "Real Estate" },
  { to: "/industries/solar-companies", label: "Solar Companies" },
  { to: "/industries/restaurants", label: "Restaurants & Cafes" },
  { to: "/industries/salons-spas", label: "Salons & Spas" },
  { to: "/industries/schools", label: "Schools & Coaching" },
  { to: "/industries/boutiques", label: "Boutiques & Fashion" },
  { to: "/industries/hospitals-clinics", label: "Hospitals & Clinics" },
  { to: "/industries/construction-companies", label: "Construction" },
  { to: "/industries/travel-agencies", label: "Travel Agencies" },
  { to: "/industries/gyms-fitness", label: "Gyms & Fitness" },
  { to: "/industries", label: "All Industries" },
];

export type Industry = {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  description: string;
  offerings: string[];
  statValue: string;
  statLabel: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "dental-clinics",
    name: "Dental Clinics",
    navLabel: "Dental Clinics",
    tagline: "Get more patients, not just website visits.",
    description:
      "We build patient-focused dental websites with online booking, local SEO and Google Maps visibility that keep your appointment book full.",
    offerings: [
      "Online appointment booking",
      "Local SEO for dental keywords",
      "Treatment pages that rank on Google",
      "Google Business Profile optimisation",
      "Review & reputation setup",
      "Fast, mobile-first design",
    ],
    statValue: "Online",
    statLabel: "appointment booking",
  },
  {
    slug: "interior-designers",
    name: "Interior Designers",
    navLabel: "Interior Designers",
    tagline: "Turn your portfolio into a lead machine.",
    description:
      "Stunning, image-led websites that showcase your best projects and turn visitors into consultation and quote requests.",
    offerings: [
      "Portfolio & project galleries",
      "Enquiry and quote request forms",
      "Before / after project showcases",
      "SEO for local interior designers",
      "Instagram-ready galleries",
      "Blog & content that ranks",
    ],
    statValue: "Image-led",
    statLabel: "project galleries",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    navLabel: "Real Estate",
    tagline: "Showcase properties and capture serious buyers.",
    description:
      "Property websites with smart search, strong enquiry capture and local SEO that generate qualified, ready-to-buy leads.",
    offerings: [
      "Property listing pages",
      "Advanced search & filters",
      "Lead capture forms",
      "Local area SEO landing pages",
      "Virtual tour ready galleries",
      "Fast-loading property images",
    ],
    statValue: "Filterable",
    statLabel: "property listings",
  },
  {
    slug: "solar-companies",
    name: "Solar Companies",
    navLabel: "Solar Companies",
    tagline: "Generate qualified solar installation leads.",
    description:
      "High-converting websites with savings calculators and quote forms that turn research-stage visitors into solar customers.",
    offerings: [
      "Savings / ROI calculators",
      "Instant quote request forms",
      "Service area landing pages",
      "Local SEO for solar installers",
      "Trust & certification sections",
      "Fast, mobile-first design",
    ],
    statValue: "Instant",
    statLabel: "quote requests",
  },
  {
    slug: "restaurants",
    name: "Restaurants & Cafes",
    navLabel: "Restaurants & Cafes",
    tagline: "Fill more tables with a site that sells your menu.",
    description:
      "We build appetising, mobile-first websites with online menus, table reservations and local SEO that help your restaurant or cafe get discovered by nearby diners and turn them into walk-ins.",
    offerings: [
      "Online menu with dish highlights",
      "Table reservation booking",
      "Google Maps & local SEO setup",
      "Photo-led food galleries",
      "Takeaway & delivery links",
      "Event & catering enquiry forms",
    ],
    statValue: "Table",
    statLabel: "reservations online",
  },
  {
    slug: "salons-spas",
    name: "Salons & Spas",
    navLabel: "Salons & Spas",
    tagline: "Turn online searches into booked appointments.",
    description:
      "Beauty and wellness websites with online booking, service menus and local SEO that help salons and spas attract new clients and keep their chairs full.",
    offerings: [
      "Online booking system",
      "Service & price list pages",
      "Stylist profile pages",
      "Gallery of recent work",
      "Local SEO for salons",
      "Gift voucher enquiries",
    ],
    statValue: "Booked",
    statLabel: "appointments online",
  },
  {
    slug: "schools",
    name: "Schools & Coaching Institutes",
    navLabel: "Schools & Coaching",
    tagline: "Showcase your programs and fill more seats.",
    description:
      "We design clear, trustworthy school and coaching websites with course pages, enquiry forms and admissions info that help parents and students choose you and get in touch.",
    offerings: [
      "Course & program pages",
      "Admission enquiry forms",
      "Faculty & facilities pages",
      "Campus photo & video gallery",
      "Local SEO for schools",
      "Downloadable prospectus / brochure",
    ],
    statValue: "New",
    statLabel: "student admissions",
  },
  {
    slug: "boutiques",
    name: "Boutiques & Fashion Stores",
    navLabel: "Boutiques & Fashion",
    tagline: "Turn browsers into buyers, online and in store.",
    description:
      "We build elegant, shoppable websites for boutiques and fashion stores, with product showcases and store details that bring local shoppers both online and through the door.",
    offerings: [
      "Product & collection showcases",
      "Shoppable lookbook galleries",
      "New arrivals & offer sections",
      "Store location & timings",
      "Local SEO for boutiques",
      "WhatsApp & enquiry links",
    ],
    statValue: "Visual",
    statLabel: "product showcases",
  },
  {
    slug: "hospitals-clinics",
    name: "Hospitals & Clinics",
    navLabel: "Hospitals & Clinics",
    tagline: "Be the clinic patients find and trust online.",
    description:
      "We create reassuring hospital and clinic websites with department pages, online appointments and clear doctor profiles that help patients find care and book a visit.",
    offerings: [
      "Department & speciality pages",
      "Appointment request forms",
      "Doctor & consultant profiles",
      "Emergency & contact info",
      "Local SEO for hospitals",
      "Health blog & patient guides",
    ],
    statValue: "Clear",
    statLabel: "department pages",
  },
  {
    slug: "construction-companies",
    name: "Construction & Contractors",
    navLabel: "Construction",
    tagline: "Win bigger projects with a credible web presence.",
    description:
      "We build contractor and construction company websites that present completed projects, services and credentials clearly, helping you earn trust and receive more serious quote enquiries.",
    offerings: [
      "Completed project galleries",
      "Services & capabilities pages",
      "Quote & site visit request forms",
      "Licences & certification sections",
      "Local SEO for contractors",
      "Before & after build photos",
    ],
    statValue: "Credible",
    statLabel: "project portfolios",
  },
  {
    slug: "travel-agencies",
    name: "Travel Agencies",
    navLabel: "Travel Agencies",
    tagline: "Turn trip research into confirmed bookings.",
    description:
      "Travel agency websites with tempting destination pages, itinerary showcases and enquiry forms that help travellers picture their trip and take the first step to planning with you.",
    offerings: [
      "Destination & package pages",
      "Itinerary & trip showcases",
      "Enquiry & callback forms",
      "Travel blog & guides",
      "Local SEO for travel agencies",
      "Offers & seasonal deals",
    ],
    statValue: "Inspiring",
    statLabel: "destination pages",
  },
  {
    slug: "gyms-fitness",
    name: "Gyms & Fitness Studios",
    navLabel: "Gyms & Fitness",
    tagline: "Turn fitness searches into new members.",
    description:
      "Gyms and fitness studios get energetic websites with class schedules, membership details and trial sign-ups that help locals discover your studio and come train with you.",
    offerings: [
      "Class timetable & schedule",
      "Membership plans & pricing",
      "Free trial sign-up form",
      "Trainer & class profiles",
      "Local SEO for gyms",
      "Transformation photo gallery",
    ],
    statValue: "Energetic",
    statLabel: "class timetables",
  },
];

export const getIndustry = (slug?: string) => INDUSTRIES.find((i) => i.slug === slug);
