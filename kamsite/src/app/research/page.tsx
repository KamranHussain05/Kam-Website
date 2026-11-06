import ResearchContent from '@/components/research-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Preprints, talks, and posters on speech brain–computer interfaces, neural population forecasting, and tools for spike data analysis.',
  alternates: { canonical: '/research/' },
}

export default function ResearchPage() {
  return <ResearchContent />
}
