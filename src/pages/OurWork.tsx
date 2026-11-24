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
import { TrendingUp, Target, Smile, ExternalLink } from "lucide-react";

const CATEGORY_ORDER: ProjectCategory[] = ["Dental", "Healthcare", "Business"];

const CATEGORY_BLURBS: Record<ProjectCategory, string> = {
  Dental: "Website projects for dental clinics, specialist practices and dental training providers.",
  Healthcare: "Website projects for clinics and healthcare practices.",
  Business: "Website projects for e-commerce, professional services, manufacturing and other businesses.",
};

const OurWork = () => {
  const [featured, ...gallery] = PROJECTS;
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: gallery.filter((project) => project.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <div>
      <SEO
        title="Our Work - Website Design Portfolio for Dental, Healthcare & Business"
        description="15 completed website design projects by Zyra Digitals, including dental clinics, healthcare practices and business websites."
        keywords="web design portfolio, dental website design, healthcare website design, website design examples, business website portfolio, web design agency work, Zyra Digitals portfolio"
        canonical="/our-work"
        breadcrumbs={[{ name: "Our Work", path: "/our-work" }]}
      />
      <PageBanner
        image={PAGE_BANNERS.work}
        title="Our Work"
        subtitle="15 completed website projects for dental, healthcare and business clients."
        badge="Portfolio"
      />

      {/* Featured Project */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-5 sm:px-6">
          <FadeInView>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-full">
                    {featured.image ? (
                      <img
                        src={featured.image}
                        alt={`${featured.name} website design`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5 p-8 text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/70">
                          {featured.industry}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Project
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {featured.industry}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-4">
                      {featured.name}
                    </h2>
                    <p className="text-base text-muted leading-relaxed mb-6">
                      {featured.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mb-8">
                      {featured.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200/80"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-colors duration-200"
                      >
                        Start Your Project
                      </Link>
                      {featured.website && (
                        <a
                          href={`https://${featured.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80"
                        >
                          Visit website <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-6">
          <FadeInView>
            <div className="text-center mb-16">
              <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">Project Gallery</p>
              <h2 className="text-foreground mb-4">Completed website projects</h2>
              <p className="text-base text-muted max-w-2xl mx-auto">
                15 website projects delivered for dental, healthcare and business clients.
              </p>
            </div>
          </FadeInView>

          {grouped.map((group, groupIndex) => (
            <div key={group.category} className={groupIndex === 0 ? "" : "mt-16"}>
              <FadeInView>
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {PROJECT_CATEGORY_LABELS[group.category]}
                  </h3>
                  <p className="mt-2 text-base text-muted">{CATEGORY_BLURBS[group.category]}</p>
                </div>
              </FadeInView>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((project) => (
                  <FadeInView key={project.name}>
                    <ProjectCard project={project} showFeatures />
                  </FadeInView>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-5 sm:px-6">
          <FadeInView>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">Why Work With Us</p>
              <h2 className="text-foreground mb-6">What drives every project</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Target, title: "Results First", desc: "We measure success by the leads, calls and sales your website generates - not just how it looks." },
                  { icon: TrendingUp, title: "Built to Rank", desc: "Every website is optimised for search engines so the right customers can actually find you." },
                  { icon: Smile, title: "Easy to Work With", desc: "Clear communication, honest timelines and support you can rely on - online, wherever you are." },
                ].map((value) => (
                  <FadeInView key={value.title}>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon size={22} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-3 text-base sm:text-lg">{value.title}</h3>
                      <p className="text-muted text-base">{value.desc}</p>
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
