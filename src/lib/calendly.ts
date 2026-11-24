export const CALENDLY_URL = "https://calendly.com/mohanprasathofficial/30min";

type CalendlyApi = {
  initBadgeWidget: (options: {
    url: string;
    text: string;
    color: string;
    textColor: string;
    branding: boolean;
  }) => void;
  initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
    zyraCalendlyBadgeInitialized?: boolean;
  }
}

let calendlyPromise: Promise<CalendlyApi> | null = null;

export const loadCalendly = (): Promise<CalendlyApi> => {
  if (window.Calendly) return Promise.resolve(window.Calendly);
  if (calendlyPromise) return calendlyPromise;

  if (!document.getElementById("calendly-widget-css")) {
    const stylesheet = document.createElement("link");
    stylesheet.id = "calendly-widget-css";
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(stylesheet);
  }

  calendlyPromise = new Promise<CalendlyApi>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Calendly) resolve(window.Calendly);
      else reject(new Error("Calendly widget did not initialize."));
    };
    script.onerror = () => reject(new Error("Calendly widget could not be loaded."));
    document.body.appendChild(script);
  }).catch((error: unknown) => {
    calendlyPromise = null;
    throw error;
  });

  return calendlyPromise;
};
