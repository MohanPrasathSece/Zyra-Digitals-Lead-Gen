import FadeInView from "@/components/FadeInView";

import achyutam from "@/assets/brands_we_worked_with/achyutam.png";
import ajanta from "@/assets/brands_we_worked_with/ajanta.png";
import crowdverse from "@/assets/brands_we_worked_with/crowdverse.png";
import elevate from "@/assets/brands_we_worked_with/elevate.png";
import happydental from "@/assets/brands_we_worked_with/happydental_newlogo-removebg-preview.png";
import kpj from "@/assets/brands_we_worked_with/kpj_new_logo-removebg-preview.png";
import nirvana from "@/assets/brands_we_worked_with/nirvana.png";
import orchidDental from "@/assets/brands_we_worked_with/orchid dental.png";
import seekbuylove from "@/assets/brands_we_worked_with/seekbuylove.png";
import sevakai from "@/assets/brands_we_worked_with/sevakai black.png";
import skr from "@/assets/brands_we_worked_with/skr_logo-removebg-preview.png";
import skylogo from "@/assets/brands_we_worked_with/skylogo.png";

const CLIENTS = [
  { name: "Achyutam", logo: achyutam },
  { name: "Orchid Dental", logo: orchidDental },
  { name: "Ajanta", logo: ajanta },
  { name: "Happy Dental", logo: happydental },
  { name: "Crowdverse", logo: crowdverse },
  { name: "KPJ Group", logo: kpj },
  { name: "Elevate", logo: elevate },
  { name: "Nirvana", logo: nirvana },
  { name: "Seek Buy Love", logo: seekbuylove },
  { name: "Sevakai", logo: sevakai },
  { name: "SKR", logo: skr },
  { name: "Sky Logo", logo: skylogo },
];

const ClientLogos = () => {
  return (
    <section className="border-y border-slate-100 bg-slate-50/70 py-14 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 mb-8 text-center">
        <FadeInView>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">
            Brands We've Worked With
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Trusted by Growing Businesses &amp; Brands
          </h2>
        </FadeInView>
      </div>

      {/* Infinite scrolling logo row (right to left) */}
      <div className="relative w-full overflow-hidden">
        {/* Subtle gradient masks on left and right edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-slate-50/90 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-slate-50/90 to-transparent" />

        <div className="animate-marquee flex items-center gap-10 sm:gap-14 py-3">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex h-16 w-36 sm:h-20 sm:w-44 shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:scale-105 hover:shadow-md"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                className="max-h-12 sm:max-h-14 w-auto max-w-full object-contain transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
