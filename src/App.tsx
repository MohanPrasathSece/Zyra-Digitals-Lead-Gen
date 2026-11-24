import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactActions from "@/components/FloatingContactActions";
import StickyBottomBar from "@/components/StickyBottomBar";
import CalendlyBadge from "@/components/CalendlyBadge";
import ScrollToTopOnNav from "@/components/ScrollToTopOnNav";
import ErrorBoundary from "@/components/ErrorBoundary";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import Home from "./pages/HomeLanding";

// Route-level code splitting with automatic chunk retry
const WebDesign = lazyWithRetry(() => import("./pages/WebDesign"));
const Seo = lazyWithRetry(() => import("./pages/Seo"));
const Branding = lazyWithRetry(() => import("./pages/Branding"));
const Services = lazyWithRetry(() => import("./pages/Services"));
const ServiceDetail = lazyWithRetry(() => import("./pages/ServiceDetail"));
const Locations = lazyWithRetry(() => import("./pages/Locations"));
const LocationDetail = lazyWithRetry(() => import("./pages/LocationDetail"));
const Industries = lazyWithRetry(() => import("./pages/Industries"));
const IndustryDetail = lazyWithRetry(() => import("./pages/IndustryDetail"));
const SlugPage = lazyWithRetry(() => import("./pages/SlugPage"));
const OurWork = lazyWithRetry(() => import("./pages/OurWork"));
const ProjectDetail = lazyWithRetry(() => import("./pages/ProjectDetail"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const About = lazyWithRetry(() => import("./pages/About"));
const Blogs = lazyWithRetry(() => import("./pages/Blogs"));
const BlogPost = lazyWithRetry(() => import("./pages/BlogPost"));
const LegalPage = lazyWithRetry(() => import("./pages/LegalPage"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));

import { HelmetProvider } from "react-helmet-async";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen flex flex-col">
          <ScrollToTopOnNav />
          <Navbar />
          <main className="flex-1">
            <ErrorBoundary>
              <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/web-design" element={<WebDesign />} />
                  <Route path="/seo" element={<Seo />} />
                  <Route path="/branding" element={<Branding />} />
                  <Route path="/logo-design" element={<Branding />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/locations" element={<Locations />} />
                  <Route path="/industries" element={<Industries />} />
                  <Route path="/industries/:slug" element={<IndustryDetail />} />
                  <Route path="/our-work" element={<OurWork />} />
                  <Route path="/our-work/:slug" element={<ProjectDetail />} />
                  <Route path="/projects/:slug" element={<ProjectDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/blogs/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<LegalPage />} />
                  <Route path="/terms-of-use" element={<LegalPage />} />
                  <Route path="/accessibility" element={<LegalPage />} />
                  {/* Service and location landing pages: flat, root-level URLs.
                      Placed last so the fixed routes above always win. */}
                  <Route path="/:slug" element={<SlugPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <FloatingContactActions />
          <StickyBottomBar />
          <CalendlyBadge />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
