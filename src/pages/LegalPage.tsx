import { Link, useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/site";

type LegalPageKey =
  | "privacy-policy"
  | "terms-of-use"
  | "service-agreement"
  | "refund-policy"
  | "refund-and-cancellation-policy"
  | "disclaimer"
  | "cookie-policy"
  | "accessibility";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPageData = {
  title: string;
  description: string;
  sections: LegalSection[];
};

const LEGAL_PAGES: Record<string, LegalPageData> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "This Privacy Policy outlines how Zyra Digitals collects, handles, stores, protects, and discloses personal information obtained through our website, communications, and customer consultations.",
    sections: [
      {
        heading: "1. Overview & Commitment to Data Protection",
        paragraphs: [
          'Zyra Digitals ("we", "our", or "us") operates https://www.zyradigitals.com as a professional website design, search engine optimisation (SEO), and branding agency based in Coimbatore, Tamil Nadu, India. We are deeply committed to respecting and safeguarding the personal privacy of our visitors, prospective clients, and partners.',
          "We collect only the information necessary to provide high-calibre digital services, communicate project audits, respond to technical enquiries, and conduct legitimate business operations. We uphold principles consistent with India's Digital Personal Data Protection Act (DPDP Act 2023), the Information Technology Act 2000, and internationally recognised privacy frameworks.",
        ],
      },
      {
        heading: "2. Personal Information We Collect",
        paragraphs: [
          "Information You Provide Directly: When you fill out our contact or quote forms, schedule an appointment, email us, or message us on WhatsApp, you may provide your full name, business or dental practice name, email address, telephone / WhatsApp contact number, current website URL, requested service category (e.g. Website Development, SEO, Branding), and estimated project budget details.",
          "Technical & Usage Data: When you access our website, our servers and analytics providers may automatically log certain non-personally identifiable technical information. This includes your IP address (anonymised), browser type and version, language preferences, operating system, referring URL, pages viewed, time spent per page, and general geographic location (city level).",
          "Communications Records: If you contact us via email, phone, or instant messaging, we may maintain a secure transcript of our correspondence to ensure project continuity, accurate scope management, and high service quality.",
        ],
      },
      {
        heading: "3. Legal Basis & Purposes for Processing Your Information",
        paragraphs: [
          "We process your personal information strictly for legitimate commercial and contractual purposes, including:",
          "• Preparing custom project scopes, complimentary website audits, competitor analyses, and transparent price quotations tailored to your business needs.",
          "• Delivering agreed digital milestones, including website architecture, UI/UX mockups, code engineering, SEO implementation, and brand identity guidelines.",
          "• Responding promptly to client enquiries within our guaranteed 1-hour service standard during operating hours (8:00 AM – 12:00 AM IST).",
          "• Maintaining administrative, accounting, invoicing, tax compliance, and legal records associated with client agreements.",
          "• Detecting, preventing, and mitigating security threats, automated spam submissions, and technical vulnerabilities across our digital infrastructure.",
        ],
      },
      {
        heading: "4. Strict Non-Disclosure & Data Sharing Policy",
        paragraphs: [
          "We have a strict non-disclosure policy: Zyra Digitals does not sell, rent, lease, trade, or monetize your personal information to any third-party marketing companies, advertisers, or data brokers under any circumstances.",
          "Information is only shared with trusted technical service providers who assist us in operating our web infrastructure, under strict confidentiality and security terms. These include:",
          "• Hosting & Serverless Compute: Vercel Inc. and Netlify Inc., which host our compiled web application and serverless contact pipelines.",
          "• Secure Email Relays: Google Workspace / Gmail SMTP servers (using SSL/TLS 465 encryption) for processing inbound client leads and sending automated booking confirmations.",
          "• Appointment Scheduling: Calendly LLC, if you voluntarily schedule a discovery meeting through our embedded booking badge.",
          "• Legal & Regulatory Compliance: We may disclose information if required to do so by applicable Indian law, subpoena, or lawful request by public authorities.",
        ],
      },
      {
        heading: "5. Data Security & Storage Safeguards",
        paragraphs: [
          "We implement robust technical and operational measures to protect your personal data against accidental loss, unauthorized access, destruction, alteration, or disclosure. All web traffic between your browser and our servers is secured via 256-bit Transport Layer Security (TLS 1.3 / HTTPS encryption).",
          "Administrative access to client databases, enquiry logs, and email channels is restricted exclusively to authorized personnel via multi-factor authentication (MFA) on secure workstations. While no Internet transmission can be guaranteed 100% impenetrable, we continually audit and update our security protocols to defend against modern vulnerabilities.",
        ],
      },
      {
        heading: "6. Data Retention Policy",
        paragraphs: [
          "We retain personal data only for as long as is reasonably necessary to fulfill the purposes outlined in this policy. Enquiry data submitted through our forms is retained for the duration of the prospective project discussion and subsequent client relationship.",
          "If a proposal does not proceed to an active contract, we retain contact records for up to 24 months for reference in case you follow up, unless you request earlier deletion. Accounting, contractual, and transaction records are retained for statutory retention periods prescribed under Indian tax regulations.",
        ],
      },
      {
        heading: "7. Your Rights & Data Choices",
        paragraphs: [
          "Depending on your jurisdiction, you possess specific legal rights regarding your personal information, including the right to:",
          "• Access & Review: Request confirmation of whether we hold your personal data and obtain a readable copy of that information.",
          "• Rectification: Request correction or completion of inaccurate, outdated, or incomplete personal details.",
          "• Erasure ('Right to be Forgotten'): Request that we permanently delete your contact information and past enquiry records from our active databases, subject to statutory record-keeping obligations.",
          "• Restrict Processing: Request limitations on how we process your information or withdraw consent for marketing correspondence.",
          "To exercise any of these privacy rights, please contact our Data Representative directly at",
        ],
      },
      {
        heading: "8. External Services, Third-Party Links & Cookies",
        paragraphs: [
          "Our website integrates third-party tools such as Google Tag Manager, Google Fonts, and Calendly. These services may set technical cookies or collect anonymized diagnostic data under their respective independent privacy notices.",
          "Our website may also link to external client websites, portfolio case studies, or third-party platforms (e.g. WhatsApp, LinkedIn, GitHub). We have no control over the privacy practices of external third-party sites and strongly encourage you to review their policies upon visiting.",
        ],
      },
    ],
  },
  "terms-of-use": {
    title: "Terms of Use",
    description:
      "These Terms of Use govern your access to and use of the Zyra Digitals website, digital services, project proposals, and intellectual property. Please read them carefully before using our website.",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        paragraphs: [
          'By accessing, browsing, or interacting with https://www.zyradigitals.com (the "Website"), submitting enquiries, or engaging our digital services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy.',
          "If you do not agree with any part of these terms, you should immediately discontinue using this Website and refrain from submitting project enquiries.",
        ],
      },
      {
        heading: "2. Intellectual Property Rights & Ownership",
        paragraphs: [
          "Website Materials: All text, branding, graphics, logos, layouts, design concepts, case study presentations, code snippets, icons, and media displayed on this Website are the proprietary intellectual property of Zyra Digitals, protected under Indian and international copyright and trademark laws.",
          "Client Deliverables: Upon full and final settlement of all agreed project invoices, full ownership of custom website design files, custom frontend source code, and delivered digital assets is transferred to the client. Zyra Digitals retains ownership of pre-existing development frameworks, reusable component libraries, proprietary utility scripts, and general design techniques.",
          "Portfolio Rights: Unless expressly prohibited under an executed written Non-Disclosure Agreement (NDA), Zyra Digitals reserves the right to display completed project screenshots, design mockups, and achieved search ranking metrics in our portfolio, case studies, and marketing collateral.",
        ],
      },
      {
        heading: "3. Scope of Services & Project Proposals",
        paragraphs: [
          "All website design, SEO, and branding quotes provided on this Website or via direct correspondence are preliminary estimates based on the specifications submitted.",
          "Formal project delivery schedules, specific deliverable milestones, and payment schedules are governed by our formal Service Agreement and executed Statements of Work (SOW) prior to project kickoff.",
        ],
      },
      {
        heading: "4. Permitted & Prohibited Use of Website",
        paragraphs: [
          "You agree to use our Website solely for legitimate business enquiries and informational purposes. You expressly agree not to:",
          "• Submit fraudulent, abusive, defamatory, or automated spam enquiries through our contact and quote forms.",
          "• Attempt to compromise, decompile, reverse-engineer, scan for vulnerabilities, or breach the security measures of our web applications or servers.",
          "• Scrape, harvest, copy, or duplicate our agency copy, design assets, or case study materials for competing commercial purposes without prior written authorization.",
        ],
      },
      {
        heading: "5. Disclaimer of Outcome Guarantees",
        paragraphs: [
          "Search Engine Rankings: While Zyra Digitals applies industry-leading white-hat SEO techniques, on-page optimization, and technical schema architecture, search engine algorithms (e.g. Google Search) are controlled by independent third parties. Consequently, we cannot guarantee specific #1 positions or fixed search traffic volumes.",
          "Conversion Rates & Business Inquiries: While our websites are engineered with conversion-optimized layouts and fast load times, actual customer sales, booking counts, and lead volumes are determined by market demand, client pricing, reputation, and competitive variables.",
        ],
      },
      {
        heading: "6. Limitation of Liability & Governing Law",
        paragraphs: [
          "To the maximum extent permitted by applicable Indian law, Zyra Digitals, its founders, and contributors shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use or inability to use this Website or delivered client platforms.",
          "These Terms of Use shall be governed by and construed in accordance with the laws of India. Any legal dispute arising under or in connection with these terms shall fall under the exclusive jurisdiction of the competent courts in Coimbatore, Tamil Nadu, India.",
        ],
      },
    ],
  },
  "service-agreement": {
    title: "Service Agreement",
    description:
      "This Service Agreement outlines the standard terms and conditions governing all digital services, website design, SEO, and branding projects undertaken by Zyra Digitals for its clients.",
    sections: [
      {
        heading: "1. Services Provided",
        paragraphs: [
          "Zyra Digitals provides professional digital services, including but not limited to:",
          "• Website Design and Full-Stack Web Development",
          "• Search Engine Optimization (SEO) & Technical Audits",
          "• Local SEO and Google Business Profile Optimization",
          "• Social Media Management & Creative Strategy",
          "• Social Media Post and Creative Graphic Design",
          "• Logo Design and Corporate Brand Identity",
          "• Performance Marketing and Digital Advertising Campaigns",
          "The exact scope of services, deliverables, and specifications will be agreed upon before the commencement of each project.",
        ],
      },
      {
        heading: "2. Project Confirmation and Advance Payment",
        paragraphs: [
          "• Projects will commence only after formal confirmation from the client and receipt of the agreed advance payment.",
          "• All advance payments are strictly non-refundable once work has commenced.",
          "• The remaining payment must be made according to the agreed milestone payment schedule.",
          "• Zyra Digitals reserves the right to pause project work if the client fails to make scheduled payments on time.",
        ],
      },
      {
        heading: "3. Website Design and Development Scope & Revisions",
        paragraphs: [
          "For website design and development projects:",
          "• The website will be developed based on the initially agreed design direction, feature requirements, and project scope.",
          "• Clients are entitled to unlimited revisions to website content, layout elements, colours, images, and design details until the agreed project delivery date.",
          "• Revisions include changes to text, images, colours, spacing, layout elements, and other design details within the original agreed concept.",
          "• Complete website theme changes, entirely new design concepts, or major structural changes are not included in unlimited revisions.",
          "• Additional requirements or scope expansions outside the original scope may incur additional charges.",
        ],
      },
      {
        heading: "4. Project Timeline and Delivery",
        paragraphs: [
          "• Estimated project delivery timelines will be communicated before work begins.",
          "• Delays in providing content, images, feedback, or administrative approvals by the client may affect the final delivery schedule.",
          "• Zyra Digitals is not responsible for project delays caused by the client's failure to provide required materials or timely feedback.",
          "• Final delivery, source code transfer, or live domain deployment will take place after the agreed work is completed and outstanding payments are settled in full.",
        ],
      },
      {
        heading: "5. Client Responsibilities",
        paragraphs: [
          "Clients agree to:",
          "• Provide accurate business information, text content, high-resolution imagery, and other required assets in a timely manner.",
          "• Ensure they have full legal copyright and usage permission for all supplied content, images, graphics, and trademarks.",
          "• Review project progress, mockups, and staging previews and provide consolidated feedback within a reasonable timeframe.",
          "• Make milestone and balance payments strictly according to the agreed schedule.",
          "• Communicate project requirements, change requests, and priorities clearly in writing.",
        ],
      },
      {
        heading: "6. Cancellation and Refunds",
        paragraphs: [
          "• Advance payments made to Zyra Digitals are strictly non-refundable.",
          "• If a client decides to cancel a project at any stage, payments already made will not be refunded, regardless of the reason for cancellation.",
          "• Project cancellation does not automatically waive any outstanding payment obligations agreed upon for completed work or committed project milestones.",
          "Please refer to our Refund & Cancellation Policy for full operational details.",
        ],
      },
      {
        heading: "7. Website Content and Ownership",
        paragraphs: [
          "• Clients are solely responsible for the accuracy and legality of all content, text, claims, and media they provide for inclusion on their website.",
          "• Full ownership and transfer of final deliverables will be executed upon project completion and complete settlement of outstanding invoices.",
          "• Third-party themes, plugins, stock images, fonts, and other licensed resources remain subject to their respective licensing terms and renewals.",
          "• Zyra Digitals retains ownership of its pre-existing tools, proprietary engineering frameworks, development workflows, and reusable code libraries.",
        ],
      },
      {
        heading: "8. Third-Party Services & Infrastructure",
        paragraphs: [
          "Zyra Digitals may recommend or integrate third-party platforms and services on behalf of clients, including hosting providers (e.g. Vercel, Netlify, AWS), domain registrars, payment gateways, plugins, advertising platforms, and analytics tools.",
          "We are not responsible for service interruptions, server outages, policy changes, price revisions, or technical issues caused by external third-party providers.",
        ],
      },
      {
        heading: "9. SEO and Marketing Services Disclaimer",
        paragraphs: [
          "• SEO and digital marketing outcomes depend on multiple dynamic variables, including search engine algorithms, competitor activity, historical domain authority, and market conditions.",
          "• Zyra Digitals does not guarantee specific search rankings, page 1 positions, traffic numbers, inbound phone calls, or sales conversions.",
          "• Advertising spend, platform fees, and third-party API charges are separate from agency fees unless explicitly included in the quotation.",
        ],
      },
      {
        heading: "10. Limitation of Liability",
        paragraphs: [
          "Zyra Digitals will make every reasonable effort to provide digital services professionally and in accordance with industry best practices.",
          "However, to the maximum extent permitted by applicable law, we are not responsible for indirect losses, business interruptions, lost profits, lost revenue, or damages caused by third-party platforms, client-supplied materials, or circumstances beyond our reasonable control.",
        ],
      },
      {
        heading: "11. Agreement and Acceptance",
        paragraphs: [
          "By confirming a project, making an advance payment, or engaging Zyra Digitals for digital services, the client acknowledges that they have read, understood, and agreed to this Service Agreement in its entirety.",
        ],
      },
      {
        heading: "12. Contact Information",
        paragraphs: [
          "Zyra Digitals",
          "Website: https://www.zyradigitals.com",
          `Email: ${SITE.email}`,
          `Phone: ${SITE.phoneDisplay}`,
          "Location: Coimbatore, Tamil Nadu, India",
        ],
      },
    ],
  },
  "refund-policy": {
    title: "Refund & Cancellation Policy",
    description:
      "This policy explains the terms governing advance payments, project cancellations, revision guidelines, and refund eligibility for all digital services provided by Zyra Digitals.",
    sections: [
      {
        heading: "1. Overview & Satisfaction Commitment",
        paragraphs: [
          "At Zyra Digitals, we are committed to delivering quality digital services, modern web engineering, and ensuring client satisfaction through close collaboration and transparent communication.",
          "Because our work involves dedicated engineering time, custom design work, and immediate resource allocation from the moment a project is accepted, the following terms govern all bookings.",
        ],
      },
      {
        heading: "2. Advance Payment Policy",
        paragraphs: [
          "All advance payments made to Zyra Digitals are strictly non-refundable.",
          "Once a project is confirmed and work has commenced (including initial wireframing, technical architecture setup, design drafting, or SEO keyword auditing), the advance payment cannot be refunded under any circumstances.",
        ],
      },
      {
        heading: "3. Project Cancellation",
        paragraphs: [
          "If a client decides to cancel a project at any stage, payments already made will not be refunded, regardless of the reason for cancellation.",
          "Cancellation does not relieve the client of payment obligations for work completed or contractual milestones already delivered prior to the formal cancellation date.",
        ],
      },
      {
        heading: "4. Website Revisions & Polish",
        paragraphs: [
          "We provide unlimited revisions to website content, layout elements, colours, images, and design details until the agreed project delivery date.",
          "However, revisions must adhere to the following conditions:",
          "• Revisions must remain within the originally agreed website concept and project scope.",
          "• Complete website theme changes, entirely new design concepts, or major structural changes to the original concept are not included in unlimited revisions.",
          "• Additional features or work outside the agreed scope may require additional charges.",
        ],
      },
      {
        heading: "5. Revision Deadline",
        paragraphs: [
          "All requested revisions must be communicated before the agreed project delivery date.",
          "Revision requests received after final delivery and handover may be treated as ongoing website maintenance or separate feature additions and charged separately.",
        ],
      },
      {
        heading: "6. Client Responsibilities",
        paragraphs: [
          "Clients are responsible for providing accurate content, high-resolution images, brand assets, business information, and timely feedback throughout the project.",
          "Unreasonable delays in providing required assets or feedback may impact delivery timelines and cannot be cited as a basis for cancellation or refund requests.",
        ],
      },
      {
        heading: "7. Contact Us",
        paragraphs: [
          "For questions regarding this Refund & Cancellation Policy, please contact Zyra Digitals through our official communication channels at",
        ],
      },
    ],
  },
  "disclaimer": {
    title: "Disclaimer",
    description:
      "This Disclaimer outlines key limitations regarding website content, search engine optimization rankings, third-party integrations, and digital business outcomes.",
    sections: [
      {
        heading: "1. General Information Purpose",
        paragraphs: [
          "The information provided on https://www.zyradigitals.com (the \"Website\") is published in good faith for general informational, educational, and digital agency presentation purposes.",
          "While Zyra Digitals strives to maintain current, precise, and verified information, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or suitability of any content, pricing estimations, or technical guides published on this Website.",
        ],
      },
      {
        heading: "2. No Guarantee of SEO Rankings, Traffic, or Revenue",
        paragraphs: [
          "Search Engine Rankings: Search engine optimization (SEO) is influenced by independent search engine algorithm updates (such as Google core updates), competitive intensity, domain history, and dynamic market factors. Zyra Digitals employs white-hat, industry-standard SEO methodologies; however, we do not guarantee specific #1 keyword positions, guaranteed page 1 visibility, or fixed search volumes.",
          "Business Inquiries & Revenue: While our websites and marketing campaigns are engineered for high conversion rates and fast loading speeds, Zyra Digitals does not warrant or guarantee specific sales volumes, customer acquisition numbers, lead conversion rates, or revenue outcomes. Client results vary depending on product offering, pricing, service quality, and market conditions.",
        ],
      },
      {
        heading: "3. Case Studies & Historical Performance Examples",
        paragraphs: [
          "Any metrics, Google Search Console screenshots, click-through rates (CTR), form submission statistics, or traffic growth figures displayed in our portfolio and case studies reflect real historical achievements for specific clients.",
          "These case study figures are presented for illustrative purposes to demonstrate our technical capability and process. They do not constitute a promise or guarantee that every client will experience identical or comparable results.",
        ],
      },
      {
        heading: "4. Third-Party Links, Platforms & Hosting Providers",
        paragraphs: [
          "Our Website and client deliverables may incorporate links to or integrate with external third-party services, including web hosting providers (e.g. Vercel, Netlify), domain registrars, Google Workspace, Calendly, WhatsApp, and social media platforms.",
          "Zyra Digitals has no control over the content, uptime, security practices, privacy policies, or service terms of external platforms. We do not accept responsibility or liability for any damages, outages, policy updates, or data losses arising from the use of third-party platforms.",
        ],
      },
      {
        heading: "5. Professional & Legal Advice Disclaimer",
        paragraphs: [
          "Content published on our blog, knowledge base, or digital guides is intended for digital marketing and engineering guidance only. It does not constitute formal legal, accounting, tax, or regulatory compliance advice.",
          "Clients are advised to consult qualified legal counsel to ensure that their business operations, privacy notices, and terms of service comply with their specific industry and territorial laws.",
        ],
      },
      {
        heading: "6. Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by applicable Indian law, Zyra Digitals, its directors, employees, and contractors shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of this Website, reliance on its content, or digital services provided.",
          "If you have any questions about this Disclaimer, please reach out to our team at",
        ],
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    description:
      "This Cookie Policy explains what cookies and web storage technologies are, how Zyra Digitals uses them on our website, and how you can manage your preferences.",
    sections: [
      {
        heading: "1. What Are Cookies & Web Storage Technologies",
        paragraphs: [
          'Cookies are small text files placed on your computer, tablet, or smartphone when you visit websites. They are widely used to make websites function properly, enhance navigation speed, remember user preferences, and provide diagnostic performance data to site administrators.',
          'In addition to cookies, we may utilize browser local storage or session storage to retain non-sensitive interface preferences during your browsing session.',
        ],
      },
      {
        heading: "2. How Zyra Digitals Uses Cookies",
        paragraphs: [
          "Zyra Digitals uses cookies strictly to deliver a smooth, high-performance, and secure experience across https://www.zyradigitals.com. We uphold privacy-first engineering standards: we do not use intrusive cross-site tracking cookies, and we never sell, trade, or share cookie data with third-party advertising brokers.",
        ],
      },
      {
        heading: "3. Categories of Cookies We Use",
        paragraphs: [
          "• Essential & Security Cookies: Necessary for fundamental website navigation, page routing, anti-spam form verification, and preventing security exploits. The website cannot function correctly without these cookies.",
          "• Performance & Diagnostic Cookies: We use lightweight diagnostic tools and Google Tag Manager to collect aggregated, anonymized metrics on page load times, device viewport sizes, popular case study pages, and navigation flow. These cookies do not identify individual visitors.",
          "• Functional Cookies: Used to retain user interface selections, such as tab preferences or meeting widget session states, across visits.",
        ],
      },
      {
        heading: "4. Third-Party Embedded Features & Cookies",
        paragraphs: [
          "Certain interactive features on our site are powered by trusted third parties. When you interact with these embedded tools, the respective third party may deploy functional cookies:",
          "• Calendly: Used when you schedule a video consultation or phone audit via our interactive appointment badge.",
          "• Google Fonts & Google Tag Manager: Used to deliver web typography and manage diagnostic scripts securely.",
          "These third-party providers operate under their own independent privacy and cookie policies, which we encourage you to review.",
        ],
      },
      {
        heading: "5. Managing & Disabling Cookies in Your Browser",
        paragraphs: [
          "You have the right to accept, reject, or delete cookies at any time through your browser settings. Most browsers (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge) provide controls allowing you to block cookies or receive an alert before a cookie is saved.",
          "Please be aware that disabling essential cookies may impact certain interactive features of our website, such as seamless form submissions or instant discovery meeting scheduling.",
        ],
      },
      {
        heading: "6. Updates to This Policy & Inquiries",
        paragraphs: [
          "We may periodically update this Cookie Policy to reflect changes in our technical practices or relevant legal guidelines. For any inquiries regarding our use of cookies or web data privacy, please contact our team at",
        ],
      },
    ],
  },
  "accessibility": {
    title: "Accessibility Statement",
    description:
      "Zyra Digitals is committed to digital accessibility. We continuously work to ensure our website is usable and inclusive for all visitors, including individuals with disabilities.",
    sections: [
      {
        heading: "1. Our Accessibility Philosophy",
        paragraphs: [
          "At Zyra Digitals, we firmly believe that the web must be accessible to everyone, regardless of physical, cognitive, visual, or technological capabilities. Digital accessibility is not merely an afterthought; it is embedded into our frontend design principles and engineering standards.",
          "We strive to conform as closely as possible to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, recognized internationally as the gold standard for web accessibility.",
        ],
      },
      {
        heading: "2. Key Accessibility Features Implemented",
        paragraphs: [
          "Semantic HTML Architecture: We structure our pages using clean HTML5 landmarks (<header>, <nav>, <main>, <section>, <footer>), descriptive headings (H1–H3) in logical hierarchy, and well-formed lists.",
          "High Contrast & Clear Typography: Text throughout the site is rendered in clean, legible sans-serif fonts with high color contrast ratios meeting or exceeding the WCAG 4.5:1 requirement for body copy and 3:1 for large text.",
          "Keyboard Navigation & Focus Indicators: All interactive buttons, links, navigation menus, and form inputs are fully accessible via keyboard (Tab, Shift+Tab, Enter, Space, Escape) with prominent, visible focus outlines.",
          "Descriptive Media & Screen Reader Support: Meaningful images and portfolio screenshots include descriptive alternative text (alt text). Decorative elements are marked with aria-hidden='true' to avoid distracting screen reader users.",
          "Responsive Layout & Zoom Support: Our layouts scale fluidly up to 200% zoom without horizontal scrolling or loss of functionality.",
        ],
      },
      {
        heading: "3. Continuous Testing & Feedback Mechanism",
        paragraphs: [
          "We regularly evaluate our web assets using both automated testing suites (e.g. Google Lighthouse Accessibility Audits, Axe-core, and WAVE) and manual keyboard navigation reviews across various screen resolutions.",
          "We warmly welcome feedback, suggestions, and reports regarding any accessibility barriers you encounter. If you experience difficulty accessing any part of our website, please reach out to us at",
        ],
      },
    ],
  },
};

