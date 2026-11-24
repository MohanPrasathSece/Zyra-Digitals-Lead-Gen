import desktopShot from "@/assets/zyra/banner-home.jpg";
import mobileShot from "@/assets/zyra/banner-web-design.jpg";

/**
 * Static preview built from the site's existing website imagery.
 */
const HeroShowcase = () => (
  <div className="relative mx-auto w-full max-w-[320px] pb-24 sm:max-w-[460px] sm:pb-28 lg:max-w-[540px]">
    {/* Subtle blue glow */}
    <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_60%_40%,rgba(96,165,250,0.45),transparent_65%)] blur-2xl" />

    {/* Desktop browser mockup */}
    <div className="relative rounded-2xl bg-white shadow-2xl ring-1 ring-white/30">
      <div className="flex items-center gap-1.5 rounded-t-2xl border-b border-slate-200 bg-slate-100 px-3 py-2 sm:px-4 sm:py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
        <div className="ml-2.5 hidden flex-1 items-center gap-2 rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          www.yourbusiness.com
        </div>
      </div>
      <img
        src={desktopShot}
        alt="Website design preview displayed on desktop"
        width={1200}
        height={760}
        loading="eager"
        {...({ fetchpriority: "high" } as Record<string, string>)}
        decoding="async"
        className="h-[160px] w-full rounded-b-2xl object-cover sm:h-[240px] lg:h-[280px]"
      />
    </div>

    {/* Mobile phone mockup overlapping bottom-left */}
    <div className="absolute bottom-10 left-1 w-[78px] sm:bottom-14 sm:left-3 sm:w-[120px] lg:w-[130px]">
      <div className="rounded-[1.2rem] border-[4px] border-slate-900 bg-slate-900 shadow-2xl sm:rounded-[1.7rem] sm:border-[6px]">
        <div className="relative overflow-hidden rounded-[0.9rem] sm:rounded-[1.2rem]">
          <span className="absolute left-1/2 top-1 z-10 h-1 w-7 -translate-x-1/2 rounded-full bg-slate-900/70 sm:h-1.5 sm:w-11" />
          <img
            src={mobileShot}
            alt="Website design preview displayed on mobile"
            width={390}
            height={680}
            loading="eager"
            decoding="async"
            className="h-[128px] w-full object-cover sm:h-[200px] lg:h-[220px]"
          />
        </div>
      </div>
    </div>

    {/* Price badge - sits below the desktop mockup on the right, fully visible */}
    <div className="absolute bottom-0 right-0 sm:right-4">
      <div className="rounded-xl bg-primary px-4 py-2.5 shadow-2xl ring-1 ring-white/25 sm:px-5 sm:py-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-white/80 sm:text-[11px]">
          Website Development
        </p>
        <p className="text-lg font-extrabold leading-tight text-white sm:text-xl">
          Starts from ₹7,999
        </p>
      </div>
    </div>
  </div>
);

export default HeroShowcase;
