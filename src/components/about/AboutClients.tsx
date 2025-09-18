import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutClients = () => {
  const clients = [
    { name: "Havaianas", logo: "H" },
    { name: "Carolina Herrera", logo: "CH" },
    { name: "CBF Brasil", logo: "CBF" },
    { name: "Mondelez", logo: "M" },
    { name: "Drogasil", logo: "D" },
    { name: "Motorola", logo: "MOT" },
    { name: "Faber-Castell", logo: "FC" },
    { name: "C6 Bank", logo: "C6" },
    { name: "Smart Fit", logo: "SF" },
    { name: "Ferrero", logo: "F" },
    { name: "Royal Canin", logo: "RC" },
    { name: "Nestlé", logo: "N" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Partners in Success
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From fashion to sports, from beverages to beauty, we partner with Brazil's most 
            recognized brands who trust us to bring their vision to life – including leading 
            companies across diverse industries.
          </p>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative bg-card/50 hover:bg-card/80 border border-border/20 hover:border-primary/30 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Logo placeholder - in real implementation, these would be actual logos */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300">
                <span className="text-lg font-bold text-foreground">{client.logo}</span>
              </div>
              
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {client.name}
              </h3>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Case studies section */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Success Stories That Inspire
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our case studies to see how press kits, packaging, books, and custom 
              print experiences create measurable impact for brands across industries.
            </p>
            
            <Button variant="outline" size="lg" className="group">
              View Case Studies
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Industry Sectors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClients;