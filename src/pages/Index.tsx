
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ContactSection } from "@/components/ContactSection";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ExpertiseSection />
        <ContactSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
