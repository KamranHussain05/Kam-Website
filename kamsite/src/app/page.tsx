'use client'

import { Hero } from '@/components/hero'
import { FeaturedProjects } from '@/components/featured-projects'
import { ResearchHighlights } from '@/components/research-highlights'
import { AboutSection } from '@/components/about-section'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <AboutSection />
      <ResearchHighlights />
      <FeaturedProjects />
    </div>
  )
} 