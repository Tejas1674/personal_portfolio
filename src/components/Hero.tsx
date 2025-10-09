import { Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-muted-foreground">👋 Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Tejas Pinjarkar</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
            Software Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Backend Developer specializing in <span className="text-foreground font-medium">ASP.NET Core</span> and{" "}
            <span className="text-foreground font-medium">React.js</span> with 1.3 years of hands-on experience building scalable applications
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:tejaspinjarkar2001@gmail.com" className="inline-flex">
              <Button variant="default" size="lg" className="gap-2 glow-effect">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
            </a>
            
            <a href="#projects" className="inline-flex">
              <Button variant="outline" size="lg" className="gap-2">
                View Projects
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Hyderabad, Telangana</span>
            </div>
            
            <a 
              href="mailto:tejaspinjarkar2001@gmail.com" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>tejaspinjarkar2001@gmail.com</span>
            </a>
            
            <a 
              href="tel:+919766176749" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 9766176749</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="http://linkedin.com/in/tejas-pinjarkar-59a280202"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all card-hover"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            
            <a
              href="https://github.com/tejaspinjarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all card-hover"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
