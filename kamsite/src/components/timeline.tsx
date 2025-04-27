'use client'

import { motion } from 'framer-motion'

const timelineData = [
  {
    year: '2024',
    title: 'SURFIN Research Fellow',
    company: 'Neural Prosthetics Translational Lab, Stanford University',
    description: 'Conversational rate speech BCIs in People with Paralysis.'
  },
  {
    year: '2023',
    title: 'Neural Research Engineer',
    company: 'Braingeneers, UC Santa Cruz Genomics Institute',
    description: 'Foundation models for cortical organoid electrophysiology.',
  },
  {
    year: '2023',
    title: 'Founder and CEO',
    company: 'TensorLearn LLC',
    description: 'Real time, generative interfaces for education.',
  },
  {
    year: '2022',
    title: 'Flight Dynamics, Trajectory, and Controls Intern',
    company: 'NASA Ames Research Center',
    description: 'Language modeling for autonomous vehicle integration.',
  },
  {
    year: '2022',
    title: 'Neural Data Science Intern',
    company: 'Translational Neuroengineering Lab, UC San Diego',
    description: 'Neuropixels for songbird vocal neuroprosthetics.',
  },
]

// Neuron Component
const Neuron = ({ index, total, isRightSide }: { index: number; total: number; isRightSide: boolean }) => {
  // Calculate connection points for dendrites/axons
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // SVG Viewbox: "0 0 10 12"
  // Center of SVG: x=5 (neuron center)
  // Determine where the path should visually connect to the main timeline axis
  const connectionPointX = isRightSide ? 3 : 7; // Closer to the edge representing the main line.
  const neuronCenterX = 5;

  // Upper Path (connecting from neuron above, ends at top of this SVG y=0)
  // Starts near connection point bottom (y=12), ends at neuron center top (y=0)
  const upperPathD = `M${connectionPointX} 12 Q${connectionPointX} 8 ${neuronCenterX} 4 Q${neuronCenterX + (isRightSide ? 1 : -1)} 2 ${neuronCenterX} 0`;

  // Lower Path (connecting to neuron below, starts at top of this SVG y=0)
  // Starts at neuron center top (y=0), ends near connection point bottom (y=12)
  const lowerPathD = `M${neuronCenterX} 0 Q${neuronCenterX + (isRightSide ? 1 : -1)} 2 ${neuronCenterX} 4 Q${connectionPointX} 8 ${connectionPointX} 12`;

  return (
    <div className="relative h-6"> {/* Ensure container has height */}
      {/* Cell body (soma) */}
      <div className="w-6 h-6 rounded-full bg-primary absolute left-1/2 transform -translate-x-1/2 z-10 shadow-glow" />

      {/* Dendrites and axons */}
      {!isFirst && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-12 -top-12"> {/* Container for upper connection */}
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute left-0 bottom-0" preserveAspectRatio="none"> {/* Position SVG, allow scaling if needed */}
            <path
              d={upperPathD}
              stroke="rgba(96, 165, 250, 0.4)"
              strokeWidth="0.7"
              fill="none"
            />
          </svg>
        </div>
      )}

      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-12 top-6"> {/* Container for lower connection */}
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute left-0 top-0" preserveAspectRatio="none"> {/* Position SVG, allow scaling if needed */}
            <path
              d={lowerPathD}
              stroke="rgba(96, 165, 250, 0.4)"
              strokeWidth="0.7"
              fill="none"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export function Timeline() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-8 text-center">Professional Journey</h3>
      <div className="relative">
        {/* Main connection line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

        {timelineData.map((item, index) => {
          const isRightSide = index % 2 === 0;
          return (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-16 flex ${
                isRightSide ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center`} // Use items-center for vertical alignment
            >
              <div
                className={`w-full md:w-[calc(50%-2rem)] px-4 ${ // Adjusted width
                  isRightSide ? 'md:text-right md:pr-8' : 'md:pl-8' // Adjusted padding
                }`}
              >
                <span className="text-sm font-semibold text-primary">{item.year}</span>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-muted-foreground">{item.company}</p>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>

              {/* Neuron positioned slightly off-center */}
              <div className={`absolute top-1/2 z-10 ${ // Position vertically centered relative to text block
                isRightSide ? 'left-[calc(50%+12px)]' : 'left-[calc(50%-12px)]' // Shift horizontal position
              } transform -translate-x-1/2 -translate-y-1/2`}> {/* Center the neuron div itself */}
                <Neuron index={index} total={timelineData.length} isRightSide={isRightSide} />
              </div>

              {/* Spacer div */}
              <div className="w-full md:w-[calc(50%-2rem)]"></div>

            </motion.div>
          );
        })}
      </div>
      <style jsx global>{`
        .shadow-glow {
          box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
        }
      `}</style>
    </div>
  )
} 