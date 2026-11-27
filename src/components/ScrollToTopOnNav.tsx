import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Disable browser's automatic scroll restoration so it doesn't delay or fight SPA navigation
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ScrollToTopOnNav = () => {
  const { pathname, search, hash } = useLocation();

  useIsomorphicLayoutEffect(() => {
    // If navigating to an in-page anchor hash (e.g. #get-quote)
    if (hash) {
      const target = document.getElementById(hash.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Instantly jump to the very top with zero delay and no animation
    const jumpToTop = () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.scrollBehavior = "auto";

      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    jumpToTop();

    // Re-verify in requestAnimationFrame and short timeout in case Suspense/lazy chunks render slightly later
    const rafId = requestAnimationFrame(jumpToTop);
    const timer = setTimeout(jumpToTop, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [pathname, search, hash]);

  useEffect(() => {
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
