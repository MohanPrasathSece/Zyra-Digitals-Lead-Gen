import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import BrandWordmark from "@/components/BrandWordmark";

const CORE_SERVICES = [
  { to: "/web-design", label: "Website Design & Development" },
  { to: "/seo", label: "Search Engine Optimisation (SEO)" },
  { to: "/branding", label: "Branding & Logo Design" },
  { to: "/seo", label: "Local SEO & Google Maps" },
];

const COMPANY_LINKS = [
  { to: "/", label: "Home" },
  { to: "/our-work", label: "Our Work & Portfolio" },
  { to: "/about", label: "About Us" },
  { to: "/blogs", label: "Blog & Insights" },
  { to: "/contact", label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] pb-12 pt-14 text-white sm:pt-16 border-t border-slate-800">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <BrandWordmark />
            <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
              High-converting websites, Google SEO, and branding designed to bring your business more enquiries, phone calls, and bookings.
            </p>
            <div className="space-y-2 pt-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin size={15} className="shrink-0 text-primary" />
                <span>Malumichampatti, Coimbatore, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-primary" />
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition-colors font-mono">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-primary" />
                <a href={`mailto:${SITE.email}`} className="hover:text-sky-300 transition-colors">
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-sky-400">
              Services
            </h4>
            <ul className="space-y-2.5">
              {CORE_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-sky-400">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-base font-semibold text-white">Ready to grow?</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                Get a free website audit &amp; transparent proposal. Guaranteed reply within 1 hour.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-all hover:brightness-110 active:scale-95"
              >
                Get a Free Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Zyra Digitals. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
