import ResearchContent from '@/components/research-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research | Preprints & Publications',
  description:
    'Preprints on spike population forecasting, neural benchmarks, and agentic spike analysis, alongside speech BCI work at Stanford NPTL and UCSC Braingeneers.',
}

export default function ResearchPage() {
  return <ResearchContent />
}
