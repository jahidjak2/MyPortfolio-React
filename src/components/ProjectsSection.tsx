
import { Folder, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, user authentication, and payment processing.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for task management with features like drag-and-drop, calendar integration, and team collaboration tools.",
    image: "/placeholder.svg",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS. Features a clean design, project showcase, and contact form.",
    image: "/placeholder.svg",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    repoLink: "#",
  },
];

export function ProjectsSection() {
  return (
    <section className="section-container" id="projects">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center gap-2">
          <Folder className="text-portfolio-primary" size={28} />
          <h3 className="section-subheading m-0">My Projects</h3>
        </div>
        
        <h2 className="section-heading max-w-2xl">Featured Work and Portfolio Highlights</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="group overflow-hidden flex flex-col hover:shadow-md transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
            <CardHeader className="pb-2">
              <h3 className="text-xl font-medium">{project.title}</h3>
            </CardHeader>
            
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between pt-2 border-t">
              <Button asChild variant="ghost" size="sm">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
              
              <Button asChild variant="ghost" size="sm">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link to="/projects">View All Projects</Link>
        </Button>
      </div>
    </section>
  );
}
