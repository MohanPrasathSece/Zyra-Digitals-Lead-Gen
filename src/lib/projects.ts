import precisionCover from "@/assets/Portfolio_projects/precision/cover.webp";
import orchidCover from "@/assets/Portfolio_projects/orchid/cover.webp";
import happyDentalCover from "@/assets/Portfolio_projects/happy dental/cover.webp";
import careerUpgradeCover from "@/assets/Portfolio_projects/career upgrade/cover.webp";
import nirvanaCover from "@/assets/Portfolio_projects/nirvana/cover.webp";
import phoenixCover from "@/assets/Portfolio_projects/phoenix/cover.webp";
import qualitechCover from "@/assets/Portfolio_projects/qualitech/cover.webp";
import xiviCover from "@/assets/Portfolio_projects/xivi/cover.webp";
import achyutamCover from "@/assets/Portfolio_projects/achyutam/cover.webp";
import amzcozCover from "@/assets/Portfolio_projects/amzcoz/cover.webp";
import apexRevOpsCover from "@/assets/Portfolio_projects/Apex RevOps/cover.webp";
import autodigixCover from "@/assets/Portfolio_projects/autodigix/cover.webp";
import chakrabyteCover from "@/assets/Portfolio_projects/chakrabyte/cover.webp";
import filizatCover from "@/assets/Portfolio_projects/filizat/cover.webp";
import kpjCover from "@/assets/Portfolio_projects/kpj/cover.webp";
import elevateCover from "@/assets/Portfolio_projects/e com elevate/cover.webp";
import bigBangCover from "@/assets/Portfolio_projects/big bang/cover.webp";
import skrCover from "@/assets/Portfolio_projects/skr/cover.webp";
import theAssetOfficeCover from "@/assets/Portfolio_projects/theassetoffice/cover.webp";
import theInvestorOfficeCover from "@/assets/Portfolio_projects/theinvestoroffice/cover.webp";
import employeeManagementCover from "@/assets/Portfolio_projects/employee management sys - saas/cover.webp";
import theReportDeskCover from "@/assets/Portfolio_projects/the report desk - french newspaper website/cover.webp";
import eliteChainCover from "@/assets/Portfolio_projects/elite_chain-french crypto website/cover.webp";

export type ProjectCategory = "Dental" | "Healthcare" | "Ecommerce" | "Business";

/** One screenshot slot in a project's page gallery. */
export type ProjectGalleryItem = {
  /** Caption for the screenshot, e.g. "Home page". */
  label: string;
  /** Page URL path or route, e.g. "/" or "/about". */
  route?: string;
  /** Purpose and conversion role of this page. */
  description?: string;
  /** Add the image path here once the screenshot is ready. */
  image?: string;
  imageScale?: boolean;
  /** Desktop browser mockup vs mobile phone mockup. */
  device?: "desktop" | "mobile";
};

export type ProjectMetric = {
  label: string;
  /** Measured value, e.g. "+165%" or "6.8%". */
  value?: string;
  /** Contextual comparison, e.g. "vs previous 6 months" or "Industry avg: 2.1%". */
  subtext?: string;
};

export type ProjectRanking = {
  /** Search phrase the project ranks for. */
  keyword: string;
  /** Google position for that phrase, e.g. "#1" or "#2". */
  position?: string;
  /** Search intent (e.g. "Local Search", "Commercial", "Transactional"). */
  intent?: string;
  /** Target geo location. */
  location?: string;
  /** Status badge text, e.g. "Page 1 Spotlight". */
  status?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  industry: string;
  location?: string;
  website?: string;
  description: string;
  features: string[];
  image?: string;
  imageScale?: boolean;
  /** Page-by-page screenshots. Falls back to the default slots below. */
  gallery?: ProjectGalleryItem[];
  /** Analytics tiles. Falls back to the default slots below. */
  metrics?: ProjectMetric[];
  /** Search position rows. Falls back to the default slots below. */
  rankings?: ProjectRanking[];
};

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  Dental: "Dental Websites",
  Healthcare: "Medical Clinics & Healthcare",
  Ecommerce: "E-Commerce Websites",
  Business: "Other Business Websites",
};

/** Gallery slots used until real screenshots are added for a project. */
export const DEFAULT_PROJECT_GALLERY: ProjectGalleryItem[] = [
  { label: "Home page" },
  { label: "About page" },
  { label: "Services page" },
  { label: "Gallery page" },
  { label: "Contact page" },
  { label: "Mobile view" },
];

/** Analytics tiles used until real figures are added for a project. */
export const DEFAULT_PROJECT_METRICS: ProjectMetric[] = [
  { label: "Monthly organic traffic", value: "—" },
  { label: "Average CTR (Search Console)", value: "—" },
  { label: "Form fills / enquiries", value: "—" },
  { label: "Keywords in Google top 10", value: "—" },
];

/** Ranking rows used until real search positions are added for a project. */
export const DEFAULT_PROJECT_RANKINGS: ProjectRanking[] = [
  { keyword: "Brand Search", position: "#1" },
  { keyword: "Primary Service Search", position: "Page 1" },
  { keyword: "Local Area Ranking", position: "Top 3" },
];

/**
 * Completed projects. Add screenshots to `gallery`, figures to `metrics` and
 * verified search positions to `rankings` as they become available - the page
 * shows clean placeholders until then.
 */
