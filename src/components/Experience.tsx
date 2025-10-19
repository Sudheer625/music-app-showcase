import { Briefcase, Calendar, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Averixis Solutions",
    location: "Bengaluru",
    role: "MERN Stack Using AI Intern",
    duration: "May 2025 - August 2025",
    achievements: [
      "Achieved Best Intern Appreciation",
      "Cleared Mock Interview Rounds"
    ]
  },
  {
    company: "Supraja Technologies",
    location: "Vijayawada",
    role: "Cyber Security and Ethical Hacking Intern",
    duration: "July 2024 - September 2024",
    achievements: [
      "Achieved Daily Active Person Badge in Training Classes",
      "Lead a Team of 4 members on a Cyber Security Mini Project"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-spotify-dark">
      <div className="container mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-spotify-green">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-spotify-card border-border hover:border-spotify-green transition-all duration-500 overflow-hidden shadow-card hover:shadow-hover animate-slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8 lg:ml-12 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-[-3.5rem] top-8 w-4 h-4 rounded-full bg-spotify-green border-4 border-spotify-dark hidden lg:block group-hover:scale-125 transition-transform"></div>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-spotify-green transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-muted-foreground">
                            {exp.company} • {exp.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Badge 
                      variant="secondary"
                      className="bg-spotify-hover border-border text-sm flex items-center gap-2 w-fit"
                    >
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-spotify-green">
                      <Award className="w-4 h-4" />
                      <span>Key Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-spotify-green mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
