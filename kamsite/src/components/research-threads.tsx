import Link from 'next/link'
import { primaryPillClassName, preprints, researchSummary } from '@/lib/site-data'

export function ResearchThreads() {
  return (
    <section id="research" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Research</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {researchSummary}
        </p>
        <ul className="space-y-3 mb-8">
          {preprints.map((paper) => (
            <li key={paper.url}>
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline leading-snug"
              >
                {paper.title}
              </a>
            </li>
          ))}
        </ul>
        <Link href="/research" className={primaryPillClassName}>
          View all research
        </Link>
      </div>
    </section>
  )
}
