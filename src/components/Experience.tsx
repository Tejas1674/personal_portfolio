import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    "Provided ongoing support and maintenance for deployed applications, emphasizing code optimization and efficient debugging",
    "Performed module-level testing and implemented fixes to enhance seamless development workflows",
    "Optimized application performance and scalability by diagnosing and resolving system flaws",
    "Demonstrated ability to break down problems efficiently and identify effective solutions",
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative animate-fade-in-left">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
          
          <Card className="p-8 card-hover bg-card border-border relative md:ml-16">
            <div className="absolute -left-[52px] top-8 w-10 h-10 bg-primary rounded-full items-center justify-center hidden md:flex">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Member of Technical Staff</h3>
                  <p className="text-lg text-primary font-medium">First American India</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Present</span>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Location:</span> Hyderabad, Telangana
              </p>
              
              <div className="space-y-3 mt-6">
                <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
