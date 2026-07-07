import { existsSync } from 'node:fs';
const required=['index.html','bedankt.html','sitemap.xml','robots.txt','llms.txt','humans.txt','security.txt','_headers','_redirects','netlify.toml','manifest.webmanifest','schema/organization.json'];
let ok=true;
for (const f of required){ if(!existsSync(f)){ console.error(`Missing: ${f}`); ok=false; } else { console.log(`OK: ${f}`); } }
process.exit(ok?0:1);
