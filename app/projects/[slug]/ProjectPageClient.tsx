"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Project } from "@/lib/projects-data" 

interface ProjectPageClientProps {
  project: Project
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-pink-500/10 text-foreground border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Problem Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light mb-4">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complex data needed to be visualized in a way that would be accessible to non-technical stakeholders.
              Traditional approaches were time-consuming and didn't provide real-time insights.
            </p>
          </motion.section>

          {/* Solution Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light mb-4">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I developed an interactive dashboard that connects to live data sources and provides customizable
              visualizations. Users can filter, drill-down, and export data with just a few clicks.
            </p>
          </motion.section>

          {/* Impact Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light mb-4">Impact</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• 50% reduction in time spent on data analysis</li>
              <li>• Improved data-driven decision making across the organization</li>
              <li>• 99.9% dashboard uptime and performance optimization</li>
            </ul>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-12 border-t border-white/5"
          >
            <p className="text-muted-foreground mb-6">Want to work on something similar?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Get in Touch
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}
