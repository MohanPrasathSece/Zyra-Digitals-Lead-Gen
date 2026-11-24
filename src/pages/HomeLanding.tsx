import { Link } from "react-router-dom";
import { ArrowRight, Brush, Check, CheckCircle2, Code2, Search, Star } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import ClientLogos from "@/components/ClientLogos";
import GoogleReviews from "@/components/GoogleReviews";
import HeroShowcase from "@/components/HeroShowcase";
import HomeFAQ, { generalFaqs } from "@/components/HomeFAQ";
import LeadForm from "@/components/LeadForm";
import ProjectCard from "@/components/ProjectCard";
import SEO from "@/components/SEO";
import { faqSchema } from "@/lib/schema";
import { PROJECTS } from "@/lib/projects";

const services = [
  {
    icon: Code2,
    title: "Website Design & Development",
    description:
      "Get a professional, mobile-friendly website built to turn visitors into paying customers, more enquiries and more confirmed bookings.",
    to: "/web-design",
    action: "Explore Website Development",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Appear on Google when customers search for what you sell to generate steady organic enquiries and qualified business leads.",
    to: "/seo",
    action: "Explore SEO Services",
  },
  {
    icon: Brush,
    title: "Branding & Logo Design",
    description:
      "Give your business a credible, professional identity with memorable logo design, distinct brand colours and trusted visual styling.",
    to: "/branding",
    action: "Explore Branding Packages",
  },
];

