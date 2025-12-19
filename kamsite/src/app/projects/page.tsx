import ProjectsContent from '@/components/projects-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Case Studies in BCI & AI',
  description: 'Detailed case studies of systems built at the intersection of neuroscience and machine learning.'
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
