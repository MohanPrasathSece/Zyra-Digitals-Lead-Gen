import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const ScrollToTopOnNav = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Jump straight to the top on navigation - instant, no smooth-scroll delay.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Push virtual pageviews to Google Tag Manager on every client-side route navigation
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname + (search || ""),
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
};

export default ScrollToTopOnNav;
