import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import HomeFAQ from "@/components/HomeFAQ";
import SEO from "@/components/SEO";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { getLocationPage } from "@/lib/locations";
import { PAGE_BANNERS } from "@/lib/banners";

const LocationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocationPage(slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const nearby = location.nearby
    .map((n) => getLocationPage(n))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <div>
      <SEO
        title={location.title}
        description={location.metaDescription}
        keywords={`website design ${location.city.toLowerCase()}, web design company ${location.city.toLowerCase()}, web developer ${location.city.toLowerCase()}, SEO services ${location.city.toLowerCase()}, website designer ${location.region.toLowerCase()}`}
        canonical={`/${location.slug}`}
        breadcrumbs={[
          { name: "Locations", path: "/locations" },
          { name: location.city, path: `/${location.slug}` },
        ]}
        schema={[
          serviceSchema({
            name: `Website Design in ${location.city}`,
            description: location.metaDescription,
            serviceType: `Website design and SEO for businesses in ${location.city}`,
            path: `/${location.slug}`,
          }),
          faqSchema(location.faqs),
        ]}
      />
      <PageBanner
        image={PAGE_BANNERS.website}
        title={location.h1}
        subtitle={location.tagline}
        badge={location.city}
      />

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start max-w-5xl mx-auto">
            <FadeInView>
              <div className="space-y-5">
                {location.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeInView>

            <FadeInView delay={0.12}>
              <div className="rounded-2xl bg-primary-muted p-6">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin size={18} />
                  <p className="text-sm font-semibold uppercase tracking-wide">
                    Based in Coimbatore
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We work with businesses in {location.city} entirely online - video calls,
                  WhatsApp and email - so distance never slows a project down. Every enquiry gets
                  a reply guaranteed within 1 hour during working hours.
                </p>
                <p className="mt-4 text-sm text-muted">
                  Website design starts from <span className="font-semibold text-foreground">₹7,999</span>.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-95"
                >
                  Get a Free Quote <ArrowRight size={17} />
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Local focus */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-5 sm:px-6">
          <FadeInView>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-foreground mb-4">What {location.city} businesses ask us for</h2>
              <p className="text-muted">
                The most common website and SEO goals we work on with clients in and around{" "}
                {location.city}.
              </p>
            </div>
          </FadeInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {location.localFocus.map((item, i) => (
              <FadeInView key={item} delay={i * 0.06} className="h-full">
                <div className="flex h-full items-start gap-3 rounded-2xl bg-white p-5 shadow-medical">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-foreground">{item}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <LeadForm
        title={`Get Your Free Website Quote for ${location.city}`}
        subtitle={`Tell us about your business in ${location.city} and we'll send a free audit plus a custom proposal - reply guaranteed within 1 hour.`}
        buttonText="Request My Free Quote"
        badge="Free Proposal"
      />

      <HomeFAQ
        items={location.faqs}
        heading={`Website Design in ${location.city} - FAQs`}
      />

      {/* Nearby locations */}
      {nearby.length > 0 && (
        <section className="py-16 sm:py-20 bg-card">
          <div className="container mx-auto px-5 sm:px-6">
            <FadeInView>
              <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-foreground mb-4">We also work with businesses in</h2>
              </div>
            </FadeInView>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {nearby.map((item, i) => (
                <FadeInView key={item.slug} delay={i * 0.08} className="h-full">
                  <Link
                    to={`/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-medical ring-1 ring-primary/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-medical-lg"
                  >
                    <MapPin size={20} className="text-primary" />
                    <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.city}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{item.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                      View {item.city} <ArrowRight size={16} />
                    </span>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to grow your business in ${location.city}?`}
        subtitle="Get a free website and SEO audit, plus a proposal tailored to your goals - no obligation."
        buttonText="Get a Free Quote"
        to="/contact"
      />
    </div>
  );
};

export default LocationDetail;
