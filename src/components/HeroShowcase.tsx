import heroRightShot from "@/assets/banners/hero_sec_right_side.webp";

/**
 * Hero section preview featuring multi-device mockups and crisp white price badge.
 */
const HeroShowcase = () => (
  <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[520px] lg:max-w-[640px] xl:max-w-[690px] pt-2 pb-6">
    {/* Subtle blue glow */}
    <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_60%_40%,rgba(96,165,250,0.45),transparent_65%)] blur-2xl" />

    {/* Multi-device hero showcase image */}
    <div className="relative z-10 transition-transform duration-300 hover:scale-[1.015]">
      <img
        src={heroRightShot}
        alt="Website design preview across desktop, tablet, and mobile"
        width={1461}
        height={1076}
        loading="eager"
        {...({ fetchpriority: "high" } as Record<string, string>)}
        decoding="async"
        className="w-full h-auto drop-shadow-2xl"
      />

      {/* Price badge - white card, positioned up and to the right over the phone mockup */}
      <div className="absolute bottom-2 left-6 sm:bottom-4 sm:left-10 z-20">
        <div className="rounded-xl bg-white px-4 py-2.5 shadow-2xl ring-1 ring-slate-200/90 transition-transform duration-200 hover:scale-105">
          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 sm:text-[11px]">
            Website Development
          </p>
          <p className="text-base font-black leading-tight text-slate-900 sm:text-lg">
            Starts from ₹7,999
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroShowcase;
