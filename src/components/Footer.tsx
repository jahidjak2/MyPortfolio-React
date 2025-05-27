
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full bg-muted mt-auto">
      <div className="container py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl bg-gradient-to-r from-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-sm text-muted-foreground">
              A showcase of my professional work, experience, and expertise.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-portfolio-primary">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-portfolio-primary">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-portfolio-primary">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-portfolio-primary">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                hello@portfolio.com
              </li>
              <li className="text-sm text-muted-foreground">
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-portfolio-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-portfolio-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
