import type { APIRoute } from 'astro';

// Sitemap para Google: se genera en cada compilación con la fecha del día como
// <lastmod>, así Google sabe que hubo cambios cada vez que se publica.
export const GET: APIRoute = ({ site }) => {
	const lastmod = new Date().toISOString().slice(0, 10);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${new URL('/', site)}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>1.0</priority>
	</url>
</urlset>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
