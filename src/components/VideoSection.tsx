import backgroundImg from '@/assets/video-background.jpg';

const VideoSection = () => {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div 
          className="relative flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImg}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Side */}
        <div className="bg-background flex items-center">
          <div className="w-full px-8 lg:px-16 py-16">
            <div className="animate-on-scroll">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-sm font-light text-muted-foreground tracking-widest">
                  NOSSO PROCESSO
                </span>
              </div>
              
              <h3 className="text-5xl font-light text-foreground mb-8 leading-tight">
                Do conceito à
                <br />
                <span className="text-primary">realização</span>
              </h3>
              
              <p className="text-xl font-light text-muted-foreground leading-relaxed mb-8">
                Combinamos criatividade e tecnologia para transformar suas ideias em 
                soluções gráficas excepcionais. Cada projeto é desenvolvido com 
                atenção aos detalhes e foco na qualidade.
              </p>
              
              <p className="text-lg font-light text-muted-foreground leading-relaxed mb-12">
                Nossa equipe especializada trabalha em cada etapa, desde o briefing 
                inicial até a entrega final, garantindo que sua visão se torne realidade 
                com a máxima qualidade e precisão.
              </p>
              
              <div className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
                <span className="text-sm font-medium tracking-wide">CONHEÇA NOSSA METODOLOGIA</span>
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

export default VideoSection;