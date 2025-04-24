'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { format } from 'date-fns'
import { posts } from './[slug]/params'

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Insights and articles about neuroscience, AI, and machine learning.
        </p>
      </motion.div>

      <div className="space-y-8">
        {Object.entries(posts).map(([slug, post], index) => (
          <motion.article
            key={slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link href={`/blog/${slug}/`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            <time className="text-sm text-muted-foreground">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <p className="mt-4 text-muted-foreground">{post.excerpt}</p>
            <Link
              href={`/blog/${slug}/`}
              className="inline-block mt-4 text-primary hover:underline"
            >
              Read more →
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  )
} 