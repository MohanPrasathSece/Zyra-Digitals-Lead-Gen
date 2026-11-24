import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, MapPin, Search, Star, TrendingUp } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import HomeFAQ, { serviceFaqs } from "@/components/HomeFAQ";
import LeadForm from "@/components/LeadForm";
import SEO from "@/components/SEO";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { PAGE_BANNERS } from "@/lib/banners";

const highlightStats = [
  { icon: TrendingUp, value: "Ongoing", label: "SEO improvements" },
  { icon: Search, value: "30+", label: "Keywords in Authority plan" },
  { icon: Clock, value: "Monthly", label: "Transparent reporting" },
  { icon: MapPin, value: "Local", label: "City + Google Maps focus" },
];

const packages = [
  {
    name: "Starter",
    tag: "Local SEO",
    price: "₹2,999",
    period: "/month",
    summary: "Get found in your city",
    features: [
      "Google Business Profile setup & optimisation",
      "Local keyword research",
      "On-page SEO for up to 5 pages",
      "Mobile & page-speed optimisation",
      "Monthly ranking & traffic report",
      "Email + WhatsApp support",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growth",
    tag: "Complete SEO",
    price: "₹5,999",
    period: "/month",
    summary: "Rank across your full service list",
    features: [
      "Everything in Starter",
      "15 target keywords tracked",
      "Technical SEO fixes & schema markup",
      "Content & blog optimisation",
      "Google Maps & review management",
      "Competitor & market tracking",
      "Bi-weekly progress reports",
    ],
    cta: "Start with Growth",
    featured: true,
  },
  {
    name: "Authority",
    tag: "SEO + Lead Tracking",
    price: "₹9,999",
    period: "/month",
    summary: "Broader SEO with conversion tracking",
    features: [
      "Everything in Growth",
      "30+ target keywords tracked",
      "Link building & authority growth",
      "High-converting landing pages",
      "Conversion and call tracking setup",
      "Conversion tracking & call insights",
      "Dedicated manager + weekly reports",
    ],
    cta: "Start with Authority",
    featured: false,
  },
];

const seoProcess = [
  {
    step: "01",
    title: "Audit & strategy",
    text: "We audit your website, Google Business Profile and competitors to find exactly where your enquiries are being lost.",
  },
  {
    step: "02",
    title: "On-page & technical SEO",
    text: "Titles, headings, content, internal links, page speed, mobile experience and schema markup are all optimised.",
  },
  {
    step: "03",
    title: "Local SEO & Google Maps",
    text: "We optimise your Google Business Profile, reviews and local landing pages so you show up when nearby customers search.",
  },
  {
    step: "04",
    title: "Content, rankings & leads",
    text: "Ongoing content, authority building and conversion improvements that turn more of your visitors into enquiries - reported every month with clear next steps.",
  },
];

const Seo = () => (
  <div>
    <SEO
      title="SEO Services in Coimbatore | Packages from ₹2,999 - Zyra Digitals"
      description="SEO services from ₹2,999 per month. Three transparent plans - Starter, Growth and Authority - covering local SEO, technical SEO, content and conversion tracking. Working 100% online with clients worldwide."
      keywords="SEO services, SEO packages, SEO price per month, local SEO, technical SEO, on-page SEO, Google ranking, SEO company Coimbatore, keyword research, SEO for small business, Google Business Profile optimisation, SEO retainer India"
      canonical="/seo"
      breadcrumbs={[{ name: "SEO Services", path: "/seo" }]}
      schema={[
        serviceSchema({
          name: "Search Engine Optimisation (SEO)",
          description:
            "SEO services for businesses in Coimbatore and across India, including local SEO, on-page SEO, technical SEO, content optimisation and monthly reporting to improve Google visibility and enquiries.",
          serviceType: "Search engine optimisation",
          path: "/seo",
          offers: [
            { name: "Starter SEO (Local SEO)", price: "2999" },
            { name: "Growth SEO (Complete SEO)", price: "5999" },
            { name: "Authority SEO (SEO + Lead Tracking)", price: "9999" },
          ],
        }),
        faqSchema(serviceFaqs),
      ]}
    />
    <PageBanner
      image={PAGE_BANNERS.seo}
      title={<span className="lg:whitespace-nowrap">SEO Packages Built Around Your Business Goals</span>}
      subtitle="Three clear plans - starting from ₹2,999 per month. Get found on Google by the customers already searching for your business, and turn that visibility into more enquiries and confirmed bookings."
      badge="Search Engine Optimisation"
    />

    {/* Price highlight strip */}
    <section className="bg-gradient-to-br from-blue-950 to-blue-700 py-14">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200 sm:text-sm">Transparent SEO Pricing</p>
            <h2 className="mb-4 text-white">SEO starting from ₹2,999 per month</h2>
            <p className="text-white/85 leading-relaxed">
              No hidden costs and no long lock-ins. Choose a plan below, or tell us your goals and we'll recommend the right one.
            </p>
          </div>
        </FadeInView>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {highlightStats.map((s, i) => (
            <FadeInView key={s.label} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/20">
                <s.icon size={20} className="mx-auto mb-2 text-white" />
                <p className="text-lg font-bold text-white sm:text-xl">{s.value}</p>
                <p className="mt-1 text-xs text-white/75">{s.label}</p>
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">Choose Your Plan</p>
            <h2 className="mb-4 text-foreground">Three SEO packages, built for different goals</h2>
            <p className="text-muted">
              Every plan includes a free audit before we start. Upgrade or downgrade at any time.
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

                <div className={`mt-5 flex items-end gap-1 border-b pb-5 ${pkg.featured ? "border-white/20" : "border-border"}`}>
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
                  {pkg.cta} <ArrowRight size={16} />
                </a>
              </div>
            </FadeInView>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
          Need something bigger, or SEO for multiple locations?{" "}
          <Link to="/contact" className="font-medium text-primary hover:underline">
            Talk to us
          </Link>{" "}
          and we'll build a custom plan.
        </p>
      </div>
    </section>

    {/* How our SEO works */}
    <section className="bg-blue-50/80 py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">How It Works</p>
            <h2 className="mb-4 text-foreground">What we actually do every month</h2>
            <p className="text-muted">The same proven process behind every plan - only the depth changes.</p>
          </div>
        </FadeInView>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {seoProcess.map((s, i) => (
            <FadeInView key={s.step} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-2xl bg-card p-6 shadow-medical ring-1 ring-primary/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {s.step}
                </span>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    <HomeFAQ serviceFaqs={true} />

    {/* Lead generation form */}
    <LeadForm
      title="Get Your Free SEO Audit"
      subtitle="Tell us about your business and we'll review your website and Google presence, then recommend the right plan to bring you more enquiries - reply guaranteed within 1 hour. Plans start from ₹2,999/month."
      buttonText="Request My Free SEO Audit"
      defaultService="SEO"
      badge="Free SEO Audit"
    />

    <CTASection
      title="Not sure which SEO plan fits your business?"
      subtitle="Share your goals and we'll recommend the right package with transparent, guaranteed pricing - no obligation."
      buttonText="Get a Free Quote"
      to="/contact"
    />
  </div>
);

export default Seo;
