import { ArrowUpRight, CalendarDays, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/site";
import { PAGE_BANNERS } from "@/lib/banners";
import { CALENDLY_URL } from "@/lib/calendly";

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact Zyra Digitals - Get a Free Web Design & SEO Quote"
        description="Contact Zyra Digitals for web design, SEO and branding. Email zyradigitalsofficial@gmail.com, WhatsApp +91 90254 21149, or fill in our form. Based in Coimbatore, working 100% online and serving clients worldwide."
        keywords="contact Zyra Digitals, web design enquiry, get a website quote, SEO consultation, web design Coimbatore contact, digital agency contact, free website audit, branding enquiry"
        canonical="/contact"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <PageBanner
        image={PAGE_BANNERS.website}
        title="Contact Us"
        subtitle="Tell us what you need, contact our team directly, or schedule a conversation."
        badge="Get In Touch"
      />

      <section className="bg-blue-50/80 py-10 sm:py-14">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <LeadForm
              id="contact-form"
              embedded
              title="Tell us about your project"
              subtitle="Share a few details and we’ll send a free website audit and a tailored proposal. Reply guaranteed within 1 hour."
              badge="Get Your Free Quote"
            />

            <aside className="space-y-5">
              <section className="rounded-2xl bg-card p-6 shadow-medical ring-1 ring-primary/10 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Direct contact</p>
                <h2 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">Prefer to talk first?</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Reach our team by phone, WhatsApp or email. We work online with clients worldwide.
                </p>

                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">Call or WhatsApp</p>
                      <a href={`tel:${SITE.phoneHref}`} className="mt-1 block font-semibold text-foreground hover:text-primary">
                        {SITE.phoneDisplay}
                      </a>
                      <a
                        href={`${SITE.whatsappHref}?text=${encodeURIComponent("Hi Zyra Digitals, I would like to discuss a project.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-4"
                      >
                        Message us on WhatsApp <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-border pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">Email</p>
                      <a href={`mailto:${SITE.email}`} className="mt-1 block break-all font-semibold text-foreground hover:text-primary">
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-border pt-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <CalendarDays size={18} />
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">Book a 30-minute meeting</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          Pick a time in Calendly and talk through your project.
                        </p>
                      </div>
                    </div>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-blue-700"
                    >
                      Open meeting calendar <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-primary/10 bg-white p-5">
                <p className="flex items-start gap-3 text-sm text-foreground">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-primary" />
                  <span><strong>Based in Coimbatore</strong><br />{SITE.location}</span>
                </p>
                <p className="mt-4 flex items-start gap-3 border-t border-border pt-4 text-sm text-muted">
                  <Clock size={17} className="mt-0.5 shrink-0 text-primary" />
                  <span>{SITE.hours}<br />Working online worldwide</span>
                </p>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title="Have questions about our services?"
        subtitle="Get in touch with our team for a free website, SEO or branding consultation."
        buttonText="Send Message"
        to="/contact#contact-form"
      />
    </div>
  );
};

export default Contact;
