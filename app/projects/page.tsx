"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const projectsData = [
  {
    slug: "dashboard-analytics",
    title: "Analytics Dashboard",
    description: "Interactive Power BI dashboard for data visualization and insights",
    tags: ["Power BI", "Python", "SQL", "Data Analysis"],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack React and Node.js application with payment integration",
    tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
  },
  {
    slug: "design-system",
    title: "Component Library",
    description: "Reusable UI component library built with React and Tailwind CSS",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
  },
  {
    slug: "data-pipeline",
    title: "ETL Data Pipeline",
    description: "Automated data pipeline for processing and analyzing large datasets",
    tags: ["Python", "Pandas", "SQL", "Apache Airflow"],
  },
  {
    slug: "visualization-tool",
    title: "Data Visualization Tool",
    description: "Custom visualization library using D3.js and React",
    tags: ["D3.js", "React", "TypeScript", "SVG"],
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    description: "Cross-platform mobile application built with React Native",
    tags: ["React Native", "Firebase", "TypeScript", "Expo"],
  },
]

export default function ProjectsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of data-driven dashboards, analytics tools, and frontend experiences
            </p>
          </div>
        </div>

        <section ref={ref} className="px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative h-full p-8 rounded-3xl backdrop-blur-sm bg-background/20 border border-white/5 hover:border-white/10 group transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-pink-500/10 text-foreground border border-primary/20 group-hover:border-primary/40 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
