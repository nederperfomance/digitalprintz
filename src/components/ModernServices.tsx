import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Impressão Digital",
    categories: ["Offset Digital", "Grande Formato", "Materiais Especiais"],
    description: "Utilizamos tecnologia de ponta para criar impressões de alta qualidade em diversos materiais. Desde pequenas tiragens até grandes volumes, mantemos a excelência em cada projeto com equipamentos modernos e técnicas avançadas."
  },
  {
    number: "02", 
    title: "Design Gráfico",
    categories: ["Identidade Visual", "Editorial", "Packaging"],
    description: "Criamos soluções visuais inovadoras que comunicam sua marca de forma única e impactante. Nossa equipe desenvolve projetos que conectam marcas com seus públicos através do design estratégico."
  },
  {
    number: "03",
    title: "Encadernação Premium", 
    categories: ["Costura", "Capa Dura", "Acabamentos Especiais"],
    description: "Acabamentos perfeitos que valorizam seus projetos editoriais e corporativos. Oferecemos desde encadernações tradicionais até acabamentos especiais com hot stamping e vernizes seletivos."
  },
  {
    number: "04",
    title: "Soluções Personalizadas",
    categories: ["Protótipos", "Projetos Especiais", "Consultoria"],
    description: "Desenvolvemos soluções sob medida para projetos únicos e desafiadores. Nossa experiência nos permite criar produtos gráficos exclusivos que atendem às necessidades específicas de cada cliente."
  }
];

const ModernServices = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-32 bg-secondary/30">
      <div className="w-full px-8 lg:px-16">
        <div className="mb-24 animate-on-scroll">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-light text-muted-foreground tracking-widest">
              DIGITAL PRINTZ® CREATIVE SERVICES
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Side - Service List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-500 pb-8 border-b border-border/30 ${
                  activeService === index 
                    ? 'opacity-100' 
                    : 'opacity-40 hover:opacity-70'
                }`}
                onMouseEnter={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-8">
                  <span className={`text-7xl font-light transition-colors duration-300 ${
                    activeService === index 
                      ? 'text-primary' 
                      : 'text-muted-foreground/40'
                  }`}>
                    {service.number}
                  </span>
                  
                  <div className="flex-1">
                    <h3 className={`text-5xl font-light transition-colors duration-300 ${
                      activeService === index 
                        ? 'text-foreground' 
                        : 'text-muted-foreground'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className={`w-4 h-4 transition-all duration-300 ${
                    activeService === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-2'
                  }`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="lg:pl-12">
            <div className="space-y-8 animate-fade-in" key={activeService}>
              <div className="flex flex-wrap gap-3">
                {services[activeService].categories.map((category, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 text-sm font-medium text-foreground bg-muted/50 tracking-wide transition-all duration-300 hover:bg-primary/10"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <p className="text-xl font-light text-muted-foreground leading-relaxed">
                {services[activeService].description}
              </p>
              
              <div className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
                <span className="text-sm font-medium tracking-wide">Learn more</span>
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
      </div>
    </section>
  );
};

export default ModernServices;