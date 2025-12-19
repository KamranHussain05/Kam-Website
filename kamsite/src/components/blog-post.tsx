'use client'

import { motion } from 'framer-motion'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import ReactMarkdown from 'react-markdown'

interface Post {
  title: string
  date: string
  content: string
}

interface BlogPostProps {
  post: Post | undefined
}

export function BlogPost({ post }: BlogPostProps) {
  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link href="/blog/" className="text-primary hover:underline">
          Return to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/blog/"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to blog
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1>{post.title}</h1>
          <time className="text-sm text-muted-foreground">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <div className="mt-8">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </motion.div>
    </div>
  )
} 