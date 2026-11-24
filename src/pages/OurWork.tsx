import { useState } from "react";
import { Link } from "react-router-dom";
import CTASection from "@/components/CTASection";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import LeadForm from "@/components/LeadForm";
import ProjectCard from "@/components/ProjectCard";
import SEO from "@/components/SEO";
import { PAGE_BANNERS } from "@/lib/banners";
import {
  PROJECTS,
  PROJECT_CATEGORY_LABELS,
  type ProjectCategory,
} from "@/lib/projects";
import {
  TrendingUp,
  Target,
  Smile,
  ExternalLink,
  ArrowRight,
  Sparkles,
  BadgePercent,
  Palette,
  Clock,
  ShieldCheck,
  ThumbsUp,
  Headphones,
} from "lucide-react";

const CATEGORY_ORDER: ProjectCategory[] = ["Dental", "Healthcare", "Ecommerce", "Business"];

const CATEGORY_BLURBS: Record<ProjectCategory, string> = {
  Dental: "Website projects for dental clinics, specialist practices and dental training providers.",
  Healthcare: "Website projects for clinics and healthcare practices.",
  Ecommerce: "E-commerce and online shopping websites with product catalogues, payment gateways and cart flows.",
  Business: "Website projects for professional services, manufacturing, tech and other businesses.",
};

const OurWork = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const displayedProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <div>
      <SEO
        title="Our Work - Website Design Portfolio for Dental, Healthcare, E-Commerce & Business"
        description="Completed website design projects by Zyra Digitals, including dental clinics, healthcare practices, e-commerce stores, finance and business websites."
        keywords="web design portfolio, dental website design, healthcare website design, ecommerce website design, business website portfolio, web design agency work, Zyra Digitals portfolio"
        canonical="/our-work"
        breadcrumbs={[{ name: "Our Work", path: "/our-work" }]}
      />
      <PageBanner
        image={PAGE_BANNERS.work}
        title="Selected Works & Website Portfolio"
        subtitle="Explore our selected website design projects across dental clinics, healthcare practices, e-commerce stores, and high-growth businesses."
        badge="Selected Portfolio"
      />

      {/* Projects Gallery */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6">
          <FadeInView>
            <div className="text-center mb-12">
              <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">Selected Portfolio</p>
              <h2 className="text-foreground mb-4">Selected Works &amp; Website Projects</h2>
              <p className="text-base text-muted max-w-2xl mx-auto">
                Explore our selected works and client websites across dental clinics, medical healthcare, e-commerce brands, marketing platforms, and enterprise business solutions.
              </p>

              {/* Category Filter Tabs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {["All", ...CATEGORY_ORDER].map((cat) => {
                  const count =
                    cat === "All"
                      ? PROJECTS.length
                      : PROJECTS.filter((p) => p.category === cat).length;
                  const label =
                    cat === "All"
                      ? "All Projects"
                      : PROJECT_CATEGORY_LABELS[cat as ProjectCategory];
                  const isActive = selectedCategory === cat;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-primary text-white shadow-md shadow-primary/25"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {label} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeInView>

          {/* Continuous Projects Grid - No separate sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <FadeInView key={project.name}>
                <ProjectCard project={project} showFeatures />
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-5 sm:px-6">
          <FadeInView>
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">Why Work With Us</p>
              <h2 className="text-foreground mb-4">What Drives Every Project We Build</h2>
              <p className="text-muted text-base max-w-2xl mx-auto mb-10">
                We combine creative craft with dependable engineering so your website turns clicks into long-term clients.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {[
                  {
                    icon: BadgePercent,
                    title: "Affordable Pricing",
                    desc: "Clear upfront quotes starting from ₹7,999 with zero hidden fees and full cost transparency.",
                  },
                  {
                    icon: Palette,
                    title: "Creative Designs",
                    desc: "Custom, modern UI/UX layouts tailored around your brand identity to convert visitors into enquiries.",
                  },
                  {
                    icon: Clock,
                    title: "On-Time Delivery",
                    desc: "Disciplined milestone schedules and rapid execution so your website launches without delays.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Quality Work",
                    desc: "High-performance code built for lightning load times, responsive perfection, and built-in Google SEO.",
                  },
                  {
                    icon: ThumbsUp,
                    title: "Client Satisfaction",
                    desc: "Unlimited revisions till delivery on all websites until you are completely confident in the result.",
                  },
                  {
                    icon: Headphones,
                    title: "Reliable Support",
                    desc: "Direct communication with the founder, guaranteed 1-hour replies, and ongoing care after launch.",
                  },
                ].map((value) => (
                  <FadeInView key={value.title}>
                    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs ring-1 ring-slate-200/80 h-full flex flex-col hover:shadow-md transition-shadow">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                        <value.icon size={22} />
                      </div>
                      <h3 className="font-bold text-foreground mb-2 text-base sm:text-lg">{value.title}</h3>
                      <p className="text-muted text-xs sm:text-sm leading-relaxed flex-1">{value.desc}</p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Lead generation form */}
      <LeadForm
        title="Planning a website for your business?"
        subtitle="Tell us what you need and we will discuss a clear scope, timeline and quote."
        buttonText="Request My Free Quote"
        badge="Start Your Project"
      />

      <CTASection
        title="Need a website for your business?"
        subtitle="Get a free website audit and a proposal based on your goals."
        buttonText="Get a Free Quote"
        to="/contact"
      />
    </div>
  );
};

export default OurWork;
