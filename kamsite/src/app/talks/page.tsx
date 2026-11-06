import { Metadata } from 'next'
import { ForwardingPage } from '@/components/forwarding-page'

// Retired Talks page: talks and posters now live on the Research page.
export const metadata: Metadata = {
  title: 'Moved',
  robots: { index: false, follow: true },
  alternates: { canonical: '/research/' },
}

export default function TalksPage() {
  return <ForwardingPage to="/research/#talks" label="Talks on the Research page" />
}