const websitePackages = [
  {
    name: "Professional",
    tag: "Professional Website",
    price: "₹7,999",
    period: "onwards",
    summary: "For professionals, doctors, clinics and growing personal brands",
    features: [
      "Up to 5 pages",
      "Custom, mobile-first design",
      "Unlimited revisions till delivery",
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
    summary: "For service businesses that want more leads & enquiries",
    features: [
      "Up to 12 pages",
      "Conversion-focused layouts",
      "Unlimited revisions till delivery",
      "Service pages + landing pages",
      "Blog & content setup",
      "Full on-page SEO & schema",
      "Google Analytics & lead tracking",
      "1 month free support",
    ],
    featured: true,
  },
  {
    name: "Corporate",
    tag: "Corporate Website",
    price: "₹19,999",
    period: "onwards",
    summary: "For established businesses, corporate firms & online stores",
    features: [
      "Unlimited products & categories",
      "Secure payment gateway",
      "Unlimited revisions till delivery",
      "Cart, checkout & order emails",
      "Product SEO & fast loading",
      "Shipping & tax configuration",
      "2 months free support",
    ],
    featured: false,
  },
];

const whyPoints = [
  {
    title: "Affordable Pricing",
    desc: "Transparent rates with zero hidden charges",
  },
  {
    title: "Creative Designs",
    desc: "Custom modern designs built to convert visitors",
  },
  {
    title: "On-Time Delivery",
    desc: "Fast turnarounds with clear project milestones",
  },
  {
    title: "Quality Work",
    desc: "Clean, modern code — no slow or rigid templates",
  },
  {
    title: "Client Satisfaction",
    desc: "Unlimited revisions till delivery for all websites",
  },
  {
    title: "Reliable Support",
    desc: "Direct founder communication & ongoing care",
  },
];

const HomeLanding = () => (
  <div>
    <SEO
      title="Web Design, SEO & Branding Agency in Coimbatore"
      description="Zyra Digitals helps businesses grow online with professional website design and development, SEO and branding. Based in Coimbatore and working 100% online with clients worldwide."
      keywords="web design company Coimbatore, website development, SEO agency, branding agency, business website design, local SEO, lead generation website, digital agency Tamil Nadu"
      canonical="/"
      schema={[faqSchema(generalFaqs)]}
    />

    {/* Hero */}
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_22%,rgba(96,165,250,0.35),transparent_38%)]" />
      <div className="absolute -right-28 bottom-[-16rem] h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div className="absolute -right-12 bottom-[-12rem] h-[26rem] w-[26rem] rounded-full border border-white/10" />
      <div className="container relative z-10 mx-auto px-5 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <FadeInView>
            <div className="max-w-3xl text-white">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200 sm:text-sm">
                Website Design, SEO &amp; Branding Agency in Coimbatore
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl xl:text-6xl">
                Get More Customers and Enquiries With a Better Website.
              </h1>
              <p className="mb-8 text-base text-blue-100 sm:text-lg sm:leading-8">
                Zyra Digitals builds custom websites and runs targeted SEO campaigns that turn
                visitors into paying clients. Based in Coimbatore, working 100% online with
                businesses across India and internationally.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#get-quote"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3.5 font-semibold text-blue-900 transition-all duration-200 hover:bg-sky-50 active:scale-95 sm:w-auto"
                >
                  Get a Free Quote
                </a>
                <Link
                  to="/our-work"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-white/35 px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
                >
                  View Our Work
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium text-sky-200">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Starts from ₹7,999
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Unlimited revisions till delivery
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 1-Hour Guaranteed Reply
                </span>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="mt-4 lg:mt-0">
              <HeroShowcase />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">What Can We Help You With?</h2>
            <p className="text-muted text-base sm:text-lg">
              Everything your business needs to build a strong online presence.
            </p>
          </div>
        </FadeInView>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <FadeInView key={service.title} delay={index * 0.1}>
              <article className="h-full rounded-2xl bg-card p-6 sm:p-8 shadow-medical ring-1 ring-primary/10 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 sm:min-h-[3.25rem] flex items-start">{service.title}</h3>
                <p className="text-muted leading-relaxed flex-1">{service.description}</p>
                <Link
                  to={service.to}
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:gap-3 transition-all"
                >
                  {service.action} <ArrowRight size={17} />
                </Link>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    {/* Section 3: Client Logos */}
    <ClientLogos />

    {/* Website Packages (Replaces old Industries section) */}
    <section className="bg-blue-50/80 py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
              Website Packages &amp; Pricing
            </p>
            <h2 className="mb-4 text-foreground">Three Packages, Transparent Starting Prices</h2>
            <p className="text-muted text-base sm:text-lg">
              Every website is mobile-first, ultra-fast, and built to turn visitors into confirmed client enquiries.
            </p>
          </div>
        </FadeInView>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {websitePackages.map((pkg, i) => (
            <FadeInView key={pkg.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-2xl p-6 sm:p-7 ${pkg.featured
                    ? "bg-primary text-white shadow-xl ring-2 ring-primary"
                    : "bg-card shadow-medical ring-1 ring-primary/10"
                  }`}
              >
                {pkg.featured && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    <Star size={12} /> Most Popular
                  </span>
                )}

                <p
                  className={`text-sm font-semibold uppercase tracking-[0.14em] ${pkg.featured ? "text-white/80" : "text-primary"
                    }`}
                >
                  {pkg.name}
                </p>
                <h3
                  className={`mt-1 text-xl font-bold ${pkg.featured ? "text-white" : "text-foreground"
                    }`}
                >
                  {pkg.tag}
                </h3>
                <p className={`mt-2 text-sm ${pkg.featured ? "text-white/85" : "text-muted"}`}>
                  {pkg.summary}
                </p>

                <div
                  className={`mt-5 flex items-end gap-1.5 border-b pb-5 ${pkg.featured ? "border-white/20" : "border-border"
                    }`}
                >
                  <span
                    className={`text-3xl font-extrabold ${pkg.featured ? "text-white" : "text-foreground"
                      }`}
                  >
                    {pkg.price}
                  </span>
                  <span className={`pb-1 text-sm ${pkg.featured ? "text-white/70" : "text-muted"}`}>
                    {pkg.period}
                  </span>
                </div>

                <ul className="mt-5 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex gap-2.5 text-sm ${pkg.featured ? "text-white/95" : "text-muted"
                        }`}
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${pkg.featured ? "text-white" : "text-primary"
                          }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#get-quote"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold transition-all duration-200 active:scale-95 ${pkg.featured
                      ? "bg-white text-primary hover:bg-white/90 shadow-sm"
                      : "bg-primary text-primary-foreground hover:brightness-110 shadow-sm"
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
          <Link to="/contact" className="font-semibold text-primary hover:underline">
            Talk to us
          </Link>{" "}
          for a tailored proposal within 1 hour.
        </p>
      </div>
    </section>

    {/* Our Work */}
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">Dental &amp; Healthcare Website Projects</h2>
            <p className="text-muted text-base sm:text-lg">
              Recent website projects for dental clinics, healthcare practices and growing
              businesses, designed and developed by Zyra Digitals.
            </p>
          </div>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((project) => (
            <FadeInView key={project.name}>
              <ProjectCard project={project} />
            </FadeInView>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/our-work"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-white px-7 py-3.5 font-semibold text-primary transition-all duration-200 hover:bg-primary/5 active:scale-95"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Why Zyra Digitals */}
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#183ec2] via-[#1434a4] to-[#0f257a]">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight">
              Why Work With Us?
            </h2>
          </div>
        </FadeInView>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {whyPoints.map((item, index) => (
            <FadeInView key={item.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full items-center gap-3.5 sm:gap-4 rounded-2xl bg-white/[0.08] px-5 sm:px-6 py-4 sm:py-5 border border-white/[0.08] backdrop-blur-xs transition-all duration-200 hover:bg-white/[0.12] hover:border-white/15">
                <CheckCircle2 size={22} className="shrink-0 text-white/90" strokeWidth={1.5} />
                <p className="text-[15px] sm:text-base font-normal text-white/95 leading-snug">
                  <span className="font-semibold text-white">{item.title}</span> – {item.desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    <GoogleReviews />

    <HomeFAQ />

    {/* Primary lead form: keep this as the final homepage section */}
    <LeadForm
      title="Let's Talk About Your Business."
      subtitle="Looking for a new website, better Google rankings or a professional brand identity? Tell us what you need. We'll get back to you - guaranteed within 1 hour - with clear next steps to bring you more enquiries and confirmed bookings."
      buttonText="Get My Free Quote"
    />
  </div>
);

export default HomeLanding;
