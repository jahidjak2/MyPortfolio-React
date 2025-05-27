
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BookUser } from "lucide-react";

export function AboutSection() {
  return (
    <section className="section-container" id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-2/5">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <img 
              src="/placeholder.jpg" 
              alt="Profile" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary/30 to-transparent"></div>
          </div>
        </div>
        
        <div className="w-full md:w-3/5 space-y-6">
          <div className="flex items-center gap-2">
            <BookUser className="text-portfolio-primary" size={28} />
            <h3 className="section-subheading m-0">About Me</h3>
          </div>
          
          <h2 className="section-heading">Professional with Passion and Purpose</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm a dedicated professional with expertise in my field. I believe in continuous learning and innovation to create impactful solutions. My journey in this industry has equipped me with both technical skills and a deep understanding of user needs.
            </p>
            
            <p className="text-muted-foreground">
              When not working on projects, I enjoy staying updated with industry trends, contributing to open source, and mentoring upcoming talents. My approach combines technical excellence with creativity and user-centered design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Card>
              <CardContent className="p-4 space-y-1">
                <p className="text-2xl font-bold text-portfolio-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 space-y-1">
                <p className="text-2xl font-bold text-portfolio-secondary">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
          </div>
          
          <Button asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
