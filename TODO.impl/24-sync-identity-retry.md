# 24 — Sync: publisher identity and the retry-once gate

**Status:** done

Deltas across the family since 23, and their disposition:

**Applied**

- engine 85792c6 — publisher-identity questions join the
  never-refuse class: the profile carries the publisher's identity, so
  questions about the publisher itself are answered from the profile
  and never refused (grounded and cited when passages appear). Stated
  on Get started's profile-declaration step.
- ../oimlsmart/rag 168e14e — the golden judge paces its loop and
  retries a degenerate all-zero verdict once after a cooldown; zeros
  on passing cases are a degradation signature, never a real verdict.
  Stated in the Gates section.

**Checked, no site change**

- ../oimlsmart/rag 5b1a4aa, 1cfddee — judge observability internals
  (null-score reasons, grounding fields in results).
- engine 7c1dd8f (fixture var), 0fe710a (judge timeouts) — internal.
- client (docSlug fix, trusted publishing), create-publisher
  (non-interactive mode, README), ui-starter (folded into the
  scaffolder, kept as reference) — the existing Get started copy
  remains accurate for all three.

## Acceptance

check/build green; verify suite passes (with the two new assertions);
deployed and confirmed live.
