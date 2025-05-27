
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Folder, ExternalLink, Github, Search } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, user authentication, and payment processing.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web App",
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for task management with features like drag-and-drop, calendar integration, and team collaboration tools.",
    image: "/placeholder.svg",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    category: "Web App",
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS. Features a clean design, project showcase, and contact form.",
    image: "/placeholder.svg",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Website",
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that displays current weather and forecasts for multiple locations. Integrates with the OpenWeatherMap API.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "API", "CSS", "Chart.js"],
    category: "Web App",
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "A recipe search application that allows users to find recipes based on ingredients they have. Integrates with a food recipe API.",
    image: "/placeholder.svg",
    tags: ["React", "API", "Styled Components"],
    category: "Web App",
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A content management system for blogs with features including rich text editing, comments, and user authentication.",
    image: "/placeholder.svg",
    tags: ["Next.js", "MongoDB", "TailwindCSS"],
    category: "Web App",
    liveLink: "#",
    repoLink: "#",
  },
];

const categories = ["All", "Web App", "Website", "Mobile App", "Design"];

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted py-16">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground">A showcase of my work and technical skills</p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="section-container pt-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8">
            <div className="w-full md:w-auto flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects..."
                className="pl-9" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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
                    <Badge variant="outline" className="w-fit">{project.category}</Badge>
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
          ) : (
            <div className="flex flex-col items-center py-16">
              <Folder className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
