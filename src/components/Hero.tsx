
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-30">
        <div className="absolute right-0 top-0 w-3/4 h-3/4 bg-portfolio-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-3/4 h-3/4 bg-portfolio-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-3xl animate-fade-up">
          Welcome to My
          <span className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent"> Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          I'm a professional showcasing my work, experience, and expertise. Explore my journey, projects, and skills.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg">
            <Link to="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/cv">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
