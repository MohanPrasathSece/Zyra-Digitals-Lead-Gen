import FadeInView from "@/components/FadeInView";

import achyutam from "@/assets/brands_we_worked_with/achyutam.png";
import ajanta from "@/assets/brands_we_worked_with/ajanta.png";
import apexrevops from "@/assets/brands_we_worked_with/apexrevops.png";
import assetCircle from "@/assets/brands_we_worked_with/asset circle.png";
import autodigix from "@/assets/brands_we_worked_with/autodigix.png";
import avenza from "@/assets/brands_we_worked_with/avenza.png";
import crowdverse from "@/assets/brands_we_worked_with/crowdverse.png";
import elevate from "@/assets/brands_we_worked_with/elevate.png";
import femtricks from "@/assets/brands_we_worked_with/femtricks.png";
import filizat from "@/assets/brands_we_worked_with/filizat.png";
import happydental from "@/assets/brands_we_worked_with/happydental_newlogo-removebg-preview.png";
import kpj from "@/assets/brands_we_worked_with/kpj_new_logo-removebg-preview.png";
import nirvana from "@/assets/brands_we_worked_with/nirvana.png";
import orchidDental from "@/assets/brands_we_worked_with/orchid dental.png";
import phoenix from "@/assets/brands_we_worked_with/phoenix.png";
import qualitech from "@/assets/brands_we_worked_with/qualitech.png";
import revelle from "@/assets/brands_we_worked_with/revelle.png";
import seekbuylove from "@/assets/brands_we_worked_with/seekbuylove.png";
import sevakai from "@/assets/brands_we_worked_with/sevakai black.png";
import skr from "@/assets/brands_we_worked_with/skr_logo-removebg-preview.png";
import skylogo from "@/assets/brands_we_worked_with/skylogo.png";
import solaraAssets from "@/assets/brands_we_worked_with/solara assets.png";
import theFinanceView from "@/assets/brands_we_worked_with/the finance view.png";
import theLedgerCapital from "@/assets/brands_we_worked_with/the ledger capital.png";
import theMarketOffice from "@/assets/brands_we_worked_with/The market office.png";
import theReportDesk from "@/assets/brands_we_worked_with/the report desk.png";

const CLIENTS = [
  { name: "Orchid Dental", logo: orchidDental },
  { name: "Happy Dental", logo: happydental },
  { name: "Nirvana Spine & Pain", logo: nirvana },
  { name: "Phoenix Mediclinic", logo: phoenix },
  { name: "Achyutam Organics", logo: achyutam },
  { name: "Qualitech Connectronics", logo: qualitech },
  { name: "Apex RevOps", logo: apexrevops },
  { name: "AutoDigiX", logo: autodigix },
  { name: "Elevate", logo: elevate },
  { name: "Filizat Metals", logo: filizat },
  { name: "KPJ Group", logo: kpj },
  { name: "SKR Metal Suppliers", logo: skr },
  { name: "The Market Office", logo: theMarketOffice },
  { name: "The Report Desk", logo: theReportDesk },
  { name: "Asset Circle", logo: assetCircle },
  { name: "The Ledger Capital", logo: theLedgerCapital },
  { name: "The Finance View", logo: theFinanceView },
  { name: "Solara Assets", logo: solaraAssets },
  { name: "Avenza", logo: avenza },
  { name: "Revelle", logo: revelle },
  { name: "Ajanta", logo: ajanta },
  { name: "Crowdverse", logo: crowdverse },
  { name: "Seek Buy Love", logo: seekbuylove },
  { name: "Sevakai", logo: sevakai },
  { name: "Femtricks", logo: femtricks },
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
              className="flex h-16 w-36 sm:h-20 sm:w-44 shrink-0 items-center justify-center rounded-xl bg-white px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:scale-105 hover:shadow-md"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                className="max-h-[48px] sm:max-h-[64px] w-auto max-w-[88%] object-contain transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