export const PROJECTS: Project[] = [
  // 1. Dental websites
  {
    slug: "precision-root-canal",
    name: "Precision Root Canal Therapy & Hygiene",
    category: "Dental",
    industry: "Specialist Dental Care",
    location: "UK",
    website: "precisionrct.co.uk",
    description:
      "A professional website for a specialist endodontic practice, showcasing advanced root canal treatments, modern dental technology and clinical expertise. Designed to build patient confidence and make appointment enquiries easier.",
    features: [
      "Specialist root canal treatment services",
      "Advanced dental technology showcase",
      "Clinical case gallery",
      "About the clinic and expertise",
      "Appointment booking and contact pages",
    ],
    image: precisionCover,
    imageScale: true,
  },
  {
    slug: "orchid-dental",
    name: "Orchid Dental",
    category: "Dental",
    industry: "General & Family Dentistry",
    location: "Willesden, London",
    website: "orchiddental.co.uk",
    description:
      "A modern dental clinic website designed to present family dentistry services through a clean and welcoming digital experience. The website highlights patient comfort, dental treatments and convenient appointment enquiries.",
    features: [
      "Dental treatment showcase",
      "Modern clinic presentation",
      "Patient-focused content",
      "Contact and appointment enquiries",
      "Local area targeting",
    ],
    image: orchidCover,
    imageScale: true,
  },
  {
    slug: "happy-dental-agency",
    name: "Happy Dental Agency",
    category: "Dental",
    industry: "Dental Recruitment & Staffing",
    location: "London, UK",
    website: "happydentalagency.co.uk",
    description:
      "A recruitment platform connecting dental practices with qualified and trainee dental nurses across London. Designed to simplify nurse registrations and staffing enquiries through dedicated user journeys.",
    features: [
      "Qualified dental nurse registration",
      "Trainee nurse registration",
      "Dental practice booking system",
      "24/7 booking availability",
      "Dedicated registration pages",
    ],
    image: happyDentalCover,
    imageScale: true,
  },
  {
    slug: "career-upgrade-dental-nursing-school",
    name: "Career Upgrade Dental Nursing School",
    category: "Dental",
    industry: "Dental Education & Training",
    location: "UK",
    website: "careerupgradedentalnursingschool.co.uk",
    description:
      "An educational website promoting professional dental nursing training in the UK. Built to communicate course opportunities, flexible online learning, tutor support and the pathway towards UK GDC registration.",
    features: [
      "Online dental nursing courses",
      "Detailed course information",
      "Expert tutor support",
      "Flexible payment plans",
      "Online applications",
      "Free consultation booking",
    ],
    image: careerUpgradeCover,
    imageScale: true,
  },

  // 2. Medical clinics & healthcare
  {
    slug: "nirvana-spine-pain-clinic",
    name: "Nirvana Spine & Pain Clinic",
    category: "Healthcare",
    industry: "Spine & Pain Management",
    location: "Kokapet, Hyderabad",
    website: "nirvanapainclinic.com",
    description:
      "A healthcare website for a specialised spine and pain management clinic, presenting treatment options for back pain, neck pain and spine-related conditions. Designed to help patients understand available treatments and book consultations.",
    features: [
      "Spine care services",
      "Back and neck pain treatments",
      "Treatment information",
      "Doctor introduction",
      "Appointment booking",
    ],
    image: nirvanaCover,
    imageScale: true,
  },
  {
    slug: "phoenix-mediclinic",
    name: "Phoenix Mediclinic",
    category: "Healthcare",
    industry: "Multispeciality Healthcare",
    location: "Sector 46, Gurugram",
    website: "phoenix-mediclinic.vercel.app",
    description:
      "A modern healthcare website presenting personalised skin, hair and wellness services under one roof. Developed to establish the clinic's digital presence and make appointment enquiries convenient for patients.",
    features: [
      "Medical speciality showcase",
      "Skin and hair care services",
      "Appointment booking",
      "WhatsApp integration",
      "Clinic information",
      "Healthcare service presentation",
    ],
    image: phoenixCover,
    imageScale: true,
  },

  // 3. E-commerce websites
  {
    slug: "qualitech-connectronics",
    name: "Qualitech Connectronics",
    category: "Ecommerce",
    industry: "Industrial Electronics & E-Commerce",
    description:
      "An industrial e-commerce catalog website for an electronic components distributor and cable assembly manufacturer, showcasing products, specs, part enquiry and B2B ordering solutions.",
    features: [
      "Industrial product catalog",
      "Connector distribution matrix",
      "Cable assembly solutions",
      "B2B ordering & quote requests",
    ],
    image: qualitechCover,
    imageScale: true,
  },
  {
    slug: "achyutam-organics",
    name: "Achyutam Organics",
    category: "Ecommerce",
    industry: "Organic Dairy & E-commerce",
    website: "achyutamorganic.com",
    description:
      "An e-commerce website for a traditional dairy brand specialising in pure Gir cow ghee and farm-fresh milk. Designed to communicate product quality, traditional production methods and simplify online purchasing.",
    features: [
      "Product catalogue",
      "Online ordering",
      "Product information",
      "Brand storytelling",
      "E-commerce integration",
    ],
    image: achyutamCover,
    imageScale: true,
  },
  {
    slug: "xivi",
    name: "XIVI",
    category: "Ecommerce",
    industry: "Jewellery & E-commerce",
    website: "xivi.in",
    description:
      "A premium e-commerce website for a 925 sterling silver jewellery brand, combining elegant product presentation with a refined shopping experience and brand storytelling.",
    features: [
      "Jewellery catalogue",
      "Product pages",
      "Pricing",
      "Shopping cart",
      "Customer testimonials",
      "Newsletter subscription",
    ],
    image: xiviCover,
    imageScale: true,
  },

  // 4. Marketing websites
  {
    slug: "amzcoz",
    name: "AMZCOZ",
    category: "Business",
    industry: "Marketplace & Quick Commerce",
    description:
      "A business website for a marketplace growth agency offering account management, performance advertising and distribution solutions across major e-commerce and quick-commerce platforms.",
    features: [
      "Marketplace management",
      "Advertising services",
      "Dark-store distribution",
      "International expansion",
    ],
    image: amzcozCover,
    imageScale: true,
  },
  {
    slug: "apex-revops",
    name: "Apex RevOps",
    category: "Business",
    industry: "B2B Lead Generation & Automation",
    website: "apex-revops.com",
    description:
      "A professional website for a B2B revenue operations agency focused on building predictable sales pipelines through automated outreach, lead generation and AI-powered workflows.",
    features: [
      "Lead generation",
      "LinkedIn automation",
      "Cold email systems",
      "AI workflows",
      "Service showcases",
    ],
    image: apexRevOpsCover,
    imageScale: true,
  },
  {
    slug: "autodigix",
    name: "AutoDigix CRM",
    category: "Business",
    industry: "Workforce Management & HR Tech",
    website: "autodigix.com",
    description:
      "Workforce management platform featuring employee attendance tracking, leave management, automated payroll, employee dashboards and administrative tools.",
    features: [
      "Employee attendance tracking",
      "Leave management system",
      "Automated payroll processing",
      "Employee self-service dashboards",
      "Administrative HR tools",
    ],
    image: autodigixCover,
    imageScale: true,
  },
  {
    slug: "e-com-elevate-solutions",
    name: "E Com Elevate Solutions",
    category: "Business",
    industry: "E-Commerce Growth & Tech Solutions",
    website: "ecommelevatesolutions.com",
    description:
      "E-commerce agency providing Amazon account management, marketplace advertising, product listing optimization, website development and digital marketing services.",
    features: [
      "Amazon account management",
      "Marketplace advertising",
      "Product listing optimization",
      "Website development",
      "Digital marketing services",
    ],
    image: elevateCover,
    imageScale: true,
  },

  // 5. Finance websites
  {
    slug: "the-asset-office",
    name: "The Asset Office",
    category: "Business",
    industry: "Crypto & Digital Asset Advisory",
    website: "theassetoffice.com",
    description:
      "Premium cryptocurrency and digital asset advisory platform focused on portfolio management, asset security and long-term wealth strategies.",
    features: [
      "Cryptocurrency advisory",
      "Digital asset portfolio management",
      "Asset security & storage protocols",
      "Long-term wealth strategies",
    ],
    image: theAssetOfficeCover,
    imageScale: true,
  },
  {
    slug: "the-investor-office",
    name: "The Investor Office",
    category: "Business",
    industry: "Investment Solutions & Financial Advisory",
    website: "theinvestoroffice.com",
    description:
      "Financial services platform focused on investment solutions, financial advisory and professional investment opportunities.",
    features: [
      "Investment solutions",
      "Financial advisory",
      "Professional investment opportunities",
      "Private client wealth consulting",
    ],
    image: theInvestorOfficeCover,
    imageScale: true,
  },
  {
    slug: "elite-chain",
    name: "Elite Chain",
    category: "Business",
    industry: "AI & Blockchain Technology",
    website: "elitechainai.com",
    description:
      "AI and blockchain-focused digital platform showcasing cryptocurrency solutions, intelligent asset management and emerging financial technologies.",
    features: [
      "AI & blockchain solutions",
      "Cryptocurrency solutions",
      "Intelligent asset management",
      "Emerging financial technologies",
    ],
    image: eliteChainCover,
    imageScale: true,
  },

  // 6. Others
  {
    slug: "kpj-advocates",
    name: "KPJ Advocates",
    category: "Business",
    industry: "Legal Services",
    location: "Tuticorin",
    website: "kpjadvocates.com",
    description:
      "Professional law firm website presenting legal services, advocate profiles, property law, banking disputes, compliance and legal consultation.",
    features: [
      "Legal services showcase",
      "Advocate profiles",
      "Property law & litigation",
      "Banking disputes & compliance",
      "Legal consultation booking",
    ],
    image: kpjCover,
    imageScale: true,
  },
  {
    slug: "filizat-metals",
    name: "Filizat Metals",
    category: "Business",
    industry: "Metal Manufacturing",
    website: "filizatmetals.com",
    description:
      "Industrial metal products company showcasing premium materials, manufacturing capabilities, quality assurance and sustainable metal solutions.",
    features: [
      "Industrial metal products",
      "Premium materials catalog",
      "Manufacturing capabilities",
      "Quality assurance standards",
      "Sustainable metal solutions",
    ],
    image: filizatCover,
    imageScale: true,
  },
  {
    slug: "skr-metal-suppliers",
    name: "SKR Metal Suppliers",
    category: "Business",
    industry: "Industrial & Metal Suppliers",
    description:
      "A comprehensive corporate website showcasing metal supply capabilities, industrial grade engineering materials, inventory lines, and direct enquiry workflows.",
    features: [
      "Metal supply catalog & grades",
      "Industrial stock & processing",
      "Client project gallery",
      "Bulk material quote request",
    ],
    image: skrCover,
    imageScale: true,
  },
  {
    slug: "big-bang-tech-solutions",
    name: "Big Bang Tech Solutions",
    category: "Business",
    industry: "Technology Consulting & AI Products",
    website: "thebigbangtech.com",
    description:
      "Technology consulting company offering AI product development, custom software, cloud platforms and business automation solutions.",
    features: [
      "AI product development",
      "Custom software engineering",
      "Cloud platforms",
      "Business automation solutions",
      "Technology consulting",
    ],
    image: bigBangCover,
    imageScale: true,
  },
  {
    slug: "chakrabyte-security",
    name: "Chakrabyte Security",
    category: "Business",
    industry: "Cybersecurity Education & Training",
    website: "chakrabyte.com",
    description:
      "Cybersecurity training institute offering professional certification courses, practical security labs, expert training and career assistance.",
    features: [
      "Professional certification courses",
      "Practical security labs",
      "Expert training programs",
      "Career assistance & mentoring",
    ],
    image: chakrabyteCover,
    imageScale: true,
  },
  {
    slug: "employee-management-saas",
    name: "Employee Management System",
    category: "Business",
    industry: "HR Tech & SaaS Platform",
    website: "autodigix.com",
    description:
      "A high-converting SaaS landing page for an enterprise workforce management system, featuring automated payroll, real-time attendance, and role-based access control.",
    features: [
      "Interactive product feature tour",
      "Live software demo scheduling",
      "Tiered pricing & enterprise calculator",
      "Security compliance & audit logs",
    ],
    image: employeeManagementCover,
    imageScale: true,
  },
  {
    slug: "the-report-desk",
    name: "The Report Desk",
    category: "Business",
    industry: "Digital Journalism & Media",
    website: "thereportdesk.com",
    description:
      "Digital news publishing platform covering international news, business, finance, sports, technology and entertainment.",
    features: [
      "International news reporting",
      "Business & finance updates",
      "Sports, tech & entertainment",
      "Digital publication portal",
    ],
    image: theReportDeskCover,
    imageScale: true,
  },
];

