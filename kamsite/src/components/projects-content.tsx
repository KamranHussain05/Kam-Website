'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Layout, Target, Layers, Trophy } from 'lucide-react'

const projects = [
  {
    title: 'SpikeData',
    subtitle: 'Python-based module for neural data analysis pipelines',
    tldr: [
      'Flexible and robust module for creating spike sorting pipelines.',
      'Simplifies analysis of intrinsic neural recordings across large-scale HD-MEA datasets.',
      'Part of the Integrated Analysis Toolkit used by the Braingeneers group.'
    ],
    role: 'Developer',
    system: 'Raw Electrophysiology → Signal Processing → Spike Sorting → Analysis',
    results: 'Enabled scalable analysis for 1000+ channel neural recordings.',
    tags: ['Python', 'Neural Data Science', 'Software Engineering'],
    github: 'https://github.com/braingeneers/spikedata',
    link: '#'
  },
  {
    title: 'Polaris',
    subtitle: 'On-device AI for preventative maintenance for fishermen',
    tldr: [
      'Built an on-device AI system to monitor fishing equipment and predict maintenance needs.',
      'Won 1st place at Sushi Hackathon 2025.',
      'Optimized for low-power edge deployment on custom hardware.'
    ],
    role: 'Lead ML Engineer',
    system: 'Sensors → Edge AI → Real-time Maintenance Alerts',
    results: '1st Place Winner at Sushi Hackathon (2025).',
    tags: ['Edge AI', 'IoT', 'Python', 'Sensor Fusion'],
    github: 'https://github.com/KamranHussain05',
    link: '#'
  },
  {
    title: 'Sushi Agent',
    subtitle: 'Autonomous AI agents for coupon discovery',
    tldr: [
      'Developed agents that crawl and negotiate for private discount codes and coupons.',
      'Utilized LLM-based decision making for navigating complex web interfaces.',
      'Implemented automated validation and verification of discovered codes.'
    ],
    role: 'Lead ML Engineer',
    system: 'LLM Agents → Web Crawling → Coupon Validation',
    results: '2nd Place Winner at Sushi Hackathon (2024).',
    tags: ['LLM', 'Agents', 'Python', 'NLP'],
    github: 'https://github.com/KamranHussain05',
    link: '#'
  },
  {
    title: 'StatScanner',
    subtitle: 'Computer Vision for table digitization',
    tldr: [
      'iOS app that converts printed tables into interactive visualizations.',
      'Custom OCR pipeline optimized for tabular data structure.',
      'Real-time data visualization and CSV export functionality.'
    ],
    role: 'Lead Developer',
    system: 'Camera → OCR → Table Parsing → CoreML Visualization',
    results: 'Shipped to App Store; processed 10k+ scans with high structural accuracy.',
    tags: ['Swift', 'CoreML', 'Computer Vision', 'iOS'],
    github: 'https://github.com/KamranHussain05/StatScanner',
    link: '#'
  },
  {
    title: 'Rubauto',
    subtitle: 'Diffusion model for stylistic music generation',
    tldr: [
      'Built a generative model for creating music in specific artistic styles.',
      'Experimented with diffusion techniques for high-fidelity audio synthesis.',
      'Developed a custom training pipeline for style-specific music data.'
    ],
    role: 'Project Lead',
    system: 'Audio Data → Diffusion Model → Stylized Audio Output',
    results: 'Successfully generated high-fidelity stylistic variations of input tracks.',
    tags: ['Diffusion Models', 'PyTorch', 'Audio ML', 'Generative AI'],
    github: 'https://github.com/KamranHussain05',
    link: '#'
  },
  {
    title: 'Gesture-Driven AR Navigation',
    subtitle: 'CV-assisted spatial interaction',
    tldr: [
      'Created an augmented reality navigation system controlled by hand gestures.',
      'Implemented custom gesture recognition and mapping to 3D space.',
      'Built a low-latency AR overlay for intuitive spatial navigation.'
    ],
    role: 'Co-Developer',
    system: 'Camera → CV Pipeline → Gesture Mapping → AR Overlay',
    results: '1st Place at Helix Hacks II (2021).',
    tags: ['Computer Vision', 'AR/VR', 'Python', 'Unity'],
    github: 'https://github.com/KamranHussain05/facial-navigation-ar',
    link: '#'
  },
  {
    title: 'Project Tourist',
    subtitle: 'NLP-based personalized travel planner',
    tldr: [
      'Natural language interface for generating optimized travel itineraries.',
      'Integrated multiple APIs for real-time travel and lodging recommendations.',
      'Built a constraint-aware engine for personalized trip planning.'
    ],
    role: 'Co-Developer',
    system: 'NLP Engine → Recommendation Engine → Trip Generation',
    results: 'Provided users with optimized, personalized, and constraint-aware travel plans.',
    tags: ['NLP', 'Python', 'API Integration'],
    github: 'https://github.com/KamranHussain05',
    link: '#'
  },
  {
    title: 'Link Saver',
    subtitle: 'Academic productivity launchpad',
    tldr: [
      'Productivity tool for students to manage and quickly launch academic links.',
      'Designed for high-speed access to meetings, assignments, and resources.',
      'Simple, intuitive interface for organizing complex student workflows.'
    ],
    role: 'Co-Developer',
    system: 'Web App → Link Management → Quick Access UI',
    results: '3rd Place Winner at BAYCO Hackathon (2021).',
    tags: ['Productivity', 'Web', 'JavaScript', 'UX'],
    github: 'https://github.com/KamranHussain05',
    link: '#'
  },
  {
    title: 'Kam Show Podcast',
    subtitle: 'Science & engineering communication',
    tldr: [
      'Produced and hosted a podcast exploring cutting-edge science and tech.',
      'Featured interviews with researchers and engineers across various fields.',
      'Managed end-to-end production, from booking to audio engineering.'
    ],
    role: 'Host & Producer',
    system: 'Interviews → Audio Engineering → Distribution Platforms',
    results: 'Reaching listeners globally with deep-dives into emerging technology.',
    tags: ['Content Creation', 'Audio Engineering', 'Communication'],
    github: '#',
    link: '#'
  }
]

export default function ProjectsContent() {
  return (
    <div className="py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of systems I&apos;ve built, ranging from on-device AI and LLM agents to computer vision and generative models.
        </p>
      </section>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg"
          >
            <div className="p-8 md:p-12 space-y-8">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-primary font-medium text-lg">{project.subtitle}</p>
                </div>
                <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-xl border border-primary/20 text-sm font-bold whitespace-nowrap">
                  Role: {project.role}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">TL;DR</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm">
                        {project.tldr.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Layout className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">System Architecture</p>
                      <p className="text-sm text-muted-foreground font-mono">{project.system}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Trophy className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Results & Validation</p>
                      <p className="text-sm text-muted-foreground">{project.results}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-bold hover:text-primary transition-colors">
                        <Github className="w-5 h-5 mr-2" />
                        View Source Code
                      </a>
                    )}
                    {project.link !== '#' && (
                      <a href={project.link} className="flex items-center text-sm font-bold hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

