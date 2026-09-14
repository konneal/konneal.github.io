# 01 — IA of record, voice rules, type system

**Status:** done

The site is the standard corporate product-site architecture. Every
page answers exactly one visitor question; capabilities, jobs and
stakeholders are three catalogs of the same product, cross-linked,
never duplicated.

## Pages

| URL | Question it answers |
|---|---|
| `/` | What is it? |
| `/features` | What does it do? |
| `/use-cases` | What can I do with it? |
| `/audiences` | Who am I in this story? |
| `/how-it-works` | How is that possible? |
| `/annealment` (off-nav) | Can I trust the method? |
| `/deployments` | Does it work somewhere real? |
| `/get-started` | How do I get it? |
| `/about` | Who is behind it? |

## Voice rules (binding on every sentence)

1. Complete sentences in the house documentary register. No staccato
   marketing fragments.
2. Every sentence gives; none takes away. No "without X you can't Y" —
   only "with X you get Y". The reader's corpus is an asset, never a
   deficiency.
3. Product vocabulary: clause, edition, verdict, witness, pass, gate,
   asset. Internal layer names (data/enrichment/validation layers)
   never reach the page — they become assets, passes, gates.
4. OIML SMART AI is evidence, framed once: "a public, testable
   deployment" on Deployments. Its numbers appear nowhere else. The
   header link is the instance URL (ai.oimlsmart.org), not the org.
5. OCR is absent from the story entirely.
6. No invented facts: no dates on roadmap items, no numeric pricing
   (pricing is “Contact Ribose”). Illustrative demos are labeled as
   illustrative. Commercial path is Ribose Inc. (see 13).
7. Asset names are exactly: Metanorma, Pubid, Relaton, Glossarist,
   Lutaml, Primmel.

## Type system

- IBM Plex Sans (Variable): all UI and body text, headings weight
  500–600, tight tracking.
- IBM Plex Mono: eyebrows, data, labels, scores, identifier chips.
- Source Serif 4 (Variable): long-form editorial body on `/annealment`
  only. Loaded on that page alone.
- The brand palette stays as shipped (paper/night/blue family). The
  sheared tick remains the structural marker.

## Asset tags (the spine)

Filled tag = baseline provided by a Metanorma library. Outlined tag
with `+` = what a further asset adds. Tags appear on Features and Use
cases; the inventory ladder (`/#what-you-have`) is their summary.

## Acceptance

Every page copy-block passes rules 1–7; serif appears only on
annealment; grep for banned patterns ("without it", "OCR") is clean.
