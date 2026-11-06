import Link from 'next/link'
import { withBasePath } from '@/lib/site-data'
import { ForwardOnLoad } from './forward-on-load'

/**
 * Static-host forwarding page for a retired URL. GitHub Pages cannot send
 * HTTP redirects, so this uses an immediate meta refresh, a client-side
 * replace() as a fallback, and a visible link. It is not an HTTP 301.
 */
export function ForwardingPage({ to, label }: { to: string; label: string }) {
  const target = withBasePath(to)
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <ForwardOnLoad to={target} />
      <div className="pt-14">
        <h1 className="text-2xl font-semibold tracking-tight">This page has moved</h1>
        <p className="mt-3">
          Continue to{' '}
          <Link href={to} className="text-link">
            {label}
          </Link>
          .
        </p>
      </div>
    </>
  )
}
