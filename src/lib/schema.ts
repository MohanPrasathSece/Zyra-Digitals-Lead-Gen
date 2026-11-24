import { SITE } from "@/lib/site";

/**
 * Central JSON-LD schema builders.
 *
 * All values here reflect information that is genuinely published on the website.
 * Do not add reviews, ratings, awards, addresses or profiles that are not real.
 */

export const SITE_URL = SITE.url;
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;

const postalAddress = {
  "@type": "PostalAddress",
  addressLocality: "Malumichampatti, Coimbatore",
  addressRegion: "Tamil Nadu",
  addressCountry: "IN",
};

const areaServed = [
  { "@type": "City", name: "Coimbatore" },
  { "@type": "State", name: "Tamil Nadu" },
  { "@type": "Country", name: "India" },
];

const knowsAbout = [
  "Website design",
  "Website development",
  "Search engine optimisation",
  "Local SEO",
  "Branding and logo design",
  "Lead generation websites",
];

export const organizationSchema = {
  "@type": ["ProfessionalService", "Organization"],
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/zyra-digitals-logo.svg` },
  image: `${SITE_URL}${SITE.ogImage}`,
  email: SITE.email,
  telephone: SITE.phoneHref,
  priceRange: "INR 1,499-19,999",
  description:
    "Zyra Digitals is a creative digital agency based in Coimbatore, Tamil Nadu, India, offering website design and development, SEO and branding services for small and medium businesses, dental clinics, interior designers and professional service providers.",
  address: postalAddress,
  areaServed,
  knowsAbout,
  founder: { "@id": FOUNDER_ID },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: SITE.phoneHref,
      email: SITE.email,
      availableLanguage: ["English", "Tamil"],
      areaServed: "IN",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Website Design & Development",
        price: "7999",
        priceCurrency: "INR",
        itemOffered: { "@type": "Service", name: "Website Design & Development" },
      },
      {
        "@type": "Offer",
        name: "Search Engine Optimisation (SEO)",
        price: "2999",
        priceCurrency: "INR",
        description: "Starting price per month",
        itemOffered: { "@type": "Service", name: "Search Engine Optimisation (SEO)" },
      },
      {
        "@type": "Offer",
        name: "Logo Design",
        price: "4999",
        priceCurrency: "INR",
        itemOffered: { "@type": "Service", name: "Logo Design" },
      },
      {
        "@type": "Offer",
        name: "Google Business Profile Optimisation",
        price: "1499",
        priceCurrency: "INR",
        itemOffered: { "@type": "Service", name: "Google Business Profile Optimisation" },
      },
    ],
  },
  ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE.name,
  description: SITE.tagline,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

/**
 * Founder entity: connects Mohan Prasath S to Zyra Digitals.
 * Intentionally has no sameAs until genuine profile URLs are supplied.
 */
export const founderSchema = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: SITE.founderName,
  alternateName: [
    "Mohan Prasath",
    "Mohan Prasath S",
    "Mohan Prasath Coimbatore",
    "Mohan Prasath Zyra Digitals",
    "Mohan Prasath founder of Zyra Digitals",
  ],
  jobTitle: "Founder",
  worksFor: { "@id": ORG_ID },
  url: `${SITE_URL}/about#founder`,
  description:
    "Mohan Prasath S is the founder of Zyra Digitals and works directly with clients on website design, development, SEO and branding projects.",
  knowsAbout,
  address: postalAddress,
  nationality: {
    "@type": "Country",
    name: "India",
  },
  ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
};

export const webPageSchema = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@type": "WebPage",
  "@id": `${SITE_URL}${path}#webpage`,
  url: `${SITE_URL}${path}`,
  name,
  description,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "en",
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const serviceSchema = ({
  name,
  description,
  serviceType,
  path,
  offers,
}: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
  /** Optional published package prices. Only pass prices that are shown on the page. */
  offers?: {
    name: string;
    price: string;
    description?: string;
    unitText?: string;
  }[];
}) => ({
  "@type": "Service",
  name,
  description,
  serviceType,
  url: `${SITE_URL}${path}`,
  provider: { "@id": ORG_ID },
  areaServed,
  ...(offers && offers.length
    ? {
      offers: offers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        price: offer.price,
        priceCurrency: "INR",
        ...(offer.description ? { description: offer.description } : {}),
        ...(offer.unitText
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: offer.price,
                priceCurrency: "INR",
                unitText: offer.unitText,
              },
            }
          : {}),
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}${path}`,
      })),
    }
    : {}),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

/**
 * Article schema for blog posts. Author and publisher both point to the real
 * organisation entity - no invented authors or credentials.
 */
export const articleSchema = ({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) => ({
  "@type": "Article",
  "@id": `${SITE_URL}${path}#article`,
  headline,
  description,
  image: [image],
  datePublished,
  dateModified,
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  isPartOf: { "@id": WEBSITE_ID },
  mainEntityOfPage: { "@id": `${SITE_URL}${path}#webpage` },
  inLanguage: "en",
});

/** Collection node for the blog index, listing the published articles. */
export const blogCollectionSchema = (
  posts: { title: string; path: string; datePublished: string }[]
) => ({
  "@type": "Blog",
  "@id": `${SITE_URL}/blogs#blog`,
  name: "Zyra Digitals Blog",
  description:
    "Practical guides on website design, SEO and getting discovered on Google and AI search, written for businesses in Coimbatore and across India.",
  url: `${SITE_URL}/blogs`,
  publisher: { "@id": ORG_ID },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE_URL}${p.path}`,
    datePublished: p.datePublished,
  })),
});

/** Schema for individual website design and SEO project case studies. */
export const caseStudySchema = ({
  headline,
  description,
  path,
  image,
  about,
}: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  about?: string;
}) => ({
  "@type": "CreativeWork",
  "@id": `${SITE_URL}${path}#case-study`,
  headline,
  name: headline,
  description,
  ...(image ? { image: [image] } : {}),
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  isPartOf: { "@id": WEBSITE_ID },
  mainEntityOfPage: { "@id": `${SITE_URL}${path}#webpage` },
  inLanguage: "en",
  ...(about ? { about: { "@type": "Thing", name: about } } : {}),
});

export type SchemaNode = Record<string, unknown>;
