
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CVPage = () => {
  const handleDownload = () => {
    // This would normally download the actual CV file
    alert("Downloading CV...");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted py-16">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Curriculum Vitae</h1>
            <p className="text-xl text-muted-foreground">Download my professional CV</p>
          </div>
        </section>
        
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
              {/* Preview */}
              <div className="p-8 md:p-12 border-b">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Jahidul Islam Jahid</h2>
                    <p className="text-lg text-portfolio-primary">Senior Web Developer</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Email:</p>
                      <p className="text-muted-foreground">jahidulislamjak2@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p className="text-muted-foreground">+880 015712-44650</p>
                    </div>
                    <div>
                      <p className="font-medium">Website:</p>
                      <p className="text-muted-foreground">jahid.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Location:</p>
                      <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold">Profile</h3>
                    <p className="text-muted-foreground">
                      Experienced web developer with a passion for creating responsive, user-friendly applications. Skilled in frontend and backend technologies with a focus on modern JavaScript frameworks. Proven track record of delivering high-quality solutions for clients across various industries.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold">Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between">
                          <p className="font-medium">Tech Innovations Inc.</p>
                          <p className="text-muted-foreground">2020 - Present</p>
                        </div>
                        <p className="text-portfolio-primary">Senior Developer</p>
                        <p className="text-muted-foreground">
                          Led the development of multiple web applications using modern technologies including React, Node.js, and AWS. Managed a team of 5 developers and implemented CI/CD pipelines.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <p className="font-medium">Digital Solutions Ltd.</p>
                          <p className="text-muted-foreground">2018 - 2020</p>
                        </div>
                        <p className="text-portfolio-primary">Web Developer</p>
                        <p className="text-muted-foreground">
                          Developed responsive web applications and e-commerce solutions using React, Redux, and WordPress. Collaborated with designers to implement pixel-perfect UI components.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold">Education</h3>
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium">Uttara University</p>
                        <p className="text-muted-foreground">2022 - 2025</p>
                      </div>
                      <p className="text-portfolio-primary">BSc. in Computer Science and Engineering</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "TypeScript", "React", "Node.js", "HTML5", "CSS3", "MySQL", "AWS", "Git"].map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-muted text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Download Button */}
              <div className="bg-muted p-4 flex justify-center">
                <Button onClick={handleDownload} className="w-full md:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                This is a preview of the CV. Click the download button to get the full PDF version.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CVPage;
