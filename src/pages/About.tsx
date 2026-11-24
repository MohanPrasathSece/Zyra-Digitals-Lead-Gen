import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Handshake, MapPin, Search, Sparkles } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/site";
import { PAGE_BANNERS } from "@/lib/banners";
import storyImage from "@/assets/zyra/hero-1.webp";
import founderPhoto from "@/assets/founder-image.webp";

const capabilities = [
  {
    icon: Sparkles,
    title: "Website Design & Development",
    desc: "Fast, mobile-first websites built around what your customers actually search for and need.",
    to: "/web-design",
  },
  {
    icon: Search,
    title: "SEO Services",
    desc: "Technical, on-page and local SEO that helps your business get found on Google.",
    to: "/seo",
  },
  {
    icon: Handshake,
    title: "Branding & Logo Design",
    desc: "Logos, colours and brand assets that make your business look credible and memorable.",
    to: "/web-design",
  },
];

const principles = [
  {
    title: "Affordable Pricing",
    desc: "Fixed starting packages from ₹7,999 with zero hidden charges or unexpected agency markups.",
  },
  {
    title: "Creative Designs",
    desc: "Custom UI layouts designed around your brand's unique positioning and conversion goals.",
  },
  {
    title: "On-Time Delivery",
    desc: "Strict project milestones, rapid execution, and clear communication from day one.",
  },
  {
    title: "Quality Work",
    desc: "Modern, clean codebase built for lightning speed, mobile perfection, and Google search rankings.",
  },
  {
    title: "Client Satisfaction",
    desc: "Unlimited revisions till delivery on all websites until you are completely thrilled with the result.",
  },
  {
    title: "Reliable Support",
    desc: "Direct communication with the founder and prompt technical guidance even after your site is live.",
  },
];

const About = () => (
  <div>
    <SEO
      title="About Zyra Digitals | Website Design & SEO Agency in Coimbatore"
      description="Zyra Digitals is a creative digital agency in Coimbatore founded by Mohan Prasath S. We design and develop websites, run SEO and build brands for businesses across India."
      keywords="about Zyra Digitals, website design agency Coimbatore, web design company Coimbatore, Mohan Prasath founder, digital agency Tamil Nadu"
      canonical="/about"
      breadcrumbs={[{ name: "About", path: "/about" }]}
    />
    <PageBanner
      image={PAGE_BANNERS.work}
      title="About Zyra Digitals"
      subtitle="A creative digital agency in Coimbatore, helping businesses win more customers online."
      badge="Who We Are"
    />

    {/* Who we are */}
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <FadeInView>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">Our Story</p>
            <h2 className="mb-5 text-foreground">Built to help local businesses grow online</h2>
            <p className="mb-4 leading-relaxed text-muted">
              Zyra Digitals is a creative digital agency based in {SITE.city}, Tamil Nadu. We design and build
              websites, improve Google visibility and create brands for small and medium businesses,
              professional service providers and startups.
            </p>
            <p className="mb-4 leading-relaxed text-muted">
              We have designed and delivered 100+ responsive websites. Every project is handled
              personally from first conversation to launch, so nothing gets lost between teams.
            </p>
            <p className="leading-relaxed text-muted">
              We work 100% online, which means we can support businesses in Coimbatore and across India
              through simple, direct communication.
            </p>
          </FadeInView>
          <FadeInView delay={0.15}>
            <div className="overflow-hidden rounded-2xl shadow-medical-lg">
              <img
                src={storyImage}
                alt="Zyra Digitals website design studio"
                loading="lazy"
                className="h-[320px] w-full object-cover"
              />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>

    {/* Founder */}
    <section id="founder" className="py-16 sm:py-20 bg-blue-50/80">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-10 sm:gap-14 lg:grid-cols-[340px_1fr]">
          <FadeInView>
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-medical-lg ring-1 ring-slate-200/80 bg-white group">
              <img
                src={founderPhoto}
                alt={`${SITE.founderName} - Founder of Zyra Digitals`}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-base font-bold text-white drop-shadow-sm">{SITE.founderName}</p>
                <p className="text-xs text-sky-200 font-medium">Founder &amp; Principal Web Architect</p>
              </div>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">Founder</p>
            <h2 className="mb-2 text-foreground">{SITE.founderName}</h2>
            <p className="mb-5 font-semibold text-primary">Founder &amp; Lead Web Developer, Zyra Digitals</p>
            <p className="mb-4 leading-relaxed text-muted">
              Zyra Digitals was founded by {SITE.founderName} to give businesses in Coimbatore and across India access to
              high-calibre website design, custom software engineering, and Google SEO without agency overheads or confusing communication.
            </p>
            <p className="leading-relaxed text-muted">
              He works directly with every client from day one—architecting high-converting layouts, writing clean modern code, ensuring sub-second performance, and positioning your business to win organic enquiries on Google.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground">
              <MapPin size={16} className="text-primary" />
              {SITE.location}
            </p>
          </FadeInView>
        </div>
      </div>
    </section>

    {/* What we do */}
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">What We Do</p>
            <h2 className="mb-4 text-foreground">Three services, one goal: more customers</h2>
          </div>
        </FadeInView>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {capabilities.map((cap, i) => (
            <FadeInView key={cap.title} delay={i * 0.1}>
              <Link
                to={cap.to}
                className="group flex h-full flex-col rounded-2xl bg-card p-6 shadow-medical ring-1 ring-primary/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-medical-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <cap.icon size={22} className="text-primary" />
                </div>
                <h3 className="mb-3 font-semibold text-foreground">{cap.title}</h3>
                <p className="flex-1 leading-relaxed text-muted">{cap.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
                  Learn more <ArrowRight size={17} />
                </span>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    {/* How we work */}
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">Why Work With Us</p>
            <h2 className="mb-4 text-foreground">Our 6 Core Commitments to Every Client</h2>
            <p className="text-muted text-sm sm:text-base">Built to give your business high-calibre digital execution without agency overheads.</p>
          </div>
        </FadeInView>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((point, i) => (
            <FadeInView key={point.title} delay={i * 0.06}>
              <div className="flex flex-col h-full rounded-2xl bg-blue-50/70 p-5 sm:p-6 ring-1 ring-primary/10 transition-shadow hover:shadow-medical">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-primary" />
                  <h3 className="font-bold text-foreground text-base sm:text-lg">{point.title}</h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-muted flex-1">{point.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    <LeadForm
      title="Tell Us About Your Business."
      subtitle="Whether you need a new website, better Google rankings or a brand identity, we'll get back to you - guaranteed within 1 hour - with clear next steps to bring you more enquiries, calls and confirmed bookings."
      buttonText="Get My Free Quote"
    />

    <CTASection subtitle="Prefer to see the work first? Browse the websites we've designed to bring businesses more enquiries." buttonText="View Our Work" to="/our-work" />
  </div>
);

export default About;
