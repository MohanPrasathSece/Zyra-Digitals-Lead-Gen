import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNav = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump straight to the top on navigation - instant, no smooth-scroll delay.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTopOnNav;
