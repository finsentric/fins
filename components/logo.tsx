"use client"

import React from 'react'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`w-[140px] h-[40px] ${className}`}>
        {/* Placeholder while loading */}
      </div>
    )
  }

  return (
    <div className={className}>
      {theme === 'dark' ? (
        <Image
          src="/FinSentricLogo_DarkTheme.svg"
          alt="Finsentric Logo"
          width={140}
          height={40}
          priority
        />
      ) : (
        <Image
          src="/FinSentricLogo_LightTheme.svg"
          alt="Finsentric Logo"
          width={140}
          height={40}
          priority
        />
      )}
    </div>
  )
}