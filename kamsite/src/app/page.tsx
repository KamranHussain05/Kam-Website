import { Hero } from '@/components/hero'
import { FeaturedProjects } from '@/components/featured-projects'
import { ResearchThreads } from '@/components/research-threads'
import { FeaturedArtifacts } from '@/components/featured-artifacts'
import { Timeline } from '@/components/timeline'
import { CoolShit } from '@/components/cool-shit'

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <FeaturedArtifacts />
      <ResearchThreads />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          </div>
          <Timeline />
        </div>
      </section>
      <FeaturedProjects />
      <CoolShit />
    </div>
  )
} 