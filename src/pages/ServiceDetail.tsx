import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import HomeFAQ from "@/components/HomeFAQ";
import SEO from "@/components/SEO";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { getServicePage } from "@/lib/services";
import { PAGE_BANNERS } from "@/lib/banners";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServicePage(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = service.related
    .map((r) => getServicePage(r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div>
      <SEO
        title={service.title}
        description={service.metaDescription}
        keywords={`${service.primaryKeyword}, ${service.name.toLowerCase()} services, ${service.name.toLowerCase()} agency Coimbatore, ${service.name.toLowerCase()} India`}
        canonical={`/${service.slug}`}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path: `/${service.slug}` },
        ]}
        schema={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            serviceType: service.name,
            path: `/${service.slug}`,
            offers: [
              {
                name: `${service.name} starting price`,
                price: service.startingPrice.replace(/\D/g, ""),
                description: `Starting price${service.startingPrice.includes("/mo") ? " per month" : ""}; final pricing depends on the agreed project scope.`,
                ...(service.startingPrice.includes("/mo") ? { unitText: "MONTH" } : {}),
              },
            ],
          }),
          faqSchema(service.faqs),
        ]}
      />
      <PageBanner
        image={PAGE_BANNERS.website}
        title={service.h1}
        subtitle={service.tagline}
        badge="Service"
      />

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start max-w-5xl mx-auto">
            <FadeInView>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary mb-3">
                {service.name}
              </p>
              <div className="space-y-5">
                {service.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeInView>

            <FadeInView delay={0.12}>
              <div className="rounded-2xl bg-primary-muted p-6 text-center">
                <p className="text-sm font-medium text-muted">Starting from</p>
                <p className="mt-1 font-mono text-3xl font-bold text-primary">
                  {service.startingPrice}
                </p>
                <p className="mt-2 text-xs text-muted">
                  Final price depends on scope, confirmed in writing before work begins.
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

      {/* What's included */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-5 sm:px-6">
          <FadeInView>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-foreground mb-4">What's included</h2>
              <p className="text-muted">
                Everything in our {service.name.toLowerCase()} service, delivered as standard.
              </p>
            </div>
          </FadeInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {service.included.map((item, i) => (
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

      {/* Process */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6">
          <FadeInView>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-foreground mb-4">How we work</h2>
              <p className="text-muted">
                A simple, transparent process - you always know what happens next.
              </p>
            </div>
          </FadeInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {service.process.map((step, i) => (
              <FadeInView key={step.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-medical ring-1 ring-primary/10">
                  <span className="font-mono text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <LeadForm
        title={`Get Your Free ${service.name} Quote`}
        subtitle={`Tell us what you need and we'll come back with a clear scope and a fixed price - reply guaranteed within 1 hour.`}
        buttonText="Request My Free Quote"
        badge="Free Proposal"
      />

      <HomeFAQ items={service.faqs} heading={`${service.name} - Frequently Asked Questions`} />

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-card">
          <div className="container mx-auto px-5 sm:px-6">
            <FadeInView>
              <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-foreground mb-4">Related services</h2>
                <p className="text-muted">Often chosen together with {service.name.toLowerCase()}.</p>
              </div>
            </FadeInView>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {related.map((item, i) => (
                <FadeInView key={item.slug} delay={i * 0.08} className="h-full">
                  <Link
                    to={`/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-medical ring-1 ring-primary/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-medical-lg"
                  >
                    <Sparkles size={20} className="text-primary" />
                    <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{item.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to get started with ${service.name.toLowerCase()}?`}
        subtitle="Get a free audit and a proposal built around your business goals - no obligation."
        buttonText="Get a Free Quote"
        to="/contact"
      />
    </div>
  );
};

export default ServiceDetail;
