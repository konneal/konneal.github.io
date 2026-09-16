# 23 — Sync: one judge

**Status:** done

Delta since 22: ../oimlsmart/rag d9c4578 — the golden harness now
calls the server's /v1/admin/judge (the engine's calibrated
faithfulness scorer) instead of a hand-rolled judge. Two judge
implementations had drifted and scored a perfect gate 0.00; now the
harness and the live service share a single implementation, so the
measurement and the served behaviour cannot drift apart. Also in the
window: f9c26c7/8992b62 (already reflected in 22/20 — history carried
copies), and a model-plane pin update with no site impact.

## Applied

The Gates section gains: "The evaluation harness and the live service
share a single judge implementation, so the measurement and the served
behaviour cannot drift apart."

## Acceptance

check/build green; verify suite passes; deployed and confirmed live.
