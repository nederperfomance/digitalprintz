import { Users, Heart, Lightbulb, Target } from "lucide-react";

const AboutTeam = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Grandes Projetos Começam
            </span>
            <br />
            com Grandes Pessoas
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa equipe de mais de 70 profissionais talentosos combina técnica, estratégia e precisão. 
            De designers e técnicos a especialistas em acabamento, trabalhamos juntos trazendo 
            expertise e personalidade para cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Espírito Colaborativo</h3>
                <p className="text-muted-foreground">
                  A colaboração impulsiona nosso processo, e a qualidade é nossa assinatura. 
                  Cada membro da equipe contribui com sua expertise única para entregar resultados excepcionais.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Inovação e Criatividade</h3>
                <p className="text-muted-foreground">
                  Nossa equipe constantemente ultrapassa limites, trazendo perspectivas frescas 
                  e soluções inovadoras para cada desafio.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Precisão e Excelência</h3>
                <p className="text-muted-foreground">
                  Do conceito à conclusão, cada detalhe é meticulosamente trabalhado 
                  para superar expectativas e entregar resultados excepcionais.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Team representation with geometric shapes */}
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg ${
                    index % 4 === 0 
                      ? 'bg-gradient-to-br from-primary/30 to-primary/10' 
                      : index % 4 === 1
                      ? 'bg-gradient-to-br from-accent/30 to-accent/10'
                      : index % 4 === 2
                      ? 'bg-gradient-to-br from-secondary/30 to-secondary/10'
                      : 'bg-gradient-to-br from-primary/20 to-accent/10'
                  } animate-pulse`}
                  style={{ animationDelay: `${index * 100}ms` }}
                ></div>
              ))}
            </div>
            
            {/* Central highlight */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 text-center shadow-lg">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">70+</div>
                <div className="text-sm text-muted-foreground">Profissionais</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-primary">A colaboração impulsiona nosso processo, 
            e a qualidade é nossa assinatura.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;