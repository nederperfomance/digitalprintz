const portfolioItems = [
  {
    title: "Identidade Visual - Tech Startup",
    category: "Branding",
    description: "Desenvolvimento completo de identidade visual para startup de tecnologia, incluindo logo, papelaria e manual de marca.",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    year: "2024"
  },
  {
    title: "Catálogo Premium - Moda",
    category: "Editorial",
    description: "Impressão de catálogo de alta qualidade para marca de moda, com acabamento especial e papel importado.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    year: "2024"
  },
  {
    title: "Packaging Sustentável",
    category: "Design de Produto",
    description: "Criação de embalagens eco-friendly com impressão especial para linha de cosméticos naturais.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    year: "2023"
  },
  {
    title: "Material Corporativo",
    category: "Impressão Digital", 
    description: "Desenvolvimento de material institucional completo para empresa multinacional, incluindo relatórios anuais.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    year: "2023"
  },
  {
    title: "Livro de Arte Limitado",
    category: "Encadernação Premium",
    description: "Edição limitada com capa dura, hot stamping e papel especial para artista contemporâneo.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    year: "2023"
  },
  {
    title: "Campanha Visual - Evento",
    category: "Grande Formato",
    description: "Impressão em grande formato para evento corporativo, incluindo backdrops, banners e sinalização.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    year: "2024"
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 animate-on-scroll">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-light text-muted-foreground tracking-widest">
              PORTFÓLIO SELECIONADO
            </span>
          </div>
          
          <h2 className="text-7xl font-light text-foreground leading-tight max-w-4xl">
            Projetos que 
            <span className="text-primary block">Transformam</span>
            Marcas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group animate-on-scroll cursor-pointer">
              <div className="relative overflow-hidden bg-muted/30 aspect-[4/5] mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                <div className="absolute top-6 right-6">
                  <span className="bg-background/90 text-foreground text-xs font-medium px-3 py-1 tracking-wide">
                    {item.year}
                  </span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/95 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-primary font-medium tracking-wide mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-primary font-medium tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-light text-foreground">
                    {item.title}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-medium tracking-wide">VER PROJETO</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-on-scroll">
          <div className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
            <span className="text-sm font-medium tracking-wide">VER TODOS OS PROJETOS</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;