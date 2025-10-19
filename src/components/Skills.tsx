import { Code2, Database, Wrench, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["C (Intermediate)", "Java (Basics)", "Python (Intermediate)"]
  },
  {
    icon: Wrench,
    title: "Frameworks & Libraries",
    skills: ["React Basics", "Node Basics", "Express Basics"]
  },
  {
    icon: Database,
    title: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "Google Collab", "MS Office"]
  },
  {
    icon: Sparkles,
    title: "AI & Others",
    skills: ["ChatGPT", "Google Gemini", "Claude", "Perplexity", "BOLT AI", "Lovable", "Prompt Engineering"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-spotify-darker">
      <div className="container mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-spotify-green">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My tech stack and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-spotify-card border-border hover:border-spotify-green transition-all duration-500 p-6 shadow-card hover:shadow-hover animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-spotify-green transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-spotify-hover border-border hover:border-spotify-green/50 transition-all text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
