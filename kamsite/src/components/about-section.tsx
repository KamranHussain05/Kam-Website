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
            I&apos;m a computational neuroscience and machine learning researcher trying to turn neural spikes
            into useful tools. I work on conversational-rate speech BCIs at Stanford&apos;s Neural Prosthetics Translational Lab
            and foundation models for organoid electrophysiology with Braingeneers at UCSC, with prior stops at Tacit AI / Reflex,
            NASA Ames, and my startup TensorLearn.
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
              I study how neural systems compute and how we can borrow those ideas to build smarter ML models.
              Right now I&apos;m especially interested in:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
              <li>Brain-Computer Interfaces (including conversational-rate speech BCIs)</li>
              <li>Foundation models for neuroscience (e.g., HD-MEA organoid recordings)</li>
              <li>Neuroscience-inspired machine learning and representation learning</li>
              <li>How neural dynamics drift over time while behavior stays stable</li>
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
              When I&apos;m not debugging neural decoders, you can usually find me:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
              <li>On the piste as an epee fencer and coach</li>
              <li>Deep in Star Wars and sci-fi (Thrawn, ROTS, Three-Body Problem, Sherlock Holmes)</li>
              <li>Building cosplay, robots, and random automations you can trace back to my GitHub</li>
            </ul>
          </motion.div>
        </div>

        <Timeline />
      </div>
    </section>
  )
} 