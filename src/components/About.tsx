import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Expertise",
      description: "Specialized in ASP.NET Core, building robust and scalable server-side applications",
    },
    {
      icon: Rocket,
      title: "Performance Focused",
      description: "Optimizing applications for efficiency, achieving 98-99% accuracy in automated workflows",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communicator and collaborative team player, delivering projects on time",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-foreground">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proactive Backend Developer with <span className="text-foreground font-medium">1.3 years of hands-on experience</span> in 
              building scalable applications using ASP.NET Core and React.js. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in creating efficient, maintainable code with a strong focus on optimization 
              and debugging. Known for my ability to break down complex problems efficiently and identify 
              effective solutions that deliver real business value.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working at <span className="text-primary font-medium">First American India</span> as a Member of Technical Staff, 
              where I provide ongoing support and maintenance for deployed applications while 
              continuously improving performance and scalability.
            </p>
          </div>
          
          <div className="grid gap-4 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 card-hover bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
