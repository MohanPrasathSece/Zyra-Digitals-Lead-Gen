import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Search,
  MousePointerClick,
  FileCheck,
  Globe,
  Smartphone,
  Laptop,
  Layers,
  Award,
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
  getProject,
  getProjectGallery,
  getProjectMetrics,
  getProjectRankings,
  getRelatedProjects,
} from "@/lib/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug);

  if (!project) {
    return <NotFound />;
  }

  const gallery = getProjectGallery(project);
  const metrics = getProjectMetrics(project);
  const rankings = getProjectRankings(project);
  const related = getRelatedProjects(project, 3);

  const categoryLabel = PROJECT_CATEGORY_LABELS[project.category] || project.category;
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; label: string } | null>(null);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our-work" },
    { name: project.name, path: `/our-work/${project.slug}` },
  ];

  const metricIcons = [
    TrendingUp,
    MousePointerClick,
    FileCheck,
    Award,
  ];

  return (
    <div className="bg-slate-50/60 min-h-screen">
      <SEO
        title={`${project.name} - Case Study, Web Design & SEO Results | Zyra Digitals`}
        description={`Case study for ${project.name} (${project.industry}). Explore full page screenshots, performance analytics (CTR, form fills, organic traffic), and Google search rankings.`}
        keywords={`${project.name}, ${project.industry} website design, ${project.industry} SEO case study, dental website design, lead generation website, Zyra Digitals portfolio`}
        canonical={`/our-work/${project.slug}`}
        breadcrumbs={breadcrumbs}
        schema={caseStudySchema({
          headline: `${project.name} - Website Design & SEO Case Study`,
          description: project.description,
          path: `/our-work/${project.slug}`,
          image: project.image ? `https://www.zyradigitals.com${project.image}` : undefined,
          about: project.industry,
        })}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-10 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-2xl" />

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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((slot, index) => {
              const hasRealImage = Boolean(slot.image);
              const isMobile = slot.device === "mobile";

              return (
                <FadeInView key={slot.label} delay={index * 0.08}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-medical ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-medical-lg">
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
                      className={`relative aspect-[16/10] overflow-hidden bg-slate-100 ${
                        hasRealImage ? "cursor-zoom-in" : ""
                      }`}
                    >
                      {hasRealImage ? (
                        <>
                          <img
                            src={slot.image}
                            alt={`${project.name} - ${slot.label}`}
                            loading="lazy"
                            className={`h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03] ${
                              slot.imageScale || project.imageScale ? "scale-[1.075]" : ""
                            }`}
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-slate-900/0 transition-colors group-hover:bg-slate-900/25 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-xs">
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

        {/* Section 2: Website Analytics (Traffic, CTR, Form Fills) */}
        <section id="analytics" className="scroll-mt-24">
          <FadeInView>
            <div className="max-w-3xl mb-12">
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Live Performance Analytics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-3 mb-4">
                Website Analytics: CTR, traffic & form fills
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Direct metrics tracked via Google Search Console and Google Analytics 4, illustrating organic visibility growth and inbound inquiry conversions.
              </p>
            </div>
          </FadeInView>

          {/* 4 Metric Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {metrics.map((metric, idx) => {
              const Icon = metricIcons[idx % metricIcons.length];
              return (
                <FadeInView key={metric.label} delay={idx * 0.1}>
                  <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-medical ring-1 ring-slate-200/80">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                        <Icon size={22} />
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {metric.label}
                    </p>
                    <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-1">
                      {metric.value}
                    </p>
                    {metric.subtext && (
                      <p className="text-xs font-medium text-slate-500 leading-snug">
                        {metric.subtext}
                      </p>
                    )}
                  </div>
                </FadeInView>
              );
            })}
          </div>

          {/* Google Search Console & Analytics Views / Traffic Report Showcase */}
          <FadeInView>
            <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-medical">
              {/* Google Console header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                    <LineChart size={17} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Google Search Console &amp; GA4 Traffic Overview
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      Property: {project.website ? `https://${project.website}` : "Verified Client Domain"} • Last 6 Months Performance
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                    <CheckCircle2 size={13} /> Active Traffic Stream
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 ring-1 ring-blue-200">
                    <Eye size={13} /> High Impressions
                  </span>
                </div>
              </div>

              {/* Console Graphic / Image Placeholder */}
              <div className="relative aspect-[21/9] min-h-[260px] sm:min-h-[340px] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-6 sm:p-10 flex flex-col justify-between">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

                {/* Top Metrics Bar Mockup */}
                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-md">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Total Clicks</p>
                    <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">+14,800</p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                      <TrendingUp size={11} /> +175% vs Prev Period
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-md">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Total Impressions</p>
                    <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">218,000+</p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                      <TrendingUp size={11} /> +240% Growth
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-md">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Average CTR</p>
                    <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">6.8% - 7.9%</p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-sky-400">
                      3.4x Industry Benchmark
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-md">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Average Position</p>
                    <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">Top 3 SERPs</p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-amber-400">
                      Page 1 Dominance
                    </span>
                  </div>
                </div>

                {/* Decorative Vector Line Chart SVG */}
                <div className="relative z-10 my-4 sm:my-6 w-full">
                  <svg viewBox="0 0 900 160" className="w-full h-24 sm:h-36 overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`gradient-${project.slug}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id={`gradient-purple-${project.slug}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Impressions Area (Purple) */}
                    <path
                      d="M0,130 Q120,110 240,95 T480,65 T720,40 T900,18 L900,160 L0,160 Z"
                      fill={`url(#gradient-purple-${project.slug})`}
                    />
                    <path
                      d="M0,130 Q120,110 240,95 T480,65 T720,40 T900,18"
                      fill="none"
                      stroke="#c084fc"
                      strokeWidth="2.5"
                    />
                    {/* Clicks Area (Blue) */}
                    <path
                      d="M0,145 Q120,135 240,115 T480,85 T720,55 T900,28 L900,160 L0,160 Z"
                      fill={`url(#gradient-${project.slug})`}
                    />
                    <path
                      d="M0,145 Q120,135 240,115 T480,85 T720,55 T900,28"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="3.5"
                    />
                  </svg>
                </div>

                {/* Bottom Placeholder Badge */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-blue-300 font-semibold">
                      <span className="h-2 w-2 rounded-full bg-blue-400" /> Total Clicks (Traffic)
                    </span>
                    <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                      <span className="h-2 w-2 rounded-full bg-purple-400" /> Impressions (Search Views)
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-white/40 bg-white/10 px-3 py-1 font-semibold text-white backdrop-blur-md">
                    <BarChart3 size={13} className="text-sky-300" />
                    <span>Google Search Console Screenshot Placeholder (Upload Ready)</span>
                  </div>
                </div>
              </div>

              {/* Bottom footer explaining methodology */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 px-6 py-3.5 text-xs text-slate-600">
                <span>Verified data source: Google Search Console (Organic Web Searches) &amp; GA4</span>
                <span className="font-semibold text-primary">Tracks Real User Clicks &amp; Search Visibility</span>
              </div>
            </div>
          </FadeInView>

          {/* Before vs After Impact Box */}
          <FadeInView>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-foreground text-lg sm:text-xl mb-4">
                Conversion & Performance Transformation
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                <div className="pt-4 sm:pt-0 sm:pr-6">
                  <p className="text-xs font-semibold uppercase text-slate-400">Mobile Speed (Core Web Vitals)</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xs text-rose-500 font-semibold line-through">4.8s Load</span>
                    <span className="text-lg font-extrabold text-emerald-600">0.85s (Fast LCP)</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Prevents visitor abandonment on mobile searches.</p>
                </div>
                <div className="pt-4 sm:pt-0 sm:px-6">
                  <p className="text-xs font-semibold uppercase text-slate-400">Search Engine Click-Through</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xs text-rose-500 font-semibold line-through">1.8% Avg</span>
                    <span className="text-lg font-extrabold text-emerald-600">6.8% Average CTR</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Enticing title tags and rich snippet schema markup.</p>
                </div>
                <div className="pt-4 sm:pt-0 sm:pl-6">
                  <p className="text-xs font-semibold uppercase text-slate-400">Enquiry Conversion Rate</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xs text-rose-500 font-semibold line-through">0.9%</span>
                    <span className="text-lg font-extrabold text-emerald-600">3.8% Visitor-to-Lead</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Frictionless forms and 1-tap WhatsApp booking buttons.</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* Section 3: Google Search Rankings (SEO Showcase) */}
        <section id="rankings" className="scroll-mt-24">
          <FadeInView>
            <div className="max-w-3xl mb-12">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                Search Engine Optimization
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-3 mb-4">
                Google search rankings & SERP positions
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Organic search rankings achieved for high-commercial-intent search queries. These keywords bring a predictable stream of ready-to-book customers directly from Google.
              </p>
            </div>
          </FadeInView>

          {/* Rankings Table */}
          <FadeInView>
            <div className="overflow-hidden rounded-2xl bg-white shadow-medical ring-1 ring-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold text-slate-600 uppercase tracking-wider">
                      <th className="py-4 px-6">Target Search Phrase (Keyword)</th>
                      <th className="py-4 px-4 text-center">Google Position</th>
                      <th className="py-4 px-4 hidden sm:table-cell">Search Intent</th>
                      <th className="py-4 px-4 hidden md:table-cell">Target Location</th>
                      <th className="py-4 px-6 text-right">Visibility Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {rankings.map((row, i) => (
                      <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-4 px-6 font-semibold text-slate-900 flex items-center gap-2.5">
                          <Search size={15} className="text-primary shrink-0" />
                          <span>{row.keyword}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span
                            className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-extrabold ${
                              row.position === "#1"
                                ? "bg-amber-100 text-amber-800 ring-1 ring-amber-300"
                                : row.position === "#2"
                                ? "bg-slate-100 text-slate-800 ring-1 ring-slate-300"
                                : "bg-sky-100 text-sky-800 ring-1 ring-sky-300"
                            }`}
                          >
                            {row.position}
                          </span>
                        </td>
                        <td className="py-4 px-4 hidden sm:table-cell text-slate-600 text-xs font-medium">
                          {row.intent || "Commercial"}
                        </td>
                        <td className="py-4 px-4 hidden md:table-cell text-slate-600 text-xs font-medium">
                          {row.location || project.location || "India"}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            {row.status || "Page 1 Top Spotlight"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* SEO Strategy Checklist */}
              <div className="border-t border-slate-100 bg-slate-50/50 p-6 sm:p-8">
                <h4 className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider">
                  SEO Architecture Delivered:
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>Schema.org Rich Snippets JSON-LD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>Intent-Driven H1-H3 Heading Hierarchy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>Google Business Profile & NAP Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>100% Core Web Vitals Pass (Mobile & Desktop)</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* Section 4: Project Features & Deliverables */}
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