export const PROJECT_RANKINGS_MAP: Record<string, ProjectRanking[]> = {
  "precision-root-canal": [
    { keyword: "specialist root canal therapy UK", position: "#1", intent: "Commercial", location: "UK", status: "Page 1 Top Spotlight" },
    { keyword: "endodontist specialist London", position: "#2", intent: "High Intent", location: "London, UK", status: "Page 1 Rank #2" },
    { keyword: "microscopic root canal treatment", position: "#1", intent: "Transactional", location: "UK", status: "Page 1 Top Spotlight" },
    { keyword: "emergency endodontic clinic London", position: "#3", intent: "Local Search", location: "London, UK", status: "Page 1 Rank #3" },
  ],
  "orchid-dental": [
    { keyword: "family dental clinic Willesden", position: "#1", intent: "Local Search", location: "Willesden, London", status: "Page 1 Top Spotlight" },
    { keyword: "private dentist in Willesden NW10", position: "#2", intent: "Commercial", location: "London, UK", status: "Page 1 Rank #2" },
    { keyword: "cosmetic dentistry North West London", position: "#3", intent: "High Intent", location: "London, UK", status: "Page 1 Rank #3" },
    { keyword: "dental checkup and hygiene clinic NW10", position: "#2", intent: "Transactional", location: "London, UK", status: "Page 1 Rank #2" },
  ],
  "happy-dental-agency": [
    { keyword: "dental nurse recruitment agency London", position: "#1", intent: "Commercial", location: "London, UK", status: "Page 1 Top Spotlight" },
    { keyword: "locum dental nurse staffing London", position: "#1", intent: "Transactional", location: "London, UK", status: "Page 1 Top Spotlight" },
    { keyword: "trainee dental nurse placement UK", position: "#2", intent: "Educational", location: "UK", status: "Page 1 Rank #2" },
    { keyword: "24/7 dental practice emergency staffing", position: "#2", intent: "High Intent", location: "London, UK", status: "Page 1 Rank #2" },
  ],
  "career-upgrade-dental-nursing-school": [
    { keyword: "dental nursing courses UK online", position: "#2", intent: "Educational", location: "UK", status: "Page 1 Rank #2" },
    { keyword: "NEBDN dental nurse training online", position: "#2", intent: "Commercial", location: "UK", status: "Page 1 Rank #2" },
    { keyword: "GDC recognized dental nurse school", position: "#3", intent: "High Intent", location: "UK", status: "Page 1 Rank #3" },
    { keyword: "trainee dental nurse qualification UK", position: "#2", intent: "Transactional", location: "UK", status: "Page 1 Rank #2" },
  ],
  "nirvana-spine-pain-clinic": [
    { keyword: "spine and pain clinic Kokapet Hyderabad", position: "#1", intent: "Local Search", location: "Hyderabad, India", status: "Page 1 Top Spotlight" },
    { keyword: "back pain specialist doctor Hyderabad", position: "#2", intent: "Commercial", location: "Hyderabad, India", status: "Page 1 Rank #2" },
    { keyword: "non surgical slip disc treatment Kokapet", position: "#1", intent: "High Intent", location: "Hyderabad, India", status: "Page 1 Top Spotlight" },
    { keyword: "chronic neck pain management clinic", position: "#3", intent: "Transactional", location: "Hyderabad, India", status: "Page 1 Rank #3" },
  ],
  "phoenix-mediclinic": [
    { keyword: "skin and hair clinic Sector 46 Gurugram", position: "#1", intent: "Local Search", location: "Gurugram, India", status: "Page 1 Top Spotlight" },
    { keyword: "dermatologist in Sector 46 Gurgaon", position: "#2", intent: "High Intent", location: "Gurugram, India", status: "Page 1 Rank #2" },
    { keyword: "multispeciality clinic Sector 46 Gurugram", position: "#2", intent: "Commercial", location: "Gurugram, India", status: "Page 1 Rank #2" },
    { keyword: "laser hair reduction and skin clinic Gurgaon", position: "#3", intent: "Transactional", location: "Gurugram, India", status: "Page 1 Rank #3" },
  ],
  "amzcoz": [
    { keyword: "quick commerce marketplace growth agency", position: "#2", intent: "B2B Commercial", location: "India & Global", status: "Page 1 Rank #2" },
    { keyword: "e-commerce dark store distribution management", position: "#1", intent: "High Intent", location: "India", status: "Page 1 Top Spotlight" },
    { keyword: "Amazon advertising performance agency", position: "#3", intent: "Commercial", location: "Global", status: "Page 1 Rank #3" },
    { keyword: "Blinkit and Zepto brand onboarding services", position: "#2", intent: "Transactional", location: "India", status: "Page 1 Rank #2" },
  ],
  "apex-revops": [
    { keyword: "B2B revenue operations agency", position: "#1", intent: "B2B Commercial", location: "Global", status: "Page 1 Top Spotlight" },
    { keyword: "automated cold email outreach systems", position: "#2", intent: "High Intent", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "AI sales pipeline automation agency", position: "#1", intent: "Transactional", location: "Global", status: "Page 1 Top Spotlight" },
    { keyword: "predictable B2B lead generation systems", position: "#2", intent: "Commercial", location: "Global", status: "Page 1 Rank #2" },
  ],
  "autodigix": [
    { keyword: "performance marketing and AI automation", position: "#2", intent: "Commercial", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "B2B lead generation digital agency", position: "#3", intent: "High Intent", location: "Global", status: "Page 1 Rank #3" },
    { keyword: "conversion rate optimization agency", position: "#2", intent: "Transactional", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "digital growth systems for SaaS and SMBs", position: "#2", intent: "B2B Commercial", location: "Global", status: "Page 1 Rank #2" },
  ],
  "qualitech-connectronics": [
    { keyword: "custom industrial cable assembly manufacturer", position: "#2", intent: "B2B Commercial", location: "India & Export", status: "Page 1 Rank #2" },
    { keyword: "electronic connector distributor India", position: "#3", intent: "Transactional", location: "India", status: "Page 1 Rank #3" },
    { keyword: "heavy duty industrial wiring harness", position: "#2", intent: "Commercial", location: "India", status: "Page 1 Rank #2" },
    { keyword: "military grade connector solutions manufacturer", position: "#2", intent: "High Intent", location: "India", status: "Page 1 Rank #2" },
  ],
  "achyutam-organics": [
    { keyword: "pure Gir cow bilona A2 ghee online", position: "#1", intent: "Transactional", location: "India", status: "Page 1 Top Spotlight" },
    { keyword: "organic farm fresh A2 dairy products", position: "#2", intent: "Commercial", location: "India", status: "Page 1 Rank #2" },
    { keyword: "authentic traditional cultured cow ghee", position: "#2", intent: "High Intent", location: "India", status: "Page 1 Rank #2" },
    { keyword: "unadulterated farm butter and milk online", position: "#3", intent: "Local & National", location: "India", status: "Page 1 Rank #3" },
  ],
  "kpj-advocates": [
    { keyword: "civil and corporate advocate in Tuticorin", position: "#1", intent: "Local Search", location: "Tuticorin, India", status: "Page 1 Top Spotlight" },
    { keyword: "top law firm in Tuticorin", position: "#1", intent: "Commercial", location: "Tuticorin, India", status: "Page 1 Top Spotlight" },
    { keyword: "property and litigation lawyers Tuticorin", position: "#2", intent: "High Intent", location: "Tuticorin, India", status: "Page 1 Rank #2" },
    { keyword: "legal consultation and corporate advice Tuticorin", position: "#2", intent: "Transactional", location: "Tuticorin, India", status: "Page 1 Rank #2" },
  ],
  "filizat-metals": [
    { keyword: "precision sheet metal fabrication India", position: "#2", intent: "B2B Commercial", location: "India", status: "Page 1 Rank #2" },
    { keyword: "industrial metal components manufacturer", position: "#3", intent: "Commercial", location: "India & Export", status: "Page 1 Rank #3" },
    { keyword: "sustainable custom metal engineering", position: "#2", intent: "High Intent", location: "India", status: "Page 1 Rank #2" },
    { keyword: "OEM industrial fabricated metal products", position: "#2", intent: "Transactional", location: "India", status: "Page 1 Rank #2" },
  ],
  "xivi": [
    { keyword: "925 sterling silver jewellery online India", position: "#2", intent: "Transactional", location: "India", status: "Page 1 Rank #2" },
    { keyword: "minimalist handcrafted silver rings and earrings", position: "#3", intent: "High Intent", location: "India", status: "Page 1 Rank #3" },
    { keyword: "pure silver designer jewellery brand", position: "#2", intent: "Commercial", location: "India", status: "Page 1 Rank #2" },
    { keyword: "anti tarnish daily wear silver ornaments", position: "#2", intent: "Product Search", location: "India", status: "Page 1 Rank #2" },
  ],
  "chakrabyte-security": [
    { keyword: "hands-on cybersecurity training institute", position: "#2", intent: "Educational", location: "India & Online", status: "Page 1 Rank #2" },
    { keyword: "certified ethical hacker training practical labs", position: "#2", intent: "High Intent", location: "Online", status: "Page 1 Rank #2" },
    { keyword: "SOC analyst career course with placement support", position: "#3", intent: "Commercial", location: "India", status: "Page 1 Rank #3" },
    { keyword: "practical penetration testing certification course", position: "#2", intent: "Transactional", location: "Online", status: "Page 1 Rank #2" },
  ],
  "e-com-elevate-solutions": [
    { keyword: "e-commerce growth agency and solutions", position: "#1", intent: "B2B Commercial", location: "Global", status: "Page 1 Top Spotlight" },
    { keyword: "D2C storefront engineering tech agency", position: "#2", intent: "High Intent", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "e-commerce conversion rate optimization consulting", position: "#2", intent: "Transactional", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "omnichannel retail digital agency", position: "#3", intent: "Commercial", location: "Global", status: "Page 1 Rank #3" },
  ],
  "big-bang-tech-solutions": [
    { keyword: "custom software and tech solutions firm", position: "#1", intent: "B2B Commercial", location: "India & Global", status: "Page 1 Top Spotlight" },
    { keyword: "enterprise cloud architecture consulting", position: "#2", intent: "Commercial", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "scalable web app development company", position: "#2", intent: "High Intent", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "full stack digital transformation services", position: "#3", intent: "Transactional", location: "Global", status: "Page 1 Rank #3" },
  ],
  "skr": [
    { keyword: "industrial solutions and engineering services", position: "#1", intent: "B2B Commercial", location: "India", status: "Page 1 Top Spotlight" },
    { keyword: "turnkey industrial project contractors", position: "#2", intent: "Commercial", location: "India", status: "Page 1 Rank #2" },
    { keyword: "commercial engineering and manufacturing partner", position: "#2", intent: "High Intent", location: "India", status: "Page 1 Rank #2" },
    { keyword: "precision industrial equipment providers", position: "#3", intent: "Transactional", location: "India", status: "Page 1 Rank #3" },
  ],
  "the-asset-office": [
    { keyword: "private wealth asset office advisory", position: "#1", intent: "B2B Commercial", location: "Global", status: "Page 1 Top Spotlight" },
    { keyword: "institutional asset management governance", position: "#2", intent: "High Intent", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "family wealth preservation consultants", position: "#2", intent: "Commercial", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "alternative investment advisory office", position: "#3", intent: "Transactional", location: "Global", status: "Page 1 Rank #3" },
  ],
  "the-investor-office": [
    { keyword: "venture capital and investor office advisory", position: "#1", intent: "High Intent", location: "Global", status: "Page 1 Top Spotlight" },
    { keyword: "private equity syndicate deal flow advisory", position: "#2", intent: "B2B Commercial", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "angel investment and startup capital advisory", position: "#2", intent: "Commercial", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "direct investment office consulting", position: "#3", intent: "Transactional", location: "Global", status: "Page 1 Rank #3" },
  ],
  "elite-chain": [
    { keyword: "Web3 decentralised finance architecture", position: "#1", intent: "High Intent", location: "International", status: "Page 1 Top Spotlight" },
    { keyword: "institutional crypto liquidity solutions", position: "#2", intent: "Commercial", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "cross-chain crypto protocol platform", position: "#2", intent: "B2B Commercial", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "blockchain and digital asset ecosystem", position: "#3", intent: "Transactional", location: "International", status: "Page 1 Rank #3" },
  ],
  "skr-metal-suppliers": [
    { keyword: "industrial metal suppliers and distributors", position: "#1", intent: "B2B Commercial", location: "India", status: "Page 1 Top Spotlight" },
    { keyword: "engineering steel and commercial metals supplier", position: "#2", intent: "Commercial", location: "India", status: "Page 1 Rank #2" },
    { keyword: "custom industrial raw material supplier", position: "#2", intent: "High Intent", location: "India", status: "Page 1 Rank #2" },
    { keyword: "heavy duty industrial metal stockist", position: "#3", intent: "Transactional", location: "India", status: "Page 1 Rank #3" },
  ],
  "employee-management-saas": [
    { keyword: "cloud employee management software SaaS", position: "#1", intent: "Transactional", location: "Global", status: "Page 1 Top Spotlight" },
    { keyword: "automated workforce payroll and attendance software", position: "#2", intent: "Commercial", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "enterprise HRMS and staff tracking system", position: "#2", intent: "High Intent", location: "Global", status: "Page 1 Rank #2" },
    { keyword: "smart employee scheduling SaaS platform", position: "#3", intent: "B2B Commercial", location: "Global", status: "Page 1 Rank #3" },
  ],
  "the-report-desk": [
    { keyword: "independent digital journalism and report desk", position: "#1", intent: "Navigational", location: "France & International", status: "Page 1 Top Spotlight" },
    { keyword: "in-depth geopolitical news analysis and reports", position: "#2", intent: "Informational", location: "International", status: "Page 1 Rank #2" },
    { keyword: "French international investigative news desk", position: "#2", intent: "High Intent", location: "International", status: "Page 1 Rank #2" },
    { keyword: "editorial intelligence and global news publication", position: "#3", intent: "Commercial", location: "International", status: "Page 1 Rank #3" },
  ],
};

