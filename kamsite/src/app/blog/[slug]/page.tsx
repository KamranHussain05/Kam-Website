import { BlogPost } from '@/components/blog-post'
import { posts } from './params'

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]
  return <BlogPost post={post} />
} 