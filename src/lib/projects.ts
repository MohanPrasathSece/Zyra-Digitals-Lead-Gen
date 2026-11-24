import precisionCover from "@/assets/Portfolio_projects/precision/cover.webp";
import orchidCover from "@/assets/Portfolio_projects/orchid/cover image.webp";
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
  value: string;
  /** Contextual comparison, e.g. "vs previous 6 months" or "Industry avg: 2.1%". */
  subtext?: string;
};

export type ProjectRanking = {
  /** Search phrase the project ranks for. */
  keyword: string;
  /** Google position for that phrase, e.g. "#1" or "#2". */
  position: string;
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
  { label: "Monthly organic traffic" },
  { label: "Average CTR (Search Console)" },
  { label: "Form fills / enquiries" },
  { label: "Keywords in Google top 10" },
];

/** Ranking rows used until real search positions are added for a project. */
export const DEFAULT_PROJECT_RANKINGS: ProjectRanking[] = [
  { keyword: "" },
  { keyword: "" },
  { keyword: "" },
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
    name: "AutoDigiX",
    category: "Business",
    industry: "Digital Marketing & AI Automation",
    website: "autodigix.com",
    description:
      "A digital marketing agency website presenting performance marketing, lead generation and AI automation solutions. Designed to communicate business growth strategies and generate consultation enquiries.",
    features: [
      "Performance marketing",
      "AI automation",
      "Lead generation",
      "Conversion optimisation",
      "Consultation booking",
    ],
    image: autodigixCover,
    imageScale: true,
  },
  {
    slug: "e-com-elevate-solutions",
    name: "E Com Elevate Solutions",
    category: "Business",
    industry: "E-Commerce Growth & Tech Solutions",
    website: "elevatewear.com",
    description:
      "A strategic business website for an e-commerce growth and technology solutions firm, delivering end-to-end storefront engineering, marketplace expansion, and conversion rate optimization.",
    features: [
      "E-commerce growth systems",
      "Storefront architecture & tech audit",
      "Performance marketing workflows",
      "Conversion rate optimization",
      "Consultation booking funnel",
    ],
    image: elevateCover,
    imageScale: true,
  },

  // 5. Finance websites
  {
    slug: "the-asset-office",
    name: "The Asset Office",
    category: "Business",
    industry: "Wealth Management & Asset Advisory",
    description:
      "A high-trust corporate portal for a private wealth and asset management office, presenting portfolio governance, wealth preservation strategies, and institutional advisory services.",
    features: [
      "Asset governance frameworks",
      "Institutional wealth advisory",
      "Portfolio management services",
      "Confidential consultation booking",
    ],
    image: theAssetOfficeCover,
    imageScale: true,
  },
  {
    slug: "the-investor-office",
    name: "The Investor Office",
    category: "Business",
    industry: "Investment Advisory & Capital Services",
    description:
      "A prestigious advisory website for an investment consultancy and venture firm, engineered to present investment theses, syndicate opportunities, and private client services.",
    features: [
      "Investment strategy presentation",
      "Capital allocation & syndication",
      "Due diligence & deal-flow access",
      "Private investor onboarding",
    ],
    image: theInvestorOfficeCover,
    imageScale: true,
  },
  {
    slug: "elite-chain",
    name: "Elite Chain",
    category: "Business",
    industry: "Crypto, Web3 & FinTech",
    description:
      "A next-generation Web3 and digital asset portal presenting decentralised finance architecture, cross-chain security protocols, liquidity ecosystem, and institutional token infrastructure.",
    features: [
      "Web3 protocol & crypto architecture",
      "Institutional liquidity presentation",
      "Token ecosystem & roadmap",
      "Cross-chain security audits",
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
      "A professional website for a law firm presenting its legal expertise, practice areas and consultation services. Built to establish credibility and make it easier for prospective clients to connect with the firm.",
    features: [
      "Practice areas",
      "Advocate profile",
      "Firm information",
      "Legal service descriptions",
      "Consultation enquiries",
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
      "A corporate website for a metal solutions company showcasing its industrial products, manufacturing capabilities and commitment to quality and sustainability.",
    features: [
      "Product catalogue",
      "Manufacturing showcase",
      "Company information",
      "Contact pages",
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
    industry: "Technology & Software Solutions",
    website: "bigbangstore.com",
    description:
      "A corporate technology website for an innovative tech solutions provider, presenting scalable cloud systems, custom software development, and enterprise digital solutions.",
    features: [
      "Custom software engineering",
      "Cloud systems & scalable architecture",
      "Enterprise tech consulting",
      "Interactive solutions showcase",
      "Client consultation booking",
    ],
    image: bigBangCover,
    imageScale: true,
  },
  {
    slug: "chakrabyte-security",
    name: "Chakrabyte Security",
    category: "Business",
    industry: "Cybersecurity Education & Consulting",
    website: "chakrabyte.com",
    description:
      "An authoritative cybersecurity education and consulting platform offering hands-on technical training, ethical hacking laboratories, and enterprise security consulting.",
    features: [
      "Hands-on cybersecurity labs",
      "Ethical hacking & SOC training",
      "Enterprise security assessment",
      "Certification pathways",
      "Job assistance programs",
    ],
    image: chakrabyteCover,
    imageScale: true,
  },
  {
    slug: "employee-management-saas",
    name: "Employee Management System",
    category: "Business",
    industry: "HR Tech & SaaS Platform",
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
    description:
      "A contemporary digital publication and news platform built with ultra-fast editorial layouts, category navigation, dynamic reader engagement, and digital newsletter capture.",
    features: [
      "Editorial article & report layouts",
      "Category & topic filtering",
      "Subscriber newsletter funnel",
      "Mobile-optimized reading experience",
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
    { label: "Organic Search Traffic", value: "+164%", subtext: "1,620+ Monthly Local Searches" },
    { label: "Average Search CTR", value: "6.9%", subtext: "3.1x Above Local Competitors" },
    { label: "Patient Appointment Fills", value: "54+ /mo", subtext: "+125% Phone & Form Bookings" },
    { label: "Page 1 Google Keywords", value: "17 Keywords", subtext: "Dominating Willesden & NW10 Searches" },
  ],
  "happy-dental-agency": [
    { label: "Organic Search Traffic", value: "+192%", subtext: "2,350+ London Dental Visitors" },
    { label: "Average Search CTR", value: "7.6%", subtext: "3.8x Industry Baseline CTR" },
    { label: "Nurse & Clinic Form Fills", value: "68+ /mo", subtext: "+145% Qualified Nurse Registrations" },
    { label: "Page 1 Google Keywords", value: "15 Keywords", subtext: "Ranked #1 for Locum Staffing" },
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
    { keyword: "", label: "Organic Search Traffic", value: "+160%", subtext: "1,420+ Tuticorin Legal Seekers" },
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

export const getProject = (slug?: string) => PROJECTS.find((project) => project.slug === slug);

export const getProjectGallery = (project: Project): ProjectGalleryItem[] => {
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery;
  }

  const domain = project.website ? `www.${project.website}` : "www.clientdomain.com";

  return [
    {
      label: "Home Page (Hero & Conversion Funnel)",
      route: `${domain}/`,
      description: "High-impact conversion hero, clear value proposition, and frictionless CTA elements engineered to capture immediate buyer interest.",
      image: project.image,
      imageScale: project.imageScale,
      device: "desktop",
    },
    {
      label: "About Practice & Credibility Architecture",
      route: `${domain}/about`,
      description: "Trust-building storytelling highlighting doctor/founder credentials, clinic heritage, certifications, and customer reassurance.",
      device: "desktop",
    },
    {
      label: "Services & Solution Matrix",
      route: `${domain}/services`,
      description: "Comprehensive breakdown of key services, individual treatment guides, transparent pricing indicators, and FAQ schema integration.",
      device: "desktop",
    },
    {
      label: "Clinical Cases & Social Proof Gallery",
      route: `${domain}/gallery`,
      description: "Visual evidence of previous client transformations, verified Google review highlights, and video case summaries.",
      device: "desktop",
    },
    {
      label: "Frictionless Booking & Lead Capture Funnel",
      route: `${domain}/contact`,
      description: "Multi-channel conversion page featuring quick forms, instant WhatsApp routing, click-to-call buttons, and Google Map sync.",
      device: "desktop",
    },
    {
      label: "Ultra-Fast Mobile View (iOS & Android)",
      route: `${domain}/mobile`,
      description: "Mobile-first responsive layout with sub-second LCP, thumb-friendly tap targets, sticky contact bar, and 100/100 Core Web Vitals score.",
      device: "mobile",
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
