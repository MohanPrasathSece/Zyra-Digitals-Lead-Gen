import { Calendar } from "lucide-react";
import { CALENDLY_URL } from "@/lib/calendly";

const CalendlyBadge = () => {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an Appointment"
      title="Book an Appointment"
      className="fixed bottom-6 sm:bottom-[72px] lg:bottom-[78px] right-5 z-35 flex h-[52px] w-[52px] sm:h-auto sm:w-auto items-center justify-center rounded-full bg-[#0069ff] text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-105 hover:bg-[#0052cc] active:scale-95 sm:px-4 sm:py-2.5"
    >
      <Calendar size={22} className="shrink-0 text-white" aria-hidden="true" />
      <span className="hidden sm:inline text-xs sm:text-sm font-semibold whitespace-nowrap pl-2">
        Book Appointment
      </span>
    </a>
  );
};

export default CalendlyBadge;
