import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Kamran Hussain | Computational Neuroscience & AI',
    template: '%s | Kamran Hussain'
  },
  description: 'Kamran Hussain — Researcher at Stanford NPTL and UCSC Braingeneers. Focused on speech BCIs, organoid foundation models, and the interface between minds and machines.',
  keywords: ['Kamran Hussain', 'Neuroscience', 'BCI', 'Brain-Computer Interface', 'Organoids', 'AI', 'Machine Learning', 'Stanford NPTL', 'UCSC Braingeneers'],
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 