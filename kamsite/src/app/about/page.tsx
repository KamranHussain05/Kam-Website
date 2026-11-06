import { Metadata } from 'next'
import { ForwardingPage } from '@/components/forwarding-page'

// Retired About page: forwards to the homepage, which now carries the background.
export const metadata: Metadata = {
  title: 'Moved',
  robots: { index: false, follow: true },
  alternates: { canonical: '/' },
}

export default function AboutPage() {
  return <ForwardingPage to="/" label="the homepage" />
}
