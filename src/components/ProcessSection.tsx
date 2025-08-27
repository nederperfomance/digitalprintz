const processSteps = [
  {
    number: "01",
    title: "Briefing & Conceito",
    description: "Entendemos suas necessidades e objetivos para criar um conceito único que represente sua marca de forma autêntica.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "02", 
    title: "Design & Desenvolvimento",
    description: "Nossa equipe criativa desenvolve soluções visuais inovadoras, sempre priorizando qualidade e impacto visual.",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "03",
    title: "Produção & Impressão", 
    description: "Utilizamos equipamentos de última geração e os melhores materiais para garantir resultados excepcionais.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "04",
    title: "Entrega & Acompanhamento",
    description: "Cuidamos de cada detalhe até a entrega final, garantindo sua satisfação completa com o resultado.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 animate-on-scroll">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-light text-muted-foreground tracking-widest">
              NOSSO PROCESSO CRIATIVO
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <h2 className="text-7xl font-light text-foreground leading-tight">
                Como
                <span className="text-primary block">Trabalhamos</span>
              </h2>
            </div>
            
            <div>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Cada projeto é único e merece atenção especial. Nosso processo foi 
                desenvolvido ao longo de anos para garantir resultados excepcionais 
                em cada etapa do desenvolvimento.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <div key={index} className="animate-on-scroll">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted/30 group">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-black/10"></div>
                    
                    <div className="absolute top-8 left-8">
                      <div className="w-16 h-16 bg-background/90 flex items-center justify-center">
                        <span className="text-xl font-light text-foreground">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-6xl font-light text-muted-foreground/30">
                        {step.number}
                      </span>
                      <div className="w-16 h-0.5 bg-primary"></div>
                    </div>
                    
                    <h3 className="text-4xl font-light text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-md">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
                      <span className="text-sm font-medium tracking-wide">SAIBA MAIS</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;