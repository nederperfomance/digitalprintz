const recognitions = [
  {
    category: "Fernando Pini",
    items: [
      "Melhor Press Kit - 2025",
      "Melhor Press Kit - 2025",
      "Melhor Press Kit - 2025"
    ]
  },
  {
    category: "Fernando Pini",
    items: [
      "Melhor Press Kit - 2025",
      "Melhor Press Kit - 2025",
      "Melhor Press Kit - 2025"
    ]
  },
  {
    category: "Fernando Pini",
    items: [
      "Melhor Press Kit - 2025",
      "Melhor Press Kit - 2025",
      "Melhor Press Kit - 2025"
    ]
  }
];

const RecognitionSection = () => {
  return (
    <section className="py-32 bg-secondary/20">
      <div className="w-full px-8 lg:px-16">
        {/* Header */}
        <div className="mb-24 animate-on-scroll">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-light text-muted-foreground tracking-widest">
              RECONHECIMENTO & PREMIAÇÕES
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <h2 className="text-7xl font-light text-foreground leading-tight">
                Nossa
                <span className="text-primary block">Excelência</span>
              </h2>
            </div>
            
            <div>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Reconhecidos pela qualidade e inovação em design, nossa trajetória 
                é marcada por premiações e destaque no mercado criativo brasileiro.
              </p>
            </div>
          </div>
        </div>

        {/* Recognition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {recognitions.map((recognition, categoryIndex) => (
            <div key={categoryIndex} className="animate-on-scroll">
              <div className="space-y-6">
                {/* Category Header */}
                <div className="pb-4 border-b border-border/30">
                  <h3 className="text-xl font-light text-foreground">
                    {recognition.category}
                  </h3>
                </div>

                {/* Recognition Items */}
                <div className="space-y-4">
                  {recognition.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm font-light text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center animate-on-scroll">
          <div className="space-y-8">
            <h3 className="text-3xl font-light text-foreground">
              Pronto para fazer parte desta história?
            </h3>
            
            <div className="flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
              <span className="text-sm font-medium tracking-wide">INICIAR PROJETO</span>
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;