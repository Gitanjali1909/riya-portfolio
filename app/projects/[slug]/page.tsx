import { notFound } from "next/navigation"
import { projectsData } from "@/lib/projects-data"
import ProjectPageClient from "./ProjectPageClient"

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}
