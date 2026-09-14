# 12 — Verify, commit, push, confirm deploy

**Status:** done — commit 234eb9e deployed; workflow 34809357098 green; all nine routes 200 on https://www.konneal.org (2026-09-14)

1. `npm run check` — 0 errors.
2. `npm run build` — all pages emit; sitemap.
3. Playwright against `astro preview` (production artifact):
   - all nine routes + 404: 200/404 as expected, no horizontal
     overflow at 1440 and 390;
   - fonts: Plex Sans + Plex Mono everywhere; Source Serif on
     /annealment/ only;
   - nav dropdown opens on click, closes on Escape (desktop);
   - both islands on /use-cases hydrate: playground default INVALID →
     preset VALID → input INVALID; verifier A served, B withheld;
   - asset tags render on /features and /use-cases.
4. Grep the built output: no "without it", no "OCR", OIML stats on
   /deployments/ only.
5. Commit to main (explicit paths, verified staged set, no AI
   attribution), push, watch the workflow, confirm live URLs.

## Acceptance

Deploy workflow green; https://www.konneal.org serves all nine routes;
TODO statuses updated to done.
