'use client'

import { motion } from 'framer-motion'
import { Video, Github, ExternalLink, Trophy, User } from 'lucide-react'

const artifacts = [
  {
    title: 'BCI Award',
    type: 'Video',
    icon: Video,
    link: 'https://www.youtube.com/watch?v=zlAY-i75eRI',
    color: 'bg-red-500/10 text-red-500'
  },
  {
    title: 'Sushi Hackathon',
    type: 'First Place',
    icon: Trophy,
    link: 'https://fsi.stanford.edu/news/sushi-hackathon-melds-ai-sustainable-fishing-and-civic-innovation',
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    title: 'Baskin Engineering Profile',
    type: 'Student Voice',
    icon: User,
    link: 'https://engineering.ucsc.edu/voices/kamran-hussain-undergraduate-student/',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'SpikeData Toolkit',
    type: 'GitHub Repo',
    icon: Github,
    link: 'https://github.com/braingeneers/spikedata',
    color: 'bg-purple-500/10 text-purple-500'
  }
]

export function FeaturedArtifacts() {
  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="shrink-0">
            <h3 className="text-xl font-bold">Featured Artifacts</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {artifacts.map((artifact) => (
              <a
                key={artifact.title}
                href={artifact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-muted transition-colors group border border-transparent hover:border-border"
              >
                <div className={`w-10 h-10 ${artifact.color} rounded-lg flex items-center justify-center`}>
                  <artifact.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold flex items-center">
                    {artifact.title}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-xs text-muted-foreground">{artifact.type}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

