"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [counts, setCounts] = useState({
    alumni: 0,
    mentors: 0,
    events: 0,
  })

  useEffect(() => {
    const targets = {
      alumni: 10000,
      mentors: 500,
      events: 200,
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        alumni: Math.floor(targets.alumni * progress),
        mentors: Math.floor(targets.mentors * progress),
        events: Math.floor(targets.events * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">{counts.alumni.toLocaleString()}+</div>
            <div className="text-xl text-primary-foreground/90">Alumni Connected</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">{counts.mentors.toLocaleString()}+</div>
            <div className="text-xl text-primary-foreground/90">Active Mentors</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">{counts.events.toLocaleString()}+</div>
            <div className="text-xl text-primary-foreground/90">Events Hosted</div>
          </div>
        </div>
      </div>
    </section>
  )
}
