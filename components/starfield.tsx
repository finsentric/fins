"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Star {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  delay: number
  size: number
}

export function Starfield() {
  const [stars, setStars] = useState<Star[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const centerX = dimensions.width / 2
    const centerY = dimensions.height / 2
    const numStars = 24 // Keep the increased frequency
    const duration = 10
    const batchDelay = duration / 2 // 5 seconds if duration is 10

    const newStars: Star[] = []

    for (let i = 0; i < numStars; i++) {
      const corner = i % 4 // Distribute stars across 4 corners
      let startX, startY

      switch (corner) {
        case 0: // Top-left
          startX = Math.random() * (dimensions.width * 0.2)
          startY = Math.random() * (dimensions.height * 0.2)
          break
        case 1: // Top-right
          startX = dimensions.width * 0.8 + Math.random() * (dimensions.width * 0.2)
          startY = Math.random() * (dimensions.height * 0.2)
          break
        case 2: // Bottom-left
          startX = Math.random() * (dimensions.width * 0.2)
          startY = dimensions.height * 0.8 + Math.random() * (dimensions.height * 0.2)
          break
        case 3: // Bottom-right
          startX = dimensions.width * 0.8 + Math.random() * (dimensions.width * 0.2)
          startY = dimensions.height * 0.8 + Math.random() * (dimensions.height * 0.2)
          break
        default:
          startX = 0
          startY = 0
      }

      // Alternate delays for overlapping batches
      const delay = (i < numStars / 2)
        ? Math.random() * 2 // First batch: 0-2s
        : batchDelay + Math.random() * 2 // Second batch: 5-7s

      newStars.push({
        id: i,
        startX,
        startY,
        endX: centerX + (Math.random() - 0.5) * 100, // Small variation around center
        endY: centerY + (Math.random() - 0.5) * 100,
        delay,
        size: Math.random() * 3 + 1 // Size between 1-4px
      })
    }

    setStars(newStars)
  }, [dimensions])

  if (dimensions.width === 0 || dimensions.height === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white dark:bg-white opacity-80"
          style={{
            width: star.size,
            height: star.size,
            left: star.startX,
            top: star.startY,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: star.endX - star.startX,
            y: star.endY - star.startY,
            opacity: [0, 1, 0], // Fade in, then out before center
            scale: [0, 1, 0],  // Grow, then shrink before center
          }}
          transition={{
            duration: 10, // Slower movement
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 0, // No pause between repeats
            ease: "easeInOut",
            times: [0, 0.7, 1], // Disappear before reaching center
          }}
        />
      ))}
    </div>
  )
}