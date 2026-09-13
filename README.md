# konneal.org

The Konneal product site.

**Konneal** — knowledge annealment for standards. The name decodes on
three levels: K = knowledge (K-onneal is knowledge annealment, the
published methodology); anneal stays legible in the spelling; and
konne(ction) — the SDO connects to its members, questions connect to
clauses, answers connect to the original document.

Suite frame: *authored in Metanorma, modeled in Primmel, served by
Konneal.* Deployments are white-labeled to each SDO — "[SDO] Answers,
powered by Konneal."

The reference deployment is [OIML SMART AI](https://ai.oimlsmart.org);
the system's own pages there (how it works, techniques, knowledge
annealment) carry the substance this site presents.

## Development

```sh
npm install
npm run dev      # dev server
npm run build    # static build to dist/
npm run preview  # serve the build
npm run check    # astro check
```

Astro 7 (static) · Vue islands · Tailwind 4 via `@tailwindcss/vite` ·
fonts self-hosted via `@fontsource` (IBM Plex Sans/Mono, Source Serif 4 —
no other typefaces, per the brand).

Brand assets and rules live in the `branding` repo (`../branding`); the
logo files in `public/assets/` are verbatim copies of the canonical SVGs.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds with
`withastro/action` and deploys to GitHub Pages → `public/CNAME` maps the
site to **www.konneal.org**.
