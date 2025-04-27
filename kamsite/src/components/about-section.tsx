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
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm an aspiring computational neuroscientist and machine learning researcher 
            passionate about understanding the brain and building intelligent systems. 
            My work combines cutting-edge machine learning techniques with neuroscience research 
            to push the boundaries of what's possible. Some of the work I've done to push the boundaries
            of both machine learning and neuroscience includes restoring communication via  a
            conversational speed speech brain computer interface and a foundation model for electrophysiology.
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
              <li>Brain-Computer Interfaces</li>
              <li>Foundation Models for Neuroscience</li>
              <li>Neuroscience Inspired Machine Learning</li>
              <li>Representational Drift</li>
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
              <li>Competitively fencing</li>
              <li>Watching Star Wars</li>
              <li>Exploring new technologies</li>
              <li>Building costumes, robots, or automating my life</li>
            </ul>
          </motion.div>
        </div>

        <Timeline />
      </div>
    </section>
  )
} 