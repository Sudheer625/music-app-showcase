import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "EduFun LMS",
    description: "A centralized learning management platform for motivation, accountability, and visualizing day-to-day progress with discipline tracking.",
    tech: ["React", "Lovable Cloud", "Node.js", "REST APIs"],
    liveLink: "https://edu-fun-hub.lovable.app",
    highlights: [
      "Centralized learning platform",
      "Progress visualization",
      "Accountability features"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-spotify-dark">
      <div className="container mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-spotify-green">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building innovative solutions for real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-spotify-card border-border hover:border-spotify-green transition-all duration-500 overflow-hidden shadow-card hover:shadow-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-spotify-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-spotify-green mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-spotify-green mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="bg-spotify-hover border-border hover:border-spotify-green transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Button
                    asChild
                    className="flex-1 bg-spotify-green hover:bg-spotify-green/90 text-white font-semibold"
                  >
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
