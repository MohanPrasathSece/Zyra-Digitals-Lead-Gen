import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FadeInView from "@/components/FadeInView";

export const generalFaqs = [
  {
    q: "How much does a business website cost?",
    a: "Website pricing depends on the number of pages, features and requirements. Contact us for a quote.",
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes. We provide SEO services to help businesses improve their Google visibility and attract relevant visitors.",
  },
  {
    q: "How long does website development take?",
    a: "It depends on the project size and features. We'll share an estimated timeline before starting.",
  },
  {
    q: "Do you work with businesses outside Coimbatore?",
    a: "Yes. We work with clients across India and internationally through online communication.",
  },
  {
    q: "Can I contact you for both website design and SEO?",
    a: "Yes. We provide website design, SEO and branding services.",
  },
];

export const serviceFaqs = [
  {
    q: "Do you build responsive, mobile-friendly websites?",
    a: "Always. We design mobile-first, because most of your visitors will browse on a phone. Every site we deliver is fast, responsive and tested across mobile, tablet and desktop.",
  },
  {
    q: "How long until I see results from SEO?",
    a: "SEO timing varies with your website, competition and target searches. We do not promise a ranking date; we report progress and adjust the work regularly.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can modernise your current site, improve its speed and conversion rate, or build a completely new one - while keeping the parts that already work well.",
  },
  {
    q: "Do you provide branding and logo design?",
    a: "We do. From logos and colour systems to brand guidelines and social media assets, we create a consistent identity that makes your business look credible and memorable.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors text-base lg:text-lg">{q}</span>
        <ChevronDown
          size={20}
          className={`text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-[15px] sm:text-sm lg:text-base text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

interface HomeFAQProps {
  serviceFaqs?: boolean;
  /** Custom FAQ set for a specific page. Overrides the built-in sets when provided. */
  items?: { q: string; a: string }[];
  heading?: string;
}

const HomeFAQ = ({ serviceFaqs: useServiceFaqs = false, items, heading }: HomeFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = items ?? (useServiceFaqs ? serviceFaqs : generalFaqs);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-foreground">{heading ?? "Frequently Asked Questions"}</h2>
          </div>
        </FadeInView>
        
        <FadeInView delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-background shadow-medical p-6">
              {faqs.map((faq, idx) => (
                <FAQItem key={faq.q} {...faq} isOpen={openIndex === idx} onToggle={() => handleToggle(idx)} />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default HomeFAQ;
