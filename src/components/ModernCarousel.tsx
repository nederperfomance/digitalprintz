import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const carouselProjects = [{
  id: "01",
  title: "Identidade Visual Corporativa",
  subtitle: "Rebranding completo para startup de tecnologia",
  category: "Branding & Design",
  year: "2024",
  description: "Desenvolvimento de identidade visual moderna e impactante, incluindo logo, papelaria corporativa e manual de marca para empresa do setor tecnológico.",
  image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  tags: ["Design", "Branding", "Corporativo"]
}, {
  id: "02",
  title: "Catálogo Premium Fashion",
  subtitle: "Editorial de alta qualidade para marca de moda",
  category: "Editorial & Impressão",
  year: "2024",
  description: "Projeto editorial sofisticado com impressão especial, papel importado e acabamentos premium para marca de moda internacional.",
  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  tags: ["Editorial", "Moda", "Premium"]
}, {
  id: "03",
  title: "Packaging Sustentável",
  subtitle: "Embalagens eco-friendly para cosméticos",
  category: "Packaging Design",
  year: "2023",
  description: "Criação de linha completa de embalagens sustentáveis com impressão eco-friendly para marca de cosméticos naturais.",
  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  tags: ["Packaging", "Sustentável", "Cosmético"]
}, {
  id: "04",
  title: "Campanha Visual Corporativa",
  subtitle: "Material para evento internacional",
  category: "Grande Formato",
  year: "2023",
  description: "Desenvolvimento completo de material para evento corporativo, incluindo sinalização, backdrops e impressões de grande formato.",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  tags: ["Evento", "Corporativo", "Grande Formato"]
}];
const ModernCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return <section className="relative h-screen overflow-hidden bg-background">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {carouselProjects.map((project, index) => <CarouselItem key={project.id} className="relative h-full">
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading={index === 0 ? "eager" : "lazy"} />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-[40px]">
                      {/* Left Content */}
                      <div className="space-y-8 animate-fade-in">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-0.5 bg-primary"></div>
                          <span className="text-sm font-light text-white/80 tracking-widest">
                            {project.category}
                          </span>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <span className="text-8xl font-light text-white/20">
                              {project.id}
                            </span>
                            <span className="text-sm text-white/60 font-light">
                              {project.year}
                            </span>
                          </div>
                          
                          <h2 className="text-6xl font-light text-white leading-tight">
                            {project.title}
                          </h2>
                          
                          <p className="text-xl font-light text-white/80">
                            {project.subtitle}
                          </p>
                        </div>

                        <p className="text-lg font-light text-white/70 leading-relaxed max-w-lg">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag, idx) => <span key={idx} className="px-4 py-2 text-xs font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 tracking-wide">
                              {tag}
                            </span>)}
                        </div>

                        <div className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
                          <span className="text-sm font-medium tracking-wide">VER PROJETO COMPLETO</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Counter */}
                <div className="absolute bottom-8 right-8 z-10">
                  <div className="flex items-center space-x-4 text-white/80">
                    <span className="text-sm font-light">
                      {String(index + 1).padStart(2, '0')} / {String(carouselProjects.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>)}
        </CarouselContent>

        {/* Custom Navigation */}
        <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-all duration-300" />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-all duration-300" />

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-8 flex space-x-2">
          {carouselProjects.map((_, index) => <button key={index} className={`w-12 h-0.5 transition-all duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'}`} onClick={() => setCurrentSlide(index)} />)}
        </div>
      </Carousel>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/60">
        <span className="text-xs font-light tracking-widest rotate-90 origin-center whitespace-nowrap">
          SCROLL
        </span>
        <div className="w-px h-12 bg-white/30"></div>
      </div>
    </section>;
};
export default ModernCarousel;