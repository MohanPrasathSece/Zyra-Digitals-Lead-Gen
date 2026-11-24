export type ServicePage = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  primaryKeyword: string;
  intro: string[];
  included: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  startingPrice: string;
  related: string[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "logo-design",
    name: "Logo Design",
    title: "Logo Design in Coimbatore | Zyra Digitals",
    metaDescription:
      "Professional logo design in Coimbatore with original concepts, multiple file formats and full ownership of your files. Free quote within 1 hour.",
    h1: "A Logo That Makes Your Brand Instantly Recognisable",
    tagline: "Distinctive logos built around your business, not a template.",
    primaryKeyword: "logo design in coimbatore",
    intro: [
      "Most small businesses in Coimbatore start with a logo made in a hurry - a free template, a font scramble, or something a relative put together. It looks fine on a visiting card, then falls apart on a shop board, a website header or a WhatsApp profile. A weak logo quietly costs you credibility every time a customer compares you with a competitor who looks more established.",
      "Our logo design service fixes that at the source. We start by understanding what your business does and who it serves, then sketch original concepts rather than recycling a template. You receive a mark that stays clear and legible from a tiny favicon to a large signboard, along with the source files so you own the artwork outright.",
    ],
    included: [
      "Three original logo concepts to choose from",
      "Two refinement rounds on your chosen concept",
      "Final files in PNG, SVG, PDF and JPG",
      "Horizontal, stacked and icon versions",
      "Favicon and social profile image sizes",
      "Full ownership and source files handed over",
    ],
    process: [
      {
        title: "Brand Discovery",
        text: "We ask about your business, your customers and the competitors you want to stand apart from, then agree the direction before any drawing begins.",
      },
      {
        title: "Concept Sketches",
        text: "We develop three distinct logo concepts and present each with a short explanation of the idea behind it, so you can judge them with context.",
      },
      {
        title: "Refine and Finalise",
        text: "You pick one concept and we polish spacing, colour and proportions over two rounds until the mark feels exactly right for your brand.",
      },
      {
        title: "File Handover",
        text: "We export every format you need for print, web and social, and hand over the source files together with a simple usage guide.",
      },
    ],
    faqs: [
      {
        q: "How long does logo design take?",
        a: "Most logo projects are completed within one to two weeks, depending on how quickly you give feedback. The first concepts usually reach you within three to four working days of our kickoff call. Delays almost always happen when feedback is slow, so it helps to keep the decision makers involved.",
      },
      {
        q: "How many revisions do I get?",
        a: "You get two rounds of refinement on the concept you choose, which is enough for most businesses. If your feedback introduces a genuinely new direction rather than a refinement, we will discuss a small additional fee before doing any work. We never charge you for changes you were not expecting.",
      },
      {
        q: "Will I own the logo and the source files?",
        a: "Yes. Once the project is complete and paid, you own the logo outright. We hand over the source files and all exported formats, and we keep no claim over the artwork.",
      },
      {
        q: "What do you need from me to start?",
        a: "A short description of your business, the name as it should appear, and any colours, fonts or styles you already like. If you have a rough idea or examples you admire, share them and we will factor them in.",
      },
    ],
    startingPrice: "₹4,999",
    related: ["website-redesign", "ui-ux-design", "wordpress-website-design"],
  },
  {
    slug: "ecommerce-website-design",
    name: "Ecommerce Website Design",
    title: "Ecommerce Website Design in Coimbatore | Zyra Digitals",
    metaDescription:
      "Online store design in Coimbatore with secure checkout, product pages and mobile-first layouts your customers can trust. Free quote within 1 hour.",
    h1: "An Online Store Built To Sell From The First Visit",
    tagline: "Store design focused on fast browsing and frictionless checkout.",
    primaryKeyword: "ecommerce website design in coimbatore",
    intro: [
      "Selling online in Coimbatore is no longer optional for many shops, but a poorly built store loses customers in the first few seconds. Slow product pages, a confusing cart or a checkout that fails on a phone sends buyers straight to a competitor. The problem is rarely the products - it is the experience around them.",
      "We build ecommerce websites around how people actually shop. Product categories are organised clearly, images load quickly, and the path from browsing to payment is kept short on both desktop and mobile. Payments, shipping options and stock management are set up to fit how your business runs, so you can add products and fulfil orders without wrestling with the platform.",
    ],
    included: [
      "Product catalogue with categories and filters",
      "Secure checkout with Indian payment gateways",
      "Cart, tax and shipping rules set up",
      "Mobile-first product and category pages",
      "Order confirmation emails to buyers",
      "Basic on-page SEO for product pages",
    ],
    process: [
      {
        title: "Catalogue Planning",
        text: "We map your products into clear categories, agree how variants such as size and colour work, and plan the checkout flow before any design starts.",
      },
      {
        title: "Store Design",
        text: "We design product and category pages that load fast and make images the focus, so shoppers can compare items and decide quickly.",
      },
      {
        title: "Build and Integrate",
        text: "We connect payment gateways, shipping rules and stock tracking, then test the full journey from browsing through to a completed order.",
      },
      {
        title: "Test and Launch",
        text: "Before going live we run through real orders on real devices, fix anything that snags, and hand over a short guide to managing products.",
      },
    ],
    faqs: [
      {
        q: "Which payment gateways can you integrate?",
        a: "We usually set up popular Indian gateways such as Razorpay, PayU or Cashfree, and can integrate others if you already have a preference. The gateway charges are set by the provider, not by us. We will confirm what fits your business before the build begins.",
      },
      {
        q: "Can I manage products and orders myself?",
        a: "Yes. We hand over an admin panel where you can add products, update prices and process orders yourself. We include a short guide and a walkthrough recording so your team can manage the store without needing us for routine tasks.",
      },
      {
        q: "How many products can the store hold?",
        a: "The build itself does not limit your catalogue - you can start with a few dozen products and grow to hundreds. Very large catalogues may need extra work on filtering and search, which we quote separately after understanding your range.",
      },
      {
        q: "What do you need from me to get started?",
        a: "We need your product list with prices, descriptions and images, plus your logo and brand colours if you have them. If some content is missing, we can help organise or write it as an add-on. Clear product photos make the biggest difference to how the store performs.",
      },
    ],
    startingPrice: "₹12,999",
    related: ["wordpress-website-design", "website-speed-optimisation", "landing-page-design"],
  },
  {
    slug: "website-redesign",
    name: "Website Redesign",
    title: "Website Redesign in Coimbatore | Zyra Digitals",
    metaDescription:
      "Website redesign in Coimbatore that keeps what works and fixes what does not, with faster pages and mobile-friendly design. Free quote within 1 hour.",
    h1: "Modernise Your Website Without Losing Your Rankings",
    tagline: "A fresh, faster website that keeps the trust you have built.",
    primaryKeyword: "website redesign in coimbatore",
    intro: [
      "Your website may have worked well when it was built, but sites age quickly. Designs that once looked modern now feel dated, pages creep slower as images and plugins pile up, and visitors on phones struggle with layouts that were never designed for them. The result is a site that still loads but quietly turns people away.",
      "A redesign is not about starting from zero. We audit what is already on your site, keep the pages that bring you enquiries, and rebuild the rest around a cleaner structure and faster loading. Your existing URLs and content are preserved so the search visibility you have earned is not thrown away in the process.",
    ],
    included: [
      "Audit of your current website and pages",
      "Retention of existing URLs and content",
      "Fresh, modern layout on every page",
      "Faster loading images and scripts",
      "Mobile-friendly design throughout",
      "Redirect plan for any changed URLs",
    ],
    process: [
      {
        title: "Site Audit",
        text: "We review your current site page by page, noting what brings enquiries, what is outdated and where visitors drop off, then share our findings.",
      },
      {
        title: "Design Direction",
        text: "We agree a fresh look that fits your brand today, showing you how the key pages will feel before we build anything.",
      },
      {
        title: "Rebuild Pages",
        text: "We rebuild each page on the new design, migrate your content, and set up redirects so no existing link breaks along the way.",
      },
      {
        title: "Review and Launch",
        text: "We test every page on desktop and mobile, check speed and forms, then switch the new site live with your old content intact.",
      },
    ],
    faqs: [
      {
        q: "Will a redesign hurt my Google rankings?",
        a: "Not if it is done carefully. We preserve your existing URLs and content and add redirects for anything that changes, which is the main protection for your rankings. Redesigns only cause problems when those details are ignored, and that is exactly what we plan for.",
      },
      {
        q: "Can I keep parts of the current site?",
        a: "Yes. We often keep strong pages, helpful content and anything that already works well, and redesign only the weak areas. The goal is a better site, not a different one for its own sake.",
      },
      {
        q: "How long does a redesign take?",
        a: "Most redesigns take two to four weeks depending on the number of pages and how much content needs rewriting. The audit and design approval stages move fastest when you can review and give feedback promptly.",
      },
      {
        q: "Will my site be down during the change?",
        a: "No. We build the new site alongside your live one and only switch over when everything is tested. In most cases visitors see no interruption at all during the process.",
      },
    ],
    startingPrice: "₹7,999",
    related: ["website-speed-optimisation", "wordpress-website-design", "ui-ux-design"],
  },
  {
    slug: "landing-page-design",
    name: "Landing Page Design",
    title: "Landing Page Design in Coimbatore | Zyra Digitals",
    metaDescription:
      "Landing page design in Coimbatore built around one clear offer, with focused copy and a simple enquiry form. Free quote within 1 hour.",
    h1: "One Page, One Offer, One Clear Next Step",
    tagline: "A focused page that guides visitors towards a single action.",
    primaryKeyword: "landing page design in coimbatore",
    intro: [
      "A landing page has one job: to turn a visitor into an enquiry. Unlike a full website, it exists for a single campaign, product or service, so nothing should distract from that goal. Most disappointing landing pages fail for a simple reason - they borrow the menu, links and clutter of a full site and give the visitor too many ways to leave.",
      "We design landing pages with a clear headline, persuasive supporting copy and one obvious action, whether that is a phone call, a form or a WhatsApp message. The layout is built for mobile first, since most campaign traffic arrives on a phone, and every section earns its place by moving the reader closer to enquiring.",
    ],
    included: [
      "Single-page layout focused on one offer",
      "Headline and section copy guidance",
      "Lead form with email notifications",
      "Click-to-call and WhatsApp buttons",
      "Mobile-first responsive design",
      "Basic on-page SEO and page title",
    ],
    process: [
      {
        title: "Offer Clarity",
        text: "We start by agreeing exactly what the page is for, who it targets and what a visitor should do, so the whole page has one direction.",
      },
      {
        title: "Structure and Copy",
        text: "We plan the order of the sections and help shape the headline and message, keeping the language simple and aimed at real customers.",
      },
      {
        title: "Design Build",
        text: "We design the page mobile-first, adding only the elements that support the action, and connect the form so enquiries reach you.",
      },
      {
        title: "Test and Publish",
        text: "We check the page on phones and desktops, test the form and buttons, then publish it ready for your campaign traffic.",
      },
    ],
    faqs: [
      {
        q: "Can the landing page match my existing website?",
        a: "Yes. We can follow your current colours, fonts and logo so the page feels like part of your brand, even though it works as a standalone page. If you want it to look completely different for a specific campaign, that is also possible.",
      },
      {
        q: "Do you write the copy for the page?",
        a: "We guide the copy and structure, and we can write the content for you as part of the project. If you have your own wording or a preferred message, we will shape it around the layout and tidy it where needed.",
      },
      {
        q: "What is the difference between a landing page and a website page?",
        a: "A landing page has one goal and no distracting menu or extra links, while a normal website page sits within a wider navigation. A landing page is best used for a single campaign, advert or product where you want a clear action.",
      },
      {
        q: "How soon can the page go live?",
        a: "A single landing page is usually ready within three to five working days once we have the content and the offer clear. Quicker turnaround is possible when the text and images are ready from the start.",
      },
    ],
    startingPrice: "₹7,999",
    related: ["ui-ux-design", "website-speed-optimisation", "ecommerce-website-design"],
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    title: "Website Maintenance in Coimbatore | Zyra Digitals",
    metaDescription:
      "Website maintenance in Coimbatore covering updates, backups, security checks and small content changes. Free quote within 1 hour.",
    h1: "Keep Your Website Secure, Updated And Running Smoothly",
    tagline: "Monthly care that keeps your website healthy and up to date.",
    primaryKeyword: "website maintenance in coimbatore",
    intro: [
      "A website is not a one-time purchase. Software updates appear every month, hosting settings change, and small edits such as a new phone number, a fresh offer or a corrected price are needed constantly. Without regular care a site slowly drifts towards broken forms, security warnings and outdated information that quietly damages the trust customers place in your business.",
      "Our maintenance plans cover the routine work so you do not have to think about it. We apply updates, take regular backups, keep an eye on security and make small content changes when you ask. If something does go wrong, you have a team that already knows your website and can look into it rather than starting from scratch.",
    ],
    included: [
      "Monthly software and plugin updates",
      "Regular website backups stored safely",
      "Security checks and uptime monitoring",
      "Small content edits each month",
      "Form and link testing",
      "Monthly summary of work done",
    ],
    process: [
      {
        title: "Careful Onboarding",
        text: "We review your website, hosting and access details, then note anything that needs attention before the monthly routine begins.",
      },
      {
        title: "Updates and Backups",
        text: "Each month we apply the latest updates, take a fresh backup beforehand, and check that everything still works after the changes.",
      },
      {
        title: "Security and Checks",
        text: "We monitor uptime, scan for common issues and test your forms and key links, so problems are caught before your customers see them.",
      },
      {
        title: "Changes and Report",
        text: "We handle the small edits you request, then send a short summary of what was updated, backed up and checked that month.",
      },
    ],
    faqs: [
      {
        q: "Do I have to host with you to use this service?",
        a: "No. We can maintain a website hosted anywhere, as long as we can access the backend and hosting panel. If you are unsure about your access details, we will help you gather them during onboarding.",
      },
      {
        q: "What counts as a small content edit?",
        a: "Things like updating text, swapping an image, changing prices or hours, or adding a short new section. Larger work such as a new page or a full redesign is quoted separately, and we always confirm before doing chargeable extra work.",
      },
      {
        q: "Do you promise my website will never be hacked?",
        a: "No one can honestly promise that, but regular updates, backups and monitoring greatly reduce the risk. If something does happen, our backups mean we can usually restore the site quickly. We are also clear that full security depends on your hosting and passwords too.",
      },
      {
        q: "Can I cancel the plan any time?",
        a: "Yes. The plan runs month to month with no long contract, so you can stop whenever you wish. We will make sure your access details and backups remain with you if you decide to leave.",
      },
    ],
    startingPrice: "₹2,499/mo",
    related: ["website-speed-optimisation", "wordpress-website-design", "website-redesign"],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    title: "Local SEO Services in Coimbatore | Zyra Digitals",
    metaDescription:
      "Local SEO in Coimbatore that helps nearby customers find your business on Google Maps and search. Honest, steady work. Free quote within 1 hour.",
    h1: "Get Found By Customers Searching In Your Area",
    tagline: "Practical local SEO that helps nearby customers find you.",
    primaryKeyword: "local seo in coimbatore",
    intro: [
      "When someone nearby searches for what you offer, Google shows only a small set of local businesses it trusts. If you are not in that set, the customer calls someone else. This is especially true for clinics, salons, studios, shops and service businesses, where almost every enquiry starts with a search that includes a place name.",
      "Local SEO is the steady work of making your business the obvious match for those searches. We focus on the things you can control - a complete Google Business Profile, clear pages that name the areas you serve, consistent business details and genuine reviews. It is gradual work rather than a switch, and we are honest about that from the start.",
    ],
    included: [
      "Local keyword research for your area",
      "On-page optimisation of key pages",
      "Consistent business details across listings",
      "Local landing page recommendations",
      "Review and reputation guidance",
      "Monthly progress report",
    ],
    process: [
      {
        title: "Local Audit",
        text: "We review how your business currently appears in local search, check your profile, pages and listings, and note the gaps that matter most.",
      },
      {
        title: "Keyword Mapping",
        text: "We build a list of the place-based phrases your customers actually search, then decide which page or profile should target each one.",
      },
      {
        title: "Optimisation Work",
        text: "We improve your page titles, headings, content and business details, and make sure your name, address and phone number match everywhere.",
      },
      {
        title: "Measure and Refine",
        text: "Each month we review profile views and local search impressions, then adjust our focus based on what the data suggests.",
      },
    ],
    faqs: [
      {
        q: "How long before I see results from local SEO?",
        a: "Local SEO is a gradual process, and most businesses notice meaningful movement over several months rather than weeks. Some profile improvements can show up sooner, but lasting visibility takes consistent work. We will always be honest about timelines rather than promising instant results.",
      },
      {
        q: "Can you promise I will rank first on Google Maps?",
        a: "No, and any agency that promises a specific position is not being straight with you. Local rankings depend on many factors outside anyone's control, including distance from the searcher. What we can promise is careful, honest work and a reply to every enquiry within one hour.",
      },
      {
        q: "Do I need a website for local SEO?",
        a: "A website makes local SEO far more effective because it gives Google clear pages to rank and trust. A well-optimised Google Business Profile alone can still help, but a site lets you target many more searches. If you do not have one yet, we can discuss both together.",
      },
      {
        q: "Is this the same as the SEO services on your main page?",
        a: "Local SEO is a focused part of SEO aimed at customers searching near you. If you serve a wider audience or want to rank for broader terms, a full SEO plan is a better fit. We will recommend the right approach once we understand your goals.",
      },
    ],
    startingPrice: "₹2,999",
    related: ["google-business-profile-optimisation", "seo-content-writing", "website-speed-optimisation"],
  },
  {
    slug: "google-business-profile-optimisation",
    name: "Google Business Profile Optimisation",
    title: "Google Business Profile Optimisation in Coimbatore",
    metaDescription:
      "Google Business Profile optimisation in Coimbatore so local customers find and call you. Accurate details, complete profile. Free quote within 1 hour.",
    h1: "Make Your Business Easy To Find On Google Maps",
    tagline: "A complete, accurate Google listing that customers can trust.",
    primaryKeyword: "google business profile optimisation in coimbatore",
    intro: [
      "For many local businesses, the Google Business Profile is the first thing a customer sees - often before your website. It appears in Maps, in the local results and on the right side of search, showing your hours, photos and reviews. When it is incomplete or wrong, customers hesitate, and that hesitation costs you calls you never even know about.",
      "We optimise your profile properly: the right primary category, a complete list of services, accurate hours and service areas, and genuine photos that reflect your real work. Every field Google offers is filled in and kept consistent with your website. It is a focused, practical piece of work that removes the small doubts which stop people from calling.",
    ],
    included: [
      "Correct primary and secondary categories",
      "Complete service list with descriptions",
      "Accurate hours, area and contact details",
      "Optimised business description",
      "Guidance on photo uploads",
      "Consistency check with your website",
    ],
    process: [
      {
        title: "Profile Review",
        text: "We go through every section of your current profile, flagging anything missing, inaccurate or likely to confuse a customer.",
      },
      {
        title: "Category and Services",
        text: "We select the most accurate categories and write a clear list of services, since these are among the strongest signals you control.",
      },
      {
        title: "Details and Photos",
        text: "We complete your hours, contact details and description, and guide you on the genuine photos worth adding over time.",
      },
      {
        title: "Consistency Check",
        text: "We compare your profile with your website and main listings so your name, address and phone number match everywhere.",
      },
    ],
    faqs: [
      {
        q: "How long does the optimisation take?",
        a: "Most profiles are optimised within three to five working days once we have your correct details and access. Google sometimes takes a little longer to reflect changes publicly, but the work itself is quick.",
      },
      {
        q: "Will this make me rank first on Maps?",
        a: "No honest agency can promise a specific position, because local rankings depend on many factors outside anyone's control. What we can do is make your profile as complete and accurate as possible, which gives you a fair chance. We never make promises about rankings.",
      },
      {
        q: "Do I need to give you access to my Google account?",
        a: "We can work either way. The simplest approach is to add us as a manager on your Business Profile, which you can remove at any time. If you would rather not, we can give you a checklist and walk you through the changes yourself.",
      },
      {
        q: "What if my business has no website?",
        a: "You can still have a strong Google Business Profile without a website, and it can bring in calls on its own. That said, a matching website makes your presence stronger and more trustworthy, and we can discuss that separately if you are interested.",
      },
    ],
    startingPrice: "₹1,499",
    related: ["local-seo", "seo-content-writing", "website-redesign"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    title: "UI/UX Design Services in Coimbatore | Zyra Digitals",
    metaDescription:
      "UI/UX design in Coimbatore that makes websites and apps easy to use, with clear layouts and simple journeys. Free quote within 1 hour.",
    h1: "Design That Makes People Understand And Act",
    tagline: "Clear, thoughtful interfaces that make your product easy to use.",
    primaryKeyword: "ui ux design in coimbatore",
    intro: [
      "When a website or app is hard to use, people rarely complain - they simply leave. A visitor who cannot find a button, understand a form or work out what to do next will not email to tell you. Good UI/UX design is the quiet work that removes those moments of confusion before they cost you an enquiry.",
      "We design interfaces around the way real people think and move through a task. That means clear page structure, readable typography, obvious buttons and states that tell users where they are. We start with the goals and the content, then design the screens, so the result looks good because it works well, not the other way around.",
    ],
    included: [
      "Wireframes for each key screen",
      "Clear visual hierarchy and layout",
      "Readable typography and colour system",
      "Reusable buttons, forms and components",
      "User journey and navigation flow",
      "Annotations for your developers",
    ],
    process: [
      {
        title: "Understand Users",
        text: "We talk through who uses your product, what they are trying to do and where they currently get stuck or confused.",
      },
      {
        title: "Wireframes",
        text: "We sketch the structure of each important screen as simple wireframes, so we agree the layout before any visual design.",
      },
      {
        title: "Visual Design",
        text: "We apply your branding to create clean, consistent screens with a clear hierarchy that guides attention to the right place.",
      },
      {
        title: "Handover",
        text: "We prepare organised files and notes for your developers, explaining the interactions and components so the build matches the design.",
      },
    ],
    faqs: [
      {
        q: "Do you design mobile apps or just websites?",
        a: "We design both, and the same principles apply to each. Whether it is a website, a web app or a mobile app, we focus on clear structure, readable screens and journeys that feel obvious to the user rather than clever.",
      },
      {
        q: "Can you work with my existing developers?",
        a: "Yes. We often hand our designs to a client's own development team. We provide organised files and annotations so your developers understand the layout, spacing and interactions before they build.",
      },
      {
        q: "What do you need from me to begin?",
        a: "A clear idea of what the product does and who it is for, plus any existing branding, content or features you want included. If you have examples of interfaces you like or dislike, those help us understand your taste quickly.",
      },
      {
        q: "Is UI/UX design separate from building the website?",
        a: "It can be. Some clients take the designs to their own team, while others ask us to build the site as well. If you would like the design and build handled together, we can quote both so the two stages fit seamlessly.",
      },
    ],
    startingPrice: "₹7,999",
    related: ["landing-page-design", "website-redesign", "mvp-development"],
  },
  {
    slug: "mvp-development",
    name: "MVP Development for Startups",
    title: "MVP Development for Startups | Zyra Digitals",
    metaDescription:
      "MVP development for startups in Coimbatore, focused on launching your core idea fast and learning from real users. Free quote within 1 hour.",
    h1: "Launch Your Core Idea With Only What You Need",
    tagline: "A focused first version built to learn from real users.",
    primaryKeyword: "mvp development for startups",
    intro: [
      "Early-stage founders often get stuck trying to build everything at once. The result is months of work, a large bill and a product that real users have not yet tried. An MVP takes the opposite approach: build the smallest version that lets real people test your core idea, so you can learn what works before spending far more.",
      "We build MVPs for startups by narrowing the idea down to the one journey that proves its value. That might be a simple booking flow, a sign-up and dashboard, or a single core feature, built cleanly enough that real users can rely on it. We are honest about what to leave out, because a lean first version is what lets you test, learn and improve.",
    ],
    included: [
      "A focused scope for the first version",
      "Core feature or main user flow built",
      "Clean, responsive interface design",
      "Working sign-up and login if needed",
      "Basic analytics to track usage",
      "A clear plan for the next iteration",
    ],
    process: [
      {
        title: "Scope the Core",
        text: "We work with you to decide the single most important thing your product must do, and cut everything that does not support it.",
      },
      {
        title: "Design the Flow",
        text: "We map the main user journey as simple screens, so we agree how the product works before coding begins.",
      },
      {
        title: "Build the MVP",
        text: "We develop the core feature as a working product, tested on real devices, with clean code you can build on later.",
      },
      {
        title: "Launch and Learn",
        text: "We help you release the MVP to early users and set up basic tracking, so the next decisions come from real behaviour.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to build an MVP?",
        a: "It depends on the scope, but a focused first version usually takes a few weeks rather than months. The aim is to reach real users quickly, so we deliberately keep the first build small. We will give you a realistic timeline once we agree the core feature.",
      },
      {
        q: "Will the MVP be a throwaway prototype?",
        a: "No. We build with real, maintainable technology rather than a clickable mock-up, so your product can grow from it. It may need expansion later, but the foundation is genuine code you can keep using.",
      },
      {
        q: "I am not technical. Can I still work with you?",
        a: "Absolutely - most of our startup clients are not technical. We explain decisions in plain language and handle the technical side, while you focus on your users and your business. You will always understand what is being built and why.",
      },
      {
        q: "What happens after the MVP launches?",
        a: "Once real people are using it, we review how they behave and plan the next round of improvements. You can continue with us or take the code to your own team, and you own everything we build for you.",
      },
    ],
    startingPrice: "₹12,999",
    related: ["ui-ux-design", "ecommerce-website-design", "landing-page-design"],
  },
  {
    slug: "website-speed-optimisation",
    name: "Website Speed Optimisation",
    title: "Website Speed Optimisation in Coimbatore | Zyra Digitals",
    metaDescription:
      "Website speed optimisation in Coimbatore to make your pages load faster on mobile and desktop. Measurable, careful work. Free quote within 1 hour.",
    h1: "Make Your Website Load Faster On Every Device",
    tagline: "Practical speed work that makes your pages feel instant.",
    primaryKeyword: "website speed optimisation in coimbatore",
    intro: [
      "A slow website wastes the effort you put into everything else. Visitors on a phone with a weak signal give up long before a heavy page finishes loading, and Google itself treats speed as part of the experience it measures. The frustrating part is that speed is often lost quietly, as new images, plugins and features are added over time.",
      "We improve your website's speed by finding what is actually slowing it down rather than guessing. Large images are compressed, scripts are trimmed and loading is made more efficient, all without changing how your site looks. We then re-test the pages and share the measurements, so you can see the difference in real numbers rather than vague claims.",
    ],
    included: [
      "Full speed audit of your key pages",
      "Image compression and correct sizing",
      "Script and plugin load reduction",
      "Browser caching and file compression",
      "Font loading improvements",
      "Before-and-after speed measurements",
    ],
    process: [
      {
        title: "Speed Audit",
        text: "We test your main pages on mobile and desktop, identify the heaviest elements and note exactly what is holding the site back.",
      },
      {
        title: "Fix the Causes",
        text: "We compress images, trim unnecessary scripts, enable caching and apply the technical changes that address the specific problems found.",
      },
      {
        title: "Re-test Pages",
        text: "We run the tests again on the same pages and in similar conditions, so the improvement is measured honestly rather than assumed.",
      },
      {
        title: "Report Results",
        text: "We explain what changed, show you the before-and-after numbers, and give simple guidance to keep the site fast over time.",
      },
    ],
    faqs: [
      {
        q: "Can you promise my site will score 100 on PageSpeed?",
        a: "No, and it would be misleading to promise a perfect score, because the tool measures many things beyond a developer's control. What we can do is make real, measurable improvements to how quickly your pages load. We will show you honest before-and-after results.",
      },
      {
        q: "Will speeding up my site change how it looks?",
        a: "No. Our work happens behind the scenes, so your design stays exactly as it is. We only remove waste and inefficiency, not features or visual elements you want to keep.",
      },
      {
        q: "How do I know my site is slow in the first place?",
        a: "Common signs are pages that take several seconds to appear, images that pop in slowly or a spinning loader that lingers. We start with a proper audit so we measure the real situation rather than relying on how it feels.",
      },
      {
        q: "Does speed really matter that much?",
        a: "It matters for the visitor, who will leave a slow page, and it is one of the factors search engines consider. It is rarely the whole story on its own, but a fast site supports everything else you do with SEO and design.",
      },
    ],
    startingPrice: "₹7,999",
    related: ["website-redesign", "website-maintenance", "local-seo"],
  },
  {
    slug: "wordpress-website-design",
    name: "WordPress Website Design",
    title: "WordPress Website Design in Coimbatore | Zyra Digitals",
    metaDescription:
      "WordPress website design in Coimbatore that you can update yourself, with a clean build and a simple editing workflow. Free quote within 1 hour.",
    h1: "A WordPress Site You Can Update Without Help",
    tagline: "A clean WordPress build designed around easy editing.",
    primaryKeyword: "wordpress website design in coimbatore",
    intro: [
      "WordPress powers a large share of the web, and for good reason: it lets business owners update their own content without calling a developer for every small change. The catch is that many WordPress sites are built with so many themes and plugins that they become slow, fragile and confusing to edit, which defeats the whole point.",
      "We build WordPress sites that stay simple. The editing experience is set up so your pages are easy to change, the plugins are kept to a sensible minimum, and the structure is planned before anything is installed. You get the flexibility of WordPress without the usual mess, and editing your own pages stays genuinely straightforward.",
    ],
    included: [
      "Custom design built on WordPress",
      "Simple editing workflow for your team",
      "A sensible, minimal plugin setup",
      "Home, service and contact pages",
      "Basic on-page SEO setup",
      "A short training walkthrough",
    ],
    process: [
      {
        title: "Plan Structure",
        text: "We agree your pages, content and goals first, and choose a setup that keeps editing simple rather than loading the site with extras.",
      },
      {
        title: "Design and Theme",
        text: "We design a clean look built around your brand, then set up WordPress so the pages match your content and are easy to maintain.",
      },
      {
        title: "Build and Test",
        text: "We build the pages, add the content and check that everything works on mobile and desktop before the site goes live.",
      },
      {
        title: "Train and Handover",
        text: "We walk your team through editing pages and posts, and hand over the access details so you are fully in control.",
      },
    ],
    faqs: [
      {
        q: "Will I be able to update the site myself?",
        a: "Yes, that is one of the main reasons to use WordPress. We set up a simple editing experience and give you a short walkthrough, so you can change text and images without needing a developer. If you get stuck, we are happy to help.",
      },
      {
        q: "How many plugins will you install?",
        a: "As few as the site genuinely needs. Each plugin adds weight and potential problems, so we choose carefully and avoid stacking several that do the same job. This keeps your site faster and easier to maintain.",
      },
      {
        q: "Can you redesign my existing WordPress site?",
        a: "Yes. We can rebuild the design and clean up the structure while keeping your content and, where possible, your existing URLs. If it needs speed and security work too, that can be handled as part of the project.",
      },
      {
        q: "Do I own the site after it is built?",
        a: "Yes. You own the website, your content and the account it runs on. We set things up in your name wherever possible, and hand over the access details at the end of the project.",
      },
    ],
    startingPrice: "₹7,999",
    related: ["website-maintenance", "website-speed-optimisation", "website-redesign"],
  },
  {
    slug: "seo-content-writing",
    name: "SEO Content Writing",
    title: "SEO Content Writing in Coimbatore | Zyra Digitals",
    metaDescription:
      "SEO content writing in Coimbatore for pages and blogs that read well and answer real questions your customers search for. Free quote within 1 hour.",
    h1: "Content That Answers What Your Customers Search For",
    tagline: "Useful, clear writing built around how people actually search.",
    primaryKeyword: "seo content writing in coimbatore",
    intro: [
      "Good content does two jobs at once: it helps a real person understand something and it tells search engines clearly what a page is about. Content written only for search engines reads awkwardly and turns readers away, while content written with no thought for search simply goes unseen. The balance between the two is where the value lies.",
      "We write page copy and articles for businesses in Coimbatore and beyond, starting from the questions your customers actually type into Google. Each piece is structured with clear headings, answers the query directly and keeps the language simple. The aim is writing that is genuinely useful to the reader and easy for search engines to understand.",
    ],
    included: [
      "Keyword research for each topic",
      "Well-structured page or blog copy",
      "Clear headings and natural keywords",
      "Search-friendly titles and descriptions",
      "One revision round per piece",
      "Content written in Indian English",
    ],
    process: [
      {
        title: "Topic and Keywords",
        text: "We agree the topics that matter to your business, then research the exact phrases your customers use and how competitive each one is.",
      },
      {
        title: "Plan Structure",
        text: "We outline each piece with clear headings and decide what each section must answer, so the content has a logical flow before drafting.",
      },
      {
        title: "Write Draft",
        text: "We write the content in plain, natural language, answering the reader's question directly and weaving keywords in where they genuinely fit.",
      },
      {
        title: "Revise and Deliver",
        text: "You review the draft and we make one round of revisions, then deliver the final text with titles and descriptions ready to publish.",
      },
    ],
    faqs: [
      {
        q: "Do you write for my industry specifically?",
        a: "Yes. We research your industry and your customers before writing, so the content sounds like it was written by someone who understands your business. We will ask for detail about your services at the start and build on the information you provide.",
      },
      {
        q: "How many words are in each piece?",
        a: "Length depends on the topic and the intent behind the search. Short answers may need only a few hundred words, while detailed guides run longer. We will suggest a sensible length for each piece rather than padding it to hit a number.",
      },
      {
        q: "Will the content be unique?",
        a: "Every piece is written from scratch for your business and is not reused elsewhere. We do not spin or copy existing articles, and we can run a check if you would like reassurance on originality before publishing.",
      },
      {
        q: "Do you publish the content for me?",
        a: "We deliver the finished text, formatted with headings and a suggested title and description. If you would like us to publish it on your site and handle the on-page details, we can include that in the project rather than stopping at the writing.",
      },
    ],
    startingPrice: "₹4,999",
    related: ["local-seo", "google-business-profile-optimisation", "website-redesign"],
  },
];

export const getServicePage = (slug?: string) => SERVICE_PAGES.find((s) => s.slug === slug);
