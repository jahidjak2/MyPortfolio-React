
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const experiences = [
  {
    id: 1,
    role: "Senior Developer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description: "Led the development of multiple web applications using modern technologies including React, Node.js, and AWS. Managed a team of 5 developers and implemented CI/CD pipelines.",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2020",
    description: "Developed responsive web applications and e-commerce solutions using React, Redux, and WordPress. Collaborated with designers to implement pixel-perfect UI components.",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Ventures",
    period: "2016 - 2018",
    description: "Assisted in the development of web applications using JavaScript, HTML, and CSS. Participated in code reviews and contributed to the improvement of development practices.",
  },
];

export function ExperienceSection() {
  return (
    <section className="section-container bg-muted" id="experience">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center gap-2">
          <Briefcase className="text-portfolio-primary" size={28} />
          <h3 className="section-subheading m-0">My Experience</h3>
        </div>
        
        <h2 className="section-heading max-w-2xl">Professional Journey and Career Growth</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <Card key={exp.id} className="group hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-medium">{exp.role}</CardTitle>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {exp.period}
                </div>
              </div>
              <p className="text-portfolio-primary font-medium">{exp.company}</p>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-10">
        <Button asChild variant="outline">
          <Link to="/experience">View Full Experience</Link>
        </Button>
      </div>
    </section>
  );
}
