import { PhoneCall } from "lucide-react";
import { SITE } from "@/lib/site";

const FloatingContactActions = () => (
  <div className="fixed right-5 bottom-[88px] sm:bottom-40 z-40 flex flex-col gap-3">
    <a
      href={`${SITE.whatsappHref}?text=${encodeURIComponent("Hi Zyra Digitals, I would like to discuss a project.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zyra Digitals on WhatsApp"
      title="Chat on WhatsApp"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M16.02 3.2A12.7 12.7 0 0 0 5.1 22.38L3.4 28.6l6.37-1.67A12.7 12.7 0 1 0 16.02 3.2Zm0 23.12c-1.95 0-3.85-.52-5.52-1.51l-.4-.24-3.78.99 1.01-3.68-.26-.42a10.39 10.39 0 1 1 8.95 4.86Zm5.7-7.78c-.31-.16-1.84-.91-2.12-1.01-.29-.1-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.15-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.25-.61-.51-.52-.71-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.28 3.24.16.21 2.22 3.39 5.37 4.75.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    </a>
    <a
      href={`tel:${SITE.phoneHref}`}
      aria-label={`Call Zyra Digitals at ${SITE.phoneDisplay}`}
      title="Call Zyra Digitals"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <PhoneCall size={22} aria-hidden="true" />
    </a>
  </div>
);

export default FloatingContactActions;