// Aliases for alternate route names
LEGAL_PAGES["refund-and-cancellation-policy"] = LEGAL_PAGES["refund-policy"];

const LEGAL_TABS = [
  { key: "privacy-policy", label: "Privacy Policy", path: "/privacy-policy" },
  { key: "terms-of-use", label: "Terms of Use", path: "/terms-of-use" },
  { key: "service-agreement", label: "Service Agreement", path: "/service-agreement" },
  { key: "refund-policy", label: "Refund & Cancellation", path: "/refund-policy" },
  { key: "disclaimer", label: "Disclaimer", path: "/disclaimer" },
  { key: "cookie-policy", label: "Cookie Policy", path: "/cookie-policy" },
  { key: "accessibility", label: "Accessibility", path: "/accessibility" },
];

const LegalPage = () => {
  const { pathname } = useLocation();
  const rawKey = pathname.replace(/^\/+/, "");
  const pageKey = (LEGAL_PAGES[rawKey] ? rawKey : "privacy-policy") as LegalPageKey;
  const page = LEGAL_PAGES[pageKey] ?? LEGAL_PAGES["privacy-policy"];

  return (
    <>
      <SEO
        title={`${page.title} | Zyra Digitals - Web Design, SEO & Branding`}
        description={page.description}
        canonical={`/${pageKey}`}
        breadcrumbs={[{ name: page.title, path: `/${pageKey}` }]}
      />
      <section className="bg-background py-14 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-4xl px-5 sm:px-6">
          <div className="border-b border-slate-200/90 pb-6 mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Zyra Digitals • Legal &amp; Compliance
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              {page.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted">
              <span>Published by Zyra Digitals</span>
              <span>•</span>
              <span>Last updated: 24 November 2026</span>
              <span>•</span>
              <span>Effective across India &amp; Worldwide</span>
            </div>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
              {page.description}
            </p>
          </div>

          {/* Quick tab switcher for all legal pages */}
          <div className="mb-10 flex flex-wrap gap-2 border-b border-slate-200/70 pb-4">
            {LEGAL_TABS.map((tab) => {
              const isActive =
                pageKey === tab.key ||
                (pageKey === "refund-and-cancellation-policy" && tab.key === "refund-policy");
              return (
                <Link
                  key={tab.key}
                  to={tab.path}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>

          <div className="space-y-10">
            {page.sections.map((section) => (
              <section
                key={section.heading}
                aria-labelledby={`legal-${section.heading.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs"
              >
                <h2
                  id={`legal-${section.heading.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`}
                  className="text-lg font-bold text-foreground sm:text-xl border-b border-slate-100 pb-3"
                >
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-3.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {section.paragraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph}
                      {paragraph.endsWith("at") ? (
                        <>
                          {" "}
                          <a
                            className="font-bold text-primary underline underline-offset-4 hover:text-blue-700"
                            href={`mailto:${SITE.email}`}
                          >
                            {SITE.email}
                          </a>
                          {" "}or call our team at{" "}
                          <a
                            className="font-bold text-primary underline underline-offset-4 hover:text-blue-700"
                            href={`tel:${SITE.phoneHref}`}
                          >
                            {SITE.phoneDisplay}
                          </a>
                          . We guarantee a prompt review and reply within 1 business day.
                        </>
                      ) : null}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact help box */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h3 className="text-base font-bold text-foreground">Have questions about our terms or service policies?</h3>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Our team is always happy to assist with scope clarification, privacy requests, cancellation terms, or accessibility accommodations.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center shrink-0 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:brightness-110 active:scale-95 transition-all"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
