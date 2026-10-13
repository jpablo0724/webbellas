## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Publicación (producción)

La web vive en **https://cirugiascasaderecuperacionmedellin.com**, en un hosting
**cPanel** (carpeta `/home2/cirugiascasaderw/public_html`). Es un sitio estático:
no hay Node ni base de datos en el servidor.

Flujo: los cambios se hacen en Git y se suben a GitHub (`main`); el workflow
`.github/workflows/deploy-cpanel.yml` compila y publica solo, usando
`scripts/deploy-cpanel.mjs` (API de cPanel con token). El script deja
`public_html` idéntico a `dist/`: borra del servidor lo que ya no exista en Git
(salvo `.well-known` y `cgi-bin`).

- Publicar a mano desde el PC: `npm run deploy` (lee el token de `.cpanel.env.txt`,
  que está en `.gitignore` y nunca debe subirse ni mostrarse).
- Secretos de GitHub necesarios: `CPANEL_URL`, `CPANEL_USER`, `CPANEL_TOKEN`.
- `public/.htaccess` fuerza HTTPS sin www, respeta las validaciones de AutoSSL y
  redirige las URLs de la web anterior (`/ingles`, `/index.html`) a `/`.
- El sitemap se genera en `src/pages/sitemap.xml.ts` con `lastmod` del día de
  compilación; no crear `public/sitemap.xml`.
