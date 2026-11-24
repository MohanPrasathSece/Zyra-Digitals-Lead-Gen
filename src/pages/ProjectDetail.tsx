import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Globe,
  Smartphone,
  Laptop,
  Layers,
  Sparkles,
  BarChart3,
  Eye,
  LineChart,
  Maximize2,
  X,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { caseStudySchema } from "@/lib/schema";
import {
  PROJECTS,
  PROJECT_CATEGORY_LABELS,
  PROJECT_RANKINGS_MAP,
  getProject,
  getProjectGallery,
  getProjectGSCImage,
  getRelatedProjects,
} from "@/lib/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; label: string } | null>(null);
  const project = getProject(slug);

  if (!project) {
    return <NotFound />;
  }

  const gallery = getProjectGallery(project);
  const gscImage = getProjectGSCImage(project);
  const related = getRelatedProjects(project, 3);

  const categoryLabel = PROJECT_CATEGORY_LABELS[project.category] || project.category;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our-work" },
    { name: project.name, path: `/our-work/${project.slug}` },
  ];

  const targetKeywords = (PROJECT_RANKINGS_MAP[project.slug] || [])
    .map((r) => r.keyword)
    .filter(Boolean)
    .join(", ");

  const seoKeywords = [
    project.name,
    `${project.name} website`,
    `${project.industry} website design`,
    `${project.category} web development`,
    targetKeywords,
    `${project.name} case study`,
    "lead generation website",
    "UI UX design",
    "Zyra Digitals portfolio",
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="bg-slate-50/60 min-h-screen">
      <SEO
        title={`${project.name} - Case Study & Website Architecture | Zyra Digitals`}
        description={
          gscImage
            ? `Case study for ${project.name} (${project.industry}). Verified Google Search Console search performance, organic keyword rankings, full page screenshots, and conversion architecture.`
            : `Case study for ${project.name} (${project.industry}). Explore full page screenshots, mobile-responsive UI/UX architecture, technical deliverables, and high-conversion web design.`
        }
        keywords={seoKeywords}
        canonical={`/our-work/${project.slug}`}
        ogType="article"
        ogImage={project.image}
        breadcrumbs={breadcrumbs}
        schema={caseStudySchema({
          headline: `${project.name} - Website Design Case Study`,
          description: project.description,
          path: `/our-work/${project.slug}`,
          image: project.image ? `https://www.zyradigitals.com${project.image}` : undefined,
          about: project.industry,
        })}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-10 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-24 top-0 hidden sm:block h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 hidden sm:block h-72 w-72 rounded-full bg-indigo-500/20 blur-2xl" />

        <div className="container relative z-10 mx-auto px-5 sm:px-6">
          {/* Back link & breadcrumbs */}
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-200">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft size={14} /> Back to Our Work
            </Link>
            <span className="text-white/40">/</span>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5">{categoryLabel}</span>
          </div>

          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/20 px-3 py-1 text-xs font-bold text-sky-200 ring-1 ring-sky-300/30">
                <Sparkles size={13} /> {project.industry}
              </span>
              {project.location && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-blue-100">
                  <MapPin size={13} className="text-sky-300" /> {project.location}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live & Ranking
              </span>
            </div>

            <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {project.name}
            </h1>

            <p className="mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-blue-100/90 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              {project.website && (
                <a
                  href={`https://${project.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Visit Live Website <ExternalLink size={16} />
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
              >
                Get Similar Results <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Specs Strip */}
      <div className="border-y border-slate-200 bg-white shadow-sm">
        <div className="container mx-auto px-5 sm:px-6 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Industry</p>
              <p className="font-bold text-slate-900 text-sm mt-0.5">{project.industry}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</p>
              <p className="font-bold text-slate-900 text-sm mt-0.5">{project.location || "Online / Global"}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Scope</p>
              <p className="font-bold text-slate-900 text-sm mt-0.5">Website & SEO Growth</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Live URL</p>
              <p className="font-bold text-primary text-sm mt-0.5 truncate">
                {project.website ? project.website : "Internal Architecture"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 py-16 sm:py-20 space-y-20">

        {/* Section 1: Page Screenshots / Architecture Gallery */}
        <section id="gallery" className="scroll-mt-24">
          <FadeInView>
            <div className="max-w-3xl mb-12">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                Full Page Screenshots & Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-3 mb-4">
                Photos of all pages & website layouts
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Visual walkthrough of the complete multi-page architecture designed for {project.name}. Every page is custom-structured to guide prospective customers from first search to confirmed enquiry.
              </p>
            </div>
          </FadeInView>

          <div className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((slot, index) => {
              const hasRealImage = Boolean(slot.image);
              const isMobile = slot.device === "mobile";
              const isCoverCard = index === 0;

              return (
                <FadeInView key={slot.label} delay={index * 0.08}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-medical ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-medical-lg cv-auto">
                    {/* Device Chrome Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      </div>
                      <span className="truncate max-w-[180px] text-[11px] font-mono font-medium text-slate-400">
                        {slot.route || `www.${project.website || "zyradigitals.com"}`}
                      </span>
                      <span className="text-[10px] font-bold uppercase text-slate-400">
                        {isMobile ? "Mobile" : "Desktop"}
                      </span>
                    </div>

                    {/* Screenshot Display or Placeholder */}
                    <div
                      onClick={() =>
                        hasRealImage &&
                        setLightboxImage({
                          src: slot.image!,
                          alt: `${project.name} - ${slot.label}`,
                          label: slot.label,
                        })
                      }
                      className={`relative w-full overflow-hidden bg-slate-100 ${
                        hasRealImage ? "cursor-zoom-in" : "aspect-[16/10]"
                      } ${isCoverCard ? "aspect-[16/10] max-h-[235px] sm:max-h-[245px]" : ""}`}
                    >
                      {hasRealImage ? (
                        <>
                          <img
                            src={slot.image}
                            alt={`${project.name} - ${slot.label}`}
                            loading="lazy"
                            className={`w-full ${
                              isCoverCard
                                ? "h-full w-full object-cover object-center"
                                : "h-auto block object-contain"
                            } transition-transform duration-300 group-hover:scale-[1.01]`}
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-slate-900/0 transition-colors group-hover:bg-slate-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/85 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-xs">
                              <Maximize2 size={13} /> View Full Layout
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="relative flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/40">
                          {/* Mockup Wireframe Graphic */}
                          <div className="w-full max-w-[200px] rounded-lg border border-dashed border-slate-300 bg-white/80 p-3 shadow-xs">
                            <div className="h-3 w-16 rounded-sm bg-primary/20 mb-2" />
                            <div className="space-y-1.5">
                              <div className="h-2 w-full rounded-xs bg-slate-200" />
                              <div className="h-2 w-4/5 rounded-xs bg-slate-200" />
                              <div className="h-2 w-3/5 rounded-xs bg-slate-200" />
                            </div>
                            <div className="mt-3 flex gap-1.5">
                              <div className="h-3.5 w-12 rounded-sm bg-primary/30" />
                              <div className="h-3.5 w-10 rounded-sm bg-slate-200" />
                            </div>
                          </div>

                          {/* Placeholder badge */}
                          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-white shadow-xs backdrop-blur-xs">
                            {isMobile ? <Smartphone size={12} /> : <Laptop size={12} />}
                            <span>Screenshot Placeholder</span>
                          </div>
                        </div>
                      )}

                      {/* Corner Badge */}
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <span className="rounded-md bg-white/95 px-2 py-0.5 text-[11px] font-bold text-slate-700 shadow-xs backdrop-blur-xs">
                          Page {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-bold text-foreground text-base mb-1.5 flex items-center gap-2">
                        {slot.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed flex-1">
                        {slot.description || `Custom engineered layout for ${project.name} built to turn visitors into enquiries.`}
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>{hasRealImage ? "Verified Screenshot" : "Ready for Photo Upload"}</span>
                        <span className="text-slate-400 font-normal">Page {index + 1} of {gallery.length}</span>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </section>

        {/* Section 2: Google Search Console Performance Report (Shown ONLY for projects with authentic verified GSC report) */}
        {gscImage && (
          <section id="analytics" className="scroll-mt-24">
            <FadeInView>
              <div className="max-w-3xl mb-8">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Verified Performance
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-3 mb-4">
                  Google Search Console Performance Report
                </h2>
                <p className="text-base text-muted leading-relaxed">
                  Direct search performance tracked via Google Search Console for {project.name}, showcasing verified clicks, impressions, CTR, and search positions.
                </p>
              </div>
            </FadeInView>

            {/* Google Search Console Performance Report Showcase */}
            <FadeInView>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-medical">
                {/* Google Console header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                      <LineChart size={17} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        Google Search Console Performance Report
                      </h3>
                      <p className="text-xs text-slate-500 font-mono">
                        Property: {project.website ? `https://${project.website}` : "Verified Client Domain"} • Performance Report
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                      <CheckCircle2 size={13} /> Verified Search Console Data
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 ring-1 ring-blue-200">
                      <Eye size={13} /> Live Google Impressions
                    </span>
                  </div>
                </div>

                {/* Real GSC Screenshot */}
                <div className="relative group overflow-hidden bg-slate-950 border-b border-slate-100">
                  <img
                    src={gscImage}
                    alt={`${project.name} Google Search Console Performance Report`}
                    className="w-full h-auto block object-contain cursor-pointer transition-transform duration-300 group-hover:scale-[1.008]"
                    onClick={() =>
                      setLightboxImage({
                        src: gscImage,
                        alt: `${project.name} Google Search Console Performance Report`,
                        label: `${project.name} • Google Search Console Performance Report`,
                      })
                    }
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: gscImage,
                          alt: `${project.name} Google Search Console Performance Report`,
                          label: `${project.name} • Google Search Console Performance Report`,
                        })
                      }
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/85 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-primary active:scale-95"
                    >
                      <Maximize2 size={13} />
                      <span>View Full Report</span>
                    </button>
                  </div>
                </div>

                {/* Bottom footer explaining methodology */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 px-6 py-3.5 text-xs text-slate-600">
                  <span>Verified data source: Google Search Console (Organic Web Searches)</span>
                  <span className="font-semibold text-primary">Tracks Real User Clicks &amp; Search Visibility</span>
                </div>
              </div>
            </FadeInView>
          </section>
        )}

        {/* Section 3: Project Features & Deliverables */}
        <section id="features" className="scroll-mt-24">
          <FadeInView>
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-medical ring-1 ring-slate-200/80">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Deliverables & Features
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">
                  What was built for {project.name}
                </h3>
                <p className="text-sm text-muted">
                  Custom technical execution designed to handle scale, security, and continuous customer conversion.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 ring-1 ring-slate-200/70"
                  >
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Technology Stack Badges */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase mr-2">Technologies Used:</span>
                {["React 18", "TypeScript", "Tailwind CSS", "Google Search Console", "Google Analytics 4", "Schema.org", "Cloudflare Edge CDN"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-primary/20"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeInView>
        </section>

        {/* Section 5: Related Projects in Same Category */}
        {related.length > 0 && (
          <section id="related" className="scroll-mt-24 pt-4 border-t border-slate-200">
            <FadeInView>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {categoryLabel} Category
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
                    More {project.category} Website Case Studies
                  </h2>
                </div>
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  View All 15 Projects <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInView>

            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <FadeInView key={item.slug}>
                  <Link
                    to={`/our-work/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-medical ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-medical-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 text-center">
                          <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            {item.industry}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                          {item.industry}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-muted line-clamp-2 leading-relaxed flex-1">
                        {item.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                        View Case Study & Rankings <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <CTASection
        title={`Want Similar Results for Your ${project.industry} Business?`}
        subtitle="Let's build a high-converting website and ranking strategy that brings you more calls, enquiries and confirmed bookings."
        buttonText="Get a Free Proposal"
        to="/contact"
      />

      {/* Lightbox Dialog for Full Resolution Layout View */}
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-2 sm:p-4 bg-slate-950/95 border-slate-800 text-white overflow-hidden">
          <DialogHeader className="px-2 pt-2 pb-1">
            <DialogTitle className="text-sm sm:text-base font-semibold text-slate-200">
              {lightboxImage?.label || project.name}
            </DialogTitle>
          </DialogHeader>
          {lightboxImage && (
            <div className="relative max-h-[80vh] overflow-y-auto rounded-lg bg-slate-900/50 p-1">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
