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
      <div className="geometric-diamond w-32 h-32 top-20 right-20 opacity-30 animate-bounce"></div>
      <div className="geometric-diamond w-24 h-24 top-40 right-1/3 opacity-20 animate-pulse"></div>
      <div className="geometric-diamond w-16 h-16 bottom-32 left-20 opacity-25 animate-spin-slow"></div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-0.5 h-32 bg-muted rotate-45 opacity-30"></div>
        <div className="absolute bottom-40 right-32 w-0.5 h-24 bg-muted rotate-12 opacity-20"></div>
      </div>

      <div className="w-full px-8 lg:px-16">
        <div className="animate-on-scroll">
          <h1 className="text-giant text-foreground leading-none">
            Gráfica digital criativa,
            <br />
            <span className="relative inline-block">
              localizada no
              {/* Geometric overlay on text */}
              <div className="absolute -top-4 -right-8 w-20 h-20 bg-primary opacity-80 transform rotate-45"></div>
              <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-primary opacity-60 transform rotate-12"></div>
            </span>
            <span className="text-primary"> coração</span>
            <br />
            do Brasil.
          </h1>
        </div>
      </div>

    </section>
  );
};

export default ModernHero;