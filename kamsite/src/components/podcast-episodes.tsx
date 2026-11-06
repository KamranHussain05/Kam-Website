'use client'

import { useEffect, useRef, useState } from 'react'
import { formatDateUTC } from '@/lib/site-data'
import { formatDuration, type PodcastEpisode } from '@/lib/podcast-data'

/**
 * Episode list with a single on-demand player. "Listen" is a real link to the
 * audio file, so it still works without JavaScript; with JavaScript it opens a
 * native <audio> player inline. Only one player exists at a time, so starting
 * another episode unmounts (and stops) the previous one.
 */
export function PodcastEpisodes({ episodes }: { episodes: PodcastEpisode[] }) {
  const [activeGuid, setActiveGuid] = useState<string | null>(null)

  return (
    <ol className="mt-2 divide-y divide-border" aria-label="Episodes, newest first">
      {episodes.map((episode) => (
        <li key={episode.guid} id={`episode-${episode.number}`} className="py-6">
          <article aria-labelledby={`episode-${episode.number}-title`}>
            <p className="text-[0.95rem] text-muted-foreground">
              Episode {episode.number} ·{' '}
              <time dateTime={episode.published}>{formatDateUTC(episode.published)}</time> ·{' '}
              {formatDuration(episode.durationSeconds)}
            </p>
            <h3 id={`episode-${episode.number}-title`} className="mt-1 font-semibold leading-snug">
              {episode.title}
            </h3>
            <p className="mt-1 max-w-[42rem]">{episode.summary}</p>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.95rem]">
              {activeGuid !== episode.guid && (
                <a
                  href={episode.audioUrl}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveGuid(episode.guid)
                  }}
                  className="inline-flex items-center rounded-full border border-primary px-3 py-1 font-medium text-primary hover:bg-primary/10 transition-colors"
                  aria-label={`Listen: episode ${episode.number}, ${episode.title}`}
                >
                  Listen
                </a>
              )}
              <a
                href={episode.episodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
                aria-label={`Episode page: ${episode.title}`}
              >
                Episode page
              </a>
            </div>

            {activeGuid === episode.guid && (
              <InlinePlayer episode={episode} onClose={() => setActiveGuid(null)} />
            )}

            {episode.links.length > 0 && (
              <details className="mt-3 text-[0.95rem]">
                <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                  Show notes
                </summary>
                <ul className="mt-2 space-y-1 pl-4">
                  {episode.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </article>
        </li>
      ))}
    </ol>
  )
}

function InlinePlayer({ episode, onClose }: { episode: PodcastEpisode; onClose: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.focus()
    // Started by the visitor's Listen click; if the browser blocks it, the controls remain.
    audio.play().catch(() => {})
    return () => {
      audio.pause()
    }
  }, [])

  return (
    <div className="mt-3 max-w-[42rem]">
      <audio
        ref={audioRef}
        controls
        preload="none"
        className="w-full"
        aria-label={`Audio player: ${episode.title}`}
        src={episode.audioUrl}
        onError={() => setFailed(true)}
      />
      {failed && (
        <p className="mt-2 text-[0.95rem]" role="status">
          This episode can’t play here.{' '}
          <a href={episode.episodeUrl} target="_blank" rel="noopener noreferrer" className="text-link">
            Listen on the episode page
          </a>
          .
        </p>
      )}
      <button
        type="button"
        onClick={onClose}
        className="mt-1 text-[0.95rem] text-muted-foreground hover:text-foreground"
      >
        Close player
      </button>
    </div>
  )
}
