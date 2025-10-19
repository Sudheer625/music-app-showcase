import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sudheergaming93@outlook.com",
    href: "mailto:sudheergaming93@outlook.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6305031332",
    href: "tel:+916305031332"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Srikakulam, Andhra Pradesh",
    href: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Sudheer625",
    username: "@Sudheer625"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/singidi-sainagasudheer-7751b3370",
    username: "Singidi Sai Naga Sudheer"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-spotify-dark">
      <div className="container mx-auto px-6">
        <div className="mb-12 animate-fade-in text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-spotify-green">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <Card className="bg-spotify-card border-border p-8 shadow-card animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="group">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-start gap-4 p-3 rounded-lg hover:bg-spotify-hover transition-all"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                            <p className="text-foreground group-hover:text-spotify-green transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-3 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                            <p className="text-foreground">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-spotify-card border-border p-8 shadow-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-spotify-hover border border-border hover:border-spotify-green transition-all group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-spotify-green transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="w-full bg-spotify-green hover:bg-spotify-green/90 text-white font-semibold shadow-hover"
                >
                  <a
                    href="mailto:sudheergaming93@outlook.com"
                    className="flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send me an email
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-primary p-8 text-center border-0 shadow-hover animate-scale-in">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-spotify-green hover:bg-white/90 font-semibold px-8"
              asChild
            >
              <a href="mailto:sudheergaming93@outlook.com">
                Start a conversation
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
