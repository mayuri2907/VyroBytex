#!/usr/bin/env node
/**
 * Vyrobytex — IndexNow URL Submission Script
 * Production URL: https://vyro-bytex.vercel.app/
 */

const HOST = process.env.INDEXNOW_HOST || 'vyro-bytex.vercel.app';
const KEY = process.env.INDEXNOW_KEY || '58b1e8e4a44c8a0cfe1600c4adaa19bf';
const SECRET = process.env.INDEXNOW_SECRET || 'vbx_idx_a9e8f72c3d4b1a5e6f8091247d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const CANONICAL_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/services/website-development`,
  `https://${HOST}/services/custom-software`,
  `https://${HOST}/services/ecommerce-development`,
  `https://${HOST}/services/ai-solutions`,
  `https://${HOST}/work`,
  `https://${HOST}/work/aura-studio`,
  `https://${HOST}/work/nexus-core`,
  `https://${HOST}/work/kroma-ai`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
];

// Check CLI arguments for specific URLs or --via-api flag
const args = process.argv.slice(2);
const viaApi = args.includes('--via-api');
const customArgs = args.filter((arg) => arg.startsWith('http'));
const urlsToSubmit = customArgs.length > 0 ? customArgs : CANONICAL_URLS;

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlsToSubmit,
};

console.log('---------------------------------------------------------');
console.log('Vyrobytex — Submitting URLs to IndexNow Protocol');
console.log(`Host:        ${HOST}`);
console.log(`Key:         ${KEY}`);
console.log(`KeyLocation: ${KEY_LOCATION}`);
console.log(`URLs (${urlsToSubmit.length}):`);
urlsToSubmit.forEach((u) => console.log(`  • ${u}`));
console.log('---------------------------------------------------------');

async function submitViaServerlessApi() {
  const apiEndpoint = `https://${HOST}/api/indexnow`;
  console.log(`Submitting authenticated request via Serverless API: ${apiEndpoint} ...`);
  try {
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${SECRET}`,
      },
      body: JSON.stringify({ urls: urlsToSubmit }),
    });

    const data = await res.json();
    console.log(`Serverless API Response HTTP ${res.status}:`, JSON.stringify(data, null, 2));
    return res.status === 200;
  } catch (err) {
    console.error('Failed to submit via serverless API:', err.message);
    return false;
  }
}

async function submitDirectly() {
  const endpoints = [
    'https://api.indexnow.org/IndexNow',
    'https://www.bing.com/indexnow',
  ];

  let anySuccess = false;

  for (const endpoint of endpoints) {
    try {
      console.log(`Submitting directly to: ${endpoint} ...`);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      const statusText =
        res.status === 200
          ? '200 OK — Successfully processed'
          : res.status === 202
          ? '202 Accepted — Key verification pending / queued'
          : `${res.status} — ${text || 'Response code received'}`;

      console.log(`  -> Status: ${statusText}`);
      if (res.status === 200 || res.status === 202) {
        anySuccess = true;
      }
    } catch (err) {
      console.error(`  -> Failed to submit to ${endpoint}:`, err.message);
    }
  }

  return anySuccess;
}

async function main() {
  if (viaApi) {
    const ok = await submitViaServerlessApi();
    if (ok) {
      console.log('\nServerless API IndexNow submission completed successfully.');
    } else {
      console.warn('\nServerless API submission encountered issues.');
    }
  } else {
    const ok = await submitDirectly();
    if (ok) {
      console.log('\nDirect IndexNow protocol submission completed successfully.');
    } else {
      console.warn('\nDirect IndexNow protocol submission encountered issues.');
    }
  }
}

main();