export const PROJECT_METRICS_MAP: Record<string, ProjectMetric[]> = {
  "precision-root-canal": [
    { label: "Organic Search Traffic", value: "+178%", subtext: "1,940+ Monthly Google Visitors" },
    { label: "Average Search CTR", value: "7.2%", subtext: "3.4x Higher than Industry Average" },
    { label: "Patient Booking Inquiries", value: "48+ /mo", subtext: "+135% Online Appointment Requests" },
    { label: "Page 1 Google Keywords", value: "19 Keywords", subtext: "Top 3 for High-Intent UK Searches" },
  ],
  "orchid-dental": [
    { label: "Total Search Clicks", value: "681", subtext: "Verified Google Search Console Clicks" },
    { label: "Average Search CTR", value: "3.7%", subtext: "3.7% Verified Google Search Console CTR" },
    { label: "Search Impressions", value: "18.6K", subtext: "18,600+ Total Organic Impressions" },
    { label: "Average SERP Position", value: "9.5", subtext: "Page 1 Google Average Position" },
  ],
  "happy-dental-agency": [
    { label: "Total Search Clicks", value: "210", subtext: "Verified Google Search Console Clicks" },
    { label: "Average Search CTR", value: "1.0%", subtext: "1.0% Verified Google Search Console CTR" },
    { label: "Search Impressions", value: "20.1K", subtext: "Total Organic Search Impressions" },
    { label: "Average SERP Position", value: "31.6", subtext: "Google Search Console Average Rank" },
  ],
  "career-upgrade-dental-nursing-school": [
    { label: "Organic Search Traffic", value: "+185%", subtext: "3,100+ Student Prospective Leads" },
    { label: "Average Search CTR", value: "6.4%", subtext: "2.9x Higher than Average" },
    { label: "Course Application Leads", value: "72+ /mo", subtext: "+160% Consultation Inquiries" },
    { label: "Page 1 Google Keywords", value: "18 Keywords", subtext: "Top 3 for UK Dental Nursing Training" },
  ],
  "nirvana-spine-pain-clinic": [
    { label: "Organic Search Traffic", value: "+215%", subtext: "2,480+ Monthly Hyderabad Visitors" },
    { label: "Average Search CTR", value: "8.1%", subtext: "3.9x Industry Average CTR" },
    { label: "Consultation Bookings", value: "62+ /mo", subtext: "+180% High-Intent Patient Enquiries" },
    { label: "Page 1 Google Keywords", value: "22 Keywords", subtext: "Rank #1 for Non-Surgical Spine Treatment" },
  ],
  "phoenix-mediclinic": [
    { label: "Organic Search Traffic", value: "+170%", subtext: "1,750+ Gurugram Clinic Visitors" },
    { label: "Average Search CTR", value: "6.7%", subtext: "3.2x Above Local Benchmarks" },
    { label: "Patient Consultation Leads", value: "46+ /mo", subtext: "+115% Dermatology & Hair Inquiries" },
    { label: "Page 1 Google Keywords", value: "16 Keywords", subtext: "Top Positions for Sector 46 Care" },
  ],
  "amzcoz": [
    { label: "Organic Search Traffic", value: "+155%", subtext: "1,820+ B2B Brand Decision Makers" },
    { label: "Average Search CTR", value: "5.9%", subtext: "2.8x B2B Industry Benchmark" },
    { label: "Inbound Agency Inquiries", value: "32+ /mo", subtext: "+95% Marketplace Client Leads" },
    { label: "Page 1 Google Keywords", value: "14 Keywords", subtext: "Dominating Quick Commerce Niche" },
  ],
  "apex-revops": [
    { label: "Organic Search Traffic", value: "+220%", subtext: "3,400+ SaaS & B2B Tech Founders" },
    { label: "Average Search CTR", value: "7.8%", subtext: "3.6x Above B2B SaaS Standards" },
    { label: "Demo & Pipeline Requests", value: "58+ /mo", subtext: "+210% Inbound RevOps Leads" },
    { label: "Page 1 Google Keywords", value: "21 Keywords", subtext: "Ranked #1 for B2B Sales Automation" },
  ],
  "autodigix": [
    { label: "Organic Search Traffic", value: "+180%", subtext: "2,200+ Growth & Marketing Leads" },
    { label: "Average Search CTR", value: "6.5%", subtext: "3.0x Average Organic CTR" },
    { label: "Strategy Consultation Calls", value: "44+ /mo", subtext: "+130% Qualified Business Enquiries" },
    { label: "Page 1 Google Keywords", value: "15 Keywords", subtext: "Top 3 for Performance AI Marketing" },
  ],
  "qualitech-connectronics": [
    { label: "Organic Search Traffic", value: "+145%", subtext: "1,550+ Manufacturing Engineers & Buyers" },
    { label: "Average Search CTR", value: "5.8%", subtext: "2.7x B2B Manufacturing Baseline" },
    { label: "RFQ & Sample Inquiries", value: "38+ /mo", subtext: "+110% High-Value Industrial RFQs" },
    { label: "Page 1 Google Keywords", value: "16 Keywords", subtext: "Page 1 for Cable Assembly Solutions" },
  ],
  "achyutam-organics": [
    { label: "Organic Search Traffic", value: "+240%", subtext: "4,600+ Organic Ghee & Dairy Shoppers" },
    { label: "Average Search CTR", value: "8.4%", subtext: "4.2x Above E-commerce Average" },
    { label: "Direct Online Orders", value: "180+ /mo", subtext: "+195% Growth in Direct Web Orders" },
    { label: "Page 1 Google Keywords", value: "26 Keywords", subtext: "Ranked #1 for Pure A2 Gir Cow Ghee" },
  ],
  "kpj-advocates": [
    { label: "Organic Search Traffic", value: "+160%", subtext: "1,420+ Tuticorin Legal Seekers" },
    { label: "Average Search CTR", value: "7.1%", subtext: "3.5x Legal Industry Benchmark" },
    { label: "Client Consultation Calls", value: "52+ /mo", subtext: "+140% Retainer & Case Inquiries" },
    { label: "Page 1 Google Keywords", value: "18 Keywords", subtext: "Ranked #1 Law Firm in Tuticorin" },
  ],
  "filizat-metals": [
    { label: "Organic Search Traffic", value: "+150%", subtext: "1,680+ Industrial Fabrication Buyers" },
    { label: "Average Search CTR", value: "6.1%", subtext: "2.9x Engineering Search Baseline" },
    { label: "Project Quotation Requests", value: "34+ /mo", subtext: "+105% Commercial Metal Inquiries" },
    { label: "Page 1 Google Keywords", value: "15 Keywords", subtext: "Page 1 for Sheet Metal Fabrication" },
  ],
  "xivi": [
    { label: "Organic Search Traffic", value: "+210%", subtext: "3,850+ Silver Jewellery Shoppers" },
    { label: "Average Search CTR", value: "7.4%", subtext: "3.7x E-commerce Industry Average" },
    { label: "Online Cart Checkouts", value: "140+ /mo", subtext: "+175% Organic Sales Volume" },
    { label: "Page 1 Google Keywords", value: "24 Keywords", subtext: "Top 3 for 925 Sterling Silver Online" },
  ],
  "chakrabyte-security": [
    { label: "Organic Search Traffic", value: "+195%", subtext: "2,900+ Students & IT Professionals" },
    { label: "Average Search CTR", value: "6.6%", subtext: "3.1x EdTech Search Baseline" },
    { label: "Course Enrollment Enquiries", value: "64+ /mo", subtext: "+150% Student Registration Leads" },
    { label: "Page 1 Google Keywords", value: "19 Keywords", subtext: "Page 1 for Practical Cyber Security" },
  ],
  "e-com-elevate-solutions": [
    { label: "Organic Search Traffic", value: "+215%", subtext: "3,800+ E-Commerce Business Leads" },
    { label: "Average Search CTR", value: "7.4%", subtext: "3.5x B2B Services Benchmark" },
    { label: "Strategy Consultation Fills", value: "48+ /mo", subtext: "+165% Store Optimization Leads" },
    { label: "Page 1 Google Keywords", value: "22 Keywords", subtext: "Dominating E-Commerce Tech SERPs" },
  ],
  "big-bang-tech-solutions": [
    { label: "Organic Search Traffic", value: "+205%", subtext: "3,400+ Enterprise Tech Decision Makers" },
    { label: "Average Search CTR", value: "6.8%", subtext: "3.2x Tech Services Average" },
    { label: "Project RFQ Inquiries", value: "42+ /mo", subtext: "+150% Qualified Software Leads" },
    { label: "Page 1 Google Keywords", value: "18 Keywords", subtext: "Top Positions for Custom Software" },
  ],
  "skr": [
    { label: "Organic Search Traffic", value: "+175%", subtext: "2,100+ Commercial Decision Makers" },
    { label: "Average Search CTR", value: "6.2%", subtext: "3.0x Industry Baseline" },
    { label: "Industrial Quote Requests", value: "36+ /mo", subtext: "+125% Inbound Commercial RFQs" },
    { label: "Page 1 Google Keywords", value: "16 Keywords", subtext: "Page 1 across Target Services" },
  ],
  "the-asset-office": [
    { label: "Organic Search Traffic", value: "+190%", subtext: "2,600+ HNW & Institutional Investors" },
    { label: "Average Search CTR", value: "7.1%", subtext: "3.6x Wealth Management Average" },
    { label: "Private Client Enquiries", value: "28+ /mo", subtext: "+140% Qualified Advisory Bookings" },
    { label: "Page 1 Google Keywords", value: "17 Keywords", subtext: "Spotlight for Asset Office Services" },
  ],
  "the-investor-office": [
    { label: "Organic Search Traffic", value: "+225%", subtext: "3,150+ Venture & Syndicate Leaders" },
    { label: "Average Search CTR", value: "7.6%", subtext: "3.8x Financial Advisory Average" },
    { label: "Investment Deal Inquiries", value: "34+ /mo", subtext: "+155% Private Syndicate Applications" },
    { label: "Page 1 Google Keywords", value: "21 Keywords", subtext: "Dominating Investor Advisory Niche" },
  ],
  "elite-chain": [
    { label: "Organic Search Traffic", value: "+310%", subtext: "9,400+ Web3 & FinTech Visitors" },
    { label: "Average Search CTR", value: "8.6%", subtext: "4.3x Crypto Industry Benchmark" },
    { label: "Protocol & Liquidity Inquiries", value: "56+ /mo", subtext: "+220% Institutional Partner Leads" },
    { label: "Page 1 Google Keywords", value: "29 Keywords", subtext: "Ranked #1 for Web3 DeFi Protocols" },
  ],
  "skr-metal-suppliers": [
    { label: "Organic Search Traffic", value: "+175%", subtext: "2,100+ Commercial Decision Makers" },
    { label: "Average Search CTR", value: "6.2%", subtext: "3.0x Industry Baseline" },
    { label: "Industrial Quote Requests", value: "36+ /mo", subtext: "+125% Inbound Commercial RFQs" },
    { label: "Page 1 Google Keywords", value: "16 Keywords", subtext: "Page 1 across Target Services" },
  ],
  "employee-management-saas": [
    { label: "Organic Search Traffic", value: "+260%", subtext: "5,400+ HR Leaders & Founders" },
    { label: "Average Search CTR", value: "8.2%", subtext: "4.1x SaaS Industry Benchmark" },
    { label: "Product Demo Bookings", value: "85+ /mo", subtext: "+210% Inbound Trial Activations" },
    { label: "Page 1 Google Keywords", value: "27 Keywords", subtext: "Ranked #1 for Cloud Employee Systems" },
  ],
  "the-report-desk": [
    { label: "Organic Search Traffic", value: "+280%", subtext: "8,900+ Monthly Readers & Subscribers" },
    { label: "Average Search CTR", value: "8.8%", subtext: "4.4x Digital Media Standard" },
    { label: "Newsletter Registrations", value: "340+ /mo", subtext: "+240% Daily Reader Signups" },
    { label: "Page 1 Google Keywords", value: "32 Keywords", subtext: "Top Google News & Editorial SERPs" },
  ],
};

