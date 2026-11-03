// Vercel Serverless Function: POST /api/indexnow
// Server-side IndexNow submission protocol for search engines (Bing, Yandex, etc.)

export const DEFAULT_HOST = 'vyro-bytex.vercel.app';
export const DEFAULT_INDEXNOW_KEY = '58b1e8e4a44c8a0cfe1600c4adaa19bf';

export const CANONICAL_URLS = [
  'https://vyro-bytex.vercel.app/',
  'https://vyro-bytex.vercel.app/services',
  'https://vyro-bytex.vercel.app/work',
  'https://vyro-bytex.vercel.app/work/aura-studio',
  'https://vyro-bytex.vercel.app/work/nexus-core',
  'https://vyro-bytex.vercel.app/work/kroma-ai',
  'https://vyro-bytex.vercel.app/about',
  'https://vyro-bytex.vercel.app/contact',
];

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
          // ignore text error
        }

        return {
          endpoint,
          status,
          ok: status === 200 || status === 202,
          response: responseText || (status === 200 ? 'OK' : status === 202 ? 'Accepted' : 'Response code ' + status),
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

  // Optional Secret Protection: If INDEXNOW_SECRET is configured in Vercel env, require it
  const serverSecret = process.env.INDEXNOW_SECRET;
  if (serverSecret) {
    const authHeader = req.headers['authorization'];
    const querySecret = req.query?.secret;
    const providedSecret = authHeader?.replace('Bearer ', '') || querySecret;

    if (providedSecret !== serverSecret) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized. Invalid or missing secret token.',
      });
    }
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      service: 'Vyrobytex IndexNow Notifier',
      status: 'Ready',
      host: DEFAULT_HOST,
      keyLocation: `https://${DEFAULT_HOST}/${DEFAULT_INDEXNOW_KEY}.txt`,
      monitoredUrlsCount: CANONICAL_URLS.length,
      canonicalUrls: CANONICAL_URLS,
      instructions: 'Send a POST request to this endpoint to submit URLs to IndexNow search engines.',
    });
  }

  if (req.method === 'POST') {
    try {
      const customUrls = Array.isArray(req.body?.urls) ? req.body.urls : undefined;
      const urlsToSubmit = customUrls && customUrls.length > 0 ? customUrls : CANONICAL_URLS;

      // Filter and validate URLs belong to host
      const validUrls = urlsToSubmit.filter((url: string) => {
        try {
          const parsed = new URL(url);
          return parsed.hostname === DEFAULT_HOST || parsed.hostname.endsWith('.vercel.app');
        } catch {
          return false;
        }
      });

      if (validUrls.length === 0) {
        return res.status(400).json({
          success: false,
          error: 'No valid URLs matching canonical host were provided.',
        });
      }

      const key = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
      const submission = await submitToIndexNow(validUrls, DEFAULT_HOST, key);

      return res.status(200).json({
        success: true,
        submittedUrlsCount: validUrls.length,
        submittedUrls: validUrls,
        submissionDetails: submission,
      });
    } catch (err: any) {
      return res.status(500).json({
        success: false,
        error: err.message || 'Internal server error while submitting to IndexNow',
      });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
