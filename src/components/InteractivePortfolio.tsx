import { useState } from "react";

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
  },
  {
    id: 5,
    title: "Material Corporativo",
    category: "Corporativo", 
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }
];

const InteractivePortfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  return (
    <section className="w-full bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Image Side */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 transition-all duration-700 ease-in-out">
            <div 
              className="w-full h-full bg-cover bg-center transition-all duration-700"
              style={{
                backgroundImage: `url('${portfolioProjects[activeProject].image}')`
              }}
            >
              <div className="absolute inset-0 bg-foreground/20"></div>
            </div>
          </div>
          
          {/* Project Info Overlay */}
          <div className="absolute bottom-8 left-8 text-background z-10">
            <div className="animate-on-scroll" key={activeProject}>
              <span className="text-sm font-light tracking-widest opacity-80 block mb-2">
                {portfolioProjects[activeProject].category.toUpperCase()}
              </span>
              <h3 className="text-4xl font-light">
                {portfolioProjects[activeProject].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Projects List Side */}
        <div className="bg-background flex items-center">
          <div className="w-full px-8 lg:px-16 py-16">
            <div className="mb-16 animate-on-scroll">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-sm font-light text-muted-foreground tracking-widest">
                  PORTFÓLIO SELECIONADO
                </span>
              </div>
              
              <h2 className="text-5xl font-light text-foreground leading-tight">
                Projetos que 
                <br />
                <span className="text-primary">Transformam</span>
              </h2>
            </div>

            <div className="space-y-6">
              {portfolioProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`cursor-pointer transition-all duration-500 pb-6 border-b border-border/30 group ${
                    activeProject === index 
                      ? 'opacity-100' 
                      : 'opacity-40 hover:opacity-80'
                  }`}
                  onMouseEnter={() => setActiveProject(index)}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-baseline space-x-6">
                        <span className={`text-2xl font-light transition-colors duration-300 ${
                          activeProject === index 
                            ? 'text-primary' 
                            : 'text-muted-foreground/30'
                        }`}>
                          0{index + 1}
                        </span>
                        
                        <div>
                          <h4 className={`text-2xl font-light transition-colors duration-300 ${
                            activeProject === index 
                              ? 'text-foreground' 
                              : 'text-muted-foreground'
                          }`}>
                            {project.title}
                          </h4>
                          <span className={`text-sm tracking-wide transition-colors duration-300 ${
                            activeProject === index 
                              ? 'text-primary' 
                              : 'text-muted-foreground/60'
                          }`}>
                            {project.category.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`w-4 h-4 transition-all duration-300 ${
                      activeProject === index 
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
            
            <div className="mt-12">
              <div className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
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
        </div>
      </div>
    </section>
  );
};

export default InteractivePortfolio;