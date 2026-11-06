import Link from 'next/link'
import {
  earlierProjects,
  otherProjects,
  researchSoftware,
  type Project,
} from '@/lib/site-data'

function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) return null
  return (
    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
      {project.links.map((link) => (
        <li key={link.href}>
          {link.internal ? (
            <Link href={link.href} className="text-link" aria-label={`${link.label}: ${project.title}`}>
              {link.label}
            </Link>
          ) : (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label={`${link.label}: ${project.title}`}
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="mt-2 divide-y divide-border">
      {projects.map((project) => (
        <li key={project.id} id={project.id} className="scroll-mt-6 py-6">
          <article>
            <h3 className="font-semibold">
              {project.title}
              {project.year && (
                <span className="ml-2 font-normal text-muted-foreground">{project.year}</span>
              )}
            </h3>
            <p className="mt-1 max-w-[42rem]">{project.description}</p>
            {project.technologies && (
              <p className="mt-1 text-[0.95rem] text-muted-foreground">{project.technologies}</p>
            )}
            <ProjectLinks project={project} />
          </article>
        </li>
      ))}
    </ul>
  )
}

export default function ProjectsContent() {
  return (
    <div className="pt-10 sm:pt-14">
      <header className="max-w-[42rem]">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4">
          Research software for working with neural spike data, followed by a
          selection of other things I have built.
        </p>
      </header>

      <section aria-labelledby="software-heading" className="mt-12">
        <h2 id="software-heading" className="text-2xl font-semibold tracking-tight">
          Research software
        </h2>
        <ProjectList projects={researchSoftware} />
      </section>

      <section aria-labelledby="other-heading" className="mt-12">
        <h2 id="other-heading" className="text-2xl font-semibold tracking-tight">
          Other projects
        </h2>
        <ProjectList projects={otherProjects} />
      </section>

      <section aria-labelledby="earlier-heading" className="mt-12">
        <h2 id="earlier-heading" className="text-2xl font-semibold tracking-tight">
          Earlier projects
        </h2>
        <ul className="mt-4 space-y-4">
          {earlierProjects.map((project) => (
            <li key={project.id} id={project.id} className="scroll-mt-6">
              <span className="font-medium">{project.title}.</span>{' '}
              {project.description}{' '}
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-[0.95rem]"
                  aria-label={`${link.label}: ${project.title}`}
                >
                  {link.label}
                </a>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
