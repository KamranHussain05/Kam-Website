import { profileLinks } from '@/lib/site-data'

type ProfileLinksProps = {
  className?: string
}

/** Compact, wrapping row of external profile links (Scholar, GitHub, LinkedIn, X). */
export function ProfileLinks({ className = '' }: ProfileLinksProps) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-1 ${className}`.trim()}>
      {profileLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
