
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookUser, Award, GraduationCap } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted py-16">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">Learn more about my background, skills, and experience.</p>
          </div>
        </section>
        
        {/* About Content */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookUser className="text-portfolio-primary" size={28} />
                <h2 className="text-2xl font-bold">My Story</h2>
              </div>
              
              <div className="space-y-4">
                <p>
                  I'm a passionate professional with over 5 years of experience in my field. My journey began with a strong interest in technology and design, which led me to pursue formal education and training in this area.
                </p>
                
                <p>
                  Throughout my career, I've collaborated with diverse teams on projects ranging from small startups to large enterprise applications. This has given me a versatile skill set and the ability to adapt to different work environments and project requirements.
                </p>
                
                <p>
                  I believe in continuous learning and staying updated with industry trends and technologies. My approach combines technical expertise with creative problem-solving to deliver solutions that meet both business objectives and user needs.
                </p>
                
                <p>
                  When not working, I enjoy contributing to open-source projects, mentoring upcoming talents in the field, and participating in community events and workshops.
                </p>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-portfolio-primary" size={28} />
                  <h2 className="text-2xl font-bold">Personal Values</h2>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-portfolio-primary mr-2">•</span>
                    <span>Constant growth and learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-portfolio-primary mr-2">•</span>
                    <span>Collaboration and open communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-portfolio-primary mr-2">•</span>
                    <span>Attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-portfolio-primary mr-2">•</span>
                    <span>User-centered approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-portfolio-primary mr-2">•</span>
                    <span>Innovation and creative thinking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="sticky top-24">
                <div className="aspect-square rounded-xl overflow-hidden mb-8">
                  <img 
                    src="/placeholder.jpg" 
                    alt="Profile" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-portfolio-primary">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-portfolio-secondary">50+</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-portfolio-accent">15+</p>
                    <p className="text-sm text-muted-foreground">Clients</p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-portfolio-primary">10+</p>
                    <p className="text-sm text-muted-foreground">Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education */}
        <section className="section-container bg-muted">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-portfolio-primary" size={28} />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-l-2 border-portfolio-primary pl-6 relative before:absolute before:w-3 before:h-3 before:bg-portfolio-primary before:rounded-full before:-left-[7px]">
              <h3 className="text-xl font-medium">Master's Degree in Computer Science</h3>
              <p className="text-portfolio-primary">University of Technology</p>
              <p className="text-muted-foreground">2014 - 2016</p>
              <p className="mt-2">
                Specialized in software development and user interface design. Thesis focused on improving user experience in web applications through modern frontend technologies.
              </p>
            </div>
            
            <div className="border-l-2 border-portfolio-primary pl-6 relative before:absolute before:w-3 before:h-3 before:bg-portfolio-primary before:rounded-full before:-left-[7px]">
              <h3 className="text-xl font-medium">Bachelor's Degree in Information Technology</h3>
              <p className="text-portfolio-primary">State University</p>
              <p className="text-muted-foreground">2010 - 2014</p>
              <p className="mt-2">
                Studied fundamental programming concepts, database management, and web technologies. Participated in several hackathons and coding competitions.
              </p>
            </div>
            
            <div className="border-l-2 border-portfolio-primary pl-6 relative before:absolute before:w-3 before:h-3 before:bg-portfolio-primary before:rounded-full before:-left-[7px]">
              <h3 className="text-xl font-medium">Professional Certification in UX Design</h3>
              <p className="text-portfolio-primary">Design Institute</p>
              <p className="text-muted-foreground">2016</p>
              <p className="mt-2">
                Comprehensive training in user experience design principles, user research methods, and prototyping tools.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
