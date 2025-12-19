'use client'

import { motion } from 'framer-motion'
import { NeuralNetwork } from './neural-network'
import Image from 'next/image'
import { FourierName } from './FourierName'
import { Mail, Github, Linkedin, CheckCircle2, Twitter } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32 pb-32 md:pb-48">
      <div className="absolute inset-0 z-0">
        <NeuralNetwork />
      </div>
      
      <div className="relative z-10 text-center space-y-8 w-full max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image 
              src="https://med.stanford.edu/services/api/cap/profiles/photocache.350483.jpg" 
              alt="Kamran Hussain" 
              width={150} 
              height={150}
              className="rounded-full"
              unoptimized
            />
          </div>
          
          <div className="w-full max-w-3xl mx-auto h-[80px] md:h-[120px] my-4">
            <FourierName />
          </div>

          <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
            Computational neuroscience & ML, from organoids to conversational-rate speech BCIs
          </p>

          <div className="mt-8 space-y-3 text-left max-w-2xl mx-auto">
            <div className="flex items-start space-x-3 text-lg">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span><strong>147 wpm</strong> imagined speech brain-to-text decoding (online demos) at <strong>Stanford NPTL</strong></span>
            </div>
            <div className="flex items-start space-x-3 text-lg">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span><strong>HD-MEA organoid foundation models</strong> + SpikeData toolkit (Braingeneers/UCSC)</span>
            </div>
            <div className="flex items-start space-x-3 text-lg">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span><strong>Generative Interfaces</strong> at <strong>TensorLearn</strong></span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:kahussai@ucsc.edu"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/kamranhussain05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/kamran-hussain1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/Kamhn123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            <Twitter className="w-4 h-4" />
            <span>X (Twitter)</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}