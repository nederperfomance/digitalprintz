import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo geométrico animado */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-primary rounded-lg rotate-45 animate-pulse"></div>
              <div className="absolute inset-0 w-24 h-24 border-4 border-primary/30 rounded-lg rotate-12 animate-spin-slow"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Uma gráfica não
            <br />
            <span className="text-primary">convencional</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Criação sem barreiras. Transformamos suas ideias em realidade 
            com qualidade excepcional e design inovador.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg">
              Ver portfolio
            </Button>
          </div>

          {/* Elementos decorativos */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto opacity-60">
            <div className="h-1 bg-primary rounded-full"></div>
            <div className="h-1 bg-muted rounded-full"></div>
            <div className="h-1 bg-primary/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;