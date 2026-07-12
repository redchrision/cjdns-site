// Copies dist/index.html into each route folder so static hosts
// serve valid HTML on deep links without special fallback config.
import { mkdirSync, copyFileSync, readFileSync } from 'node:fs';

const slugs = [...readFileSync('src/i18n.jsx', 'utf8').matchAll(/slug: '([a-z0-9-]+)'/g)]
  .map((m) => m[1]);
const routes = [...new Set(slugs)].map((s) => `projects/${s}`).concat(['mentions-legales']);

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync('dist/index.html', `dist/${route}/index.html`);
}
console.log(`SPA route copies: ${routes.join(', ')}`);
