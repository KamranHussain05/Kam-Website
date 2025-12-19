'use client'

import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function CoolShit() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-muted/30 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-center group focus:outline-none"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold">Cool Shit (That you Missed!)</h2>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              >
                <ChevronDown size={32} />
              </motion.div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto italic mb-16">
              &quot;Wait, how is that actually working?&quot; — You...hopefully.
            </p>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-8">
                {/* Neural Dynamics Section */}
                <div className="space-y-6 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-500">Neural Timeline Dynamics</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    The neurons in the Professional Journey section aren&apos;t just static icons—they are procedural agents that 
                    dynamically connect and &quot;fire&quot; spikes (action potentials) to one another.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-card p-6 rounded-xl border border-blue-500/20 shadow-sm">
                      <h4 className="font-semibold mb-2">Procedural Morphology</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Somas are irregular polygons generated with radius noise, and axons/dendrites use Quadratic Bézier curves with 
                        randomized midpoints for biological jitter.
                      </p>
                      <div className="bg-muted/50 py-3 px-4 rounded-lg flex justify-center">
                        <BlockMath math="\vec{P}_{control} = \vec{P}_{mid} + (r - 0.5) \cdot w \cdot L \cdot \hat{n}_{\perp}" />
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-blue-500/20 shadow-sm">
                      <h4 className="font-semibold mb-2">Synthetic Spiking</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Action potentials (APs) follow a custom waveform logic that simulates the ionic flux 
                        of a real neuron (depolarization, repolarization, and undershoot).
                      </p>
                      <div className="bg-muted/50 py-3 px-4 rounded-lg space-y-2">
                        <div className="text-center">
                          <span className="text-xs text-muted-foreground block mb-1">Depolarization Phase:</span>
                          <InlineMath math="V(p) = -\left(\frac{p-0.3}{0.15}\right) \cdot h" />
                        </div>
                        <div className="text-center">
                          <span className="text-xs text-muted-foreground block mb-1">Hyperpolarization Phase:</span>
                          <InlineMath math="V(p) = -h + \left(\frac{p-0.45}{0.15}\right) \cdot 1.3h" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fourier Name Section */}
                <div className="space-y-6 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600">Fourier Transform Name</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    The animated name at the top is a live reconstruction of my signature using 
                    the Discrete Fourier Transform (DFT). It&apos;s built from rotating epicycles.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-card p-6 rounded-xl border border-blue-600/20 shadow-sm">
                      <h4 className="font-semibold mb-2">Discrete Fourier Transform</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        We sample <InlineMath math="N" /> points from the SVG path as complex numbers <InlineMath math="z_n = x_n + i y_n" />, 
                        then solve for the frequency coefficients <InlineMath math="X_k" />.
                      </p>
                      <div className="bg-muted/50 py-3 px-4 rounded-lg flex justify-center">
                        <BlockMath math="X_k = \frac{1}{N} \sum_{n=0}^{N-1} z_n \cdot e^{-i \frac{2\pi kn}{N}}" />
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-blue-600/20 shadow-sm">
                      <h4 className="font-semibold mb-2">Epicyclic Reconstruction</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        The final animation is a sum of <InlineMath math="M" /> rotating vectors. The &quot;pen&quot; position <InlineMath math="f(t)" /> is 
                        the sum of these complex exponentials.
                      </p>
                      <div className="bg-muted/50 py-3 px-4 rounded-lg flex justify-center">
                        <BlockMath math="f(t) = \sum_{k=0}^{M} A_k e^{i(\omega_k t + \phi_k)}" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
