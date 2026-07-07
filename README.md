# Magis Consulting — Enterprise-ready Netlify SEO project

Dit project bevat een volledige technische SEO-basis voor Netlify, GitHub en Google Search Console.

## Belangrijkste bestanden

- `index.html` — geoptimaliseerde homepage met metadata, GA4 en JSON-LD
- `bedankt.html` — noindex bedankpagina
- `sitemap.xml` — enige bestand dat je in Google Search Console als sitemap indient
- `robots.txt` — verwijst naar de sitemap
- `llms.txt` — AI search context
- `schema/` — JSON-LD bronbestanden
- `_headers`, `_redirects`, `netlify.toml` — Netlify SEO/security-configuratie
- `docs/` — Search Console, GA4 en deployment handleidingen

## Search Console

Dien alleen dit in:

```text
sitemap.xml
```

Niet indienen als sitemap: `robots.txt`, `llms.txt`, `humans.txt`, `security.txt`.
