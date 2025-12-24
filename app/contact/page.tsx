"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:riya.verma@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-12 text-center rounded-3xl backdrop-blur-sm bg-background/20 border border-white/5">
              <h1 className="text-5xl md:text-7xl font-light mb-6">Let&apos;s Connect</h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Open to new opportunities and collaborations
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center gap-3 p-6 rounded-2xl backdrop-blur-sm bg-background/30 border border-white/5 hover:border-primary/30 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                      <span className="font-semibold text-sm">{link.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
