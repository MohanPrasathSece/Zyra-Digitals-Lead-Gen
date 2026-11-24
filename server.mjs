import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs/promises";
import compression from "compression";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 1. Extreme PageSpeed Core Web Vitals Optimization (Crucial for Google SEO Ranking)
app.use(compression());

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:8082'],
  credentials: true
}));

// Set proper MIME types and aggressive caching for static assets (Achieves 100/100 Lighthouse Speed)
app.use(express.static(path.join(__dirname, "dist"), {
  maxAge: '365d',
  // Do not auto-serve index.html for "/". Letting every HTML route fall through
  // to the SPA handler below means the homepage also receives its route-specific
  // server-rendered metadata and JSON-LD (readable by non-JavaScript crawlers).
  index: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.json')) {
      res.setHeader('Content-Type', 'application/json');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Explicit manifest.json route
app.get('/manifest.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, 'dist', 'manifest.json'));
});

app.use(express.json({ limit: "200kb" }));

app.post("/api/contact", async (req, res) => {
  const { name, phone, email, message } = req.body ?? {};
  const timestamp = new Date().toISOString();

  console.log(`\n==================================================`);
  console.log(`[SMTP INCOMING LEAD] ${timestamp}`);
  console.log(`Client Name   : ${name || "(empty)"}`);
  console.log(`Client Email  : ${email || "(empty)"}`);
  console.log(`Client Phone  : ${phone || "(empty)"}`);
  console.log(`Message Details:`);
  console.log(message || "(empty)");
  console.log(`==================================================`);

  if (!name || !phone || !email || !message) {
    console.error(`[SMTP ERROR] Validation failed: Missing required fields.`);
    return res.status(400).json({
      ok: false,
      error: "Missing required fields. Please fill in all required inputs."
    });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    ADMIN_EMAIL,
    FROM_EMAIL,
  } = process.env;

  const adminRecipient = ADMIN_EMAIL || "zyradigitalsofficial@gmail.com";
  const fromAddress = FROM_EMAIL || (SMTP_USER ? `Zyra Digitals <${SMTP_USER}>` : "Zyra Digitals <zyradigitalsofficial@gmail.com>");

  // Check if SMTP is configured
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.warn(`[SMTP WARN] SMTP credentials are not configured in environment (.env).`);
    console.log(`[SMTP SIMULATION] Submission logged locally. Both Admin & Customer emails were simulated successfully.`);
    return res.json({
      ok: true,
      simulated: true,
      message: "Lead received and logged in server terminal (SMTP credentials not yet supplied in .env)."
    });
  }

  const isSecure = SMTP_SECURE === "true" || Number(SMTP_PORT) === 465;

  console.log(`[SMTP CONFIG] Connecting to host: ${SMTP_HOST}:${SMTP_PORT} (secure: ${isSecure}) as ${SMTP_USER}`);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: isSecure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
  });

  try {
    // Verify SMTP connection
    await transporter.verify();
    console.log(`[SMTP STATUS] Connection verified successfully with ${SMTP_HOST}.`);

    // 1. Prepare and send Admin notification email
    const adminMailOptions = {
      to: adminRecipient,
      from: fromAddress,
      replyTo: email,
      subject: `🚨 New Website Lead: ${name} (${phone})`,
      text: `NEW LEAD RECEIVED ON ZYRA DIGITALS\n\nName: ${name}\nPhone / WhatsApp: ${phone}\nEmail: ${email}\nTime: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST\n\nProject Details:\n${message}\n\n---\nZyra Digitals Lead Generation Platform`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; rounded: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #1e3a8a; margin: 0; font-size: 20px;">🚀 New Website Lead Received</h2>
            <p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">Received at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #475569; width: 140px; font-weight: bold;">Client Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #475569; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #2563eb; text-decoration: none;">${phone} (Chat on WhatsApp)</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #475569; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 16px; border-radius: 4px; margin-bottom: 24px;">
            <p style="margin: 0 0 6px 0; font-weight: bold; color: #1e293b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Project Requirements:</p>
            <p style="margin: 0; color: #334155; white-space: pre-line; line-height: 1.6; font-size: 14px;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin: 0; text-align: center;">Zyra Digitals Lead Gen Engine • Malumichampatti, Coimbatore</p>
        </div>
      `,
    };

    // 2. Prepare and send Customer confirmation / thank you email
    const customerMailOptions = {
      to: email,
      from: fromAddress,
      subject: `Thank you for contacting Zyra Digitals! We received your enquiry`,
      text: `Hi ${name},\n\nThank you for reaching out to Zyra Digitals!\n\nWe have received your enquiry and our team is already reviewing your details. We guarantee a reply within 1 hour during our working hours (8:00 AM to 12:00 AM IST) with your free website audit and project proposal.\n\nNeed immediate assistance? Feel free to message or call us anytime:\nWhatsApp: +91 90254 21149 (https://wa.me/919025421149)\nEmail: zyradigitalsofficial@gmail.com\n\nSummary of your enquiry:\n${message}\n\nBest regards,\nMohan Prasath S & The Zyra Digitals Team\nhttps://www.zyradigitals.com`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 14px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #1e40af; font-size: 24px; margin: 0 0 6px 0; font-weight: 800;">Zyra Digitals</h1>
            <p style="color: #64748b; font-size: 14px; margin: 0;">Website Design, SEO &amp; Branding Agency</p>
          </div>

          <div style="background-color: #eff6ff; border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
            <h2 style="color: #1e3a8a; font-size: 18px; margin: 0 0 8px 0;">Thank You for Reaching Out, ${name}!</h2>
            <p style="color: #3b82f6; font-size: 14px; font-weight: 600; margin: 0;">We have received your project details and are preparing your free audit.</p>
          </div>

          <p style="color: #334155; font-size: 15px; line-height: 1.6; margin-bottom: 16px;">
            Our team is reviewing your requirements. We guarantee a response <strong>within 1 hour</strong> during our working hours (<strong>8:00 AM to 12:00 AM IST</strong>, 7 days a week).
          </p>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #475569; font-size: 13px; text-transform: uppercase;">Your Enquiry Summary:</p>
            <p style="margin: 0; color: #1e293b; font-size: 14px; white-space: pre-line; line-height: 1.5;">${message}</p>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-bottom: 20px; text-align: center;">
            <p style="color: #475569; font-size: 14px; margin: 0 0 12px 0;">Need immediate assistance or want to talk now?</p>
            <a href="https://wa.me/919025421149?text=${encodeURIComponent("Hi Zyra Digitals, I just submitted an enquiry on your website.")}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: bold; padding: 10px 20px; border-radius: 8px; font-size: 14px; margin-right: 8px;">
              Chat on WhatsApp (+91 90254 21149)
            </a>
          </div>

          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin: 0; border-top: 1px solid #f1f5f9; padding-top: 14px;">
            Zyra Digitals • Coimbatore, Tamil Nadu, India • <a href="https://www.zyradigitals.com" style="color: #2563eb;">www.zyradigitals.com</a>
          </p>
        </div>
      `,
    };

    console.log(`[SMTP SENDING] Dispatching notification to Admin: ${adminRecipient}...`);
    const adminResult = await transporter.sendMail(adminMailOptions);
    console.log(`[SMTP SUCCESS] Admin email delivered. MessageId: ${adminResult.messageId}`);

    console.log(`[SMTP SENDING] Dispatching confirmation to Customer: ${email}...`);
    const customerResult = await transporter.sendMail(customerMailOptions);
    console.log(`[SMTP SUCCESS] Customer email delivered. MessageId: ${customerResult.messageId}`);

    return res.json({
      ok: true,
      messageId: adminResult.messageId,
      message: "Lead processed and emails dispatched successfully to admin and customer."
    });
  } catch (smtpError) {
    console.error(`\n❌ [SMTP ERROR OCCURRED]`);
    console.error(`Error Code    : ${smtpError.code || "N/A"}`);
    console.error(`Error Message : ${smtpError.message}`);
    console.error(`Full Stack Trace:`);
    console.error(smtpError);
    console.error(`==================================================\n`);

    return res.status(500).json({
      ok: false,
      error: "SMTP delivery encountered an issue. Please contact us directly on WhatsApp (+91 90254 21149) or Email (zyradigitalsofficial@gmail.com).",
      details: smtpError.message,
    });
  }
});

const BASE_URL = "https://www.zyradigitals.com";
const OG_IMAGE_PATHS = {
  website: '/og/web-design.jpg',
  seo: '/og/seo.jpg',
  blog: '/og/blog.jpg',
  work: '/og/work.jpg',
};

function getOgImageForRoute(route) {
  if (route.startsWith('/blogs')) return OG_IMAGE_PATHS.blog;
  if (
    route === '/seo' ||
    route === '/local-seo' ||
    route === '/google-business-profile-optimisation'
  ) {
    return OG_IMAGE_PATHS.seo;
  }
  if (
    route === '/about' ||
    route === '/our-work' ||
    route === '/services' ||
    route === '/industries' ||
    route.startsWith('/industries/')
  ) {
    return OG_IMAGE_PATHS.work;
  }
  if (['/privacy-policy', '/terms-of-use', '/accessibility'].includes(route)) {
    return '/zyra-digitals-logo.jpg';
  }
  return OG_IMAGE_PATHS.website;
}

// Backend SEO Setup
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(
`User-agent: *
Allow: /

# Search and answer-engine crawlers explicitly allowed (discoverability).
# Training crawlers such as GPTBot / CCBot are intentionally NOT listed here,
# so their access remains governed by "User-agent: *" above.

User-agent: Googlebot
Allow: /
User-agent: Googlebot-Image
Allow: /
User-agent: Bingbot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`
  );
});

// Blog articles. Titles, descriptions, dates and images mirror src/lib/blog.ts.
const BLOG_POSTS = [
  {
    slug: 'website-design-cost-coimbatore-2026',
    title: 'How Much Does a Website Cost in Coimbatore in 2026? A Complete Business Guide',
    seoTitle: 'Website Design Cost in Coimbatore (2026 Price Guide)',
    desc: 'What does a website really cost in Coimbatore in 2026? See typical price ranges, what drives the cost, domain and hosting fees, and the questions to ask before you hire a website designer.',
    date: '2026-11-24',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=flat%20illustration%20of%20a%20website%20cost%20estimator%20dashboard%20with%20Indian%20rupee%20symbol%2C%20website%20wireframe%2C%20bar%20chart%2C%20clean%20blue%20and%20white%20palette%2C%20professional%20editorial%20blog%20header%2C%20no%20text&image_size=landscape_16_9',
  },
  {
    slug: 'local-seo-coimbatore-2026',
    title: 'Local SEO in 2026: How Coimbatore Businesses Can Get More Customers from Google',
    seoTitle: 'Local SEO in Coimbatore: Get More Customers from Google (2026)',
    desc: 'A practical 2026 guide to local SEO for Coimbatore businesses - how local search works, Google Business Profile optimisation, local keywords, reviews, citations and how to measure results.',
    date: '2026-11-24',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=flat%20illustration%20of%20a%20small%20business%20storefront%20on%20a%20map%20with%20a%20location%20pin%20and%20local%20search%20result%20cards%2C%20clean%20blue%20and%20white%20palette%2C%20professional%20editorial%20blog%20header%2C%20no%20text&image_size=landscape_16_9',
  },
  {
    slug: 'seo-vs-aeo-vs-geo-2026',
    title: 'SEO vs AEO vs GEO: How Businesses Can Get Discovered on Google and AI Search in 2026',
    seoTitle: 'SEO vs AEO vs GEO: Getting Found on Google and AI Search',
    desc: 'SEO, AEO and GEO explained in plain language for business owners. Learn how Google AI Overviews, ChatGPT Search and Perplexity find information, and the realistic steps that improve your visibility.',
    date: '2026-11-24',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=flat%20illustration%20comparing%20three%20panels%3A%20search%20result%20list%2C%20a%20featured%20answer%20box%2C%20and%20an%20AI%20chat%20assistant%20answer%2C%20clean%20blue%20and%20white%20palette%2C%20professional%20editorial%20blog%20header%2C%20no%20text&image_size=landscape_16_9',
  },
];

// FAQ content. Mirrors src/components/HomeFAQ.tsx so that answer-engine
// crawlers, which do not execute JavaScript, still see the FAQ markup.
// Keep in sync with src/components/HomeFAQ.tsx.
const GENERAL_FAQS = [
  { q: 'How much does a business website cost?', a: 'Website pricing depends on the number of pages, features and requirements. Contact us for a quote.' },
  { q: 'Do you provide SEO services?', a: 'Yes. We provide SEO services to help businesses improve their Google visibility and attract relevant visitors.' },
  { q: 'How long does website development take?', a: 'It depends on the project size and features. We will share an estimated timeline before starting.' },
  { q: 'Do you work with businesses outside Coimbatore?', a: 'Yes. We work with clients across India and internationally through online communication.' },
  { q: 'Can I contact you for both website design and SEO?', a: 'Yes. We provide website design, SEO and branding services.' },
];

const SERVICE_FAQS = [
  { q: 'Do you build responsive, mobile-friendly websites?', a: 'Always. We design mobile-first, because most of your visitors will browse on a phone. Every site we deliver is fast, responsive and tested across mobile, tablet and desktop.' },
  { q: 'How long until I see results from SEO?', a: 'SEO timing varies with your website, competition and target searches. We do not promise a ranking date; we report progress and adjust the work regularly.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We can modernise your current site, improve its speed and conversion rate, or build a completely new one - while keeping the parts that already work well.' },
  { q: 'Do you provide branding and logo design?', a: 'We do. From logos and colour systems to brand guidelines and social media assets, we create a consistent identity that makes your business look credible and memorable.' },
];

// Published service definitions for the two primary service pages. Prices mirror
// the packages shown on the pages themselves - nothing here is invented.
const SERVICE_DEFS = {
  '/web-design': {
    name: 'Website Design & Development',
    description:
      'Professional website design and development for businesses in Coimbatore and across India, including business websites, e-commerce stores and lead-generation websites.',
    serviceType: 'Website design and development',
    offers: [
      { name: 'Portfolio Website', price: '7999' },
      { name: 'Business Website', price: '11999' },
      { name: 'E-commerce Website', price: '19999' },
    ],
    faqs: SERVICE_FAQS,
  },
  '/seo': {
    name: 'Search Engine Optimisation (SEO)',
    description:
      'SEO services for businesses in Coimbatore and across India, including local SEO, on-page SEO, technical SEO, content optimisation and monthly reporting.',
    serviceType: 'Search engine optimisation',
    offers: [
      { name: 'Starter SEO (Local SEO)', price: '2999' },
      { name: 'Growth SEO (Complete SEO)', price: '5999' },
      { name: 'Authority SEO (SEO + Lead Tracking)', price: '9999' },
    ],
    faqs: SERVICE_FAQS,
  },
};

// Service, location and industry landing pages. Titles and descriptions mirror
// src/lib/services.ts, src/lib/locations.ts and src/lib/site.ts.
// `group` drives the breadcrumb parent; `priority` feeds the XML sitemap.
const LANDING_PAGES = [
  // Hubs
  { path: '/services', name: 'Services', group: 'hub', priority: '0.9', title: 'Our Services | Web Design, SEO & Branding - Zyra Digitals', desc: 'Explore every service Zyra Digitals offers - website design, SEO, logo design, ecommerce, maintenance and more. Coimbatore based, working online across India.' },
  { path: '/locations', name: 'Locations', group: 'hub', priority: '0.8', title: 'Areas We Serve | Website Design Across Tamil Nadu & Kerala', desc: 'Zyra Digitals designs websites and runs SEO for businesses in Coimbatore, Tiruppur, Erode, Salem, Chennai and Kochi. Based in Coimbatore, working 100% online.' },

  // Service pages
  { path: '/logo-design', name: 'Logo Design', group: 'service', priority: '0.8', title: 'Logo Design in Coimbatore | Zyra Digitals', desc: 'Professional logo design in Coimbatore with original concepts, multiple file formats and full ownership of your files. Free quote within 1 hour.' },
  { path: '/ecommerce-website-design', name: 'Ecommerce Website Design', group: 'service', priority: '0.8', title: 'Ecommerce Website Design in Coimbatore | Zyra Digitals', desc: 'Online store design in Coimbatore with secure checkout, product pages and mobile-first layouts your customers can trust. Free quote within 1 hour.' },
  { path: '/website-redesign', name: 'Website Redesign', group: 'service', priority: '0.8', title: 'Website Redesign in Coimbatore | Zyra Digitals', desc: 'Website redesign in Coimbatore that keeps what works and fixes what does not, with faster pages and mobile-friendly design. Free quote within 1 hour.' },
  { path: '/landing-page-design', name: 'Landing Page Design', group: 'service', priority: '0.8', title: 'Landing Page Design in Coimbatore | Zyra Digitals', desc: 'Landing page design in Coimbatore built around one clear offer, with focused copy and a simple enquiry form. Free quote within 1 hour.' },
  { path: '/website-maintenance', name: 'Website Maintenance', group: 'service', priority: '0.8', title: 'Website Maintenance in Coimbatore | Zyra Digitals', desc: 'Website maintenance in Coimbatore covering updates, backups, security checks and small content changes. Free quote within 1 hour.' },
  { path: '/local-seo', name: 'Local SEO', group: 'service', priority: '0.8', title: 'Local SEO Services in Coimbatore | Zyra Digitals', desc: 'Local SEO in Coimbatore that helps nearby customers find your business on Google Maps and search. Honest, steady work. Free quote within 1 hour.' },
  { path: '/google-business-profile-optimisation', name: 'Google Business Profile Optimisation', group: 'service', priority: '0.8', title: 'Google Business Profile Optimisation in Coimbatore', desc: 'Google Business Profile optimisation in Coimbatore so local customers find and call you. Accurate details, complete profile. Free quote within 1 hour.' },
  { path: '/ui-ux-design', name: 'UI/UX Design', group: 'service', priority: '0.8', title: 'UI/UX Design Services in Coimbatore | Zyra Digitals', desc: 'UI/UX design in Coimbatore that makes websites and apps easy to use, with clear layouts and simple journeys. Free quote within 1 hour.' },
  { path: '/mvp-development', name: 'MVP Development', group: 'service', priority: '0.8', title: 'MVP Development for Startups | Zyra Digitals', desc: 'MVP development for startups in Coimbatore, focused on launching your core idea fast and learning from real users. Free quote within 1 hour.' },
  { path: '/website-speed-optimisation', name: 'Website Speed Optimisation', group: 'service', priority: '0.8', title: 'Website Speed Optimisation in Coimbatore | Zyra Digitals', desc: 'Website speed optimisation in Coimbatore to make your pages load faster on mobile and desktop. Measurable, careful work. Free quote within 1 hour.' },
  { path: '/wordpress-website-design', name: 'WordPress Website Design', group: 'service', priority: '0.8', title: 'WordPress Website Design in Coimbatore | Zyra Digitals', desc: 'WordPress website design in Coimbatore that you can update yourself, with a clean build and a simple editing workflow. Free quote within 1 hour.' },
  { path: '/seo-content-writing', name: 'SEO Content Writing', group: 'service', priority: '0.8', title: 'SEO Content Writing in Coimbatore | Zyra Digitals', desc: 'SEO content writing in Coimbatore for pages and blogs that read well and answer real questions your customers search for. Free quote within 1 hour.' },

  // Location pages
  { path: '/website-design-coimbatore', name: 'Coimbatore', group: 'location', priority: '0.9', title: 'Website Design in Coimbatore | Zyra Digitals', desc: 'Zyra Digitals is a Coimbatore-based agency building fast, mobile-friendly websites for local businesses. Free quote within 1 hour.' },
  { path: '/website-design-tiruppur', name: 'Tiruppur', group: 'location', priority: '0.7', title: 'Website Design in Tiruppur | Zyra Digitals', desc: 'Zyra Digitals, a Coimbatore-based agency, designs websites for Tiruppur garment and textile businesses. Work delivered online. Free quote within 1 hour.' },
  { path: '/website-design-erode', name: 'Erode', group: 'location', priority: '0.7', title: 'Website Design in Erode | Zyra Digitals', desc: 'Coimbatore-based Zyra Digitals builds websites for Erode textile and agri businesses, delivered online. Website design from ₹7,999. Free quote in 1 hour.' },
  { path: '/website-design-salem', name: 'Salem', group: 'location', priority: '0.7', title: 'Website Design in Salem | Zyra Digitals', desc: 'Zyra Digitals, based in Coimbatore, designs affordable websites for Salem businesses, delivered remotely. Website design from ₹7,999. Free quote in 1 hour.' },
  { path: '/website-design-chennai', name: 'Chennai', group: 'location', priority: '0.7', title: 'Website Design in Chennai | Zyra Digitals', desc: 'Zyra Digitals, a Coimbatore-based agency, builds fast, mobile-friendly websites for Chennai businesses. Delivered online. Free quote within 1 hour.' },
  { path: '/website-design-kochi', name: 'Kochi', group: 'location', priority: '0.7', title: 'Website Design in Kochi | Zyra Digitals', desc: 'Coimbatore-based Zyra Digitals designs websites for Kochi tourism, trade and service businesses. Work delivered online. Free quote within 1 hour.' },

  // Additional industry pages
  { path: '/industries/restaurants', name: 'Restaurants & Cafes', group: 'industry', priority: '0.6', title: 'Web Design & SEO for Restaurants & Cafes | Zyra Digitals', desc: 'Restaurant and cafe websites with online menus, table reservations and local SEO that help nearby diners find you and book.' },
  { path: '/industries/salons-spas', name: 'Salons & Spas', group: 'industry', priority: '0.6', title: 'Web Design & SEO for Salons & Spas | Zyra Digitals', desc: 'Salon and spa websites with online booking, service menus and local SEO that turn searches into booked appointments.' },
  { path: '/industries/schools', name: 'Schools & Coaching', group: 'industry', priority: '0.6', title: 'Web Design & SEO for Schools & Coaching | Zyra Digitals', desc: 'School and coaching institute websites with course pages and admission enquiry forms that help parents choose you.' },
  { path: '/industries/boutiques', name: 'Boutiques & Fashion', group: 'industry', priority: '0.6', title: 'Web Design & SEO for Boutiques & Fashion Stores | Zyra Digitals', desc: 'Boutique and fashion store websites that turn browsers into buyers, online and in store.' },
  { path: '/industries/hospitals-clinics', name: 'Hospitals & Clinics', group: 'industry', priority: '0.6', title: 'Web Design & SEO for Hospitals & Clinics | Zyra Digitals', desc: 'Hospital and clinic websites with department pages, doctor profiles and appointment enquiry forms that build patient trust.' },
  { path: '/industries/construction-companies', name: 'Construction', group: 'industry', priority: '0.6', title: 'Web Design & SEO for Construction Companies | Zyra Digitals', desc: 'Construction and contractor websites with project galleries and quote request forms that win better enquiries.' },
  { path: '/industries/travel-agencies', name: 'Travel Agencies', group: 'industry', priority: '0.6', title: 'Web Design & SEO for Travel Agencies | Zyra Digitals', desc: 'Travel agency websites with tour packages, itinerary pages and enquiry forms that turn trip research into bookings.' },
  { path: '/industries/gyms-fitness', name: 'Gyms & Fitness', group: 'industry', priority: '0.6', title: 'Web Design & SEO for Gyms & Fitness Studios | Zyra Digitals', desc: 'Gym and fitness studio websites with membership plans, class timetables and trial enquiry forms that grow sign-ups.' },
];

const LANDING_BY_PATH = Object.fromEntries(LANDING_PAGES.map((p) => [p.path, p]));
const SERVICE_STARTING_PRICES = {
  '/logo-design': '4999',
  '/ecommerce-website-design': '12999',
  '/website-redesign': '7999',
  '/landing-page-design': '7999',
  '/website-maintenance': '2499',
  '/local-seo': '2999',
  '/google-business-profile-optimisation': '1499',
  '/ui-ux-design': '7999',
  '/mvp-development': '12999',
  '/website-speed-optimisation': '7999',
  '/wordpress-website-design': '7999',
  '/seo-content-writing': '4999',
};

// Routes included in the XML sitemap (path + priority). Keep in sync with public/sitemap.xml.
const SITEMAP_ROUTES = [
  ['', '1.0'],
  ['/web-design', '0.9'],
  ['/seo', '0.9'],
  ['/about', '0.8'],
  ['/blogs', '0.8'],
  ['/our-work', '0.8'],
  ['/contact', '0.8'],
  ['/privacy-policy', '0.3'],
  ['/terms-of-use', '0.3'],
  ['/accessibility', '0.3'],
  ['/industries', '0.7'],
  ['/industries/dental-clinics', '0.7'],
  ['/industries/interior-designers', '0.7'],
  ['/industries/real-estate', '0.6'],
  ['/industries/solar-companies', '0.6'],
  ...LANDING_PAGES.map((p) => [p.path, p.priority]),
  ...BLOG_POSTS.map((p) => [`/blogs/${p.slug}`, '0.7']),
];

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  const lastmod = new Date().toISOString().slice(0, 10);

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  SITEMAP_ROUTES.forEach(([route, priority]) => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  res.send(xml);
});

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// RSS 2.0 feed for the blog. Gives feed readers and AI aggregators a clean,
// machine-readable list of the published articles.
app.get('/rss.xml', (req, res) => {
  res.type('application/rss+xml');
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const lastBuild = new Date(posts[0]?.date || Date.now()).toUTCString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n';
  xml += '  <channel>\n';
  xml += '    <title>Zyra Digitals Blog</title>\n';
  xml += `    <link>${BASE_URL}/blogs</link>\n`;
  xml += '    <description>Practical guides on website design, SEO and getting found on Google and AI search, written for businesses in Coimbatore and across India.</description>\n';
  xml += '    <language>en-in</language>\n';
  xml += `    <lastBuildDate>${lastBuild}</lastBuildDate>\n`;
  xml += `    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />\n`;

  posts.forEach((post) => {
    xml += '    <item>\n';
    xml += `      <title>${escapeXml(post.seoTitle || post.title)}</title>\n`;
    xml += `      <link>${BASE_URL}/blogs/${post.slug}</link>\n`;
    xml += `      <guid isPermaLink="true">${BASE_URL}/blogs/${post.slug}</guid>\n`;
    xml += `      <description>${escapeXml(post.desc)}</description>\n`;
    xml += `      <pubDate>${new Date(post.date).toUTCString()}</pubDate>\n`;
    xml += '    </item>\n';
  });

  xml += '  </channel>\n';
  xml += '</rss>';
  res.send(xml);
});

const SEO_MAP = {
  '/': { title: 'Zyra Digitals | Web Design, SEO & Branding Agency in Coimbatore', desc: 'Zyra Digitals is a web design, SEO and branding agency in Coimbatore. 100+ websites delivered. We build fast, high-converting websites that bring enquiries, calls and bookings. Free quote within 1 hour.' },
  '/web-design': { title: 'Website Design in Coimbatore | Web Design Company - Zyra Digitals', desc: 'Looking for professional website design in Coimbatore? Zyra Digitals builds fast, mobile-friendly websites that bring enquiries, from ₹7,999. 100+ websites delivered. Free quote within 1 hour.' },
  '/seo': { title: 'SEO Services in Coimbatore | Packages from ₹2,999 - Zyra Digitals', desc: 'SEO services from ₹2,999 per month. Three transparent plans - Starter, Growth and Authority - covering local SEO, technical SEO, content and conversion tracking. Working 100% online with clients worldwide.' },
  '/industries': { title: 'Industries We Serve | Zyra Digitals', desc: 'Web design and SEO for dental clinics, interior designers, real estate and solar companies.' },
  '/industries/dental-clinics': { title: 'Web Design & SEO for Dental Clinics | Zyra Digitals', desc: 'Patient-focused dental websites with online booking and local SEO that keep your appointment book full.' },
  '/industries/interior-designers': { title: 'Web Design & SEO for Interior Designers | Zyra Digitals', desc: 'Image-led portfolio websites that turn visitors into interior design consultation and quote requests.' },
  '/industries/real-estate': { title: 'Web Design & SEO for Real Estate | Zyra Digitals', desc: 'Property websites with smart search and strong enquiry capture that generate qualified buyers.' },
  '/industries/solar-companies': { title: 'Web Design & SEO for Solar Companies | Zyra Digitals', desc: 'High-converting solar websites with savings calculators and quote forms that generate installation leads.' },
  '/our-work': { title: 'Our Work - Web Design & SEO Portfolio | Zyra Digitals', desc: 'Browse selected website design and development projects by Zyra Digitals.' },
  '/about': { title: 'About Zyra Digitals | Website Design & SEO Agency in Coimbatore', desc: 'Meet Zyra Digitals, a Coimbatore-based website design and SEO agency founded by Mohan Prasath S. We build fast, lead-generating websites for businesses in Coimbatore, across India and worldwide.' },
  '/blogs': { title: 'Blog - Website Design & SEO Guides | Zyra Digitals', desc: 'Practical guides on website design, local SEO and getting found on Google and AI search, written for businesses in Coimbatore and across India.' },
  '/contact': { title: 'Contact Zyra Digitals | Get a Free Web Design & SEO Quote', desc: 'Get in touch with Zyra Digitals for web design, SEO and branding. Free quote within 1 hour.' },
  '/privacy-policy': { title: 'Privacy Policy | Zyra Digitals', desc: 'Learn what information Zyra Digitals collects through this website, how enquiries are used, and how to contact us about your information.' },
  '/terms-of-use': { title: 'Terms of Use | Zyra Digitals', desc: 'Terms for using the Zyra Digitals website and information about service proposals, project scope and third-party services.' },
  '/accessibility': { title: 'Accessibility | Zyra Digitals', desc: 'Zyra Digitals is working to make this website easier to use for everyone and welcomes reports about accessibility barriers.' },
};

// Register each blog article route so it is served with 200 + indexable metadata.
BLOG_POSTS.forEach((post) => {
  SEO_MAP[`/blogs/${post.slug}`] = { title: post.seoTitle, desc: post.desc };
});

// Register every service, location and industry landing page with its own
// title + description so non-JavaScript crawlers see unique metadata.
LANDING_PAGES.forEach((p) => {
  SEO_MAP[p.path] = { title: p.title, desc: p.desc };
});

// Human-readable names used to build BreadcrumbList entries for each route.
const ROUTE_NAMES = {
  '/': 'Home',
  '/web-design': 'Web Design',
  '/seo': 'SEO Services',
  '/our-work': 'Our Work',
  '/about': 'About',
  '/blogs': 'Blog',
  '/contact': 'Contact',
  '/privacy-policy': 'Privacy Policy',
  '/terms-of-use': 'Terms of Use',
  '/accessibility': 'Accessibility',
  '/industries': 'Industries',
  '/industries/dental-clinics': 'Dental Clinics',
  '/industries/interior-designers': 'Interior Designers',
  '/industries/real-estate': 'Real Estate',
  '/industries/solar-companies': 'Solar Companies',
};

BLOG_POSTS.forEach((post) => {
  ROUTE_NAMES[`/blogs/${post.slug}`] = post.title;
});

LANDING_PAGES.forEach((p) => {
  ROUTE_NAMES[p.path] = p.name;
});

const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const FOUNDER_ID = `${BASE_URL}/#founder`;

// Shared entity graph: Organization + WebSite + Founder(Person) + WebPage + BreadcrumbList.
function buildSchemaGraph(route, title, description) {
  const breadcrumbItems = [];
  if (route === '/') {
    breadcrumbItems.push({ name: 'Home', item: BASE_URL + '/' });
  } else if (route.startsWith('/industries/')) {
    breadcrumbItems.push({ name: 'Home', item: BASE_URL + '/' });
    breadcrumbItems.push({ name: 'Industries', item: BASE_URL + '/industries' });
    breadcrumbItems.push({ name: ROUTE_NAMES[route] || title, item: BASE_URL + route });
  } else if (route.startsWith('/blogs/')) {
    breadcrumbItems.push({ name: 'Home', item: BASE_URL + '/' });
    breadcrumbItems.push({ name: 'Blog', item: BASE_URL + '/blogs' });
    breadcrumbItems.push({ name: ROUTE_NAMES[route] || title, item: BASE_URL + route });
  } else if (LANDING_BY_PATH[route]?.group === 'service') {
    breadcrumbItems.push({ name: 'Home', item: BASE_URL + '/' });
    breadcrumbItems.push({ name: 'Services', item: BASE_URL + '/services' });
    breadcrumbItems.push({ name: ROUTE_NAMES[route] || title, item: BASE_URL + route });
  } else if (LANDING_BY_PATH[route]?.group === 'location') {
    breadcrumbItems.push({ name: 'Home', item: BASE_URL + '/' });
    breadcrumbItems.push({ name: 'Locations', item: BASE_URL + '/locations' });
    breadcrumbItems.push({ name: ROUTE_NAMES[route] || title, item: BASE_URL + route });
  } else {
    breadcrumbItems.push({ name: 'Home', item: BASE_URL + '/' });
    breadcrumbItems.push({ name: ROUTE_NAMES[route] || title, item: BASE_URL + route });
  }

  // Blog posts additionally get an Article node. Author/publisher point to the
  // real organisation entity - no invented authors.
  const post = BLOG_POSTS.find((p) => `/blogs/${p.slug}` === route);
  const articleNode = post
    ? [
        {
          '@type': 'Article',
          '@id': `${BASE_URL}${route}#article`,
          headline: post.title,
          description,
          image: [post.image],
          datePublished: post.date,
          dateModified: post.date,
          author: { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
          isPartOf: { '@id': WEBSITE_ID },
          mainEntityOfPage: { '@id': `${BASE_URL}${route}#webpage` },
          inLanguage: 'en',
        },
      ]
    : [];

  // Service pages additionally get a Service node (with published package
  // prices as Offer nodes) and a FAQPage node. Both are served in the raw HTML
  // so that non-JavaScript search and answer-engine crawlers can read them.
  const landingService = LANDING_BY_PATH[route];
  const service = SERVICE_DEFS[route] || (
    landingService?.group === 'service'
      ? {
          name: landingService.name,
          description: landingService.desc,
          serviceType: landingService.name,
          startingPrice: SERVICE_STARTING_PRICES[route],
          monthly: route === '/website-maintenance',
        }
      : null
  );
  const serviceNodes = service
    ? [
        {
          '@type': 'Service',
          '@id': `${BASE_URL}${route}#service`,
          name: service.name,
          description: service.description,
          serviceType: service.serviceType,
          url: `${BASE_URL}${route}`,
          provider: { '@id': ORG_ID },
          areaServed: [
            { '@type': 'City', name: 'Coimbatore' },
            { '@type': 'State', name: 'Tamil Nadu' },
            { '@type': 'Country', name: 'India' },
          ],
          offers: (service.offers || [
            {
              name: `${service.name} starting price`,
              price: service.startingPrice,
              description: `Starting price${service.monthly ? ' per month' : ''}; final pricing depends on the agreed project scope.`,
            },
          ]).map((offer) => ({
            '@type': 'Offer',
            name: offer.name,
            price: offer.price,
            priceCurrency: 'INR',
            ...(offer.description ? { description: offer.description } : {}),
            ...(service.monthly
              ? {
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: offer.price,
                    priceCurrency: 'INR',
                    unitText: 'MONTH',
                  },
                }
              : {}),
            availability: 'https://schema.org/InStock',
            url: `${BASE_URL}${route}`,
          })),
        },
        ...(service.faqs
          ? [{
              '@type': 'FAQPage',
              '@id': `${BASE_URL}${route}#faq`,
              mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            }]
          : []),
      ]
    : [];

  const homeFaqNode =
    route === '/'
      ? [
          {
            '@type': 'FAQPage',
            '@id': `${BASE_URL}/#faq`,
            mainEntity: GENERAL_FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          },
        ]
      : [];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'Organization'],
        '@id': ORG_ID,
        name: 'Zyra Digitals',
        url: BASE_URL,
        logo: { '@type': 'ImageObject', url: `${BASE_URL}/zyra-digitals-logo.svg` },
        image: `${BASE_URL}/zyra-digitals-logo.jpg`,
        priceRange: 'INR 1,499-19,999',
        email: 'zyradigitalsofficial@gmail.com',
        telephone: '+919025421149',
        description: 'Zyra Digitals is a creative digital agency based in Coimbatore, Tamil Nadu, India, offering website design and development, SEO and branding services.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Malumichampatti, Coimbatore',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        areaServed: [
          { '@type': 'City', name: 'Coimbatore' },
          { '@type': 'State', name: 'Tamil Nadu' },
          { '@type': 'Country', name: 'India' },
        ],
        founder: { '@id': FOUNDER_ID },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:30',
            closes: '19:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Services',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Website Design & Development',
              price: '7999',
              priceCurrency: 'INR',
              itemOffered: { '@type': 'Service', name: 'Website Design & Development' },
            },
            {
              '@type': 'Offer',
              name: 'Search Engine Optimisation (SEO)',
              price: '2999',
              priceCurrency: 'INR',
              description: 'Starting price per month',
              itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)' },
            },
            {
              '@type': 'Offer',
              name: 'Logo Design',
              price: '4999',
              priceCurrency: 'INR',
              itemOffered: { '@type': 'Service', name: 'Logo Design' },
            },
            {
              '@type': 'Offer',
              name: 'Google Business Profile Optimisation',
              price: '1499',
              priceCurrency: 'INR',
              itemOffered: { '@type': 'Service', name: 'Google Business Profile Optimisation' },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: BASE_URL,
        name: 'Zyra Digitals',
        description: 'Web Design, SEO & Branding Agency',
        publisher: { '@id': ORG_ID },
        inLanguage: 'en',
      },
      {
        '@type': 'Person',
        '@id': FOUNDER_ID,
        name: 'Mohan Prasath S',
        alternateName: [
          'Mohan Prasath',
          'Mohan Prasath S',
          'Mohan Prasath Coimbatore',
          'Mohan Prasath Zyra Digitals',
          'Mohan Prasath founder of Zyra Digitals',
        ],
        jobTitle: 'Founder',
        worksFor: { '@id': ORG_ID },
        url: `${BASE_URL}/about#founder`,
        description: 'Mohan Prasath S is the founder of Zyra Digitals and works directly with clients on website design, development, SEO and branding projects.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Malumichampatti, Coimbatore',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        nationality: {
          '@type': 'Country',
          name: 'India',
        },
        knowsAbout: [
          'Website design',
          'Website development',
          'Search engine optimisation',
          'Local SEO',
          'Branding and logo design',
          'Lead generation websites',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}${route}#webpage`,
        url: `${BASE_URL}${route}`,
        name: title,
        description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        inLanguage: 'en',
      },
      ...articleNode,
      ...serviceNodes,
      ...homeFaqNode,
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      },
    ],
  };
}

