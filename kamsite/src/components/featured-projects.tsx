import Link from 'next/link'
import { findProject, homepageProjectIds, type Project } from '@/lib/site-data'

const previews = homepageProjectIds
  .map((id) => findProject(id))
  .filter((p): p is Project => Boolean(p))

export function FeaturedProjects() {
  return (
    <section aria-labelledby="selected-projects" className="border-t border-border pt-10 pb-12">
      <h2 id="selected-projects" className="section-heading">
        Selected projects
      </h2>
      <ul className="mt-4 grid gap-6 sm:grid-cols-2 sm:gap-8">
        {previews.map((project) => (
          <li key={project.id}>
            <h3 className="font-semibold">
              <Link href={`/projects/#${project.id}`} className="hover:text-primary transition-colors">
                {project.title}
              </Link>
            </h3>
            <p className="mt-1">{project.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <Link href="/projects/" className="text-link font-medium">
          All projects
        </Link>
      </p>
    </section>
  )
}
