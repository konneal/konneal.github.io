// Playwright verification suite for the production build.
// Usage: npm run build && npm run preview & ; npm run verify [base-url]
// Imports Playwright from the engine repo (../engine/node_modules) —
// this repo does not declare it as a dependency.
import { chromium } from 'file:///Users/mulgogi/src/konneal/engine/node_modules/playwright/index.mjs'

const base = process.argv[2] || 'http://localhost:4322'
const routes = [
  ['/', 200],
  ['/features/', 200],
  ['/use-cases/', 200],
  ['/audiences/', 200],
  ['/how-it-works/', 200],
  ['/annealment/', 200],
  ['/deployments/', 200],
  ['/get-started/', 200],
  ['/about/', 200],
  ['/nonexistent', 404],
]
const results = []
const fail = (m) => results.push(`FAIL ${m}`)
const pass = (m) => results.push(`ok   ${m}`)

const browser = await chromium.launch()

for (const width of [1440, 390]) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } })
  const page = await ctx.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e)))
  for (const [path, want] of routes) {
    const resp = await page.goto(base + path, { waitUntil: 'networkidle' })
    if (resp.status() === want) pass(`[${width}] ${path} → ${resp.status()}`)
    else fail(`[${width}] ${path} → ${resp.status()}, want ${want}`)
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )
    if (overflow > 1) fail(`[${width}] ${path} → h-overflow ${overflow}px`)
    else pass(`[${width}] ${path} no h-overflow`)
  }
  if (errors.length) fail(`[${width}] page errors: ${errors.join(' | ')}`)
  else pass(`[${width}] no page errors`)
  await ctx.close()
}

const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()

await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
const fontsHome = await page.evaluate(() => ({
  sans: document.fonts.check('16px "IBM Plex Sans Variable"'),
  mono: document.fonts.check('16px "IBM Plex Mono"'),
  serifFaces: [...document.fonts]
    .filter((f) => f.family.toLowerCase().includes('source serif'))
    .map((f) => f.status),
}))
fontsHome.sans && fontsHome.mono && fontsHome.serifFaces.length === 0
  ? pass('home: sans+mono loaded, serif not loaded')
  : fail(`home fonts: ${JSON.stringify(fontsHome)}`)
const h1 = await page.locator('h1').first().textContent()
;/serves your standards corpus as a question-answering service/.test(h1)
  ? pass('home: product sentence present')
  : fail(`home h1: ${h1}`)
const tags = await page.locator('.asset-tag').count()
tags >= 6 ? pass(`home: ${tags} asset tags`) : fail(`home: ${tags} asset tags`)
const eyebrows = await page.locator('.eyebrow').count()
eyebrows === 0 ? pass('no eyebrow elements') : fail(`${eyebrows} eyebrow elements remain`)
const navLinks = await page.locator('header nav').first().locator('a').count()
navLinks === 6 ? pass(`nav: ${navLinks} flat links`) : fail(`nav: ${navLinks} links`)

await page.goto(base + '/features/', { waitUntil: 'networkidle' })
const ariaCurrent = await page.locator('header nav a[aria-current="page"]').count()
ariaCurrent === 2
  ? pass('nav: aria-current on active link (desktop + mobile)')
  : fail(`nav: aria-current count ${ariaCurrent}`)
const jsonLd = await page.evaluate(() => document.querySelector('script[type="application/ld+json"]')?.textContent ?? '')
try {
  JSON.parse(jsonLd).parentOrganization.name === 'Ribose Inc.'
    ? pass('head: Organization JSON-LD present')
    : fail('head: Organization JSON-LD wrong')
} catch {
  fail('head: Organization JSON-LD unparsable')
}
const fam = await page.evaluate(() => [...document.querySelectorAll('section[id]')].map((s) => s.id))
;['grounded', 'typed', 'execution'].every((id) => fam.includes(id))
  ? pass('features: 3 families anchored')
  : fail(`features families: ${fam.join(',')}`)
const featTags = await page.locator('article .asset-tag').count()
featTags >= 16 ? pass(`features: ${featTags} tags on cards`) : fail(`features: ${featTags} tags`)
const groundedText = await page.locator('#grounded').textContent()
for (const name of ['Citation graph traversal', 'Standard-reference boosting', 'Research mode']) {
  ;(groundedText ?? '').includes(name) ? pass(`features: ${name} present`) : fail(`features: ${name} missing`)
}

await page.goto(base + '/use-cases/', { waitUntil: 'networkidle' })
const ucQ = await page.locator('#answer').locator('p').nth(1).textContent()
;/Where does R 60 address creep/.test(ucQ ?? '')
  ? pass('use-cases: example question rendered')
  : fail('use-cases: example question missing')
const v = page.locator('.verdict').first()
;(await v.textContent()).includes('INVALID')
  ? pass('use-cases: playground default INVALID')
  : fail('use-cases: playground default wrong')
await page.getByRole('button', { name: '24 000 / 30 000' }).click()
;(await v.textContent()).includes('VALID')
  ? pass('use-cases: playground preset VALID')
  : fail('use-cases: playground preset wrong')
await page.locator('.playground input').nth(1).fill('29000')
await page.locator('.playground input').nth(1).blur()
;(await v.textContent()).includes('INVALID')
  ? pass('use-cases: playground input INVALID')
  : fail('use-cases: playground input wrong')
const runBtn = page.getByRole('button', { name: 'Run the contract check' })
await runBtn.click()
let r = await page.locator('.result').textContent()
r.includes('served') ? pass('use-cases: verifier A served') : fail(`verifier A: ${r}`)
await page.locator('label').filter({ hasText: '0.7' }).click()
await runBtn.click()
r = await page.locator('.result').textContent()
r.includes('withheld') ? pass('use-cases: verifier B withheld') : fail(`verifier B: ${r}`)
const cert = await page.locator('pre code').textContent()
;/absent, by enumeration/.test(cert ?? '')
  ? pass('use-cases: absence certificate rendered')
  : fail('use-cases: certificate missing')

await page.goto(base + '/annealment/', { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
const fontsAnn = await page.evaluate(() => ({
  serifFaces: [...document.fonts]
    .filter((f) => f.family.toLowerCase().includes('source serif'))
    .map((f) => f.status),
  bodyFont: getComputedStyle(document.querySelector('.serif-body p')).fontFamily.split(',')[0],
}))
fontsAnn.serifFaces.length >= 1 && fontsAnn.serifFaces.includes('loaded') && fontsAnn.bodyFont.includes('Source Serif')
  ? pass('annealment: serif long-form loaded')
  : fail(`annealment fonts: ${JSON.stringify(fontsAnn)}`)
await page.waitForTimeout(1600)
const treads = await page.evaluate(() =>
  [...document.querySelectorAll('.stair-tread')].map((t) => Math.round(t.getBoundingClientRect().height)),
)
treads.length === 5 && treads[4] > treads[0]
  ? pass(`annealment: staircase rising ${treads.join(',')}`)
  : fail(`annealment treads: ${treads.join(',')}`)

await page.goto(base + '/get-started/', { waitUntil: 'networkidle' })
const pkgNote = await page.evaluate(() => document.body.textContent ?? '')
;/published to npm under the @konneal scope/.test(pkgNote) && /@konneal\/engine/.test(pkgNote)
  ? pass('get-started: npm scope note present')
  : fail('get-started: npm scope note missing')

await ctx.close()
await browser.close()
console.log(results.join('\n'))
const failed = results.filter((x) => x.startsWith('FAIL')).length
console.log(`\n${failed} failures`)
process.exit(failed ? 1 : 0)
