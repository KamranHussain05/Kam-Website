import ProjectsContent from '@/components/projects-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Research software for neural spike data, including SpikeLab and SpikeData, and other machine learning and app projects.',
  alternates: { canonical: '/projects/' },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
