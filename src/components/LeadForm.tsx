import { useState, FormEvent, useRef } from "react";
import { CheckCircle2, Briefcase, IndianRupee, Mail, Phone, User, AlertCircle } from "lucide-react";
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSubmitted, setLastSubmitted] = useState({ name: "", phone: "", email: "", details: "" });
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const business = (formData.get("business") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const details = (formData.get("details") as string) || "";
    const chosenService = service || defaultService || "General enquiry";

    setLastSubmitted({ name, phone, email, details });

    const message =
      `Business name: ${business || "-"}\n` +
      `Service required: ${chosenService}\n` +
      `Budget: ${budget || "-"}\n\n` +
      `Project details: ${details || "-"}`;

    const timestamp = new Date().toISOString();

    // 1. Log form submission movement in browser console
    console.group(`🚀 [Zyra SMTP Client] Form Submission Started (${timestamp})`);
    console.log("📝 Lead Details Collected:", {
      clientName: name,
      businessName: business,
      phone: phone,
      email: email,
      service: chosenService,
      budget: budget,
      projectDetails: details,
    });
    console.log("📡 Endpoint Target: POST /api/contact");
    console.log("⏳ Dispatching request to server...");

    try {
      const fetchPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      const timerPromise = new Promise((resolve) => setTimeout(resolve, 1000));

      const [resp] = await Promise.all([fetchPromise, timerPromise]);

      console.log(`📬 Server Response Received: HTTP ${resp.status} ${resp.statusText}`);

      const data = await resp.json().catch(() => null);

      if (!resp.ok) {
        console.error("❌ [Zyra SMTP Server Error]:", data);
        throw new Error(
          data?.error ||
          "Form submission is not working right now or submission limits were exceeded."
        );
      }

      console.log("✅ [Zyra SMTP Success] Lead processed successfully!");
      if (data?.steps && Array.isArray(data.steps)) {
        console.groupCollapsed("📋 Detailed SMTP Delivery Movements:");
        data.steps.forEach((step: string) => console.log(step));
        console.groupEnd();
      }
      console.log("📨 Admin Email Delivered To:", data?.adminRecipient || "mohanprasathofficial@gmail.com");
      console.log("📨 Confirmation Delivered To:", data?.customerRecipient || email);
      console.log("🆔 Message ID:", data?.messageId);
      console.groupEnd();

      if (formRef.current) formRef.current.reset();
      setService(defaultService);
      setBudget("");
      setErrorMessage(null);
      setShowSuccess(true);
    } catch (error: any) {
      console.error("❌ [Zyra SMTP Pipeline Failed]:", error);
      console.warn("⚠️ Fallback Direct Contact Info:");
      console.warn(`📧 Email: ${SITE.email}`);
      console.warn(`💬 WhatsApp: ${SITE.whatsappLabel}`);
      console.groupEnd();

      const errMsg =
        error?.message ||
        "The automated form is temporarily unavailable or form submission limit was exceeded.";
      setErrorMessage(errMsg);
      toast.error("Form is currently not working. Please contact us directly via email or WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {!embedded && (
            <div className="text-center mb-10">
              {badge && (
                <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
                  {badge}
                </span>
              )}
              <h2 className="text-foreground mb-3">{title}</h2>
              <p className="text-muted text-base">{subtitle}</p>
            </div>
          )}

          <div className="bg-card rounded-2xl p-6 sm:p-10 shadow-medical ring-1 ring-primary/10">
            {embedded && (
              <div className="mb-8">
                {badge && (
                  <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-2">
                    {badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted text-sm">{subtitle}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">
                  Your Name <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="e.g. Ramesh Kumar"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">
                  Business / Practice Name
                </label>
                <div className="relative">
                  <Briefcase size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    name="business"
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="e.g. Apex Clinic"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">
                  Phone / WhatsApp <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-3.5 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Service You Need</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">Estimated Budget</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select budget range...</option>
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

              {/* Direct email & WhatsApp fallback banner when form is not working or limit exceeded */}
              {errorMessage && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 sm:p-5 text-left sm:col-span-2 shadow-xs">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-red-900">
                        Form is not working / Form filling exceeded
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-red-700 leading-relaxed">
                        The automated form could not process your submission right now. Please email us directly or message on WhatsApp for an immediate response:
                      </p>

                      <div className="mt-3.5 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5">
                        <a
                          href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Website Project Enquiry - ${lastSubmitted.name || "Client Enquiry"}`)}&body=${encodeURIComponent(`Hi Zyra Digitals,\n\nName: ${lastSubmitted.name}\nPhone: ${lastSubmitted.phone}\nEmail: ${lastSubmitted.email}\n\nProject details:\n${lastSubmitted.details}`)}`}
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-red-700 active:scale-95 transition-all"
                        >
                          <Mail size={15} />
                          <span>Email Directly: {SITE.email}</span>
                        </a>

                        <a
                          href={`${SITE.whatsappHref}?text=${encodeURIComponent(`Hi Zyra Digitals, I was submitting a project enquiry. Name: ${lastSubmitted.name || ""}, Phone: ${lastSubmitted.phone || ""}. Project details: ${lastSubmitted.details || ""}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:brightness-105 active:scale-95 transition-all"
                        >
                          <Phone size={15} />
                          <span>WhatsApp: {SITE.phoneDisplay}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
