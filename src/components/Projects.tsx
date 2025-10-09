import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Shield, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Geo Tools",
      description: "A comprehensive county creation module with end-to-end validation and automation capabilities",
      icon: CheckCircle2,
      achievements: [
        "Achieved 99% process accuracy through automated validation",
        "Reduced onboarding time by 50% with template generation",
        "Implemented duplicate checks and security settings enforcement",
        "Streamlined county setup workflows, reducing manual errors",
      ],
      technologies: ["ASP.NET Core", "React.js", "SQL Server", "RESTful APIs"],
      impact: "99% Accuracy",
    },
    {
      title: "NCS 1.0",
      description: "Dynamic rule configuration system for region-specific and role-based policy enforcement",
      icon: Shield,
      achievements: [
        "Implemented flexible rule mapping based on organizational structure",
        "Achieved 98% rule accuracy through automated validation",
        "Designed scalable modules for future expansion across states",
        "Developed data integrity checks and exception handling workflows",
      ],
      technologies: ["C#", "ASP.NET Core", "Entity Framework", "ADO.NET"],
      impact: "98% Rule Accuracy",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Delivering high-impact solutions with measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-8 card-hover bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {project.impact}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="bg-muted/50 border-primary/20 text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
