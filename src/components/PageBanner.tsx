import FadeInView from "@/components/FadeInView";

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

const PageBanner = ({ image, title, subtitle, badge }: PageBannerProps) => (
  <section className="relative min-h-[210px] sm:min-h-[250px] lg:min-h-[320px] py-8 sm:py-12 lg:py-16 overflow-hidden flex items-center justify-center">
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
    <div className="relative z-10 w-full flex items-center justify-center text-center px-4 sm:px-6">
      <FadeInView>
        <div className="max-w-2xl mx-auto">
          {badge && (
            <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.14em] text-sky-300 mb-1.5 sm:mb-2">
              {badge}
            </p>
          )}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2 sm:mb-3 leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-100/90 max-w-xl mx-auto font-normal">
              {subtitle}
            </p>
          )}
        </div>
      </FadeInView>
    </div>
  </section>
);

export default PageBanner;
