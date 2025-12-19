'use client'

import { motion } from 'framer-motion'
import { Brain, Cpu, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const threads = [
  {
    title: 'Speech Neuroprosthetics',
    subtitle: 'Decoding Brain-to-Text at Stanford NPTL',
    icon: Brain,
    problem: 'Current speech BCIs are often too slow for natural conversation.',
    built: 'A real-time streaming inference pipeline with low-latency text feedback loops.',
    evidence: '147 wpm imagined speech brain-to-text decoding reached in online demos at Stanford NPTL.',
    link: '/research#speech-bci'
  },
  {
    title: 'Organoid Foundation Models',
    subtitle: 'Neural Data Science at Braingeneers/UCSC',
    icon: Cpu,
    problem: 'Neural activity is complex and hard to predict, even in simple systems like organoids.',
    built: 'An autoregressive foundation model that captures neural dynamics and predicts the activity of organoids.',
    evidence: 'A single model that generalizes to unseen organoids and models dynamics; paired with an RL-based stimulation patterning algorithm to improve goal-directed training.',
    link: '/research#organoids'
  }
]

export function ResearchThreads() {
  return (
    <section id="research" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Tracks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My work focuses on two primary threads: decoding speech from the brain and 
            modeling the dynamics of cortical organoids.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {threads.map((thread, index) => (
            <motion.div
              key={thread.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <thread.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{thread.title}</h3>
                  <p className="text-primary font-medium">{thread.subtitle}</p>
                </div>
              </div>

              <div className="space-y-6 mb-8 flex-grow">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">Problem</h4>
                  <p className="text-muted-foreground">{thread.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">What I Built</h4>
                  <p className="text-muted-foreground">{thread.built}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">Output</h4>
                  <p className="font-medium">{thread.evidence}</p>
                </div>
              </div>

              <Link
                href={thread.link}
                className="inline-flex items-center text-primary font-semibold hover:underline group"
              >
                Explore this track
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

