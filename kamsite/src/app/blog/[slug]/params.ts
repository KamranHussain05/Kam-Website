// This would typically come from a CMS or file system
const posts = {
  'understanding-neural-networks': {
    title: 'Understanding Neural Networks: A Neuroscience Perspective',
    date: '2024-02-15',
    excerpt: 'Exploring the parallels between biological neural networks and artificial neural networks.',
    content: `
# Understanding Neural Networks: A Neuroscience Perspective

Neural networks have become a cornerstone of modern artificial intelligence, but their inspiration comes from the biological neural networks in our brains. In this article, we'll explore the fascinating parallels between biological and artificial neural networks.

## The Biological Foundation

The human brain contains approximately 86 billion neurons, each connected to thousands of other neurons through synapses. These connections form a complex network that processes information through electrical and chemical signals.

## From Biology to AI

Artificial neural networks mimic this biological structure by using:
- Nodes (neurons)
- Weights (synaptic strengths)
- Activation functions (neural firing patterns)

## Key Similarities

1. **Parallel Processing**: Both biological and artificial networks process information in parallel
2. **Learning**: Both systems adapt and learn from experience
3. **Pattern Recognition**: Both excel at identifying patterns in data

## Key Differences

1. **Complexity**: Biological networks are far more complex
2. **Energy Efficiency**: The brain is incredibly energy-efficient
3. **Plasticity**: Biological networks can physically change structure

## Future Directions

The field of neuromorphic computing aims to create hardware that more closely mimics the brain's architecture, potentially leading to more efficient and powerful AI systems.

## Conclusion

Understanding the biological foundations of neural networks not only helps us build better AI systems but also provides insights into how our own brains work.
    `,
  },
  'brain-computer-interfaces': {
    title: 'The Future of Brain-Computer Interfaces',
    date: '2024-02-01',
    excerpt: 'How brain-computer interfaces are revolutionizing human-computer interaction.',
    content: `
# The Future of Brain-Computer Interfaces

Brain-computer interfaces (BCIs) are rapidly evolving technologies that create direct communication pathways between the brain and external devices. This article explores the current state and future potential of BCIs.

## Current Applications

BCIs are currently being used in:
- Medical rehabilitation
- Assistive technology
- Research and development
- Gaming and entertainment

## Future Possibilities

The future of BCIs holds exciting possibilities:
- Enhanced human-computer interaction
- Medical breakthroughs
- Cognitive enhancement
- New forms of communication

## Challenges and Considerations

While promising, BCIs face several challenges:
- Technical limitations
- Ethical considerations
- Privacy concerns
- Safety requirements

## Conclusion

BCIs represent a significant step forward in human-computer interaction, with the potential to transform how we interact with technology and each other.
    `,
  },
  'ml-in-neuroscience': {
    title: 'Machine Learning in Neuroscience Research',
    date: '2024-01-15',
    excerpt: 'Applications of machine learning in analyzing and interpreting neural data.',
    content: `
# Machine Learning in Neuroscience Research

Machine learning is revolutionizing neuroscience research by providing powerful tools for analyzing complex neural data. This article explores how ML is transforming our understanding of the brain.

## Data Analysis

ML techniques are being used to:
- Process large-scale neural recordings
- Identify patterns in brain activity
- Predict neural responses
- Classify neural states

## Research Applications

ML is enabling new research directions:
- Brain mapping
- Neural circuit analysis
- Behavioral prediction
- Disease diagnosis

## Future Directions

The future of ML in neuroscience includes:
- More sophisticated models
- Better interpretability
- Real-time analysis
- Personalized medicine

## Conclusion

Machine learning is becoming an essential tool in neuroscience research, helping us unlock the mysteries of the brain.
    `,
  },
  // Add more posts here
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
}

export { posts } 