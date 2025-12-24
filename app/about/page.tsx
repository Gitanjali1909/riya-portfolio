"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const timelineData = [
  {
    type: "work",
    icon: Briefcase,
    title: "Tech Intern",
    organization: "iQuanta Edu Services Pvt. Ltd.",
    period: "2023 - 2024",
    description:
      "Developed interactive Power BI dashboards and data visualization solutions. Built frontend components and worked on data analysis projects using Python and SQL.",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor's in Computer Science",
    organization: "University",
    period: "2020 - 2024",
    description:
      "Focused on data structures, algorithms, database management, and web development. Completed multiple projects in data analytics and frontend development.",
  },
]

export default function AboutPage() {
  const narrativeRef = useRef(null)
  const narrativeInView = useInView(narrativeRef, { once: true, margin: "-100px" })
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" })

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-24 pb-16">
        {/* Narrative Section */}
        <section ref={narrativeRef} className="px-4 mb-32">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light mb-12">About Me</h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={narrativeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                My journey into tech started with a fascination for how{" "}
                <span className="text-foreground font-medium bg-primary/10 px-2 py-0.5">data tells stories</span>. I
                found myself drawn to the intersection of analytics and design, where numbers meet beautiful interfaces.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Every dashboard I build, every component I craft, is an opportunity to make{" "}
                <span className="text-foreground font-medium bg-primary/10 px-2 py-0.5">
                  complex information accessible
                </span>{" "}
                and delightful. I believe in the power of data-driven decisions wrapped in intuitive user experiences.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Whether it's analyzing datasets with Python, designing responsive interfaces with React, or creating
                interactive visualizations with Power BI, I'm committed to{" "}
                <span className="text-foreground font-medium bg-primary/10 px-2 py-0.5">excellence</span> in every pixel
                and every line of code.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-16">Experience & Education</h2>

            <div className="relative space-y-16">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

              {timelineData.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-[-4px] top-2 w-2 h-2 bg-primary" />
                    <div className="mb-2">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="text-2xl font-medium text-foreground">{item.title}</h3>
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="text-lg text-primary mt-1">{item.organization}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
