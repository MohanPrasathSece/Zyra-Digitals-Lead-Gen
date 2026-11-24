import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

const StickyBottomBar = () => {
  return (
    <footer
      aria-label="Quick contact sticky bar"
      className="fixed bottom-0 left-0 right-0 z-40 hidden border-t border-slate-200/90 bg-[#f4f5f7] px-4 py-2 shadow-[0_-1px_4px_rgba(0,0,0,0.04)] sm:block"
    >
      <div className="container mx-auto flex items-center justify-between gap-4 max-w-7xl">
        {/* Left: Brand logo + name */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 hover:opacity-85 transition-opacity"
        >
          <img
            src="/favicon.png"
            alt="Zyra Digitals"
            width={20}
            height={20}
            style={{ width: "20px", height: "20px" }}
            className="h-5 w-5 rounded-full object-contain shrink-0"
          />
          <span className="text-xs font-semibold text-slate-800 tracking-tight whitespace-nowrap">
            {SITE.name}
          </span>
        </Link>

        {/* Right / Center: Contact & Hours details matching the reference bar */}
        <div className="flex items-center gap-3 lg:gap-5 text-xs text-slate-700 overflow-hidden">
          {/* Phone pill button */}
          <a
            href={`tel:${SITE.phoneHref}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-300/80 px-3 py-1 text-xs font-medium text-slate-800 shadow-2xs hover:border-blue-500 hover:text-blue-600 active:scale-95 transition-all shrink-0"
            title={`Call ${SITE.phoneDisplay}`}
          >
            <Phone size={12} className="text-blue-600 shrink-0 fill-blue-600/10" />
            <span className="whitespace-nowrap">{SITE.phoneDisplay}</span>
          </a>

          {/* Location */}
          <div className="hidden md:inline-flex items-center gap-1.5 text-slate-600 shrink-0">
            <MapPin size={12} className="text-blue-600 shrink-0" />
            <span className="whitespace-nowrap">Coimbatore, Tamil Nadu, India</span>
          </div>

          {/* Email */}
          <a
            href={`mailto:${SITE.email}`}
            className="hidden lg:inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 hover:underline transition-colors shrink-0"
            title={`Email ${SITE.email}`}
          >
            <Mail size={12} className="text-blue-600 shrink-0" />
            <span className="whitespace-nowrap">{SITE.email}</span>
          </a>

          {/* Working Hours */}
          <div className="hidden sm:inline-flex items-center gap-1.5 text-slate-600 shrink-0">
            <Clock size={12} className="text-blue-600 shrink-0" />
            <span className="whitespace-nowrap">Mon–Sun 8am–12am IST</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StickyBottomBar;
