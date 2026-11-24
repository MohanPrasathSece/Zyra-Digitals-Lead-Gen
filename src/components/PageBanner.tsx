import FadeInView from "@/components/FadeInView";

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

const PageBanner = ({ image, title, subtitle, badge }: PageBannerProps) => (
  <section className="relative min-h-[230px] sm:min-h-[270px] lg:min-h-[340px] py-10 sm:py-14 lg:py-20 overflow-hidden flex items-center justify-center">
    <img
      src={image}
      alt=""
      aria-hidden="true"
      loading="eager"
      {...({ fetchpriority: "high" } as Record<string, string>)}
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-slate-950/70 backdrop-brightness-75" />
    <div className="relative z-10 w-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <FadeInView>
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          {badge && (
            <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.16em] text-sky-300 mb-2 sm:mb-2.5">
              {badge}
            </p>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2.5 sm:mb-3.5 leading-tight tracking-tight max-w-4xl lg:max-w-5xl mx-auto">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-100/90 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto font-normal">
              {subtitle}
            </p>
          )}
        </div>
      </FadeInView>
    </div>
  </section>
);

export default PageBanner;
