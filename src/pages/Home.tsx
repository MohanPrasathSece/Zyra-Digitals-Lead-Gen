import { Link } from "react-router-dom";
import { Palette, TrendingUp, Search, Rocket, CheckCircle2, BarChart3, Users } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import HomeFAQ from "@/components/HomeFAQ";
import GoogleReviews from "@/components/GoogleReviews";
import LeadForm from "@/components/LeadForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEO from "@/components/SEO";

import hero1 from "@/assets/zyra/hero-1.webp";
import aboutImage from "@/assets/zyra/banner-web-design.webp";
import technologyImage from "@/assets/zyra/our-work.webp";
import bannerHome from "@/assets/zyra/banner-home.webp";
import fullscreenCta from "@/assets/zyra/seo.webp";

const features = [
  { icon: Palette, title: "Conversion-First Design", desc: "Websites built to turn visitors into enquiries, calls and customers - not just to look pretty." },
  { icon: Search, title: "SEO That Ranks", desc: "On-page, technical and local SEO so the right customers find you on Google." },
  { icon: TrendingUp, title: "Built for Lead Generation", desc: "Clear calls-to-action, fast pages and forms placed where visitors actually convert." },
  { icon: Rocket, title: "Fast & Reliable Delivery", desc: "Mobile-friendly, lightning-fast websites launched on time and ready to grow." },
];

const processSteps = [
  { icon: Search, title: "Free Audit", desc: "We review your current website and Google presence to find exactly what's holding you back." },
  { icon: Palette, title: "Design & Build", desc: "We design a fast, mobile-friendly website focused on generating enquiries for your business." },
  { icon: BarChart3, title: "SEO & Launch", desc: "We optimise every page for search engines, then launch and track your performance." },
  { icon: Users, title: "Grow & Support", desc: "We keep improving your site and rankings so your leads keep growing month after month." },
];

const Home = () => {
  return (
    <div>
      <SEO
        title="Web Design, SEO & Branding Agency in Coimbatore"
        description="Zyra Digitals is a web design, SEO and branding agency based in Coimbatore. We build high-converting websites and rank them on Google to generate more leads for your business. Working 100% online - serving clients worldwide."
        keywords="web design company Coimbatore, website development Coimbatore, SEO agency Coimbatore, branding agency Coimbatore, web design agency, website designer near me, SEO services Coimbatore, lead generation website, small business website design, WordPress website development, local SEO Coimbatore, digital agency Tamil Nadu"
        canonical="/"
      />
      {/* Hero */}
      <section className="relative min-h-screen lg:h-screen overflow-hidden flex items-center justify-center" style={{backgroundImage: `url(${hero1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="container mx-auto px-6 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInView>
              <div className="text-white relative z-10">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Welcome to Zyra Digitals</p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
                  Websites that win you more customers.
                </h1>
                <p className="text-base text-white/90 leading-relaxed max-w-prose mb-8">
                  Zyra Digitals designs high-converting websites, ranks them on Google with SEO, and builds brands people remember. Everything you need to grow your business online - in one place.
                </p>
                <p className="text-sm text-white/80 leading-relaxed max-w-prose mb-8">
                  Based in Coimbatore, working 100% online - proudly serving clients worldwide.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#get-quote"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-95 transition-all duration-200"
                  >
                    Get a Free Quote
                  </a>
                  <Link
                    to="/web-design"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/80 transition-colors duration-200"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <FadeInView>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-gray-900 mb-4">Why businesses choose Zyra Digitals</h2>
              <p className="text-gray-600 text-base sm:text-lg">
                We're a web design, SEO and branding agency focused on one thing - helping you get more customers online.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-card shadow-medical flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{f.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* About with image */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div className="rounded-2xl overflow-hidden shadow-medical-lg">
                <img src={aboutImage} alt="Zyra Digitals designing a high-converting website" className="w-full h-[360px] object-cover" />
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div>
                <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
                <h2 className="text-gray-900 mb-6">Our Mission</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  At Zyra Digitals, we believe a website should be your hardest-working salesperson. We combine beautiful design, smart SEO and clear calls-to-action so your business doesn't just look good online - it generates real enquiries, every single day.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  From our first conversation to launch and beyond, we keep things simple, transparent and focused on results. Whether you're a clinic, an interior designer, a real estate firm or a solar company, we build the online presence that brings you customers.
                </p>
                <Link
                  to="/our-work"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/80 transition-colors duration-200"
                >
                  See our work
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <CTASection
        title="Web design, SEO & branding - done right"
        subtitle="Everything you need to attract, convert and keep customers online. Explore our services and see how we can grow your business."
        buttonText="View Our Services"
        to="/web-design"
        image={fullscreenCta}
      />

      {/* Approach */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">Our Approach</p>
              <h2 className="text-foreground mb-6">Designed to convert, built to rank</h2>
              <p className="text-base text-muted leading-relaxed mb-6">
                We don't just make websites that look nice - we build digital assets that bring you business. Every page is crafted around your customers, your keywords and your goals.
              </p>
              <ul className="space-y-3 text-base text-muted mb-8">
                {["Mobile-first, lightning-fast pages", "SEO built into every page from day one", "Lead forms and CTAs placed to convert"].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/seo"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-colors duration-200"
              >
                Explore our SEO
              </Link>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-medical-lg">
                <img src={technologyImage} alt="Zyra Digitals portfolio of websites built for lead generation" className="w-full h-[360px] object-cover" />
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeInView>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { num: "100+", label: "Websites delivered" },
                { num: "1 hour", label: "Guaranteed reply" },
                { num: "100%", label: "Online project delivery" },
                { num: "Mobile-first", label: "Website approach" },
              ].map(s => (
                <div key={s.label} className="p-8 rounded-2xl bg-card shadow-medical text-center">
                  <p className="text-3xl font-bold text-primary font-mono">
                    <AnimatedCounter end={s.num} duration={2000} />
                  </p>
                  <p className="text-sm text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <GoogleReviews />

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeInView>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How We Work</p>
              <h2 className="text-foreground mb-4">Simple process, real results</h2>
              <p className="text-muted">We work 100% online - so it doesn't matter where you are in the world, we can get your business growing.</p>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-card shadow-medical h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <s.icon size={24} className="text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary/20 font-mono">0{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{s.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <HomeFAQ />

      {/* Lead generation form */}
      <LeadForm />

      {/* Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <img src={bannerHome} alt="Zyra Digitals - web design and SEO agency" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <FadeInView>
            <h2 className="text-white mb-4">Ready to grow online?</h2>
            <p className="text-white/90 text-base sm:text-lg max-w-lg mx-auto mb-6">
              Get a free website and SEO audit - no obligation, no pressure.
            </p>
            <a
              href="#get-quote"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-white text-primary font-semibold text-base sm:text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              Get a Free Quote
            </a>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default Home;
