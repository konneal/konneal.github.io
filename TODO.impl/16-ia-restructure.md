# 16 — IA restructure: no eyebrows, flat nav, complete sentences

**Status:** done

User direction (2026-09-14): the eyebrow pattern is AI-slop — drop it
entirely; fully restructure the IA so it makes sense; no fragmented
sentences anywhere.

## Structure of record

- **Nav (flat, no dropdowns):** Features · How it works · Use cases ·
  Audiences · Deployments · About — Get started stays a button,
  ai.oimlsmart.org stays the mono link. Annealment remains a deep page
  (linked from How it works, Features and the footer).
- **Page jobs (one each):** Home — what Konneal is. Features — the
  capability catalog. How it works — assets, passes, gates, platform.
  Use cases — the jobs, with a real example question each. Audiences —
  who it is for. Deployments — the reference deployment and
  white-label. Get started — adoption profiles, packages, engagement,
  contact. About — company, name, lineage, principles. Annealment —
  the methodology.
- **Eyebrows removed everywhere**: the `.eyebrow` / `.tick` pattern is
  deleted from global.css, SectionHead, every page hero, night bands,
  cards and the 404. Sections begin with the H2.
- **Headings**: noun phrases without terminal periods, or complete
  sentences — never punctuated fragments.
- **Fragments swept**: staircase tread details and sr-only list
  rewritten as complete sentences; every lede and body string verified
  as a complete sentence; "paid to author/create" removed (home +
  how-it-works); "Pricing is by engagement" removed from get-started.
- **Heroes**: each page opens with H1 + lede (+ CTAs where action
  applies), no eyebrow layer. Get-started hero states the two ways to
  run Konneal (managed by Ribose; self-assembled from the packages).

## Acceptance

grep: no `eyebrow`, no `class="tick"`, no `paid`, no `Pricing is`;
headings carry no terminal periods unless full sentences; check/build
green; Playwright suite (flat-nav variant) passes; deployed and
verified live.
