"use client"

import { Mail } from "lucide-react"
import { useTheme } from "next-themes"
import React from "react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            {mounted ? (
              <a
                href="mailto:hello@finsentric.com"
                className={`hover:text-foreground transition-colors font-thin tracking-wide ${theme === 'light' ? '!text-black' : ''}`}
              >
                hello@finsentric.com
              </a>
            ) : (
              <a
                href="mailto:hello@finsentric.com"
                className="hover:text-foreground transition-colors font-thin tracking-wide"
              >
                hello@finsentric.com
              </a>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            © {currentYear} Finsentric. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}