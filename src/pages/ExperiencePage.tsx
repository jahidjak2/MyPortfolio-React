
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Briefcase, Building, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    id: 1,
    role: "Senior Developer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    location: "San Francisco, CA",
    description: "Led the development of multiple web applications using modern technologies including React, Node.js, and AWS. Managed a team of 5 developers and implemented CI/CD pipelines.",
    achievements: [
      "Launched 3 major applications that increased company revenue by 25%",
      "Implemented modern CI/CD pipelines that reduced deployment time by 40%",
      "Mentored junior developers, improving team productivity by 30%",
      "Led the migration from legacy systems to modern cloud architecture"
    ]
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2020",
    location: "Austin, TX",
    description: "Developed responsive web applications and e-commerce solutions using React, Redux, and WordPress. Collaborated with designers to implement pixel-perfect UI components.",
    achievements: [
      "Built 10+ responsive websites for clients across different industries",
      "Designed and implemented a custom e-commerce solution that increased client sales by 15%",
      "Optimized web performance, reducing load times by 50%",
      "Implemented automated testing, reducing bugs in production by 30%"
    ]
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Ventures",
    period: "2016 - 2018",
    location: "Boston, MA",
    description: "Assisted in the development of web applications using JavaScript, HTML, and CSS. Participated in code reviews and contributed to the improvement of development practices.",
    achievements: [
      "Contributed to the frontend development of the company's main product",
      "Implemented responsive design principles, improving mobile user experience",
      "Assisted in troubleshooting and bug fixing across multiple projects",
      "Learned and implemented new technologies under senior developer guidance"
    ]
  },
  {
    id: 4,
    role: "Intern",
    company: "Web Solutions Co.",
    period: "2015 - 2016",
    location: "Chicago, IL",
    description: "Worked on small web projects and learned about professional development workflows. Assisted the development team with testing and documentation.",
    achievements: [
      "Developed small features for client websites",
      "Created technical documentation for internal tools",
      "Participated in user testing sessions",
      "Learned about professional development workflows and best practices"
    ]
  }
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted py-16">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
            <p className="text-xl text-muted-foreground">My professional journey and career growth</p>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="section-container">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-portfolio-primary" size={28} />
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card key={exp.id} className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary"></div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <h3 className="text-xl font-medium">{exp.role}</h3>
                      <div className="flex items-center text-portfolio-primary gap-1 mt-1">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-portfolio-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
