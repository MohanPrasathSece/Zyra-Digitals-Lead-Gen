import { ArrowRight, Check, CalendarClock, Code2, Globe, Layout, Rocket, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import HomeFAQ, { serviceFaqs } from "@/components/HomeFAQ";
import LeadForm from "@/components/LeadForm";
import SEO from "@/components/SEO";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { PAGE_BANNERS } from "@/lib/banners";
import ourWorkImage from "@/assets/zyra/our-work.jpg";

const websiteTypes = [
  {
    title: "Portfolio Website",
    desc: "Showcase your work with a clean, image-led gallery that turns visitors into enquiries.",
    icon: Layout,
  },
  {
    title: "E-commerce Website",
    desc: "Sell online with product pages, secure checkout and a smooth buying experience.",
    icon: ShoppingCart,
  },
  {
    title: "SaaS Website",
    desc: "Explain your product clearly with feature pages, pricing and demo request forms.",
    icon: Code2,
  },
  {
    title: "Business Website",
    desc: "A professional multi-page website that builds trust and generates qualified leads.",
    icon: Globe,
  },
  {
    title: "Landing Page",
    desc: "Single-page campaigns designed to turn your ad traffic into real enquiries.",
    icon: Rocket,
  },
  {
    title: "Booking Website",
    desc: "Let customers book your services online 24/7 - no back-and-forth messages.",
    icon: CalendarClock,
  },
];

const packages = [
  {
    name: "Portfolio",
    tag: "Portfolio Website",
    price: "₹7,999",
    period: "onwards",
    summary: "For freelancers, designers and personal brands",
    features: [
      "Up to 5 pages",
      "Custom, mobile-first design",
      "Project / work gallery",
      "Enquiry form with email alerts",
      "Basic on-page SEO",
      "Contact + WhatsApp buttons",
    ],
    featured: false,
  },
  {
    name: "Business",
    tag: "Business Website",
    price: "₹11,999",
    period: "onwards",
    summary: "For service businesses that want more leads",
    features: [
      "Up to 12 pages",
      "Conversion-focused layouts",
      "Service pages + landing pages",
      "Blog & content setup",
      "Full on-page SEO & schema",
      "Google Analytics & lead tracking",
      "1 month free support",
    ],
    featured: true,
  },
  {
    name: "E-commerce",
    tag: "E-commerce Website",
    price: "₹19,999",
    period: "onwards",
    summary: "For brands ready to sell online",
    features: [
      "Unlimited products & categories",
      "Secure payment gateway",
      "Cart, checkout & order emails",
      "Product SEO & fast loading",
      "Shipping & tax configuration",
      "2 months free support",
    ],
    featured: false,
  },
];

const checklist = ["Conversion-focused layouts & CTAs", "SEO-friendly structure and content", "Guaranteed fast, secure, mobile-first build"];

const WebDesign = () => (
  <div>
    <SEO
      title="Website Design in Coimbatore | Web Design Company"
      description="Looking for professional website design in Coimbatore? Zyra Digitals builds fast, mobile-friendly websites that bring enquiries, from ₹7,999. 100+ websites delivered. Free quote within 1 hour."
      keywords="website design in Coimbatore, website design company in Coimbatore, web design company Coimbatore, website designers in Coimbatore, web design agency in Coimbatore, business website design Coimbatore, affordable website design Coimbatore, custom website development Coimbatore, ecommerce website design Coimbatore, small business website design Coimbatore, website design packages"
      canonical="/web-design"
      breadcrumbs={[{ name: "Web Design", path: "/web-design" }]}
      schema={[
        serviceSchema({
          name: "Website Design & Development",
          description:
            "Website design and development services for businesses in Coimbatore and across India, covering portfolio, business, e-commerce, SaaS and landing page websites built to generate enquiries.",
          serviceType: "Website design and development",
          path: "/web-design",
          offers: [
            { name: "Portfolio Website", price: "7999" },
            { name: "Business Website", price: "11999" },
            { name: "E-commerce Website", price: "19999" },
          ],
        }),
        faqSchema(serviceFaqs),
      ]}
    />
    <PageBanner
      image={PAGE_BANNERS.website}
      title="Website Design in Coimbatore"
      subtitle="Portfolio, business, e-commerce, SaaS and landing page websites - designed for businesses in Coimbatore and across India to turn visitors into enquiries."
      badge="Web Design & Development"
    />

    {/* Website types */}
    <section className="bg-blue-50/80 py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">Website Types We Build</p>
            <h2 className="mb-4 text-foreground">What kind of website do you need?</h2>
            <p className="text-muted">Pick the closest match, or tell us your goals and we'll recommend the right one.</p>
          </div>
        </FadeInView>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {websiteTypes.map((t, i) => (
            <FadeInView key={t.title} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-medical ring-1 ring-primary/10 transition-shadow hover:shadow-medical-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <t.icon size={21} className="text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{t.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{t.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    {/* Packages */}
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">Website Packages</p>
            <h2 className="mb-4 text-foreground">Three packages, transparent starting prices</h2>
            <p className="text-muted">
              Final quote is confirmed after a free consultation - based on your pages, features and content.
            </p>
          </div>
        </FadeInView>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <FadeInView key={pkg.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-2xl p-6 sm:p-7 ${
                  pkg.featured
                    ? "bg-primary text-white shadow-lg ring-2 ring-primary"
                    : "bg-card shadow-medical ring-1 ring-primary/10"
                }`}
              >
                {pkg.featured && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    <Star size={12} /> Most Popular
                  </span>
                )}

                <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${pkg.featured ? "text-white/70" : "text-primary"}`}>
                  {pkg.name}
                </p>
                <h3 className={`mt-1 text-xl font-bold ${pkg.featured ? "text-white" : "text-foreground"}`}>{pkg.tag}</h3>
                <p className={`mt-2 text-sm ${pkg.featured ? "text-white/80" : "text-muted"}`}>{pkg.summary}</p>

                <div className={`mt-5 flex items-end gap-1.5 border-b pb-5 ${pkg.featured ? "border-white/20" : "border-border"}`}>
                  <span className={`text-3xl font-extrabold ${pkg.featured ? "text-white" : "text-foreground"}`}>{pkg.price}</span>
                  <span className={`pb-1 text-sm ${pkg.featured ? "text-white/70" : "text-muted"}`}>{pkg.period}</span>
                </div>

                <ul className="mt-5 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex gap-2.5 text-sm ${pkg.featured ? "text-white/90" : "text-muted"}`}>
                      <Check size={16} className={`mt-0.5 shrink-0 ${pkg.featured ? "text-white" : "text-primary"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#get-quote"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold transition-all duration-200 ${
                    pkg.featured
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-primary-foreground hover:brightness-110"
                  }`}
                >
                  Get This Package <ArrowRight size={16} />
                </a>
              </div>
            </FadeInView>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
          Need a custom build, SaaS platform or multi-location website?{" "}
          <Link to="/contact" className="font-medium text-primary hover:underline">
            Talk to us
          </Link>{" "}
          for a tailored quote.
        </p>
      </div>
    </section>

    {/* Approach */}
    <section className="bg-blue-50/80 py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <FadeInView>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">Built for Results</p>
            <h2 className="mb-5 text-foreground">Websites engineered to bring you business</h2>
            <p className="mb-4 leading-relaxed text-muted">
              A great-looking website is only the start. We design every page around your customers, your keywords and your goals - so your website becomes your best salesperson, bringing you more enquiries, more calls and more confirmed bookings for your business in Coimbatore and beyond.
            </p>
            <p className="mb-6 leading-relaxed text-muted">
              Fast loading, mobile-first and search-ready from day one, because speed and usability directly affect how many visitors turn into enquiries.
            </p>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-muted">
                  <Check size={16} className="shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInView>
          <FadeInView delay={0.15}>
            <div className="overflow-hidden rounded-2xl shadow-medical-lg">
              <img src={ourWorkImage} alt="Website design work by Zyra Digitals in Coimbatore" loading="lazy" className="h-[300px] w-full object-cover" />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>

    <HomeFAQ serviceFaqs={true} />

    {/* Lead generation form */}
    <LeadForm
      title="Get Your Free Website Quote"
      subtitle="Tell us about your business and we'll send a free website audit plus a custom proposal - guaranteed within 1 hour. Packages start from ₹7,999."
      buttonText="Request My Free Quote"
      defaultService="Website Design"
    />

    <CTASection subtitle="Ready for a website that brings you more enquiries and confirmed bookings? Get your free quote today." />
  </div>
);

export default WebDesign;
