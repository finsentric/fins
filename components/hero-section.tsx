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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Sentiment at the centre
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 dark:from-purple-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            of Finance
          </span>
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