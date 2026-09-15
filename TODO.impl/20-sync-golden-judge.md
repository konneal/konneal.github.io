# 20 — Sync with the reference deployment's latest procedures

**Status:** done

Delta since 19 (2026-09-15/16): one commit in ../oimlsmart/rag —
f6855d5 "golden judge: 3072-token budget + never score truncated
output". The harness faithfulness judge ran at a 100-token budget, so
every real answer's judgement truncated and parsed as a zero; the
budget now matches the server-side judge (3072), and a truncated judge
response returns null instead of a score.

## Applied

The Gates section gains the integrity property the fix establishes:
"A judge that cannot complete a judgement returns no score rather than
a truncated one."

## Checked, no change needed

- The reference's public pages (how-it-works, techniques) did not
  change in this window; the citation-graph sync (19) stands.
- The site's three-package path (user commit 455217c) and the graph
  subcommand (19) sit coherently together; verified by build + suite.
