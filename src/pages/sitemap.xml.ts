import {
  absoluteUrl,
  content,
  serviceAlternatePaths,
  servicePagePath,
  servicePages,
} from '../data/site';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const alternateLinks = (alternatePaths: Record<string, string>) =>
  Object.entries(alternatePaths)
    .map(
      ([hreflang, path]) =>
        `<xhtml:link rel="alternate" hreflang="${escapeXml(hreflang)}" href="${escapeXml(
          absoluteUrl(path)
        )}" />`
    )
    .join('');

const urlEntry = (path: string, alternatePaths: Record<string, string>, priority: string) => `
  <url>
    <loc>${escapeXml(absoluteUrl(path))}</loc>
    ${alternateLinks(alternatePaths)}
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;

export function GET() {
  const homeAlternates = {
    en: content.en.path,
    es: content.es.path,
    'x-default': '/',
  };

  const entries = [
    urlEntry('/', homeAlternates, '0.8'),
    urlEntry(content.en.path, homeAlternates, '1.0'),
    urlEntry(content.es.path, homeAlternates, '1.0'),
    ...servicePages.map((page) =>
      urlEntry(servicePagePath(page), serviceAlternatePaths(page), '0.9')
    ),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
