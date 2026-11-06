import Link from 'next/link'
import { bciAward, talks } from '@/lib/site-data'

type Thread = {
  title: string
  body: React.ReactNode
  links: { label: string; href: string; internal?: boolean }[]
}

const bciTalk = talks[0]

const threads: Thread[] = [
  {
    title: 'Speech brain–computer interfaces',
    body: (
      <>
        I presented work on bringing intracortical speech BCIs closer to
        conversational speeds at the 2025 BCI Society Meeting, and was part of
        the team awarded first place in the 2025 BCI Award.
      </>
    ),
    links: [
      { label: 'Talk', href: `/research/#${bciTalk.id}`, internal: true },
      { label: 'BCI Award', href: bciAward.href },
    ],
  },
  {
    title: 'Neural population forecasting',
    body: (
      <>
        Two 2026 preprints introduce a large-scale benchmark for forecasting
        spiking activity and test whether forecasted firing rates help decode
        behavior.
      </>
    ),
    links: [{ label: 'Preprints', href: '/research/#papers', internal: true }],
  },
  {
    title: 'SpikeLab',
    body: (
      <>
        A Python library and agent workflow for analyzing spike data, designed
        so that electrophysiology analyses use vetted methods and can be
        reproduced.
      </>
    ),
    links: [
      { label: 'Preprint', href: '/research/#spikelab', internal: true },
      { label: 'Code', href: 'https://github.com/braingeneers/SpikeLab' },
      { label: 'Documentation', href: 'https://spikelab.braingeneers.gi.ucsc.edu/' },
    ],
  },
]

export function ResearchThreads() {
  return (
    <section aria-labelledby="selected-research" className="border-t border-border pt-10 pb-12">
      <h2 id="selected-research" className="section-heading">
        Selected research
      </h2>
      <ul className="mt-2 divide-y divide-border">
        {threads.map((thread) => (
          <li key={thread.title} className="py-5">
            <h3 className="font-semibold">{thread.title}</h3>
            <p className="mt-1 max-w-[42rem]">{thread.body}</p>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
              {thread.links.map((link) => (
                <li key={link.label}>
                  {link.internal ? (
                    <Link href={link.href} className="text-link">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-2">
        <Link href="/research/" className="text-link font-medium">
          All research
        </Link>
      </p>
    </section>
  )
}
