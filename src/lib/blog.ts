import { SITE } from "@/lib/site";

/**
 * Blog content model.
 *
 * Content is stored as structured blocks so every article renders with the
 * same accessible, crawlable HTML (real headings, lists and tables) instead of
 * relying on images or JavaScript-only visual elements.
 *
 * Inline formatting supported inside text blocks:
 *   [link text](/internal-path)  or  [link text](https://external-url)
 *   **bold text**
 */

export type BlogBlock =
  | { t: "p"; c: string }
  | { t: "h2"; c: string }
  | { t: "h3"; c: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "note"; c: string }
  | { t: "cta"; c: string; label: string; to: string };

export interface BlogPost {
  slug: string;
  /** H1 and on-page title. */
  h1: string;
  /** SEO <title> (brand is appended automatically by <SEO> when missing). */
  seoTitle: string;
  description: string;
  keywords: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  intent: string;
  category: string;
  datePublished: string;
  dateModified: string;
  image: string;
  imageAlt: string;
  blocks: BlogBlock[];
}

const img = (prompt: string, size: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt}&image_size=${size}`;

export const BLOG_POSTS: BlogPost[] = [
  /* ------------------------------------------------------------------ */
  /* Blog 1 — Website cost in Coimbatore                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "website-design-cost-coimbatore-2026",
    h1: "How Much Does a Website Cost in Coimbatore in 2026? A Complete Business Guide",
    seoTitle: "Website Design Cost in Coimbatore (2026 Price Guide)",
    description:
      "What does a website really cost in Coimbatore in 2026? See typical price ranges, what drives the cost, domain and hosting fees, and the questions to ask before you hire a website designer.",
    keywords:
      "website design cost in Coimbatore, website development cost in Coimbatore, business website cost, website designer in Coimbatore, small business website cost, professional website development",
    primaryKeyword: "website design cost in Coimbatore",
    supportingKeywords: [
      "website development cost in Coimbatore",
      "business website cost",
      "website designer in Coimbatore",
      "small business website cost",
      "professional website development",
    ],
    intent: "Commercial investigation - a business owner comparing providers before getting quotes.",
    category: "Web Design",
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    image: img(
      "flat%20illustration%20of%20a%20website%20cost%20estimator%20dashboard%20with%20Indian%20rupee%20symbol%2C%20website%20wireframe%2C%20bar%20chart%2C%20clean%20blue%20and%20white%20palette%2C%20professional%20editorial%20blog%20header%2C%20no%20text",
      "landscape_16_9"
    ),
    imageAlt:
      "Illustration of a website cost estimator with a rupee symbol and a website layout, representing website design pricing in Coimbatore",
    blocks: [
      {
        t: "p",
        c: "If you are searching for a website designer in Coimbatore, the first question is almost always the same: how much will it cost? The honest answer is that a website is priced like a tailor-made suit - not like an off-the-shelf product. Two businesses can ask for a website and receive quotes that differ by five times, and both can be reasonable.",
      },
      {
        t: "p",
        c: "This guide explains exactly what drives the price of a website in Coimbatore in 2026, the recurring costs most people forget, and the questions that separate a good website agency from an expensive mistake.",
      },

      { t: "h2", c: "Short answer: what a website costs in Coimbatore" },
      {
        t: "p",
        c: "A simple, professionally built business website in India in 2026 typically falls between roughly **₹10,000 and ₹90,000**, depending on who builds it and how complex it is. A basic one-page site can cost far less, while an online store with payments and hundreds of products can cost well over ₹1,00,000.",
      },
      {
        t: "p",
        c: "At Zyra Digitals, our own published starting prices are **₹7,999 for a professional website**, **₹11,999 for a business website** and **₹19,999 for a corporate website**, excluding domain and hosting. Those numbers are deliberately transparent so you can compare us with anyone else in Coimbatore before you enquire.",
      },
      {
        t: "note",
        c: "The broader ranges above are drawn from third-party 2026 pricing guides for the Indian market, which vary widely between freelancers, boutique agencies and large agencies. Treat them as illustrative market context, not as a fixed price for your project. Your real cost depends on the scope below.",
      },

      { t: "h2", c: "Why website prices vary so much" },

      { t: "h3", c: "1. Number of pages and sections" },
      {
        t: "p",
        c: "A five-page site and a twenty-page site are different projects, not different price points. Each extra service page, landing page or location page needs its own structure, content and internal links, so page count is the single biggest driver of cost.",
      },

      { t: "h3", c: "2. Custom design versus a template" },
      {
        t: "p",
        c: "A template is a pre-made design that thousands of other businesses may already use. A custom design is built around your brand, your services and how your customers make decisions. Custom design takes longer, which is why it costs more - and why it usually converts better.",
      },

      { t: "h3", c: "3. Features and integrations" },
      {
        t: "p",
        c: "Simple features like a contact form are quick. Booking calendars, payment gateways, multi-language support, customer logins or integration with your existing software take real engineering time and add to the cost. Always list the features you cannot live without before you ask for a quote.",
      },

      { t: "h3", c: "4. Content, images and copywriting" },
      {
        t: "p",
        c: "Content is the part most business owners underestimate. Someone has to write the headings and page copy, source or shoot images, and compress them so the site loads quickly. If you have your logo, photos and text ready, you will pay less. If the agency has to create them, that work is included in the quote.",
      },

      { t: "h3", c: "5. SEO and performance work" },
      {
        t: "p",
        c: "A website that looks good but cannot be found is an expense, not an investment. Proper search engine optimisation (SEO) - clean heading structure, fast loading, mobile-friendly layout, correct metadata and structured data - is skilled work. Some agencies charge for it separately; you should always confirm whether it is included.",
      },

      { t: "h3", c: "6. Who builds it" },
      {
        t: "p",
        c: "A freelance developer, a small agency and a large agency have very different overheads. Freelancers can be cheaper, but you may be relying on one person. Agencies can be more expensive but usually provide a team, a process and ongoing support. The right choice depends on how important the website is to your business.",
      },

      { t: "h2", c: "Typical website types and what they need" },
      {
        t: "table",
        head: ["Website type", "What it usually includes", "Best suited for"],
        rows: [
          [
            "Landing page",
            "One page, a single offer, enquiry form",
            "A campaign, a product launch or a quick online presence",
          ],
          [
            "Portfolio website",
            "Up to about 5 pages, work gallery, enquiry form",
            "Freelancers, designers and personal brands",
          ],
          [
            "Business website",
            "About 8 to 12 pages, service pages, blog, contact",
            "Clinics, consultancies and local service businesses",
          ],
          [
            "E-commerce website",
            "Product catalogue, cart, checkout, payments",
            "Brands selling physical or digital products online",
          ],
          [
            "Booking website",
            "Calendars, appointment slots, reminders",
            "Dental clinics, salons, tutors and consultants",
          ],
        ],
      },
      {
        t: "p",
        c: "If you are unsure which type fits your business, our [website design packages](/web-design) show what is included at each level.",
      },

      { t: "h2", c: "The full cost checklist: what you actually pay for" },
      {
        t: "p",
        c: "Most buyers only think about the build. In reality there are three buckets of cost: a one-time build, recurring essentials, and optional extras.",
      },
      {
        t: "table",
        head: ["Item", "One-time or recurring", "What to expect"],
        rows: [
          ["Domain name", "Recurring (yearly)", "A few hundred to about ₹1,500 per year depending on the extension"],
          ["Hosting", "Recurring (yearly)", "A few thousand rupees per year for a business site; more for high-traffic stores"],
          ["Design and development", "One-time", "The main build cost, based on the scope above"],
          ["SSL certificate", "Recurring", "Often free with modern hosting"],
          ["Content and images", "One-time", "Included, or extra if you need copywriting and photography"],
          ["Maintenance and support", "Recurring (monthly or yearly)", "Updates, backups, small changes and security checks"],
          ["SEO and content marketing", "Recurring (monthly)", "Separate from the build; see our [SEO plans](/seo)"],
        ],
      },
      {
        t: "note",
        c: "Domain and hosting prices are set by registrars and hosting providers, not by the agency, and change over time. Always confirm current renewal prices - a cheap first year can be followed by an expensive second year.",
      },

      { t: "h2", c: "Business website versus e-commerce website" },
      {
        t: "p",
        c: "These are the two most common projects, and they are priced differently because they do different jobs.",
      },
      {
        t: "table",
        head: ["", "Business website", "E-commerce website"],
        rows: [
          ["Main goal", "Generate enquiries and build trust", "Sell products directly online"],
          ["Key features", "Service pages, forms, testimonials", "Catalogue, cart, checkout, payments, shipping"],
          ["Complexity", "Moderate", "Higher - every step must work reliably"],
          ["Ongoing needs", "Occasional content updates", "Product, stock and order management"],
          ["Relative cost", "Lower", "Higher, and can scale with catalogue size"],
        ],
      },
      {
        t: "p",
        c: "Many businesses start with a business website and add online selling later. That is a sensible path - it spreads the cost and lets you learn what your customers actually search for first.",
      },

      { t: "h2", c: "Common pricing mistakes businesses should avoid" },
      {
        t: "ul",
        items: [
          "**Choosing only on the lowest price.** The cheapest quote often excludes SEO, content, mobile testing or any support after launch.",
          "**Forgetting recurring costs.** Domain, hosting and maintenance continue every year, whether or not you planned for them.",
          "**Not defining the scope in writing.** 'A website' can mean five pages or fifty. Get the page list and features in the agreement.",
          "**Paying the full amount upfront.** A staged payment schedule protects both sides.",
          "**Skipping SEO to save money.** Rebuilding a site later to add SEO costs more than doing it correctly the first time.",
          "**Ignoring who owns the website.** Confirm that you own the domain, the code and the accounts when the project ends.",
        ],
      },

      { t: "h2", c: "How to choose the right website design agency in Coimbatore" },
      {
        t: "ul",
        items: [
          "Look at real, live websites they have built - not just screenshots.",
          "Check whether those sites load quickly on your own phone.",
          "Ask what happens after launch: support, updates and who you contact.",
          "Confirm the price includes mobile design, basic SEO and a contact form that works.",
          "Read the proposal carefully and make sure every feature you asked for is listed.",
          "Prefer a team that explains their reasoning in plain language over one that uses jargon.",
        ],
      },
      {
        t: "p",
        c: "You can review genuine examples of our work on our [Our Work page](/our-work).",
      },

      { t: "h2", c: "Questions to ask before hiring a website designer" },
      {
        t: "ol",
        items: [
          "What exactly is included in this price, and what is not?",
          "How many pages and revisions are covered?",
          "Who writes the content and provides the images?",
          "Will the website be mobile-friendly and fast on slow connections?",
          "Is on-page SEO included, and how will I measure results?",
          "Who owns the domain, the hosting account and the code?",
          "What is the timeline, and what do you need from me to start?",
          "What does support cost after launch, and what is the response time?",
        ],
      },

      { t: "h2", c: "A practical website project checklist" },
      {
        t: "ul",
        items: [
          "Define your goal in one sentence - enquiries, bookings or sales.",
          "List every page you need and the main action on each one.",
          "Gather your logo, brand colours, photos and any existing text.",
          "Decide who will manage the site after launch.",
          "Set a realistic budget that includes the first year of running costs.",
          "Agree the scope, timeline and payment stages in writing.",
          "Plan how you will measure success - calls, forms or online orders.",
          "Test the finished site on a real phone before you sign off.",
        ],
      },

      { t: "h2", c: "The bottom line" },
      {
        t: "p",
        c: "A website is not a one-off purchase - it is the tool that turns searches into enquiries for years. Focus less on the smallest number and more on which quote gives you a fast, findable, well-built website with clear support afterwards. That is the price that matters.",
      },
      {
        t: "cta",
        c: "Tell us what your business needs and we will send a free, no-obligation quote with a clear breakdown of pages, features and costs.",
        label: "Discuss Your Website Project",
        to: "/contact",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Blog 2 — Local SEO in Coimbatore                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "local-seo-coimbatore-2026",
    h1: "Local SEO in 2026: How Coimbatore Businesses Can Get More Customers from Google",
    seoTitle: "Local SEO in Coimbatore: Get More Customers from Google (2026)",
    description:
      "A practical 2026 guide to local SEO for Coimbatore businesses - how local search works, Google Business Profile optimisation, local keywords, reviews, citations and how to measure results.",
    keywords:
      "local SEO in Coimbatore, SEO services in Coimbatore, Google Business Profile optimization, local business SEO, how to rank a business on Google, local search optimization",
    primaryKeyword: "Local SEO in Coimbatore",
    supportingKeywords: [
      "SEO services in Coimbatore",
      "Google Business Profile optimization",
      "local business SEO",
      "how to rank a business on Google",
      "local search optimization",
    ],
    intent: "Informational to commercial - a local business owner trying to understand how to appear in local search.",
    category: "SEO",
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    image: img(
      "flat%20illustration%20of%20a%20small%20business%20storefront%20on%20a%20map%20with%20a%20location%20pin%20and%20local%20search%20result%20cards%2C%20clean%20blue%20and%20white%20palette%2C%20professional%20editorial%20blog%20header%2C%20no%20text",
      "landscape_16_9"
    ),
    imageAlt:
      "Illustration of a local business on a map with a location pin and search results, representing local SEO for Coimbatore businesses",
    blocks: [
      {
        t: "p",
        c: "When someone searches for a dentist, an interior designer or a web design agency near them, Google does not show the same results it shows to someone across the country. It shows a small set of nearby businesses it trusts for that search. Local SEO is simply the work of making sure your business is one of them.",
      },
      {
        t: "p",
        c: "This guide explains how local search works for Coimbatore businesses in 2026, what actually moves the needle, and what to ignore.",
      },

      { t: "h2", c: "How local search works" },
      {
        t: "p",
        c: "Google has published its own explanation of local ranking. Local results are mainly based on three factors: **relevance, distance and prominence**.",
      },
      {
        t: "ul",
        items: [
          "**Relevance** - how well your business matches what was searched. A complete, accurate business profile and clear service pages improve this.",
          "**Distance** - how far your business is from the person searching. You cannot change your location, but you can make sure it is recorded accurately.",
          "**Prominence** - how well known and trusted your business looks online and offline. Reviews, mentions and useful content build this.",
        ],
      },
      {
        t: "p",
        c: "Because distance is outside your control, the realistic goal of local SEO is to maximise relevance and prominence - so that when someone nearby searches, your business is the obvious match. You can read Google's own description of these factors in the [Business Profile Help documentation](https://support.google.com/business/answer/7091).",
      },
      {
        t: "note",
        c: "Local rankings depend on many factors, a lot of which are outside your control, and they also change over time. No honest agency can guarantee a specific position in the map results.",
      },

      { t: "h2", c: "Start with your Google Business Profile" },
      {
        t: "p",
        c: "For most local businesses, the Google Business Profile (the listing that appears in Google Maps and the map pack) is the single most important asset. It is free, and it is often where a new customer decides whether to call you.",
      },
      { t: "h3", c: "What to get right" },
      {
        t: "ul",
        items: [
          "**Business name** - your real trading name only. Adding keywords to the name risks suspension.",
          "**Primary category** - the most accurate one. This is one of the strongest signals available to you.",
          "**Services** - list each service you actually offer, with short descriptions.",
          "**Service area and address** - record these truthfully. Do not claim a location you do not operate from.",
          "**Hours** - keep them accurate, including holidays, because wrong hours frustrate customers and reduce trust.",
          "**Photos** - add genuine photos regularly. Real images of your work and team outperform stock images.",
          "**Website link** - point it to the most relevant page, not always the homepage.",
        ],
      },
      {
        t: "p",
        c: "Complete every field Google offers. An incomplete profile is one of the easiest problems to fix and one of the most commonly ignored.",
      },

      { t: "h2", c: "Do local keyword research, not national keyword research" },
      {
        t: "p",
        c: "The keywords that bring you customers include a place. Someone in Coimbatore searching for a service types things like 'website design in Coimbatore', 'dental clinic near Saibaba Colony' or 'interior designer in Peelamedu'. National keywords like 'website design company' are far more competitive and far less likely to produce a local enquiry.",
      },
      {
        t: "p",
        c: "Build a list by combining your services with the places you serve: your city, your neighbourhoods and the areas your customers actually come from. Then check Google's autocomplete and the 'People also ask' box for the exact phrasing people use.",
      },

      { t: "h2", c: "Create genuinely useful location pages" },
      {
        t: "p",
        c: "If you serve several areas, each one can have its own page - but only if it offers something real. A page that simply repeats the same text with a different place name is a doorway page, which violates search guidelines and helps no one.",
      },
      {
        t: "ul",
        items: [
          "Include local proof: projects you have completed for customers in that area, or how you work with businesses there.",
          "Describe services in the context of local demand - the problems businesses in that area actually have.",
          "Add the area name naturally in headings and body text, not repeated artificially.",
          "Link to and from your main service pages so the structure is clear.",
        ],
      },
      {
        t: "p",
        c: "Our own [industry pages](/industries) follow this principle: real solutions for specific types of local businesses rather than one page copy-pasted many times.",
      },

      { t: "h2", c: "Keep your business details consistent everywhere" },
      {
        t: "p",
        c: "Your business name, address and phone number (sometimes called NAP) should be identical on your website, your Google Business Profile, and genuine directories. Inconsistency confuses search engines and makes it harder to confirm that these listings refer to the same business.",
      },
      {
        t: "ul",
        items: [
          "Use the same spelling and formatting of your business name everywhere.",
          "List only directories that are genuine and relevant to your industry or city.",
          "Update old listings when your phone number or address changes.",
        ],
      },

      { t: "h2", c: "Reviews and reputation management" },
      {
        t: "p",
        c: "Reviews are one of the strongest prominence signals for local search, and they influence real customers just as much. Ask satisfied customers to leave an honest review - after a completed job, in person, at the moment they are happiest.",
      },
      {
        t: "ul",
        items: [
          "Never buy reviews or write fake ones. Google penalises it, and customers can often tell.",
          "Reply to every review, including negative ones, calmly and professionally.",
          "Encourage reviews to include detail - a review that mentions the service they used can help relevance.",
          "Keep getting reviews over time. A steady flow looks more natural than a burst followed by silence.",
        ],
      },

      { t: "h2", c: "Get the technical basics right" },
      {
        t: "p",
        c: "Local SEO is built on top of technical SEO. If Google cannot crawl your site quickly, or if your site is slow and awkward on a phone, the rest of your work is undermined.",
      },
      {
        t: "ul",
        items: [
          "Make sure your site works properly on a mobile phone - most local searches happen there.",
          "Keep pages fast. Slow pages lose visitors and rankings.",
          "Use HTTPS across the whole site.",
          "Make sure your pages are indexable and not accidentally blocked.",
          "Add local business structured data so search engines can read your details directly.",
        ],
      },
      {
        t: "p",
        c: "These are the same fundamentals we apply in our [SEO services](/seo) for clients across Coimbatore and Tamil Nadu.",
      },

      { t: "h2", c: "Local links and community authority" },
      {
        t: "p",
        c: "Prominence grows when other legitimate websites mention or link to you. For a local business, the most valuable mentions usually come from your own community.",
      },
      {
        t: "ul",
        items: [
          "Sponsor or support a genuine local event, and ask for a credit on their site.",
          "Join local business associations and professional groups with a real member directory.",
          "Ask suppliers, partners and clients to link to you where it is genuinely useful.",
          "Offer to write or contribute to a local publication relevant to your industry.",
        ],
      },
      {
        t: "p",
        c: "Avoid paid link schemes and mass directory submissions. They rarely help and can actively harm you.",
      },

      { t: "h2", c: "How to measure local SEO performance" },
      {
        t: "ul",
        items: [
          "**Google Business Profile insights** - views, calls, direction requests and website clicks.",
          "**Search Console** - impressions and clicks for local queries containing your city or area.",
          "**Rank tracking** - track a handful of realistic local keywords over months, not days.",
          "**Enquiries** - the only metric that really matters. Ask every new customer how they found you.",
        ],
      },

      { t: "h2", c: "Common local SEO mistakes to avoid" },
      {
        t: "ul",
        items: [
          "Stuffing keywords into your business name on Google.",
          "Creating fake addresses or fake location pages.",
          "Leaving your business profile incomplete or with wrong hours.",
          "Buying reviews or ignoring negative feedback.",
          "Chasing national keywords instead of local, high-intent ones.",
          "Expecting results in a week - local SEO is a gradual build.",
        ],
      },

      { t: "h2", c: "Where to start" },
      {
        t: "p",
        c: "If you only do three things this month: complete your Google Business Profile, add the place names your customers actually search to your service pages, and ask ten happy customers for an honest review. Those three steps alone move most local businesses forward more than any technical trick.",
      },
      {
        t: "cta",
        c: "Want a clear picture of where your business currently stands in local search? Tell us about your business and we will review your website and Google presence.",
        label: "Explore Our SEO Services",
        to: "/seo",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Blog 3 — SEO vs AEO vs GEO                                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "seo-vs-aeo-vs-geo-2026",
    h1: "SEO vs AEO vs GEO: How Businesses Can Get Discovered on Google and AI Search in 2026",
    seoTitle: "SEO vs AEO vs GEO: Getting Found on Google and AI Search",
    description:
      "SEO, AEO and GEO explained in plain language for business owners. Learn how Google AI Overviews, ChatGPT Search and Perplexity find information, and the realistic steps that improve your visibility.",
    keywords:
      "SEO vs AEO vs GEO, Answer Engine Optimization, Generative Engine Optimization, AI search optimization, Google AI Overviews optimization, ChatGPT search visibility, AI search for businesses",
    primaryKeyword: "SEO vs AEO vs GEO",
    supportingKeywords: [
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "AI search optimization",
      "Google AI Overviews optimization",
      "ChatGPT search visibility",
      "AI search for businesses",
    ],
    intent: "Informational - owners and marketers trying to understand how AI search changes their visibility.",
    category: "AI Search",
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    image: img(
      "flat%20illustration%20comparing%20three%20panels%3A%20search%20result%20list%2C%20a%20featured%20answer%20box%2C%20and%20an%20AI%20chat%20assistant%20answer%2C%20clean%20blue%20and%20white%20palette%2C%20professional%20editorial%20blog%20header%2C%20no%20text",
      "landscape_16_9"
    ),
    imageAlt:
      "Illustration comparing search results, an answer box and an AI chat answer, representing SEO, AEO and GEO",
    blocks: [
      {
        t: "p",
        c: "For twenty years, the goal of search marketing was simple: rank on page one and earn the click. In 2026 that is only part of the picture. Many searches now end inside an answer - a Google AI Overview, a ChatGPT reply or a Perplexity summary - without the user visiting a website at all. That shift created three overlapping terms: SEO, AEO and GEO.",
      },
      {
        t: "p",
        c: "This article explains each one in plain language, how they differ, and what a small business can realistically do about it - without chasing shortcuts that do not work.",
      },

      { t: "h2", c: "Quick definitions" },
      {
        t: "ul",
        items: [
          "**SEO (Search Engine Optimisation)** - optimising your website so it ranks well in traditional search results on Google and Bing, and earns clicks.",
          "**AEO (Answer Engine Optimisation)** - formatting your content so it can be used as the direct answer to a question, whether that appears as a featured snippet, a voice answer, or an AI Overview.",
          "**GEO (Generative Engine Optimisation)** - optimising your brand, content and reputation so that AI tools choose to cite and recommend you inside their generated answers.",
        ],
      },

      { t: "h2", c: "What SEO means" },
      {
        t: "p",
        c: "SEO is the foundation, and it has not gone away. It covers technical health (fast, crawlable, mobile-friendly pages), on-page work (clear titles, headings and content), and authority (genuine links and mentions). Everything else sits on top of this. If Google cannot crawl and understand your site, no amount of AEO or GEO will help.",
      },

      { t: "h2", c: "What AEO means" },
      {
        t: "p",
        c: "AEO is about being the answer. It is the practice of writing content that directly and clearly answers a specific question, in a form that a search engine can lift out and present on its own.",
      },
      {
        t: "p",
        c: "In practice, AEO usually means putting a short, direct answer immediately after a question-style heading, then expanding with detail. Someone reading only the first sentence should already have the answer.",
      },

      { t: "h2", c: "What GEO means" },
      {
        t: "p",
        c: "GEO is about being cited inside an AI-generated response. When ChatGPT Search or Perplexity answers a question, it may reference several sources. GEO is the work of becoming one of those referenced sources - and of being described accurately.",
      },
      {
        t: "p",
        c: "It relies on the same fundamentals as SEO - crawlable, useful, trustworthy content - but adds emphasis on clarity of facts, a well-defined business identity, and being mentioned and linked by other credible websites.",
      },

      { t: "h2", c: "Key differences at a glance" },
      {
        t: "table",
        head: ["", "SEO", "AEO", "GEO"],
        rows: [
          ["Goal", "Rank and earn the click", "Be the extracted answer", "Be cited inside an AI answer"],
          ["Where it shows", "Search results pages", "Featured snippets, answer boxes, voice", "AI Overviews, ChatGPT, Perplexity, Copilot"],
          ["What matters most", "Technical health, content, authority", "Direct answers to real questions", "Clear facts, identity and credible mentions"],
          ["Main measure", "Rankings and organic clicks", "Snippet and answer presence", "Citation and referral mentions"],
          ["Difficulty", "Competitive and mature", "Moderate", "New and unpredictable"],
        ],
      },

      { t: "h2", c: "How Google AI Overviews work at a high level" },
      {
        t: "p",
        c: "Google AI Overviews are generated summaries that appear above traditional results for certain queries. Google builds them from sources it already trusts in its index, using the same crawling and quality systems that power normal search. You can read Google's own guidance in the [Search Central documentation](https://developers.google.com/search/docs).",
      },
      {
        t: "p",
        c: "The practical takeaway is simple: pages that are already well-positioned in classic search are the most likely to be used in AI features. You do not optimise for AI Overviews through a separate set of tricks - you do it by being a strong, clear, crawlable result.",
      },

      { t: "h2", c: "How ChatGPT, Perplexity and other answer engines find information" },
      {
        t: "p",
        c: "Each platform runs its own crawler with its own purpose, and these are documented openly:",
      },
      {
        t: "ul",
        items: [
          "**OpenAI** documents crawlers such as OAI-SearchBot for surfacing websites in ChatGPT search features. Its separate purpose from model training crawlers is explained in the [OpenAI bots documentation](https://developers.openai.com/api/docs/bots).",
          "**Perplexity** documents PerplexityBot as designed to surface and link websites in its search results, not to train foundation models - see the [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).",
          "**Microsoft** builds Copilot's web results on Bing, so Bingbot access and a Bing Webmaster Tools setup matter for Copilot visibility.",
        ],
      },
      {
        t: "p",
        c: "A practical first step for any business is therefore boring but essential: confirm that these crawlers are actually allowed to reach your pages, and that your important information is present as real text rather than only inside images or animations.",
      },

      { t: "h2", c: "Why crawlability and useful content matter more than tricks" },
      {
        t: "p",
        c: "AI systems can only reference what they can read. Content locked inside images, hidden behind interactions, or rendered only after a chain of scripts is harder to use and less likely to be quoted. The same is true for content that is thin, duplicated or written purely to fill a page.",
      },
      {
        t: "p",
        c: "Genuinely useful content - accurate, specific and written for a real reader - is what gets referenced, because it is what other pages link to and what answers a question completely.",
      },

      { t: "h2", c: "Entity clarity and structured data" },
      {
        t: "p",
        c: "An 'entity' is simply the thing search engines understand you to be: a named business with a location, services and a founder. When your details are consistent across your website and other credible profiles, it is easier for a search engine to confirm who you are and what you do.",
      },
      {
        t: "p",
        c: "Structured data (schema markup) helps by stating these facts in a machine-readable format - your business name, address, services and founder can all be declared explicitly. It is worth doing properly, but it is not magic:",
      },
      {
        t: "note",
        c: "Structured data does not guarantee AI citations or rich results. It helps machines understand your content correctly. The information you mark up must match what is actually visible on your website.",
      },

      { t: "h2", c: "Practical examples for small businesses" },
      {
        t: "ul",
        items: [
          "A **dental clinic** writes a page that answers 'how often should I get a dental check-up?' with a direct one-sentence answer first. That page can be quoted by an AI Overview; a page that only says 'Contact us for appointments' cannot.",
          "An **interior designer** publishes real project write-ups with the client's challenge and the approach taken. Concrete detail is more quotable than generic marketing language.",
          "A **local service business** keeps its name, phone number and service area identical across its website, its Google Business Profile and its directories, so AI tools describe it correctly.",
        ],
      },

      { t: "h2", c: "A realistic action plan" },
      {
        t: "ol",
        items: [
          "**Fix the fundamentals first.** Fast, mobile-friendly, crawlable pages with correct titles and headings.",
          "**Answer real questions.** Add content that directly answers what your customers ask, with the answer near the top.",
          "**Be specific.** Use real numbers, real places and real examples instead of vague claims.",
          "**Be consistent.** Keep your business identity the same everywhere it appears online.",
          "**Declare your facts.** Use accurate structured data that matches your visible content.",
          "**Build genuine reputation.** Earn mentions and links from credible, relevant websites.",
          "**Measure and be patient.** Track visibility across Google, Bing and AI tools over months, and recognise that AI answers vary by user and change often.",
        ],
      },

      { t: "h2", c: "What does not work" },
      {
        t: "ul",
        items: [
          "Keyword stuffing and text written only for machines.",
          "Special files or 'AI markups' that claim to guarantee AI visibility.",
          "Fake reviews, fake listings or invented credentials.",
          "Buying links or mass-producing low-value articles.",
          "Assuming one good AI mention means you have 'won' - results change constantly.",
        ],
      },

      { t: "h2", c: "The bottom line" },
      {
        t: "p",
        c: "SEO, AEO and GEO are not three separate strategies to run in parallel. They are three views of the same job: publish clear, accurate, genuinely useful information on a website that search engines and AI tools can easily read, and build a reputation that makes you worth citing. Do that well, and you improve your chances across every platform at once.",
      },
      {
        t: "cta",
        c: "We help businesses in Coimbatore and across India improve their search visibility with sound technical SEO, clear content and accurate structured data. Tell us about your goals.",
        label: "Get in Touch with Zyra Digitals",
        to: "/contact",
      },
    ],
  },
];

export const getPost = (slug?: string) => BLOG_POSTS.find((p) => p.slug === slug);

/** Rough reading time, computed from the actual text so it is never invented. */
export const readingTime = (post: BlogPost) => {
  const words = post.blocks
    .map((b) => {
      if ("c" in b) return b.c;
      if ("items" in b) return b.items.join(" ");
      if ("rows" in b) return b.rows.flat().join(" ");
      return "";
    })
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

/** Excerpt derived from the first paragraph. */
export const excerptOf = (post: BlogPost) => {
  const first = post.blocks.find((b) => b.t === "p");
  const text = first && "c" in first ? first.c : post.description;
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");
};

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export const SITE_ORIGIN = SITE.url;
