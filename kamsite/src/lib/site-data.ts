/**
 * Canonical site content. Pages and homepage previews read from these records
 * so each description lives in one place.
 *
 * Editorial rules (see the redesign brief):
 * - Papers stay labelled as preprints until an authoritative record shows publication.
 * - Coauthorship is shown as metadata; contribution sentences need owner confirmation.
 * - Optional resources are omitted rather than rendered as placeholder links.
 */

/** Approved short researcher description. Use verbatim wherever a short description is needed. */
export const shortDescription =
  'Computational neuroscience and applied machine learning researcher'

export const siteName = 'Kamran Hussain'
export const siteUrl = 'https://kamranhussain.com'

export const portrait = {
  src: '/images/kamran-hussain.jpg',
  alt: 'Portrait of Kamran Hussain',
  width: 350,
  height: 350,
} as const

export type NavItem = { label: string; href: string }

/** The complete public page navigation. The podcast archive is deliberately absent. */
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'Projects', href: '/projects/' },
]

export type ExternalLink = { label: string; href: string }

export const profileLinks: ExternalLink[] = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?view_op=list_works&hl=en&user=Q5hw_HkAAAAJ',
  },
  { label: 'GitHub', href: 'https://github.com/kamranhussain05' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kamran-hussain1' },
  { label: 'X', href: 'https://x.com/Kamhn123' },
]

export const googleScholarUrl = profileLinks[0].href

// ---------------------------------------------------------------------------
// Research
// ---------------------------------------------------------------------------

export type Author = { name: string; self?: boolean }

export type ResourceLink = {
  label: 'Paper' | 'Code' | 'Data' | 'Documentation' | 'Recording' | 'Slides' | 'Poster PDF'
  href: string
}

export type Paper = {
  /** Stable anchor on /research/ */
  id: string
  title: string
  authors: Author[]
  status: string
  /** ISO date of the cited version */
  date: string
  summary: string
  links: ResourceLink[]
}

const me: Author = { name: 'Kamran Hussain', self: true }

/** Ordered newest first. Author order follows the source records. */
export const papers: Paper[] = [
  {
    id: 'pulse-organoid-foundation-model',
    title:
      'A foundation model for brain organoid network dynamics uncovers intrinsic computation and convergent disease phenotypes',
    // Initials as given in the bioRxiv record.
    authors: [
      { name: 'H. E. Schweiger' },
      { name: 'A. Robbins' },
      { name: 'S. Hernandez' },
      { name: 'A. Moreno-Ochando' },
      { name: 'I. Cline' },
      { name: 'K. Doganyigit' },
      { name: 'M. Mouzaya' },
      { name: 'K. Hussain', self: true },
      { name: 'Z. P. Pang' },
      { name: 'J. Duan' },
      { name: 'S. R. Salama' },
      { name: 'A. A. Pollen' },
      { name: 'A. Bhaduri' },
      { name: 'D. Haussler' },
      { name: 'M. Teodorescu' },
      { name: 'M. A. Mostajo-Radji' },
    ],
    status: 'bioRxiv preprint',
    date: '2026-10-13',
    summary:
      'Introduces PULSE, a foundation model trained on over 900 hours of high-density microelectrode array recordings, and uses it to study network development in disease models and how organoid circuits encode information.',
    links: [
      {
        label: 'Paper',
        href: 'https://www.biorxiv.org/content/10.64898/2026.10.11.758231v1',
      },
    ],
  },
  {
    id: 'implicit-behavioral-decoding',
    title:
      'Implicit Behavioral Decoding from Next-Step Spike Forecasts at Population Scale',
    authors: [
      { name: 'John R. Minnick' },
      { name: 'Jesus Gonzalez-Ferrer' },
      me,
      { name: 'Jinghui Geng' },
      { name: 'Ash Robbins' },
      { name: 'Mohammed A. Mostajo-Radji' },
      { name: 'David Haussler' },
      { name: 'Jason Eshraghian' },
      { name: 'Mircea Teodorescu' },
    ],
    status: 'arXiv preprint',
    date: '2026-05-13',
    summary:
      'Tests whether predicted neural firing rates support behavioral decoding better than raw spike counts under matched temporal context.',
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2605.12999' }],
  },
  {
    id: 'spikeprophecy',
    title:
      'SpikeProphecy: A Large-Scale Benchmark for Autoregressive Neural Population Forecasting',
    authors: [
      { name: 'John R. Minnick' },
      { name: 'Jinghui Geng' },
      me,
      { name: 'Jesus Gonzalez-Ferrer' },
      { name: 'Ash Robbins' },
      { name: 'Mohammed A. Mostajo-Radji' },
      { name: 'David Haussler' },
      { name: 'Jason K. Eshraghian' },
      { name: 'Mircea Teodorescu' },
    ],
    status: 'arXiv preprint',
    date: '2026-05-13',
    summary:
      'Evaluates spike forecasting across 105 Neuropixels sessions using measures that distinguish temporal and population-pattern performance.',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2605.12992' },
      {
        label: 'Code',
        href: 'https://github.com/JohnMinnick/SpikeProphecy-A-Large-Scale-Benchmark-for-Autoregressive-Neural-Population-Forecasting',
      },
      {
        label: 'Data',
        href: 'https://huggingface.co/datasets/mysteriousauthor/spikeprophecy-steinmetz',
      },
    ],
  },
  {
    id: 'spikelab',
    title: 'SpikeLab: Agentic tools for spike data analysis',
    // Initials as given in the bioRxiv and PubMed records.
    authors: [
      { name: 'T. van der Molen' },
      { name: 'L. Cheney' },
      { name: 'K. Hussain', self: true },
      { name: 'O. Brahme' },
      { name: 'A. Robbins' },
      { name: 'M. Lim' },
      { name: 'A. Spaeth' },
      { name: 'J. Geng' },
      { name: 'D. F. Parks' },
      { name: 'K. S. Kosik' },
      { name: 'M. Teodorescu' },
      { name: 'D. Haussler' },
      { name: 'T. Sharf' },
    ],
    status: 'bioRxiv preprint',
    date: '2026-04-29',
    summary:
      'Combines a neural-data analysis library with structured agent workflows for reproducible electrophysiology analysis.',
    links: [
      {
        label: 'Paper',
        href: 'https://www.biorxiv.org/content/10.64898/2026.04.25.720833v1',
      },
      { label: 'Code', href: 'https://github.com/braingeneers/SpikeLab' },
      {
        label: 'Documentation',
        href: 'https://spikelab.braingeneers.gi.ucsc.edu/',
      },
    ],
  },
]

