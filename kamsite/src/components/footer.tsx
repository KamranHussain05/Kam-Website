'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
  {
    icon: Mail,
    href: 'mailto:your.email@example.com',
    label: 'Email',
  },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kamran Hussain</h3>
            <p className="text-muted-foreground">
              Neuroscience researcher and AI developer passionate about understanding
              the brain and building intelligent systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Kamran Hussain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 