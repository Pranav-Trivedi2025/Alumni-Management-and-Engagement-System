import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm">AC</span>
            </div>
            <h1 className="text-2xl font-bold">AlumniConnect</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-secondary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-secondary transition-colors">
              About
            </a>
            <a href="#features" className="hover:text-secondary transition-colors">
              Features
            </a>
            <a href="#events" className="hover:text-secondary transition-colors">
              Events
            </a>
            <a href="#contact" className="hover:text-secondary transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="secondary" className="font-semibold">
            Login / Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}
