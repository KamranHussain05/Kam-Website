'use client'

import { motion } from 'framer-motion'
import { NeuralNetwork } from './neural-network'
import Image from 'next/image'
import { FourierName } from './FourierName'

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32"> {/* Increased padding top to clear header */}
      <div className="absolute inset-0 z-0">
        <NeuralNetwork />
      </div>
      
      <div className="relative z-10 text-center space-y-8 w-full max-w-4xl px-4"> {/* Added w-full, max-w, px */}
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

          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
            Computational neuroscience & ML, from organoids to conversational-rate speech BCIs
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
            href="mailto:kahussai@ucsc.edu"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  )
}