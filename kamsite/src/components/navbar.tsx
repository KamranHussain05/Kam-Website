'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { navItems, siteName } from '@/lib/site-data'

function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

/**
 * Static header. With three destinations the navigation stays visible and
 * wraps on narrow screens instead of hiding behind a menu button.
 */
export function Navbar() {
  const pathname = normalize(usePathname() ?? '/')

  return (
    <header className="border-b border-border">
      <div className="page-container flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          {siteName}
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 sm:gap-6 text-[0.95rem]">
              {navItems.map((item) => {
                const active = normalize(item.href) === pathname
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`inline-block py-2 border-b-2 transition-colors ${
                        active
                          ? 'border-primary text-foreground font-medium'
                          : 'border-transparent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
