# 19 — Sync with the reference deployment's latest procedures

**Status:** done

The reference repo (../oimlsmart/rag) advanced on 2026-09-14/15; the
site is updated to match, per its docs (sota-mechanisms §7b,
spec-pipeline stage 16 + the notes channel, how-it-works.mdx,
techniquesData, CLAUDE.md):

1. **Citation graph traversal** — a new feature in the grounded
   answering family: citations extracted from each edition's
   bibliography become graph edges beside the publication registry
   (~300 across the reference corpus); citation-shaped questions get
   the per-edition cited list as structured data, grounded verbatim by
   the retrieved bibliography passages.
2. **How it works** — the terminology/bibliographic binding pass gains
   the citation graph; the Retrieval stage gains the citation-graph
   lane; the Gates section gains the CI-deploy smoke probe; the
   Platform section gains the HTTP API and the MCP server for agents.
3. **Data** — the Relaton inventory row and adoption profile mention
   the citation graph; the package path's ingest step includes the
   `graph` subcommand; the deployments stats gain the citation-edge
   count.
4. **verify.mjs** — asserts the citation-graph feature renders.

## Acceptance

check/build green; verify suite passes; deployed and confirmed live.
