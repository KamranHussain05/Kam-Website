import { BlogPost } from '@/components/blog-post'
import { posts } from './params'

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]
  return <BlogPost post={post} />
} 