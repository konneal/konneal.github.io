# 18 — Repo docs and verification tooling

**Status:** done

Three gaps after 17: the site repo has no CLAUDE.md of its own (the
binding copy and IA rules live only in agent memory); README.md still
describes the first five-page structure; the Playwright verification
suite lives in /tmp and was lost to cleanup.

## Work

1. `CLAUDE.md` (new, in this repo) — the binding rules: product
   framing, copy voice, headings, type system, IA of record, deploy
   flow, verification. TODO.impl is the plan of record;
   branding (../branding) is the brand authority.
2. `README.md` — refreshed page list (nine pages + 404), conventions,
   commands, deploy.
3. `scripts/verify.mjs` — the Playwright suite, committed; run with
   `npm run verify` against `astro preview` (uses the engine repo's
   Playwright install; documented in the script header).

## Acceptance

`npm run verify` passes against a fresh build; README and CLAUDE.md
committed; deploy green (content pages unchanged).
