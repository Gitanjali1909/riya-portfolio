"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useRef } from "react"
import { useInView } from "framer-motion"

const projects = [
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
]

export default function Home() {
  const projectsRef = useRef(null)
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-7xl md:text-9xl font-light mb-8 tracking-tight"
              >
                Riya Verma
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-3xl font-light mb-12 text-muted-foreground"
              >
                Analytics & Frontend Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
              >
                I turn raw data into meaningful insights and beautiful interfaces. From Power BI dashboards to React
                applications, I create digital experiences that are both analytically rigorous and visually stunning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex justify-center"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section ref={projectsRef} className="relative py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-light">Featured Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={index === 0 ? "md:col-span-2" : ""}
                >
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-2" />
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                      <p className="text-sm text-muted-foreground">{project.tags.slice(0, 4).join(" · ")}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={projectsInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                View all projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
