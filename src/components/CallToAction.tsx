
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary opacity-10"></div>
        <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-portfolio-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">
          Ready to Collaborate on Your Next Project?
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Let's create something amazing together. Download my CV to learn more about my qualifications or get in touch to discuss your project requirements.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Get In Touch</Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/cv">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
