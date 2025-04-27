'use client'

import { motion } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'
import { NeuralNetwork } from './neural-network'
import Image from 'next/image'

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
          className="flex flex-col items-center"
        >
          <div className="mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image 
              src="https://media.licdn.com/dms/image/v2/D5603AQHD3VFJeWsgWg/profile-displayphoto-shrink_400_400/B56ZZU7l2NHQAg-/0/1745181635193?e=1750896000&v=beta&t=sKAd3u8iBcO6-p9TxhHmpYlRE6PYWVScr2EH3YRXUDQ" 
              alt="Kamran Hussain" 
              width={150} 
              height={150}
              className="rounded-full"
              unoptimized
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Kamran Hussain
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
            Aspiring Computational Neuroscientist & ML Researcher
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
            href="mailto:kahussai@usc.edu"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  )
} 