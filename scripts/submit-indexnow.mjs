#!/usr/bin/env node
/**
 * Vyrobytex — IndexNow URL Submission Script
 * Production URL: https://vyro-bytex.vercel.app/
 */

const HOST = process.env.INDEXNOW_HOST || 'vyro-bytex.vercel.app';
const KEY = process.env.INDEXNOW_KEY || '58b1e8e4a44c8a0cfe1600c4adaa19bf';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const CANONICAL_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/work`,
  `https://${HOST}/work/aura-studio`,
  `https://${HOST}/work/nexus-core`,
  `https://${HOST}/work/kroma-ai`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
];

// CLI arguments or all canonical URLs
const customArgs = process.argv.slice(2).filter((arg) => arg.startsWith('http'));
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

const endpoints = [
  'https://api.indexnow.org/IndexNow',
  'https://www.bing.com/indexnow',
];

async function submit() {
  let anySuccess = false;

  for (const endpoint of endpoints) {
    try {
      console.log(`Submitting to: ${endpoint} ...`);
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

  if (anySuccess) {
    console.log('\nIndexNow submission completed successfully.');
  } else {
    console.warn('\nWarning: IndexNow endpoints returned non-200/202 statuses.');
  }
}

submit();
