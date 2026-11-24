export type LocationPage = {
  slug: string;
  city: string;
  region: string;
  title: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string[];
  localFocus: string[];
  faqs: { q: string; a: string }[];
  nearby: string[];
};

export const LOCATION_PAGES: LocationPage[] = [
  {
    slug: "website-design-coimbatore",
    city: "Coimbatore",
    region: "Tamil Nadu",
    title: "Website Design in Coimbatore | Zyra Digitals",
    metaDescription:
      "Zyra Digitals is a Coimbatore-based agency building fast, mobile-friendly websites for local businesses. Free quote within 1 hour.",
    h1: "Website Design in Coimbatore for Growing Local Businesses",
    tagline: "A website that works as hard as your Coimbatore business does.",
    intro: [
      "Coimbatore, often called the Manchester of South India, is home to one of the country's densest clusters of engineering, textile and pump manufacturing firms. Around the city you will also find dental and physiotherapy clinics, interior designers, educational institutes, restaurants and family-run retail shops. Most of these businesses now need a clean, mobile-friendly website that explains what they do, shows proof of their work and makes it easy for a customer to send an enquiry or call. Many still rely on just a Google listing or a social media page, which limits how many searches they can capture.",
      "We are based in Malumichampatti, Coimbatore, but we work with clients the same way online as we would in person. Everything is delivered remotely: you share your requirements on a WhatsApp message or a video call, we send a fixed quote, and you review drafts through simple links. Replies are guaranteed within one hour during working hours, so questions never sit unanswered. Whether you are in Peelamedu, Saibaba Colony or a nearby industrial area, you get the same clear process.",
    ],
    localFocus: [
      "Manufacturing and engineering firms",
      "Textile and pump manufacturers",
      "Dental and healthcare clinics",
      "Educational institutes and coaching",
      "Interior designers and builders",
      "Restaurants and retail shops",
    ],
    faqs: [
      {
        q: "Where is Zyra Digitals located?",
        a: "Our head office is in Malumichampatti, Coimbatore, in Tamil Nadu. Because we work 100% online, most projects are handled through WhatsApp, email and video calls even for local clients. If you are in or near Coimbatore, we can also arrange a meeting on request.",
      },
      {
        q: "Do I need to visit your office for a website project?",
        a: "No. We deliver websites remotely for clients across Tamil Nadu and India, so you can complete the whole project from your own home or workplace. We share designs as live links, collect feedback on WhatsApp or a call, and keep you updated at each stage. That said, if you are based in Coimbatore and would prefer to meet, we can arrange that.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A simple portfolio or business website usually takes about one to three weeks once we have your content, images and requirements. Larger sites with many pages or online selling take longer. The exact timeline is confirmed in writing before we start, so you always know what to expect.",
      },
      {
        q: "What affects the price of my website?",
        a: "The price depends mainly on the number of pages, the features you need, and whether we also create the content and images. Website design starts from ₹7,999 and SEO services start from ₹2,999. You receive a fixed quote before work begins, so there are no surprises.",
      },
    ],
    nearby: ["website-design-tiruppur", "website-design-erode", "website-design-salem"],
  },
  {
    slug: "website-design-tiruppur",
    city: "Tiruppur",
    region: "Tamil Nadu",
    title: "Website Design in Tiruppur | Zyra Digitals",
    metaDescription:
      "Zyra Digitals, a Coimbatore-based agency, designs websites for Tiruppur garment and textile businesses. Work delivered online. Free quote within 1 hour.",
    h1: "Websites for Tiruppur Businesses, Built Online from Coimbatore",
    tagline: "Websites for Tiruppur's garment and textile businesses.",
    intro: [
      "Tiruppur is the knitwear capital of India, and much of the city's business is built on garments. Exporters, hosiery and knitwear manufacturers, dyeing and printing units, fabric traders and apparel wholesalers all operate here, and most of their customers are other businesses rather than walk-in shoppers. These companies typically need a website that presents their product range, lists their credentials and makes it simple for a buyer to request a catalogue, send an enquiry or ask for a quotation. A credible online presence often decides whether a new buyer replies at all.",
      "Zyra Digitals serves Tiruppur businesses entirely online from our base in Coimbatore. You do not need to travel or arrange a local office visit: we plan your website over WhatsApp and video calls, share the design as a live link, and keep revisions clear. Every enquiry we receive gets a reply within one hour, and pricing is fixed in writing before work starts. That way, a garment or textile business owner can stay focused on orders while the website gets built.",
    ],
    localFocus: [
      "Textile and garment export enquiries",
      "Knitwear and hosiery manufacturers",
      "Dyeing and printing units",
      "Apparel brands and wholesalers",
      "Fabric suppliers and traders",
      "Logistics and packaging services",
    ],
    faqs: [
      {
        q: "How do you work with Tiruppur businesses from Coimbatore?",
        a: "We are based in Coimbatore and serve Tiruppur clients entirely online. You share your requirements over WhatsApp or a video call, we send a fixed quote, and you review designs through shareable links. There is no need to travel between the two cities for the project to move forward.",
      },
      {
        q: "Can you build a website focused on export enquiries?",
        a: "Yes. For garment and textile businesses we can build pages that present your products, credentials and factory details, with clear enquiry forms for buyers. The goal is to make it easy for a trade buyer to send a quotation request. We agree the exact pages and features with you before development.",
      },
      {
        q: "How soon can my Tiruppur website go live?",
        a: "Most business websites take roughly one to three weeks after we receive your content and confirm the scope. Product-heavy or multi-page sites can take longer. We confirm a realistic timeline in writing at the start and keep you updated as the build progresses.",
      },
      {
        q: "Is the quoted price fixed?",
        a: "Yes. After we understand your scope, we send a fixed written quote covering the agreed pages and features. Website design starts from ₹7,999. If you later add new requirements, we discuss and confirm any change in price before doing the extra work.",
      },
    ],
    nearby: ["website-design-coimbatore", "website-design-erode", "website-design-salem"],
  },
  {
    slug: "website-design-erode",
    city: "Erode",
    region: "Tamil Nadu",
    title: "Website Design in Erode | Zyra Digitals",
    metaDescription:
      "Coimbatore-based Zyra Digitals builds websites for Erode textile and agri businesses, delivered online. Website design from ₹7,999. Free quote in 1 hour.",
    h1: "Website Design for Erode Businesses, Delivered Online",
    tagline: "Websites for Erode textile and agri businesses, built online.",
    intro: [
      "Erode's economy runs on textiles and agriculture. The city is well known for its cotton and handloom trade, dyeing and fabric processing units, ginning mills, and one of the country's largest turmeric markets, alongside coconut and farm produce trading. Local businesses here often need a website that shows their range of products, explains bulk and trade enquiries, and gives buyers a simple way to get in touch. Many still depend on word of mouth and a basic directory listing, so a well-built website is a clear opportunity to stand out.",
      "We work with Erode businesses online from our Coimbatore base, so distance is never an issue. You describe what you need over WhatsApp or a short video call, and we deliver the design and build as shareable links you can review anytime. Replies to your questions are guaranteed within one hour, and every price is fixed and agreed before we begin. The whole process is designed to be simple even if you have never commissioned a website before.",
    ],
    localFocus: [
      "Textile and handloom businesses",
      "Turmeric traders and agri dealers",
      "Dyeing and fabric processing units",
      "Coconut and farm produce traders",
      "Ginning mills and cotton traders",
      "Local retail and showroom brands",
    ],
    faqs: [
      {
        q: "Can you work with a business in Erode if you are in Coimbatore?",
        a: "Yes. We serve Erode businesses fully online from our Coimbatore base. Everything is handled through WhatsApp, email and video calls, and designs are shared as live preview links. You do not need to come to Coimbatore or arrange a local office visit.",
      },
      {
        q: "Do you understand Erode's textile and turmeric trade?",
        a: "We design websites for local trade businesses, including ones that present product ranges and handle bulk or trade enquiries. Your knowledge of the products is what matters most; we translate that into clear pages and enquiry forms. Before we start, we discuss your buyers and what they usually ask.",
      },
      {
        q: "What is the usual delivery time?",
        a: "A standard business website is typically delivered in about one to three weeks once your content is ready. Bigger projects with many product pages take longer. We set a clear timeline in writing before we begin so you can plan around it.",
      },
      {
        q: "How is the cost calculated?",
        a: "Pricing is based on the number of pages, the features you need, and whether we handle the content and images. Website design starts from ₹7,999, and SEO starts from ₹2,999. You get a fixed quote up front, with no hidden charges.",
      },
    ],
    nearby: ["website-design-coimbatore", "website-design-tiruppur", "website-design-salem"],
  },
  {
    slug: "website-design-salem",
    city: "Salem",
    region: "Tamil Nadu",
    title: "Website Design in Salem | Zyra Digitals",
    metaDescription:
      "Zyra Digitals, based in Coimbatore, designs affordable websites for Salem businesses, delivered remotely. Website design from ₹7,999. Free quote in 1 hour.",
    h1: "Affordable Website Design for Salem Businesses",
    tagline: "A fast, mobile-friendly website for your Salem business.",
    intro: [
      "Salem has a diverse local economy. Steel and fabrication units, mango growers and food traders, sago and starch manufacturers, textile and handloom businesses, and silver jewellery retailers all operate in and around the city, alongside a large number of schools and coaching centres. Each of these groups needs something slightly different online, but the common goal is the same: a clear, mobile-friendly website that answers questions and makes it easy for a customer to enquire, order or visit.",
      "Zyra Digitals helps Salem businesses build that presence entirely online from Coimbatore. We gather your requirements over WhatsApp and video calls, share designs as live preview links, and keep the whole project transparent with a fixed written quote. Enquiries are answered within one hour, so you are never left waiting for a reply. Whether you run a family steel shop or a growing food brand, you get the same structured, remote process.",
    ],
    localFocus: [
      "Steel and fabrication businesses",
      "Mango growers and food traders",
      "Sago and starch manufacturers",
      "Textile and handloom units",
      "Jewellery and silver retailers",
      "Schools and coaching centres",
    ],
    faqs: [
      {
        q: "How does an online agency serve businesses in Salem?",
        a: "We are based in Coimbatore and deliver everything for Salem clients online. You brief us on WhatsApp or a video call, we share designs as live links for review, and changes are discussed the same way. The process is designed so you never need to travel to Coimbatore.",
      },
      {
        q: "Do you build websites for shops and local service businesses?",
        a: "Yes. We build websites for retail shops, food brands, jewellery retailers, schools and other local businesses, focused on clear information and easy enquiries. We start by understanding what your customers usually want to know. Then we structure the pages around those questions.",
      },
      {
        q: "How long will my website take to build?",
        a: "Most websites are completed in one to three weeks after we have your content and a confirmed scope. If you need more pages or extra features, the timeline extends accordingly. We agree the schedule in writing before development begins.",
      },
      {
        q: "What determines my website cost?",
        a: "The main factors are page count, required features, and whether we create the content and images for you. Website design starts from ₹7,999 and SEO services from ₹2,999. We provide a fixed quote before starting, so you can compare options clearly.",
      },
    ],
    nearby: ["website-design-coimbatore", "website-design-erode", "website-design-tiruppur"],
  },
  {
    slug: "website-design-chennai",
    city: "Chennai",
    region: "Tamil Nadu",
    title: "Website Design in Chennai | Zyra Digitals",
    metaDescription:
      "Zyra Digitals, a Coimbatore-based agency, builds fast, mobile-friendly websites for Chennai businesses. Delivered online. Free quote within 1 hour.",
    h1: "Website Design in Chennai, Delivered Remotely from Coimbatore",
    tagline: "Chennai businesses deserve websites that load fast and convert.",
    intro: [
      "Chennai is a large, fast-moving market. The city's IT corridor along the Old Mahabalipuram Road is full of software companies and SaaS startups, while hospitals and clinics, restaurants and cloud kitchens, real estate builders and coaching institutes serve a huge population. Competition is high, and customers here search and compare online before they call. A slow or outdated website costs enquiries, so businesses need fast, mobile-friendly sites with clear service pages and an easy way to make contact.",
      "Although we are based in Coimbatore, Zyra Digitals works with Chennai businesses completely online. You brief us over WhatsApp or a video call, review the design via a shareable link, and approve each stage remotely. Every enquiry you send gets a reply within one hour, and we confirm the full scope and a fixed price in writing before development starts. You get agency-quality work without the overhead of a local office.",
    ],
    localFocus: [
      "IT and software companies",
      "SaaS and tech startups",
      "Hospitals and clinics",
      "Restaurants and cloud kitchens",
      "Real estate and builders",
      "Coaching and e-learning brands",
    ],
    faqs: [
      {
        q: "Can a Coimbatore agency handle a Chennai website project?",
        a: "Absolutely. We work with clients across India and worldwide, all online, and Chennai is no different. You communicate with us through WhatsApp, email and video calls, and review designs via shareable links. Being in a different city has no effect on the quality or speed of delivery.",
      },
      {
        q: "How do meetings work if I am in Chennai?",
        a: "We hold regular video calls and reply to messages throughout working hours, so meetings happen remotely. Every enquiry gets a reply within one hour during working hours. For most projects, a short call plus written updates on WhatsApp is all that is needed.",
      },
      {
        q: "How quickly can you launch my site?",
        a: "A typical business website takes about one to three weeks once we have your content and requirements. Larger or feature-rich sites take longer. We confirm the exact timeline in writing before we start work.",
      },
      {
        q: "How do you price a more complex site?",
        a: "Costs depend on page count, features and content needs, and more complex projects are quoted accordingly. Website design starts from ₹7,999. We always agree a fixed price in writing before development, so there are no surprises later.",
      },
    ],
    nearby: ["website-design-coimbatore", "website-design-kochi", "website-design-salem"],
  },
  {
    slug: "website-design-kochi",
    city: "Kochi",
    region: "Kerala",
    title: "Website Design in Kochi | Zyra Digitals",
    metaDescription:
      "Coimbatore-based Zyra Digitals designs websites for Kochi tourism, trade and service businesses. Work delivered online. Free quote within 1 hour.",
    h1: "Website Design in Kochi for Tourism and Service Brands",
    tagline: "Websites for Kochi tourism, trade and service brands.",
    intro: [
      "Kochi blends trade, tourism and technology. The port and backwaters support spice and seafood exporters, houseboat and homestay operators, travel companies and ayurveda wellness centres, while a growing startup scene and a steady flow of restaurants and cafes serve both residents and visitors. Many of these businesses depend on people finding them online before they book or enquire. That makes a fast, welcoming website with clear information, good photos and a simple enquiry form genuinely valuable here.",
      "Zyra Digitals serves Kochi businesses remotely from our Coimbatore base. We handle everything online: you share your requirements over WhatsApp and video calls, we show designs as live previews, and we keep the timeline and price fixed in writing. Questions are answered within one hour, and revisions are handled through the same simple channels. It is a straightforward process for owners who prefer to deal with a team by message and call rather than in person.",
    ],
    localFocus: [
      "Tourism and homestay operators",
      "Ayurveda and wellness centres",
      "Spice and seafood exporters",
      "Restaurants and cafes",
      "Startups and small businesses",
      "Travel and backwater cruises",
    ],
    faqs: [
      {
        q: "Can you serve Kochi businesses from Coimbatore?",
        a: "Yes. We are based in Coimbatore and work with Kochi businesses entirely online. Projects are managed over WhatsApp, email and video calls, with designs shared as live preview links. You get the same process whether you are in Kerala or anywhere else.",
      },
      {
        q: "Do you build websites for tourism and hospitality businesses?",
        a: "We can build websites for homestays, travel operators, wellness centres and similar businesses, focused on clear information, good photos and simple booking or enquiry options. We plan the pages around how guests usually search and what they need to decide. The exact features are agreed with you before development.",
      },
      {
        q: "How long does the project take?",
        a: "A standard website is usually delivered within one to three weeks after your content is ready. More detailed sites with many pages take longer. We confirm a realistic schedule in writing at the start.",
      },
      {
        q: "What factors affect the price?",
        a: "The price depends on the number of pages, the features required, and whether we prepare content and images. Website design starts from ₹7,999, and SEO services start from ₹2,999. You receive a fixed quote before work begins.",
      },
    ],
    nearby: ["website-design-coimbatore", "website-design-chennai", "website-design-salem"],
  },
];

export const getLocationPage = (slug?: string) => LOCATION_PAGES.find((l) => l.slug === slug);
