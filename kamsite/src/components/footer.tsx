import Link from 'next/link'
import { navItems, shortDescription, siteName } from '@/lib/site-data'
import { ProfileLinks } from '@/components/profile-links'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-container py-8 text-[0.95rem] text-muted-foreground">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-medium text-foreground">{siteName}</p>
            <p>{shortDescription}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <ProfileLinks className="text-[0.95rem]" />
          <p>© {new Date().getFullYear()} {siteName}</p>
        </div>
        <p className="mt-4 text-xs">
          <Link href="/podcast/" className="hover:text-foreground hover:underline transition-colors">
            The Kam Show podcast archive
          </Link>
        </p>
      </div>
    </footer>
  )
}
