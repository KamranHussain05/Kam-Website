import ResearchContent from '@/components/research-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research | Speech BCIs & Organoid Foundation Models',
  description: 'Exploring the intersection of neuroscience and AI through speech neuroprosthetics and organoid modeling.'
}

export default function ResearchPage() {
  return <ResearchContent />
}
