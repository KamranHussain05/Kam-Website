'use client'

import { motion } from 'framer-motion'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

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
        <Link href="/blog" className="text-primary hover:underline">
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
          href="/blog"
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
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split('\n')
                .map((line) => {
                  if (line.startsWith('# ')) {
                    return `<h1>${line.slice(2)}</h1>`
                  }
                  if (line.startsWith('## ')) {
                    return `<h2>${line.slice(3)}</h2>`
                  }
                  if (line.startsWith('### ')) {
                    return `<h3>${line.slice(4)}</h3>`
                  }
                  if (line.startsWith('- ')) {
                    return `<li>${line.slice(2)}</li>`
                  }
                  if (line.trim() === '') {
                    return '<br>'
                  }
                  return `<p>${line}</p>`
                })
                .join(''),
            }}
          />
        </article>
      </motion.div>
    </div>
  )
} 