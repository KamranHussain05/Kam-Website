import {
  bciAward,
  formatDateUTC,
  googleScholarUrl,
  papers,
  posters,
  talks,
  type Paper,
  type Presentation,
  type ResourceLink,
} from '@/lib/site-data'

function ResourceLinks({ links, context }: { links: ResourceLink[]; context: string }) {
  if (links.length === 0) return null
  return (
    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            aria-label={`${link.label}: ${context}`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Authors({ paper }: { paper: Paper }) {
  return (
    <p className="mt-1 text-[0.95rem] text-muted-foreground">
      {paper.authors.map((author, i) => (
        <span key={author.name}>
          {author.self ? (
            <strong className="font-semibold text-foreground">{author.name}</strong>
          ) : (
            author.name
          )}
          {i < paper.authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  )
}

function PresentationList({ items }: { items: Presentation[] }) {
  return (
    <ul className="mt-2 divide-y divide-border">
      {items.map((item) => (
        <li key={item.id} id={item.id} className="scroll-mt-6 py-5">
          <h3 className="font-semibold leading-snug">{item.title}</h3>
          <p className="mt-1 text-[0.95rem] text-muted-foreground">
            {[item.category, item.venue, item.date, item.location].filter(Boolean).join(' · ')}
          </p>
          <ResourceLinks links={item.links} context={item.title} />
        </li>
      ))}
    </ul>
  )
}

const sections = [
  { id: 'papers', label: 'Papers and preprints' },
  { id: 'talks', label: 'Talks' },
  { id: 'posters', label: 'Posters' },
]

export default function ResearchContent() {
  return (
    <div className="pt-10 sm:pt-14">
      <header className="max-w-[42rem]">
        <h1 className="text-4xl font-bold tracking-tight">Research</h1>
        <p className="mt-4">
          My research focuses on speech brain–computer interfaces, neural
          population modeling, and computational tools for electrophysiology.
        </p>
        <p className="mt-3">
          <a href={googleScholarUrl} target="_blank" rel="noopener noreferrer" className="text-link">
            Google Scholar
          </a>
        </p>
        <nav aria-label="On this page" className="mt-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-link">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <aside aria-label="Recognition" className="mt-8 border-l-2 border-primary pl-4 max-w-[42rem]">
        <p>
          <span className="font-semibold">{bciAward.distinction}</span> for the
          team project “{bciAward.title}.”{' '}
          <a href={bciAward.href} target="_blank" rel="noopener noreferrer" className="text-link">
            Official award page
          </a>
        </p>
        <p className="mt-1 text-[0.95rem] text-muted-foreground">
          {bciAward.equalContributors.join(', ')} (equal contribution), and{' '}
          {bciAward.otherAuthorCount} coauthors.
        </p>
      </aside>

      <section id="papers" aria-labelledby="papers-heading" className="scroll-mt-6 mt-12">
        <h2 id="papers-heading" className="text-2xl font-semibold tracking-tight">
          Papers and preprints
        </h2>
        <ul className="mt-2 divide-y divide-border">
          {papers.map((paper) => (
            <li key={paper.id} id={paper.id} className="scroll-mt-6 py-6">
              <article>
                <h3 className="font-semibold leading-snug">{paper.title}</h3>
                <Authors paper={paper} />
                <p className="mt-1 text-[0.95rem] text-muted-foreground">
                  {paper.status} · {formatDateUTC(paper.date)}
                </p>
                <p className="mt-2 max-w-[42rem]">{paper.summary}</p>
                <ResourceLinks links={paper.links} context={paper.title} />
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section id="talks" aria-labelledby="talks-heading" className="scroll-mt-6 mt-12">
        <h2 id="talks-heading" className="text-2xl font-semibold tracking-tight">
          Talks
        </h2>
        <PresentationList items={talks} />
      </section>

      <section id="posters" aria-labelledby="posters-heading" className="scroll-mt-6 mt-12">
        <h2 id="posters-heading" className="text-2xl font-semibold tracking-tight">
          Posters
        </h2>
        <PresentationList items={posters} />
      </section>
    </div>
  )
}
