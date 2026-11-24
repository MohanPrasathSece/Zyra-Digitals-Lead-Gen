import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles, Layers, ShieldCheck, Palette, FileText, Smartphone } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import HomeFAQ from "@/components/HomeFAQ";
import LeadForm from "@/components/LeadForm";
import SEO from "@/components/SEO";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { PAGE_BANNERS } from "@/lib/banners";

const highlightCards = [
  {
    icon: Palette,
    title: "100% Original Concepts",
    desc: "Every logo is custom-drawn for your business. We never use templates, clip-art or AI shortcuts.",
  },
  {
    icon: FileText,
    title: "Full Vector Source Files",
    desc: "Receive SVG, AI, EPS, PDF, and high-res PNG formats ready for embroidery, signboards, print and web.",
  },
  {
    icon: ShieldCheck,
    title: "100% Commercial Rights",
    desc: "You own all copyright and intellectual property outright from day one with written transfer.",
  },
  {
    icon: Smartphone,
    title: "Social & Digital Ready",
    desc: "Optimized avatars, WhatsApp display pictures, website favicons, and social headers included.",
  },
];

const brandingPackages = [
  {
    name: "Starter",
    tag: "Essential Logo (3k)",
    price: "₹2,999",
    period: "one-time",
    summary: "For startups, clinics, and new solo businesses",
    features: [
      "2 Unique, original logo concepts",
      "Essential brand colour palette",
      "Typography & font pairing guide",
      "High-res PNG, JPG & transparent formats",
      "WhatsApp & social profile avatar sizes",
      "Full commercial ownership & rights",
      "Delivered within 3–4 business days",
    ],
    cta: "Choose Starter (₹2,999)",
    featured: false,
  },
  {
    name: "Growth",
    tag: "Brand Identity (6k)",
    price: "₹5,999",
    period: "one-time",
    summary: "Complete visual identity for growing businesses",
    features: [
      "4 Custom logo design concepts",
      "Comprehensive Brand Style Guide (PDF)",
      "Vector source files (AI, SVG, EPS, PDF)",
      "Business card & letterhead print designs",
      "Social media kit (Banners + Post templates)",
      "Favicon, web app icon & watermark formats",
      "3 rounds of dedicated refinements",
    ],
    cta: "Choose Growth (₹5,999)",
    featured: true,
  },
  {
    name: "Complete Suite",
    tag: "Full Brand System (10k)",
    price: "₹9,999",
    period: "one-time",
    summary: "Full corporate branding & marketing suite",
    features: [
      "Unlimited custom logo concepts & revisions",
      "Complete brand typography & iconography system",
      "Corporate stationery suite (Card, Letterhead, Envelope, Invoice)",
      "Social media templates & ad creative kit",
      "3D signage, uniform & merchandise mockups",
      "Dedicated senior brand designer",
      "Priority turnaround & lifetime asset storage",
    ],
    cta: "Choose Complete (₹9,999)",
    featured: false,
  },
];

const brandingFaqs = [
  {
    q: "What files do I receive after the branding project is complete?",
    a: "You receive industry-standard vector source files (AI, EPS, SVG, and print-ready PDF) along with web-optimized high-resolution PNGs (with transparent backgrounds) and JPGs in multiple color variations (full color, all-white, all-black, and horizontal/stacked lockups).",
  },
  {
    q: "Do I own 100% of the copyright for my logo and branding?",
    a: "Yes. Once the final milestone is completed and files are handed over, 100% intellectual property and commercial copyright belongs entirely to you.",
  },
  {
    q: "How long does a branding project take?",
    a: "Starter packages typically take 3 to 4 business days. The Growth Brand Identity package takes 5 to 7 days, and the Complete Suite takes 7 to 10 days, allowing sufficient time for concept refinement and guideline compilation.",
  },
  {
    q: "Can you design matching business cards and stationery?",
    a: "Yes! Our Growth and Complete Suite packages include print-ready business cards, letterheads, invoice templates, and social media branding kits formatted for instant commercial printing.",
  },
];

