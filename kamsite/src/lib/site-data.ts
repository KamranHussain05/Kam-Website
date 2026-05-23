export const profileLinks = {
  googleScholar:
    'https://scholar.google.com/citations?view_op=list_works&hl=en&user=Q5hw_HkAAAAJ',
  orcid: 'https://orcid.org/0009-0001-2788-4323',
} as const

export type PreprintVenue = 'arXiv' | 'bioRxiv'

export type Preprint = {
  title: string
  authors: string
  venue: PreprintVenue
  year: number
  url: string
  summary: string
  figureUrl: string
  figureAlt: string
  note?: string
}

export const outlinePillClassName =
  'inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors'

export const primaryPillClassName =
  'inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors'

export const preprints: Preprint[] = [
  {
    title:
      'Implicit Behavioral Decoding from Next-Step Spike Forecasts at Population Scale',
    authors: 'Minnick et al.',
    venue: 'arXiv',
    year: 2026,
    url: 'https://arxiv.org/abs/2605.12999',
    summary:
      'Mamba spike forecaster trained only on next-step counts; predicted rates decode behavior better than raw spikes under matched context at Neuropixels scale.',
    figureUrl:
      'https://arxiv.org/html/2605.12999v1/figures/figure_pipeline.png',
    figureAlt:
      'Figure 1: Mamba spike forecasting and behavioral decoding pipeline.',
  },
  {
    title:
      'SpikeProphecy: A Large-Scale Benchmark for Autoregressive Neural Population Forecasting',
    authors: 'Minnick et al.',
    venue: 'arXiv',
    year: 2026,
    url: 'https://arxiv.org/abs/2605.12992',
    summary:
      'First large-scale causal spike-count forecasting benchmark (105 Neuropixels sessions) with population-metric decomposition beyond aggregate Pearson r.',
    note: 'Companion to the behavioral-decoding preprint above.',
    figureUrl:
      'https://arxiv.org/html/2605.12992v1/figures/figure1_hero_v6.png',
    figureAlt: 'Figure 1: SpikeProphecy benchmark overview.',
  },
  {
    title: 'SpikeLab: Agentic tools for spike data analysis',
    authors: 'van der Molen et al.',
    venue: 'bioRxiv',
    year: 2026,
    url: 'https://www.biorxiv.org/content/10.64898/2026.04.25.720833v1',
    summary:
      'Skill-based agentic framework for reproducible spike analysis across in vivo and organoid recordings.',
    figureUrl:
      'https://www.biorxiv.org/content/biorxiv/early/2026/04/29/2026.04.25.720833/F2.large.jpg',
    figureAlt: 'Figure 2: SpikeLab agentic spike data analysis framework.',
  },
]

export const researchSummary =
  'Brain Computer Interfaces to restore communication, autoregressive neural population modeling, neuro foundation models, and modern computational analysis tools for electrophysiology'

export const contactEmail = 'kahussai@ucsc.edu'
