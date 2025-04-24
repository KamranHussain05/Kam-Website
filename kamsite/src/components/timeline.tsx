'use client'

import { motion } from 'framer-motion'

const timelineData = [
  {
    year: '2023',
    title: 'Research Scientist',
    company: 'Neural Dynamics Lab',
    description: 'Leading research in neural network architectures and brain-computer interfaces.',
  },
  {
    year: '2022',
    title: 'AI Developer',
    company: 'Tech Innovations Inc.',
    description: 'Developed machine learning models for neuroscience applications.',
  },
  {
    year: '2021',
    title: 'Graduate Researcher',
    company: 'University of Technology',
    description: 'Focused on computational neuroscience and neural networks.',
  },
  {
    year: '2020',
    title: 'Software Engineer',
    company: 'AI Solutions',
    description: 'Built AI systems for healthcare and neuroscience research.',
  },
]

export function Timeline() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-8 text-center">Professional Journey</h3>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
        
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative mb-8 ${
              index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'
            } md:w-1/2`}
          >
            <div className="flex items-center">
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                }`}
              >
                <span className="text-sm font-semibold text-primary">{item.year}</span>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-muted-foreground">{item.company}</p>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-primary absolute left-1/2 transform -translate-x-1/2" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 