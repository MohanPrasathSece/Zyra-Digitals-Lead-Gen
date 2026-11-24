import { useEffect, useRef, useState } from "react";
import { CALENDLY_URL, loadCalendly } from "@/lib/calendly";

const CalendlyInline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;

    loadCalendly()
      .then((calendly) => {
        const container = containerRef.current;
        if (!active || !container || container.dataset.calendlyInitialized) return;
        container.dataset.calendlyInitialized = "true";
        calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: container,
        });
      })
      .catch(() => {
        if (active) setUnavailable(true);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[760px] min-h-[760px] w-full"
      role="region"
      aria-label="Calendly appointment scheduler"
    >
      {unavailable && (
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="font-semibold text-foreground">The scheduling calendar could not load.</p>
          <p className="mt-2 text-sm text-muted">You can open Calendly directly to choose a time.</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-blue-700"
          >
            Open Calendly
          </a>
        </div>
      )}
    </div>
  );
};

export default CalendlyInline;
