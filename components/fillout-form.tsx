"use client"

import { useEffect } from "react"

export function FilloutForm() {
  useEffect(() => {
    // Load the Fillout script if it hasn't been loaded already
    if (!document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      const script = document.createElement('script')
      script.src = "https://server.fillout.com/embed/v1/"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div 
          style={{ width: "100%", height: "500px" }} 
          data-fillout-id="dtuncbysgmus" 
          data-fillout-embed-type="standard" 
          data-fillout-inherit-parameters 
          data-fillout-dynamic-resize
        />
      </div>
    </section>
  )
}