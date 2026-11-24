import { useState, FormEvent, useRef } from "react";
import { CheckCircle2, Briefcase, IndianRupee, Mail, Phone, User } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";
import { SITE } from "@/lib/site";

export const SERVICE_OPTIONS = [
  "Website Design",
  "SEO",
  "Branding & Logo Design",
  "Multiple Services",
];

const BUDGET_OPTIONS = [
  "Under ₹9,999",
  "₹9,999 - ₹24,999",
  "₹24,999 - ₹49,999",
  "₹49,999+",
  "Not sure yet",
];

interface LeadFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  defaultService?: string;
  badge?: string;
  className?: string;
  embedded?: boolean;
}

const LeadForm = ({
  id = "get-quote",
  title = "Get Your Free Quote",
  subtitle = "Tell us about your business and we'll send a free website audit plus a custom proposal - reply guaranteed within 1 hour, so you can start turning visitors into enquiries.",
  buttonText = "Get My Free Quote",
  defaultService = "",
  badge = "",
  className = "",
  embedded = false,
}: LeadFormProps) => {
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const business = (formData.get("business") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const details = (formData.get("details") as string) || "";
    const chosenService = service || defaultService || "General enquiry";

    const message =
      `Business name: ${business || "-"}\n` +
      `Service required: ${chosenService}\n` +
      `Budget: ${budget || "-"}\n\n` +
      `Project details: ${details || "-"}`;

    try {
      const fetchPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      const timerPromise = new Promise((resolve) => setTimeout(resolve, 1500));

      const [resp] = await Promise.all([fetchPromise, timerPromise]);

      if (!resp.ok) {
        const data = (await resp.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Request failed");
      }

      if (formRef.current) formRef.current.reset();
      setService(defaultService);
      setBudget("");
      setShowSuccess(true);
    } catch (error) {
      console.error("Lead form error:", error);
      toast.error("Failed to send your request. Please try again or message us on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id={id}
      className={`${embedded ? "h-full scroll-mt-24" : "bg-blue-50/80 py-16 scroll-mt-24 sm:py-20"} ${className}`}
    >
      <div className={embedded ? "h-full" : "container mx-auto px-5 sm:px-6"}>
        <div className={`mx-auto ${embedded ? "h-full max-w-none" : "max-w-3xl"}`}>
          {/* Header */}
          <div className={`mb-7 ${embedded ? "text-left" : "text-center"}`}>
            {badge ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
                {badge}
              </p>
            ) : null}
            <h2 className="mb-3 text-gray-900">{title}</h2>
            <p className={`${embedded ? "" : "mx-auto max-w-2xl "}text-[15px] leading-relaxed text-gray-600`}>{subtitle}</p>
          </div>

          {/* Two-column form */}
          <div className="rounded-2xl bg-card p-5 shadow-lg ring-1 ring-primary/10 sm:p-7">
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-foreground">
                  <User size={13} className="text-primary" /> Full Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-foreground">
                  <Briefcase size={13} className="text-primary" /> Business Name
                </label>
                <input
                  name="business"
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-foreground">
                  <Phone size={13} className="text-primary" /> Phone / WhatsApp
                </label>
                <input
                  required
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-foreground">
                  <Mail size={13} className="text-primary" /> Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-foreground">
                  Service Required
                </label>
                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-card px-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-foreground">
                  <IndianRupee size={13} className="text-primary" /> Your Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-card px-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a budget range</option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[13px] font-medium text-foreground">Tell Us About Your Project</label>
                <textarea
                  name="details"
                  rows={3}
                  className="w-full resize-none rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us a little about your business and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-95 disabled:opacity-50 sm:col-span-2"
              >
                {sending ? "Sending..." : buttonText}
              </button>

              <p className="text-center text-xs text-muted sm:col-span-2">
                Your details will only be used to contact you about your enquiry. Guaranteed reply within 1 hour.
              </p>
            </form>
          </div>

          {/* Direct contact */}
          {!embedded && (
            <div className="mt-5 flex flex-col items-center justify-center gap-2 text-sm text-gray-700 sm:flex-row sm:gap-6">
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Phone size={16} className="shrink-0 text-primary" />
              <span>{SITE.whatsappLabel}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Mail size={16} className="shrink-0 text-primary" />
              <span>{SITE.email}</span>
            </a>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md text-center p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">Request Sent!</DialogTitle>
              <DialogDescription className="text-center text-base pt-2">
                Thank you! We've received your details and will get back to you within 1 hour - guaranteed - with your free audit and a proposal built to bring you more enquiries.
              </DialogDescription>
            </DialogHeader>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 px-8 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:brightness-110 transition-all focus:outline-none"
            >
              Continue
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LeadForm;
