# 21 — Catalog completion, a11y/SEO polish, claims verification

**Status:** done

## Claims verified against the engine workspace

- `ingest.cli graph` exists (engine ingest/cli.py subcommand table) —
  the get-started package path is accurate.
- `client/`, `create-publisher/`, `ui-starter/` exist as sibling repos;
  `@konneal/engine` is at 0.1.4. No site change needed.

## Catalog completion (from the reference's public techniques)

Two documented capabilities absent from the Features catalog:

- **Standard-reference boosting** — passages carrying a citation of a
  named external standard are boosted, so the citation acts as a
  retrieval signal.
- **Research mode** — a bounded three-pass loop in which an independent
  judge names what is missing and the next pass retrieves for it.

Plus an enrichment: Edition awareness's practice gains the
edition-cover behavior (the registry supplies the active edition's
passages when only superseded ones surface).

## Accessibility and SEO

- `aria-current="page"` on the active nav link (desktop and mobile).
- JSON-LD Organization in the head (name, url, logo, Ribose as parent
  organization) — factual fields only.

## Acceptance

check/build green; verify suite (with new assertions) passes; deployed
and confirmed live.