// SPA fallback: serve index.html for non-static routes, injecting SEO dynamically.
app.get("*", async (req, res) => {
  try {
    // Canonicalise the URL: collapse trailing slashes and casing so that /seo/ and
    // /SEO 301-redirect to the single canonical /seo (avoids duplicate-content URLs).
    const rawPath = req.path;
    const normalized = (rawPath.replace(/\/+$/, '') || '/').toLowerCase();
    if (normalized !== rawPath && Object.prototype.hasOwnProperty.call(SEO_MAP, normalized)) {
      const qIndex = req.originalUrl.indexOf('?');
      const query = qIndex === -1 ? '' : req.originalUrl.slice(qIndex);
      return res.redirect(301, normalized + query);
    }

    const indexPath = path.join(__dirname, "dist", "index.html");
    let html = await fs.readFile(indexPath, 'utf-8');

    const route = normalized;
    const isKnownRoute = Object.prototype.hasOwnProperty.call(SEO_MAP, route);
    const seo = SEO_MAP[route] || SEO_MAP['/'];

    // Blog article routes get article-specific Open Graph metadata.
    const blogPost = route.startsWith('/blogs/')
      ? BLOG_POSTS.find((p) => `/blogs/${p.slug}` === route)
      : undefined;
    const ogType = blogPost ? 'article' : 'website';
    const ogImage = blogPost
      ? blogPost.image
      : `${BASE_URL}${getOgImageForRoute(route)}`;

    const title = isKnownRoute ? seo.title : 'Page Not Found | Zyra Digitals';
    const description = isKnownRoute
      ? seo.desc
      : 'The page you are looking for could not be found. Return to the Zyra Digitals homepage for website design, SEO and branding services in Coimbatore.';
    const robots = isKnownRoute
      ? 'index, follow, max-image-preview:large'
      : 'noindex, follow';

    const jsonLd = buildSchemaGraph(route, title, description);

    // Route-specific head block. Tags carry data-rh="true" so react-helmet-async
    // replaces (rather than duplicates) them once the app hydrates on the client.
    const metaTags = `    <!-- SEO_DEFAULT_START -->
    <title>${title}</title>
    <meta data-rh="true" name="description" content="${description}">
    <meta data-rh="true" name="robots" content="${robots}">
    <link data-rh="true" rel="canonical" href="${BASE_URL}${route}" />
    <meta data-rh="true" property="og:type" content="${ogType}">
    <meta data-rh="true" property="og:site_name" content="Zyra Digitals">
    <meta data-rh="true" property="og:locale" content="en_IN">
    <meta data-rh="true" property="og:title" content="${title}">
    <meta data-rh="true" property="og:description" content="${description}">
    <meta data-rh="true" property="og:url" content="${BASE_URL}${route}">
    <meta data-rh="true" property="og:image" content="${ogImage}">
    <meta data-rh="true" name="twitter:card" content="summary_large_image">
    <meta data-rh="true" name="twitter:title" content="${title}">
    <meta data-rh="true" name="twitter:description" content="${description}">
    <meta data-rh="true" name="twitter:image" content="${ogImage}">
    <script data-rh="true" type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <!-- SEO_DEFAULT_END -->`;

    // Replace the default head block (between markers) so tags are never duplicated.
    const markerPattern = /<!-- SEO_DEFAULT_START -->[\s\S]*?<!-- SEO_DEFAULT_END -->/;
    if (markerPattern.test(html)) {
      html = html.replace(markerPattern, metaTags);
    } else {
      html = html.replace('</head>', `${metaTags}\n  </head>`);
    }

    res.status(isKnownRoute ? 200 : 404).type('html').send(html);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.status(404).send("Frontend build not found (run npm run build).");
    } else {
      console.error("Error serving index.html:", err);
      res.status(500).send("Server Error");
    }
  }
});

let port = Number(process.env.PORT) || 6000;

function startServer(p) {
  const server = app.listen(p, () => {
    console.log(`Server running on http://localhost:${p}`);
  });

  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.log(`Port ${p} is in use, trying ${p + 1}...`);
      startServer(p + 1);
    } else {
      console.error('Server error:', e);
      process.exit(1);
    }
  });
}

startServer(port);
