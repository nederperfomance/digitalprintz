const portfolioProjects = [{
  id: 1,
  title: "Impressão do Book",
  category: "RESERVA",
  image: "/lovable-uploads/b663e2d4-1b7f-4f59-aea8-15f072c9bbf0.png"
}, {
  id: 2,
  title: "Sacolas e Material Promocional",
  category: "FARM RIO + ADIDAS",
  image: "/lovable-uploads/3c6ffee0-5eaa-4384-b4c8-b26c4d0c0bbf.png"
}, {
  id: 3,
  title: "Packaging Inovador",
  category: "PACKAGING",
  image: "/lovable-uploads/5138c174-53f7-402d-bf6b-eb22fd5d8d41.png"
}];
const InteractivePortfolio = () => {
  return <section className="py-32 bg-background">
      <div className="container mx-auto px-8">
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

        {/* Asymmetric Grid - 1 Large + 2 Small */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl">
          {/* Large Project - Left Side (2/3 width) */}
          <div className="lg:col-span-2 group cursor-pointer animate-on-scroll">
            <div className="relative aspect-[3/2] overflow-hidden bg-muted">
              <img src={portfolioProjects[0].image} alt={portfolioProjects[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Number */}
              <div className="absolute top-8 left-8">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-white">01</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white">
                  <span className="text-sm font-light tracking-widest opacity-80 block mb-2">
                    {portfolioProjects[0].category}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-light mb-4">
                    {portfolioProjects[0].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 2 Small Projects Stacked (1/3 width each) */}
          <div className="flex flex-col gap-4">
            {/* Project 2 */}
            <div className="group cursor-pointer animate-on-scroll">
              <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                <img src={portfolioProjects[1].image} alt={portfolioProjects[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Number */}
                <div className="absolute top-6 left-6">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">02</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white">
                    <span className="text-xs font-light tracking-widest opacity-80 block mb-1">
                      {portfolioProjects[1].category}
                    </span>
                    <h3 className="text-lg font-light mb-2">
                      {portfolioProjects[1].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer animate-on-scroll">
              <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                <img src={portfolioProjects[2].image} alt={portfolioProjects[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Number */}
                <div className="absolute top-6 left-6">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">03</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white">
                    <span className="text-xs font-light tracking-widest opacity-80 block mb-1">
                      {portfolioProjects[2].category}
                    </span>
                    <h3 className="text-lg font-light mb-2">
                      {portfolioProjects[2].title}
                    </h3>
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
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>;
};
export default InteractivePortfolio;