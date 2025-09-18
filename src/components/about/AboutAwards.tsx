import { Trophy, Award, Star } from "lucide-react";

const AboutAwards = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Trophy className="h-16 w-16 text-primary animate-pulse" />
              <div className="absolute -top-2 -right-2">
                <Star className="h-6 w-6 text-accent animate-spin-slow" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Excelência Comprovada 
            </span>
            <br />
            desde o Primeiro Dia
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/20 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary mr-3" />
              <span className="text-lg font-semibold text-primary">Prêmio Fernando Pini de Excelência Gráfica</span>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Em nossa primeira participação no Prêmio Fernando Pini de Excelência Gráfica, 
              conquistamos <span className="font-bold text-primary">primeiro lugar em 3 categorias</span> – 
              prova de que inovação e excelência caminham juntas desde o início.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoje, continuamos evoluindo, moldando o futuro da comunicação impressa 
              mantendo a criatividade no centro de tudo que fazemos.
            </p>
          </div>
          
          {/* Stats display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1ª</div>
              <div className="text-sm text-muted-foreground">Primeira Participação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Prêmios Conquistados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Taxa de Excelência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAwards;