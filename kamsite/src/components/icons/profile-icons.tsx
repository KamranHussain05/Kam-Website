type IconProps = {
  className?: string
}

/** Google Scholar mark (Simple Icons–style), inherits `currentColor`. */
export function GoogleScholarIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 24a7 7 0 0 1-7-7c0-1.933.793-3.68 2.07-4.95L12 12l4.93 4.05A6.97 6.97 0 0 1 19 17a7 7 0 0 1-7 7zm0-24L5.07 4.05A6.97 6.97 0 0 0 5 10a7 7 0 0 0 14 0 6.97 6.97 0 0 0-.07-5.95L12 0z" />
    </svg>
  )
}

/** ORCID iD mark (Simple Icons), inherits `currentColor`. */
export function OrcidIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
    </svg>
  )
}
