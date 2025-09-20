import { FolderOpen, Handshake, Calendar, Lightbulb } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: FolderOpen,
      title: "Manage Alumni Data",
      description: "Comprehensive database of alumni information and achievements",
    },
    {
      icon: Handshake,
      title: "Mentorship & Networking",
      description: "Connect students with experienced alumni for guidance and support",
    },
    {
      icon: Calendar,
      title: "Events & Engagement",
      description: "Organize reunions, workshops, and networking events seamlessly",
    },
    {
      icon: Lightbulb,
      title: "Career Opportunities",
      description: "Job postings, internships, and career development resources",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Key Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build and maintain a thriving alumni community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
