import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import SEO from "@/components/SEO";
import { SERVICE_PAGES } from "@/lib/services";
import { PAGE_BANNERS } from "@/lib/banners";

const Services = () => (
  <div>
    <SEO
      title="Our Services | Web Design, SEO & Branding - Zyra Digitals"
      description="Explore every service Zyra Digitals offers - website design, SEO, logo design, ecommerce, maintenance and more. Coimbatore based, working online across India."
      keywords="web design services Coimbatore, SEO services, logo design services, ecommerce website design, website maintenance, local SEO, UI UX design, MVP development"
      canonical="/services"
      breadcrumbs={[{ name: "Services", path: "/services" }]}
    />
    <PageBanner
      image={PAGE_BANNERS.website}
      title="Our Services"
      subtitle="Everything you need to build, launch and grow a website that brings you enquiries."
      badge="Services"
    />

    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">Pick the help you need</h2>
            <p className="text-muted">
              Each service below has its own page with what's included, how we work and the
              questions clients ask most.
            </p>
          </div>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICE_PAGES.map((service, i) => (
            <FadeInView key={service.slug} delay={i * 0.05} className="h-full">
              <Link
                to={`/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-medical ring-1 ring-primary/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-medical-lg"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.tagline}</p>
                <p className="mt-4 font-mono text-sm font-semibold text-primary">
                  From {service.startingPrice}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            </FadeInView>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
          >
            See the areas we serve <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    <LeadForm
      title="Not sure which service you need?"
      subtitle="Tell us your goal and we'll recommend the right approach, with a clear price - reply guaranteed within 1 hour."
      buttonText="Get My Free Quote"
      badge="Free Proposal"
    />

    <CTASection
      title="Let's build something that brings you customers"
      subtitle="Get a free audit of your current website, or a plan for a new one - no obligation."
      buttonText="Get a Free Quote"
      to="/contact"
    />
  </div>
);

export default Services;
