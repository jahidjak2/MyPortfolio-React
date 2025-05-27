
import { Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Web Development", level: 90 },
  { name: "UI/UX Design", level: 80 },
  { name: "Backend Development", level: 85 },
  { name: "Mobile App Development", level: 70 },
  { name: "DevOps", level: 75 },
  { name: "Project Management", level: 85 },
];

const technologies = [
  "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "HTML5", "CSS3", "Tailwind CSS", "Git", "Docker",
  "AWS", "Firebase", "Redux", "GraphQL", "Next.js", "React Native"
];

export function ExpertiseSection() {
  return (
    <section className="section-container bg-muted" id="expertise">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center gap-2">
          <Award className="text-portfolio-primary" size={28} />
          <h3 className="section-subheading m-0">My Expertise</h3>
        </div>
        
        <h2 className="section-heading max-w-2xl">Skills and Technical Proficiency</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Skills</h3>
          
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-muted-foreground/20" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Technologies</h3>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div 
                key={tech} 
                className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
