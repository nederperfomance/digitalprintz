const portfolioProjects = [
  {
    id: 1,
    title: "Identidade Visual Completa",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 2,  
    title: "Catálogo Premium",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 3,
    title: "Packaging Inovador", 
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1555529902-ce73c7bb5bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 4,
    title: "Campanha Publicitária",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }
];

const InteractivePortfolio = () => {
  return (
    <section className="py-32 bg-background">
      <div className="w-full px-8 lg:px-16">
        {/* Header */}
        <div className="mb-24 animate-on-scroll">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-light text-muted-foreground tracking-widest">
              PORTFÓLIO SELECIONADO
            </span>
          </div>
          
          <h2 className="text-7xl font-light text-foreground leading-tight">
            Projetos que 
            <span className="text-primary block">Transformam</span>
          </h2>
        </div>

        {/* 2x2 Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl">
          {/* Project 1 - Large */}
          <div className="lg:col-span-2 lg:row-span-2 group cursor-pointer animate-on-scroll">
            <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-muted">
              <img 
                src={portfolioProjects[0].image} 
                alt={portfolioProjects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-opacity duration-300 group-hover:bg-foreground/10"></div>
              
              {/* Number */}
              <div className="absolute top-8 left-8">
                <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">01</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-background">
                  <span className="text-sm font-light tracking-widest opacity-80 block mb-2">
                    {portfolioProjects[0].category.toUpperCase()}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-light mb-4">
                    {portfolioProjects[0].title}
                  </h3>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">View project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Medium */}
          <div className="group cursor-pointer animate-on-scroll">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img 
                src={portfolioProjects[1].image} 
                alt={portfolioProjects[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-opacity duration-300 group-hover:bg-foreground/10"></div>
              
              {/* Number */}
              <div className="absolute top-6 left-6">
                <div className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-foreground">02</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-background">
                  <span className="text-xs font-light tracking-widest opacity-80 block mb-1">
                    {portfolioProjects[1].category.toUpperCase()}
                  </span>
                  <h3 className="text-lg font-light mb-2">
                    {portfolioProjects[1].title}
                  </h3>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium">View project</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Medium */}
          <div className="group cursor-pointer animate-on-scroll">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img 
                src={portfolioProjects[2].image} 
                alt={portfolioProjects[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-opacity duration-300 group-hover:bg-foreground/10"></div>
              
              {/* Number */}
              <div className="absolute top-6 left-6">
                <div className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-foreground">03</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-background">
                  <span className="text-xs font-light tracking-widest opacity-80 block mb-1">
                    {portfolioProjects[2].category.toUpperCase()}
                  </span>
                  <h3 className="text-lg font-light mb-2">
                    {portfolioProjects[2].title}
                  </h3>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium">View project</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 - Wide */}
          <div className="lg:col-span-3 group cursor-pointer animate-on-scroll">
            <div className="relative aspect-[21/9] overflow-hidden bg-muted">
              <img 
                src={portfolioProjects[3].image} 
                alt={portfolioProjects[3].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-opacity duration-300 group-hover:bg-foreground/10"></div>
              
              {/* Number */}
              <div className="absolute top-8 left-8">
                <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">04</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-8 left-8">
                <div className="text-background">
                  <span className="text-sm font-light tracking-widest opacity-80 block mb-2">
                    {portfolioProjects[3].category.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-light mb-4">
                    {portfolioProjects[3].title}
                  </h3>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">View project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
            <span className="text-sm font-medium tracking-wide">VER TODOS OS PROJETOS</span>
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
    </section>
  );
};

export default InteractivePortfolio;