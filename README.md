# Zyra Digitals Lead Gen

Marketing website for Zyra Digitals, a web design, SEO and branding agency based in Coimbatore, India.

## Stack

- React 18, TypeScript and Vite
- Tailwind CSS and shadcn/ui
- React Router for page routing
- Express for server-rendered SEO metadata and contact form handling

## Run Locally

```bash
npm install
npm run dev
```

The Vite frontend runs on port 8080. The Express server starts on port 6000 and uses the next available port if needed.

## Useful Commands

```bash
npm run build
npx tsc --noEmit
npm run lint
npm run test
```

## Features

- Responsive service, industry and location pages
- Search metadata and sitemap generation
- Contact form and Calendly scheduling
- Optimized page banners and motion-free content

## Contact Form Email

The contact API can send enquiry notifications and customer acknowledgements when SMTP is configured. Add the required SMTP settings to a local `.env` file; never commit credentials.

```text
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
ADMIN_EMAIL=
FROM_EMAIL=
```

Build output is written to `dist/`. Environment files and build output are excluded by `.gitignore`.
