import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  "MS Office and C Programming - Srikakulam - 2022",
  "Core Java – Data Pro – 2023",
  "Cyber Security Awareness Workshop - Hyderabad - March 2024",
  "Cyber Security and Ethical Hacking - Online - September 2024",
  "Python Foundation Course - MentiBy - December 2024",
  "GEN AI Hackathon 2ND Prize - September 2025"
];

const achievements = [
  "Leadership in 24 Hour Hackathon GEN AI Project",
  "Solved 150+ LeetCode Problems with 2 Month Continuous Streak",
  "Class Representative for 2 Years"
];

const Education = () => {
  return (
    <section className="py-20 bg-spotify-darker">
      <div className="container mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Education & <span className="text-spotify-green">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="bg-spotify-card border-border hover:border-spotify-green transition-all duration-500 shadow-card hover:shadow-hover animate-slide-up group">
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-spotify-green transition-colors">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Sri Venkateswara College of Engineering and Technology
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Etcherla, Srikakulam
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <Badge className="bg-spotify-green hover:bg-spotify-green/90 text-white">
                  Graduating 2026
                </Badge>
                <Badge variant="secondary" className="bg-spotify-hover border-border">
                  CGPA: 7.5
                </Badge>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-spotify-green mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Notable Achievements
                </h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-spotify-green mt-1.5 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Certifications Card */}
          <Card className="bg-spotify-card border-border hover:border-spotify-green transition-all duration-500 shadow-card hover:shadow-hover animate-slide-up group" style={{ animationDelay: "0.2s" }}>
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-spotify-green transition-colors">
                    Certifications
                  </h3>
                  <p className="text-muted-foreground">
                    Professional training and workshops
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-spotify-hover/50 border border-border hover:border-spotify-green/50 transition-all group/cert"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-spotify-green mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground group-hover/cert:text-foreground transition-colors">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
