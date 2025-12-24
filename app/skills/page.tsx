"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Database, Code2, BarChart3, Palette, Cloud, Terminal } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const skillsData = [
  {
    category: "Data Analytics",
    icon: BarChart3,
    color: "from-indigo-500 to-violet-500",
    skills: ["Power BI", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "DAX", "SQL"],
  },
  {
    category: "Frontend Development",
    icon: Code2,
    color: "from-violet-500 to-pink-500",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Databases",
    icon: Database,
    color: "from-pink-500 to-rose-500",
    skills: ["SQL", "PostgreSQL", "MySQL", "SQL Server", "Database Design", "Query Optimization"],
  },
  {
    category: "Design & UI",
    icon: Palette,
    color: "from-rose-500 to-orange-500",
    skills: ["Responsive Design", "UI/UX Principles", "Figma", "Glassmorphism", "Animation", "Accessibility"],
  },
  {
    category: "Tools & Libraries",
    icon: Terminal,
    color: "from-cyan-500 to-emerald-500",
    skills: ["Git", "GitHub", "VS Code", "D3.js", "Chart.js", "Recharts", "Storybook", "Vite"],
  },
  {
    category: "Other Skills",
    icon: Cloud,
    color: "from-emerald-500 to-teal-500",
    skills: ["Data Visualization", "ETL Pipelines", "API Integration", "Problem Solving", "Agile", "Documentation"],
  },
]

export default function SkillsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-4">Skills & Tools</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </div>

        <section ref={ref} className="px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative h-full p-8 rounded-3xl backdrop-blur-sm bg-background/20 border border-white/5 hover:border-white/10 transition-all duration-500 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-pink-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-pink-500/10 text-foreground border border-primary/20 hover:border-primary/40 transition-colors"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
