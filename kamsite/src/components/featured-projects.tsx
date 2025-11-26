'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'StatScanner',
    description: 'iOS app that scans tables from paper and turns them into interactive stats visualizations using custom OCR + CoreML.',
    tags: ['Swift', 'Computer Vision', 'CoreML'],
    github: 'https://github.com/KamranHussain05/StatScanner',
    demo: ''
  },
  {
    title: 'Polaris',
    description: 'On-device predictive maintenance for fishing vessels using sensor fusion and edge ML.',
    tags: ['Embedded C++', 'Python', 'Sensor Fusion'],
    github: 'https://github.com/KamranHussain05',
    demo: ''
  },
  {
    title: 'EMG Personal Computer Use',
    description: 'EMG wristband that turns muscle activity into cursor control and clicks, built as a teaching BCI project.',
    tags: ['Python', 'ML', 'Neuroscience'],
    github: 'https://github.com/KamranHussain05/NeuroTechSCPersonalUse',
    demo: ''
  },
  {
    title: 'Gesture Driven Augmented Reality Navigation',
    description: 'Computer-vision AR navigation system that won first place at HelixHacks II using Unity and 3D world modeling.',
    tags: ['Python', 'Computer Vision', 'Unity', '3D Modeling'],
    github: 'https://github.com/KamranHussain05/facial-navigation-ar',
    demo: ''
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent projects at the intersection of neuroscience and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
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
          href="https://github.com/KamranHussain05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            View All Projects
            <Github className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
} 