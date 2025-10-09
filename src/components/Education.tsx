import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Diploma in Advanced Computing",
      institution: "CDAC",
      date: "April 2024",
      description: "Specialized training in modern computing technologies and software development practices",
    },
    {
      degree: "B.Tech in Electronic and Telecommunication",
      institution: "University",
      date: "June 2023",
      description: "Foundation in engineering principles, electronics, and telecommunications systems",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="p-8 card-hover bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  </div>
                  
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.date}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
