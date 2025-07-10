"use client"

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FilloutForm } from '@/components/fillout-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FilloutForm />
      </main>
      <Footer />
    </div>
  )
}