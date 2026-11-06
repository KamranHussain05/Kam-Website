import { background } from '@/lib/site-data'

export function Background() {
  return (
    <section aria-labelledby="background-heading" className="border-t border-border pt-10 pb-12">
      <h2 id="background-heading" className="section-heading">
        Background
      </h2>
      <p className="mt-4 max-w-[42rem]">
        My research background spans speech neuroprosthetics at Stanford NPTL
        and neural activity modeling with the UCSC Braingeneers. Earlier
        experiences at NASA Ames and UC San Diego helped shape my interest in
        neural interfaces and applied machine learning.
      </p>
      <ul className="mt-5 space-y-3">
        {background.map((entry) => (
          <li key={entry.organization} className="sm:flex sm:gap-6">
            <div className="sm:w-2/5 font-medium">
              {entry.href ? (
                <a href={entry.href} target="_blank" rel="noopener noreferrer" className="text-link">
                  {entry.organization}
                </a>
              ) : (
                entry.organization
              )}
            </div>
            <div className="text-muted-foreground sm:flex-1">
              {[entry.role, entry.topic, entry.dates].filter(Boolean).join(' · ')}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
