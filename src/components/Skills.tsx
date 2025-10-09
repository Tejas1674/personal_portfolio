import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, TestTube } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: [
        { name: "C#", level: "advanced" },
        { name: "ASP.NET Core", level: "advanced" },
        { name: "React.js", level: "intermediate" },
        { name: "JavaScript", level: "intermediate" },
        { name: "Java", level: "intermediate" },
        { name: "Express.js", level: "intermediate" },
      ],
    },
    {
      icon: Database,
      title: "Database & APIs",
      skills: [
        { name: "SQL", level: "advanced" },
        { name: "Entity Framework", level: "advanced" },
        { name: "ADO.NET", level: "advanced" },
        { name: "RESTful APIs", level: "advanced" },
        { name: "Node.js", level: "intermediate" },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: "advanced" },
        { name: "GitHub", level: "advanced" },
        { name: "Visual Studio", level: "advanced" },
        { name: "Postman", level: "intermediate" },
        { name: "Bruno", level: "intermediate" },
        { name: "jQuery", level: "intermediate" },
      ],
    },
    {
      icon: TestTube,
      title: "Testing & Best Practices",
      skills: [
        { name: "JUnit", level: "intermediate" },
        { name: "Code Optimization", level: "advanced" },
        { name: "Debugging", level: "advanced" },
        { name: "Module Testing", level: "advanced" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            A comprehensive toolkit for building scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 card-hover bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className={`
                      ${skill.level === 'advanced' 
                        ? 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30' 
                        : 'bg-muted text-foreground border-border hover:bg-muted/80'
                      }
                      transition-all cursor-default text-sm py-1.5 px-3
                    `}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="inline-block w-3 h-3 bg-primary/20 rounded mr-2"></span>
            Indicates advanced proficiency
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
