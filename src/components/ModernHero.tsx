import { useEffect, useRef } from "react";

const ModernHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
      {/* Geometric shapes */}
      <div className="geometric-diamond w-32 h-32 top-20 right-20 opacity-30"></div>
      <div className="geometric-diamond w-24 h-24 top-40 right-1/3 opacity-20"></div>
      <div className="geometric-diamond w-16 h-16 bottom-32 left-20 opacity-25"></div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-0.5 h-32 bg-muted rotate-45 opacity-30"></div>
        <div className="absolute bottom-40 right-32 w-0.5 h-24 bg-muted rotate-12 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 text-left w-full">
        <div className="animate-on-scroll">
          <div className="max-w-5xl">
            <h1 className="text-giant text-foreground mb-8 relative">
              Uma gráfica não 
              <br />
              <span className="relative inline-block">
                convencional
                {/* Geometric overlay on text */}
                <div className="absolute -top-4 -right-8 w-20 h-20 bg-primary opacity-80 transform rotate-45"></div>
                <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-primary opacity-60 transform rotate-12"></div>
              </span>
              <span className="text-primary">.</span>
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-xl font-light text-muted-foreground leading-relaxed">
                de criação sem barreiras
              </p>
            </div>

            {/* Minimal CTA */}
            <div className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
              <span className="text-sm font-medium tracking-wide">CONHEÇA NOSSO TRABALHO</span>
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

      {/* Innovation text in corner */}
      <div className="absolute bottom-20 left-8 rotate-90 origin-left">
        <span className="text-xs font-light text-muted-foreground tracking-widest">
          INNOVATION + CREATIVITY
        </span>
      </div>
    </section>
  );
};

export default ModernHero;