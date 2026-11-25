import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import BrandWordmark from "@/components/BrandWordmark";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const isActive = (to: string, hasChildren?: boolean) => {
    const currentPath = location.pathname;
    if (to === "/our-work") {
      return (
        currentPath === "/our-work" ||
        currentPath.startsWith("/our-work/") ||
        currentPath.startsWith("/projects/")
      );
    }
    if (to === "/blogs") {
      return (
        currentPath === "/blogs" ||
        currentPath.startsWith("/blogs/") ||
        currentPath.startsWith("/blog/")
      );
    }
    if (to === "/industries") {
      return (
        currentPath === "/industries" ||
        currentPath.startsWith("/industries/")
      );
    }
    if (to === "/web-design") {
      return currentPath === "/web-design" || currentPath === "/branding" || currentPath === "/logo-design";
    }
    return hasChildren ? currentPath.startsWith(to) : currentPath === to;
  };

  const handleNavClick = (to: string) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    setIndustriesOpen(false);
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-100" style={{ boxShadow: "var(--shadow-sm)" }}>
      <div className="container mx-auto flex items-center justify-between py-2 px-4 sm:px-6">
        <Link to="/" className="flex items-center shrink-0" aria-label="Zyra Digitals home">
          <BrandWordmark compact />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <div key={link.to} className="relative group">
              <Link
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`relative flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-xs font-semibold tracking-normal transition-colors xl:px-3 xl:text-sm ${
                  isActive(link.to, !!link.children)
                    ? "text-primary"
                    : "text-slate-800 hover:text-primary"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown size={14} aria-hidden="true" className="text-slate-600 group-hover:text-primary transition-colors" />}
                {isActive(link.to, !!link.children) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                )}
              </Link>

              {link.children && (
                <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-3 group-hover:block group-focus-within:block">
                  <div className="w-[min(36rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_16px_40px_-20px_rgba(15,23,42,0.35)]">
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
                      <p className="text-xs font-semibold text-slate-500">Industries we serve</p>
                      <Link
                        to="/industries"
                        onClick={() => handleNavClick("/industries")}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        View all
                      </Link>
                    </div>
                    <div className="grid max-h-[min(65vh,28rem)] grid-cols-2 gap-1 overflow-y-auto p-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => handleNavClick(child.to)}
                          className="group/item flex min-h-11 items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                            {child.label}
                          </span>
                          <ArrowRight size={14} className="shrink-0 text-slate-300 group-hover/item:text-primary" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden xl:inline-flex items-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 active:scale-95 transition-all duration-200 whitespace-nowrap"
        >
          Request a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-lg p-2 text-foreground hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Simple in-flow mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card shadow-md">
          <div className="container mx-auto px-4 py-3 sm:px-6">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.to}>
                  <div className="flex items-center gap-2">
                    <Link
                      to={link.to}
                      onClick={() => handleNavClick(link.to)}
                      className={`flex-1 rounded-lg px-3 py-3 text-sm font-semibold tracking-normal transition-colors ${
                        isActive(link.to, !!link.children)
                          ? "bg-primary/10 text-primary"
                          : "text-slate-800 hover:bg-slate-100 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        type="button"
                        onClick={() => setIndustriesOpen(!industriesOpen)}
                        aria-label="Toggle industry links"
                        aria-expanded={industriesOpen}
                        className="rounded-lg p-3 text-foreground hover:bg-primary/5"
                      >
                        <ChevronDown
                          size={18}
                          className={industriesOpen ? "rotate-180" : ""}
                        />
                      </button>
                    )}
                  </div>
                  {link.children && industriesOpen && (
                    <div className="ml-4 rounded-xl border-l-2 border-primary/25 bg-blue-50/70 py-2 pl-3">
                      <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                        Explore industries
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => handleNavClick(child.to)}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-white hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => handleNavClick("/contact")}
              className="mt-3 flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