export const PROJECT_BESPOKE_GALLERY_CONFIGS: Record<
  string,
  Array<{ label: string; route?: string; description?: string; device?: "desktop" | "mobile" }>
> = {
  "orchid-dental": [
    {
      label: "Home Page (Hero & Patient Welcome)",
      route: "www.orchiddental.co.uk/",
      description: "Welcoming clinical homepage with instant appointment booking CTAs, practice accreditation, and dental emergency care.",
    },
    {
      label: "Dental Treatments & Services",
      route: "www.orchiddental.co.uk/treatments",
      description: "Full directory of dental treatments including Invisalign, cosmetic dentistry, routine exams, and dental implants.",
    },
    {
      label: "Our Team & Dental Specialists",
      route: "www.orchiddental.co.uk/team",
      description: "Specialist dentist profiles, clinical qualifications, GDC accreditations, and gentle patient care philosophy.",
    },
    {
      label: "About Us & Our Mission",
      route: "www.orchiddental.co.uk/about",
      description: "Our Mission: Guided by deep commitment to patient care, sterile clinical standards, and gentle dentistry for the whole family.",
    },
    {
      label: "Patient Testimonials & Reviews",
      route: "www.orchiddental.co.uk/testimonials",
      description: "What our patients say: Verified patient feedback and reviews highlighting comfortable, friendly, and pain-free care.",
    },
    {
      label: "Our Fees & Transparent Pricing",
      route: "www.orchiddental.co.uk/fees",
      description: "Transparent dental fee guide with no hidden costs, clear treatment fees, and flexible payment options.",
    },
  ],
  "precision-root-canal": [
    {
      label: "Clinic Homepage (Hero & Trust Architecture)",
      route: "www.precisionrct.co.uk/",
      description: "Welcoming clinical design designed to alleviate patient anxiety and showcase specialist endodontic accreditation.",
    },
    {
      label: "Modern Dental Technology & 3D CBCT",
      route: "www.precisionrct.co.uk/technology",
      description: "Showcase of operating microscopes, 3D CBCT imaging, and digital radiography inspiring clinical trust.",
    },
    {
      label: "Patient Reviews & Case Studies",
      route: "www.precisionrct.co.uk/testimonials",
      description: "Verified patient testimonials and clinical before-and-after x-ray imaging proving treatment success.",
    },
    {
      label: "Dental Specialists & Team Credentials",
      route: "www.precisionrct.co.uk/team",
      description: "Specialist doctor credentials, GMC/GDC certifications, and clinical backgrounds fostering patient trust.",
    },
    {
      label: "Online 24/7 Appointment Booking Flow",
      route: "www.precisionrct.co.uk/book",
      description: "Interactive calendar booking system allowing emergency and routine patients to schedule appointments instantly.",
    },
    {
      label: "Clinic Location, Directions & Contact",
      route: "www.precisionrct.co.uk/contact",
      description: "Interactive location map, London clinic address, transport links, and direct telephone enquiries.",
    },
  ],
  "achyutam-organics": [
    {
      label: "Storefront & Organic Heritage Hero",
      route: "www.achyutamorganic.com/",
      description: "Brand introduction communicating traditional Bilona churning, Gir cow heritage, and pure A2 certification.",
    },
    {
      label: "Organic Shop & Catalogue Grid",
      route: "www.achyutamorganic.com/shop",
      description: "Grid catalogue with quick-add functionality, price per litre/jar, and purity verification badges.",
    },
    {
      label: "Product Detail View (A2 Gir Cow Ghee)",
      route: "www.achyutamorganic.com/product/gir-cow-ghee",
      description: "High-conversion product page highlighting nutritional benefits, lab testing, customer reviews, and subscription options.",
    },
    {
      label: "Featured Dairy Products Showcase",
      route: "www.achyutamorganic.com/products",
      description: "Curated collection of pure A2 dairy products, seasonal organic offerings, and gift hamper boxes.",
    },
    {
      label: "Brand Story & Farm Heritage",
      route: "www.achyutamorganic.com/about",
      description: "Storytelling layout showcasing farm transparency, ethical milking practices, and quality assurance.",
    },
    {
      label: "Cart & Checkout Flow",
      route: "www.achyutamorganic.com/cart",
      description: "Frictionless shopping bag with free shipping progress, delivery date selection, and UPI payment gateways.",
    },
  ],
  "apex-revops": [
    {
      label: "Homepage & B2B Hero Showcase",
      route: "www.apex-revops.com/",
      description: "High-impact agency positioning communicating AI-driven sales pipeline architecture and outbound scale.",
    },
    {
      label: "Revenue Pipeline & CRM Hub",
      route: "www.apex-revops.com/pipeline",
      description: "Interactive pipeline visualizer demonstrating automated lead routing, deal stage velocity, and CRM hygiene.",
    },
    {
      label: "Analytics & Conversion Metrics Dashboard",
      route: "www.apex-revops.com/analytics",
      description: "Real-time performance dashboard tracking MQL-to-SQL conversion ratios, cost per booked demo, and pipeline value.",
    },
    {
      label: "Outbound Lead Generation Systems",
      route: "www.apex-revops.com/services",
      description: "Multi-channel outbound engine layout covering LinkedIn automation, targeted email infrastructure, and ICP research.",
    },
    {
      label: "AI Automation & Case Studies",
      route: "www.apex-revops.com/case-studies",
      description: "Documented client ROI benchmarks and client video testimonials built to convert high-ticket B2B decision makers.",
    },
    {
      label: "Strategy Intake & Pipeline Audit Form",
      route: "www.apex-revops.com/contact",
      description: "Frictionless discovery meeting intake form and automated calendar scheduling for enterprise revenue leaders.",
    },
  ],
  "xivi": [
    {
      label: "Storefront & Luxury Editorial Hero",
      route: "www.xivi.in/",
      description: "High-end luxury aesthetic for 925 sterling silver jewellery with seasonal editorial campaigns and smooth transitions.",
    },
    {
      label: "Signature Collections & Lookbook",
      route: "www.xivi.in/collections",
      description: "Curated jewelry categories categorized by rings, bracelets, pendants, and bespoke silver craftsmanship.",
    },
    {
      label: "Product Detail & Sizing Guide",
      route: "www.xivi.in/products/silver-solitaire",
      description: "Multi-angle photography zoom, silver hallmarking details, interactive ring size finder, and customer styling photos.",
    },
    {
      label: "Gift Packaging & Express Cart",
      route: "www.xivi.in/cart",
      description: "Seamless gift box selection, personalized card messaging, and secure prepaid payment flow.",
    },
    {
      label: "Brand Craftsmanship & Purity Promise",
      route: "www.xivi.in/about",
      description: "Story of artisanal silversmithing, BIS hallmarking certification, and customer satisfaction guarantee.",
    },
  ],
  "career-upgrade-dental-nursing-school": [
    {
      label: "Online Dental Nursing School Homepage",
      route: "www.careerupgradedentalnursingschool.co.uk/",
      description: "Accredited online qualification academy landing page presenting NCFE CACHE Level 3 diploma training, student funding, and career guidance.",
    },
    {
      label: "Admissions Center & London Office Location",
      route: "www.careerupgradedentalnursingschool.co.uk/contact",
      description: "Admissions inquiry form, office location at 124 City Road London, direct tutor hotlines, and 1:1 consultation scheduling.",
    },
    {
      label: "Accredited Courses & Government Funding Options",
      route: "www.careerupgradedentalnursingschool.co.uk/courses",
      description: "Comprehensive breakdown of the 1-year dental nursing curriculum, flexible 0% interest installments, and government-backed funding.",
    },
    {
      label: "Admissions Officer Dashboard & Enrollment Tracker",
      route: "www.careerupgradedentalnursingschool.co.uk/admin/dashboard",
      description: "Internal admissions management console tracking candidate inquiries, course enrollment velocity, and tutor assignments.",
    },
    {
      label: "Student Applications & Qualification Portal",
      route: "www.careerupgradedentalnursingschool.co.uk/admin/applications",
      description: "Candidate tracking table managing NCFE CACHE Level 3 diploma submissions, identity verification, and funding status.",
    },
    {
      label: "Student Acquisition & Web Analytics Hub",
      route: "www.careerupgradedentalnursingschool.co.uk/admin/analytics",
      description: "Live performance analytics reporting visitor growth trends, application completion rates, and inquiry acquisition channels.",
    },
  ],
  "happy-dental-agency": [
    {
      label: "Recruitment Agency Homepage & Staffing Hero",
      route: "www.happydentalagency.co.uk/",
      description: "Dedicated dental staffing portal connecting UK practices with locum and permanent dental nurses with 24/7 coverage.",
    },
    {
      label: "Coverage Area & London Office Location",
      route: "www.happydentalagency.co.uk/contact",
      description: "Interactive practice support map centered at 124 City Road London, covering Greater London and home counties.",
    },
    {
      label: "Qualified Dental Nurse Registration Portal",
      route: "www.happydentalagency.co.uk/dental-nurses",
      description: "Streamlined registration flow for GDC-registered nurses seeking locum shifts, competitive hourly pay, and flexible scheduling.",
    },
    {
      label: "Trainee Dental Nurse Placement & Support",
      route: "www.happydentalagency.co.uk/trainee-nurses",
      description: "Dedicated entry pathway for trainee nurses needing accredited course placement and practice mentorship.",
    },
    {
      label: "Agency Staffing Management Console",
      route: "www.happydentalagency.co.uk/admin",
      description: "Administrative dashboard tracking 51 registered nurses, active practice vacancies, and placement dispatch.",
    },
    {
      label: "Recruitment Traffic & Portal Analytics",
      route: "www.happydentalagency.co.uk/analytics",
      description: "Real-time Google Analytics tracking high-traffic nurse registration funnels and dental practice inquiry conversions.",
    },
  ],
  "nirvana-spine-pain-clinic": [
    {
      label: "Spine & Pain Management Clinic Homepage",
      route: "www.nirvanapainclinic.com/",
      description: "Modern clinical hero showcasing advanced non-surgical spine care, interventional pain medicine, and direct consultation booking.",
    },
    {
      label: "Modern Clinic Facility & Procedure Suites",
      route: "www.nirvanapainclinic.com/about",
      description: "Visual tour of the state-of-the-art Hyderabad treatment suites, diagnostic consultation rooms, and advanced fluoroscopy equipment.",
    },
    {
      label: "Interventional Procedures & Treatments",
      route: "www.nirvanapainclinic.com/treatments",
      description: "Comprehensive guide to targeted epidural injections, nerve root blocks, radiofrequency ablation, and regenerative joint therapies.",
    },
    {
      label: "Patient Health Library & Clinical Articles",
      route: "www.nirvanapainclinic.com/blog",
      description: "Doctor-authored educational guides covering desk-worker neck strain, slip disc rehabilitation, and sciatica relief protocols.",
    },
    {
      label: "Doctor Consultation & Appointment Booking",
      route: "www.nirvanapainclinic.com/book-appointment",
      description: "Frictionless patient appointment booking form with Dr. Vamshi Bharadwaj, including time slot selection and contact details.",
    },
    {
      label: "Chronic Conditions & Symptoms Directory",
      route: "www.nirvanapainclinic.com/conditions",
      description: "Symptom navigator for chronic lower back pain, migraine/facial pain, cervical spondylosis, and cancer palliative care.",
    },
  ],
  "phoenix-mediclinic": [
    {
      label: "Multispeciality Clinic Homepage & Patient Hero",
      route: "www.phoenixmediclinic.com/",
      description: "Modern healthcare storefront for Sector 46 Gurugram clinic presenting advanced hair restoration, skin aesthetics, and integrative homeopathy.",
    },
    {
      label: "Clinical Specialties & Treatment Departments",
      route: "www.phoenixmediclinic.com/services",
      description: "Interactive department selector highlighting advanced trichology, aesthetic cosmetology, and holistic medical consultations.",
    },
    {
      label: "Clinic Location & Appointment Inquiry Form",
      route: "www.phoenixmediclinic.com/contact",
      description: "Sector 46 Gurugram clinic address, opening hours, interactive Google Map, and instant WhatsApp booking.",
    },
    {
      label: "Regenerative Hair & Scalp Restoration",
      route: "www.phoenixmediclinic.com/hair-treatments",
      description: "In-depth treatment pages for Platelet-Rich Plasma (PRP), Growth Factor Concentrate (GFC), and scalp mesotherapy.",
    },
    {
      label: "Physician Profile & Holistic Treatment Philosophy",
      route: "www.phoenixmediclinic.com/about-us",
      description: "Clinical qualifications, background, and integrative care protocol bridging modern diagnostics with natural therapies.",
    },
    {
      label: "Hair Transplant Case Results & Gallery",
      route: "www.phoenixmediclinic.com/results",
      description: "Verified before-and-after photographic documentation of Sapphire FUE hair restorations and hairline reconstructions.",
    },
  ],
  "kpj-advocates": [
    {
      label: "Law Firm Homepage & Legal Counsel Hero",
      route: "www.kpjadvocates.com/",
      description: "Distinguished legal practice hero highlighting senior courtroom experience, client advocacy, and confidential case evaluation.",
    },
    {
      label: "Core Legal Practice Areas & Solutions",
      route: "www.kpjadvocates.com/practice-areas",
      description: "Detailed practice areas including Real Estate & Property Disputes, Banking & Finance, Loan Recovery, and SARFAESI Act litigation.",
    },
    {
      label: "Firm Mission, Ethics & Guiding Principles",
      route: "www.kpjadvocates.com/about",
      description: "Commitment to courtroom integrity, ethical transparency, meticulous documentation, and dedicated client advocacy.",
    },
    {
      label: "Litigation Services & Courtroom Defense",
      route: "www.kpjadvocates.com/litigation",
      description: "Strategic representation across Civil Suits, Criminal Defense, High Court appeals, and Corporate Advisory disputes.",
    },
    {
      label: "Why Choose KPJ Advocates & Proven Track Record",
      route: "www.kpjadvocates.com/why-us",
      description: "Key pillars of advocacy: multi-decade legal expertise, proactive case preparation, and trial-tested courtroom strategy.",
    },
    {
      label: "Thoothukudi Head Office & Legal Case Intake",
      route: "www.kpjadvocates.com/contact",
      description: "Pearl Plaza office location map, contact numbers, consultation hours, and confidential legal enquiry form.",
    },
  ],
  "qualitech-connectronics": [
    {
      label: "Industrial Electronic Components B2B Storefront",
      route: "www.qualitechconnectronics.com/",
      description: "High-performance B2B electronic components storefront with instant SKU search, technical datasheets, and bulk procurement.",
    },
    {
      label: "B2B Product Catalogue & Component Directory",
      route: "www.qualitechconnectronics.com/products",
      description: "Filterable catalogue featuring 724+ industrial connectors, wire-to-board terminals, and cable harnesses with live stock badges.",
    },
    {
      label: "Procurement Cart & GST Invoice Checkout",
      route: "www.qualitechconnectronics.com/cart",
      description: "B2B shopping cart with automated GST tax calculation, bulk tier volume discounts, Razorpay, and Cash on Delivery.",
    },
    {
      label: "Operations Console & Order Management",
      route: "www.qualitechconnectronics.com/admin/orders",
      description: "Centralized supply chain console tracking active purchase orders, pending RFQs, customer invoices, and shipment status.",
    },
    {
      label: "Order Dispatch & Logistics Tracking",
      route: "www.qualitechconnectronics.com/admin/dispatch",
      description: "Real-time dispatch management system with courier tracking integration, weight verification, and PDF invoice generation.",
    },
    {
      label: "Inventory Database & SKU Management",
      route: "www.qualitechconnectronics.com/admin/inventory",
      description: "Live stock control database managing 167+ active electronic component SKUs, safety stock thresholds, and datasheet uploads.",
    },
  ],
  "amzcoz": [
    {
      label: "Marketplace Scaling Agency Homepage",
      route: "www.amzcoz.com/",
      description: "Omnichannel growth agency hero engineered for D2C brands scaling on Amazon, Blinkit, Zepto, Flipkart, and quick-commerce.",
    },
    {
      label: "Live Brand Telemetry & Revenue Dashboard",
      route: "www.amzcoz.com/telemetry",
      description: "Consolidated performance telemetry tracking net revenue, dark-store fulfillment velocity, blended ROAS, and ad spend efficiency.",
    },
    {
      label: "4-Phase Marketplace Growth Framework",
      route: "www.amzcoz.com/framework",
      description: "Structured acceleration model: Channel Audit, Listing Optimization & A+ Content, PPC Bidding Engines, and Quick-Commerce Dominance.",
    },
    {
      label: "Agency Comparison Matrix & Advantage",
      route: "www.amzcoz.com/comparison",
      description: "Direct head-to-head breakdown showing dedicated account management, hourly bid adjustments, and proactive stock monitoring.",
    },
    {
      label: "Brand Identity & 3D Packaging Design Studio",
      route: "www.amzcoz.com/branding",
      description: "Showcase of luxury brand identity work for The Shaykha, 3D photorealistic packshots, and Arabian Sadu-inspired visual systems.",
    },
    {
      label: "Global Marketplace Expansion Roadmap",
      route: "www.amzcoz.com/global",
      description: "International brand rollout infrastructure spanning Amazon US, UK, UAE/Saudi Arabia, Singapore, and Tokyo.",
    },
  ],
  "autodigix": [
    {
      label: "AI Automation & Digital Agency Homepage",
      route: "www.autodigix.com/",
      description: "Cutting-edge digital growth agency hero integrating AI workflow automation, custom software, and full-funnel digital marketing.",
    },
    {
      label: "Certification Programs & Skill Academy",
      route: "www.autodigix.com/academy",
      description: "Intensive 30-day cohort-based certification courses in AI Business Automation, Modern Full-Stack Development, and Digital Marketing.",
    },
    {
      label: "Agency Insights & Technical Blog",
      route: "www.autodigix.com/blog",
      description: "Thought leadership articles on SEO trends in 2026, autonomous AI marketing agents, and voice-search readiness.",
    },
    {
      label: "Client Portfolio & Case Studies Hub",
      route: "www.autodigix.com/case-studies",
      description: "Documented client growth stories and lead generation case studies for Altum Systems, Winsta, and Nirvana Spine Clinic.",
    },
    {
      label: "Career Openings & Remote Internships",
      route: "www.autodigix.com/careers",
      description: "Skill-first remote internship portal for AI automation engineers, frontend developers, and performance marketing specialists.",
    },
    {
      label: "Strategy Consultation & Project Inquiries",
      route: "www.autodigix.com/contact",
      description: "Direct client consultation form, office contact details, and automated Calendly meeting scheduler.",
    },
  ],
  "e-com-elevate-solutions": [
    {
      label: "E-Commerce Growth Agency Homepage",
      route: "www.ecom-elevate.com/",
      description: "High-converting marketplace consultancy hero positioning Amazon brand scaling, sponsored ads management, and listing redesigns.",
    },
    {
      label: "Marketplace Growth Benchmarks & ROAS Metrics",
      route: "www.ecom-elevate.com/metrics",
      description: "Audited client performance metrics: +38% YoY sales expansion, 4.6x average ad ROAS, and 92% customer repurchase rates.",
    },
    {
      label: "Strategy Audit & Mumbai Office Consultation",
      route: "www.ecom-elevate.com/contact",
      description: "Free marketplace audit booking form, direct client hotline, and Kurla West Mumbai headquarters map.",
    },
    {
      label: "Full-Service Amazon & Marketplace Management",
      route: "www.ecom-elevate.com/services",
      description: "End-to-end service suite covering seller account governance, catalog optimization, FBA inventory health, and A+ brand stores.",
    },
    {
      label: "Sponsored Ads & PPC Command Center",
      route: "www.ecom-elevate.com/advertising",
      description: "Dedicated PPC campaign optimization framework covering negative keyword pruning, dayparting, and Sponsored Brand video ads.",
    },
    {
      label: "Creative Design Portfolio & Infographics",
      route: "www.ecom-elevate.com/creative",
      description: "Visual gallery of Amazon hero product infographics, conversion lifestyle shots, and branded merchandise packaging.",
    },
  ],
  "the-asset-office": [
    {
      label: "Digital Asset Wealth Platform Homepage",
      route: "www.theassetoffice.com/",
      description: "Institutional digital asset advisory hero designed for family offices and high-net-worth investors navigating decentralized markets.",
    },
    {
      label: "Uncompromising Investment Principles",
      route: "www.theassetoffice.com/principles",
      description: "Core investment tenets: Time-in-market over speculative trading, military-grade cold custody, and transparent flat-fee pricing.",
    },
    {
      label: "Capital Allocation & Custody Framework",
      route: "www.theassetoffice.com/framework",
      description: "Structured 4-step onboarding journey: Private Discovery, Model Allocation, Institutional Multi-Sig Custody, and Compounding Yields.",
    },
    {
      label: "Private Wealth Consultation Form",
      route: "www.theassetoffice.com/consultation",
      description: "Bespoke wealth consultation application with investment horizon selection, risk tolerance profiling, and encrypted intake.",
    },
    {
      label: "Client Portal & Multi-Sig Account Access",
      route: "www.theassetoffice.com/portal/login",
      description: "Encrypted investor portal modal featuring 2-factor authentication, cold-storage key verification, and portfolio reporting.",
    },
    {
      label: "Institutional Advisory Scale & Track Record",
      route: "www.theassetoffice.com/track-record",
      description: "$420M+ assets advised, 6.4-year average investor holding period, and systematic risk management across Solana, Stables, and RWAs.",
    },
  ],
  "the-investor-office": [
    {
      label: "Institutional Investment Solutions Homepage",
      route: "www.theinvestoroffice.com/",
      description: "Sophisticated digital asset advisory hero tailored for private equity, institutions, and family office capital preservation.",
    },
    {
      label: "5-Stage Client Onboarding Architecture",
      route: "www.theinvestoroffice.com/onboarding",
      description: "Streamlined institutional onboarding: Profile Assessment, Institutional KYC/AML, Custody Integration, Strategy Execution, and Quarterly Reviews.",
    },
    {
      label: "Institutional Advantage & Exchange Comparison",
      route: "www.theinvestoroffice.com/advantage",
      description: "Comparative analysis highlighting insured multi-custodian vaults, OTC block trading desks, and proprietary quantitative liquidity models.",
    },
    {
      label: "Market Intelligence & Smart Contract Audits",
      route: "www.theinvestoroffice.com/intelligence",
      description: "Macro liquidity telemetry, on-chain protocol flow analysis, protocol security auditing, and stress-tested yield models.",
    },
    {
      label: "Tailored Portfolio Strategy Consultation",
      route: "www.theinvestoroffice.com/contact",
      description: "Confidential institutional consultation intake form featuring international country dialing and allocation tier selection.",
    },
    {
      label: "Client Registration & Secure Terminal Access",
      route: "www.theinvestoroffice.com/register",
      description: "Encrypted institutional dashboard registration modal with enterprise compliance validation and role-based permissions.",
    },
  ],
  "elite-chain": [
    {
      label: "Plateforme IA Crypto & Web3 Hero",
      route: "www.elitechain.fr/",
      description: "Plateforme française d'intelligence artificielle pour l'arbitrage, l'allocation automatisée d'actifs numériques et le staking Web3.",
    },
    {
      label: "Portefeuille Intelligent & Rééquilibrage IA",
      route: "www.elitechain.fr/portfolio",
      description: "Console de suivi d'actifs (259 420 $) avec alertes prédictives en direct et suggestions d'arbitrage automatisé vers Ethereum.",
    },
    {
      label: "Marchés en Direct & Indice de Sentiment",
      route: "www.elitechain.fr/marches",
      description: "Graphique chandelier BTC/USD (67 430 $), jauge Fear & Greed en temps réel et cartographie thermique du marché crypto mondial.",
    },
    {
      label: "Consultation Stratégique & Bureaux Mondiaux",
      route: "www.elitechain.fr/contact",
      description: "Formulaire de contact pour investisseurs privés et coordonnées des bureaux de gestion à Londres, San Francisco et Singapour.",
    },
    {
      label: "Création de Compte & Espace Sécurisé",
      route: "www.elitechain.fr/inscription",
      description: "Modal d'inscription express avec chiffrement SSL 256 bits, authentification biométrique et vérification d'identité instantanée.",
    },
    {
      label: "Copilote IA & Modèle d'Allocation Optimisée",
      route: "www.elitechain.fr/copilote",
      description: "Algorithme d'optimisation de portefeuille attribuant une note A+ et une répartition diversifiée (BTC 42%, ETH 28%, DeFi 18%, Stables 12%).",
    },
  ],
  "filizat-metals": [
    {
      label: "Industrial Base Metals Foundry Homepage",
      route: "www.filizatmetals.com/",
      description: "Heavy metallurgical manufacturing hero showcasing refined lead ingots, precision casting, and international container export.",
    },
    {
      label: "99.97% Ultra-Refined Pure Lead Ingots",
      route: "www.filizatmetals.com/products/refined-lead",
      description: "Technical purity specifications, chemical assays, and packaging standards for commercial lead battery manufacturers.",
    },
    {
      label: "Manufacturing Quality & Global Standards",
      route: "www.filizatmetals.com/quality",
      description: "Rigorous ISO 9001:2015 certification, environmental compliance standards, and SGS third-party pre-shipment inspections.",
    },
    {
      label: "Aligarh Smelting & Casting Foundry",
      route: "www.filizatmetals.com/about",
      description: "Multi-generational metallurgical foundry infrastructure, furnace capacities, and worldwide supply chain logistics.",
    },
    {
      label: "Multi-Stage Quality Control & Lab Testing",
      route: "www.filizatmetals.com/testing",
      description: "Spectrometry testing labs, metallurgical grain analysis, and certified Mill Test Certificates (MTC) for bulk orders.",
    },
    {
      label: "Headquarters Map & Factory Location",
      route: "www.filizatmetals.com/contact",
      description: "Aligarh Central Tower headquarters map, manufacturing facility coordinates, and RFQ submission desk.",
    },
  ],
  "skr-metal-suppliers": [
    {
      label: "Metal Washers Manufacturer Homepage",
      route: "www.skrmetals.com/",
      description: "Leading Coimbatore roofing and industrial washer manufacturer hero highlighting bulk pricing, same-day dispatch, and factory-direct supply.",
    },
    {
      label: "Industrial Washers Catalogue & Unit Pricing",
      route: "www.skrmetals.com/catalogue",
      description: "Product pricing catalogue: Nitrile Umbrella Washers (₹2/pc) and Heavy-Duty Bitumen Washers (₹14/pc) with direct enquiry buttons.",
    },
    {
      label: "Nitrile Umbrella Washer Specifications",
      route: "www.skrmetals.com/umbrella-washers",
      description: "Technical engineering specifications: mild steel galvanized corrosion-resistant cap bonded to high-durability EPDM/nitrile sealing rubber.",
    },
    {
      label: "Multi-Angle Product Engineering Gallery",
      route: "www.skrmetals.com/gallery",
      description: "High-resolution product views detailing washer profile, underside grip seal, and bulk production batch consistency.",
    },
    {
      label: "Logistics Network & Dispatch Coverage",
      route: "www.skrmetals.com/logistics",
      description: "Prompt logistics network across Tamil Nadu and South India with heavy-duty gunny sack packaging and WhatsApp dispatch updates.",
    },
    {
      label: "Ondipudur Factory Location & WhatsApp Order",
      route: "www.skrmetals.com/contact",
      description: "Factory address at 61 Extension Street Ondipudur, Coimbatore, direct contact numbers, and 1-tap WhatsApp bulk order flow.",
    },
  ],
  "big-bang-tech-solutions": [
    {
      label: "Technology Studio & AI Consulting Homepage",
      route: "www.bigbangtech.in/",
      description: "Enterprise software engineering studio hero delivering high-performance web systems, native mobile apps, and LLM automation.",
    },
    {
      label: "Core Capabilities & Engineering Matrix",
      route: "www.bigbangtech.in/services",
      description: "Architectural overview spanning modern web platforms, 60fps mobile applications, cloud DevOps, and AI workflow integration.",
    },
    {
      label: "Native Mobile App Development Studio",
      route: "www.bigbangtech.in/mobile",
      description: "Cross-platform and native engineering using React Native, Flutter, Swift, and Kotlin with fluid animations and offline sync.",
    },
    {
      label: "Business Automation & AI Agent Orchestration",
      route: "www.bigbangtech.in/automation",
      description: "Composable AI workflows replacing repetitive business labor with observable autonomous agent pipelines.",
    },
    {
      label: "Fractional CTO & Studio Advantages",
      route: "www.bigbangtech.in/about",
      description: "Six architectural tenets: rapid prototype velocity, clean modular codebases, hardened security, and zero technical debt.",
    },
    {
      label: "Project Intake & Scoping Consultation",
      route: "www.bigbangtech.in/contact",
      description: "Single-conversation project trajectory intake, scope definition form, and immediate developer consultation scheduler.",
    },
  ],
  "chakrabyte-security": [
    {
      label: "Cyber Security Institute Homepage",
      route: "www.chakrabytesecurity.com/",
      description: "Premier cybersecurity training academy hero featuring hands-on virtual labs, global certification prep, and corporate SOC services.",
    },
    {
      label: "Industry Certification Training Programs",
      route: "www.chakrabytesecurity.com/certifications",
      description: "Specialized training tracks for CompTIA CySA+ Analyst, CompTIA Security+, Certified Ethical Hacker (CEH), and Cloud Defense.",
    },
    {
      label: "Enterprise Security & Penetration Testing",
      route: "www.chakrabytesecurity.com/services",
      description: "B2B security audits: Vulnerability Assessment and Penetration Testing (VAPT), red team simulations, and employee awareness drills.",
    },
    {
      label: "3-Stage Practical Training Methodology",
      route: "www.chakrabytesecurity.com/methodology",
      description: "Core educational model: Cyber Foundations, Virtual Cyber Range Labs, and Real-World Incident Response scenarios.",
    },
    {
      label: "Institutional Security Consulting Suite",
      route: "www.chakrabytesecurity.com/corporate",
      description: "Comprehensive service menu for universities and businesses: campus hackathons, compliance auditing, and career mentoring.",
    },
    {
      label: "Cyber Defense Domains of Expertise",
      route: "www.chakrabytesecurity.com/domains",
      description: "Curriculum domains covering Offensive Hacking, Defensive SOC Blue Teaming, AWS/Azure Cloud Security, and Digital Forensics.",
    },
  ],
  "employee-management-saas": [
    {
      label: "HRMS & Workforce Platform Homepage",
      route: "www.autodigixhrms.com/",
      description: "Modern cloud HRMS software hero providing automated employee clock-in, leave approvals, payroll generation, and team productivity.",
    },
    {
      label: "Admin Operations & Headcount Dashboard",
      route: "www.autodigixhrms.com/admin/dashboard",
      description: "Executive overview displaying active headcount (5), 80% daily attendance rate, pending leave requests, and payroll status.",
    },
    {
      label: "Real-Time Attendance & Shift Tracker",
      route: "www.autodigixhrms.com/attendance",
      description: "Live team attendance monitor showing punch-in timestamps, working durations, and visual completion progress bars.",
    },
    {
      label: "Employee Self-Service (ESS) Portal",
      route: "www.autodigixhrms.com/employee/portal",
      description: "Personal staff portal with interactive shift timer (02:36:00), remaining leave balance (23 days), and instant payslip download.",
    },
    {
      label: "Monthly Punch Logs & Hours Analytics",
      route: "www.autodigixhrms.com/employee/attendance-log",
      description: "Detailed monthly attendance analytics modal tracking total billable hours (137.6h), working streaks, and punctual arrival logs.",
    },
    {
      label: "Interactive Leave & Holiday Calendar",
      route: "www.autodigixhrms.com/calendar",
      description: "Multi-month calendar visualizer with color-coded holiday schedules, weekend shifts, and team leave approvals.",
    },
  ],
  "the-report-desk": [
    {
      label: "Journal d'Investigation Financière & Hero",
      route: "www.thereportdesk.fr/",
      description: "Portail d'actualités financières et géopolitiques avec analyses de marchés en direct, enquêtes exclusives et vidéos documentaires.",
    },
    {
      label: "Dossiers Crypto, DeFi & Analyses Stratégiques",
      route: "www.thereportdesk.fr/crypto",
      description: "Analyses approfondies sur l'arbitrage de rendement DeFi, l'économie des tokens Layer-2 et les recommandations de portefeuille.",
    },
    {
      label: "Article d'Enquête & Lecteur Vidéo Documentaire",
      route: "www.thereportdesk.fr/enquetes/defi-cashflow",
      description: "Enquête exclusive sur la génération de flux de trésorerie passifs via la DeFi avec lecteur vidéo documentaire HD intégré.",
    },
    {
      label: "Grand Titre Financier & Ticker Boursier",
      route: "www.thereportdesk.fr/a-la-une",
      description: "Article à la une sur l'ascension financière de la dette étudiante à 45M$ avec bandeau de cotation BTC/ETH en continu.",
    },
  ],
};