const Branding = () => (
  <div>
    <SEO
      title="Branding & Logo Design in Coimbatore | Packages from ₹2,999 - Zyra Digitals"
      description="Professional branding & logo design packages starting from ₹2,999. Three transparent plans: Starter (₹2,999), Growth (₹5,999), and Complete Suite (₹9,999). 100% original concepts, vector source files and full commercial rights."
      keywords="branding packages, logo design Coimbatore, brand identity design, logo design packages India, corporate branding, brand style guide, business logo design, logo designer Coimbatore"
      canonical="/branding"
      breadcrumbs={[{ name: "Branding", path: "/branding" }]}
      schema={[
        serviceSchema({
          name: "Branding & Logo Design",
          description:
            "Professional branding and logo design packages in Coimbatore and across India, including logo design, brand guidelines, stationery, and social media kits.",
          serviceType: "Brand Identity Design",
          path: "/branding",
          offers: [
            { name: "Starter Branding", price: "2999" },
            { name: "Growth Branding", price: "5999" },
            { name: "Complete Brand Suite", price: "9999" },
          ],
        }),
        faqSchema(brandingFaqs),
      ]}
    />

    <PageBanner
      image={PAGE_BANNERS.website}
      title="Branding & Logo Design Built for Recognition"
      subtitle="Stand out with a distinct, memorable visual identity. Three transparent packages starting from ₹2,999 with original vector concepts, source files and full commercial ownership."
      badge="Branding & Identity"
    />

    {/* Feature highlights strip */}
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-14 text-white">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
              Identity Engineered For Growth
            </p>
            <h2 className="text-white text-2xl sm:text-3xl font-extrabold">
              Branding that makes your business look established
            </h2>
          </div>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlightCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeInView key={card.title} delay={i * 0.08} className="h-full">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm h-full flex flex-col">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{card.desc}</p>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>

    {/* Pricing packages section */}
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50/70">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Transparent Branding Pricing
            </span>
            <h2 className="text-foreground text-3xl sm:text-4xl font-extrabold mb-4">
              Choose your branding package
            </h2>
            <p className="text-muted text-base max-w-2xl mx-auto">
              Fixed, transparent prices with no hidden charges. Every package includes original concepts and full commercial copyright.
            </p>
          </div>
        </FadeInView>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {brandingPackages.map((pkg, i) => (
            <FadeInView key={pkg.name} delay={i * 0.1} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                  pkg.featured
                    ? "bg-white ring-2 ring-primary shadow-2xl shadow-primary/10 -translate-y-1 sm:-translate-y-2"
                    : "bg-white ring-1 ring-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    Most Popular Choice
                  </span>
                )}

                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    {pkg.tag}
                  </p>
                  <h3 className="text-2xl font-black text-slate-900">{pkg.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 min-h-[38px] leading-relaxed">
                    {pkg.summary}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-medium text-slate-500">/{pkg.period}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-emerald-600 font-semibold">
                    ✓ Full copyright ownership included
                  </p>
                </div>

                <ul className="mb-8 space-y-3 text-xs sm:text-sm flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-slate-700">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#get-quote"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 px-5 text-sm font-bold transition-all duration-200 ${
                    pkg.featured
                      ? "bg-primary text-white shadow-lg shadow-primary/25 hover:brightness-110 active:scale-95"
                      : "bg-slate-100 text-slate-900 hover:bg-primary hover:text-white active:scale-95"
                  }`}
                >
                  {pkg.cta} <ArrowRight size={16} />
                </a>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
              How We Work
            </span>
            <h2 className="text-foreground text-2xl sm:text-3xl font-extrabold mb-3">
              Simple 4-step branding process
            </h2>
            <p className="text-muted text-sm sm:text-base">
              Clear stages, constant communication, and guaranteed turnaround.
            </p>
          </div>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Discovery & Brief",
              desc: "We discuss your target audience, industry positioning, aesthetics and color preferences.",
            },
            {
              step: "02",
              title: "Concept Creation",
              desc: "We handcraft original logo concepts with distinct typographic and symbolic directions.",
            },
            {
              step: "03",
              title: "Review & Refinement",
              desc: "You choose your preferred concept and we refine typography, proportions and color lockups.",
            },
            {
              step: "04",
              title: "Asset Delivery",
              desc: "Complete delivery of vector source files, style guides, social kits and ownership documentation.",
            },
          ].map((item, i) => (
            <FadeInView key={item.step} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-xs">
                <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    {/* Lead form with defaultService set to Branding */}
    <LeadForm
      defaultService="Branding & Logo Design"
      title="Get Your Free Branding Quote"
      subtitle="Tell us about your brand vision and we'll reply within 1 hour with a customized proposal and package recommendation."
      badge="Branding Quote"
      buttonText="Request Branding Proposal"
    />

    <HomeFAQ items={brandingFaqs} heading="Branding & Logo Design - Frequently Asked Questions" />

    <CTASection
      title="Ready to build a memorable brand identity?"
      subtitle="Talk directly with our branding specialists. Free consultation and guaranteed 1-hour proposal."
      buttonText="Schedule a Consultation"
      to="/contact"
    />
  </div>
);

export default Branding;
