// The root layout already provides the page shell, header, and footer.
// The blog stays outside the public navigation.
export const metadata = {
  title: 'Blog',
  description: 'Articles about neuroscience, AI, and machine learning.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
