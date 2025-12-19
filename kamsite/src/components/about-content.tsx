'use client'

import { motion } from 'framer-motion'
import { Sword, Rocket, Wrench, Quote, Zap, Code2, Users } from 'lucide-react'
import Image from 'next/image'

const principles = [
  {
    icon: Zap,
    title: 'Tight Feedback Loops',
    description: 'Whether it is a brain-to-text decoder or a fencer’s parry, I believe progress happens fastest when the distance between action and insight is minimized.'
  },
  {
    icon: Code2,
    title: 'Ship the Prototype',
    description: 'I value "weird" prototypes that solve real problems. A working, messy tool is infinitely more valuable than a perfect plan that never leaves the draft.'
  },
  {
    icon: Users,
    title: 'Interdisciplinary Translation',
    description: 'The most interesting problems live at the seams. I aim to be the bridge between wet-lab biology, clinical, and machine learning.'
  }
]

export default function AboutContent() {
  return (
    <div className="py-12 space-y-24">
      {/* Bio Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I am a researcher and engineer obsessed with the interface between minds and machines. 
            Currently, I am navigating the intersection of computational neuroscience and ML 
            at UCSC and Stanford. I am a student in applied math at UCSC and a SURFiN Research Fellow at Stanford.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey started with a curiosity about how we can restore ability to those in need 
            and provide people with the tools they need to be the best version of themselves. 
            Both of these principles serve as the basis for my research and for the startup I founded.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border-4 border-primary shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image 
              src="https://med.stanford.edu/services/api/cap/profiles/photocache.350483.jpg" 
              alt="Kamran Hussain" 
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs hidden md:block">
            <Quote className="w-8 h-8 text-primary mb-2 opacity-50" />
            <p className="text-sm italic font-medium text-muted-foreground">
              &quot;The best way to predict the future is to build it--and then run a massive regression analysis to find out whats next&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Personality / Interests Section */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center">How I Operate</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-3xl border border-border space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Sword className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">The Fencer</h3>
            <p className="text-muted-foreground">
              Competitive fencing (USA Fencing D1) taught me to maintain precision under pressure 
              and respect the value of fast, iterative feedback loops.
            </p>
          </div>
          <div className="bg-card p-8 rounded-3xl border border-border space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">The Sci-Fi Nerd</h3>
            <p className="text-muted-foreground">
              I am obsessed with the hypothetical future of minds and machines. 
              Yes, I noticed the irony of building what I used to read about.
            </p>
          </div>
          <div className="bg-card p-8 rounded-3xl border border-border space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">The Maker</h3>
            <p className="text-muted-foreground">
              From cosplay to lab robotics, I ship &quot;weird&quot; prototypes until they become 
              useful tools. I believe in learning by breaking things.
            </p>
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="bg-muted/50 -mx-4 px-4 py-24">
        <div className="container mx-auto max-w-4xl space-y-12">
          <h2 className="text-3xl font-bold text-center">Working Principles</h2>
          <div className="space-y-8">
            {principles.map((p, i) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 font-bold">
                  {i + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-muted-foreground text-lg">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

