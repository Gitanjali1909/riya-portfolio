"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5 backdrop-blur-sm bg-background/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>© 2025 Riya Verma.</p>
        </motion.div>
      </div>
    </footer>
  )
}