export type Presentation = {
  id: string
  title: string
  venue: string
  /** Display date. Kept at the precision the source supports. */
  date: string
  location?: string
  category: string
  links: ResourceLink[]
}

export const talks: Presentation[] = [
  {
    id: 'bci-2025-speech',
    // Title as printed in the 2025 BCI Society Meeting program (RS-1-6).
    title: 'Advancing speech BCIs towards conversational speeds in people with paralysis',
    venue: '11th International BCI Meeting, Research Session 1',
    date: 'June 3, 2025',
    location: 'Banff, Canada',
    category: 'Conference talk',
    links: [
      { label: 'Recording', href: 'https://www.youtube.com/watch?v=X-tBf0QpwC0' },
    ],
  },
  {
    id: 'ucsc-acm-2024-organoids',
    title: 'Generative Foundation Model for Cortical Organoid Electrophysiology',
    venue: 'UCSC ACM Undergraduate Research Conference',
    date: 'May 2024',
    location: 'Santa Cruz, CA',
    category: 'Talk',
    links: [],
  },
]

export const posters: Presentation[] = [
  {
    id: 'surfin-2025',
    title: 'Towards Conversational Rate Speech Brain–Computer Interfaces',
    venue: 'Simons Foundation SURFiN Symposium',
    date: 'April 2025',
    location: 'New York, NY',
    category: 'Poster',
    links: [],
  },
  {
    id: 'wu-tsai-2024',
    title: 'Does Speech Rate Matter for Intracortical Speech BCIs?',
    venue: 'Wu Tsai Neurosciences Institute Annual Symposium',
    date: 'October 2024',
    location: 'Stanford, CA',
    category: 'Poster',
    links: [],
  },
  {
    id: 'ucsc-acm-2024-hdmea',
    title:
      'Building a Baseline for Neural Activity Prediction and Analysis: Machine Learning on HD-MEA Data',
    venue: 'UCSC ACM Undergraduate Research Conference',
    date: 'May 2024',
    location: 'Santa Cruz, CA',
    category: 'Poster',
    links: [],
  },
  {
    id: 'ucsc-acm-2024-llm-iot',
    title: 'LLM Automated Control of an IoT Integrated System',
    venue: 'UCSC ACM Undergraduate Research Conference',
    date: 'May 2024',
    location: 'Santa Cruz, CA',
    category: 'Poster',
    links: [],
  },
]

export const bciAward = {
  title: 'An inner speech neuroprosthesis',
  distinction: 'First place, 2025 BCI Award',
  /** Equal-contribution authors as marked on the official award page; 27 authors in total. */
  equalContributors: ['E. M. Kunz', 'B. Abramovich Krasa', 'K. Hussain'],
  otherAuthorCount: 24,
  href: 'https://www.bci-award.com/2025',
} as const

// ---------------------------------------------------------------------------
// Background
// ---------------------------------------------------------------------------

export type BackgroundEntry = {
  organization: string
  /** Lab or group website */
  href?: string
  role?: string
  /** Leave undefined until the owner confirms dates. */
  dates?: string
  topic: string
}

/**
 * Prioritized research roles. Earlier roles (NASA Ames, UC San Diego, Tacit AI,
 * TensorLearn) appear here only once their roles and dates are confirmed.
 */