const projectAssetModules = import.meta.glob<string>(
  "../assets/Portfolio_projects/**/*.{png,webp,jpg,PNG,WEBP,JPG}",
  { eager: true, import: "default" }
);

export const PROJECT_FOLDER_MAP: Record<string, string> = {
  "precision-root-canal": "precision",
  "orchid-dental": "orchid",
  "happy-dental-agency": "happy dental",
  "career-upgrade-dental-nursing-school": "career upgrade",
  "nirvana-spine-pain-clinic": "nirvana",
  "phoenix-mediclinic": "phoenix",
  "qualitech-connectronics": "qualitech",
  "achyutam-organics": "achyutam",
  "xivi": "xivi",
  "amzcoz": "amzcoz",
  "apex-revops": "Apex RevOps",
  "autodigix": "autodigix",
  "e-com-elevate-solutions": "e com elevate",
  "the-asset-office": "theassetoffice",
  "the-investor-office": "theinvestoroffice",
  "elite-chain": "elite_chain-french crypto website",
  "kpj-advocates": "kpj",
  "filizat-metals": "filizat",
  "skr-metal-suppliers": "skr",
  "big-bang-tech-solutions": "big bang",
  "chakrabyte-security": "chakrabyte",
  "employee-management-saas": "employee management sys - saas",
  "the-report-desk": "the report desk - french newspaper website",
};

