import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProfile from "@/assets/hero-profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-spotify-darker/90 via-spotify-dark/80 to-spotify-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src={heroProfile}
                alt="Singidi Sai Naga Sudheer"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-spotify-green shadow-hover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-spotify-card border border-border mb-6">
              <div className="w-2 h-2 rounded-full bg-spotify-green animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-spotify-green to-foreground bg-clip-text text-transparent">
              Singidi Sai Naga Sudheer
            </h1>

            <p className="text-2xl lg:text-3xl text-spotify-green font-semibold mb-4">
              Full Stack Developer
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Aspiring Full Stack Developer with hands-on experience in Python, MERN Stack, and AI Prompt Engineering, eager to contribute to real-world projects through innovative problem-solving.
            </p>

            {/* Location & Contact */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Srikakulam, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sudheergaming93@outlook.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-spotify-green hover:bg-spotify-green/90 text-white font-semibold px-8 shadow-hover transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-spotify-green text-spotify-green hover:bg-spotify-green/10 font-semibold px-8 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <a
                href="https://github.com/Sudheer625"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-spotify-card border border-border flex items-center justify-center hover:bg-spotify-hover hover:border-spotify-green transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/singidi-sainagasudheer-7751b3370"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-spotify-card border border-border flex items-center justify-center hover:bg-spotify-hover hover:border-spotify-green transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-spotify-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
