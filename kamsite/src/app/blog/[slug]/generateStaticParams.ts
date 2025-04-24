import { posts } from './params'

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
} 