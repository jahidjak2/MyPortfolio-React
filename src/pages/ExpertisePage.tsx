
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skills = [
  { name: "Web Development", level: 90, description: "Proficient in building modern, responsive web applications using the latest frameworks and technologies." },
  { name: "UI/UX Design", level: 80, description: "Experienced in creating intuitive and visually appealing user interfaces with a focus on usability and accessibility." },
  { name: "Backend Development", level: 85, description: "Skilled in building robust server-side applications, APIs, and database management systems." },
  { name: "Mobile App Development", level: 70, description: "Capable of developing cross-platform mobile applications with React Native and related technologies." },
  { name: "DevOps", level: 75, description: "Experienced in setting up CI/CD pipelines, containerization, and cloud infrastructure management." },
  { name: "Project Management", level: 85, description: "Proficient in managing projects from conception to completion, including team coordination and client communication." },
];

const technologies = {
  frontend: ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux", "GraphQL", "Next.js"],
  backend: ["Node.js", "Express", "Django", "Flask", "Ruby on Rails", "PHP", "GraphQL", "RESTful APIs", "Socket.IO"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Elasticsearch", "SQLite"],
  devops: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "CI/CD", "Jenkins", "GitHub Actions", "Terraform", "Ansible"],
  tools: ["Git", "VS Code", "Figma", "Adobe XD", "Postman", "Jira", "Notion", "Slack", "Webpack", "Babel"]
};

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2020",
    description: "Certified in designing distributed systems on AWS."
  },
  {
    name: "Professional Scrum Master",
    issuer: "Scrum.org",
    date: "2019",
    description: "Certified in Scrum framework and Agile methodologies."
  },
  {
    name: "Google UX Design Certification",
    issuer: "Google",
    date: "2021",
    description: "Comprehensive training in user experience design principles."
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2018",
    description: "Advanced knowledge in MongoDB database design and operations."
  }
];

const ExpertisePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted py-16">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Expertise</h1>
            <p className="text-xl text-muted-foreground">Skills, technologies, and professional qualifications</p>
          </div>
        </section>
        
        {/* Skills */}
        <section className="section-container">
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-portfolio-primary" size={28} />
            <h2 className="text-2xl font-bold">Skills & Proficiency</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <Card key={skill.name} className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-portfolio-primary font-medium">{skill.level}%</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={skill.level} className="h-2" />
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Technologies */}
        <section className="section-container bg-muted">
          <h2 className="text-2xl font-bold mb-8">Technologies & Tools</h2>
          
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="mb-8 flex flex-wrap h-auto p-1">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="frontend" className="mt-0">
              <div className="flex flex-wrap gap-3">
                {technologies.frontend.map((tech) => (
                  <div 
                    key={tech} 
                    className="px-4 py-2 rounded-md bg-background shadow-sm text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="backend" className="mt-0">
              <div className="flex flex-wrap gap-3">
                {technologies.backend.map((tech) => (
                  <div 
                    key={tech} 
                    className="px-4 py-2 rounded-md bg-background shadow-sm text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="database" className="mt-0">
              <div className="flex flex-wrap gap-3">
                {technologies.database.map((tech) => (
                  <div 
                    key={tech} 
                    className="px-4 py-2 rounded-md bg-background shadow-sm text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="devops" className="mt-0">
              <div className="flex flex-wrap gap-3">
                {technologies.devops.map((tech) => (
                  <div 
                    key={tech} 
                    className="px-4 py-2 rounded-md bg-background shadow-sm text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0">
              <div className="flex flex-wrap gap-3">
                {technologies.tools.map((tech) => (
                  <div 
                    key={tech} 
                    className="px-4 py-2 rounded-md bg-background shadow-sm text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Certifications */}
        <section className="section-container">
          <h2 className="text-2xl font-bold mb-8">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-portfolio-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{cert.name}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-portfolio-primary text-sm">{cert.issuer}</span>
                      <span className="text-muted-foreground text-sm">{cert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{cert.description}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExpertisePage;
