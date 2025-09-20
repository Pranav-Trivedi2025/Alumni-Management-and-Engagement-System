import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">AC</span>
              </div>
              <h3 className="text-2xl font-bold">AlumniConnect</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Connecting generations of learners and fostering lifelong relationships within educational communities.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-secondary hover:text-secondary/80 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-secondary hover:text-secondary/80 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-secondary hover:text-secondary/80 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#careers" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">info@alumniconnect.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 AlumniConnect. All rights reserved. | Powered by IndoCode – SIH 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
