'use client'

import { motion } from 'framer-motion'
import { Presentation, FileText, Calendar, MapPin, ExternalLink } from 'lucide-react'

const talks = [
  {
    title: 'Advancing Speech BCIs Towards Conversational Rates in People with Paralysis',
    venue: 'BCI Society Conference, Research Plenary Talk',
    date: 'Jun 2025',
    location: 'Banff, Canada',
    type: 'Invited Talk',
    link: '#'
  },
  {
    title: 'Generative Foundation Model for Cortical Organoid Electrophysiology',
    venue: 'UCSC ACM Undergraduate Research Conference, Keynote',
    date: 'May 2024',
    location: 'Santa Cruz, CA',
    type: 'Keynote Talk',
    link: '#'
  }
]

const posters = [
  {
    title: 'Towards Conversational Rate Speech Brain–Computer Interfaces',
    venue: 'Simons Foundation SURFiN Symposium',
    date: 'Apr 2025',
    location: 'New York, NY',
    pdf: '#'
  },
  {
    title: 'Does Speech Rate Matter for Intracortical Speech BCIs?',
    venue: 'Wu Tsai Annual Symposium',
    date: 'Oct 2024',
    location: 'Stanford, CA',
    pdf: '#'
  },
  {
    title: 'Building a Baseline for Neural Activity Prediction and Analysis: Machine Learning on HD-MEA Data',
    venue: 'ACM Undergraduate Research Conference',
    date: 'May 2024',
    location: 'Santa Cruz, CA',
    pdf: '#'
  },
  {
    title: 'LLM Automated Control of an IoT Integrated System',
    venue: 'ACM Undergraduate Research Conference',
    date: 'May 2024',
    location: 'Santa Cruz, CA',
    pdf: '#'
  }
]

export default function TalksContent() {
  return (
    <div className="py-12 space-y-24">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Talks & Posters</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Presenting research at the intersection of machine learning and neuroscience.
        </p>
        <p className="text-sm italic text-muted-foreground">
          Manuscripts in preparation; preprints will appear here when public.
        </p>
      </section>

      {/* Invited Talks */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold flex items-center">
          <Presentation className="w-8 h-8 mr-4 text-primary" />
          Invited Talks
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {talk.type}
                  </div>
                  <h3 className="text-xl font-bold">{talk.title}</h3>
                  <p className="text-primary font-medium">{talk.venue}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {talk.date}</span>
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {talk.location}</span>
                  </div>
                </div>
                {talk.link !== '#' && (
                  <a href={talk.link} className="inline-flex items-center text-primary hover:underline font-medium">
                    View Slides <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Posters */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold flex items-center">
          <FileText className="w-8 h-8 mr-4 text-primary" />
          Research Posters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posters.map((poster, index) => (
            <motion.div
              key={poster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl border border-border flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-bold leading-tight">{poster.title}</h3>
                <p className="text-sm text-muted-foreground">{poster.venue}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {poster.date}</span>
                  <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {poster.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

