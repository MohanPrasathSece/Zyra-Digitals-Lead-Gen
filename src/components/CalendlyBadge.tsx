import { useEffect } from "react";
import { CALENDLY_URL, loadCalendly } from "@/lib/calendly";

const CalendlyBadge = () => {
  useEffect(() => {
    loadCalendly()
      .then((calendly) => {
        if (window.zyraCalendlyBadgeInitialized) return;
        calendly.initBadgeWidget({
          url: CALENDLY_URL,
          text: "Schedule a 30-minute call",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: true,
        });
        window.zyraCalendlyBadgeInitialized = true;
      })
      .catch(() => {
        // The contact page also includes a direct fallback link if Calendly is unavailable.
      });
  }, []);

  return null;
};

export default CalendlyBadge;