export const background: BackgroundEntry[] = [
  {
    organization: 'Stanford Neural Prosthetics Translational Laboratory (NPTL)',
    href: 'https://nptl.stanford.edu/',
    role: 'SURFiN fellow',
    topic: 'Speech neuroprosthetics',
  },
  {
    organization: 'UC Santa Cruz Braingeneers',
    href: 'https://braingeneers.ucsc.edu/',
    topic: 'Neural activity prediction and organoid electrophysiology',
  },
]

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type Project = {
  /** Stable anchor on /projects/ */
  id: string
  title: string
  description: string
  year?: string
  technologies?: string
  links: { label: string; href: string; internal?: boolean }[]
}

export const researchSoftware: Project[] = [
  {
    id: 'spikelab',
    title: 'SpikeLab',
    description:
      'Tools for loading, analyzing, visualizing, and exporting neural spike data, with structured agent workflows.',
    year: '2026',
    technologies: 'Python',
    links: [
      { label: 'Code', href: 'https://github.com/braingeneers/SpikeLab' },
      { label: 'Documentation', href: 'https://spikelab.braingeneers.gi.ucsc.edu/' },
      { label: 'Preprint', href: '/research/#spikelab', internal: true },
    ],
  },
  {
    id: 'spikedata',
    title: 'SpikeData',
    description:
      'A Python package for representing, processing, and analyzing neuronal spike trains. It includes tools for binning, burst detection, Fano factors, and population firing rates.',
    technologies: 'Python',
    links: [
      { label: 'Code', href: 'https://github.com/braingeneers/SpikeData' },
      { label: 'PyPI', href: 'https://pypi.org/project/spikedata/' },
    ],
  },
]

export const otherProjects: Project[] = [
  {
    id: 'coderoach',
    title: 'CodeRoach',
    description:
      'A framework for steering a Backyard Brains RoboRoach through a Bluetooth terminal, voice commands, and a closed-loop reinforcement learning policy, with safety limits on every stimulation. The team won the Axo Neurotech hackathon.',
    year: '2026',
    technologies: 'Python, reinforcement learning, Bluetooth LE',
    links: [
      { label: 'Code', href: 'https://github.com/terezaokalova/coderoach' },
      {
        label: 'Slides',
        href: 'https://docs.google.com/presentation/d/1Bq9rucuxgSaAvDeTfaXUqpnGAfYyW-z8gVaoLOiE30I/edit',
      },
    ],
  },
  {
    id: 'polaris',
    title: 'Polaris',
    description:
      'A hackathon prototype that uses fishing-vessel sensor data to identify early signs of engine failure. The team won first place at the 2025 Sushi Hackathon.',
    year: '2025',
    technologies: 'Machine learning, sensor data',
    links: [
      {
        label: 'Stanford coverage',
        href: 'https://fsi.stanford.edu/news/sushi-hackathon-melds-ai-sustainable-fishing-and-civic-innovation',
      },
    ],
  },
  {
    id: 'statscanner',
    title: 'StatScanner',
    description:
      'An iOS app for importing numerical data from images or CSV files, calculating statistics, and creating charts.',
    technologies: 'Swift, SwiftUI, Apple Vision',
    links: [{ label: 'Code', href: 'https://github.com/KamranHussain05/StatScanner' }],
  },
]

export const earlierProjects: Project[] = [
  {
    id: 'gesture-ar-navigation',
    title: 'Gesture-driven AR navigation',
    description:
      'Uses image recognition so people can navigate virtual environments without a mouse, keyboard, or standard VR controllers.',
    links: [
      { label: 'Code', href: 'https://github.com/KamranHussain05/facial-navigation-ar' },
    ],
  },
  {
    id: 'project-tourist',
    title: 'Project Tourist',
    description:
      'A trip-planning app that uses natural language processing to suggest destinations and activities.',
    links: [
      { label: 'Code', href: 'https://github.com/KamranHussain05/Project-Tourist' },
    ],
  },
  {
    id: 'link-saver',
    title: 'Link Saver',
    description: 'A small app for keeping links to online meetings and classes in one place.',
    links: [{ label: 'Code', href: 'https://github.com/KamranHussain05/linksaver' }],
  },
]

/** Homepage project previews, by id, drawn from the records above. */
export const homepageProjectIds = ['polaris', 'statscanner'] as const

export function findProject(id: string): Project | undefined {
  return [...researchSoftware, ...otherProjects, ...earlierProjects].find(
    (p) => p.id === id,
  )
}

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/** Formats an ISO date or timestamp in UTC so the label never shifts with the visitor's timezone. */
export function formatDateUTC(iso: string): string {
  const d = new Date(iso.length === 10 ? `${iso}T00:00:00Z` : iso)
  return `${monthNames[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
}

/** Prefixes a root-relative URL with the configured base path (needed for next/image string sources and raw hrefs). */
export function withBasePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}
