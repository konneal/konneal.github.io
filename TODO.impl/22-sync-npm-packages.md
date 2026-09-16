# 22 — Sync: the packages are on npm

**Status:** done

Delta since 20: ../oimlsmart/rag cc5e850 — the engine dependency moved
from a git pin (github:konneal/engine#5ea8272) to ^0.1.4 from the npm
registry. Verified on the registry: @konneal/engine 0.1.4,
@konneal/client 0.1.1, @konneal/create-publisher 0.1.0,
@konneal/ui-starter 0.1.0.

## Applied

- Get started, the packages note: the packages are published to npm
  under the @konneal scope (with the engine package linked), and the
  sources live at github.com/konneal — all BSD-3-Clause.
- Deployments: the engine sentence states that deployments consume the
  package from the npm registry.

## Acceptance

check/build green; verify suite passes (new assertion: the npm
sentence renders); deployed and confirmed live.
