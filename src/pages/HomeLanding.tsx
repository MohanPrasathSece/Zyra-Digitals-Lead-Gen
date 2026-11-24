import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Brush, CheckCircle2, Code2, Search } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import ClientLogos from "@/components/ClientLogos";
import GoogleReviews from "@/components/GoogleReviews";
import HeroShowcase from "@/components/HeroShowcase";
import HomeFAQ, { generalFaqs } from "@/components/HomeFAQ";
import LeadForm from "@/components/LeadForm";
import ProjectCard from "@/components/ProjectCard";
import SEO from "@/components/SEO";
import { faqSchema } from "@/lib/schema";
import { INDUSTRIES } from "@/lib/site";
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
    to: "/logo-design",
    action: "Explore Branding Design",
  },
];

const industryCopy: Record<string, string> = {
  "dental-clinics":
    "Websites and SEO that help dental clinics reach more patients and confirm more appointments.",
  "interior-designers":
    "Portfolio websites that showcase your projects and bring a steady stream of design enquiries.",
  "real-estate":
    "Property websites that showcase listings and capture serious, ready-to-buy enquiries.",
  "solar-companies":
    "Websites and SEO that generate qualified solar quote requests and installation bookings.",
};

const whyPoints = [
  "100+ websites designed and delivered.",
  "Websites built to turn visitors into enquiries.",
  "Mobile-first websites with performance considered from day one.",
  "Guaranteed replies within 1 hour.",
  "Website and SEO services under one roof.",
  "Support even after your website goes live.",
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
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                We design high-converting business websites, rank you on Google with SEO, and build brands that bring you more calls, enquiries and confirmed bookings.
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

    {/* Industries */}
    <section className="py-16 sm:py-20 bg-blue-50/80">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">We Help Businesses Grow Online</h2>
            <p className="text-muted text-base sm:text-lg">
              We create websites and SEO that bring different types of businesses more enquiries and bookings.
            </p>
          </div>
        </FadeInView>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {INDUSTRIES.slice(0, 4).map((industry, index) => (
            <FadeInView key={industry.slug} delay={index * 0.1}>
              <Link
                to={`/industries/${industry.slug}`}
                className="group flex h-full flex-col rounded-2xl bg-card p-6 sm:p-7 shadow-medical ring-1 ring-primary/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-medical-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted transition-colors group-hover:text-primary"
                  />
                </div>
                <p className="text-muted leading-relaxed mt-3 flex-1">
                  {industryCopy[industry.slug]}
                </p>
              </Link>
            </FadeInView>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-95"
          >
            Discuss Your Business <ArrowRight size={18} />
          </Link>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
          >
            View all industries <ArrowRight size={18} />
          </Link>
        </div>
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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-950 to-blue-700">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-white">Why Work With Us?</h2>
          </div>
        </FadeInView>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {whyPoints.map((point, index) => (
            <FadeInView key={point} delay={index * 0.06} className="h-full">
              <div className="flex h-full items-center gap-3 rounded-xl bg-white/10 p-4 sm:p-5 ring-1 ring-white/15">
                <CheckCircle2 size={20} className="shrink-0 text-sky-200" />
                <p className="text-sm font-medium text-white sm:text-base">{point}</p>
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
