# Magis Consulting — Netlify SEO deployment guide

## Upload naar GitHub
1. Vervang je huidige repositorybestanden door deze mapinhoud.
2. Commit: `Enterprise SEO baseline: sitemap, robots, headers, schema, manifest`.
3. Push naar `main`.
4. Wacht tot Netlify deploy klaar is.

## Controle na deploy
Open deze URLs:
- https://www.magis.consulting/sitemap.xml
- https://www.magis.consulting/robots.txt
- https://www.magis.consulting/llms.txt
- https://www.magis.consulting/humans.txt
- https://www.magis.consulting/security.txt

## Google Search Console
Verwijder eerdere foutieve sitemapinzendingen. Dien daarna alleen dit in:

`sitemap.xml`

Niet indienen als sitemap:
- robots.txt
- llms.txt
- humans.txt
- security.txt

## GA4
De bestaande GA4 tag `G-R44LFS24L4` staat in `index.html`. Controleer in GA4 Realtime of bezoeken binnenkomen.

## Belangrijk
`bedankt.html` staat op `noindex,follow`, omdat dit een bedankpagina is. Dat is correct.
