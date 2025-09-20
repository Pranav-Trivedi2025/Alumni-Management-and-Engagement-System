import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-secondary rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-secondary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            {"Connecting Alumni. Empowering Students. Strengthening Institutions."}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-4xl mx-auto text-pretty">
            {"A centralized platform to manage alumni, foster mentorship, host events, and build lifelong bonds."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/95 backdrop-blur-sm border-secondary/20 hover:border-secondary transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">Alumni Portal</CardTitle>
              <CardDescription className="text-muted-foreground">
                Connect with your alma mater and fellow graduates
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Login as Alumni</Button>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur-sm border-secondary/20 hover:border-secondary transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">Student Access</CardTitle>
              <CardDescription className="text-muted-foreground">Find mentors and career opportunities</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Login as Student
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur-sm border-secondary/20 hover:border-secondary transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">Admin Dashboard</CardTitle>
              <CardDescription className="text-muted-foreground">Manage the entire alumni network</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Login as Admin</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
