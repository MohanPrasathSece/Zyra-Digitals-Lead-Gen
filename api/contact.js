import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  // Parse body safely
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const { name, phone, email, message } = body ?? {};
  const timestamp = new Date().toISOString();

  console.log(`\n==================================================`);
  console.log(`[VERCEL SERVERLESS INCOMING LEAD] ${timestamp}`);
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
      error: "Missing required fields. Please fill in all required inputs.",
    });
  }

  // Fallback credentials if environment variables are not set in Vercel project dashboard
  const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
  const SMTP_PORT = process.env.SMTP_PORT || 465;
  const SMTP_SECURE = process.env.SMTP_SECURE || "true";
  const SMTP_USER = process.env.SMTP_USER || "zyradigitalsofficial@gmail.com";
  const SMTP_PASS = process.env.SMTP_PASS || "geskztdgnpdhqvbf";
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "mohanprasathofficial@gmail.com";
  const FROM_EMAIL = process.env.FROM_EMAIL || `"Zyra Digitals" <${SMTP_USER}>`;

  const isSecure = SMTP_SECURE === "true" || Number(SMTP_PORT) === 465;

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
    await transporter.verify();

    // 1. Admin Notification Email
    const adminMailOptions = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      replyTo: email,
      subject: `🚨 New Website Lead: ${name} (${phone})`,
      text: `NEW LEAD RECEIVED ON ZYRA DIGITALS\n\nName: ${name}\nPhone / WhatsApp: ${phone}\nEmail: ${email}\nTime: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST\n\nProject Details:\n${message}\n\n---\nZyra Digitals Lead Generation Platform`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
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
          <p style="font-size: 12px; color: #94a3b8; margin: 0; text-align: center;">Zyra Digitals Lead Gen Engine • Coimbatore, Tamil Nadu</p>
        </div>
      `,
    };

    // 2. Customer Confirmation Email
    const customerMailOptions = {
      to: email,
      from: FROM_EMAIL,
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

    const adminResult = await transporter.sendMail(adminMailOptions);
    const customerResult = await transporter.sendMail(customerMailOptions);

    return res.status(200).json({
      ok: true,
      messageId: adminResult.messageId,
      message: "Lead processed and emails dispatched successfully to admin and customer.",
      adminRecipient: ADMIN_EMAIL,
      customerRecipient: email,
      timestamp,
      steps: [
        "1. Validated incoming lead inputs (Name, Phone, Email, Message)",
        `2. Connected to SMTP host ${SMTP_HOST}:${SMTP_PORT} via SSL/TLS`,
        `3. Verified SMTP authentication for ${SMTP_USER}`,
        `4. Admin lead notification dispatched to ${ADMIN_EMAIL} (MessageId: ${adminResult.messageId})`,
        `5. Customer confirmation receipt dispatched to ${email} (MessageId: ${customerResult.messageId})`,
      ],
    });
  } catch (smtpError) {
    console.error(`[SMTP ERROR]`, smtpError);
    return res.status(500).json({
      ok: false,
      error: "SMTP delivery encountered an issue. Please contact us directly on WhatsApp (+91 90254 21149) or Email (zyradigitalsofficial@gmail.com).",
      details: smtpError.message,
    });
  }
}
