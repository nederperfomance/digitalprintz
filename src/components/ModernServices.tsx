const services = [
  {
    number: "01",
    title: "Impressão Digital",
    categories: ["Offset Digital", "Grande Formato", "Materiais Especiais"],
    description: "Utilizamos tecnologia de ponta para criar impressões de alta qualidade em diversos materiais. Desde pequenas tiragens até grandes volumes, mantemos a excelência em cada projeto."
  },
  {
    number: "02", 
    title: "Design Gráfico",
    categories: ["Identidade Visual", "Editorial", "Packaging"],
    description: "Criamos soluções visuais inovadoras que comunicam sua marca de forma única e impactante."
  },
  {
    number: "03",
    title: "Encadernação Premium", 
    categories: ["Costura", "Capa Dura", "Acabamentos Especiais"],
    description: "Acabamentos perfeitos que valorizam seus projetos editoriais e corporativos."
  },
  {
    number: "04",
    title: "Soluções Personalizadas",
    categories: ["Protótipos", "Projetos Especiais", "Consultoria"],
    description: "Desenvolvemos soluções sob medida para projetos únicos e desafiadores."
  }
];

const ModernServices = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 animate-on-scroll">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-light text-muted-foreground tracking-widest">
              DIGITAL PRINTZ® CREATIVE SERVICES
            </span>
          </div>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-2">
                  <span className="text-6xl font-light text-muted-foreground/30">
                    {service.number}
                  </span>
                </div>
                
                <div className="lg:col-span-4">
                  <h3 className="text-4xl font-light text-foreground mb-6">
                    {service.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.categories.map((category, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-foreground bg-muted/50 tracking-wide"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-6">
                  <p className="text-lg font-light text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium tracking-wide">SAIBA MAIS</span>
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
              
              {index < services.length - 1 && (
                <div className="w-full h-px bg-border mt-24"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernServices;