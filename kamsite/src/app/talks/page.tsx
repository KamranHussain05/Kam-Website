import TalksContent from '@/components/talks-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Talks & Posters | Research Presentations',
  description: 'Public trail of evidence: research posters and invited talks at major BCI and AI conferences.'
}

export default function TalksPage() {
  return <TalksContent />
}
