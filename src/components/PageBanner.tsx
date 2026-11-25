import type { ReactNode } from "react";
import FadeInView from "@/components/FadeInView";

interface PageBannerProps {
  image: string;
  title: ReactNode;
  subtitle?: string;
  badge?: string;
}

const PageBanner = ({ image, title, subtitle, badge }: PageBannerProps) => (
  <section className="relative min-h-[260px] sm:min-h-[310px] lg:min-h-[340px] py-14 sm:py-18 lg:py-20 overflow-hidden flex items-center justify-center">
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
    <div className="relative z-10 w-full text-center px-4 sm:px-6 lg:px-8">
      <FadeInView className="w-full">
        <div className="w-full max-w-5xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          {badge && (
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-sky-300 mb-2.5 sm:mb-3 lg:text-xs xl:text-sm">
              {badge}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-white mb-3 sm:mb-4 lg:mb-3.5 leading-tight tracking-tight max-w-full mx-auto [text-wrap:balance]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-base lg:text-[15px] xl:text-base leading-relaxed text-slate-100/95 max-w-3xl sm:max-w-4xl lg:max-w-3xl xl:max-w-4xl mx-auto font-normal">
              {subtitle}
            </p>
          )}
        </div>
      </FadeInView>
    </div>
  </section>
);

export default PageBanner;
