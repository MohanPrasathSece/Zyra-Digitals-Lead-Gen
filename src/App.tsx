import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactActions from "@/components/FloatingContactActions";
import CalendlyBadge from "@/components/CalendlyBadge";
import ScrollToTopOnNav from "@/components/ScrollToTopOnNav";
import Home from "./pages/HomeLanding";

// Route-level code splitting keeps the initial bundle small, which improves
// Largest Contentful Paint and Interaction to Next Paint (Core Web Vitals).
const WebDesign = lazy(() => import("./pages/WebDesign"));
const Seo = lazy(() => import("./pages/Seo"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Locations = lazy(() => import("./pages/Locations"));
const LocationDetail = lazy(() => import("./pages/LocationDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail"));
const SlugPage = lazy(() => import("./pages/SlugPage"));
const OurWork = lazy(() => import("./pages/OurWork"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
            <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/web-design" element={<WebDesign />} />
                <Route path="/seo" element={<Seo />} />
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
          </main>
          <FloatingContactActions />
          <CalendlyBadge />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
