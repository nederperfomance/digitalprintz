const stats = [
  {
    number: "500+",
    description: "projetos realizados com excelência em design e impressão"
  },
  {
    number: "8",
    description: "anos transformando ideias em realidade tangível"
  },
  {
    number: "9.9",
    description: "avaliação média que recebemos de nossos clientes"
  }
];

const StatsSection = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 animate-on-scroll max-w-3xl">
          <p className="text-lg font-light text-foreground leading-relaxed">
            A Digital Printz® é uma gráfica especializada em soluções criativas, 
            fundada em 2016, com foco em impressão digital, design gráfico e 
            acabamentos premium. Com uma década de expertise combinada, 
            entregamos soluções inovadoras e impactantes para diversos segmentos.
          </p>
          
          <div className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group mt-8">
            <span className="text-sm font-medium tracking-wide">NOSSA HISTÓRIA</span>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="text-8xl font-light text-foreground mb-4">
                {stat.number}
              </div>
              <div className="w-16 h-px bg-foreground mb-6"></div>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;