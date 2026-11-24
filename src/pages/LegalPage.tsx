import { Link, useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/site";

type LegalPageKey = "privacy-policy" | "terms-of-use" | "accessibility";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

const LEGAL_PAGES: Record<
  LegalPageKey,
  { title: string; description: string; sections: LegalSection[] }
> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "Learn what information Zyra Digitals collects through this website, how enquiries are used, and how to contact us about your information.",
    sections: [
      {
        heading: "Information you provide",
        paragraphs: [
          "When you send an enquiry, we may collect your name, business name, phone number, email address, selected service, optional budget range and project details.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "We use enquiry details to respond to you, prepare requested audits or proposals, follow up about your project and maintain appropriate business records. We do not sell your personal information.",
        ],
      },
      {
        heading: "Email and service providers",
        paragraphs: [
          "Enquiry details are sent to our website backend. When email delivery is configured, the information is used to notify our team and send you an acknowledgement. Providers that help us operate the website or email may process information for those purposes.",
        ],
      },
      {
        heading: "Retention and your choices",
        paragraphs: [
          "We keep enquiry information for as long as reasonably needed to handle the enquiry, maintain business records or meet applicable legal requirements. To ask about, correct or request deletion of information you submitted, contact us at",
        ],
      },
      {
        heading: "External services and updates",
        paragraphs: [
          "This website loads fonts from Google Fonts and uses Calendly for meeting scheduling. If you open the booking widget or schedule a meeting, Calendly may process the details you submit under its own privacy terms. Phone, email and WhatsApp links also use their respective providers. We may update this policy as our website or practices change; the date below indicates the latest revision.",
        ],
      },
    ],
  },
  "terms-of-use": {
    title: "Terms of Use",
    description:
      "Terms for using the Zyra Digitals website and information about service proposals, project scope and third-party services.",
    sections: [
      {
        heading: "Using this website",
        paragraphs: [
          "You may use this website for lawful purposes and to learn about or enquire into Zyra Digitals services. Do not attempt to disrupt the website, gain unauthorised access or misuse its forms or content.",
        ],
      },
      {
        heading: "Service information and proposals",
        paragraphs: [
          "Website descriptions and starting prices are general information, not a final offer. The deliverables, fees, payment schedule and timeline for a project will be confirmed in a written proposal or agreement before work begins.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Search rankings, traffic, enquiries, sales and other business results depend on factors outside our control. We do not guarantee a particular ranking, amount of traffic or volume of leads. Any specific commitments will be stated in the relevant written agreement.",
        ],
      },
      {
        heading: "Content and third-party services",
        paragraphs: [
          "Website text, branding and other materials belong to their respective owners. Project ownership and usage rights are set out in the applicable proposal or agreement. Some projects may rely on third-party platforms or services, which are governed by their own terms and availability.",
        ],
      },
      {
        heading: "Changes and applicable law",
        paragraphs: [
          "We may update this website or these terms. Continued use after an update means you are using the current version. These terms are subject to applicable laws; they do not limit rights that cannot legally be excluded.",
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility",
    description:
      "Zyra Digitals is working to make this website easier to use for everyone and welcomes reports about accessibility barriers.",
    sections: [
      {
        heading: "Our approach",
        paragraphs: [
          "We want visitors to be able to navigate and understand this website using different devices and assistive technologies. Accessibility is an ongoing effort, and this statement is not a claim that every page or feature currently meets a particular standard.",
        ],
      },
      {
        heading: "Report a barrier",
        paragraphs: [
          "If you have difficulty accessing content, using a form or navigating a page, please tell us which page you were using and what happened. We will review the issue and work on a practical improvement.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For accessibility feedback, email us at",
        ],
      },
    ],
  },
};

const LegalPage = () => {
  const { pathname } = useLocation();
  const pageKey = pathname.slice(1) as LegalPageKey;
  const page = LEGAL_PAGES[pageKey] ?? LEGAL_PAGES["privacy-policy"];

  return (
    <>
      <SEO
        title={`${page.title} | Zyra Digitals`}
        description={page.description}
        canonical={`/${pageKey}`}
        breadcrumbs={[{ name: page.title, path: `/${pageKey}` }]}
      />
      <section className="bg-background py-14 sm:py-20">
        <div className="container mx-auto max-w-4xl px-5 sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Zyra Digitals</p>
          <h1 className="text-foreground">{page.title}</h1>
          <p className="mt-4 text-sm text-muted">Last updated: 24 November 2026</p>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted">{page.description}</p>

          <div className="mt-10 space-y-8">
            {page.sections.map((section) => (
              <section key={section.heading} aria-labelledby={`legal-${section.heading}`}>
                <h2
                  id={`legal-${section.heading}`}
                  className="text-xl font-semibold text-foreground sm:text-2xl"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-relaxed text-muted">
                    {paragraph}
                    {section.heading === "Retention and your choices" && paragraph.endsWith("at") ? (
                      <> <a className="font-medium text-primary underline underline-offset-4" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</>
                    ) : null}
                    {section.heading === "Contact" ? (
                      <>
                        {" "}<a className="font-medium text-primary underline underline-offset-4" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                        {" "}or use our{" "}
                        <Link className="font-medium text-primary underline underline-offset-4" to="/contact">contact page</Link>.
                        {" "}We welcome accessibility feedback and will respond as soon as we can.
                      </>
                    ) : null}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
