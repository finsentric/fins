"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Starfield } from "./starfield"

export function HeroSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-500">
      {/* Starfield Animation */}
      <Starfield />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(99,102,241,0.3)]">
            Sentiment at the Centre of Finance
          </span>
          <br />
        </h1>
        <div className="relative">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
            Coming Soon!
          </p>
        </div>
      </div>
    </section>
  )
}