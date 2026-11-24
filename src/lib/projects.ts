import xivi from "@/assets/Portfolio_projects/xivi/image.png";
import precision from "@/assets/Portfolio_projects/precision/precision.png";
import apexRevOps from "@/assets/Portfolio_projects/Apex RevOps/Screenshot 2026-10-06 143908.png";
import achyutam from "@/assets/Portfolio_projects/achyutam/Screenshot 2026-05-29 095505.png";

export type ProjectCategory = "Dental" | "Healthcare" | "Business";

export type Project = {
  name: string;
  category: ProjectCategory;
  industry: string;
  location?: string;
  website?: string;
  description: string;
  features: string[];
  image?: string;
};

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  Dental: "Dental Websites",
  Healthcare: "Medical Clinics & Healthcare",
  Business: "Other Business Websites",
};

export const PROJECTS: Project[] = [
  // Dental websites
  {
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
    image: precision,
  },
  {
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
  },
  {
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
  },
  {
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
  },

  // Medical clinics & healthcare
  {
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
  },
  {
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
  },

  // Other business websites
  {
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
  },
  {
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
    image: apexRevOps,
  },
  {
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
  },
  {
    name: "Qualitech Connectronics",
    category: "Business",
    industry: "Electronics & Manufacturing",
    description:
      "A corporate website for an electronic components distributor and cable assembly manufacturer, showcasing industrial connectivity solutions, trusted component brands and custom-engineered products.",
    features: [
      "Product presentation",
      "Connector distribution",
      "Cable assembly solutions",
      "Industrial applications",
    ],
  },
  {
    name: "Achyutam Organics",
    category: "Business",
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
    image: achyutam,
  },
  {
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
  },
  {
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
  },
  {
    name: "XIVI",
    category: "Business",
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
    image: xivi,
  },
  {
    name: "Chakrabyte",
    category: "Business",
    industry: "Cybersecurity Education",
    website: "chakrabyte.com",
    description:
      "An educational platform promoting professional cybersecurity courses and hands-on technical training. Designed to highlight course offerings, practical learning opportunities and career development support.",
    features: [
      "Course catalogue",
      "Cybersecurity training",
      "Practical labs",
      "Certification information",
      "Job assistance",
    ],
  },
];
