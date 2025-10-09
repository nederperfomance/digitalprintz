import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sua casa digital
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Na Digital PrintZ, acreditamos que cada projeto é único e merece 
              uma abordagem personalizada. Somos uma gráfica que quebra os padrões
              convencionais, oferecendo soluções criativas e inovadoras.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Nossa missão é transformar suas ideias em realidade tangível, 
              combinando tecnologia de ponta com um olhar artístico apurado. 
              Trabalhamos com diversos tipos de materiais e oferecemos 
              acabamentos exclusivos.
            </p>
            
            <Button className="group">
              Conheça nossa história
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg"></div>
                <div className="h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-lg"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg"></div>
                <div className="h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-primary/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;