'use client'

import { motion } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'
import { NeuralNetwork } from './neural-network'

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NeuralNetwork />
      </div>
      
      <div className="relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Kamran Hussain
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
            Neuroscience Researcher & AI Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#about"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  )
} 