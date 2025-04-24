'use client'

import { motion } from 'framer-motion'
import { Timeline } from './timeline'

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a neuroscience researcher and AI developer passionate about understanding
            the brain and building intelligent systems. My work combines cutting-edge
            machine learning techniques with neuroscience research to push the boundaries
            of what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Research Focus</h3>
            <p className="text-muted-foreground">
              My research focuses on understanding neural mechanisms and developing
              AI systems that can learn and adapt like the human brain. I'm particularly
              interested in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Neural network architectures</li>
              <li>Brain-computer interfaces</li>
              <li>Machine learning for neuroscience</li>
              <li>Computational neuroscience</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Personal Interests</h3>
            <p className="text-muted-foreground">
              When I'm not researching or coding, you can find me:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Competitive fencing</li>
              <li>Star Wars enthusiast</li>
              <li>Exploring new technologies</li>
              <li>Contributing to open-source projects</li>
            </ul>
          </motion.div>
        </div>

        <Timeline />
      </div>
    </section>
  )
} 