import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import SEO from "@/components/SEO";
import { INDUSTRIES } from "@/lib/site";
import { getIndustryIcon } from "@/lib/industryIcons";
import { PAGE_BANNERS } from "@/lib/banners";

const Industries = () => (
  <div>
    <SEO
      title="Industries We Serve - Web Design & SEO for Your Business"
      description="Zyra Digitals builds high-converting websites and SEO for dental clinics, interior designers, real estate, solar companies, restaurants, schools and more."
      keywords="web design for dental clinics, website design for interior designers, real estate website design, solar company website, restaurant website design, school website design, industry web design, SEO by industry, lead generation websites"
      canonical="/industries"
      breadcrumbs={[{ name: "Industries", path: "/industries" }]}
    />
    <PageBanner
      image={PAGE_BANNERS.website}
      title="Industries We Serve"
      subtitle="We specialise in helping businesses in these industries turn their websites into reliable, lead-generating machines."
      badge="Industries"
    />

    <section className="py-20">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-foreground mb-4">Built for your industry</h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Every industry is different. We understand what your customers search for, what makes them enquire, and how to build a website that speaks directly to them.
            </p>
          </div>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {INDUSTRIES.map((industry, i) => {
            const Icon = getIndustryIcon(industry.slug);
            return (
              <FadeInView key={industry.slug} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xl mb-2">{industry.name}</h3>
                  <p className="text-primary font-medium mb-4">{industry.tagline}</p>
                  <p className="text-base text-muted leading-relaxed mb-6 flex-1">{industry.description}</p>
                  <ul className="space-y-2 mb-6">
                    {industry.offerings.slice(0, 3).map((offering) => (
                      <li key={offering} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Explore {industry.name} <ArrowRight size={18} />
                  </Link>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>

    {/* Lead generation form */}
    <LeadForm
      title="Let's Grow Your Business"
      subtitle="Tell us which industry you're in and what you need. We'll send a free audit and a proposal built to bring you more enquiries - reply guaranteed within 1 hour."
      buttonText="Request My Free Quote"
      badge="Free Proposal"
    />

    <CTASection
      title="Don't see your industry?"
      subtitle="We work with businesses of all kinds. Get in touch and let's talk about what's possible for you."
      buttonText="Get a Free Quote"
      to="/contact"
    />
  </div>
);

export default Industries;
