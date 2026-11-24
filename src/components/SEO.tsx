import { Helmet } from "react-helmet-async";
import { getPageOgImage, SITE } from "@/lib/site";
import {
  organizationSchema,
  websiteSchema,
  founderSchema,
  webPageSchema,
  breadcrumbSchema,
  type SchemaNode,
} from "@/lib/schema";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  /** Extra JSON-LD nodes for this page (Service, FAQPage, CollectionPage, etc.). */
  schema?: SchemaNode | SchemaNode[];
  /** Optional breadcrumb trail, excluding Home (added automatically). */
  breadcrumbs?: { name: string; path: string }[];
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage,
  schema,
  breadcrumbs,
  noindex = false,
}: SEOProps) => {
  const siteName = SITE.name;
  const url = SITE.url;
  const path = canonical ?? "/";
  const canonicalUrl = `${url}${path}`;
  // Allow absolute image URLs (e.g. per-article featured images) as well as
  // site-relative paths that resolve against the production domain.
  const selectedOgImage = ogImage ?? getPageOgImage(path);
  const ogImageUrl = /^https?:\/\//.test(selectedOgImage)
    ? selectedOgImage
    : `${url}${selectedOgImage}`;

  // Avoid duplicating the brand name when a page title already contains it.
  const hasBrandName = /zyra\s*digitals/i.test(title);
  const fullTitle = hasBrandName ? title : `${title} - ${siteName}`;

  const defaultKeywords =
    "website design company, web development agency, seo services, branding agency, lead generation website, ecommerce website design, responsive website design, small business website, coimbatore web design, best web design company";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const extraNodes = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const breadcrumbNode = breadcrumbs
    ? breadcrumbSchema([{ name: "Home", path: "/" }, ...breadcrumbs])
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      founderSchema,
      webPageSchema({ name: fullTitle, description, path }),
      ...extraNodes,
      ...(breadcrumbNode ? [breadcrumbNode] : []),
    ],
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Language */}
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
