import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-spotify-dark">
      <Navigation />
      <Hero />
      <Projects />
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-spotify-darker border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Singidi Sai Naga Sudheer. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
