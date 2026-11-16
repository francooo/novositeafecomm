// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio canônico do site. Ajuste via variável SITE_URL no painel da Vercel/Netlify
// caso o domínio final seja a variante com "www".
const SITE_URL = process.env.SITE_URL ?? 'https://afecomm.com.br';

// Páginas que não devem entrar no sitemap (devem também usar `noindex` no layout).
const NOINDEX = ['/404'];
const LEGAL_PAGES = ['/privacidade', '/termos', '/lgpd'];

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((p) => new URL(page).pathname.replace(/\/$/, '') === p),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/' || path === '') item.priority = 1.0;
        else if (path.startsWith('/servicos')) item.priority = 0.9;
        else if (LEGAL_PAGES.includes(path)) {
          item.priority = 0.3;
          item.changefreq = /** @type {any} */ ('yearly');
        }
        return item;
      },
    }),
  ],
});
