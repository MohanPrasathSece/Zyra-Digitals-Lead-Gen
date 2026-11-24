import nodemailer from "nodemailer";

export const handler = async (event) => {
  // CORS Headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ ok: false, error: "Method Not Allowed" }),
    };
  }

  let body = {};
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    body = {};
  }

  const { name, phone, email, message } = body;
  const timestamp = new Date().toISOString();

  if (!name || !phone || !email || !message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        ok: false,
        error: "Missing required fields. Please fill in all inputs.",
      }),
    };
  }

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
  });

  try {
    await transporter.verify();

    const adminMailOptions = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      replyTo: email,
      subject: `🚨 New Website Lead: ${name} (${phone})`,
      text: `NEW LEAD RECEIVED ON ZYRA DIGITALS\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nProject Details:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #1e3a8a;">🚀 New Website Lead Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}">${phone}</a></p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p><strong>Project Requirements:</strong></p>
          <p style="white-space: pre-line; background: #f8fafc; padding: 12px; border-radius: 6px;">${message}</p>
        </div>
      `,
    };

    const customerMailOptions = {
      to: email,
      from: FROM_EMAIL,
      subject: `Thank you for contacting Zyra Digitals! We received your enquiry`,
      text: `Hi ${name},\n\nThank you for reaching out to Zyra Digitals! We have received your enquiry and will reply within 1 hour.\n\nSummary:\n${message}`,
    };

    const [adminResult, customerResult] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        messageId: adminResult.messageId,
        message: "Lead processed and emails dispatched successfully.",
        adminRecipient: ADMIN_EMAIL,
        customerRecipient: email,
        timestamp,
        steps: [
          "1. Validated incoming lead inputs",
          "2. Connected to SMTP host via SSL/TLS",
          "3. Verified SMTP authentication",
          `4. Dispatched admin notification to ${ADMIN_EMAIL}`,
          `5. Dispatched confirmation to ${email}`,
        ],
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        ok: false,
        error: "SMTP delivery encountered an issue.",
        details: err.message,
      }),
    };
  }
};
