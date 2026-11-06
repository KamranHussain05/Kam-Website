#!/usr/bin/env node
/**
 * Checks the static export for the site's structural rules:
 *   - public navigation is exactly Home, Research, Projects
 *   - the podcast archive is unlisted (no links to it, noindex, not in a sitemap)
 *   - retired /about/ and /talks/ URLs forward to their new homes
 *   - no email, ORCID, or placeholder "#" links
 *
 * Usage: node scripts/check-export.mjs [outDir]   (run after `npm run build`)
 */
import fs from 'node:fs'
import path from 'node:path'

const outDir = path.resolve(process.argv[2] ?? 'out')
const failures = []
const check = (ok, message) => {
  if (!ok) failures.push(message)
}

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return entry.name === '_next' ? [] : htmlFiles(full)
    return entry.name.endsWith('.html') ? [full] : []
  })
}

const read = (rel) => {
  const file = path.join(outDir, rel)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null
}

// Detect a base path (local production builds use /Kam-Website) from the homepage assets.
const home = read('index.html')
if (!home) {
  console.error(`No export found at ${outDir}. Run \`npm run build\` first.`)
  process.exit(1)
}
const basePath = home.match(/(?:src|href)="([^"]*)\/_next\//)?.[1] ?? ''
const strip = (href) => (basePath && href.startsWith(basePath) ? href.slice(basePath.length) || '/' : href)

const hrefsIn = (html) => [...html.matchAll(/href="([^"]*)"/g)].map((m) => m[1])
const navHrefs = (html, label) => {
  const block = html.match(new RegExp(`<nav[^>]*aria-label="${label}"[^>]*>([\\s\\S]*?)</nav>`))
  return block ? hrefsIn(block[1]).map(strip) : null
}

const expectedNav = ['/', '/research/', '/projects/']
const publicPages = ['index.html', 'research/index.html', 'projects/index.html']
const allPages = [...publicPages, 'podcast/index.html', 'about/index.html', 'talks/index.html']

for (const page of allPages) check(read(page) !== null, `missing ${page}`)

for (const file of htmlFiles(outDir)) {
  const rel = path.relative(outDir, file)
  const html = fs.readFileSync(file, 'utf8')
  const hrefs = hrefsIn(html).map(strip)

  if (rel !== 'podcast/index.html') {
    check(!hrefs.some((h) => /\/podcast\/?($|[#?])/.test(h)), `${rel} links to the unlisted podcast`)
  }
  check(!/mailto:/i.test(html), `${rel} contains a mailto: link`)
  check(!/orcid\.org/i.test(html), `${rel} contains an ORCID link`)
  check(!hrefs.includes('#'), `${rel} contains a placeholder href="#"`)

  const primary = navHrefs(html, 'Primary')
  if (primary) {
    check(JSON.stringify(primary) === JSON.stringify(expectedNav), `${rel} primary nav is ${JSON.stringify(primary)}`)
  }
  const footer = navHrefs(html, 'Footer')
  if (footer) {
    check(JSON.stringify(footer) === JSON.stringify(expectedNav), `${rel} footer nav is ${JSON.stringify(footer)}`)
  }
}

for (const page of publicPages) {
  const html = read(page) ?? ''
  check(navHrefs(html, 'Primary') !== null, `${page} has no primary navigation`)
  check(!/<meta[^>]+name="robots"[^>]+noindex/.test(html), `${page} is marked noindex`)
}

const podcast = read('podcast/index.html') ?? ''
check(/<meta[^>]+name="robots"[^>]+content="noindex, ?follow"/.test(podcast), 'podcast page lacks noindex, follow')
check((podcast.match(/id="episode-\d+"/g) ?? []).length === 13, 'podcast page does not list 13 episodes')
check(!/autoplay/i.test(podcast.replace(/allow="[^"]*"/g, '')), 'podcast page contains autoplay')

const forwards = { 'about/index.html': '/', 'talks/index.html': '/research/#talks' }
for (const [page, target] of Object.entries(forwards)) {
  const html = read(page) ?? ''
  const refresh = html.match(/<meta[^>]+http-equiv="refresh"[^>]+content="0; ?url=([^"]+)"/i)
  check(refresh && strip(refresh[1]) === target, `${page} does not forward to ${target}`)
}

check(home.includes('Computational neuroscience and applied machine learning researcher'), 'homepage lacks the approved description')
check(!/Build Log/i.test(home), 'homepage still contains the Build Log')

const sitemap = read('sitemap.xml')
if (sitemap) check(!/\/podcast/.test(sitemap), 'sitemap lists the podcast')

if (failures.length) {
  console.error(`Export check failed (${failures.length}):\n - ${failures.join('\n - ')}`)
  process.exit(1)
}
console.log(`Export check passed (${outDir}${basePath ? `, base path ${basePath}` : ''}).`)
