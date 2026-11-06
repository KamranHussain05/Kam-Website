import { Metadata } from 'next'
import Image from 'next/image'
import { PodcastEpisodes } from '@/components/podcast-episodes'
import { episodes, podcast } from '@/lib/podcast-data'
import { withBasePath } from '@/lib/site-data'

// Unlisted archive: reachable by direct URL only. Nothing else on the site links
// here, and search engines are asked not to index it (links may still be followed).
export const metadata: Metadata = {
  title: { absolute: podcast.title },
  description: podcast.intro,
  robots: { index: false, follow: true },
  alternates: { canonical: '/podcast/' },
}

export default function PodcastPage() {
  return (
    <div className="pt-10 sm:pt-14">
      <header className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
        <Image
          src={withBasePath(podcast.cover.src)}
          alt={podcast.cover.alt}
          width={podcast.cover.width}
          height={podcast.cover.height}
          className="h-28 w-28 shrink-0 rounded-md border border-border sm:h-36 sm:w-36"
        />
        <div className="max-w-[40rem]">
          <h1 className="text-4xl font-bold tracking-tight">{podcast.title}</h1>
          <p className="mt-3">{podcast.intro}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
            {podcast.platforms.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-link">
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section aria-labelledby="episodes-heading" className="mt-12">
        <h2 id="episodes-heading" className="text-2xl font-semibold tracking-tight">
          Episodes
        </h2>
        <PodcastEpisodes episodes={episodes} />
      </section>
    </div>
  )
}
