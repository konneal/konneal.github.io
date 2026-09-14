export const SITE = {
  name: 'Konneal',
  url: 'https://www.konneal.org',
  description:
    'Konneal serves a standards organization’s publications as a question-answering service: answers cited to the exact clause, and conformance decided by executing machine-readable rules.',
  company: {
    name: 'Ribose Inc.',
    url: 'https://www.ribose.com',
  },
  reference: {
    name: 'OIML SMART AI',
    url: 'https://ai.oimlsmart.org',
    annealmentUrl: 'https://ai.oimlsmart.org/annealment/',
    howItWorksUrl: 'https://ai.oimlsmart.org/how-it-works/',
  },
}

export const NAV_GROUPS = [
  {
    label: 'Product',
    items: [
      { label: 'Features', href: '/features/' },
      { label: 'How it works', href: '/how-it-works/' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { label: 'Use cases', href: '/use-cases/' },
      { label: 'Audiences', href: '/audiences/' },
    ],
  },
]

export const NAV_FLAT = [
  { label: 'Get started', href: '/get-started/' },
  { label: 'Deployments', href: '/deployments/' },
  { label: 'About', href: '/about/' },
]

export type AssetId = 'metanorma' | 'pubid' | 'relaton' | 'glossarist' | 'lutaml' | 'primmel'

export const ASSETS: Record<AssetId, { name: string; what: string }> = {
  metanorma: {
    name: 'Metanorma',
    what: 'Your authored library: documents written with clause structure, typed tables, formulas and figures.',
  },
  pubid: {
    name: 'Pubid',
    what: 'Your publication identifiers, parsed natively so questions naming a publication steer retrieval.',
  },
  relaton: {
    name: 'Relaton',
    what: 'Your bibliographic records: publication families, editions and supersession links.',
  },
  glossarist: {
    name: 'Glossarist',
    what: 'Your terminology: defined concepts, registers and multilingual spellings.',
  },
  lutaml: {
    name: 'Lutaml',
    what: 'Your structured models, served as first-class objects.',
  },
  primmel: {
    name: 'Primmel',
    what: 'Your machine-readable models of the rules: constraints, calculations and test sequences.',
  },
}

export const INVENTORY = [
  {
    asset: 'metanorma' as AssetId,
    baseline: true,
    gets: 'A working answering service: answers cited to the exact clause, with tables, formulas and figures rendered from source.',
  },
  {
    asset: 'pubid' as AssetId,
    gets: 'Identifiers understood natively: a question naming a publication steers retrieval, and citations render in your identifier scheme.',
  },
  {
    asset: 'relaton' as AssetId,
    gets: 'Edition awareness: publication families, supersession links, and answers steered to the current edition.',
  },
  {
    asset: 'glossarist' as AssetId,
    gets: 'Vocabulary binding: everyday words resolved to your defined terms, in register, across languages.',
  },
  {
    asset: 'lutaml' as AssetId,
    gets: 'Structured models indexed and served as first-class objects.',
  },
  {
    asset: 'primmel' as AssetId,
    gets: 'Execution: verdicts computed with the arithmetic shown, counterfactuals evaluated, and certificates of absence returned.',
  },
]

export const SUITE = [
  {
    layer: 'Authored',
    tool: 'Metanorma',
    href: 'https://www.metanorma.org',
    what: 'Documents written with real structure — clause anchors, typed tables, formulas and figures — so the corpus has a spine to anneal around.',
  },
  {
    layer: 'Modelled',
    tool: 'Primmel',
    what: 'The rules themselves written as machines: typed attributes, constraints with numeric limits, calculations and ordered test sequences.',
  },
  {
    layer: 'Served',
    tool: 'Konneal',
    what: 'Annealment passes over what you have written, retrieval over the structure, the answer contract, and the gates that keep every release honest.',
  },
]

export interface Feature {
  name: string
  what: string
  practice: string
  assets: AssetId[]
}

export interface FeatureFamily {
  id: string
  name: string
  blurb: string
  features: Feature[]
}

export const FEATURE_FAMILIES: FeatureFamily[] = [
  {
    id: 'grounded',
    name: 'Grounded answering',
    blurb: 'Answers whose every claim carries a citation.',
    features: [
      {
        name: 'Clause-cited answers',
        what: 'Every substantive claim in an answer names the publication, edition and clause behind it, and any normative value is quoted verbatim from the source passage.',
        practice: 'A citation in an answer opens the original document at the cited clause, with the clause highlighted.',
        assets: ['metanorma'],
      },
      {
        name: 'Vocabulary binding',
        what: 'Members ask in everyday words, and the corpus answers in its own defined terms. The answer leads with your term, quotes its definition, and cites where it is defined.',
        practice: 'A member asks about "drift"; the answer opens with the defined term and the clause that defines it.',
        assets: ['metanorma', 'glossarist'],
      },
      {
        name: 'Edition awareness',
        what: 'A bibliographic registry of publication families, editions and supersession links decides which edition is current, so answers are steered to the edition in force.',
        practice: 'Every citation carries its edition and status; a superseded edition is cited only when it alone contains the required content.',
        assets: ['metanorma', 'relaton'],
      },
      {
        name: 'Identifier understanding',
        what: 'A question that names a publication or edition scopes retrieval to that document deterministically, from the question text rather than a model decision.',
        practice: 'A member asks about "R 60-1:2021 §4.4" and retrieval is pinned to that document, in your identifier scheme.',
        assets: ['metanorma', 'pubid'],
      },
    ],
  },
  {
    id: 'typed',
    name: 'Typed rendering',
    blurb: 'Tables, formulas and figures served from the source objects.',
    features: [
      {
        name: 'Tables as data',
        what: 'Tables keep their columns and rows as structured objects, retrieved and rendered exactly as the source carries them.',
        practice: 'A member asks for a limit by row and column; the served table is the document\'s own, not a model\'s retelling.',
        assets: ['metanorma'],
      },
      {
        name: 'Formulas as mathematics',
        what: 'Formulas keep their source notation and render as mathematics, so a computed relationship can be shown in the standard\'s own symbols.',
        practice: 'An answer about a conversion factor shows the formula, then the arithmetic.',
        assets: ['metanorma'],
      },
      {
        name: 'Figures from the original drawing',
        what: 'Figures keep their original drawings as images, and the answering model can consult the drawing itself when the question is about it.',
        practice: 'A member asks what a label on a drawing says; the answer reads it from the drawing, not from the caption.',
        assets: ['metanorma'],
      },
      {
        name: 'Model objects served',
        what: 'Structured models are indexed as first-class retrievable objects, so a question about a model gets the model.',
        practice: 'A member asks what an attribute means; the answer serves the typed object and cites it.',
        assets: ['lutaml'],
      },
    ],
  },
  {
    id: 'execution',
    name: 'Execution',
    blurb: 'Machine-checkable rules evaluated with the arithmetic shown, and answers that can be verified.',
    features: [
      {
        name: 'Computed verdicts',
        what: 'A question that names a machine-checkable rule gets the rule evaluated. The verdict reports pass, the standard\'s own word for the violation, or void naming what is missing — with the arithmetic shown.',
        practice: 'A member states two values; the answer carries a verdict block computed from the rule, which the prose must present faithfully.',
        assets: ['primmel'],
      },
      {
        name: 'Counterfactuals',
        what: 'Hypothetical values are evaluated by the same deterministic checks as real ones, so a member can ask "what if" and get a computed answer.',
        practice: 'A member asks whether a different rating would conform; the verdict block recomputes for the stated values.',
        assets: ['primmel'],
      },
      {
        name: 'Provable absence',
        what: 'Asked whether a standard constrains something, the service can enumerate the entire machine-readable model and return a certificate stating what was examined, that none of it matched, and what scope the proof covered.',
        practice: 'A refusal states that nothing was found; the certificate states that everything was examined.',
        assets: ['primmel'],
      },
      {
        name: 'Answer verification',
        what: 'Any answer, from this service or from another system, can be checked against the corpus: quoted spans must appear verbatim in served passages, object references must resolve, and a judged faithfulness score is labeled as judged.',
        practice: 'A member pastes an answer and asks whether it holds; the check returns mechanical and judged results, each labeled.',
        assets: ['metanorma'],
      },
      {
        name: 'Measurement gates',
        what: 'A golden question set with expected citations runs end to end — three times — before any change is promoted, with paraphrase and leakage probes alongside.',
        practice: 'The service your members use is the same one the gates measured before it shipped.',
        assets: ['metanorma'],
      },
    ],
  },
]

export interface UseCase {
  id: string
  name: string
  situation: string
  does: string
  sees: string
  assets: AssetId[]
  demo?: 'playground' | 'verifier' | 'certificate' | 'anatomy'
}

export const USE_CASES: UseCase[] = [
  {
    id: 'answer',
    name: 'Answer questions from the corpus',
    situation:
      'A member asks a question in their own words, at any hour, about any clause in the library — and needs an answer they can act on.',
    does: 'The service reads the question, resolves everyday phrasing to the corpus\'s defined terms, retrieves over the clause-structured corpus, and generates the answer under a contract that requires a citation on every claim and verbatim quotes for normative values.',
    sees: 'An answer whose every claim names the publication, edition and clause behind it; a citation opens the original document at the cited clause, with the clause highlighted.',
    assets: ['metanorma', 'glossarist', 'relaton', 'pubid'],
    demo: 'anatomy',
  },
  {
    id: 'conformance',
    name: 'Decide conformance',
    situation:
      'A member states an instrument\'s values and asks whether the configuration conforms to the standard — a question with a computable answer.',
    does: 'The service binds the stated values to the rule\'s parameters, evaluates the check deterministically, and attaches the verdict to the answer as data, with the arithmetic shown and the standard\'s own word for any violation.',
    sees: 'A verdict block — valid, invalid with the reason in the standard\'s own words, or void naming what is missing — computed rather than judged, which the prose must present faithfully.',
    assets: ['primmel'],
    demo: 'playground',
  },
  {
    id: 'absence',
    name: 'Prove absence',
    situation:
      'A member asks whether the standard constrains something, and "we found nothing" is not good enough — they need to know that nothing is there.',
    does: 'The service enumerates the standard\'s entire machine-readable model — every requirement, constraint, test and term — and returns a certificate of absence.',
    sees: 'A certificate stating how many nodes were examined, that none matched, and what scope the enumeration covered.',
    assets: ['primmel'],
    demo: 'certificate',
  },
  {
    id: 'verify',
    name: 'Check any answer',
    situation:
      'A member has an answer — from this service, from another system, from a colleague — and wants to know whether it holds against the corpus.',
    does: 'The deterministic checks verify that each quoted span appears verbatim in a served passage and that every referenced object resolves; a separate judged check scores faithfulness, labeled as judged.',
    sees: 'Mechanical and judged results, each labeled as what it is, for any answer submitted to the check.',
    assets: ['metanorma'],
    demo: 'verifier',
  },
]

export const ROADMAP = [
  {
    name: 'Semantic edition diffs',
    body: 'What changed between two editions, stated at the level of requirements and limits rather than as text differences.',
  },
  {
    name: 'Committee impact analysis',
    body: 'When a limit changes, which requirements, tests, verdicts and forms change with it — change impact over the model\'s dependency graph.',
  },
  {
    name: 'Process walking',
    body: 'Ordered test sequences and evaluation processes as queryable structure: what gates what, what runs next, what is contaminated by what.',
  },
]

export interface Audience {
  id: string
  who: string
  stake: string
  benefit: string
  useCases: string[]
}

export const AUDIENCES: Audience[] = [
  {
    id: 'secretariat',
    who: 'The secretariat, the publisher',
    stake: 'You are responsible for the publication portfolio and for answering the organization\'s members.',
    benefit:
      'The portfolio becomes a working service. Member questions stop queuing for expert time, because the corpus answers them with citations. The organization\'s authority is protected: every answer shows its source, and the gates measure every release before your members see it.',
    useCases: ['answer', 'verify'],
  },
  {
    id: 'members',
    who: 'Members, laboratories, manufacturers, assessors',
    stake: 'You apply the standards in daily work and need the right clause, the current edition, and the correct value.',
    benefit:
      'You can ask in your own words, at any hour, and receive an answer that names the publication, edition and clause behind every claim. Where a rule is machine-checkable, you get a computed verdict with the arithmetic shown — and a citation that opens the original document at the clause.',
    useCases: ['answer', 'conformance', 'absence'],
  },
  {
    id: 'committees',
    who: 'Technical committees',
    stake: 'You draft and maintain the standards, and you carry the consequences when requirements, tests and limits interact.',
    benefit:
      'Your models are machine-checked consistent, and the frontier is committee-facing: impact analysis over the dependency graph when a limit changes, and edition diffs stated at the requirement level. These capabilities are on the measured frontier, in development.',
    useCases: ['verify'],
  },
  {
    id: 'it',
    who: 'The digital team',
    stake: 'You run the organization\'s services, and you will run this one.',
    benefit:
      'All models are open-weight, and the design runs on any platform that provides model serving, vector search and durable storage — the reference adapters run on Cloudflare. The profile is a declaration the organization owns, and the gates run on every change, so operations have a measured floor.',
    useCases: ['verify'],
  },
]

export const ADOPTION = [
  {
    profile: 'You author in Metanorma',
    assets: ['metanorma'] as AssetId[],
    body: 'Your library\'s clause structure, typed tables and formulas carry the grounded answering surface, held to the gates, with identifiers served through slug codecs until a formal scheme is declared.',
    path: 'Declare the profile, run the annealment passes, deploy under your brand.',
  },
  {
    profile: 'Metanorma, plus data shapes',
    assets: ['pubid', 'relaton', 'glossarist', 'lutaml'] as AssetId[],
    body: 'Each shape imports into the profile and raises its features: Pubid brings native identifier steering and citation formatting; Relaton brings edition governance; Glossarist brings terminology binding across registers and languages; Lutaml brings served model objects.',
    path: 'The same passes pick each dataset up where it stands.',
  },
  {
    profile: 'Plus Primmel models',
    assets: ['primmel'] as AssetId[],
    body: 'The execution plane turns on for every publication family that carries models: verdicts with the standard\'s own violation wording, counterfactuals, and certificates of absence.',
    path: 'Models join the model plane; the verdict engine serves them.',
  },
]

export const ENGAGEMENT = [
  {
    step: '01',
    name: 'Inventory review',
    body: 'We fill in the ladder together: what your organization already has, and what each asset already gives your members.',
  },
  {
    step: '02',
    name: 'Profile declaration',
    body: 'Publications, identifiers, terminology, models, thresholds. The profile is a declaration your organization owns.',
  },
  {
    step: '03',
    name: 'Build, with gates',
    body: 'The annealment passes run over your corpus, and the golden suites measure the result against your own documents before anything ships.',
  },
  {
    step: '04',
    name: 'Launch, white-labeled',
    body: 'Your publications, your terminology, your frontend — with the gates running on every change thereafter.',
  },
]

export const PACKAGES = [
  {
    step: '01',
    cmd: 'npm create @konneal/publisher my-sdo',
    name: 'Scaffold the deployment',
    body: 'An interview asks for the publisher\'s facts — id, name, domains, identity issuer, first dataset — then writes the whole skeleton: profile/*.yaml (the single edit surface), the ten-line worker entry that injects the profile into the engine, the Cloudflare wrangler template, and the profile codegen. Every generated file is ordinary, reviewable code; the scaffolder never runs again.',
  },
  {
    step: '02',
    cmd: 'npm install && npm run gen:profile',
    name: 'Declare the corpus and generate the profile',
    body: 'profile/corpora.yaml names the corpus repository. Every edit to a profile file regenerates the committed profile.gen.ts; a drift test keeps both sides honest.',
  },
  {
    step: '03',
    cmd: 'python -m ingest.cli parse | embed | upsert',
    name: 'Ingest the corpus',
    body: 'The engine\'s ingest CLI parses the corpus, embeds it and upserts the Vectorize index. One-time cost, bounded by corpus size.',
  },
  {
    step: '04',
    cmd: 'npm run deploy',
    name: 'Serve under your brand',
    body: 'Create the Vectorize/KV/D1 resources (wrangler prints the ids), fill them into wrangler.toml, deploy. The optional frontend starts from @konneal/ui-starter — theme tokens, chrome and conversation state are yours; the answer contract ships from @konneal/client.',
  },
]

export const REFERENCE_STATS = [
  ['publications', '≈ 900'],
  ['words indexed', '9.3 M'],
  ['languages', '9'],
  ['defined terms', '≈ 9 000'],
  ['bibliographic records', '5 707'],
  ['publication families', '224'],
  ['golden suite', '95 %+'],
]
