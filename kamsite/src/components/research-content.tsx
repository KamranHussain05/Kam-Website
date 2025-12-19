'use client'

import { motion } from 'framer-motion'
import { Brain, Cpu, Zap, Microscope, Database, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ResearchContent() {
  return (
    <div className="py-12 space-y-24">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Research</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Bridging the gap between biological and artificial intelligence through 
          advanced decoding and modeling techniques.
        </p>
      </section>

      {/* Track 1: Speech BCI */}
      <section id="speech-bci" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
            <Brain className="w-4 h-4" />
            <span>Speech Neuroprosthetics</span>
          </div>
          <h2 className="text-3xl font-bold">Conversational-Rate Brain-to-Text Decoding</h2>
          <p className="text-lg text-muted-foreground">
            Working at the Stanford Neural Prosthetics Translational Lab (NPTL), 
            I develop systems that decode intended imagined speech from neural activity in 
            real-time, aiming to restore communication for people with paralysis.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold flex items-center">
                <Zap className="w-4 h-4 mr-2 text-primary" />
                Real-time Decoding
              </h4>
              <p className="text-sm text-muted-foreground">
                Prototyped systems reaching 147 wpm in online demos, significantly 
                faster than prior baselines. 11% WER offline.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center">
                <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                Temporal Coding
              </h4>
              <p className="text-sm text-muted-foreground">
                Investigating how single neurons in orofacial motor cortex encode 
                speech rate.
              </p>
            </div>
          </div>
        </div>
        <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border flex items-center justify-center relative group">
          <Image
            src="https://pbs.twimg.com/media/F4OqCqabkAAP5Dz?format=jpg&name=4096x4096"
            alt="Visualizing the 147 wpm streaming inference pipeline"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white text-sm font-medium">147 wpm streaming inference pipeline</p>
          </div>
        </div>
      </section>

      {/* Track 2: Organoids */}
      <section id="organoids" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 aspect-video bg-muted rounded-2xl overflow-hidden border border-border flex items-center justify-center relative group">
          <Image
            src="https://www.biorxiv.org/content/biorxiv/early/2024/12/12/2024.12.07.627350/F1.large.jpg"
            alt="Autoregressive modeling of organoid electrophysiology"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4">
            <p className="text-white text-sm font-medium">Autoregressive modeling of organoid electrophysiology</p>
          </div>
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
            <Microscope className="w-4 h-4" />
            <span>Biological AI</span>
          </div>
          <h2 className="text-3xl font-bold">Organoid Foundation Models</h2>
          <p className="text-lg text-muted-foreground">
            At Braingeneers (UCSC Genomics Institute), I build foundation models 
            for cortical organoids to understand self-organizing neural computation.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Database className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold">SpikeData & Tooling</h4>
                <p className="text-sm text-muted-foreground">
                  Co-leading SpikeData to simplify analysis of intrinsic neural recordings 
                  across large-scale HD-MEA datasets.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Cpu className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold">Closed-loop Stimulation</h4>
                <p className="text-sm text-muted-foreground">
                  Applying models to RL-based goal-directed stimulation patterns 
                  in organoids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 border-t border-border">
        <h3 className="text-2xl font-bold mb-6">Interested in collaborating?</h3>
        <Link 
          href="mailto:kahussai@ucsc.edu"
          className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}