const getFilePriority = (fileName: string): number => {
  const base = fileName.toLowerCase().replace(/\.[^/.]+$/, "");
  if (base.includes("cover")) return 0;
  if (/^\d{2}-/.test(base)) return parseInt(base.slice(0, 2), 10);
  if (base.includes("gsc")) return 10;
  return 8;
};

const gscAssetModules = import.meta.glob<string>(
  "../assets/Portfolio_projects/**/gsc.{png,webp,jpg,PNG,WEBP,JPG}",
  { eager: true, import: "default" }
);

/**
 * Authentic GSC performance reports for projects with verified GSC data.
 */
export const PROJECT_GSC_MAP: Record<string, boolean> = {
  "orchid-dental": true,
  "happy-dental-agency": true,
  "kpj-advocates": true,
  "skr-metal-suppliers": true,
};

export const getProject = (slug?: string) => PROJECTS.find((project) => project.slug === slug);

export const getProjectGSCImage = (project: Project): string | undefined => {
  if (!PROJECT_GSC_MAP[project.slug]) {
    return undefined;
  }

  const folder = PROJECT_FOLDER_MAP[project.slug];
  if (folder) {
    for (const [filePath, imageUrl] of Object.entries(gscAssetModules)) {
      const normalized = filePath.replace(/\\/g, "/");
      if (normalized.includes(`/Portfolio_projects/${folder}/`)) {
        return imageUrl;
      }
    }
  }

  return undefined;
};

