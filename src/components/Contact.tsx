import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tejaspinjarkar2001@gmail.com",
      href: "mailto:tejaspinjarkar2001@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9766176749",
      href: "tel:+919766176749",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "http://linkedin.com/in/tejas-pinjarkar-59a280202",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tejaspinjarkar",
      color: "hover:text-foreground",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border animate-fade-in glow-effect">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-center text-muted-foreground mb-6">Connect with me on</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-4 bg-muted hover:bg-muted/80 rounded-lg 
                      transition-all card-hover flex items-center gap-3
                      ${social.color}
                    `}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center pt-8">
              <a href="mailto:tejaspinjarkar2001@gmail.com">
                <Button size="lg" className="gap-2 glow-effect">
                  <Mail className="w-5 h-5" />
                  Send me an email
                </Button>
              </a>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Speaks <span className="text-foreground font-medium">Hindi</span>,{" "}
            <span className="text-foreground font-medium">English</span>, and{" "}
            <span className="text-foreground font-medium">Marathi</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
