"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This platform helped me connect with my juniors and offer internships. It's amazing to see how technology can bridge generations.",
      author: "Sarah Johnson",
      role: "Alumni 2018, Software Engineer at Google",
    },
    {
      quote:
        "Finding a mentor through AlumniConnect changed my career trajectory. The guidance I received was invaluable.",
      author: "Michael Chen",
      role: "Current Student, Computer Science",
    },
    {
      quote:
        "As an admin, managing our alumni network has never been easier. The platform streamlines everything beautifully.",
      author: "Dr. Emily Rodriguez",
      role: "Alumni Relations Director",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Community Says</h2>
          <p className="text-muted-foreground text-lg">Real stories from our alumni, students, and administrators</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-card border-secondary/20">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-secondary mb-6 mx-auto" />
              <blockquote className="text-xl md:text-2xl text-center mb-8 text-card-foreground leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-lg text-card-foreground">{testimonials[currentIndex].author}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-secondary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
