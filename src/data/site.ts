export const SITE = {
  name: 'Konneal',
  url: 'https://www.konneal.org',
  description:
    'Konneal turns a standards organization’s publications into a question-answering service: answers cited to the exact clause, tables and formulas rendered from source, conformance decided by executing the organization’s own rules.',
  reference: {
    name: 'OIML SMART AI',
    url: 'https://ai.oimlsmart.org',
    annealmentUrl: 'https://ai.oimlsmart.org/annealment/',
    howItWorksUrl: 'https://ai.oimlsmart.org/how-it-works/',
  },
}

export const NAV = [
  { label: 'How it works', href: '/how-it-works/' },
  { label: 'Annealment', href: '/annealment/' },
  { label: 'Deployments', href: '/deployments/' },
]

export const SUITE = [
  {
    step: '01',
    layer: 'Authored',
    tool: 'Metanorma',
    href: 'https://www.metanorma.org',
    what: 'Documents written with real structure — clause anchors, typed tables, formulas and figures — instead of word-processor files flattened into prose.',
  },
  {
    step: '02',
    layer: 'Modelled',
    tool: 'Primmel',
    what: 'Machine-readable models of the rules themselves: typed attributes, constraints with numeric limits, calculations and ordered test sequences.',
  },
  {
    step: '03',
    layer: 'Served',
    tool: 'Konneal',
    what: 'The serving layer: hybrid retrieval over the structured corpus, the answer contract, conformance by execution, and the measurement gates that keep it honest.',
  },
]

export const CAPABILITIES = [
  {
    name: 'Answers cited to the clause',
    what: 'Every substantive claim names the publication, edition and clause behind it. Normative values are quoted verbatim from the source passage, so claims can be checked mechanically.',
    without: 'Generated prose with no anchor — the reader cannot tell where an answer came from.',
  },
  {
    name: 'Typed tables, formulas, figures',
    what: 'Tables keep their columns and rows as data, formulas render as mathematics from their source notation, and figures are shown from the original drawings. The model never retypes them.',
    without: 'A model that retypes a table introduces transcription errors that carry the authority of a citation.',
  },
  {
    name: 'Vocabulary binding',
    what: 'Users ask in everyday words; the corpus answers in defined terms. The answer leads with the organization’s own term, quotes its definition and cites where it is defined.',
    without: 'The system fails on the step from everyday language to defined terminology.',
  },
  {
    name: 'Edition awareness',
    what: 'A bibliographic registry of families, editions and supersession links decides which edition is current — derived from the record’s own links, not a status field.',
    without: 'Superseded editions are cited as if they were current.',
  },
  {
    name: 'Conformance by execution',
    what: 'A question that names a machine-checkable rule gets the rule evaluated, not quoted. The verdict — pass, fail with the standard’s own word for the violation, or void naming what is missing — is attached as data.',
    without: 'The rule is quoted and the arithmetic is left to the reader, which is where errors enter in manual practice.',
  },
  {
    name: 'Provable absence',
    what: 'Asked whether a standard constrains something, the service can enumerate the entire model and return a certificate of absence: how many nodes were examined, that none matched, what scope the proof covered.',
    without: 'A refusal states that the system found nothing — which is not evidence that nothing is there.',
  },
]
