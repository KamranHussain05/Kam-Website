import { Hero } from '@/components/hero'
import { ResearchThreads } from '@/components/research-threads'
import { Background } from '@/components/background'
import { FeaturedProjects } from '@/components/featured-projects'

export default function Home() {
  return (
    <>
      <Hero />
      <ResearchThreads />
      <Background />
      <FeaturedProjects />
      <section aria-label="Interests" className="border-t border-border pt-10">
        <p className="max-w-[42rem]">Outside research, I fence and enjoy science fiction.</p>
      </section>
    </>
  )
}
