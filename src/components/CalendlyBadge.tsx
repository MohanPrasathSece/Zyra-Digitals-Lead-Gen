import { useEffect } from "react";
import { CALENDLY_URL, loadCalendly } from "@/lib/calendly";

const CalendlyBadge = () => {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let idleId: number | null = null;
    let initialized = false;

    const init = () => {
      if (initialized || window.zyraCalendlyBadgeInitialized) return;
      initialized = true;

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
          // Graceful fallback: contact page has direct link
        });
    };

    // Defer initialization until the main thread is idle or on first touch/interaction
    if (typeof window !== "undefined") {
      const interactionEvents = ["touchstart", "scroll", "pointerdown", "keydown"];
      const onUserInteraction = () => {
        interactionEvents.forEach((e) => window.removeEventListener(e, onUserInteraction));
        init();
      };

      interactionEvents.forEach((e) =>
        window.addEventListener(e, onUserInteraction, { once: true, passive: true })
      );

      // Idle fallback after 3s if no interaction occurs
      const win = window as unknown as {
        requestIdleCallback?: (cb: () => void, opts: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };

      if (typeof win.requestIdleCallback === "function") {
        idleId = win.requestIdleCallback(init, { timeout: 3000 });
      } else {
        timeoutId = setTimeout(init, 3000);
      }

      return () => {
        interactionEvents.forEach((e) => window.removeEventListener(e, onUserInteraction));
        if (timeoutId) clearTimeout(timeoutId);
        if (idleId && typeof win.cancelIdleCallback === "function") {
          win.cancelIdleCallback(idleId);
        }
      };
    }
  }, []);

  return null;
};

export default CalendlyBadge;

