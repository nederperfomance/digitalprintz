import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary to-primary/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-t from-accent to-primary rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="geometric-diamond w-24 h-24 top-32 right-20 opacity-20 animate-spin-slow"></div>
        <div className="geometric-diamond w-16 h-16 top-1/2 left-20 opacity-30 animate-pulse"></div>
        <div className="geometric-diamond w-32 h-32 bottom-32 right-1/3 opacity-15 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Descontraindo o Mercado
            </span>
            <br />
            <span className="text-foreground">
              com Criatividade Impressa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in delay-200">
            Sua gráfica digital favorita. Na Digital Printz, combinamos inovação, 
            tecnologia e resultados impecáveis para transformar marcas e dar vida a histórias 
            através de experiências excepcionais de impressão.
          </p>
          
          <Button 
            size="lg" 
            className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 animate-fade-in delay-400"
          >
            Comece Seu Projeto
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;