import { GoogleScholarIcon, OrcidIcon } from '@/components/icons/profile-icons'
import { outlinePillClassName, profileLinks } from '@/lib/site-data'

type ProfileLinksProps = {
  className?: string
  align?: 'start' | 'center'
  /** Render links as siblings (e.g. inside the hero button row). */
  inline?: boolean
}

function ScholarOrcidLinks() {
  return (
    <>
      <a
        href={profileLinks.googleScholar}
        target="_blank"
        rel="noopener noreferrer"
        className={outlinePillClassName}
      >
        <GoogleScholarIcon />
        <span>Google Scholar</span>
      </a>
      <a
        href={profileLinks.orcid}
        target="_blank"
        rel="noopener noreferrer"
        className={outlinePillClassName}
      >
        <OrcidIcon />
        <span>ORCID</span>
      </a>
    </>
  )
}

export function ProfileLinks({
  className = '',
  align = 'center',
  inline = false,
}: ProfileLinksProps) {
  if (inline) {
    return <ScholarOrcidLinks />
  }

  const alignClass = align === 'start' ? 'justify-start' : 'justify-center'

  return (
    <div
      className={`flex flex-wrap gap-4 ${alignClass} ${className}`.trim()}
    >
      <ScholarOrcidLinks />
    </div>
  )
}
