import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/lib/schema";
import { getIndustry, INDUSTRIES } from "@/lib/site";
import { getIndustryIcon } from "@/lib/industryIcons";
import { PAGE_BANNERS } from "@/lib/banners";

const INDUSTRY_BANNERS: Record<string, string> = {
  "dental-clinics": PAGE_BANNERS.website,
  "interior-designers": PAGE_BANNERS.work,
  "real-estate": PAGE_BANNERS.work,
  "solar-companies": PAGE_BANNERS.seo,
  restaurants: PAGE_BANNERS.website,
  "salons-spas": PAGE_BANNERS.website,
  schools: PAGE_BANNERS.blog,
  boutiques: PAGE_BANNERS.work,
  "hospitals-clinics": PAGE_BANNERS.website,
  "construction-companies": PAGE_BANNERS.work,
  "travel-agencies": PAGE_BANNERS.blog,
  "gyms-fitness": PAGE_BANNERS.seo,
};

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustry(slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const Icon = getIndustryIcon(industry.slug);
  const image = INDUSTRY_BANNERS[industry.slug] ?? PAGE_BANNERS.website;
  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug);

  return (
    <div>
      <SEO
        title={`${industry.name} Web Design & SEO`}
        description={`${industry.description} Zyra Digitals builds high-converting websites and SEO for ${industry.name.toLowerCase()} - designed to generate more leads. Working 100% online, serving clients worldwide.`}
        keywords={`web design for ${industry.name.toLowerCase()}, website design for ${industry.name.toLowerCase()}, SEO for ${industry.name.toLowerCase()}, ${industry.name.toLowerCase()} website, lead generation for ${industry.name.toLowerCase()}, ${industry.name} marketing`}
        canonical={`/industries/${industry.slug}`}
        breadcrumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
        schema={serviceSchema({
          name: `Web Design & SEO for ${industry.name}`,
          description: `${industry.description} Zyra Digitals provides website design and SEO for ${industry.name.toLowerCase()} in Coimbatore and across India.`,
          serviceType: `Website design and SEO for ${industry.name}`,
          path: `/industries/${industry.slug}`,
        })}
      />
      <PageBanner
        image={image}
        title={industry.name}
        subtitle={industry.tagline}
        badge="Industry"
      />

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <FadeInView>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon size={26} className="text-primary" />
              </div>
              <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">How We Help</p>
              <h2 className="text-foreground mb-6">Websites that bring you more {industry.name.toLowerCase().replace(/s$/, "")} customers</h2>
              <p className="text-base text-muted leading-relaxed mb-6">{industry.description}</p>
              <p className="text-base text-muted leading-relaxed">
                We combine conversion-focused web design with SEO that targets the exact keywords your customers search for - so your business shows up when it matters most and turns those visits into real enquiries.
              </p>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-medical-lg mb-6">
                <img src={image} alt={`${industry.name} website design by Zyra Digitals`} className="w-full h-[300px] object-cover" />
              </div>
              <div className="rounded-2xl bg-primary-muted p-6 text-center">
                <p className="text-3xl font-bold text-primary font-mono">{industry.statValue}</p>
                <p className="text-sm text-muted mt-1">{industry.statLabel}</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <FadeInView>
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">What's Included</p>
              <h2 className="text-foreground mb-4">Everything you need to grow online</h2>
              <p className="text-base text-muted">
                A complete package designed specifically for {industry.name.toLowerCase()}.
              </p>
            </div>
          </FadeInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industry.offerings.map((offering, i) => (
              <FadeInView key={offering} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md h-full flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-base text-foreground">{offering}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Lead generation form */}
      <LeadForm
        title={`Get Your Free ${industry.name} Website Quote`}
        subtitle={`Tell us about your ${industry.name.toLowerCase()} business and we'll send a free website and SEO audit plus a custom proposal - reply guaranteed within 1 hour.`}
        buttonText="Request My Free Quote"
        defaultService="Website Design"
        badge="Free Proposal"
      />

      {/* Other industries */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Explore other industries</h2>
              <p className="text-muted">We help businesses across many sectors grow online.</p>
            </div>
          </FadeInView>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {others.map((other, i) => {
              const OtherIcon = getIndustryIcon(other.slug);
              return (
                <FadeInView key={other.slug} delay={i * 0.1}>
                  <Link
                    to={`/industries/${other.slug}`}
                    className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <OtherIcon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{other.name}</h3>
                    <p className="text-sm text-muted mb-4">{other.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </Link>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to grow your ${industry.name.toLowerCase()} business?`}
        subtitle="Get a free website and SEO audit, plus a proposal tailored to your goals - no obligation."
        buttonText="Get a Free Quote"
        to="/contact"
      />
    </div>
  );
};

export default IndustryDetail;
