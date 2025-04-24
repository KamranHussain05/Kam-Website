'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Cpu, Network } from 'lucide-react'

const researchItems = [
  {
    icon: Brain,
    title: 'Neural Dynamics',
    description: 'Researching the complex dynamics of neural networks in the brain and their applications in AI.',
  },
  {
    icon: Code,
    title: 'ML for Neuroscience',
    description: 'Developing machine learning models to analyze and interpret neural data.',
  },
  {
    icon: Cpu,
    title: 'Brain-Computer Interfaces',
    description: 'Building interfaces that connect neural signals to computational systems.',
  },
  {
    icon: Network,
    title: 'Computational Models',
    description: 'Creating computational models to simulate and understand neural processes.',
  },
]

export function ResearchHighlights() {
  return (
    <section id="research" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of neuroscience and artificial intelligence
            through cutting-edge research and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Projects
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 