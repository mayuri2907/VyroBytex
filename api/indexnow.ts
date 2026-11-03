// Vercel Serverless Function: POST /api/indexnow
// Hardened server-side IndexNow submission protocol for search engines (Bing, Yandex, etc.)
import crypto from 'crypto';

export const DEFAULT_HOST = 'vyro-bytex.vercel.app';
export const DEFAULT_INDEXNOW_KEY = '58b1e8e4a44c8a0cfe1600c4adaa19bf';
export const DEFAULT_INDEXNOW_SECRET = 'vbx_idx_a9e8f72c3d4b1a5e6f8091247d';

export const MAX_URLS_PER_BATCH = 100;
export const MAX_PAYLOAD_BYTES = 64 * 1024; // 64 KB

export const CANONICAL_URLS = [
  'https://vyro-bytex.vercel.app/',
  'https://vyro-bytex.vercel.app/services',
  'https://vyro-bytex.vercel.app/services/website-development',
  'https://vyro-bytex.vercel.app/services/custom-software',
  'https://vyro-bytex.vercel.app/services/ecommerce-development',
  'https://vyro-bytex.vercel.app/services/ai-solutions',
  'https://vyro-bytex.vercel.app/work',
  'https://vyro-bytex.vercel.app/work/aura-studio',
  'https://vyro-bytex.vercel.app/work/nexus-core',
  'https://vyro-bytex.vercel.app/work/kroma-ai',
  'https://vyro-bytex.vercel.app/about',
  'https://vyro-bytex.vercel.app/contact',
];

/**
 * Constant-time string equality check to prevent timing attacks.
 */
function timingSafeEqualStr(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return false;
  }
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) {
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

export async function submitToIndexNow(
  urls: string[] = CANONICAL_URLS,
  host: string = DEFAULT_HOST,
  key: string = DEFAULT_INDEXNOW_KEY
) {
  const payload = {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls,
  };

  const endpoints = [
    'https://api.indexnow.org/IndexNow',
    'https://www.bing.com/indexnow',
  ];

  const results = await Promise.all(
    endpoints.map(async (endpoint) => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        const status = response.status;
        let responseText = '';
        try {
          responseText = await response.text();
        } catch {
          // Ignore body read errors
        }

        return {
          endpoint,
          status,
          ok: status === 200 || status === 202,
          response: responseText || (status === 200 ? 'OK' : status === 202 ? 'Accepted' : `HTTP ${status}`),
        };
      } catch (err: any) {
        return {
          endpoint,
          status: 500,
          ok: false,
          error: err.message || 'Network request failed',
        };
      }
    })
  );

  return { payload, results };
}

export default async function handler(req: any, res: any) {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Safe GET Status Inspection (Never exposes secrets or private keys)
  if (req.method === 'GET') {
    return res.status(200).json({
      service: 'Vyrobytex IndexNow Notifier API',
      status: 'Online',
      host: DEFAULT_HOST,
      authenticationRequired: true,
      authType: 'Bearer <token>',
      maxBatchSize: MAX_URLS_PER_BATCH,
      allowedHost: DEFAULT_HOST,
      canonicalUrlsCount: CANONICAL_URLS.length,
      timestamp: new Date().toISOString(),
    });
  }

  if (req.method === 'POST') {
    // 1. Enforce Mandatory Authorization via Bearer Token
    const authHeader = req.headers['authorization'];
    if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized: Missing or malformed Authorization header. Expected Bearer token.',
      });
    }

    const providedToken = authHeader.slice(7).trim();
    const serverSecret = process.env.INDEXNOW_SECRET || DEFAULT_INDEXNOW_SECRET;

    if (!timingSafeEqualStr(providedToken, serverSecret)) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized: Invalid authentication credentials.',
      });
    }

    // 2. Enforce Request Size Limits (Max 64 KB)
    const contentLength = parseInt(req.headers['content-length'] || '0', 10);
    if (contentLength > MAX_PAYLOAD_BYTES) {
      return res.status(413).json({
        success: false,
        error: `Payload Too Large: Maximum request body size is ${MAX_PAYLOAD_BYTES / 1024} KB.`,
      });
    }

    try {
      const customUrls = Array.isArray(req.body?.urls) ? req.body.urls : undefined;

      // 3. Enforce URL Count Limits (Max 100 URLs per batch)
      if (customUrls && customUrls.length > MAX_URLS_PER_BATCH) {
        return res.status(400).json({
          success: false,
          error: `Bad Request: URL count (${customUrls.length}) exceeds maximum batch limit of ${MAX_URLS_PER_BATCH}.`,
        });
      }

      const candidateUrls: string[] = customUrls && customUrls.length > 0 ? customUrls : CANONICAL_URLS;

      // 4. Strict Hostname & Protocol Validation against Canonical Domain
      const targetHost = process.env.INDEXNOW_HOST || DEFAULT_HOST;
      const validUrls: string[] = [];
      const invalidUrls: string[] = [];

      for (const item of candidateUrls) {
        if (typeof item !== 'string') continue;
        const trimmed = item.trim();
        try {
          const parsed = new URL(trimmed);
          // Only allow HTTPS protocol and exact canonical host
          if (
            parsed.protocol === 'https:' &&
            parsed.hostname.toLowerCase() === targetHost.toLowerCase()
          ) {
            validUrls.push(parsed.href);
          } else {
            invalidUrls.push(trimmed);
          }
        } catch {
          invalidUrls.push(trimmed);
        }
      }

      if (validUrls.length === 0) {
        return res.status(400).json({
          success: false,
          error: `Bad Request: No valid HTTPS URLs matching https://${targetHost} were provided.`,
          rejectedUrls: invalidUrls.slice(0, 5),
        });
      }

      // Deduplicate URLs before submission
      const deduplicatedUrls = Array.from(new Set(validUrls));

      // 5. Execute Server-Side IndexNow Submission
      const key = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
      const submission = await submitToIndexNow(deduplicatedUrls, targetHost, key);

      return res.status(200).json({
        success: true,
        submittedUrlsCount: deduplicatedUrls.length,
        submittedUrls: deduplicatedUrls,
        submissionDetails: submission.results,
      });
    } catch (err: any) {
      console.error('[IndexNow Serverless Error]:', err?.message || err);
      return res.status(500).json({
        success: false,
        error: 'Internal server error while submitting to IndexNow',
      });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
