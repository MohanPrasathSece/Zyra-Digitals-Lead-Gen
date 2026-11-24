import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import SEO from "@/components/SEO";
import { LOCATION_PAGES } from "@/lib/locations";
import { PAGE_BANNERS } from "@/lib/banners";

const Locations = () => (
  <div>
    <SEO
      title="Areas We Serve | Website Design Across Tamil Nadu & Kerala"
      description="Zyra Digitals designs websites and runs SEO for businesses in Coimbatore, Tiruppur, Erode, Salem, Chennai and Kochi. Based in Coimbatore, working 100% online."
      keywords="website design Coimbatore, website design Tiruppur, website design Erode, website design Salem, website design Chennai, website design Kochi, web design Tamil Nadu"
      canonical="/locations"
      breadcrumbs={[{ name: "Locations", path: "/locations" }]}
    />
    <PageBanner
      image={PAGE_BANNERS.website}
      title="Areas We Serve"
      subtitle="Based in Coimbatore, working 100% online with businesses across Tamil Nadu, Kerala and the rest of India."
      badge="Locations"
    />

    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">Where our clients are</h2>
            <p className="text-muted">
              Our team is based in Coimbatore. Everything else happens online - so where you are
              based never gets in the way of a project.
            </p>
          </div>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {LOCATION_PAGES.map((location, i) => (
            <FadeInView key={location.slug} delay={i * 0.06} className="h-full">
              <Link
                to={`/${location.slug}`}
                className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-medical ring-1 ring-primary/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-medical-lg"
              >
                <MapPin size={20} className="text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {location.city}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {location.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                  Website design in {location.city} <ArrowRight size={16} />
                </span>
              </Link>
            </FadeInView>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
          >
            Browse our services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    <LeadForm
      title="Get a free quote for your location"
      subtitle="Wherever your business is based, we can help. Tell us what you need - reply guaranteed within 1 hour."
      buttonText="Get My Free Quote"
      badge="Free Proposal"
    />

    <CTASection
      title="Working online with clients across India"
      subtitle="Free website and SEO audit, plus a proposal you can act on - no obligation."
      buttonText="Get a Free Quote"
      to="/contact"
    />
  </div>
);

export default Locations;