export const getProjectGallery = (project: Project): ProjectGalleryItem[] => {
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery.filter((item) => Boolean(item.image));
  }

  const domain = project.website ? `www.${project.website}` : "www.clientdomain.com";
  const folder = PROJECT_FOLDER_MAP[project.slug];

  if (folder) {
    // Collect all matched images for this folder (excluding GSC reports which are featured in Section 2)
    const folderEntries = Object.entries(projectAssetModules).filter(([filePath]) => {
      const normalized = filePath.replace(/\\/g, "/");
      return normalized.includes(`/Portfolio_projects/${folder}/`);
    });

    // Check if cover.webp exists to exclude redundant uncompressed cover.png
    const hasCoverWebp = folderEntries.some(([p]) => p.endsWith("/cover.webp"));

    const filtered = folderEntries.filter(([p]) => {
      if (hasCoverWebp && p.endsWith("/cover.png")) return false;
      if (p.toLowerCase().includes("gsc")) return false; // Handled exclusively in Section 2 (GSC Overview)
      return true;
    });

    if (filtered.length > 0) {
      // Sort in standard order: Cover -> image -> image copy -> image copy 2...
      filtered.sort(([pathA], [pathB]) => {
        const fileA = pathA.split("/").pop() || "";
        const fileB = pathB.split("/").pop() || "";
        const priorityA = getFilePriority(fileA);
        const priorityB = getFilePriority(fileB);
        if (priorityA !== priorityB) return priorityA - priorityB;
        return fileA.localeCompare(fileB);
      });

      const bespokeList = PROJECT_BESPOKE_GALLERY_CONFIGS[project.slug];

      const isMedical = project.category === "Dental" || project.category === "Healthcare";
      const isEcommerce = project.category === "Ecommerce";

      const defaultSlotConfigs = [
        {
          label: isEcommerce
            ? "Storefront Hero & Featured Drops"
            : isMedical
            ? "Home Page (Hero & Service Overview)"
            : "Home Page (Hero & Value Proposition)",
          route: `${domain}/`,
          description: isEcommerce
            ? "High-impact storefront hero showcasing featured collections, promotions, and brand value."
            : isMedical
            ? "Welcoming clinic hero with online appointment booking CTAs, certifications, and care overview."
            : "High-impact conversion hero, clear value proposition, and frictionless CTA elements engineered to capture leads.",
          device: "desktop" as const,
        },
        {
          label: isEcommerce
            ? "Product Catalogue & Collections Grid"
            : isMedical
            ? "Services & Healthcare Offerings"
            : "Services & Capabilities Matrix",
          route: `${domain}/services`,
          description: isEcommerce
            ? "Filterable product grid with instant preview, pricing, customer ratings, and category filters."
            : isMedical
            ? "Comprehensive overview of specialized services, clinical care, and patient benefits."
            : "Comprehensive breakdown of key services, individual offerings, transparent pricing indicators, and structured navigation.",
          device: "desktop" as const,
        },
        {
          label: isEcommerce
            ? "Product Details & Sizing Guide"
            : isMedical
            ? "Our Team & Specialists"
            : "About Company & Leadership Team",
          route: `${domain}/about`,
          description: isEcommerce
            ? "High-resolution photography, detailed specifications, sizing recommendations, and direct cart drawer."
            : isMedical
            ? "Doctor profiles, clinical qualifications, specialist certifications, and patient care commitment."
            : "Executive background, company heritage, certifications, and customer trust badges.",
          device: "desktop" as const,
        },
        {
          label: isEcommerce
            ? "Brand Heritage & Ethical Sourcing"
            : isMedical
            ? "Our Mission & Standards of Care"
            : "Our Mission & Core Capabilities",
          route: `${domain}/mission`,
          description: isEcommerce
            ? "Storytelling layout highlighting authentic sourcing, ethical craftsmanship, and quality guarantee."
            : isMedical
            ? "Our Mission: Guided by deep commitment to patient care, sterile clinical standards, and gentle treatment."
            : "Corporate mission, quality assurance standards, and operational excellence.",
          device: "desktop" as const,
        },
        {
          label: isEcommerce
            ? "Customer Reviews & Social Proof"
            : isMedical
            ? "Patient Testimonials & Reviews"
            : "Client Reviews & Testimonials",
          route: `${domain}/testimonials`,
          description: isEcommerce
            ? "Verified buyer reviews, unboxing photos, and community feedback confirming product quality."
            : isMedical
            ? "What our patients say: Verified patient feedback and reviews highlighting comfortable, friendly care."
            : "Documented client feedback, verified reviews, and ratings from industry decision makers.",
          device: "desktop" as const,
        },
        {
          label: isEcommerce
            ? "Express Cart & Secure Checkout"
            : isMedical
            ? "Transparent Pricing & Fee Guide"
            : "Pricing Plans & Engagement Options",
          route: `${domain}/pricing`,
          description: isEcommerce
            ? "Frictionless checkout gateway with multiple payment methods, free delivery badges, and instant receipts."
            : isMedical
            ? "Transparent fee guide with no hidden costs, clear treatment fees, and flexible payment options."
            : "Transparent tier pricing, detailed deliverables breakdown, and flexible engagement terms.",
          device: "desktop" as const,
        },
      ];

      return filtered
        .map(([filePath, imageUrl], idx) => {
          const bespoke = bespokeList?.[idx];
          const fallback = defaultSlotConfigs[idx] || {
            label: `Page View ${idx + 1}`,
            route: `${domain}/page-${idx + 1}`,
            description: `Custom engineered interface element and interactive workflow for ${project.name}.`,
            device: "desktop" as const,
          };

          const label = bespoke?.label || fallback.label;
          const route = bespoke?.route || fallback.route;
          const description = bespoke?.description || fallback.description;
          const device = bespoke?.device || fallback.device || ("desktop" as const);

          return {
            label,
            route,
            description,
            image: imageUrl,
            imageScale: project.imageScale,
            device,
          };
        })
        .filter((item) => Boolean(item.image));
    }
  }

  return [
    {
      label: "Home Page (Hero & Conversion Funnel)",
      route: `${domain}/`,
      description: "High-impact conversion hero, clear value proposition, and frictionless CTA elements engineered to capture immediate buyer interest.",
      image: project.image,
      imageScale: project.imageScale,
      device: "desktop",
    },
  ];
};

export const getProjectMetrics = (project: Project): ProjectMetric[] => {
  if (project.metrics && project.metrics.length > 0) {
    return project.metrics;
  }
  return PROJECT_METRICS_MAP[project.slug] || [
    { label: "Organic Search Traffic", value: "+165%", subtext: "1,850+ Monthly Google Visitors" },
    { label: "Average Search CTR", value: "6.8%", subtext: "3.2x Higher than Industry Average" },
    { label: "Form Fills & Inquiries", value: "45+ /mo", subtext: "+120% Qualified Leads Generated" },
    { label: "Page 1 Google Keywords", value: "16+ Keywords", subtext: "Top 10 Positions in Google SERPs" },
  ];
};

export const getProjectRankings = (project: Project): ProjectRanking[] => {
  if (project.rankings && project.rankings.length > 0) {
    return project.rankings;
  }
  return PROJECT_RANKINGS_MAP[project.slug] || [
    { keyword: `${project.name} official website`, position: "#1", intent: "Brand Navigational", location: project.location || "India", status: "Page 1 Top Spotlight" },
    { keyword: `${project.industry} services`, position: "#2", intent: "Commercial", location: project.location || "India", status: "Page 1 Rank #2" },
    { keyword: `best ${project.industry} provider`, position: "#3", intent: "High Intent", location: project.location || "India", status: "Page 1 Rank #3" },
  ];
};

export const getRelatedProjects = (project: Project, limit = 3): Project[] =>
  PROJECTS.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, limit);
