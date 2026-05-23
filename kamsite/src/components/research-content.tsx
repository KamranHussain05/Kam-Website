import Image from 'next/image'
import { ProfileLinks } from '@/components/profile-links'
import { contactEmail, preprints } from '@/lib/site-data'

export default function ResearchContent() {
  return (
    <div className="py-12 max-w-3xl mx-auto space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Research</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Population spike modeling, brain–computer interfaces, and neural data
          tooling at UCSC Braingeneers and Stanford NPTL.
        </p>
        <ProfileLinks align="start" />
      </header>

      <section className="space-y-8">
        <h2 className="text-xl font-semibold border-b border-border pb-2">
          Preprints
        </h2>
        <ul className="space-y-12">
          {preprints.map((paper) => (
            <li key={paper.url}>
              <article className="space-y-4">
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-muted"
                >
                  <Image
                    src={paper.figureUrl}
                    alt={paper.figureAlt}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </a>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium leading-snug">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {paper.title}
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {paper.authors} · {paper.venue} · {paper.year}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {paper.summary}
                  </p>
                  {paper.note && (
                    <p className="text-sm text-muted-foreground italic">
                      {paper.note}
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2 border-t border-border pt-8">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          <a
            href={`mailto:${contactEmail}`}
            className="text-muted-foreground hover:text-foreground hover:underline"
          >
            {contactEmail}
          </a>
        </p>
      </section>
    </div>
  )
}
