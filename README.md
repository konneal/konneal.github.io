# konneal.org

The Konneal product site.

**Konneal** — knowledge annealment for standards. Konneal serves a
standards organization's publications as a question-answering service:
answers cited to the exact clause, tables and formulas rendered from
source, conformance decided by executing machine-readable rules.
Suite frame: *authored in Metanorma, modelled in Primmel, served by
Konneal*. Konneal is developed and delivered by Ribose Inc. The
reference deployment is [OIML SMART AI](https://ai.oimlsmart.org).

## Site

Nine pages, one job each:

| Page | Job |
|---|---|
| `/` | What Konneal is |
| `/features/` | The capability catalog, with powered-by asset tags |
| `/how-it-works/` | Assets, passes, gates |
| `/use-cases/` | The jobs, each with an example question; the two in-page demonstrations |
| `/audiences/` | Who Konneal is for |
| `/deployments/` | The reference deployment and white-labeling |
| `/get-started/` | Managed by Ribose, or the open-source package path |
| `/about/` | Company, name, lineage, principles |
| `/annealment/` | The methodology (off-nav deep page) |

## Development

```sh
npm install
npm run dev      # dev server
npm run build    # static build to dist/
npm run preview  # serve the build
npm run check    # astro check
npm run verify   # Playwright suite against the build (uses ../engine's Playwright)
```

Astro (static) · Vue islands · Tailwind 4 via `@tailwindcss/vite` ·
fonts self-hosted via `@fontsource` (IBM Plex Sans/Mono everywhere;
Source Serif 4 on `/annealment/` only). Copy rules, IA of record and
the plan of record live in `CLAUDE.md` and `TODO.impl/`.

Brand assets and rules live in the `branding` repo (`../branding`);
the logo files in `public/assets/` are verbatim copies of the
canonical SVGs.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds with
`withastro/action` and deploys to GitHub Pages → `public/CNAME` maps
the site to **www.konneal.org**.
