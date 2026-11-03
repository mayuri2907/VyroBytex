// Vercel Serverless Function: POST /api/enquiry
// Handles visitor lead notifications with validation, rate limiting, and Resend email delivery.

interface EnquiryRequestBody {
  fullName?: string;
  mobile?: string;
  email?: string;
  service?: string;
  currentPage?: string;
  timestamp?: string;
  hp_company_website?: string; // Honeypot field for bot spam prevention
}

// In-memory rate limiting store (maps IP to timestamp array)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Allowed services per Master Prompt 8 specifications
const ALLOWED_SERVICES = [
  'Website Development',
  'E-commerce Solutions',
  'Software Development',
  'AI Solutions',
  'Other',
];

function sanitizeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const activeTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  activeTimestamps.push(now);
  rateLimitMap.set(ip, activeTimestamps);
  return true;
}

export default async function handler(req: any, res: any) {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Only POST is accepted.',
    });
  }

  // Parse Body (handle both Vercel pre-parsed body and raw stream in Node/dev middleware)
  let body: EnquiryRequestBody;
  try {
    if (typeof req.body === 'object' && req.body !== null) {
      body = req.body;
    } else if (typeof req.body === 'string') {
      body = JSON.parse(req.body);
    } else {
      const chunks: Buffer[] = [];
      for await (const chunk of req) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
      }
      const raw = Buffer.concat(chunks).toString('utf-8');
      body = raw ? JSON.parse(raw) : {};
    }
  } catch {
    return res.status(400).json({
      success: false,
      error: 'Invalid JSON request payload.',
    });
  }

  // 1. Honeypot check (Spam protection)
  if (body.hp_company_website && body.hp_company_website.trim().length > 0) {
    // Silently succeed to fool bots without sending email
    return res.status(200).json({
      success: true,
      message: 'Enquiry received successfully.',
    });
  }

  // 2. Rate Limiting Check
  const clientIp =
    (req.headers?.['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    '127.0.0.1';

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a few minutes before submitting again.',
    });
  }

  // 3. Strict Server-Side Field Validation
  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const mobile = typeof body.mobile === 'string' ? body.mobile.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const currentPage = typeof body.currentPage === 'string' ? body.currentPage.trim() : 'Unknown';
  const timestamp = typeof body.timestamp === 'string' ? body.timestamp.trim() : new Date().toISOString();

  // Full Name: Required, 2-100 characters
  if (!fullName || fullName.length < 2 || fullName.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid full name (2–100 characters).',
      field: 'fullName',
    });
  }

  // Mobile: Required, international + Indian format (7 to 20 chars)
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,16}$/;
  if (!mobile || !phoneRegex.test(mobile)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid phone number (e.g. +91 98765 43210 or your country code).',
      field: 'mobile',
    });
  }

  // Email: Required, standard format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email.length > 120 || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
      field: 'email',
    });
  }

  // Service: Must match allowed list
  if (!service || !ALLOWED_SERVICES.includes(service)) {
    return res.status(400).json({
      success: false,
      error: 'Please select a valid service from the options.',
      field: 'service',
    });
  }

  // 4. Clean Sanitization for HTML email output
  const safeName = sanitizeHtml(fullName);
  const safeMobile = sanitizeHtml(mobile);
  const safeEmail = sanitizeHtml(email);
  const safeService = sanitizeHtml(service);
  const safePage = sanitizeHtml(currentPage);
  const safeTime = sanitizeHtml(timestamp);

  // Email Plain Text Body
  const plainTextBody = `
NEW WEBSITE ENQUIRY

Visitor Details:
Full Name: ${fullName}
Mobile Number: ${mobile}
Email Address: ${email}
Interested Service: ${service}

VISITOR INFORMATION
Current Page: ${currentPage}
Submission Time: ${timestamp}
`.trim();

  // Professional HTML Body
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Website Enquiry — Vyrobytex</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8F7F4; margin: 0; padding: 24px; color: #101010;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E5E2DC; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
    <!-- Header -->
    <tr>
      <td style="background-color: #101010; padding: 24px 32px; border-bottom: 3px solid #D53607;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; color: #FFFFFF;">
          VYROBYTEX<span style="color: #D53607;">.</span>
        </h1>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #E6D5BD; letter-spacing: 0.08em; text-transform: uppercase;">
          New Website Lead Notification
        </p>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 32px;">
        <h2 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #D53607;">
          Visitor Details
        </h2>

        <table width="100%" border="0" cellspacing="0" cellpadding="8" style="font-size: 14px; margin-bottom: 28px;">
          <tr style="border-bottom: 1px solid #F0EEE9;">
            <td width="35%" style="color: #666666; font-weight: 600; padding: 10px 0;">Full Name:</td>
            <td style="color: #101010; font-weight: 700; padding: 10px 0;">${safeName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F0EEE9;">
            <td style="color: #666666; font-weight: 600; padding: 10px 0;">Mobile Number:</td>
            <td style="color: #101010; font-weight: 700; padding: 10px 0;"><a href="tel:${safeMobile}" style="color: #D53607; text-decoration: none;">${safeMobile}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #F0EEE9;">
            <td style="color: #666666; font-weight: 600; padding: 10px 0;">Email Address:</td>
            <td style="color: #101010; font-weight: 700; padding: 10px 0;"><a href="mailto:${safeEmail}" style="color: #D53607; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="color: #666666; font-weight: 600; padding: 10px 0;">Interested Service:</td>
            <td style="color: #101010; font-weight: 700; padding: 10px 0;"><span style="background-color: #F8F7F4; border: 1px solid #E5E2DC; padding: 4px 10px; border-radius: 6px; font-size: 13px;">${safeService}</span></td>
          </tr>
        </table>

        <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #101010;">
          Visitor Context
        </h2>

        <table width="100%" border="0" cellspacing="0" cellpadding="6" style="font-size: 12px; background-color: #F8F7F4; border-radius: 8px; padding: 12px;">
          <tr>
            <td width="30%" style="color: #777777;">Current Page:</td>
            <td style="color: #333333; word-break: break-all;">${safePage}</td>
          </tr>
          <tr>
            <td style="color: #777777;">Submission Time:</td>
            <td style="color: #333333;">${safeTime}</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #F8F7F4; padding: 16px 32px; border-top: 1px solid #E5E2DC; font-size: 11px; color: #888888; text-align: center;">
        Vyrobytex Automated Lead System · Confidential Business Communication
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  // 5. Email Dispatch via Resend Provider
  const resendApiKey = process.env.RESEND_API_KEY;
  const leadRecipient = process.env.LEAD_NOTIFICATION_EMAIL || 'chaudharynax27@gmail.com';
  const emailFrom = process.env.EMAIL_FROM || 'Vyrobytex Leads <onboarding@resend.dev>';

  if (!resendApiKey) {
    // Documented Provider Status: Credentials missing
    console.warn(
      `[Vyrobytex Lead Capture] Email not sent: RESEND_API_KEY environment variable is not configured. Lead recorded in console: Full Name: "${fullName}", Mobile: "${mobile}", Email: "${email}", Service: "${service}"`
    );

    return res.status(503).json({
      success: false,
      code: 'CONFIG_REQUIRED',
      error:
        'Email service configuration pending. Please configure RESEND_API_KEY in your Vercel project environment variables.',
      leadSummary: {
        fullName,
        service,
      },
    });
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [leadRecipient],
        reply_to: email,
        subject: 'New Website Enquiry — Vyrobytex',
        text: plainTextBody,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('[Vyrobytex Lead Capture] Resend API error:', resendResponse.status, errorText);

      return res.status(502).json({
        success: false,
        error:
          'Failed to send lead email via provider. Please verify your RESEND_API_KEY and verified domain sender in Resend.',
      });
    }

    const data = await resendResponse.json();
    return res.status(200).json({
      success: true,
      message: 'Enquiry received and notification sent.',
      id: data?.id,
    });
  } catch (err: any) {
    console.error('[Vyrobytex Lead Capture] Unexpected server error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while sending your enquiry. Please try again.',
    });
  }
}
