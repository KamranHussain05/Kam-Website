import AboutContent from '@/components/about-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Story & Principles',
  description: 'The story behind my work, my personal interests, and the principles that drive my research and engineering.'
}

export default function AboutPage() {
  return <AboutContent />
}
