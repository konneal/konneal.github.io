# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The Konneal product site (www.konneal.org): a static Astro site that presents the product — the serving layer of the Metanorma/Primmel/Konneal suite. The plan of record for all site work is `TODO.impl/` (numbered items with honest statuses); the brand authority is the `branding` repo (`../branding`), whose README governs typefaces, colors, lockups and logo use.

## Commands

```sh
npm install
npm run dev        # dev server
npm run build      # static build to dist/
npm run preview    # serve the built site
npm run check      # astro check (type check)
npm run verify     # Playwright suite against the build (see scripts/verify.mjs)
```

`npm run verify` expects the build running (`npm run preview`) and imports Playwright from the engine repo (`../engine/node_modules/playwright`) — it does not declare Playwright as a dependency here.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` (withastro/action, actions/deploy-pages) → GitHub Pages → `public/CNAME` maps the site to www.konneal.org. This repo deliberately deploys from main. Stage by explicit path; no AI attribution in commits.

## Architecture

Astro (static output) + Vue islands + Tailwind 4 via `@tailwindcss/vite` (theme tokens in `src/styles/global.css`, no tailwind.config). Path alias `~/*` → `src/*`. All page content flows from `src/data/site.ts` (nav, assets, inventory, features, use cases, audiences, adoption, packages, stats) — copy changes happen there, not by editing pages. Fonts: IBM Plex Sans + IBM Plex Mono globally; Source Serif 4 is imported on `/annealment/` only, for that page's long-form prose. The two Vue islands (`VerdictPlayground`, `QuoteVerifier`) are deterministic in-page demonstrations and live on `/use-cases/`.

## IA of record

Flat nav: Features · How it works · Use cases · Audiences · Deployments · About, with Get started as the header button and the reference deployment (ai.oimlsmart.org) as the mono link. Annealment is a deep page off-nav, linked from Features, How it works and the footer. One job per page: Home (what Konneal is), Features (capability catalog), How it works (assets → passes → gates), Use cases (jobs, each with a real example question), Audiences (who it is for), Deployments (the reference deployment — the only page carrying its numbers), Get started (managed by Ribose vs the open-source package path), About (company, name, lineage, principles).

## Copy rules — binding

- Complete declarative sentences, documentation register. No fragmented sentences anywhere, including data strings, diagram labels and alt/sr-only text.
- No catchy phrases, no aphorisms, no antithesis compressions ("X, not Y" as rhetoric), no eyebrows or other AI-slop patterns.
- Headings are noun phrases without terminal periods, or complete sentences. H1 states the page's subject.
- Every sentence gives; none takes away. No "without X you can't Y" constructions, no transactional framing ("paid to author"), no pricing talk in body copy (commercial path: Ribose Inc.; pricing is "contact Ribose" at most).
- OIML SMART AI is evidence, framed once on Deployments; its numbers appear nowhere else. OCR never appears. Internal layer jargon is translated for readers: assets, passes, gates.
- Never invent facts, URLs, dates or capabilities. Illustrative demos are labeled as illustrative. Asset names are exactly: Metanorma, Pubid, Relaton, Glossarist, Lutaml, Primmel.
